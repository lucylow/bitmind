import axios from 'axios';
import { Logger } from '../utils/logger';
import { PrismaClient } from '@prisma/client';
export class WebhookService {
    constructor() {
        Object.defineProperty(this, "logger", {
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
        this.logger = new Logger('WebhookService');
        this.prisma = new PrismaClient();
    }
    async triggerInvoiceUpdate(invoiceId, eventType, additionalData) {
        try {
            const invoice = await this.prisma.invoice.findUnique({
                where: { id: invoiceId },
                include: {
                    milestones: true,
                    disputes: true
                }
            });
            if (!invoice) {
                this.logger.warn('Invoice not found for webhook trigger', { invoiceId });
                return;
            }
            const payload = {
                event: eventType,
                invoiceId,
                timestamp: new Date().toISOString(),
                data: {
                    invoice,
                    ...additionalData
                }
            };
            // Here you would typically fetch registered webhook URLs from database
            // For now, we'll just log the webhook trigger
            this.logger.info('Webhook triggered', {
                invoiceId,
                eventType,
                payload: JSON.stringify(payload).substring(0, 200)
            });
            // In production, you would send to registered webhook endpoints:
            // await this.sendWebhook(webhookUrl, payload);
        }
        catch (error) {
            this.logger.error('Failed to trigger webhook', { error, invoiceId, eventType });
        }
    }
    async sendWebhook(url, payload) {
        try {
            await axios.post(url, payload, {
                timeout: 5000,
                headers: {
                    'Content-Type': 'application/json',
                    'X-Webhook-Event': payload.event
                }
            });
            this.logger.info('Webhook sent successfully', { url, event: payload.event });
        }
        catch (error) {
            this.logger.error('Failed to send webhook', { error, url, event: payload.event });
        }
    }
}
