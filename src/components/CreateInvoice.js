import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
/**
 * CreateInvoice Component
 *
 * Example React component demonstrating how to integrate the
 * smart-invoice-escrow contract with your UI.
 */
import { useState } from 'react';
import { useConnect } from '@stacks/connect-react';
import { createInvoice, addMilestone, fundInvoice, stxToMicroStx } from '@/lib/contract-integration';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { Loader2, Plus, Trash2 } from 'lucide-react';
export default function CreateInvoice() {
    const { doOpenAuth } = useConnect();
    const [loading, setLoading] = useState(false);
    const [contractorAddress, setContractorAddress] = useState('');
    const [arbitratorAddress, setArbitratorAddress] = useState('');
    const [milestones, setMilestones] = useState([
        { id: '1', description: '', amount: '' }
    ]);
    const [createdInvoiceId, setCreatedInvoiceId] = useState(null);
    const [step, setStep] = useState('create');
    // Calculate total amount
    const totalAmount = milestones.reduce((sum, m) => {
        const amount = parseFloat(m.amount) || 0;
        return sum + amount;
    }, 0);
    // Add a new milestone
    const addMilestoneField = () => {
        setMilestones([
            ...milestones,
            { id: Date.now().toString(), description: '', amount: '' }
        ]);
    };
    // Remove a milestone
    const removeMilestone = (id) => {
        if (milestones.length > 1) {
            setMilestones(milestones.filter(m => m.id !== id));
        }
    };
    // Update milestone
    const updateMilestone = (id, field, value) => {
        setMilestones(milestones.map(m => m.id === id ? { ...m, [field]: value } : m));
    };
    // Step 1: Create invoice
    const handleCreateInvoice = async () => {
        if (!contractorAddress) {
            toast.error('Please enter contractor address');
            return;
        }
        if (totalAmount <= 0) {
            toast.error('Total amount must be greater than 0');
            return;
        }
        setLoading(true);
        try {
            const totalMicroStx = stxToMicroStx(totalAmount);
            await createInvoice(contractorAddress, totalMicroStx, arbitratorAddress || undefined, (data) => {
                console.log('Invoice created:', data);
                toast.success('Invoice created successfully!');
                // Parse invoice ID from transaction result
                // In production, you'd get this from the transaction result
                setCreatedInvoiceId(0); // Placeholder - get from actual result
                setStep('milestones');
                setLoading(false);
            }, () => {
                toast.error('Transaction cancelled');
                setLoading(false);
            });
        }
        catch (error) {
            console.error('Error creating invoice:', error);
            toast.error('Failed to create invoice');
            setLoading(false);
        }
    };
    // Step 2: Add milestones
    const handleAddMilestones = async () => {
        if (createdInvoiceId === null) {
            toast.error('No invoice ID found');
            return;
        }
        setLoading(true);
        let addedCount = 0;
        try {
            for (const milestone of milestones) {
                if (!milestone.description || !milestone.amount) {
                    toast.error('All milestones must have description and amount');
                    setLoading(false);
                    return;
                }
                await addMilestone(createdInvoiceId, milestone.description, stxToMicroStx(parseFloat(milestone.amount)), () => {
                    addedCount++;
                    if (addedCount === milestones.length) {
                        toast.success('All milestones added!');
                        setStep('fund');
                        setLoading(false);
                    }
                }, () => {
                    toast.error('Milestone addition cancelled');
                    setLoading(false);
                });
            }
        }
        catch (error) {
            console.error('Error adding milestones:', error);
            toast.error('Failed to add milestones');
            setLoading(false);
        }
    };
    // Step 3: Fund invoice
    const handleFundInvoice = async () => {
        if (createdInvoiceId === null) {
            toast.error('No invoice ID found');
            return;
        }
        // Get user address (you'd need to get this from your auth state)
        const userAddress = 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM'; // Placeholder
        setLoading(true);
        try {
            await fundInvoice(createdInvoiceId, stxToMicroStx(totalAmount), userAddress, (data) => {
                console.log('Invoice funded:', data);
                toast.success('Invoice funded successfully! 🎉');
                setLoading(false);
                // Reset form or redirect
            }, () => {
                toast.error('Funding cancelled');
                setLoading(false);
            });
        }
        catch (error) {
            console.error('Error funding invoice:', error);
            toast.error('Failed to fund invoice');
            setLoading(false);
        }
    };
    return (_jsx("div", { className: "max-w-2xl mx-auto p-6 space-y-6", children: _jsxs("div", { className: "bg-white rounded-lg shadow-md p-6", children: [_jsx("h2", { className: "text-2xl font-bold mb-6", children: "Create Smart Invoice" }), _jsxs("div", { className: "flex items-center justify-between mb-8", children: [_jsxs("div", { className: `flex items-center ${step === 'create' ? 'text-blue-600' : 'text-gray-400'}`, children: [_jsx("div", { className: `w-8 h-8 rounded-full flex items-center justify-center ${step === 'create' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`, children: "1" }), _jsx("span", { className: "ml-2 font-medium", children: "Details" })] }), _jsx("div", { className: "flex-1 h-1 mx-4 bg-gray-200", children: _jsx("div", { className: `h-full ${step !== 'create' ? 'bg-blue-600' : ''}` }) }), _jsxs("div", { className: `flex items-center ${step === 'milestones' ? 'text-blue-600' : 'text-gray-400'}`, children: [_jsx("div", { className: `w-8 h-8 rounded-full flex items-center justify-center ${step === 'milestones' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`, children: "2" }), _jsx("span", { className: "ml-2 font-medium", children: "Milestones" })] }), _jsx("div", { className: "flex-1 h-1 mx-4 bg-gray-200", children: _jsx("div", { className: `h-full ${step === 'fund' ? 'bg-blue-600' : ''}` }) }), _jsxs("div", { className: `flex items-center ${step === 'fund' ? 'text-blue-600' : 'text-gray-400'}`, children: [_jsx("div", { className: `w-8 h-8 rounded-full flex items-center justify-center ${step === 'fund' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`, children: "3" }), _jsx("span", { className: "ml-2 font-medium", children: "Fund" })] })] }), step === 'create' && (_jsxs("div", { className: "space-y-4", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium mb-2", children: "Contractor Address *" }), _jsx(Input, { placeholder: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM", value: contractorAddress, onChange: (e) => setContractorAddress(e.target.value) })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium mb-2", children: "Arbitrator Address (Optional)" }), _jsx(Input, { placeholder: "Leave empty for no arbitrator", value: arbitratorAddress, onChange: (e) => setArbitratorAddress(e.target.value) })] }), _jsxs("div", { className: "border-t pt-4", children: [_jsx("h3", { className: "font-semibold mb-4", children: "Milestones" }), milestones.map((milestone, index) => (_jsxs("div", { className: "mb-4 p-4 border rounded-lg", children: [_jsxs("div", { className: "flex justify-between items-center mb-2", children: [_jsxs("span", { className: "font-medium", children: ["Milestone ", index + 1] }), milestones.length > 1 && (_jsx(Button, { variant: "ghost", size: "sm", onClick: () => removeMilestone(milestone.id), children: _jsx(Trash2, { className: "w-4 h-4" }) }))] }), _jsx(Input, { className: "mb-2", placeholder: "Description", value: milestone.description, onChange: (e) => updateMilestone(milestone.id, 'description', e.target.value) }), _jsx(Input, { type: "number", placeholder: "Amount in STX", value: milestone.amount, onChange: (e) => updateMilestone(milestone.id, 'amount', e.target.value), step: "0.000001", min: "0" })] }, milestone.id))), _jsxs(Button, { variant: "outline", onClick: addMilestoneField, className: "w-full", children: [_jsx(Plus, { className: "w-4 h-4 mr-2" }), "Add Milestone"] })] }), _jsx("div", { className: "bg-blue-50 p-4 rounded-lg", children: _jsxs("div", { className: "flex justify-between items-center", children: [_jsx("span", { className: "font-semibold", children: "Total Amount:" }), _jsxs("span", { className: "text-2xl font-bold text-blue-600", children: [totalAmount.toFixed(6), " STX"] })] }) }), _jsx(Button, { onClick: handleCreateInvoice, disabled: loading, className: "w-full", children: loading ? (_jsxs(_Fragment, { children: [_jsx(Loader2, { className: "w-4 h-4 mr-2 animate-spin" }), "Creating Invoice..."] })) : ('Create Invoice') })] })), step === 'milestones' && (_jsxs("div", { className: "space-y-4", children: [_jsx("div", { className: "bg-green-50 p-4 rounded-lg mb-4", children: _jsxs("p", { className: "text-green-800", children: ["\u2705 Invoice created successfully! Invoice ID: ", createdInvoiceId] }) }), _jsx("p", { className: "text-gray-600", children: "Now confirm the transaction to add all milestones to the invoice." }), _jsx("div", { className: "space-y-2", children: milestones.map((m, index) => (_jsxs("div", { className: "p-3 border rounded", children: [_jsxs("div", { className: "flex justify-between", children: [_jsxs("span", { className: "font-medium", children: ["Milestone ", index + 1] }), _jsxs("span", { className: "text-blue-600", children: [m.amount, " STX"] })] }), _jsx("p", { className: "text-sm text-gray-600", children: m.description })] }, m.id))) }), _jsx(Button, { onClick: handleAddMilestones, disabled: loading, className: "w-full", children: loading ? (_jsxs(_Fragment, { children: [_jsx(Loader2, { className: "w-4 h-4 mr-2 animate-spin" }), "Adding Milestones..."] })) : ('Add Milestones') })] })), step === 'fund' && (_jsxs("div", { className: "space-y-4", children: [_jsx("div", { className: "bg-green-50 p-4 rounded-lg mb-4", children: _jsx("p", { className: "text-green-800", children: "\u2705 All milestones added! Ready to fund the invoice." }) }), _jsx("div", { className: "bg-yellow-50 border-l-4 border-yellow-400 p-4", children: _jsxs("p", { className: "text-yellow-800", children: [_jsx("strong", { children: "\u26A0\uFE0F Important:" }), " You are about to lock", ' ', _jsxs("strong", { children: [totalAmount.toFixed(6), " STX"] }), " in escrow. These funds will be held until milestones are completed and approved."] }) }), _jsx(Button, { onClick: handleFundInvoice, disabled: loading, className: "w-full bg-green-600 hover:bg-green-700", children: loading ? (_jsxs(_Fragment, { children: [_jsx(Loader2, { className: "w-4 h-4 mr-2 animate-spin" }), "Funding Invoice..."] })) : (`Fund Invoice (${totalAmount.toFixed(6)} STX)`) })] }))] }) }));
}
