import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  UsersThree,
  Bus,
  ForkKnife,
  Ticket,
  Bed,
  ShieldCheck,
  ChatCircleDots,
  CheckCircle,
  Confetti,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/reveal";
import { DeparturesRail } from "@/components/departures-rail";
import { packages, inr } from "@/data/packages";
import { site } from "@/data/site";

// Rail order. Every card is the same width now, so this is purely about which
// trip leads the row, not about which source photo is big enough to survive it.
const railOrder = ["do-dham-yatra", "kerala", "kedarnath-tungnath", "chardham-yatra"];
const featured = packages
  .filter((p) => p.featured)
  .sort((a, b) => railOrder.indexOf(a.slug) - railOrder.indexOf(b.slug));
const cheapest = Math.min(...packages.map((p) => p.price));

const destinations = [
  "Kedarnath",
  "Badrinath",
  "Gangotri",
  "Yamunotri",
  "Tungnath",
  "Chopta",
  "Rishikesh",
  "Haridwar",
  "Munnar",
  "Alleppey",
  "Varkala",
  "Kovalam",
  "Thekkady",
  "Puri",
  "Konark",
  "Bhubaneswar",
  "Ujjain",
  "Omkareshwar",
  "Maheshwar",
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <FactsBand />
      <DeparturesRail items={featured} total={packages.length} />
      <DestinationMarquee />
      <WhatsIncluded />
      <HowItWorks />
      <EventsPartner />
      <ClosingCta />
    </>
  );
}

/* ---------------------------------------------------------------- Hero */

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[var(--color-navy-990)]">
      <Image
        src="/images/group-maheshwar.webp"
        alt="A 2XBT group sitting together on the temple steps at Maheshwar"
        width={1280}
        height={960}
        priority
        sizes="100vw"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-[50%_36%] lg:object-[50%_42%]"
      />

      {/* Two scrims: the row of faces sits mid frame, so the copy drops to
          the bottom on narrow screens and moves left on wide ones. */}
      <div
        className="absolute inset-0 lg:hidden"
        style={{
          background:
            "linear-gradient(to top, rgb(1 26 46 / 0.94) 0%, rgb(1 26 46 / 0.8) 40%, rgb(1 26 46 / 0.58) 72%, rgb(1 26 46 / 0.5) 100%)",
        }}
      />
      <div
        className="absolute inset-0 hidden lg:block"
        style={{
          background:
            "linear-gradient(100deg, rgb(1 26 46 / 0.92) 6%, rgb(1 26 46 / 0.68) 36%, rgb(1 26 46 / 0.06) 68%)",
        }}
      />
      <div
        className="absolute inset-0 hidden lg:block"
        style={{
          background:
            "linear-gradient(to top, rgb(1 26 46 / 0.5) 0%, rgb(1 26 46 / 0) 42%)",
        }}
      />

      <div className="shell relative z-10 flex h-[34rem] items-end pb-12 sm:h-[38rem] lg:h-[calc(100svh-80px)] lg:min-h-[36rem] lg:max-h-[56rem] lg:items-center lg:pb-0">
        <div className="w-full lg:max-w-[40rem]">
          <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-white/70">
            You choose the place, we take care of the rest
          </p>
          <h1 className="mt-4 font-display text-[2.5rem] font-semibold uppercase leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-[4.5rem]">
            Travel.
            <br />
            Chill.
            <br />
            <span style={{ color: "var(--color-flame-400)" }}>Repeat.</span>
          </h1>
          <p className="mt-5 max-w-[44ch] text-[1.0625rem] leading-relaxed text-white/80 sm:mt-6 sm:text-lg">
            Group tours and treks across India, planned and run end to end
            from Mumbai. You pick the place, we handle everything else.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/packages" className="btn btn-primary">
              Browse tours
              <ArrowRight size={17} weight="bold" />
            </Link>
            <Link href="/contact" className="btn btn-onimage">
              Plan my trip
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------- Facts band */

