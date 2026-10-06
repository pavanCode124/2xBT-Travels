import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHero } from "@/components/page-hero";
import { PackagesExplorer } from "@/components/packages-explorer";
import { packages } from "@/data/packages";

export const metadata: Metadata = {
  title: "Tour Packages",
  description:
    "All 52 2XBT tour packages — Char Dham and Kedarnath yatras, Ladakh and Kashmir, Nepal and Annapurna, Kerala, Andaman, Sahyadri treks and bike rides. Filter by region, length and budget.",
};

export default function PackagesPage() {
  return (
    <>
      <PageHero
        eyebrow="Tour packages"
        title="Every trip we run,"
        accent="in one place"
        blurb={`${packages.length} ready itineraries across India and Nepal — priced, day-planned and open for booking. Filter down to the one that fits.`}
        image="/images/tours/kerala-bike-ride-adventure-5d4d.webp"
        imageAlt="A coastal road on a 2XBT bike ride through Kerala"
      />

      <section className="shell pb-24 pt-10">
        <Suspense fallback={null}>
          <PackagesExplorer all={packages} />
        </Suspense>
      </section>
    </>
  );
}
