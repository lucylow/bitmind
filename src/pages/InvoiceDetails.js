import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, AlertTriangle, DollarSign } from "lucide-react";
import WalletConnect from "@/components/WalletConnect";
import MilestoneTracker from "@/components/MilestoneTracker";
import DisputeResolution from "@/components/DisputeResolution";
const InvoiceDetails = () => {
    const { id } = useParams();
    const [showDispute, setShowDispute] = useState(false);
    // Mock invoice data (in real app, fetch from blockchain)
    const invoice = {
        id: id || "INV-001",
        status: "in-progress",
        amount: "$12,500",
        dao: "DeFi DAO",
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
    const getStatusBadge = (status) => {
        const variants = {
            "completed": "default",
            "in-progress": "secondary",
            "pending": "outline",
            "disputed": "destructive",
        };
        return (_jsx(Badge, { variant: variants[status] || "outline", children: status }));
    };
    return (_jsx("div", { className: "min-h-screen bg-background", children: _jsxs("div", { className: "container mx-auto px-4 py-8", children: [_jsx("header", { className: "mb-8", children: _jsxs("div", { className: "flex items-center justify-between mb-6", children: [_jsx(Link, { to: "/", children: _jsxs(Button, { variant: "outline", size: "sm", children: [_jsx(ArrowLeft, { className: "w-4 h-4 mr-2" }), "Back to Dashboard"] }) }), _jsx(WalletConnect, {})] }) }), _jsxs("div", { className: "grid lg:grid-cols-3 gap-6", children: [_jsxs("div", { className: "lg:col-span-2 space-y-6", children: [_jsxs(Card, { children: [_jsx(CardHeader, { children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsxs(CardTitle, { children: ["Invoice ", invoice.id] }), _jsx(CardDescription, { children: invoice.dao })] }), getStatusBadge(invoice.status)] }) }), _jsx(CardContent, { children: _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [_jsxs("div", { children: [_jsx("p", { className: "text-sm text-muted-foreground mb-1", children: "Issuer" }), _jsx("p", { className: "text-xs font-mono bg-secondary p-2 rounded", children: invoice.issuer })] }), _jsxs("div", { children: [_jsx("p", { className: "text-sm text-muted-foreground mb-1", children: "Client" }), _jsx("p", { className: "text-xs font-mono bg-secondary p-2 rounded", children: invoice.client })] })] }), _jsxs("div", { children: [_jsx("p", { className: "text-sm text-muted-foreground mb-1", children: "Arbitrator" }), _jsx("p", { className: "text-xs font-mono bg-secondary p-2 rounded", children: invoice.arbitrator })] }), _jsxs("div", { children: [_jsx("p", { className: "text-sm text-muted-foreground mb-1", children: "Created" }), _jsx("p", { className: "text-sm", children: invoice.createdAt })] })] }) })] }), _jsx(MilestoneTracker, { milestones: invoice.milestones, invoiceId: invoice.id }), showDispute && (_jsx(DisputeResolution, { invoiceId: invoice.id, onClose: () => setShowDispute(false) }))] }), _jsxs("div", { className: "space-y-6", children: [_jsxs(Card, { children: [_jsx(CardHeader, { children: _jsx(CardTitle, { className: "text-lg", children: "Payment Summary" }) }), _jsxs(CardContent, { className: "space-y-4", children: [_jsxs("div", { children: [_jsx("p", { className: "text-sm text-muted-foreground mb-1", children: "Total Amount" }), _jsxs("p", { className: "text-2xl font-bold", children: ["$", invoice.totalAmount.toLocaleString()] })] }), _jsxs("div", { children: [_jsx("p", { className: "text-sm text-muted-foreground mb-1", children: "Released" }), _jsxs("p", { className: "text-xl font-semibold text-green-600", children: ["$", invoice.releasedAmount.toLocaleString()] })] }), _jsxs("div", { children: [_jsx("p", { className: "text-sm text-muted-foreground mb-1", children: "Remaining" }), _jsxs("p", { className: "text-xl font-semibold", children: ["$", (invoice.totalAmount - invoice.releasedAmount).toLocaleString()] })] }), _jsxs("div", { className: "pt-4 border-t border-border", children: [_jsx("div", { className: "w-full bg-secondary rounded-full h-2", children: _jsx("div", { className: "bg-primary h-2 rounded-full transition-all", style: { width: `${(invoice.releasedAmount / invoice.totalAmount) * 100}%` } }) }), _jsxs("p", { className: "text-xs text-muted-foreground mt-2 text-center", children: [Math.round((invoice.releasedAmount / invoice.totalAmount) * 100), "% Complete"] })] })] })] }), _jsxs(Card, { children: [_jsx(CardHeader, { children: _jsx(CardTitle, { className: "text-lg", children: "Actions" }) }), _jsxs(CardContent, { className: "space-y-3", children: [_jsxs(Button, { variant: "outline", className: "w-full justify-start", children: [_jsx(DollarSign, { className: "w-4 h-4 mr-2" }), "Fund Invoice"] }), _jsxs(Button, { variant: "outline", className: "w-full justify-start", onClick: () => setShowDispute(true), children: [_jsx(AlertTriangle, { className: "w-4 h-4 mr-2" }), "Raise Dispute"] })] })] })] })] })] }) }));
};
export default InvoiceDetails;
