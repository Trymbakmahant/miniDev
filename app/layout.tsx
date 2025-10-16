import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { WalletProvider } from "../contexts/WalletContext";
import { PerformanceMonitor } from "../components/PerformanceMonitor";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  preload: false, // Disable preload to prevent render blocking
  weight: ["400", "500", "700"],
  fallback: ["system-ui", "arial"],
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "miniDev - Build viral miniapps on Farcaster",
  description:
    "Create miniapps with a single prompt—no coding required. Build viral miniapps on Farcaster and earn $MINI rewards.",
  keywords: [
    "miniapps",
    "farcaster",
    "web3",
    "crypto",
    "blockchain",
    "no-code",
    "ai",
  ],
  authors: [{ name: "miniDev Team" }],
  creator: "miniDev",
  publisher: "miniDev",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://minidev.fun"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "miniDev - Build viral miniapps on Farcaster",
    description:
      "Create miniapps with a single prompt—no coding required. Build viral miniapps on Farcaster and earn $MINI rewards.",
    url: "https://minidev.fun",
    siteName: "miniDev",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "miniDev - Build viral miniapps on Farcaster",
    description:
      "Create miniapps with a single prompt—no coding required. Build viral miniapps on Farcaster and earn $MINI rewards.",
    creator: "@minidev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://api.dicebear.com" />
        <link rel="dns-prefetch" href="https://api.dicebear.com" />

        {/* Load Material Icons with display swap for better performance */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined&display=swap"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#FE6C11" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="preload"
          href="/api/leaderboard"
          as="fetch"
          crossOrigin="anonymous"
        />

        {/* Critical CSS inlined for mobile performance */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
            /* Critical above-the-fold styles */
            body { font-family: var(--font-space-grotesk), system-ui, arial; }
            .navbar { position: fixed; top: 0; left: 0; right: 0; z-index: 50; }
            .hero-title { font-size: 1.875rem; font-weight: 900; line-height: 1.1; }
            @media (min-width: 768px) {
              .hero-title { font-size: 3rem; }
            }
            @media (min-width: 1024px) {
              .hero-title { font-size: 4.5rem; }
            }
          `,
          }}
        />
      </head>
      <body className={`${spaceGrotesk.variable} antialiased`}>
        <PerformanceMonitor />
        <WalletProvider>{children}</WalletProvider>
      </body>
    </html>
  );
}
