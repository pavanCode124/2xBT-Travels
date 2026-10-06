import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  UsersFour,
  Buildings,
  Mountains,
  Heart,
  WhatsappLogo,
  Check,
} from "@phosphor-icons/react/dist/ssr";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { PackageCard } from "@/components/package-card";
import { Reveal } from "@/components/reveal";
import { WaveDivider } from "@/components/wave";
import { FlightPath, SketchBalloon } from "@/components/sketch-art";
import { packages, categories, inr } from "@/data/packages";
import { site, whatsappLink } from "@/data/site";

export const metadata: Metadata = {
  title: "Group Tours",
  description:
    "Fixed-departure and private group tours from 2XBT — friends and family groups, corporate offsites, college trips, yatra groups and treks on your own dates.",
};

const GROUP_TYPES = [
  {
    icon: UsersFour,
    title: "Friends & family",
    body: "Six people or sixty. We rework the sharing basis, the vehicle and the stay list around the actual group, then quote one fixed number.",
    art: "/images/group-maheshwar.webp",
  },
  {
    icon: Buildings,
    title: "Corporate & college",
    body: "Offsites, annual trips and student groups, with GST invoicing, a single point of contact and a coordinator travelling with the group.",
    art: "/images/places/manali.webp",
  },
  {
    icon: Heart,
    title: "Yatra groups",
    body: "Char Dham, Kedarnath, the Jyotirlingas and Jagannath Puri, planned around darshan timings, elders and medical support.",
    art: "/images/places/kedarnath.webp",
  },
  {
    icon: Mountains,
    title: "Treks & bike rides",
    body: "Sahyadri forts, Annapurna Base Camp and the Ladakh circuit — ride captains, backup vehicles and mechanic support included.",
    art: "/images/places/annapurna.webp",
  },
];

const INCLUDED = [
  "A 2XBT tour captain travelling with the group",
  "Stays on the sharing basis you choose",
  "All transfers, sightseeing and toll, parking and driver allowances",
  "Breakfast and dinner on most itineraries",
  "Permits and inner-line permissions where needed",
  "First aid, and oxygen support at altitude",
  "24×7 ground support and emergency contacts",
  "A costed, written itinerary before you pay",
];

