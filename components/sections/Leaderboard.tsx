"use client";

import React, { useState } from "react";
import Image from "next/image";
import { AnimatedButton } from "../ui/AnimatedButton";

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

  const apps: AppData[] = [
    {
      rank: 1,
      name: "Super Polls",
      creator: "@dwr.eth",
      volume24h: "12.5k",
      miniEarned: "5,200",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=dwr",
    },
    {
      rank: 2,
      name: "ETH Quiz",
      creator: "@v.vitalik",
      volume24h: "9.8k",
      miniEarned: "4,100",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=vitalik",
    },
    {
      rank: 3,
      name: "Based Giveaway",
      creator: "@jessepollak",
      volume24h: "7.2k",
      miniEarned: "3,500",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=jesse",
    },
  ];

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
      className="relative flex flex-col items-center justify-center h-screen px-4 md:px-10 lg:px-20 xl:px-40 overflow-hidden"
      aria-labelledby="leaderboard-heading"
    >
      <div className="leaderboard-float absolute -right-60 top-1/2 -translate-y-1/2 text-secondary/10 text-[40rem] leading-none material-symbols-outlined transform rotate-45">
        leaderboard
      </div>
      <div className="leaderboard-content z-10 flex flex-col gap-8 w-full max-w-[960px]">
        <div className="flex flex-col gap-2 text-center">
          <h2
            id="leaderboard-heading"
            className="leaderboard-title text-text-primary text-5xl font-bold leading-tight tracking-[-0.015em] md:text-6xl font-display"
          >
            Leaderboard
          </h2>
          <p className="text-text-secondary text-lg font-normal leading-normal font-display">
            Discover the most popular miniapps and their creators on Farcaster.
          </p>
        </div>
        <div className="leaderboard-table border border-gray-200 rounded-lg bg-white/50 backdrop-blur-sm">
          <div className="flex border-b border-gray-200">
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
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-background-light/50">
                <tr>
                  <th className="p-4 text-sm font-bold text-text-primary">#</th>
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
                {apps.slice(0, limit).map((app, index) => (
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
                        <a
                          className="px-3 py-1.5 text-sm font-medium text-primary rounded-md bg-primary/10 hover:bg-primary/20"
                          href="#"
                        >
                          Try
                        </a>
                        <AnimatedButton
                          className="px-3 py-1.5 text-sm font-medium text-white rounded-md bg-secondary hover:bg-secondary/90"
                          onClick={showToast}
                        >
                          Buy
                        </AnimatedButton>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