function FactsBand() {
  const facts = [
    { value: `${packages.length} routes`, label: "Curated and repeatable" },
    { value: "4 regions", label: "Himalayas to the coast" },
    { value: `From ${inr(cheapest)}`, label: "Per person, triple sharing" },
    { value: "Every trip", label: "Has a 2XBT group leader" },
  ];

  return (
    <section
      className="border-y"
      style={{ backgroundColor: "var(--bg-sunken)", borderColor: "var(--rule)" }}
    >
      <div className="shell grid grid-cols-2 gap-x-6 gap-y-8 py-10 md:grid-cols-4 md:py-12">
        {facts.map((f, i) => (
          <Reveal key={f.value} delay={i * 60}>
            <div className="font-display text-xl font-semibold sm:text-2xl">{f.value}</div>
            <div className="mt-1.5 text-[0.875rem]" style={{ color: "var(--ink-faint)" }}>
              {f.label}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* -------------------------------------------------- Destination marquee */

function DestinationMarquee() {
  const row = [...destinations, ...destinations];

  return (
    <section
      aria-label="Destinations we cover"
      className="overflow-hidden border-y py-6"
      style={{ backgroundColor: "var(--bg-sunken)", borderColor: "var(--rule)" }}
    >
      <div className="marquee-track flex w-max gap-10">
        {row.map((d, i) => (
          <span
            key={`${d}-${i}`}
            aria-hidden={i >= destinations.length}
            className="font-display text-xl font-medium whitespace-nowrap sm:text-2xl"
            style={{ color: i % 3 === 1 ? "var(--accent)" : "var(--ink-faint)" }}
          >
            {d}
          </span>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------ What's included */

const inclusions = [
  { icon: Bed, title: "Hotels, booked and paid", body: "Every night of the itinerary, in a named sharing basis." },
  { icon: ForkKnife, title: "Breakfast and dinner daily", body: "Plus all meals on board for the Kerala houseboat night." },
  { icon: Bus, title: "Private bus throughout", body: "All sightseeing and transfers, never a shared tourist coach." },
  { icon: Ticket, title: "Yatra passes sorted", body: "Kedarnath and Char Dham registrations handled before you arrive." },
  { icon: UsersThree, title: "A 2XBT group leader", body: "On the ground with you from the first morning to the drop." },
  { icon: ShieldCheck, title: "Written terms up front", body: "Inclusions, exclusions and the cancellation policy on every page." },
];

function WhatsIncluded() {
  return (
    <section className="shell py-20 md:py-28">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal>
          <h2 className="max-w-[16ch] font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            What the price actually covers
          </h2>
          <p
            className="mt-5 max-w-[48ch] text-lg leading-relaxed"
            style={{ color: "var(--ink-soft)" }}
          >
            The same six things ship with every 2XBT departure. Anything outside
            this list is written out as an exclusion on the tour page, so the
            number you see is the number you plan around.
          </p>
          <Link href="/packages" className="btn btn-primary mt-8">
            Compare all tours
            <ArrowRight size={17} weight="bold" />
          </Link>
        </Reveal>

        <ul className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
          {inclusions.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal as="li" key={item.title} delay={i * 50}>
                <Icon size={24} style={{ color: "var(--accent)" }} />
                <h3 className="mt-3 font-display text-base font-semibold">{item.title}</h3>
                <p
                  className="mt-1.5 text-[0.9375rem] leading-relaxed"
                  style={{ color: "var(--ink-soft)" }}
                >
                  {item.body}
                </p>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------- How it works */

const steps = [
  {
    icon: ChatCircleDots,
    title: "Tell us the dates",
    body: "Message us on WhatsApp or send the enquiry form. We reply with availability and what the trip looks like for your group size.",
  },
  {
    icon: CheckCircle,
    title: "Confirm with an advance",
    body: "Your seat is held once the advance reaches us. You get the full itinerary, the hotel list and the cancellation terms in writing.",
  },
  {
    icon: Confetti,
    title: "Turn up and travel",
    body: "A 2XBT coordinator meets the group at the start point and stays through to the final drop. Everything on the inclusions list is already paid.",
  },
];

function HowItWorks() {
  return (
    <section
      className="border-y py-20 md:py-28"
      style={{ backgroundColor: "var(--bg-sunken)", borderColor: "var(--rule)" }}
    >
      <div className="shell">
        <Reveal>
          <h2 className="max-w-[20ch] font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            Booking a trip takes three messages
          </h2>
        </Reveal>

        <ol className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal as="li" key={s.title} delay={i * 90}>
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-full"
                  style={{ backgroundColor: "var(--accent-soft)", color: "var(--accent)" }}
                >
                  <Icon size={23} weight="duotone" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold">{s.title}</h3>
                <p
                  className="mt-2.5 max-w-[42ch] leading-relaxed"
                  style={{ color: "var(--ink-soft)" }}
                >
                  {s.body}
                </p>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

/* -------------------------------------------------------- Events partner */

function EventsPartner() {
  return (
    <section className="shell py-20 md:py-28">
      <Reveal className="relative overflow-hidden rounded-3xl">
        <Image
          src="/images/jodhpur.webp"
          alt="Mehrangarh Fort above Jodhpur at dusk"
          width={1110}
          height={624}
          sizes="(max-width: 1024px) 100vw, 1200px"
          className="h-[26rem] w-full object-cover sm:h-[30rem]"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgb(1 26 46 / 0.92) 12%, rgb(1 26 46 / 0.55) 48%, rgb(1 26 46 / 0.15) 100%)",
          }}
        />
        <div className="absolute inset-x-0 bottom-0 p-7 sm:p-10">
          <h2 className="max-w-[20ch] font-display text-2xl font-semibold leading-tight text-white sm:text-3xl">
            Pool parties, cultural nights and DJ sets, run by our event partner
          </h2>
          <p className="mt-3.5 max-w-[56ch] leading-relaxed text-white/80">
            Every celebration on a 2XBT tour is produced by our official event
            management partner, with managed venues, decor and on ground
            coordination.
          </p>
          <a
            href={site.eventsPartner}
            target="_blank"
            rel="noreferrer"
            className="btn btn-onimage mt-7"
          >
            See upcoming events
            <ArrowRight size={17} weight="bold" />
          </a>
        </div>
      </Reveal>
    </section>
  );
}

/* ------------------------------------------------------------ Closing CTA */

function ClosingCta() {
  return (
    <section
      className="border-t py-20 md:py-24"
      style={{ backgroundColor: "var(--bg-sunken)", borderColor: "var(--rule)" }}
    >
      <Reveal className="shell text-center">
        <h2 className="mx-auto max-w-[20ch] font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
          Travelling with friends, family or your whole office?
        </h2>
        <p
          className="mx-auto mt-5 max-w-[52ch] text-lg leading-relaxed"
          style={{ color: "var(--ink-soft)" }}
        >
          Tell us the group size and the dates. We will build the itinerary
          around them and send a fixed quote.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Link href="/contact" className="btn btn-primary">
            Plan my trip
            <ArrowRight size={17} weight="bold" />
          </Link>
          <a href={site.phoneHref} className="btn btn-ghost">
            {site.phone}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
