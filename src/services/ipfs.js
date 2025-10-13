import axios from 'axios';
import { config } from '../config';
import { Logger } from '../utils/logger';
export class IPFSService {
    constructor() {
        Object.defineProperty(this, "logger", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "pinataApiUrl", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'https://api.pinata.cloud'
        });
        this.logger = new Logger('IPFSService');
    }
    async storeJSON(data) {
        try {
            this.logger.info('Storing JSON on IPFS via Pinata', {
                dataSize: JSON.stringify(data).length
            });
            const response = await axios.post(`${this.pinataApiUrl}/pinning/pinJSONToIPFS`, data, {
                headers: {
                    'Content-Type': 'application/json',
                    'pinata_api_key': config.ipfs.pinata.apiKey,
                    'pinata_secret_api_key': config.ipfs.pinata.secretKey
                }
            });
            this.logger.info('JSON stored on IPFS successfully', {
                hash: response.data.IpfsHash,
                size: response.data.PinSize
            });
            return response.data.IpfsHash;
        }
        catch (error) {
            this.logger.error('Failed to store JSON on IPFS', { error });
            throw new Error(`IPFS storage failed: ${error.message}`);
        }
    }
    async storeFile(file, filename) {
        try {
            this.logger.info('Storing file on IPFS via Pinata', {
                filename,
                size: file.length
            });
            const formData = new FormData();
            formData.append('file', new Blob([file]), filename);
            const response = await axios.post(`${this.pinataApiUrl}/pinning/pinFileToIPFS`, formData, {
                headers: {
                    'pinata_api_key': config.ipfs.pinata.apiKey,
                    'pinata_secret_api_key': config.ipfs.pinata.secretKey
                }
            });
            this.logger.info('File stored on IPFS successfully', {
                hash: response.data.IpfsHash,
                size: response.data.PinSize
            });
            return response.data.IpfsHash;
        }
        catch (error) {
            this.logger.error('Failed to store file on IPFS', { error, filename });
            throw new Error(`IPFS file storage failed: ${error.message}`);
        }
    }
    async retrieveJSON(hash) {
        try {
            const url = `${config.ipfs.pinata.gateway}/ipfs/${hash}`;
            const response = await axios.get(url);
            return response.data;
        }
        catch (error) {
            this.logger.error('Failed to retrieve JSON from IPFS', { error, hash });
            throw new Error(`IPFS retrieval failed: ${error.message}`);
        }
    }
    getGatewayUrl(hash) {
        return `${config.ipfs.pinata.gateway}/ipfs/${hash}`;
    }
}
