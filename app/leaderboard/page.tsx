import React from "react";
import { Navbar } from "../../components/layout/Navbar";
import { Footer } from "../../components/layout/Footer";
import { Leaderboard } from "../../components/sections/Leaderboard";

export default function LeaderboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <div className="pt-16">
          <Leaderboard showViewAll={false} limit={20} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
