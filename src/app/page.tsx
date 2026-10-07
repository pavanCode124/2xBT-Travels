import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Receipt,
  UsersThree,
  Path,
  Headset,
  CurrencyInr,
  ChatCircleDots,
  CalendarCheck,
  Backpack,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/reveal";
import { HomeHero } from "@/components/home-hero";
import { DestinationMarquee } from "@/components/destination-marquee";
import { SectionHeading } from "@/components/section-heading";
import { PackageCard } from "@/components/package-card";
import { StatBand } from "@/components/stat-band";
import { WaveDivider } from "@/components/wave";
import {
  FlightPath,
  SketchBalloon,
  SketchCompass,
  SketchPalm,
  SketchRoute,
  SketchShikara,
  SketchSuitcase,
  SketchTemple,
} from "@/components/sketch-art";
import { categories, packages, inr } from "@/data/packages";

const CATEGORY_ART: Record<string, string> = {
  yatra: "/images/tours/kedarnath-yatra-ex-haridwar.webp",
  himalaya: "/images/tours/ladakh-kashmir-explorer-9d8n.webp",
  kerala: "/images/tours/munnar-thekkady-allepy-5d4n.webp",
  islands: "/images/tours/andaman-islands-6-day-tour.webp",
  trek: "/images/tours/raigad-fort.webp",
};

const PROMISES = [
  {
    icon: Receipt,
    title: "Costed up front",
    body: "Every package lists what the price covers and, just as plainly, what it does not. No surprises at the counter.",
  },
  {
    icon: Path,
    title: "Written day by day",
    body: "The itinerary is set before bookings open — the stay, the drive, the darshan and the trek day, all named.",
  },
  {
    icon: UsersThree,
    title: "A captain on every trip",
    body: "A 2XBT tour captain travels with the group, handling check-ins, permits and the thousand small things.",
  },
  {
    icon: ShieldCheck,
    title: "Safety first, always",
    body: "Backup vehicles on rides, first-aid and oxygen at altitude, and a women's-safety policy we actually enforce.",
  },
  {
    icon: CurrencyInr,
    title: "Pay in instalments",
    body: "Hold your seat with a booking amount and clear the balance in stages before departure.",
  },
  {
    icon: Headset,
    title: "24×7 on-tour support",
    body: "Ground support and emergency contacts stay reachable for the whole trip, not just office hours.",
  },
];

const STEPS = [
  {
    icon: ChatCircleDots,
    title: "Tell us the plan",
    body: "Dates, group size, budget and the places on your list. A WhatsApp message is enough to start.",
  },
  {
    icon: CalendarCheck,
    title: "Get a costed itinerary",
    body: "We send a day-by-day plan with the sharing basis, inclusions and the exact amount — usually the same day.",
  },
  {
    icon: Backpack,
    title: "Pack and go",
    body: "Pay the booking amount, get your joining instructions, and meet your captain at the departure point.",
  },
];

const SPOTLIGHT = [
  { src: "/images/places/pangong-lake.webp", name: "Pangong Tso", region: "Ladakh", span: "lg:col-span-2 lg:row-span-2" },
  { src: "/images/places/gulmarg.webp", name: "Gulmarg", region: "Kashmir", span: "" },
  { src: "/images/places/kovalam.webp", name: "Kovalam", region: "Kerala", span: "" },
  { src: "/images/places/havelock.webp", name: "Havelock", region: "Andaman", span: "" },
  { src: "/images/places/pokhara.webp", name: "Pokhara", region: "Nepal", span: "" },
];

