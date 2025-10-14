import { hiroAPI, BitMindHiroIntegration } from './hiroAPI';
import { InvoiceBlockchainMonitor } from './invoiceMonitoring';
import { SmartContractEventMonitor } from './contractEventMonitor';
import { createInvoiceSecure } from '@/lib/stacksIntegration';
import { ParsedInvoice } from '@/types/invoice';
import { UserSession } from '@stacks/connect';

export async function createInvoiceWithMonitoring(
	invoiceData: ParsedInvoice,
	userSession: UserSession
): Promise<{ txId: string; monitor: InvoiceBlockchainMonitor }> {
	// Create invoice using existing secure logic
	const txId = await createInvoiceSecure(invoiceData, userSession);

	// Set up real-time monitoring
	const contractAddress = import.meta.env.VITE_CONTRACT_ADDRESS || 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM';
	const monitor = new InvoiceBlockchainMonitor(hiroAPI, contractAddress);

	// Initialize WebSocket connection if not already connected
	if (!hiroAPI['wsClient']) {
		await hiroAPI.initializeWebSocket();
	}

	// Track this specific invoice
	await monitor.trackInvoiceLifecycle(invoiceData.invoice_id.toString(), {
		onCreated: (data) => {
			console.log('✅ Invoice created on-chain:', data);
			// Emit custom event for UI updates
			window.dispatchEvent(
				new CustomEvent('invoice-created', {
					detail: {
						invoiceId: invoiceData.invoice_id,
						txId: data.tx_id,
						timestamp: new Date(),
					},
				})
			);
		},
		onFunded: (data) => {
			console.log('💰 Invoice funded:', data);
			window.dispatchEvent(
				new CustomEvent('invoice-funded', {
					detail: {
						invoiceId: invoiceData.invoice_id,
						txId: data.tx_id,
						timestamp: new Date(),
					},
				})
			);
		},
		onReleased: (data) => {
			console.log('🎉 Payment released:', data);
			window.dispatchEvent(
				new CustomEvent('invoice-released', {
					detail: {
						invoiceId: invoiceData.invoice_id,
						txId: data.tx_id,
						timestamp: new Date(),
					},
				})
			);
		},
		onDisputed: (data) => {
			console.log('⚠️ Dispute raised:', data);
			window.dispatchEvent(
				new CustomEvent('invoice-disputed', {
					detail: {
						invoiceId: invoiceData.invoice_id,
						txId: data.tx_id,
						timestamp: new Date(),
					},
				})
			);
		},
	});

	return { txId, monitor };
}

export async function initializeContractMonitoring() {
	const contractId = `${import.meta.env.VITE_CONTRACT_ADDRESS}.${import.meta.env.VITE_ESCROW_CONTRACT || 'escrow-secure'}`;
	const eventMonitor = new SmartContractEventMonitor(hiroAPI);

	// Initialize WebSocket
	await hiroAPI.initializeWebSocket();

	// Start monitoring all escrow events
	await eventMonitor.monitorEscrowEvents(contractId);

	console.log('📡 Contract monitoring initialized for:', contractId);

	return eventMonitor;
}

export async function getInvoiceRealtimeStatus(invoiceId: string) {
	const contractAddress = import.meta.env.VITE_CONTRACT_ADDRESS || 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM';
	const monitor = new InvoiceBlockchainMonitor(hiroAPI, contractAddress);

	try {
		const history = await monitor.getInvoiceTransactionHistory(invoiceId);
		return {
			invoiceId,
			transactionCount: history.length,
			latestStatus: history[0]?.tx_status || 'unknown',
			transactions: history,
		};
	} catch (error) {
		console.error('Error fetching invoice status:', error);
		return null;
	}
}

export { hiroAPI, InvoiceBlockchainMonitor, SmartContractEventMonitor };

