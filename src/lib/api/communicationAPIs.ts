import axios from 'axios';

export class TwilioAPI {
	private accountSid: string;
	private authToken: string;
	private fromNumber: string;

	constructor(accountSid: string, authToken: string, fromNumber: string) {
		this.accountSid = accountSid;
		this.authToken = authToken;
		this.fromNumber = fromNumber;
	}

	async sendInvoiceNotification(to: string, invoiceId: string, amount: string) {
		try {
			// Note: In production, use Twilio SDK. This is a simplified version.
			const response = await axios.post(
				`https://api.twilio.com/2010-04-01/Accounts/${this.accountSid}/Messages.json`,
				new URLSearchParams({
					Body: `BitMind Invoice #${invoiceId} for ${amount} sBTC has been created. Check your dashboard for details.`,
					From: this.fromNumber,
					To: to,
				}),
				{
					auth: {
						username: this.accountSid,
						password: this.authToken,
					},
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded',
					},
				}
			);
			return response.data;
		} catch (error) {
			console.error('Twilio API error:', error);
			return { error: true, message: 'Failed to send SMS' };
		}
	}

	async sendPaymentAlert(to: string, amount: string) {
		try {
			const response = await axios.post(
				`https://api.twilio.com/2010-04-01/Accounts/${this.accountSid}/Messages.json`,
				new URLSearchParams({
					Body: `Payment of ${amount} sBTC has been released via BitMind escrow. Funds are now available.`,
					From: this.fromNumber,
					To: to,
				}),
				{
					auth: {
						username: this.accountSid,
						password: this.authToken,
					},
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded',
					},
				}
			);
			return response.data;
		} catch (error) {
			console.error('Twilio API error:', error);
			return { error: true, message: 'Failed to send SMS' };
		}
	}
}

export class DiscordAPI {
	private webhookUrl: string;

	constructor(webhookUrl: string) {
		this.webhookUrl = webhookUrl;
	}

	async sendDAONotification(message: string, invoiceData: any) {
		try {
			const response = await axios.post(this.webhookUrl, {
				embeds: [
					{
						title: '📋 BitMind Invoice Update',
						description: message,
						color: 0x00ff00,
						fields: [
							{ name: 'Invoice ID', value: invoiceData.id.toString(), inline: true },
							{ name: 'Amount', value: `${invoiceData.amount} sBTC`, inline: true },
							{ name: 'Status', value: invoiceData.status.toUpperCase(), inline: true },
							{ name: 'DAO', value: invoiceData.dao || 'Unknown', inline: false },
						],
						timestamp: new Date().toISOString(),
						footer: {
							text: 'BitMind AI - Smart Invoice Platform',
						},
					},
				],
			});
			return response.data;
		} catch (error) {
			console.error('Discord API error:', error);
			return { error: true, message: 'Failed to send Discord notification' };
		}
	}

	async sendInvoiceCreated(invoiceData: any) {
		return this.sendDAONotification('🆕 New invoice created on BitMind platform', invoiceData);
	}

	async sendInvoiceFunded(invoiceData: any) {
		return this.sendDAONotification('💰 Invoice has been funded', invoiceData);
	}

	async sendInvoiceReleased(invoiceData: any) {
		return this.sendDAONotification('✅ Payment released to payee', invoiceData);
	}
}

const DISCORD_WEBHOOK = import.meta.env.VITE_DISCORD_WEBHOOK_URL;
export const discordAPI = DISCORD_WEBHOOK ? new DiscordAPI(DISCORD_WEBHOOK) : null;

