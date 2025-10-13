import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CreateInvoice from "./pages/CreateInvoice";
import InvoiceDetails from "./pages/InvoiceDetails";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import InvoiceManager from "./pages/InvoiceManager";
import Analytics from "./pages/Analytics";
import Help from "./pages/Help";
import ApiDemo from "./pages/ApiDemo";
import Demo from "./pages/Demo";
// New DeFi Feature Components
import InvoiceNFTMarketplace from "./components/InvoiceNFTMarketplace";
import AdvancedAnalyticsDashboard from "./components/AdvancedAnalyticsDashboard";
import CrossChainSwapPreview from "./components/CrossChainSwapPreview";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/invoices" element={<InvoiceManager />} />
          <Route path="/create" element={<CreateInvoice />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/analytics" element={<AdvancedAnalyticsDashboard />} />
          <Route path="/invoice/:id" element={<InvoiceDetails />} />
          <Route path="/help" element={<Help />} />
          <Route path="/api-demo" element={<ApiDemo />} />
          {/* New DeFi Feature Routes */}
          <Route path="/nft-marketplace" element={<InvoiceNFTMarketplace />} />
          <Route path="/cross-chain-swap" element={<CrossChainSwapPreview />} />
          <Route path="/treasury" element={<Dashboard />} />
          <Route path="/yield-optimizer" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
