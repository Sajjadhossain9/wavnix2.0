import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wavnix | Premium Software, AI Systems & Digital Platforms",
  description:
    "We build high-performance custom software, artificial intelligence systems, modern web platforms, cloud infrastructure, and enterprise automation that move businesses forward.",
  keywords: [
    "Wavnix",
    "Software Engineering",
    "AI Systems",
    "Custom Automation",
    "Web Platforms",
    "Enterprise Software Development",
    "Cloud Architecture",
    "Bangladesh Tech Company",
    "High-end technology partner"
  ],
  authors: [{ name: "Wavnix Team" }],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} scroll-smooth`}>
      <body className="bg-bg-primary text-text-main antialiased selection:bg-accent selection:text-bg-primary min-h-screen relative noise-bg">
        {children}
      </body>
    </html>
  );
}
