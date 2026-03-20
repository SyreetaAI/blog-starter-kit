import Footer from "@/app/_components/footer";
import { HOME_OG_IMAGE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import cn from "classnames";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Syreeta.ai | Agentic Governance & Spend Intelligence Advisory",
  description: "Architecting Forensic Capital Integrity and autonomous procurement execution for enterprise legacy systems.",
  openGraph: {
    title: "Syreeta.ai Advisory Framework",
    description: "Bridging legacy systems with autonomous procurement execution.",
    url: "https://syreeta.ai",
    siteName: "Syreeta.ai",
    images: [
      {
        url: HOME_OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "Syreeta.ai Advisory Framework Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Syreeta.ai | Agentic Governance",
    description: "Architecting Forensic Capital Integrity.",
    images: [HOME_OG_IMAGE_URL],
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
        {/* Favicon links remain the same */}
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="theme-color" content="#0F172A" />
      </head>
      {/* 1. Removed 'dark:bg-slate-900' to disable dark mode 
          2. Added style={{ color: '#0F172A' }} to force Navy font everywhere
      */}
      <body
        className={cn(inter.className, "bg-white")}
        style={{ color: '#0F172A' }}
      >
        {/* Removed <ThemeSwitcher /> as requested */}
        <div className="min-h-screen">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
