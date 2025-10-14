import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle, Clock, AlertTriangle, DollarSign } from "lucide-react";
import WalletConnect from "@/components/WalletConnect";
import MilestoneTracker from "@/components/MilestoneTracker";
import DisputeResolution from "@/components/DisputeResolution";

const InvoiceDetails = () => {
  const { id } = useParams();
  const [showDispute, setShowDispute] = useState(false);

  // Mock invoice database (in real app, fetch from blockchain)
  const invoiceDatabase: Record<string, any> = {
    "2025-300": {
      id: "2025-300",
      status: "released",
      amount: "0.85 sBTC",
      usdAmount: "$52,300",
      dao: "DeFi Protocol DAO",
      description: "Smart contract audit + security review",
      issuer: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM",
      client: "SP2J6ZY48GV1EZ5V2V5RB9MP66SW86PYKKNRV9EJ7",
      arbitrator: "SP3FGQ8Z7JY9BWYZ5WM53E0M9NK7WHJF0691NZ159",
      totalAmount: 52300,
      releasedAmount: 52300,
      createdAt: "2025-01-10",
      milestones: [
        { id: 1, description: "Initial security assessment", amount: 17433, status: "released" },
        { id: 2, description: "Smart contract audit", amount: 17433, status: "released" },
        { id: 3, description: "Final security review and documentation", amount: 17434, status: "released" },
      ],
    },
    "2025-299": {
      id: "2025-299",
      status: "funded",
      amount: "0.42 sBTC",
      usdAmount: "$25,800",
      dao: "NFT Marketplace Collective",
      description: "Website redesign + mobile responsive",
      issuer: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM",
      client: "SP2J6ZY48GV1EZ5V2V5RB9MP66SW86PYKKNRV9EJ7",
      arbitrator: "SP3FGQ8Z7JY9BWYZ5WM53E0M9NK7WHJF0691NZ159",
      totalAmount: 25800,
      releasedAmount: 17200,
      createdAt: "2025-01-12",
      milestones: [
        { id: 1, description: "Design mockups and wireframes", amount: 8600, status: "released" },
        { id: 2, description: "Frontend implementation", amount: 8600, status: "released" },
        { id: 3, description: "Mobile responsive testing", amount: 8600, status: "approved" },
      ],
    },
    "2025-298": {
      id: "2025-298",
      status: "verified",
      amount: "0.65 sBTC",
      usdAmount: "$39,900",
      dao: "Web3 Education Guild",
      description: "Tutorial series + documentation",
      issuer: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM",
      client: "SP2J6ZY48GV1EZ5V2V5RB9MP66SW86PYKKNRV9EJ7",
      arbitrator: "SP3FGQ8Z7JY9BWYZ5WM53E0M9NK7WHJF0691NZ159",
      totalAmount: 39900,
      releasedAmount: 0,
      createdAt: "2025-01-13",
      milestones: [
        { id: 1, description: "Tutorial content creation", amount: 13300, status: "approved" },
        { id: 2, description: "Video production and editing", amount: 13300, status: "approved" },
        { id: 3, description: "Documentation and deployment", amount: 13300, status: "approved" },
      ],
    },
    "2025-297": {
      id: "2025-297",
      status: "created",
      amount: "0.28 sBTC",
      usdAmount: "$17,200",
      dao: "Gaming DAO Treasury",
      description: "Token economics modeling",
      issuer: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM",
      client: "SP2J6ZY48GV1EZ5V2V5RB9MP66SW86PYKKNRV9EJ7",
      arbitrator: "SP3FGQ8Z7JY9BWYZ5WM53E0M9NK7WHJF0691NZ159",
      totalAmount: 17200,
      releasedAmount: 0,
      createdAt: "2025-01-14",
      milestones: [
        { id: 1, description: "Economic model research", amount: 5733, status: "pending" },
        { id: 2, description: "Token mechanics design", amount: 5733, status: "pending" },
        { id: 3, description: "Simulation and testing", amount: 5734, status: "pending" },
      ],
    },
  };

  // Get invoice from database or use default
  const invoice = invoiceDatabase[id || ""] || {
    id: id || "INV-001",
    status: "in-progress",
    amount: "$12,500",
    usdAmount: "$12,500",
    dao: "DeFi DAO",
    description: "General service invoice",
    issuer: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM",
    client: "SP2J6ZY48GV1EZ5V2V5RB9MP66SW86PYKKNRV9EJ7",
    arbitrator: "SP3FGQ8Z7JY9BWYZ5WM53E0M9NK7WHJF0691NZ159",
    totalAmount: 12500,
    releasedAmount: 5000,
    createdAt: "2025-01-15",
    milestones: [
      { id: 1, description: "Initial design mockups", amount: 5000, status: "released" },
      { id: 2, description: "Frontend implementation", amount: 5000, status: "approved" },
      { id: 3, description: "Testing and deployment", amount: 2500, status: "pending" },
    ],
  };

  const getStatusBadge = (status: string) => {
    const statusConfig: Record<string, { variant: any; className: string }> = {
      "released": { variant: "default", className: "bg-green-600" },
      "verified": { variant: "default", className: "bg-blue-600" },
      "funded": { variant: "secondary", className: "bg-purple-600" },
      "created": { variant: "outline", className: "" },
      "completed": { variant: "default", className: "bg-green-600" },
      "in-progress": { variant: "secondary", className: "" },
      "pending": { variant: "outline", className: "" },
      "disputed": { variant: "destructive", className: "" },
    };
    const config = statusConfig[status] || { variant: "outline", className: "" };
    return (
      <Badge variant={config.variant} className={config.className}>
        {status}
      </Badge>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <Link to="/">
              <Button variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
            <WalletConnect />
          </div>
        </header>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Invoice {invoice.id}</CardTitle>
                    <CardDescription>{invoice.dao}</CardDescription>
                  </div>
                  {getStatusBadge(invoice.status)}
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {invoice.description && (
                    <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                      <p className="text-sm font-semibold text-blue-900 mb-1">Description</p>
                      <p className="text-sm text-blue-800">{invoice.description}</p>
                    </div>
                  )}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Issuer</p>
                      <p className="text-xs font-mono bg-secondary p-2 rounded">
                        {invoice.issuer}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Client</p>
                      <p className="text-xs font-mono bg-secondary p-2 rounded">
                        {invoice.client}
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Arbitrator</p>
                    <p className="text-xs font-mono bg-secondary p-2 rounded">
                      {invoice.arbitrator}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Created</p>
                    <p className="text-sm">{invoice.createdAt}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <MilestoneTracker milestones={invoice.milestones} invoiceId={invoice.id} />

            {showDispute && (
              <DisputeResolution 
                invoiceId={invoice.id} 
                onClose={() => setShowDispute(false)} 
              />
            )}
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Payment Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Total Amount</p>
                  <p className="text-2xl font-bold">{invoice.amount || `$${invoice.totalAmount.toLocaleString()}`}</p>
                  <p className="text-sm text-muted-foreground">{invoice.usdAmount || `≈ $${invoice.totalAmount.toLocaleString()}`}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Released</p>
                  <p className="text-xl font-semibold text-green-600">
                    ${invoice.releasedAmount.toLocaleString()}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {invoice.releasedAmount > 0 ? `≈ ${((invoice.releasedAmount / invoice.totalAmount) * parseFloat(invoice.amount?.replace(/[^\d.]/g, '') || '0')).toFixed(2)} sBTC` : '0 sBTC'}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Remaining</p>
                  <p className="text-xl font-semibold">
                    ${(invoice.totalAmount - invoice.releasedAmount).toLocaleString()}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {invoice.totalAmount > invoice.releasedAmount ? `≈ ${(((invoice.totalAmount - invoice.releasedAmount) / invoice.totalAmount) * parseFloat(invoice.amount?.replace(/[^\d.]/g, '') || '0')).toFixed(2)} sBTC` : '0 sBTC'}
                  </p>
                </div>
                <div className="pt-4 border-t border-border">
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full transition-all"
                      style={{ width: `${(invoice.releasedAmount / invoice.totalAmount) * 100}%` }}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mt-2 text-center">
                    {Math.round((invoice.releasedAmount / invoice.totalAmount) * 100)}% Complete
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <DollarSign className="w-4 h-4 mr-2" />
                  Fund Invoice
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => setShowDispute(true)}
                >
                  <AlertTriangle className="w-4 h-4 mr-2" />
                  Raise Dispute
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceDetails;

