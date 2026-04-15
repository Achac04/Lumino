import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";

import { PageShell } from "@/components/layout/page-shell";
import { portfolio } from "@/config/portfolio";
import { getSiteUrl } from "@/lib/site-url";

import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["400", "500", "600"],
});

const description =
  "Boutique lighting atelier prototype — restoration, catalog, cart, checkout, and case study documentation.";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "Lumina & Lore — Curated & Restored Lighting",
    template: "%s | Lumina & Lore",
  },
  description,
  applicationName: "Lumina & Lore",
  authors: [{ name: portfolio.displayName, url: portfolio.links.github }],
  creator: portfolio.displayName,
  keywords: [
    "Next.js",
    "Tailwind CSS",
    "portfolio",
    "e-commerce UI",
    "accessibility",
    "Radix UI",
  ],
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: "Lumina & Lore",
    title: "Lumina & Lore — Curated & Restored Lighting",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumina & Lore",
    description,
  },
  category: "design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <PageShell>{children}</PageShell>
      </body>
    </html>
  );
}
