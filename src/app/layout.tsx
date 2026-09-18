import type { Metadata } from "next";
import { Instrument_Sans, Figtree } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const figtree = Figtree({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Salim Sayed — Retail Operations Leader, GCC & India",
  description:
    "Results-driven Retail Operations Leader with 15+ years directing multi-unit store operations, P&L management, and market expansion across the GCC and India. 45+ stores launched. AED 130M portfolio. Teams of 200+.",
  keywords: [
    "Salim Sayed",
    "Retail Operations Leader",
    "Multi-Unit Retail",
    "GCC Retail Expansion",
    "P&L Management",
    "New Store Openings",
    "Dubai UAE",
  ],
  authors: [{ name: "Salim Sayed" }],
  openGraph: {
    title: "Salim Sayed — Retail Operations Leader",
    description:
      "15+ years of multi-unit retail operations, P&L leadership, and market expansion across the GCC and India. 45+ stores launched.",
    type: "profile",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${instrumentSans.variable} ${figtree.variable} antialiased bg-cream text-ink`}
      >
        {children}
      </body>
    </html>
  );
}
