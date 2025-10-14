import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";
import { useWalletStore } from "@/store/useWalletStore";
import { connectWallet, disconnectWallet, userSession } from "@/lib/stacks";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const WalletConnect = () => {
  const { isConnected, userAddress, setConnected, setDisconnected } = useWalletStore();
  const [isChecking, setIsChecking] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  // Check for existing wallet session on mount
  useEffect(() => {
    const checkExistingSession = () => {
      try {
        if (userSession.isUserSignedIn()) {
          const userData = userSession.loadUserData();
          const address = userData.profile.stxAddress.testnet || userData.profile.stxAddress.mainnet;
          
          if (address && address !== userAddress) {
            console.log('✅ Found existing wallet session:', address);
            setConnected(address);
            
            // Only redirect from the dedicated landing page, not from home
            // Home page (/) handles both connected/disconnected states
            if (location.pathname === '/landing') {
              console.log('🔄 Redirecting from landing page to home');
              navigate('/');
            }
          }
        } else if (isConnected) {
          // Session expired but store shows connected - clear it
          console.log('⚠️ Session expired, clearing wallet state');
          setDisconnected();
        }
      } catch (error) {
        console.error('Error checking wallet session:', error);
        if (isConnected) {
          setDisconnected();
        }
      } finally {
        setIsChecking(false);
      }
    };

    checkExistingSession();
  }, [setConnected, setDisconnected, userAddress, isConnected, navigate, location.pathname]);

  const handleConnect = () => {
    connectWallet((address) => {
      console.log('✅ Wallet connected:', address);
      setConnected(address);
      
      // Redirect from landing page to home after connection
      // Home page shows connected state with action buttons
      if (location.pathname === '/landing') {
        console.log('🔄 Redirecting to home after connection');
        navigate('/');
      }
      // If user connected from a protected route gate, they'll auto-see the content
      // No need to redirect - the ProtectedRoute component handles that
    });
  };

  const handleDisconnect = () => {
    console.log('👋 Disconnecting wallet');
    disconnectWallet();
    setDisconnected();
  };

  if (isChecking) {
    return (
      <Button disabled variant="outline">
        <Wallet className="w-4 h-4 mr-2" />
        Checking...
      </Button>
    );
  }

  return (
    <div className="flex items-center gap-4">
      {isConnected ? (
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <Wallet className="w-4 h-4" />
            <span className="text-sm font-mono">
              {userAddress?.slice(0, 6)}...{userAddress?.slice(-4)}
            </span>
          </div>
          <Button variant="outline" size="sm" onClick={handleDisconnect}>
            Disconnect
          </Button>
        </div>
      ) : (
        <Button onClick={handleConnect} className="bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700">
          <Wallet className="w-4 h-4 mr-2" />
          Connect Wallet
        </Button>
      )}
    </div>
  );
};

export default WalletConnect;

