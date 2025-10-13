import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import InvoiceCreationWizard from "@/components/InvoiceCreationWizard";
import WalletConnect from "@/components/WalletConnect";
const CreateInvoice = () => {
    return (_jsx("div", { className: "min-h-screen bg-background", children: _jsxs("div", { className: "container mx-auto px-4 py-8", children: [_jsxs("header", { className: "mb-8", children: [_jsxs("div", { className: "flex items-center justify-between mb-6", children: [_jsx(Link, { to: "/", children: _jsxs(Button, { variant: "outline", size: "sm", children: [_jsx(ArrowLeft, { className: "w-4 h-4 mr-2" }), "Back to Dashboard"] }) }), _jsx(WalletConnect, {})] }), _jsx("h1", { className: "text-3xl font-bold text-foreground", children: "Create New Invoice" })] }), _jsx(InvoiceCreationWizard, {})] }) }));
};
export default CreateInvoice;
