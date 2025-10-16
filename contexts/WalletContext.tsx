"use client";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface WalletContextType {
  isWalletConnected: boolean;
  walletAddress: string;
  isConnecting: boolean;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error("useWallet must be used within a WalletProvider");
  }
  return context;
};

interface WalletProviderProps {
  children: ReactNode;
}

export const WalletProvider: React.FC<WalletProviderProps> = ({ children }) => {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const [isConnecting, setIsConnecting] = useState(false);

  useEffect(() => {
    // Check wallet connection status from localStorage
    const connected = localStorage.getItem("walletConnected") === "true";
    const address = localStorage.getItem("walletAddress") || "";
    setIsWalletConnected(connected);
    setWalletAddress(address);
  }, []);

  const connectWallet = async () => {
    setIsConnecting(true);

    try {
      // Simulate WalletConnect flow
      console.log("Connecting wallet...");

      // Simulate wallet connection delay
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Mock wallet address
      const mockAddress = "0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6";
      setWalletAddress(mockAddress);
      setIsWalletConnected(true);
      setIsConnecting(false);

      // Save to localStorage for persistence
      localStorage.setItem("walletConnected", "true");
      localStorage.setItem("walletAddress", mockAddress);

      console.log("Wallet connected:", mockAddress);
    } catch (error) {
      console.error("Wallet connection failed:", error);
      setIsConnecting(false);
      throw error;
    }
  };

  const disconnectWallet = () => {
    setIsWalletConnected(false);
    setWalletAddress("");

    // Remove from localStorage
    localStorage.removeItem("walletConnected");
    localStorage.removeItem("walletAddress");
  };

  const value: WalletContextType = {
    isWalletConnected,
    walletAddress,
    isConnecting,
    connectWallet,
    disconnectWallet,
  };

  return (
    <WalletContext.Provider value={value}>{children}</WalletContext.Provider>
  );
};
