import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Wallet, GitBranch, Shield } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4 text-foreground">
            BitMind Smart Invoice Dashboard
          </h1>
          <p className="text-muted-foreground text-lg">
            AI-powered invoice escrow for DAOs on Stacks blockchain
          </p>
        </header>

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
                    <Button size="sm">View</Button>
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
