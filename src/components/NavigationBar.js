import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Brain, Menu, X } from "lucide-react";
import { useState } from 'react';
const NavigationBar = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isActive = (path) => location.pathname === path;
    const isLandingPage = location.pathname === '/';
    // Don't show navbar on landing page (it has its own)
    if (isLandingPage) {
        return null;
    }
    return (_jsx("nav", { className: "bg-white/95 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 shadow-sm", children: _jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "flex justify-between items-center h-16", children: [_jsxs(Link, { to: "/", className: "flex items-center space-x-3 group", children: [_jsx("div", { className: "w-10 h-10 bg-gradient-to-br from-orange-500 to-blue-600 rounded-xl flex items-center justify-center transform group-hover:scale-105 transition-transform", children: _jsx(Brain, { className: "w-6 h-6 text-white" }) }), _jsxs("div", { className: "flex flex-col", children: [_jsx("span", { className: "text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 text-gradient", children: "BitMind" }), _jsx("span", { className: "text-xs text-gray-500 -mt-1 hidden sm:block", children: "Bitcoin-native smart invoices" })] })] }), _jsxs("div", { className: "hidden md:flex items-center gap-6", children: [_jsx(Link, { to: "/dashboard", className: `text-base font-medium transition-colors ${isActive('/dashboard')
                                        ? 'text-blue-600 font-semibold'
                                        : 'text-gray-700 hover:text-gray-900'}`, children: "Dashboard" }), _jsx(Link, { to: "/invoices", className: `text-base font-medium transition-colors ${isActive('/invoices')
                                        ? 'text-blue-600 font-semibold'
                                        : 'text-gray-700 hover:text-gray-900'}`, children: "Invoices" }), _jsx(Link, { to: "/help", className: `text-base font-medium transition-colors ${isActive('/help')
                                        ? 'text-blue-600 font-semibold'
                                        : 'text-gray-700 hover:text-gray-900'}`, children: "Help" }), _jsx(Button, { variant: "default", size: "sm", className: "ml-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700", children: "Connect Wallet" })] }), _jsx("button", { className: "md:hidden p-2", onClick: () => setIsMenuOpen(!isMenuOpen), children: isMenuOpen ? _jsx(X, { className: "w-6 h-6" }) : _jsx(Menu, { className: "w-6 h-6" }) })] }), isMenuOpen && (_jsxs("div", { className: "md:hidden pb-4 space-y-3", children: [_jsx(Link, { to: "/dashboard", className: `block text-base font-medium transition-colors ${isActive('/dashboard')
                                ? 'text-blue-600 font-semibold'
                                : 'text-gray-700 hover:text-gray-900'}`, onClick: () => setIsMenuOpen(false), children: "Dashboard" }), _jsx(Link, { to: "/invoices", className: `block text-base font-medium transition-colors ${isActive('/invoices')
                                ? 'text-blue-600 font-semibold'
                                : 'text-gray-700 hover:text-gray-900'}`, onClick: () => setIsMenuOpen(false), children: "Invoices" }), _jsx(Link, { to: "/help", className: `block text-base font-medium transition-colors ${isActive('/help')
                                ? 'text-blue-600 font-semibold'
                                : 'text-gray-700 hover:text-gray-900'}`, onClick: () => setIsMenuOpen(false), children: "Help" }), _jsx(Button, { variant: "default", size: "sm", className: "w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700", children: "Connect Wallet" })] }))] }) }));
};
export default NavigationBar;
