import { makeContractDeploy, makeContractCall, broadcastTransaction, StacksTestnet, StacksMainnet, uintCV } from '@stacks/transactions';
import { StacksMocknet } from '@stacks/network';
import { config } from '../config';
import { Logger } from '../utils/logger';
import { RedisService } from './redis';
import { PrismaClient } from '@prisma/client';
export class StacksService {
    constructor() {
        Object.defineProperty(this, "network", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "prisma", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "redis", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "logger", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.prisma = new PrismaClient();
        this.redis = new RedisService();
        this.logger = new Logger('StacksService');
        this.network = this.initializeNetwork();
    }
    async initialize() {
        this.logger.info('Initializing Stacks service', {
            network: config.stacks.network,
            nodeUrl: config.stacks.nodeUrl
        });
    }
    initializeNetwork() {
        const networkConfig = {
            url: config.stacks.nodeUrl,
            coreApiUrl: `${config.stacks.nodeUrl}/v2`
        };
        switch (config.stacks.network) {
            case 'mainnet':
                return new StacksMainnet(networkConfig);
            case 'testnet':
                return new StacksTestnet(networkConfig);
            default:
                return new StacksMocknet(networkConfig);
        }
    }
    async deployInvoiceContract(contractCode, invoiceData, deployerPrivateKey) {
        const contractName = `invoice-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
        try {
            this.logger.info('Deploying invoice contract', { contractName });
            // Estimate deployment cost
            const estimatedFee = await this.estimateDeploymentFee(contractCode);
            const transaction = await makeContractDeploy({
                contractName,
                codeBody: contractCode,
                senderKey: deployerPrivateKey,
                network: this.network,
                anchorMode: 1, // onChainOnly
                fee: estimatedFee,
                nonce: await this.getNonce(deployerPrivateKey),
                postConditionMode: 1 // Allow
            });
            this.logger.info('Broadcasting contract deployment', {
                contractName,
                fee: estimatedFee
            });
            const result = await broadcastTransaction(transaction, this.network);
            if ('error' in result) {
                throw new Error(`Contract deployment failed: ${result.error}`);
            }
            const contractAddress = this.deriveContractAddress(deployerPrivateKey);
            const deployment = {
                contractAddress,
                contractName,
                transactionId: result.txid
            };
            // Store deployment in database
            await this.prisma.invoiceEvent.create({
                data: {
                    invoiceId: invoiceData.invoiceId,
                    type: 'CONTRACT_DEPLOYED',
                    data: deployment,
                    triggeredBy: deployerPrivateKey, // In practice, use public key
                    transactionHash: result.txid
                }
            });
            this.logger.info('Contract deployed successfully', deployment);
            return deployment;
        }
        catch (error) {
            this.logger.error('Contract deployment failed', { error, contractName });
            throw error;
        }
    }
    async lockFunds(contractAddress, contractName, amount, userPrivateKey) {
        try {
            this.logger.info('Locking funds in escrow', {
                contractAddress,
                contractName,
                amount: amount.toString()
            });
            const transaction = await makeContractCall({
                contractAddress,
                contractName,
                functionName: 'lock-funds',
                functionArgs: [uintCV(amount)],
                senderKey: userPrivateKey,
                network: this.network,
                anchorMode: 1,
                fee: 1000, // Adjust based on network conditions
                nonce: await this.getNonce(userPrivateKey),
                postConditionMode: 1
            });
            const result = await broadcastTransaction(transaction, this.network);
            if ('error' in result) {
                throw new Error(`Fund locking failed: ${result.error}`);
            }
            this.logger.info('Funds locked successfully', {
                transactionId: result.txid,
                amount: amount.toString()
            });
            return {
                success: true,
                transactionId: result.txid
            };
        }
        catch (error) {
            this.logger.error('Fund locking failed', { error, contractAddress, amount });
            return {
                success: false,
                error: error.message
            };
        }
    }
    async releaseMilestone(contractAddress, contractName, milestoneId, userPrivateKey) {
        try {
            this.logger.info('Releasing milestone payment', {
                contractAddress,
                contractName,
                milestoneId
            });
            const transaction = await makeContractCall({
                contractAddress,
                contractName,
                functionName: 'release-milestone',
                functionArgs: [uintCV(milestoneId)],
                senderKey: userPrivateKey,
                network: this.network,
                anchorMode: 1,
                fee: 1000,
                nonce: await this.getNonce(userPrivateKey),
                postConditionMode: 1
            });
            const result = await broadcastTransaction(transaction, this.network);
            if ('error' in result) {
                throw new Error(`Milestone release failed: ${result.error}`);
            }
            this.logger.info('Milestone released successfully', {
                transactionId: result.txid,
                milestoneId
            });
            return {
                success: true,
                transactionId: result.txid
            };
        }
        catch (error) {
            this.logger.error('Milestone release failed', { error, contractAddress, milestoneId });
            return {
                success: false,
                error: error.message
            };
        }
    }
    async getContractState(contractAddress, contractName) {
        try {
            const url = `${this.network.coreApiUrl}/contracts/${contractAddress}/${contractName}`;
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Failed to fetch contract state: ${response.statusText}`);
            }
            return await response.json();
        }
        catch (error) {
            this.logger.error('Failed to get contract state', { error, contractAddress, contractName });
            throw error;
        }
    }
    async readContractVariable(contractAddress, contractName, variableName) {
        try {
            const url = `${this.network.coreApiUrl}/contracts/${contractAddress}/${contractName}/${variableName}`;
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Failed to read contract variable: ${response.statusText}`);
            }
            const data = await response.json();
            return data;
        }
        catch (error) {
            this.logger.error('Failed to read contract variable', { error, contractAddress, variableName });
            throw error;
        }
    }
    async estimateDeploymentFee(contractCode) {
        // Simple fee estimation based on contract size
        const baseFee = 1000;
        const sizeFee = Math.ceil(contractCode.length / 100) * 100;
        return baseFee + sizeFee;
    }
    async getNonce(privateKey) {
        // In practice, derive address from private key and fetch nonce from blockchain
        // For now, return a simple implementation
        const cacheKey = `nonce:${privateKey}`;
        const cachedNonce = await this.redis.get(cacheKey);
        if (cachedNonce) {
            return parseInt(cachedNonce) + 1;
        }
        // Fetch from blockchain (simplified)
        return Date.now() % 1000;
    }
    deriveContractAddress(privateKey) {
        // In practice, use stacks.js to derive address from private key
        // This is a simplified implementation
        return `ST${Math.random().toString(36).substr(2, 20)}`;
    }
    async waitForTransactionConfirmation(transactionId, timeout = 60000) {
        const startTime = Date.now();
        while (Date.now() - startTime < timeout) {
            try {
                const url = `${this.network.coreApiUrl}/tx/${transactionId}`;
                const response = await fetch(url);
                if (response.ok) {
                    const tx = await response.json();
                    if (tx.tx_status === 'success' && tx.block_height) {
                        return {
                            confirmed: true,
                            blockHeight: tx.block_height
                        };
                    }
                    else if (tx.tx_status === 'abort_by_response' || tx.tx_status === 'abort_by_post_condition') {
                        throw new Error(`Transaction failed with status: ${tx.tx_status}`);
                    }
                }
                // Wait before retrying
                await new Promise(resolve => setTimeout(resolve, 2000));
            }
            catch (error) {
                this.logger.error('Error checking transaction status', { error, transactionId });
            }
        }
        throw new Error(`Transaction confirmation timeout after ${timeout}ms`);
    }
}