export default function GroupToursPage() {
  // Trips that actually suit a group booking: multi-day, multi-tier pricing.
  const groupPicks = packages
    .filter((p) => p.days >= 4 && p.pricing.length > 1)
    .sort((a, b) => b.pricing.length - a.pricing.length)
    .slice(0, 6);

  const cheapest = Math.min(...packages.map((p) => p.price));

  return (
    <>
      <PageHero
        eyebrow="Group tours"
        title="Bring the group."
        accent="We'll bring the plan."
        blurb="Fixed-departure seats or a private group on your own dates — same operations team, same costing discipline, same captain on the bus."
        image="/images/places/sonmarg.webp"
        imageAlt="A group road through the Sonmarg valley in Kashmir"
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/group-tours", label: "Group Tours" },
        ]}
      >
        <div className="mt-9 flex flex-wrap gap-3">
          <Link href="/contact" className="btn btn-primary">
            Get a group quote
            <ArrowRight size={16} weight="bold" />
          </Link>
          <a
            href={whatsappLink(
              "Hi 2XBT, I'd like a quote for a group trip. Here are our dates and group size:",
            )}
            target="_blank"
            rel="noreferrer"
            className="btn btn-onimage"
          >
            <WhatsappLogo size={18} weight="fill" />
            WhatsApp the details
          </a>
        </div>
      </PageHero>

      {/* ---- Group types -------------------------------------------- */}
      <section className="shell py-16 md:py-24">
        <SectionHeading
          eyebrow="Who we move"
          title="Four kinds of group,"
          accent="one process"
          blurb="Whatever the group looks like, the planning is the same: a written itinerary, a fixed per-head price and someone from 2XBT on the trip."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {GROUP_TYPES.map(({ icon: Icon, title, body, art }, i) => (
            <Reveal key={title} delay={i * 90} as="article" className="h-full">
              <div className="surface surface-lift flex h-full overflow-hidden">
                <div className="relative hidden w-40 shrink-0 sm:block">
                  <Image
                    src={art}
                    alt=""
                    fill
                    sizes="10rem"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <span
                    className="grid h-11 w-11 place-items-center rounded-xl"
                    style={{ backgroundColor: "var(--accent-soft)", color: "var(--accent)" }}
                  >
                    <Icon size={21} weight="duotone" />
                  </span>
                  <h3 className="mt-4 font-display text-[1.1875rem] font-semibold">{title}</h3>
                  <p className="mt-2.5 leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                    {body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---- What's in it ------------------------------------------- */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "var(--color-navy-900)" }}>
        <div className="grid-veil absolute inset-0" />
        <div aria-hidden className="pointer-events-none absolute inset-0 select-none text-white">
          <SketchBalloon className="bob sketch-layer bottom-[8%] left-[2%] hidden h-[170px] w-[114px] opacity-[0.08] xl:block" />
          <FlightPath
            className="sketch-layer right-0 top-[4%] hidden h-[150px] w-[48%] opacity-[0.13] lg:block"
            duration={25}
            dots={false}
          />
        </div>
        <div className="shell relative grid gap-12 py-16 md:py-24 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <SectionHeading
              onDeep
              align="left"
              eyebrow="Every group departure"
              title="What the per-head price"
              accent="actually covers"
              blurb="Exact inclusions vary by itinerary and are listed in full on each package page — but this is the floor."
            />
          </div>

          <Reveal from="right">
            <ul className="grid gap-3 sm:grid-cols-2">
              {INCLUDED.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl p-3.5 text-[0.9375rem] leading-snug"
                  style={{
                    backgroundColor: "rgb(255 255 255 / 0.05)",
                    border: "1px solid var(--rule-onDeep)",
                    color: "var(--ink-onDeep-soft)",
                  }}
                >
                  <span
                    aria-hidden
                    className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full"
                    style={{ backgroundColor: "var(--color-flame-500)", color: "#fff" }}
                  >
                    <Check size={12} weight="bold" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
        <WaveDivider fill="var(--bg)" accent={false} />
      </section>

      {/* ---- Picks --------------------------------------------------- */}
      <section className="shell py-16 md:py-24">
        <SectionHeading
          align="left"
          eyebrow="Good for groups"
          title="Itineraries built for"
          accent="a full bus"
          blurb="Multi-day trips with quad, triple and double sharing already priced — so a mixed group splits cleanly."
          action={
            <Link href="/packages" className="btn btn-ghost">
              All {packages.length} packages
              <ArrowRight size={16} weight="bold" />
            </Link>
          }
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {groupPicks.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 90} className="h-full">
              <PackageCard pkg={p} priority={i < 3} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---- Regions + CTA ------------------------------------------- */}
      <section
        className="border-t py-16 md:py-20"
        style={{ backgroundColor: "var(--bg-sunken)", borderColor: "var(--rule)" }}
      >
        <div className="shell">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div>
              <h2 className="display max-w-[20ch] text-[1.9rem] sm:text-[2.3rem]">
                Private groups start at{" "}
                <span className="script text-[1.15em]" style={{ color: "var(--accent)" }}>
                  {inr(cheapest)}
                </span>{" "}
                a head
              </h2>
              <p className="mt-4 max-w-[54ch]" style={{ color: "var(--ink-soft)" }}>
                Send the dates, the group size and a rough budget. You get a day-by-day
                plan and a fixed quote back, usually the same day. Call{" "}
                <a href={site.phoneHref} className="font-semibold" style={{ color: "var(--accent)" }}>
                  {site.phone}
                </a>{" "}
                if it&rsquo;s easier.
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                {categories.map((c) => (
                  <Link key={c.id} href={`/packages?category=${c.id}`} className="chip">
                    {c.label}
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/contact" className="btn btn-primary shrink-0">
              Get a group quote
              <ArrowRight size={17} weight="bold" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
