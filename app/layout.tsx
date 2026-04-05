import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "../components/Providers"; // ✅ ADD THIS

// ================= FONTS =================
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ================= METADATA =================
export const metadata: Metadata = {
  title: {
    default: "ZunairAI",
    template: "%s | ZunairAI",
  },
  description:
    "ZunairAI is a cybersecurity and AI platform focused on endpoint security, infrastructure protection, and digital peace.",

  keywords: [
    "Cybersecurity",
    "Endpoint Security",
    "Microsoft Intune",
    "AI Security",
    "Zero Trust",
    "ZunairAI",
  ],

  authors: [{ name: "ZunairAI" }],
  creator: "ZunairAI",

  openGraph: {
    title: "ZunairAI",
    description:
      "Cybersecurity, AI & Digital Peace Platform for modern enterprises.",
    url: "https://zunairai.com",
    siteName: "ZunairAI",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "ZunairAI",
    description:
      "Cybersecurity, AI & Digital Peace Platform for modern enterprises.",
  },

  icons: {
    icon: "/favicon.ico",
  },
};

// ================= LAYOUT =================
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#020617] text-white">

        {/* ✅ WRAP WITH PROVIDER */}
        <Providers>
          {children}
        </Providers>

      </body>
    </html>
  );
}