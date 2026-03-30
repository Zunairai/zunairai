import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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

  // SEO Keywords
  keywords: [
    "Cybersecurity",
    "Endpoint Security",
    "Microsoft Intune",
    "AI Security",
    "Zero Trust",
    "ZunairAI",
  ],

  // Author / Brand
  authors: [{ name: "ZunairAI" }],
  creator: "ZunairAI",

  // Open Graph (for LinkedIn / WhatsApp / Facebook preview)
  openGraph: {
    title: "ZunairAI",
    description:
      "Cybersecurity, AI & Digital Peace Platform for modern enterprises.",
    url: "https://zunairai.com",
    siteName: "ZunairAI",
    type: "website",
  },

  // Twitter Preview
  twitter: {
    card: "summary_large_image",
    title: "ZunairAI",
    description:
      "Cybersecurity, AI & Digital Peace Platform for modern enterprises.",
  },

  // Favicon
  icons: {
    icon: "/favicon.ico",
  },
};

// ================= LAYOUT =================
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#020617] text-white">
        {children}
      </body>
    </html>
  );
}