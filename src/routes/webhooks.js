import { Router } from 'express';
import { Logger } from '../utils/logger';
const router = Router();
const logger = new Logger('WebhookRoutes');
// Stacks blockchain webhooks
router.post('/stacks/transaction', async (req, res) => {
    try {
        const { txid, status, block_height } = req.body;
        logger.info('Received transaction webhook', { txid, status, block_height });
        // Process webhook data
        // Update invoice status based on transaction status
        res.json({ success: true });
    }
    catch (error) {
        logger.error('Webhook processing failed', { error });
        res.status(500).json({ success: false, error: error.message });
    }
});
// Contract event webhooks
router.post('/stacks/contract-event', async (req, res) => {
    try {
        const { contract_id, event_type, event_data } = req.body;
        logger.info('Received contract event', { contract_id, event_type });
        res.json({ success: true });
    }
    catch (error) {
        logger.error('Contract event processing failed', { error });
        res.status(500).json({ success: false, error: error.message });
    }
});
export { router as webhookRoutes };
