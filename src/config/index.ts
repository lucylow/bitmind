import dotenv from 'dotenv';
import { z } from 'zod';

dotenv.config();

const configSchema = z.object({
  // Server
  nodeEnv: z.enum(['development', 'production', 'test']).default('development'),
  port: z.number().default(3001),
  cors: z.object({
    origins: z.array(z.string()).default(['http://localhost:3000'])
  }),

  // Database
  database: z.object({
    url: z.string().url(),
    pool: z.object({
      min: z.number().default(2),
      max: z.number().default(10)
    })
  }),

  // Blockchain
  stacks: z.object({
    network: z.enum(['mainnet', 'testnet']).default('testnet'),
    nodeUrl: z.string().url(),
    deployerPrivateKey: z.string().min(1),
    contractAddress: z.string().optional()
  }),

  // AI Services
  ai: z.object({
    openai: z.object({
      apiKey: z.string().min(1),
      model: z.string().default('gpt-4'),
      temperature: z.number().min(0).max(1).default(0.1),
      maxTokens: z.number().default(2000)
    }),
    anthropic: z.object({
      apiKey: z.string().optional(),
      model: z.string().default('claude-3-sonnet-20240229')
    })
  }),

  // Storage
  ipfs: z.object({
    pinata: z.object({
      apiKey: z.string().min(1),
      secretKey: z.string().min(1),
      gateway: z.string().url()
    })
  }),

  // Security
  security: z.object({
    jwtSecret: z.string().min(32),
    encryptionKey: z.string().length(32),
    bcryptRounds: z.number().min(10).max(14).default(12)
  }),

  // Redis
  redis: z.object({
    url: z.string().url().optional(),
    host: z.string().default('localhost'),
    port: z.number().default(6379)
  })
});

export type Config = z.infer<typeof configSchema>;

export const config: Config = configSchema.parse({
  nodeEnv: process.env.NODE_ENV,
  port: parseInt(process.env.PORT || '3001'),
  cors: {
    origins: process.env.CORS_ORIGINS?.split(',') || ['http://localhost:3000']
  },
  database: {
    url: process.env.DATABASE_URL,
    pool: {
      min: parseInt(process.env.DB_POOL_MIN || '2'),
      max: parseInt(process.env.DB_POOL_MAX || '10')
    }
  },
  stacks: {
    network: process.env.STACKS_NETWORK as any,
    nodeUrl: process.env.STACKS_NODE_URL,
    deployerPrivateKey: process.env.STACKS_DEPLOYER_PRIVATE_KEY,
    contractAddress: process.env.STACKS_CONTRACT_ADDRESS
  },
  ai: {
    openai: {
      apiKey: process.env.OPENAI_API_KEY || '',
      model: process.env.OPENAI_MODEL || 'gpt-4',
      temperature: parseFloat(process.env.OPENAI_TEMPERATURE || '0.1'),
      maxTokens: parseInt(process.env.OPENAI_MAX_TOKENS || '2000')
    },
    anthropic: {
      apiKey: process.env.ANTHROPIC_API_KEY,
      model: process.env.ANTHROPIC_MODEL || 'claude-3-sonnet-20240229'
    }
  },
  ipfs: {
    pinata: {
      apiKey: process.env.PINATA_API_KEY || '',
      secretKey: process.env.PINATA_SECRET_KEY || '',
      gateway: process.env.PINATA_GATEWAY || 'https://gateway.pinata.cloud'
    }
  },
  security: {
    jwtSecret: process.env.JWT_SECRET || '',
    encryptionKey: process.env.ENCRYPTION_KEY || '',
    bcryptRounds: parseInt(process.env.BCRYPT_ROUNDS || '12')
  },
  redis: {
    url: process.env.REDIS_URL,
    host: process.env.REDIS_HOST || 'localhost',
    port: parseInt(process.env.REDIS_PORT || '6379')
  }
});

