export class Logger {
    constructor(context) {
        Object.defineProperty(this, "context", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.context = context;
    }
    formatMessage(level, message, meta) {
        const timestamp = new Date().toISOString();
        const metaStr = meta ? ` | ${JSON.stringify(meta)}` : '';
        return `[${timestamp}] [${level}] [${this.context}] ${message}${metaStr}`;
    }
    info(message, meta) {
        console.log(this.formatMessage('INFO', message, meta));
    }
    warn(message, meta) {
        console.warn(this.formatMessage('WARN', message, meta));
    }
    error(message, meta) {
        console.error(this.formatMessage('ERROR', message, meta));
    }
    debug(message, meta) {
        if (process.env.NODE_ENV === 'development') {
            console.debug(this.formatMessage('DEBUG', message, meta));
        }
    }
}
