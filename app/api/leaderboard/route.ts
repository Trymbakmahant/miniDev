import { NextResponse } from "next/server";

interface AppData {
  rank: number;
  name: string;
  creator: string;
  volume24h: string;
  miniEarned: string;
  avatar: string;
}

// Generate 50 fake leaderboard entries
const generateFakeData = (): AppData[] => {
  const appNames = [
    "Super Polls",
    "ETH Quiz",
    "Based Giveaway",
    "Crypto Trivia",
    "DeFi Challenge",
    "NFT Gallery",
    "Token Swap",
    "Yield Farm",
    "Staking Pool",
    "Liquidity Provider",
    "DAO Voting",
    "Governance Hub",
    "Proposal Tracker",
    "Community Board",
    "Social Feed",
    "Chat Room",
    "Voice Chat",
    "Video Call",
    "Screen Share",
    "File Transfer",
    "Document Editor",
    "Spreadsheet",
    "Presentation",
    "Whiteboard",
    "Mind Map",
    "Task Manager",
    "Project Board",
    "Time Tracker",
    "Calendar",
    "Event Planner",
    "Weather App",
    "News Reader",
    "Stock Tracker",
    "Portfolio Manager",
    "Price Alert",
    "Trading Bot",
    "Arbitrage Scanner",
    "DeFi Analytics",
    "Gas Tracker",
    "Block Explorer",
    "Wallet Connect",
    "Multi-Sig",
    "Hardware Wallet",
    "Seed Phrase",
    "Private Key",
    "Mnemonic Gen",
    "Address Book",
    "Transaction History",
    "Balance Check",
    "Send Money",
  ];

  const creators = [
    "@dwr.eth",
    "@v.vitalik",
    "@jessepollak",
    "@naval",
    "@balajis",
    "@elonmusk",
    "@jack",
    "@brian_armstrong",
    "@cz_binance",
    "@justinsuntron",
    "@gavinwood",
    "@charleshoskinson",
    "@vbuterin",
    "@haydenadams",
    "@stani",
    "@sandeepn",
    "@dankrad",
    "@dapplion",
    "@farcaster",
    "@lensprotocol",
    "@aave",
    "@compound",
    "@uniswap",
    "@sushiswap",
    "@curve",
    "@makerdao",
    "@synthetix",
    "@yearn",
    "@badger",
    "@harvest",
    "@pancakeswap",
    "@venus",
    "@alpaca",
    "@autofarm",
    "@beefy",
    "@convex",
    "@frax",
    "@liquity",
    "@reflexer",
    "@rai",
    "@fei",
    "@tribe",
    "@indexed",
    "@pie",
    "@basket",
    "@set",
    "@tokensets",
    "@defipulse",
    "@coingecko",
    "@coinmarketcap",
  ];

  const data: AppData[] = [];

  for (let i = 0; i < 50; i++) {
    const volume = Math.floor(Math.random() * 50000) + 1000;
    const miniEarned = Math.floor(Math.random() * 10000) + 500;

    data.push({
      rank: i + 1,
      name: appNames[i],
      creator: creators[i],
      volume24h:
        volume >= 1000 ? `${(volume / 1000).toFixed(1)}k` : volume.toString(),
      miniEarned: miniEarned.toLocaleString(),
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${creators[
        i
      ].replace("@", "")}`,
    });
  }

  return data;
};

export async function GET() {
  try {
    const leaderboardData = generateFakeData();

    return NextResponse.json({
      success: true,
      data: leaderboardData,
      total: leaderboardData.length,
    });
  } catch {
    return NextResponse.json(
      { success: false, error: "Failed to fetch leaderboard data" },
      { status: 500 }
    );
  }
}
