import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";
import { useWalletStore } from "@/store/useWalletStore";
import { connectWallet, disconnectWallet, userSession } from "@/lib/stacks";
import { useEffect } from "react";
const WalletConnect = () => {
    const { isConnected, userAddress, setConnected, setDisconnected } = useWalletStore();
    useEffect(() => {
        if (userSession.isUserSignedIn()) {
            const userData = userSession.loadUserData();
            const address = userData.profile.stxAddress.testnet;
            setConnected(address);
        }
    }, [setConnected]);
    const handleConnect = () => {
        connectWallet((address) => {
            setConnected(address);
        });
    };
    const handleDisconnect = () => {
        disconnectWallet();
        setDisconnected();
    };
    return (_jsx("div", { className: "flex items-center gap-4", children: isConnected ? (_jsxs("div", { className: "flex items-center gap-2", children: [_jsxs("div", { className: "flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg", children: [_jsx(Wallet, { className: "w-4 h-4" }), _jsxs("span", { className: "text-sm font-mono", children: [userAddress?.slice(0, 6), "...", userAddress?.slice(-4)] })] }), _jsx(Button, { variant: "outline", size: "sm", onClick: handleDisconnect, children: "Disconnect" })] })) : (_jsxs(Button, { onClick: handleConnect, children: [_jsx(Wallet, { className: "w-4 h-4 mr-2" }), "Connect Wallet"] })) }));
};
export default WalletConnect;
