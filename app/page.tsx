"use client";

import React from "react";
import { Navbar } from "../components/layout/Navbar";
import { Hero } from "../components/sections/Hero";
import { HowItWorks } from "../components/sections/HowItWorks";
import { Leaderboard } from "../components/sections/Leaderboard";
import { Footer } from "../components/layout/Footer";
import { useGSAPAnimations } from "../hooks/useGSAPAnimations";

export default function Home() {
  const { heroRef, howItWorksRef, leaderboardRef } = useGSAPAnimations();
  return (
    <>
      <div className="relative w-full overflow-x-hidden"> </div>
      {/* Floating Dithercore Elements */}
      <div className="dither-element dither-element-1"></div>
      <div className="dither-element dither-element-2"></div>
      <div className="dither-element dither-element-3"></div>
      <div className="dither-element dither-element-4"></div>
      <div className="dither-element dither-element-5"></div>
      <div className="dither-element dither-element-6"></div>

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-white px-4 py-2 rounded-lg z-50"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" role="main">
        <div ref={heroRef} className="h-screen">
          <Hero />
        </div>
        <div ref={howItWorksRef} className="min-h-screen">
          <HowItWorks />
        </div>
        <div ref={leaderboardRef} className="min-h-screen">
          <Leaderboard />
        </div>
      </main>
      <Footer />
      <div
        className="fixed bottom-5 right-5 bg-primary text-white px-6 py-4 rounded-xl shadow-2xl border-2 border-primary/20 backdrop-blur-md hidden animate-fade-in-out z-50 max-w-sm"
        id="toast"
      >
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0">
            <span className="material-symbols-outlined text-xl">info</span>
          </div>
          <div>
            <h4 className="font-semibold text-sm">Buy Feature</h4>
            <p className="text-xs opacity-90">
              Coming soon! Stay tuned for miniapp purchases.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
