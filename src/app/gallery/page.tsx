import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { PageHero } from "@/components/page-hero";
import { GalleryGrid } from "@/components/gallery-grid";
import { gallery } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photographs from 2XBT departures — Ladakh, Kashmir, Nepal, the Char Dham route, Kerala, the Andamans and the Sahyadris.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Everywhere our groups"
        accent="have been"
        blurb={`${gallery.length} frames from the road — passes, temples, backwaters, beaches and the people who travelled with us.`}
        image="/images/places/turtuk-village.webp"
        imageAlt="Turtuk village in the Nubra valley, Ladakh"
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/gallery", label: "Gallery" },
        ]}
      />

      <section className="shell py-14">
        <GalleryGrid />
      </section>

      <section
        className="border-t py-20"
        style={{ backgroundColor: "var(--bg-sunken)", borderColor: "var(--rule)" }}
      >
        <div className="shell text-center">
          <h2 className="display mx-auto max-w-[20ch] text-[1.9rem] sm:text-[2.4rem]">
            Your photos could be{" "}
            <span className="script text-[1.15em]" style={{ color: "var(--accent)" }}>
              next
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-[52ch]" style={{ color: "var(--ink-soft)" }}>
            Pick a departure, bring a camera, and we&rsquo;ll handle the rest.
          </p>
          <Link href="/packages" className="btn btn-primary mt-8">
            Browse packages
            <ArrowRight size={16} weight="bold" />
          </Link>
        </div>
      </section>
    </>
  );
}
