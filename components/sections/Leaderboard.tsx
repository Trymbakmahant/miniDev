"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { AnimatedButton } from "../ui/AnimatedButton";
import { useTextAnimations } from "../../hooks/useTextAnimations";

interface LeaderboardProps {
  showViewAll?: boolean;
  limit?: number;
}

interface AppData {
  rank: number;
  name: string;
  creator: string;
  volume24h: string;
  miniEarned: string;
  avatar: string;
}

export const Leaderboard: React.FC<LeaderboardProps> = ({ limit = 3 }) => {
  const [activeTab, setActiveTab] = useState("today");
  const [apps, setApps] = useState<AppData[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const { addTextRef } = useTextAnimations();

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await fetch("/api/leaderboard");
        const result = await response.json();
        if (result.success) {
          setApps(result.data);
        }
      } catch (error) {
        console.error("Failed to fetch leaderboard:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, []);

  const showToast = () => {
    const toast = document.getElementById("toast");
    if (toast) {
      toast.classList.remove("hidden");
      setTimeout(() => {
        toast.classList.add("hidden");
      }, 3000);
    }
  };

  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-screen px-4 md:px-10 lg:px-20 xl:px-40 overflow-hidden py-32"
      aria-labelledby="leaderboard-heading"
    >
      {/* Pill Container */}
      <div className="relative bg-white/98 backdrop-blur-md border-2 border-pink-400/80 shadow-2xl rounded-[40px] md:rounded-[80px] p-6 md:p-16 w-full max-w-6xl mx-2 md:mx-4">
        <div className="absolute top-3 left-4 md:top-6 md:left-10 text-pink-600 font-mono text-xs md:text-sm tracking-wider font-bold">
          &gt; SCANNING LEADERBOARD...
        </div>
        <div className="absolute top-3 right-4 md:top-6 md:right-10 text-cyan-600 font-mono text-xs md:text-sm tracking-wider font-bold">
          DATA_SYNC ✓
        </div>
        <div className="absolute bottom-3 left-4 md:bottom-6 md:left-10 text-purple-600 font-mono text-xs md:text-sm tracking-wider font-bold">
          RANKING_ENGINE v2.0
        </div>
        <div className="absolute bottom-3 right-4 md:bottom-6 md:right-10 text-green-600 font-mono text-xs md:text-sm tracking-wider font-bold">
          LIVE_UPDATE ✓
        </div>
        <div className="leaderboard-content z-10 flex flex-col gap-6 md:gap-8 w-full">
          <div className="flex flex-col gap-2 text-center">
            <h2
              id="leaderboard-heading"
              ref={addTextRef}
              className="leaderboard-title text-text-primary text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-[-0.015em] font-display"
            >
              Leaderboard
            </h2>
            <p
              ref={addTextRef}
              className="text-text-secondary text-base md:text-lg font-normal leading-normal font-display px-4"
            >
              Discover the most popular miniapps and their creators on
              Farcaster.
            </p>
          </div>
          <div className="leaderboard-table border border-gray-200 rounded-[25px] md:rounded-[50px] bg-white/50 backdrop-blur-sm overflow-hidden">
            <div className="flex border-b border-gray-200 px-4">
              <button
                className={`px-4 py-2 text-sm font-medium border-b-2 ${
                  activeTab === "today"
                    ? "border-primary text-primary"
                    : "text-text-secondary hover:text-text-primary"
                }`}
                onClick={() => setActiveTab("today")}
              >
                Today
              </button>
              <button
                className={`px-4 py-2 text-sm font-medium border-b-2 ${
                  activeTab === "week"
                    ? "border-primary text-primary"
                    : "text-text-secondary hover:text-text-primary"
                }`}
                onClick={() => setActiveTab("week")}
              >
                This Week
              </button>
              <button
                className={`px-4 py-2 text-sm font-medium border-b-2 ${
                  activeTab === "alltime"
                    ? "border-primary text-primary"
                    : "text-text-secondary hover:text-text-primary"
                }`}
                onClick={() => setActiveTab("alltime")}
              >
                All-time
              </button>
            </div>
            <div className="overflow-x-auto p-4 max-h-[600px] overflow-y-auto scrollbar-thin">
              <table className="w-full text-left">
                <thead className="bg-background-light/50">
                  <tr>
                    <th className="p-4 text-sm font-bold text-text-primary">
                      #
                    </th>
                    <th className="p-4 text-sm font-bold text-text-primary">
                      Miniapp
                    </th>
                    <th className="p-4 text-sm font-bold text-text-primary hidden md:table-cell">
                      Creator
                    </th>
                    <th className="p-4 text-sm font-bold text-text-primary text-right hidden md:table-cell">
                      24h Volume
                    </th>
                    <th className="p-4 text-sm font-bold text-text-primary text-right hidden md:table-cell">
                      MINI Earned
                    </th>
                    <th className="p-4 text-sm font-bold text-text-primary text-right md:hidden">
                      Details
                    </th>
                    <th className="p-4 text-sm font-bold text-text-primary text-center">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr>
                      <td
                        colSpan={7}
                        className="p-8 text-center text-text-secondary"
                      >
                        Loading leaderboard data...
                      </td>
                    </tr>
                  ) : (
                    apps
                      .slice(0, showAll ? apps.length : limit)
                      .map((app, index) => (
                        <tr
                          key={index}
                          className="table-row border-b border-gray-200"
                        >
                          <td className="p-4 font-medium text-text-primary">
                            {app.rank}
                          </td>
                          <td className="p-4">
                            <div className="flex items-center gap-3">
                              <Image
                                alt={app.name}
                                className="w-8 h-8 rounded-md"
                                src={app.avatar}
                                width={32}
                                height={32}
                                loading="lazy"
                                placeholder="blur"
                                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                              />
                              <div className="md:hidden">
                                <p className="font-bold text-text-primary">
                                  {app.name}
                                </p>
                                <p className="text-sm text-text-secondary">
                                  {app.creator}
                                </p>
                              </div>
                              <p className="hidden md:block font-bold text-text-primary">
                                {app.name}
                              </p>
                            </div>
                          </td>
                          <td className="p-4 text-text-secondary hidden md:table-cell">
                            {app.creator}
                          </td>
                          <td className="p-4 text-text-primary font-medium text-right hidden md:table-cell">
                            {app.volume24h}
                          </td>
                          <td className="p-4 text-primary font-medium text-right hidden md:table-cell">
                            {app.miniEarned}
                          </td>
                          <td className="p-4 text-right md:hidden">
                            <div className="flex flex-col">
                              <span className="font-medium text-text-primary">
                                {app.volume24h}
                              </span>
                              <span className="text-xs text-text-secondary">
                                Volume
                              </span>
                            </div>
                          </td>
                          <td className="p-4 text-center">
                            <div className="flex justify-center gap-2">
                              <AnimatedButton
                                className="px-3 py-1.5 text-sm font-medium text-primary rounded-md bg-primary/10 hover:bg-primary/20"
                                onClick={() =>
                                  window.open(
                                    `https://app.minidev.fun/try/${app.name
                                      .toLowerCase()
                                      .replace(/\s+/g, "-")}`,
                                    "_blank"
                                  )
                                }
                              >
                                Try
                              </AnimatedButton>
                              <AnimatedButton
                                className="px-3 py-1.5 text-sm font-medium text-white rounded-md bg-secondary hover:bg-secondary/90"
                                onClick={showToast}
                              >
                                Buy
                              </AnimatedButton>
                            </div>
                          </td>
                        </tr>
                      ))
                  )}
                </tbody>
              </table>
            </div>
            {!loading && apps.length > limit && (
              <div className="flex justify-center p-4 border-t border-gray-200">
                <AnimatedButton
                  onClick={() => setShowAll(!showAll)}
                  className="px-6 py-2 text-sm font-medium text-primary rounded-full bg-primary/10 hover:bg-primary/20 border border-primary/20"
                >
                  {showAll
                    ? `Show Top ${limit}`
                    : `View All ${apps.length} Apps`}
                </AnimatedButton>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
