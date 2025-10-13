import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Wallet, GitBranch, Shield, Plus, TrendingUp, RefreshCw, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import WalletConnect from "@/components/WalletConnect";
import { useWalletStore } from "@/store/useWalletStore";
import { useCryptoPrices } from "@/hooks/useCryptoPrices";
import { formatCurrency } from "@/services/publicApis";

const Index = () => {
  const { isConnected } = useWalletStore();
  const { prices, loading: pricesLoading, refetch } = useCryptoPrices();
  
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold mb-2 text-foreground">
                BitMind Smart Invoice Dashboard
              </h1>
              <p className="text-muted-foreground text-lg">
                AI-powered invoice escrow for DAOs on Stacks blockchain
              </p>
            </div>
            <WalletConnect />
          </div>
          {isConnected && (
            <div className="flex gap-3">
              <Link to="/demo">
                <Button className="bg-gradient-to-r from-orange-500 to-purple-600">
                  <Sparkles className="w-4 h-4 mr-2" />
                  AI Demo
                </Button>
              </Link>
              <Link to="/create">
                <Button>
                  <Plus className="w-4 h-4 mr-2" />
                  Create Invoice
                </Button>
              </Link>
            </div>
          )}
        </header>

        {/* Live Crypto Prices Banner */}
        <Card className="mb-6 bg-gradient-to-r from-orange-50 to-purple-50 border-orange-200">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <TrendingUp className="w-8 h-8 text-orange-600" />
                <div>
                  <h3 className="text-lg font-bold mb-1">Live Market Prices</h3>
                  <p className="text-sm text-muted-foreground">Real-time data from CoinGecko API</p>
                </div>
                <div className="flex gap-6 ml-8">
                  {pricesLoading ? (
                    <div className="flex items-center gap-2">
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span className="text-sm">Loading...</span>
                    </div>
                  ) : (
                    <>
                      {prices.btc && (
                        <div>
                          <p className="text-xs text-gray-600">Bitcoin (BTC)</p>
                          <p className="text-xl font-bold text-orange-600">
                            {formatCurrency(prices.btc)}
                          </p>
                        </div>
                      )}
                      {prices.stx && (
                        <div>
                          <p className="text-xs text-gray-600">Stacks (STX)</p>
                          <p className="text-xl font-bold text-purple-600">
                            {formatCurrency(prices.stx)}
                          </p>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={refetch}>
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Refresh
                </Button>
                <Link to="/api-demo">
                  <Button variant="outline" size="sm">
                    View API Demo
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card>
            <CardHeader>
              <FileText className="w-8 h-8 mb-2 text-primary" />
              <CardTitle>Active Invoices</CardTitle>
              <CardDescription>Current ongoing deals</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">12</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Wallet className="w-8 h-8 mb-2 text-primary" />
              <CardTitle>Total Value</CardTitle>
              <CardDescription>Locked in escrow</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">$45.2K</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <GitBranch className="w-8 h-8 mb-2 text-primary" />
              <CardTitle>Milestones</CardTitle>
              <CardDescription>Completed this month</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">24</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Shield className="w-8 h-8 mb-2 text-primary" />
              <CardTitle>Disputes</CardTitle>
              <CardDescription>Currently active</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">2</p>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Recent Invoices</CardTitle>
            <CardDescription>Your latest invoice activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { id: "INV-001", status: "funded", amount: "$12,500", dao: "DeFi DAO" },
                { id: "INV-002", status: "pending", amount: "$8,300", dao: "NFT Collective" },
                { id: "INV-003", status: "completed", amount: "$15,000", dao: "Web3 Guild" },
              ].map((invoice) => (
                <div
                  key={invoice.id}
                  className="flex items-center justify-between p-4 border border-border rounded-lg"
                >
                  <div className="flex items-center gap-4">
                    <FileText className="w-6 h-6 text-muted-foreground" />
                    <div>
                      <p className="font-semibold">{invoice.id}</p>
                      <p className="text-sm text-muted-foreground">{invoice.dao}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <p className="font-semibold">{invoice.amount}</p>
                    <Badge
                      variant={
                        invoice.status === "completed"
                          ? "default"
                          : invoice.status === "funded"
                          ? "secondary"
                          : "outline"
                      }
                    >
                      {invoice.status}
                    </Badge>
                    <Link to={`/invoice/${invoice.id}`}>
                      <Button size="sm">View</Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
