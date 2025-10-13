import { create } from 'zustand';
export const useWalletStore = create((set) => ({
    isConnected: false,
    userAddress: null,
    network: 'testnet',
    setConnected: (address) => set({ isConnected: true, userAddress: address }),
    setDisconnected: () => set({ isConnected: false, userAddress: null }),
    setNetwork: (network) => set({ network }),
}));
