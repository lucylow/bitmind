import { Logger } from '../utils/logger';
const logger = new Logger('RequestLogger');
export const requestLogger = (req, res, next) => {
    const start = Date.now();
    // Log request
    logger.info('Incoming request', {
        method: req.method,
        path: req.path,
        query: req.query,
        ip: req.ip,
        userAgent: req.get('user-agent')
    });
    // Log response when it finishes
    res.on('finish', () => {
        const duration = Date.now() - start;
        logger.info('Request completed', {
            method: req.method,
            path: req.path,
            statusCode: res.statusCode,
            duration: `${duration}ms`
        });
    });
    next();
};
