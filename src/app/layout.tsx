import type { Metadata, Viewport } from "next";
import { Sora, Plus_Jakarta_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FloatingContact } from "@/components/floating-contact";
import { SketchDefs } from "@/components/sketch-art";
import { site } from "@/data/site";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} Tours & Travels | Group tours, yatras and treks across India & Nepal`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "group tours India",
    "Char Dham Yatra package",
    "Kedarnath tour from Mumbai",
    "Ladakh bike trip",
    "Kashmir tour package",
    "Kerala backwaters package",
    "Nepal Annapurna base camp trek",
    "Andaman islands tour",
    "2XBT travels Mumbai",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    siteName: site.legalName,
    title: `${site.name} Tours & Travels`,
    description: site.description,
    images: [{ url: "/images/tours/ladakh-explorer-6d5n.webp", width: 1800, height: 1196 }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  icons: { icon: "/images/logo-mark.png", apple: "/images/logo-mark.png" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f9fc" },
    { media: "(prefers-color-scheme: dark)", color: "#030f1d" },
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
  description: site.description,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.line1,
    addressLocality: "Mumbai",
    postalCode: "400012",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  areaServed: "India",
  sameAs: [site.socials.instagram, site.socials.facebook],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-IN"
      className={`${sora.variable} ${jakarta.variable} ${instrument.variable}`}
    >
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-[var(--accent)] focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        {/* One copy of the pencil-roughen filter, referenced by every sketch. */}
        <SketchDefs />
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <FloatingContact />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </body>
    </html>
  );
}
