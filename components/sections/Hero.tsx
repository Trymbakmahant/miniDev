"use client";

import React, { useState } from "react";
import { AnimatedButton } from "../ui/AnimatedButton";
import { useWallet } from "../../contexts/WalletContext";

interface HeroProps {
  onIdeaClick?: (idea: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onIdeaClick }) => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const [isBuilding, setIsBuilding] = useState(false);
  const [buildProgress, setBuildProgress] = useState(0);
  const {
    isWalletConnected,
    walletAddress,
    isConnecting,
    connectWallet,
    disconnectWallet,
  } = useWallet();
  const popularIdeas = [
    "Polls",
    "Quizzes",
    "Giveaways",
    "NFT Minter",
    "Simple Game",
  ];

  const handleIdeaClick = (idea: string) => {
    setInputValue(idea);
    setError("");
    onIdeaClick?.(idea);
    // Focus the input after setting the value
    setTimeout(() => {
      const input = document.querySelector(".form-input") as HTMLInputElement;
      if (input) input.focus();
    }, 100);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() === "") {
      setError("Tell us your idea to get started.");
      return;
    }

    setError("");

    if (!isWalletConnected) {
      try {
        await connectWallet();
      } catch {
        setError("Failed to connect wallet. Please try again.");
      }
    } else {
      startBuildingFlow();
    }
  };

  const startBuildingFlow = () => {
    setIsBuilding(true);
    setBuildProgress(0);

    // Simulate building progress
    const interval = setInterval(() => {
      setBuildProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsBuilding(false);
            setBuildProgress(0);
            // In a real app, you would redirect to app.minidev.fun
            window.open("https://app.minidev.fun", "_blank");
          }, 500);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  return (
    <section
      className=" flex  flex-col  h-screen  items-center justify-center px-4 "
      aria-labelledby="hero-heading"
    >
      {/* Pill Container */}
      <div className=" bg-white/98 backdrop-blur-md  border-2 border-primary/80 shadow-2xl rounded-[40px] md:rounded-[80px] p-6 md:p-16 w-full max-w-6xl mx-2 md:mx-4">
        <div className="absolute top-3 left-4 md:top-6 md:left-10 text-primary font-mono text-xs md:text-sm tracking-wider font-bold">
          &gt; INITIALIZING MINIDEV...
        </div>
        <div className="absolute top-3 right-4 md:top-6 md:right-10 text-secondary font-mono text-xs md:text-sm tracking-wider font-bold">
          AI_READY ✓
        </div>
        <div className="absolute bottom-3 left-4 md:bottom-6 md:left-10 text-secondary font-mono text-xs md:text-sm tracking-wider font-bold">
          MINIAPP_BUILDER v2.0
        </div>
        <div className="absolute bottom-3 right-4 md:bottom-6 md:right-10 text-primary font-mono text-xs md:text-sm tracking-wider font-bold">
          FARCASTER_PROTOCOL ✓
        </div>
        <div className="hero-content z-10 flex flex-col gap-4 md:gap-6 w-full">
          <div className="text-center flex flex-col gap-3 md:gap-4 px-2 md:px-4">
            <h1
              id="hero-heading"
              className="hero-title text-text-primary text-3xl md:text-5xl lg:text-7xl font-black leading-tight tracking-[-0.033em] font-display"
            >
              Build Miniapps with miniDev in Seconds.
            </h1>
            <h2 className="hero-subtitle text-text-secondary text-base md:text-lg lg:text-xl font-normal leading-normal font-display max-w-2xl mx-auto">
              Turn your ideas into interactive experiences directly on the
              Farcaster protocol.
            </h2>
          </div>
          <div className="hero-form px-4">
            {!isBuilding ? (
              <form
                className="flex flex-col gap-2 max-w-[480px] mx-auto"
                onSubmit={handleFormSubmit}
              >
                <div className="flex items-center w-full rounded-xl border border-gray-300 bg-white h-12 md:h-14 focus-within:ring-2 focus-within:ring-secondary focus-within:border-secondary">
                  <input
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-l-xl text-text-primary focus:outline-0 border-0 h-full placeholder:text-gray-400 px-3 md:px-[15px] text-sm md:text-base font-normal leading-normal font-display"
                    placeholder="e.g., A poll for my followers"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    disabled={!isWalletConnected}
                  />
                  <AnimatedButton
                    className="flex items-center justify-center h-full px-3 md:px-4 text-white bg-primary rounded-r-xl hover:bg-primary/90 disabled:opacity-50"
                    type="submit"
                    disabled={!isWalletConnected || isConnecting}
                  >
                    {isConnecting ? (
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    ) : (
                      <span className="material-symbols-outlined text-lg md:text-xl">
                        {!isWalletConnected
                          ? "account_balance_wallet"
                          : "arrow_forward"}
                      </span>
                    )}
                  </AnimatedButton>
                </div>
                {error && (
                  <p className="text-red-500 text-xs md:text-sm pl-2">
                    {error}
                  </p>
                )}
                {!isWalletConnected && inputValue.trim() && (
                  <p className="text-blue-600 text-xs md:text-sm pl-2">
                    Press Enter or click to connect wallet and start building
                  </p>
                )}
                {isWalletConnected && (
                  <div className="flex items-center justify-between bg-green-50 border border-green-200 rounded-lg p-3">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-green-600 text-sm">
                        check_circle
                      </span>
                      <span className="text-green-700 text-xs font-medium">
                        Wallet Connected: {walletAddress.slice(0, 6)}...
                        {walletAddress.slice(-4)}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={disconnectWallet}
                      className="text-green-600 hover:text-green-800 text-xs underline"
                    >
                      Disconnect
                    </button>
                  </div>
                )}
              </form>
            ) : (
              <div className="flex flex-col gap-4 max-w-[480px] mx-auto">
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
                    <h3 className="text-lg font-semibold text-text-primary">
                      Building your miniapp...
                    </h3>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full transition-all duration-300 ease-out"
                      style={{ width: `${buildProgress}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-text-secondary mt-2">
                    {buildProgress < 30 && "Initializing AI builder..."}
                    {buildProgress >= 30 &&
                      buildProgress < 60 &&
                      "Generating code..."}
                    {buildProgress >= 60 &&
                      buildProgress < 90 &&
                      "Optimizing for Farcaster..."}
                    {buildProgress >= 90 && "Almost ready!"}
                  </p>
                </div>
              </div>
            )}
            <div className="hero-chips flex gap-1 md:gap-2 lg:gap-3 p-2 md:p-3 flex-wrap justify-center mt-2">
              {popularIdeas.map((idea) => (
                <div
                  key={idea}
                  className="flex h-7 md:h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-secondary/20 hover:bg-secondary/30 cursor-pointer px-3 md:px-4 transition-colors"
                  onClick={() => handleIdeaClick(idea)}
                >
                  <p className="text-secondary text-xs md:text-sm font-medium leading-normal font-display">
                    {idea}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
