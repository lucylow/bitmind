import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Plus, Filter, Search, Calendar, User, DollarSign, CheckCircle2, Clock, AlertCircle } from "lucide-react";

const InvoiceManager = () => {
  const [filterStatus, setFilterStatus] = useState<string>("all");

  const invoices = [
    {
      id: "INV-001",
      title: "Smart Contract Development",
      dao: "DeFi DAO",
      contractor: "Alice Johnson",
      amount: "$12,500",
      status: "funded",
      progress: 75,
      milestones: 4,
      completedMilestones: 3,
      dueDate: "Dec 31, 2024",
      createdDate: "Nov 1, 2024"
    },
    {
      id: "INV-002",
      title: "UI/UX Design Package",
      dao: "NFT Collective",
      contractor: "Bob Smith",
      amount: "$8,300",
      status: "pending",
      progress: 0,
      milestones: 3,
      completedMilestones: 0,
      dueDate: "Jan 15, 2025",
      createdDate: "Dec 1, 2024"
    },
    {
      id: "INV-003",
      title: "Marketing Campaign",
      dao: "Web3 Guild",
      contractor: "Carol White",
      amount: "$15,000",
      status: "completed",
      progress: 100,
      milestones: 5,
      completedMilestones: 5,
      dueDate: "Dec 20, 2024",
      createdDate: "Oct 15, 2024"
    },
    {
      id: "INV-004",
      title: "Backend API Development",
      dao: "DAO Builders",
      contractor: "David Lee",
      amount: "$9,200",
      status: "funded",
      progress: 40,
      milestones: 5,
      completedMilestones: 2,
      dueDate: "Jan 10, 2025",
      createdDate: "Nov 20, 2024"
    },
    {
      id: "INV-005",
      title: "Security Audit",
      dao: "DeFi DAO",
      contractor: "Eve Martinez",
      amount: "$20,000",
      status: "funded",
      progress: 60,
      milestones: 3,
      completedMilestones: 2,
      dueDate: "Jan 5, 2025",
      createdDate: "Nov 25, 2024"
    },
    {
      id: "INV-006",
      title: "Community Management",
      dao: "NFT Collective",
      contractor: "Frank Chen",
      amount: "$5,500",
      status: "dispute",
      progress: 50,
      milestones: 2,
      completedMilestones: 1,
      dueDate: "Dec 28, 2024",
      createdDate: "Nov 10, 2024"
    },
  ];

  const filteredInvoices = filterStatus === "all" 
    ? invoices 
    : invoices.filter(inv => inv.status === filterStatus);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle2 className="w-5 h-5 text-green-500" />;
      case "funded":
        return <Clock className="w-5 h-5 text-blue-500" />;
      case "pending":
        return <AlertCircle className="w-5 h-5 text-yellow-500" />;
      case "dispute":
        return <AlertCircle className="w-5 h-5 text-red-500" />;
      default:
        return null;
    }
  };

  const getStatusBadge = (status: string) => {
    const variants: Record<string, "default" | "secondary" | "outline" | "destructive"> = {
      completed: "default",
      funded: "secondary",
      pending: "outline",
      dispute: "destructive"
    };
    return variants[status] || "outline";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Invoice Manager</h1>
              <p className="text-gray-600 text-lg">
                Create, track, and manage all your DAO invoices
              </p>
            </div>
            <Button size="lg" className="shadow-lg">
              <Plus className="mr-2 w-5 h-5" />
              Create New Invoice
            </Button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Total Invoices</p>
                  <p className="text-3xl font-bold text-gray-900">{invoices.length}</p>
                </div>
                <FileText className="w-10 h-10 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Active</p>
                  <p className="text-3xl font-bold text-blue-600">
                    {invoices.filter(i => i.status === "funded").length}
                  </p>
                </div>
                <Clock className="w-10 h-10 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Completed</p>
                  <p className="text-3xl font-bold text-green-600">
                    {invoices.filter(i => i.status === "completed").length}
                  </p>
                </div>
                <CheckCircle2 className="w-10 h-10 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Disputes</p>
                  <p className="text-3xl font-bold text-red-600">
                    {invoices.filter(i => i.status === "dispute").length}
                  </p>
                </div>
                <AlertCircle className="w-10 h-10 text-red-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Search */}
        <Card className="mb-8 shadow-md">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search invoices by ID, DAO, or contractor..."
                  className="w-full pl-10 pr-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                />
              </div>
              <div className="flex gap-2">
                <Button
                  variant={filterStatus === "all" ? "default" : "outline"}
                  onClick={() => setFilterStatus("all")}
                  size="sm"
                >
                  All
                </Button>
                <Button
                  variant={filterStatus === "pending" ? "default" : "outline"}
                  onClick={() => setFilterStatus("pending")}
                  size="sm"
                >
                  Pending
                </Button>
                <Button
                  variant={filterStatus === "funded" ? "default" : "outline"}
                  onClick={() => setFilterStatus("funded")}
                  size="sm"
                >
                  Active
                </Button>
                <Button
                  variant={filterStatus === "completed" ? "default" : "outline"}
                  onClick={() => setFilterStatus("completed")}
                  size="sm"
                >
                  Completed
                </Button>
                <Button
                  variant={filterStatus === "dispute" ? "default" : "outline"}
                  onClick={() => setFilterStatus("dispute")}
                  size="sm"
                >
                  Disputes
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Invoice List */}
        <div className="space-y-4">
          {filteredInvoices.map((invoice) => (
            <Card key={invoice.id} className="shadow-md hover:shadow-xl transition-all border-l-4 border-l-blue-500">
              <CardContent className="pt-6">
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  {/* Left Section - Main Info */}
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-blue-100 p-3 rounded-lg">
                        <FileText className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold text-gray-900">{invoice.id}</h3>
                          <Badge variant={getStatusBadge(invoice.status)}>
                            {invoice.status.toUpperCase()}
                          </Badge>
                          {getStatusIcon(invoice.status)}
                        </div>
                        <p className="text-lg font-semibold text-gray-700 mb-2">{invoice.title}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            <span>{invoice.contractor}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <DollarSign className="w-4 h-4" />
                            <span>{invoice.dao}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>Due: {invoice.dueDate}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">
                          Milestones: {invoice.completedMilestones}/{invoice.milestones}
                        </span>
                        <span className="font-semibold text-gray-900">{invoice.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className={`h-3 rounded-full transition-all ${
                            invoice.status === "completed"
                              ? "bg-green-500"
                              : invoice.status === "funded"
                              ? "bg-blue-500"
                              : invoice.status === "dispute"
                              ? "bg-red-500"
                              : "bg-gray-400"
                          }`}
                          style={{ width: `${invoice.progress}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Right Section - Amount & Actions */}
                  <div className="flex flex-col items-end gap-4 lg:min-w-[200px]">
                    <div className="text-right">
                      <p className="text-sm text-gray-600 mb-1">Total Amount</p>
                      <p className="text-3xl font-bold text-gray-900">{invoice.amount}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                      <Button size="sm">
                        Manage
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredInvoices.length === 0 && (
          <Card className="shadow-md">
            <CardContent className="py-16 text-center">
              <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No invoices found</h3>
              <p className="text-gray-500 mb-6">
                Try adjusting your filters or create a new invoice
              </p>
              <Button>
                <Plus className="mr-2 w-5 h-5" />
                Create New Invoice
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default InvoiceManager;

