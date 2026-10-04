import type { Metadata, Viewport } from "next";
import { Outfit, Geist } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsappFab } from "@/components/whatsapp-fab";
import { site } from "@/data/site";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} Tours & Travels | Group tours and treks across India`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "group tours India",
    "Char Dham Yatra package",
    "Kedarnath tour from Mumbai",
    "Kerala backwaters package",
    "trek organisers Mumbai",
    "2XBT travels",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    siteName: site.legalName,
    title: `${site.name} Tours & Travels`,
    description: site.description,
  },
  robots: { index: true, follow: true },
  icons: { icon: "/images/logo.png", apple: "/images/logo.png" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbf8f5" },
    { media: "(prefers-color-scheme: dark)", color: "#011a2e" },
  ],
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: site.legalName,
  alternateName: site.name,
  url: site.url,
  telephone: site.phone,
  email: site.email,
  slogan: site.tagline,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.line1,
    addressLocality: "Mumbai",
    postalCode: "400012",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  sameAs: [site.socials.instagram, site.socials.facebook],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" className={`${outfit.variable} ${geist.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-[var(--accent)] focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-[var(--accent-ink)]"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <WhatsappFab />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </body>
    </html>
  );
}
