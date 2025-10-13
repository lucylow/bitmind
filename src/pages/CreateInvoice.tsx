import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import InvoiceCreationWizard from "@/components/InvoiceCreationWizard";
import WalletConnect from "@/components/WalletConnect";

const CreateInvoice = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <Link to="/">
              <Button variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
            <WalletConnect />
          </div>
          <h1 className="text-3xl font-bold text-foreground">
            Create New Invoice
          </h1>
        </header>

        <InvoiceCreationWizard />
      </div>
    </div>
  );
};

export default CreateInvoice;

