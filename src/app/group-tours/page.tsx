import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Buildings,
  UsersFour,
  Mountains,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/reveal";
import { packages, inr } from "@/data/packages";
import { site, whatsappLink } from "@/data/site";

export const metadata: Metadata = {
  title: "Group Tours & Treks",
  description:
    "Fixed departure dates for 2XBT group tours and treks in 2026, plus custom group, corporate and college travel planned on your dates.",
};

const departures = packages
  .filter((p) => p.startDate)
  .map((p) => ({ ...p, sortKey: Date.parse(p.startDate as string) }))
  .sort((a, b) => a.sortKey - b.sortKey);

const customTypes = [
  {
    icon: UsersFour,
    title: "Friends and family groups",
    body: "Six people or sixty. We rework the sharing basis, the vehicle and the stay list around the actual group, then quote one fixed number.",
  },
  {
    icon: Buildings,
    title: "Corporate and college travel",
    body: "Offsites, annual trips and student groups, with invoicing, a single point of contact and a coordinator travelling with the group.",
  },
  {
    icon: Mountains,
    title: "Treks on request",
    body: "Tungnath, Chopta and the Garhwal routes we already run, scheduled on dates that suit you rather than the fixed calendar.",
  },
];

export default function GroupToursPage() {
  return (
    <>
      <section className="shell pt-12 pb-10 md:pt-16">
        <h1 className="max-w-[18ch] font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl">
          Group departures for 2026
        </h1>
        <p
          className="mt-5 max-w-[58ch] text-lg leading-relaxed"
          style={{ color: "var(--ink-soft)" }}
        >
          These dates are confirmed and open for booking. Seats are held against
          an advance, and each departure travels with a 2XBT coordinator.
        </p>
      </section>

      {/* Departure calendar. A list of rows, not a card grid. */}
      <section className="shell pb-20">
        {departures.length === 0 ? (
          <div
            className="surface px-6 py-20 text-center"
            style={{ borderStyle: "dashed" }}
          >
            <h2 className="font-display text-xl font-semibold">
              No dates on the calendar right now
            </h2>
            <p
              className="mx-auto mt-3 max-w-[46ch] leading-relaxed"
              style={{ color: "var(--ink-soft)" }}
            >
              The next season is being planned. Tell us where you want to go and
              we will put a date against it.
            </p>
            <Link href="/contact" className="btn btn-primary mt-7">
              Plan my trip
            </Link>
          </div>
        ) : (
          <ul className="border-t" style={{ borderColor: "var(--rule)" }}>
            {departures.map((p, i) => (
              <Reveal as="li" key={p.slug} delay={Math.min(i, 5) * 50}>
                <Link
                  href={`/packages/${p.slug}`}
                  className="group grid grid-cols-[4.5rem_1fr_auto] items-center gap-4 border-b py-5 transition-colors duration-150 sm:grid-cols-[6rem_1fr_9rem_auto] sm:gap-6 sm:py-6"
                  style={{ borderColor: "var(--rule)" }}
                >
                  <Image
                    src={p.image}
                    alt=""
                    width={240}
                    height={240}
                    sizes="96px"
                    className="h-[4.5rem] w-[4.5rem] rounded-xl object-cover sm:h-24 sm:w-24"
                  />

                  <div className="min-w-0">
                    <div
                      className="text-[0.8125rem] font-semibold"
                      style={{ color: "var(--accent)" }}
                    >
                      {p.startDate}
                    </div>
                    <h2 className="mt-1 font-display text-lg font-semibold leading-snug sm:text-xl">
                      {p.name}
                    </h2>
                    <p
                      className="mt-1 text-[0.875rem]"
                      style={{ color: "var(--ink-faint)" }}
                    >
                      {p.days} days, {p.nights} nights {"·"} {p.region}
                    </p>
                  </div>

                  <div className="hidden text-right sm:block">
                    <div className="font-display text-lg font-semibold">
                      {inr(p.price)}
                    </div>
                    <div className="text-[0.75rem]" style={{ color: "var(--ink-faint)" }}>
                      per person
                    </div>
                  </div>

                  <span
                    className="grid h-10 w-10 place-items-center rounded-full transition-[background-color,color] duration-200 group-hover:bg-[var(--accent)] group-hover:text-[var(--accent-ink)]"
                    style={{ backgroundColor: "var(--bg-sunken)", color: "var(--ink-soft)" }}
                  >
                    <ArrowUpRight size={17} weight="bold" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>
        )}
      </section>

      {/* Custom groups */}
      <section
        className="border-y py-20 md:py-24"
        style={{ backgroundColor: "var(--bg-sunken)", borderColor: "var(--rule)" }}
      >
        <div className="shell">
          <h2 className="max-w-[22ch] font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            None of those dates work for you
          </h2>
          <p
            className="mt-5 max-w-[56ch] text-lg leading-relaxed"
            style={{ color: "var(--ink-soft)" }}
          >
            Most of what we run is built on request. Send the group size and a
            window of dates and we will come back with an itinerary and a fixed
            quote.
          </p>

          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {customTypes.map((t, i) => {
              const Icon = t.icon;
              return (
                <Reveal key={t.title} delay={i * 80}>
                  <Icon size={26} weight="duotone" style={{ color: "var(--accent)" }} />
                  <h3 className="mt-4 font-display text-xl font-semibold">{t.title}</h3>
                  <p
                    className="mt-2.5 max-w-[40ch] leading-relaxed"
                    style={{ color: "var(--ink-soft)" }}
                  >
                    {t.body}
                  </p>
                </Reveal>
              );
            })}
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            <Link href="/contact" className="btn btn-primary">
              Plan my trip
              <ArrowRight size={17} weight="bold" />
            </Link>
            <a
              href={whatsappLink(
                "Hi 2XBT, I am planning a group trip and would like a custom quote.",
              )}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost"
            >
              Message on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Events partner */}
      <section className="shell py-20 md:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <Image
              src="/images/events-partner.webp"
              alt="A 2XBT tour celebration organised by the event management partner"
              width={500}
              height={367}
              sizes="(max-width: 1024px) 100vw, 560px"
              className="h-72 w-full rounded-2xl object-cover sm:h-96"
            />
          </Reveal>
          <Reveal delay={80}>
            <h2 className="max-w-[20ch] font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              The parties are run by professionals
            </h2>
            <p
              className="mt-5 max-w-[50ch] leading-relaxed"
              style={{ color: "var(--ink-soft)" }}
            >
              For customers booking tours with us, all entertainment, pool
              parties, cultural nights, DJ events and special celebrations are
              organised by our official event management partner. That means
              professionally managed events, premium venues and decor, and
              coordinated on ground execution.
            </p>
            <a
              href={site.eventsPartner}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost mt-8"
            >
              See upcoming events
              <ArrowUpRight size={17} weight="bold" />
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
