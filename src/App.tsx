import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Index from "./pages/Index";
import CreateInvoice from "./pages/CreateInvoice";
import InvoiceDetails from "./pages/InvoiceDetails";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import InvoiceManager from "./pages/InvoiceManager";
import Help from "./pages/Help";
import ApiDemo from "./pages/ApiDemo";
import Demo from "./pages/Demo";
import SupabaseTest from "./pages/SupabaseTest";
// Advanced DeFi Feature Pages
import NFTMarketplace from "./pages/NFTMarketplace";
import Analytics from "./pages/Analytics";
import YieldOptimizerPage from "./pages/YieldOptimizerPage";
import CrossChainSwapPage from "./pages/CrossChainSwapPage";
import Treasury from "./pages/Treasury";
import InvoiceEditorPage from "./pages/InvoiceEditorPage";
import APIShowcase from "./pages/APIShowcase";
import RealtimeMonitor from "./pages/RealtimeMonitor";
import DiscordNotifications from "./pages/DiscordNotifications";
import InteractiveDemo from "./pages/InteractiveDemo";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Landing Page - First page users see */}
          <Route path="/" element={<LandingPage />} />
          
          {/* Main App - Home page with conditional content based on wallet */}
          <Route path="/home" element={<Index />} />
          
          {/* Protected Routes - Require Wallet Connection */}
          <Route path="/app" element={<ProtectedRoute><Index /></ProtectedRoute>} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/invoices" element={<ProtectedRoute><InvoiceManager /></ProtectedRoute>} />
          <Route path="/create" element={<ProtectedRoute><CreateInvoice /></ProtectedRoute>} />
          <Route path="/demo" element={<ProtectedRoute><Demo /></ProtectedRoute>} />
          <Route path="/invoice/:id" element={<ProtectedRoute><InvoiceDetails /></ProtectedRoute>} />
          <Route path="/interactive-demo" element={<ProtectedRoute><InteractiveDemo /></ProtectedRoute>} />
          
          {/* Public Info Routes */}
          <Route path="/help" element={<Help />} />
          
          {/* API Demo Routes - Public for demonstration */}
          <Route path="/api-demo" element={<ApiDemo />} />
          <Route path="/api-showcase" element={<APIShowcase />} />
          <Route path="/supabase-test" element={<SupabaseTest />} />
          <Route path="/realtime-monitor" element={<RealtimeMonitor />} />
          
          {/* Advanced DeFi Feature Routes - Protected */}
          <Route path="/nft-marketplace" element={<ProtectedRoute><NFTMarketplace /></ProtectedRoute>} />
          <Route path="/analytics" element={<ProtectedRoute><Analytics /></ProtectedRoute>} />
          <Route path="/yield-optimizer" element={<ProtectedRoute><YieldOptimizerPage /></ProtectedRoute>} />
          <Route path="/cross-chain-swap" element={<ProtectedRoute><CrossChainSwapPage /></ProtectedRoute>} />
          <Route path="/treasury" element={<ProtectedRoute><Treasury /></ProtectedRoute>} />
          <Route path="/invoice-editor" element={<ProtectedRoute><InvoiceEditorPage /></ProtectedRoute>} />
          <Route path="/discord-notifications" element={<ProtectedRoute><DiscordNotifications /></ProtectedRoute>} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
