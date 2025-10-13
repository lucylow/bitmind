# 🧠 BitMind Smart Invoice System

> **AI-powered Bitcoin-native invoicing for DAOs on the Stacks blockchain**

Built for hackathons and production use, BitMind combines natural language processing with secure Clarity smart contracts to create a seamless invoice escrow system that integrates with Bitcoin through Stacks.

---

## 🌟 Features

### Core Capabilities
- **🤖 AI-Powered Invoice Parsing** - Convert free-form invoice text into structured on-chain data
- **🔐 Secure Escrow** - Clarity smart contracts with built-in security guarantees
- **₿ Bitcoin Integration** - Native sBTC support for Bitcoin-pegged transactions
- **🏛️ DAO-Optimized** - Multi-party treasury funding and milestone-based payments
- **⚖️ Dispute Resolution** - Built-in arbitration system for contested invoices
- **📊 Real-time Dashboard** - Track invoices, milestones, and escrow balances

### Why Clarity?
| Security Feature | Benefit for Smart Invoices |
|-----------------|---------------------------|
| **No Reentrancy** | Prevents recursive withdrawal attacks that could drain escrow funds |
| **Decidable Language** | Know exact runtime cost beforehand; transactions can't run out of gas mid-execution |
| **Checked Responses** | Forces proper error handling; token transfers can't fail silently |

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- [Clarinet](https://github.com/hirosystems/clarinet) for Clarity development
- [Hiro Wallet](https://wallet.hiro.so/) for testnet/mainnet transactions

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd bitmind-smart-invoice-demo

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Smart Contract Development

```bash
# Check contracts for errors
npm run contracts:check

# Run contract tests
npm run contracts:test

# Open Clarinet console for interactive testing
npm run contracts:console

# Deploy to testnet
npm run deploy:testnet
```

---

## 📋 Project Structure

```
bitmind-smart-invoice-demo/
├── contracts/              # Clarity smart contracts
│   ├── escrow.clar        # Main escrow contract
│   └── mock-token.clar    # Test SIP-010 token
├── tests/                 # Contract test suite
│   └── escrow_test.ts     # End-to-end escrow tests
├── src/
│   ├── components/        # React components
│   │   └── SmartInvoiceDemo.tsx  # Main demo UI
│   ├── lib/              # Utility libraries
│   │   ├── stacksIntegration.ts  # Stacks.js functions
│   │   └── aiInvoiceParser.ts    # AI parsing logic
│   ├── pages/            # Route pages
│   │   ├── Index.tsx     # Dashboard
│   │   └── Demo.tsx      # AI demo page
│   └── ...
├── scripts/              # Helper scripts
│   └── ai-clarity-mapper.js  # AI output → Clarity args
├── Clarinet.toml         # Clarinet configuration
└── package.json
```

---

## 🎯 How It Works

### 1. AI Invoice Parsing

The system uses LLMs (OpenAI GPT-4 or Anthropic Claude) to extract structured data from natural language invoice text.

**Example Input:**
```
Invoice #2024-001
To: alice.stacks
From: WebGuild DAO
Amount: 0.05 sBTC for website redesign
Milestone: Deliver final site (due 2025-12-31)
Arbiter: arbiter.stacks
```

**Structured Output:**
```json
{
  "invoice_id": 2024001,
  "payee": "SP2J6ZY48GV1EZ5V2V5RB9MP66SW86PYKKNRV9EJ7",
  "amount": 5000000,
  "token_contract": "SP000000000000000000002Q6VF78.sbtc-token",
  "arbiter": "SP3FBR2AGK5H9QBDH3EEN6DF8EK8JY7RX8QJ5SVTE",
  "deadline": "2025-12-31",
  "milestone_description": "Deliver final site"
}
```

### 2. Smart Contract Deployment

The parsed data is used to create an invoice on-chain via the `create-invoice` function:

```clarity
(contract-call? .escrow create-invoice
  u2024001
  'SP2J6ZY48GV1EZ5V2V5RB9MP66SW86PYKKNRV9EJ7
  u5000000
  'SP000000000000000000002Q6VF78.sbtc-token
  'SP3FBR2AGK5H9QBDH3EEN6DF8EK8JY7RX8QJ5SVTE
  u99999999)
```

### 3. Escrow Flow

```
┌─────────────┐
│ 1. CREATE   │  Payer creates invoice on-chain
└──────┬──────┘
       ↓
┌─────────────┐
│ 2. DEPOSIT  │  Payer transfers sBTC to contract
└──────┬──────┘
       ↓
┌─────────────┐
│ 3. ACK      │  Contract verifies balance & marks FUNDED
└──────┬──────┘
       ↓
┌─────────────┐
│ 4. WORK     │  Contractor completes milestone
└──────┬──────┘
       ↓
┌─────────────┐
│ 5. RELEASE  │  Payer/arbiter releases funds to payee
└─────────────┘
```

---

## 🔧 API Reference

### Front-End Integration (Stacks.js)

#### Connect Wallet
```typescript
import { connectWallet } from '@/lib/stacksIntegration';

connectWallet(
  () => console.log('Connected'),
  () => console.log('Cancelled')
);
```

#### Create Invoice
```typescript
import { createInvoice } from '@/lib/stacksIntegration';

await createInvoice(
  1,                    // invoice ID
  'SP2J6ZY...',        // payee address
  5000000,             // amount (satoshis)
  'SP000...sbtc-token', // token contract
  'SP3FB...arbiter',   // arbiter address
  99999999,            // deadline (block height)
  userSession
);
```

#### Parse Invoice with AI
```typescript
import { parseInvoiceWithOpenAI } from '@/lib/aiInvoiceParser';

const invoiceData = await parseInvoiceWithOpenAI(
  invoiceText,
  'your-openai-api-key'
);
```

### AI → Clarity Mapper (CLI)

```bash
# From JSON file
node scripts/ai-clarity-mapper.js invoice.json

# From stdin
echo '{"invoice_id":1,...}' | node scripts/ai-clarity-mapper.js --stdin

# Generate Clarity function call
node scripts/ai-clarity-mapper.js invoice.json --format clarity

# Generate JavaScript array
node scripts/ai-clarity-mapper.js invoice.json --format js
```

---

## 🧪 Testing

### Run Contract Tests
```bash
npm run contracts:test
```

The test suite covers:
- ✅ End-to-end escrow flow (create → fund → release)
- ✅ Refund functionality
- ✅ Unauthorized access prevention
- ✅ Token balance verification

### Manual Testing in Console
```bash
npm run contracts:console
```

```clarity
;; Mint test tokens
(contract-call? .mock-token mint u5000000 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM)

;; Create invoice
(contract-call? .escrow create-invoice
  u1
  'ST2JHG361ZXG51QTKY2NQCVBPPRRE2KZB1HR05NNC
  u5000000
  'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.mock-token
  'ST2NEB84ASENDXKYGJPQW86YXQCEFEX2ZQPG87ND
  u99999999)

;; Transfer tokens to escrow
(contract-call? .mock-token transfer
  u5000000
  'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM
  'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.escrow)

;; Acknowledge deposit
(contract-call? .escrow ack-deposit u1)

;; Release funds
(contract-call? .escrow release-funds u1)
```

---

## 📚 AI Prompts

### System Prompt (for LLM)
```
You are an assistant that extracts structured invoice variables from free-form 
invoice text for an on-chain Clarity escrow contract. The output must be STRICT 
JSON only (no explanation, no prose). Validate and normalize dates to ISO 8601 
(YYYY-MM-DD). Normalize monetary amounts to integers (in token base units). If 
currency symbol is BTC or sBTC assume 8 decimal places (multiply BTC value by 
1e8 and output integer). For other currencies, assume 2 decimals and multiply 
by 100. If a field is missing, set it to null. Fields required: invoice_id 
(uint), payee (principal string), amount (integer in token base units), 
token_contract (principal string or null), arbiter (principal string or null), 
deadline (ISO date or null), milestone_description (string), payer (principal 
or null).
```

### Example User Prompt
See `src/lib/aiInvoiceParser.ts` for the complete prompt template with examples.

---

## 🛠️ Configuration

### Update Contract Addresses
Edit `src/lib/stacksIntegration.ts`:

```typescript
export const CONTRACT_ADDRESS = 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM'; // Your deployed contract
export const ESCROW_CONTRACT = 'escrow';
export const TOKEN_CONTRACT = 'mock-token'; // or 'sbtc-token' for mainnet
```

### Environment Variables
Create `.env.local`:

```bash
VITE_OPENAI_API_KEY=your_openai_key
VITE_ANTHROPIC_API_KEY=your_anthropic_key
VITE_NETWORK=testnet  # or mainnet
```

---

## 🎨 Demo Checklist

Perfect for hackathon presentations:

| Step | What to Show | Proof |
|------|-------------|-------|
| 1️⃣ AI Parse | LLM extracts invoice data from text | JSON output in console |
| 2️⃣ Deploy | `create-invoice` transaction | Stacks Explorer link |
| 3️⃣ Fund | Token transfer to escrow address | Transaction hash |
| 4️⃣ Acknowledge | Status flips to `FUNDED` | Contract read output |
| 5️⃣ Release | Funds move to payee | Final token balances |
| 6️⃣ UI | Smooth step-by-step workflow | Live demo |

---

## 🔗 Resources

### Stacks & Clarity
- [Clarity Language Reference](https://docs.stacks.co/clarity/)
- [Stacks.js Documentation](https://stacks.js.org/)
- [Hiro Developer Tools](https://docs.hiro.so/)
- [SIP-010 Fungible Token Standard](https://github.com/stacksgov/sips/blob/main/sips/sip-010/sip-010-fungible-token-standard.md)

### sBTC
- [sBTC Documentation](https://stacks-network.github.io/sbtc-docs/)
- [sBTC Whitepaper](https://stacks.org/sbtc)

### Community
- [Stacks Discord](https://discord.gg/stacks)
- [Clarity Universe](https://clarity-lang.org/)
- [Stacks Forum](https://forum.stacks.org/)

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

## 📄 License

MIT License - see LICENSE file for details

---

## 🏆 Built For Hackathons

This project is optimized for rapid iteration and impressive demos:
- ✅ Complete end-to-end flow in < 5 minutes
- ✅ AI integration shows innovation
- ✅ Bitcoin/Stacks integration demonstrates technical depth
- ✅ Clean, modern UI for presentations
- ✅ Comprehensive documentation for judges

**Good luck at your hackathon! 🚀**

---

## 📞 Support

- Open an issue for bugs or feature requests
- Join the Stacks Discord for community support
- Check the docs for detailed guides

**Happy building!** 🧠⚡
