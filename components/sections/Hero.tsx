import React, { useState } from "react";
import { AnimatedButton } from "../ui/AnimatedButton";
import Image from "next/image";

interface HeroProps {
  onIdeaClick?: (idea: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onIdeaClick }) => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
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
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() === "") {
      setError("Tell us your idea to get started.");
    } else {
      setError("");
      // Simulate login and building process
      console.log("Login flow triggered...");
      setTimeout(() => {
        console.log("Building...");
        // In a real app, you would redirect to app.minidev.fun
        alert("Success! Routing to your new miniapp.");
      }, 2000);
    }
  };

  return (
    <section
      className="relative flex flex-col items-center justify-center h-screen px-4 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Pill Container */}
      <div className="relative bg-white/98 backdrop-blur-md border-2 border-cyan-400/80 shadow-2xl rounded-[80px] p-16 w-full max-w-6xl mx-4">
        <div className="absolute top-6 left-10 text-cyan-600 font-mono text-sm tracking-wider font-bold">
          &gt; INITIALIZING MINIDEV...
        </div>
        <div className="absolute top-6 right-10 text-pink-600 font-mono text-sm tracking-wider font-bold">
          AI_READY ✓
        </div>
        <div className="absolute bottom-6 left-10 text-purple-600 font-mono text-sm tracking-wider font-bold">
          MINIAPP_BUILDER v2.0
        </div>
        <div className="absolute bottom-6 right-10 text-green-600 font-mono text-sm tracking-wider font-bold">
          FARCASTER_PROTOCOL ✓
        </div>
        <div className="hero-content z-10 flex flex-col gap-6 w-full">
          <div className="text-center flex flex-col gap-4 px-4">
            <h1
              id="hero-heading"
              className="hero-title text-text-primary text-5xl font-black leading-tight tracking-[-0.033em] md:text-7xl font-display"
            >
              Build Miniapps with miniDev in Seconds.
            </h1>
            <h2 className="hero-subtitle text-text-secondary text-lg font-normal leading-normal md:text-xl font-display max-w-2xl mx-auto">
              Turn your ideas into interactive experiences directly on the
              Farcaster protocol.
            </h2>
          </div>
          <div className="hero-form px-4">
            <form
              className="flex flex-col gap-2 max-w-[480px] mx-auto"
              onSubmit={handleFormSubmit}
            >
              <div className="flex items-center w-full rounded-xl border border-gray-300 bg-white h-14 focus-within:ring-2 focus-within:ring-secondary focus-within:border-secondary">
                <input
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-l-xl text-text-primary focus:outline-0 border-0 h-full placeholder:text-gray-400 px-[15px] text-base font-normal leading-normal font-display"
                  placeholder="e.g., A poll for my followers"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <AnimatedButton
                  className="flex items-center justify-center h-full px-4 text-white bg-primary rounded-r-xl hover:bg-primary/90"
                  type="submit"
                >
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </AnimatedButton>
              </div>
              {error && <p className="text-red-500 text-sm pl-2">{error}</p>}
            </form>
            <div className="hero-chips flex gap-2 sm:gap-3 p-3 flex-wrap justify-center mt-2">
              {popularIdeas.map((idea) => (
                <div
                  key={idea}
                  className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-secondary/20 hover:bg-secondary/30 cursor-pointer px-4 transition-colors"
                  onClick={() => handleIdeaClick(idea)}
                >
                  <p className="text-secondary text-sm font-medium leading-normal font-display">
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
