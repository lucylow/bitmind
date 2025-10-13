import { Logger } from '../utils/logger';
const logger = new Logger('ErrorHandler');
export const errorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const errorCode = err.code || 'INTERNAL_SERVER_ERROR';
    logger.error('Request error', {
        error: err.message,
        statusCode,
        code: errorCode,
        path: req.path,
        method: req.method,
        stack: err.stack
    });
    res.status(statusCode).json({
        success: false,
        error: err.message || 'An unexpected error occurred',
        code: errorCode,
        details: err.details || undefined,
        ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
    });
};
export class ValidationError extends Error {
    constructor(message, details) {
        super(message);
        Object.defineProperty(this, "statusCode", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 400
        });
        Object.defineProperty(this, "code", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'VALIDATION_ERROR'
        });
        Object.defineProperty(this, "details", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.name = 'ValidationError';
        this.details = details;
    }
}
export class UnauthorizedError extends Error {
    constructor(message = 'Unauthorized access') {
        super(message);
        Object.defineProperty(this, "statusCode", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 401
        });
        Object.defineProperty(this, "code", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'UNAUTHORIZED'
        });
        this.name = 'UnauthorizedError';
    }
}
export class NotFoundError extends Error {
    constructor(message = 'Resource not found') {
        super(message);
        Object.defineProperty(this, "statusCode", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 404
        });
        Object.defineProperty(this, "code", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'NOT_FOUND'
        });
        this.name = 'NotFoundError';
    }
}
export class BlockchainError extends Error {
    constructor(message, details) {
        super(message);
        Object.defineProperty(this, "statusCode", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 502
        });
        Object.defineProperty(this, "code", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'BLOCKCHAIN_ERROR'
        });
        Object.defineProperty(this, "details", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.name = 'BlockchainError';
        this.details = details;
    }
}
