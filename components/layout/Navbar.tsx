"use client";

import React from "react";
import Link from "next/link";
import { AnimatedButton } from "../ui/AnimatedButton";
import { useWallet } from "../../contexts/WalletContext";

export const Navbar: React.FC = () => {
  const { isWalletConnected, walletAddress, connectWallet, disconnectWallet } =
    useWallet();
  return (
    <header className="navbar fixed top-0 left-0 right-0 z-50 flex items-center w-screen justify-center px-2 py-2 md:px-4 md:py-4 lg:px-10 xl:px-20">
      <div className="flex items-center justify-between bg-white/98 backdrop-blur-md border-2 border-orange-400/80 shadow-2xl rounded-full px-3 py-2 md:px-8 md:py-4 w-full max-w-6xl mx-2">
        <div className="flex items-center gap-1 md:gap-4 text-text-primary min-w-0 flex-shrink-0">
          <div className="size-5 md:size-8 text-primary flex-shrink-0">
            <svg
              fill="currentColor"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z"></path>
            </svg>
          </div>
          <Link
            href="/"
            className="text-text-primary text-sm md:text-lg font-bold leading-tight tracking-[-0.015em] font-display focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:visible rounded truncate"
            aria-label="miniDev - Go to homepage"
          >
            miniDev
          </Link>
          <Link
            href="/leaderboard"
            className="hidden sm:block text-text-secondary hover:text-primary text-sm font-medium transition-colors ml-4"
          >
            Leaderboard
          </Link>
        </div>
        {isWalletConnected ? (
          <div className="flex items-center gap-1 md:gap-2 min-w-0">
            <div className="hidden sm:flex items-center gap-1 md:gap-2 bg-green-50 border border-green-200 rounded-full px-2 md:px-3 py-1">
              <span className="material-symbols-outlined text-green-600 text-xs md:text-sm">
                check_circle
              </span>
              <span className="text-green-700 text-xs font-medium">
                {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
              </span>
            </div>
            <AnimatedButton
              onClick={disconnectWallet}
              className="flex min-w-[60px] md:min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-7 md:h-10 px-2 md:px-4 bg-gray-500 hover:bg-gray-600 text-white text-xs md:text-sm font-bold leading-normal tracking-[0.015em] font-display transition-colors"
            >
              <span className="truncate">Disconnect</span>
            </AnimatedButton>
          </div>
        ) : (
          <AnimatedButton
            onClick={connectWallet}
            className="flex min-w-[60px] md:min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-7 md:h-10 px-2 md:px-4 bg-primary hover:bg-primary/90 text-white text-xs md:text-sm font-bold leading-normal tracking-[0.015em] font-display transition-colors"
          >
            <span className="material-symbols-outlined text-xs md:text-sm mr-1">
              account_balance_wallet
            </span>
            <span className="truncate">Connect</span>
          </AnimatedButton>
        )}
      </div>
    </header>
  );
};
