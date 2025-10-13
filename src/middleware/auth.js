import { Logger } from '../utils/logger';
const logger = new Logger('AuthMiddleware');
export const authMiddleware = async (req, res, next) => {
    try {
        // Extract wallet address from various sources
        const walletAddress = req.headers['x-wallet-address'] ||
            req.body.walletAddress ||
            req.query.walletAddress;
        if (!walletAddress) {
            res.status(401).json({
                success: false,
                error: 'Authentication required',
                message: 'Wallet address not provided'
            });
            return;
        }
        // Validate wallet address format (basic validation)
        if (!isValidStacksAddress(walletAddress)) {
            res.status(401).json({
                success: false,
                error: 'Invalid wallet address',
                message: 'Provided wallet address is not a valid Stacks address'
            });
            return;
        }
        // Attach wallet address to request
        req.walletAddress = walletAddress;
        req.body.walletAddress = walletAddress;
        logger.debug('Request authenticated', { walletAddress });
        next();
    }
    catch (error) {
        logger.error('Authentication failed', { error });
        res.status(500).json({
            success: false,
            error: 'Authentication error',
            message: error.message
        });
    }
};
function isValidStacksAddress(address) {
    // Basic Stacks address validation
    // Mainnet addresses start with SP, Testnet with ST
    return /^(SP|ST)[0-9A-Z]{38,41}$/.test(address);
}
export const optionalAuth = async (req, res, next) => {
    try {
        const walletAddress = req.headers['x-wallet-address'] ||
            req.body.walletAddress ||
            req.query.walletAddress;
        if (walletAddress && isValidStacksAddress(walletAddress)) {
            req.walletAddress = walletAddress;
            req.body.walletAddress = walletAddress;
        }
        next();
    }
    catch (error) {
        next();
    }
};
