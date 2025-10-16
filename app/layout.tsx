import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { WalletProvider } from "../contexts/WalletContext";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  weight: ["400", "500", "700"],
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
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#FE6C11" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${spaceGrotesk.variable} antialiased`}>
        <WalletProvider>{children}</WalletProvider>
      </body>
    </html>
  );
}