export default function HomePage() {
  const seen = new Set<string>();
  const featured = packages
    .slice()
    .sort((a, b) => {
      const da = a.originalPrice ? (a.originalPrice - a.price) / a.originalPrice : 0;
      const db = b.originalPrice ? (b.originalPrice - b.price) / b.originalPrice : 0;
      return db - da;
    })
    .filter((p) => {
      const key = `${p.category}-${p.image}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .slice(0, 6);

  const cheapest = Math.min(...packages.map((p) => p.price));

  return (
    <>
      <HomeHero />
      <DestinationMarquee />

      {/* ---- Regions ------------------------------------------------ */}
      <section className="paper-grain relative overflow-hidden py-20 md:py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 select-none"
          style={{ color: "var(--cool)" }}
        >
          <SketchCompass className="sketch-layer -top-6 right-[4%] hidden h-[150px] w-[150px] opacity-[0.16] lg:block" />
          <SketchSuitcase
            className="sketch-layer bottom-10 left-[2%] hidden h-[110px] w-[138px] opacity-[0.14] xl:block"
            style={{ transform: "rotate(-8deg)" }}
          />
        </div>

        <div className="shell relative">
        <SectionHeading
          eyebrow="Where we go"
          title="Five ways to leave"
          accent="the city"
          blurb="Pick the kind of trip first — the mountains, the temples, the backwaters, the islands or a weekend in the Sahyadris. The packages follow."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c, i) => {
            const list = packages.filter((p) => p.category === c.id);
            const from = Math.min(...list.map((p) => p.price));
            return (
              <Reveal key={c.id} delay={i * 80} as="article" className="h-full">
                <Link
                  href={`/packages?category=${c.id}`}
                  className="group relative block h-full min-h-[18rem] overflow-hidden rounded-[22px]"
                >
                  <Image
                    src={CATEGORY_ART[c.id]}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 26rem, (min-width: 640px) 46vw, 92vw"
                    className="object-cover transition-transform duration-[900ms] ease-[var(--ease-out-strong)] group-hover:scale-110"
                  />
                  <span
                    className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-90"
                    style={{
                      backgroundImage:
                        "linear-gradient(to top, rgb(5 22 40 / 0.92) 8%, rgb(5 22 40 / 0.45) 48%, rgb(5 22 40 / 0.12) 100%)",
                    }}
                  />
                  <span className="relative flex h-full min-h-[18rem] flex-col justify-end p-6">
                    <span
                      className="badge mb-3 w-fit"
                      style={{ backgroundColor: "rgb(255 255 255 / 0.18)", color: "#fff" }}
                    >
                      {list.length} packages
                    </span>
                    <span className="font-display text-[1.5rem] font-bold text-white">{c.label}</span>
                    <span className="mt-2 max-w-[34ch] text-[0.875rem] leading-snug text-white/75">
                      {c.blurb}
                    </span>
                    <span className="mt-5 flex items-center justify-between border-t border-white/20 pt-4 text-[0.875rem] text-white">
                      <span>
                        From{" "}
                        <strong className="font-display" style={{ color: "var(--color-flame-300)" }}>
                          {inr(from)}
                        </strong>
                      </span>
                      <span className="flex items-center gap-1.5 font-medium">
                        Browse
                        <ArrowRight
                          size={15}
                          weight="bold"
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </span>
                    </span>
                  </span>
                </Link>
              </Reveal>
            );
          })}

          <Reveal delay={400} as="article" className="h-full">
            <div
              className="aurora flex h-full min-h-[18rem] flex-col justify-between rounded-[22px] border p-7"
              style={{ borderColor: "var(--rule-strong)", backgroundColor: "var(--bg-raised)" }}
            >
              <div>
                <p className="eyebrow" style={{ color: "var(--accent)" }}>
                  Can&rsquo;t decide?
                </p>
                <p className="display mt-4 text-[1.6rem]">
                  Tell us the dates. We&rsquo;ll build it{" "}
                  <span className="script text-[1.2em]" style={{ color: "var(--accent)" }}>
                    around you.
                  </span>
                </p>
                <p className="mt-4 text-[0.9375rem] leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                  Private groups, corporate offsites, family yatras and college trips —
                  from {inr(cheapest)} per head.
                </p>
              </div>
              <Link href="/contact" className="btn btn-primary mt-6 w-fit">
                Start planning
                <ArrowRight size={16} weight="bold" />
              </Link>
            </div>
          </Reveal>
        </div>
        </div>
      </section>

      {/* ---- Featured ----------------------------------------------- */}
      <section
        className="border-y py-20 md:py-28"
        style={{ backgroundColor: "var(--bg-sunken)", borderColor: "var(--rule)" }}
      >
        <div className="shell">
          <SectionHeading
            align="left"
            eyebrow="Best value right now"
            title="Trips worth"
            accent="booking early"
            blurb="The biggest savings across the catalogue this season, one pick per region."
            action={
              <Link href="/packages" className="btn btn-ghost">
                All {packages.length} packages
                <ArrowRight size={16} weight="bold" />
              </Link>
            }
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 90} className="h-full">
                <PackageCard pkg={p} priority={i < 3} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Promises + stats --------------------------------------- */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "var(--color-navy-900)" }}>
        <div className="grid-veil absolute inset-0" />

        <div aria-hidden className="pointer-events-none absolute inset-0 select-none text-white">
          <SketchTemple className="sketch-layer -left-4 bottom-0 hidden h-[260px] w-[234px] opacity-[0.07] lg:block" />
          <SketchBalloon className="bob sketch-layer right-[5%] top-[12%] hidden h-[190px] w-[127px] opacity-[0.09] md:block" />
          <FlightPath
            className="sketch-layer right-[8%] top-0 hidden h-[150px] w-[46%] opacity-[0.14] xl:block"
            duration={23}
            dots={false}
          />
        </div>
        <div className="shell relative py-20 md:py-28">
          <SectionHeading
            onDeep
            eyebrow="Why 2XBT"
            title="The boring parts,"
            accent="handled"
            blurb="Six things we commit to on every departure, whether it's a weekend fort trek or fifteen days in Nepal."
          />

          <div className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {PROMISES.map(({ icon: Icon, title, body }, i) => (
              <Reveal key={title} delay={i * 70}>
                <div>
                  <span
                    className="grid h-12 w-12 place-items-center rounded-xl"
                    style={{
                      backgroundColor: "rgb(255 255 255 / 0.08)",
                      border: "1px solid var(--rule-onDeep)",
                      color: "var(--color-flame-300)",
                    }}
                  >
                    <Icon size={23} weight="duotone" />
                  </span>
                  <h3 className="mt-5 font-display text-[1.125rem] font-semibold" style={{ color: "var(--ink-onDeep)" }}>
                    {title}
                  </h3>
                  <p className="mt-2.5 text-[0.9375rem] leading-relaxed" style={{ color: "var(--ink-onDeep-soft)" }}>
                    {body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <div
            className="mt-20 border-t pt-14"
            style={{ borderColor: "var(--rule-onDeep)" }}
          >
            <StatBand />
          </div>
        </div>
        <WaveDivider fill="var(--bg)" accent={false} />
      </section>

      {/* ---- How it works ------------------------------------------- */}
      {/* <section className="relative overflow-hidden py-20 md:py-28">
        <div className="shell relative">
        <SectionHeading
          eyebrow="How it works"
          title="Three steps from idea to"
          accent="departure"
        />

        <ol className="relative mt-16 grid gap-10 md:grid-cols-3 md:gap-8">
          <SketchRoute
            pins={0}
            className="pointer-events-none absolute -top-[30px] left-0 hidden h-[120px] w-full select-none opacity-[0.35] md:block"
            style={{ color: "var(--accent)" }}
          />
          {STEPS.map(({ icon: Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 120} as="li" className="relative">
              <span
                className="relative grid h-14 w-14 place-items-center rounded-2xl"
                style={{
                  backgroundImage: "linear-gradient(135deg, var(--accent), var(--color-flame-400))",
                  color: "#fff",
                  boxShadow: "0 8px 20px rgb(244 112 26 / 0.3)",
                }}
              >
                <Icon size={25} weight="duotone" />
                <span
                  className="absolute -right-1.5 -top-1.5 grid h-6 w-6 place-items-center rounded-full font-display text-[0.6875rem] font-bold"
                  style={{ backgroundColor: "var(--color-navy-800)", color: "#fff" }}
                >
                  {i + 1}
                </span>
              </span>
              <h3 className="mt-6 font-display text-[1.25rem] font-semibold">{title}</h3>
              <p className="mt-3 max-w-[38ch] leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                {body}
              </p>
            </Reveal>
          ))}
        </ol>
        </div>
      </section> */}

      {/* ---- Destination spotlight ---------------------------------- */}
      <section
        className="paper-grain relative overflow-hidden border-y py-20 md:py-28"
        style={{ backgroundColor: "var(--bg-sunken)", borderColor: "var(--rule)" }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 select-none"
          style={{ color: "var(--cool)" }}
        >
          <SketchPalm className="sway-soft sketch-layer -left-2 bottom-0 hidden h-[260px] w-[142px] opacity-[0.15] lg:block" />
          <SketchShikara className="rock sketch-layer bottom-6 right-[3%] hidden h-[130px] w-[238px] opacity-[0.15] lg:block" />
        </div>

        <div className="shell relative">
          <SectionHeading
            align="left"
            eyebrow="On the road"
            title="Places our groups"
            accent="came back from"
            action={
              <Link href="/gallery" className="btn btn-ghost">
                Open the gallery
                <ArrowUpRight size={16} weight="bold" />
              </Link>
            }
          />

          <div className="mt-14 grid auto-rows-[11rem] grid-cols-2 gap-4 lg:grid-cols-4">
            {SPOTLIGHT.map((item, i) => (
              <Reveal
                key={item.name}
                delay={i * 70}
                from="scale"
                className={`${item.span} h-full`}
              >
                <Link
                  href="/gallery"
                  className="group relative block h-full overflow-hidden rounded-[18px]"
                >
                  <Image
                    src={item.src}
                    alt={`${item.name}, ${item.region}`}
                    fill
                    sizes="(min-width: 1024px) 24rem, 46vw"
                    className="object-cover transition-transform duration-[900ms] ease-[var(--ease-out-strong)] group-hover:scale-110"
                  />
                  <span
                    className="absolute inset-0 opacity-80 transition-opacity duration-400 group-hover:opacity-95"
                    style={{
                      backgroundImage:
                        "linear-gradient(to top, rgb(5 22 40 / 0.85), transparent 58%)",
                    }}
                  />
                  <span className="absolute inset-x-4 bottom-4">
                    <span
                      className="block text-[0.6875rem] font-semibold uppercase tracking-[0.14em]"
                      style={{ color: "var(--color-flame-300)" }}
                    >
                      {item.region}
                    </span>
                    <span className="mt-0.5 block font-display text-[1.0625rem] font-semibold text-white">
                      {item.name}
                    </span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}