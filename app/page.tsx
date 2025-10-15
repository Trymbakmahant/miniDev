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
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="flex flex-1 justify-center">
          <div className="layout-content-container flex flex-col w-full">
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-white px-4 py-2 rounded-lg z-50"
            >
              Skip to main content
            </a>
            <Navbar />
            <main id="main-content" role="main" className="flex flex-col">
              <div ref={heroRef}>
                <Hero />
              </div>
              <div ref={howItWorksRef}>
                <HowItWorks />
              </div>
              <div ref={leaderboardRef}>
                <Leaderboard />
              </div>
            </main>
            <Footer />
          </div>
        </div>
      </div>
      <div
        className="fixed bottom-5 right-5 bg-text-primary text-white px-4 py-2 rounded-lg shadow-lg hidden animate-fade-in-out"
        id="toast"
      >
        Coming Soon!
      </div>
    </div>
  );
}
