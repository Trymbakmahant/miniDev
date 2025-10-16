# miniDev - Build Viral Miniapps on Farcaster

This is a [Next.js](https://nextjs.org) project that showcases a platform for building miniapps on the Farcaster protocol. The application features a modern, animated interface with wallet integration and a leaderboard system.

## 🚀 Features

- **Modern UI/UX**: Beautiful, responsive design with GSAP animations
- **Wallet Integration**: Connect wallet functionality (demo/placeholder)
- **Leaderboard**: Dynamic leaderboard with 50 mock entries
- **Performance Optimized**: Mobile-first design with optimized loading
- **Word-by-Word Animations**: Scroll-triggered text animations

## 📡 API & Data

### Mock API Implementation

This project uses **Next.js API Routes** for mock data:

- **Leaderboard API**: `/api/leaderboard` - Returns 50 fake leaderboard entries
- **Mock Data**: Generated dynamically with realistic app names, creators, and metrics
- **No External Dependencies**: All data is generated server-side using Next.js API routes

### Wallet Connection (Demo Only)

⚠️ **Important**: The wallet connection is **fake/demo only** for showcase purposes:

- **No Real Blockchain Integration**: Wallet connect is simulated
- **Mock Wallet Address**: Shows placeholder wallet addresses
- **UI Demonstration**: Designed to showcase the user experience
- **Not Production Ready**: Do not use for actual wallet connections

## 🛠️ Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## 🎨 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with custom animations
- **Animations**: GSAP with ScrollTrigger
- **Fonts**: Space Grotesk with system fallbacks
- **Icons**: Material Symbols (loaded asynchronously)
- **Performance**: Optimized for mobile with critical CSS inlining

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
