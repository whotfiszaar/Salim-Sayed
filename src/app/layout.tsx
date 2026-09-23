import type { Metadata, Viewport } from "next";
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

const SITE_URL = "https://salim-sayed.vercel.app";
const TITLE = "Salim Sayed | Retail Operations Leader in Dubai, UAE";
const DESCRIPTION =
  "Salim Sayed is a retail operations leader in Dubai with 15+ years of multi-unit store operations, P&L management and market expansion across the GCC and India. 45+ stores launched, AED 130M portfolio, teams of 200+.";

export const viewport: Viewport = {
  themeColor: "#22223B",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | Salim Sayed, Retail Operations Leader",
  },
  description: DESCRIPTION,
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Salim Sayed",
  },
  keywords: [
    "Salim Sayed",
    "Salim Ahmed Sayed",
    "retail operations leader Dubai",
    "retail operations manager UAE",
    "multi-unit retail operations",
    "GCC retail expansion",
    "new store opening manager",
    "P&L management retail",
    "area manager retail Dubai",
    "retail manager Life Pharmacy",
    "Annabelle retail manager",
    "Forest Essentials regional manager",
    "store operations GCC",
    "retail turnaround specialist",
    "Six Sigma Black Belt retail",
  ],
  authors: [{ name: "Salim Sayed", url: "https://www.linkedin.com/in/salim-sayed-93126b62" }],
  creator: "Salim Sayed",
  publisher: "Salim Sayed",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    url: SITE_URL,
    siteName: "Salim Sayed Portfolio",
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_US",
    images: [
      {
        url: "https://salim-sayed.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Salim Sayed, Retail Operations Leader based in Dubai, UAE",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["https://salim-sayed.vercel.app/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "professional profile",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
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
