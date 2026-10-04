import type { Metadata } from "next";
import { PackagesExplorer } from "@/components/packages-explorer";
import { packages, inr } from "@/data/packages";

export const metadata: Metadata = {
  title: "Tour Packages",
  description:
    "All 8 group tour packages from 2XBT: Char Dham, Do Dham, Kedarnath, Kerala backwaters, Jagannath Puri and Ujjain, with full itineraries and fixed prices.",
};

export default function PackagesPage() {
  const cheapest = Math.min(...packages.map((p) => p.price));

  return (
    <>
      <section className="shell pt-12 pb-10 md:pt-16 md:pb-12">
        <h1 className="max-w-[18ch] font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl">
          Every tour we run, start to finish
        </h1>
        <p
          className="mt-5 max-w-[58ch] text-lg leading-relaxed"
          style={{ color: "var(--ink-soft)" }}
        >
          Fixed departure dates, day by day itineraries and the full inclusion
          list on every page. Prices are per person on triple sharing, starting
          at {inr(cheapest)}.
        </p>
      </section>

      <PackagesExplorer packages={packages} />
    </>
  );
}
