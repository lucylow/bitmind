import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Brain, Menu, X } from "lucide-react";
import { useState } from 'react';

const NavigationBar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const isActive = (path: string) => location.pathname === path;
  const isLandingPage = location.pathname === '/';
  
  // Don't show navbar on landing page (it has its own)
  if (isLandingPage) {
    return null;
  }
  
  return (
    <nav className="bg-white/95 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-blue-600 rounded-xl flex items-center justify-center transform group-hover:scale-105 transition-transform">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 text-gradient">
                BitMind
              </span>
              <span className="text-xs text-gray-500 -mt-1 hidden sm:block">Bitcoin-native smart invoices</span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link 
              to="/dashboard" 
              className={`text-base font-medium transition-colors ${
                isActive('/dashboard') 
                  ? 'text-blue-600 font-semibold' 
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              Dashboard
            </Link>
            <Link 
              to="/invoices" 
              className={`text-base font-medium transition-colors ${
                isActive('/invoices') 
                  ? 'text-blue-600 font-semibold' 
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              Invoices
            </Link>
            <Link 
              to="/create" 
              className={`text-base font-medium transition-colors ${
                isActive('/create') 
                  ? 'text-blue-600 font-semibold' 
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              Create Invoice
            </Link>
            <Link 
              to="/analytics" 
              className={`text-base font-medium transition-colors ${
                isActive('/analytics') 
                  ? 'text-blue-600 font-semibold' 
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              Analytics
            </Link>
            <Link 
              to="/help" 
              className={`text-base font-medium transition-colors ${
                isActive('/help') 
                  ? 'text-blue-600 font-semibold' 
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              Help
            </Link>
            <Button 
              variant="default" 
              size="sm" 
              className="ml-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all"
              onClick={() => alert('Wallet connection feature coming soon! This will connect to Hiro/Xverse wallet.')}
            >
              <Brain className="w-4 h-4 mr-2" />
              Connect Wallet
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <Link 
              to="/dashboard" 
              className={`block text-base font-medium transition-colors ${
                isActive('/dashboard') 
                  ? 'text-blue-600 font-semibold' 
                  : 'text-gray-700 hover:text-gray-900'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link 
              to="/invoices" 
              className={`block text-base font-medium transition-colors ${
                isActive('/invoices') 
                  ? 'text-blue-600 font-semibold' 
                  : 'text-gray-700 hover:text-gray-900'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Invoices
            </Link>
            <Link 
              to="/help" 
              className={`block text-base font-medium transition-colors ${
                isActive('/help') 
                  ? 'text-blue-600 font-semibold' 
                  : 'text-gray-700 hover:text-gray-900'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Help
            </Link>
            <Button 
              variant="default" 
              size="sm" 
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
              onClick={() => alert('Wallet connection feature coming soon! This will connect to Hiro/Xverse wallet.')}
            >
              <Brain className="w-4 h-4 mr-2 inline" />
              Connect Wallet
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavigationBar;

