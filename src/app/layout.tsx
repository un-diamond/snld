import { Instrument_Serif, Outfit } from "next/font/google";
import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { FloatingContact } from "@/components/ui/FloatingContact";
import { siteConfig } from "@/data/site";
import { getSiteUrl } from "@/lib/seo";
import "./globals.css";

const serif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-instrument",
});

const sans = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "S NISANOV LUX DIAMOND",
    template: "%s",
  },
  description: siteConfig.tagline,
  openGraph: {
    type: "website",
    siteName: "S NISANOV LUX DIAMOND",
    locale: siteConfig.locale,
    title: "S NISANOV LUX DIAMOND",
    description: siteConfig.tagline,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang={siteConfig.locale}
      className={`${serif.variable} ${sans.variable} h-full`}
    >
      <body className="flex min-h-full flex-col bg-[var(--color-ink)] font-sans text-[var(--color-diamond)] antialiased">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <FloatingContact />
        <SiteFooter />
      </body>
    </html>
  );
}