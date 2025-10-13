import { createClient } from 'redis';
import { config } from '../config';
import { Logger } from '../utils/logger';
export class RedisService {
    constructor() {
        Object.defineProperty(this, "client", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
        });
        Object.defineProperty(this, "logger", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "isConnected", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        this.logger = new Logger('RedisService');
    }
    async connect() {
        try {
            this.client = createClient({
                url: config.redis.url || `redis://${config.redis.host}:${config.redis.port}`
            });
            this.client.on('error', (err) => {
                this.logger.error('Redis Client Error', { error: err });
            });
            this.client.on('connect', () => {
                this.logger.info('Redis client connected');
                this.isConnected = true;
            });
            await this.client.connect();
        }
        catch (error) {
            this.logger.warn('Redis connection failed, running without cache', { error });
            this.client = null;
        }
    }
    async get(key) {
        if (!this.client || !this.isConnected) {
            return null;
        }
        try {
            return await this.client.get(key);
        }
        catch (error) {
            this.logger.error('Redis GET failed', { error, key });
            return null;
        }
    }
    async set(key, value) {
        if (!this.client || !this.isConnected) {
            return;
        }
        try {
            await this.client.set(key, value);
        }
        catch (error) {
            this.logger.error('Redis SET failed', { error, key });
        }
    }
    async setex(key, seconds, value) {
        if (!this.client || !this.isConnected) {
            return;
        }
        try {
            await this.client.setEx(key, seconds, value);
        }
        catch (error) {
            this.logger.error('Redis SETEX failed', { error, key });
        }
    }
    async del(key) {
        if (!this.client || !this.isConnected) {
            return;
        }
        try {
            await this.client.del(key);
        }
        catch (error) {
            this.logger.error('Redis DEL failed', { error, key });
        }
    }
    async disconnect() {
        if (this.client && this.isConnected) {
            await this.client.quit();
            this.isConnected = false;
        }
    }
}
