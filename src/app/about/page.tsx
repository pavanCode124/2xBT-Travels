import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Quotes } from "@phosphor-icons/react/dist/ssr";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { StatBand } from "@/components/stat-band";
import { WaveDivider } from "@/components/wave";
import { SketchCompass, SketchPalm } from "@/components/sketch-art";
import { site } from "@/data/site";
import { packages } from "@/data/packages";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "2XBT Building Boyz Tours & Travels is a Mumbai based tour operator running group tours, yatras, treks and bike rides across India and Nepal. Meet the team.",
};

const team = [
  {
    name: "Gaurav Basutkar",
    role: "Founder and CEO",
    photo: "/images/team/gaurav-basutkar.jpg",
    bio: "Leads the company with a strong passion for travel, innovation and customer first experiences, and oversees the sales team, partnerships and growth.",
  },
  {
    name: "Dharmesh Lokare",
    role: "Chief Financial Officer",
    photo: "/images/team/dharmesh-lokare.jpg",
    bio: "Runs financial planning and controls alongside on ground operations, keeping safety standards, journey execution and coordination tight.",
  },
  {
    name: "Bhakti Basutkar",
    role: "Chief IT Officer",
    photo: "/images/team/bhakti-basutkar.jpg",
    bio: "Drives the digital backbone of 2XBT, from booking systems to the online experience you are reading right now.",
  },
  {
    name: "Aditya Kamble",
    role: "Chief Operations Officer",
    photo: "/images/team/aditya-kamble.jpg",
    bio: "Manages brand presence and storytelling across social platforms, connecting the travel community through content.",
  },
];

const VALUES = [
  {
    title: "Plan it properly",
    body: "Every itinerary is written day by day before a single booking opens, with the hotel basis, the transfers and the trek days named.",
  },
  {
    title: "Say what is not included",
    body: "Pony charges, union taxis, VIP darshan, lunches. The exclusions are on the page so the price you budget for is the real one.",
  },
  {
    title: "Stay with the group",
    body: "A 2XBT coordinator travels with every departure. When a road closes or weather turns, someone on our payroll is there to re-plan it.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About 2XBT"
        title="A travel company that"
        accent="travels with you"
        blurb="Mumbai based, running group tours, customised packages and curated travel events across India and Nepal."
        image="/images/group-kedarnath.webp"
        imageAlt="A 2XBT group together on the Kedarnath route"
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/about", label: "About" },
        ]}
      />

      {/* ---- Story --------------------------------------------------- */}
      <section className="shell grid items-center gap-12 py-16 md:py-20 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <div>
          <Reveal>
            <p className="eyebrow" style={{ color: "var(--accent)" }}>
              Who we are
            </p>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="display mt-4 max-w-[18ch] text-[2rem] sm:text-[2.6rem]">
              Travel is the easy part. We handle{" "}
              <span className="script text-[1.15em]" style={{ color: "var(--accent)" }}>
                everything else.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={110}>
            <p className="mt-6 max-w-[56ch] text-[1.0625rem] leading-relaxed" style={{ color: "var(--ink-soft)" }}>
              2XBT Building Boyz Tours &amp; Travels is a Mumbai based tour operator
              building group tours, customised packages and curated travel events
              across India and Nepal.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-4 max-w-[56ch] leading-relaxed" style={{ color: "var(--ink-soft)" }}>
              We believe travel is more than destinations. It is shared experiences,
              comfort, safety and memories that last. Our team works on well planned
              itineraries, reliable services and seamless coordination so every
              journey is enjoyable and stress free. Weekend getaway, Himalayan yatra
              or a fifteen day trek in Nepal, the job is the same: get you there and
              back without the admin.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <Link href="/packages" className="btn btn-primary mt-9">
              See all {packages.length} tours
              <ArrowRight size={17} weight="bold" />
            </Link>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Reveal from="scale" className="col-span-2">
            <Image
              src="/images/group-maheshwar.webp"
              alt="A 2XBT group at Maheshwar"
              width={1600}
              height={900}
              sizes="(max-width: 1024px) 92vw, 34rem"
              className="h-56 w-full rounded-2xl object-cover sm:h-72"
            />
          </Reveal>
          <Reveal from="scale" delay={100}>
            <Image
              src="/images/trek-clouds.webp"
              alt="A traveller above the clouds on a Western Ghats trek"
              width={1600}
              height={1205}
              sizes="(max-width: 1024px) 46vw, 17rem"
              className="h-44 w-full rounded-2xl object-cover sm:h-56"
            />
          </Reveal>
          <Reveal from="scale" delay={170}>
            <Image
              src="/images/hero-gulmarg.webp"
              alt="Meadows above Gulmarg in Kashmir"
              width={909}
              height={511}
              sizes="(max-width: 1024px) 46vw, 17rem"
              className="h-44 w-full rounded-2xl object-cover sm:h-56"
            />
          </Reveal>
        </div>
      </section>

      {/* ---- Numbers ------------------------------------------------- */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "var(--color-navy-900)" }}>
        <div className="grid-veil absolute inset-0" />
        <div aria-hidden className="pointer-events-none absolute inset-0 select-none text-white">
          <SketchCompass className="sketch-layer -bottom-8 left-[3%] hidden h-[170px] w-[170px] opacity-[0.08] lg:block" />
          <SketchPalm className="sway-soft sketch-layer -bottom-2 right-[4%] hidden h-[200px] w-[109px] opacity-[0.08] lg:block" />
        </div>
        <div className="shell relative py-16 md:py-20">
          <StatBand />
        </div>
        <WaveDivider fill="var(--bg)" accent={false} />
      </section>

      {/* ---- Values -------------------------------------------------- */}
      <section className="shell py-16 md:py-24">
        <SectionHeading
          eyebrow="How we work"
          title="Three rules we don&rsquo;t"
          accent="bend"
        />
        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={i * 100}>
              <span
                className="grid h-11 w-11 place-items-center rounded-xl font-display text-[1rem] font-bold"
                style={{
                  backgroundImage: "linear-gradient(135deg, var(--accent), var(--color-flame-400))",
                  color: "#fff",
                }}
              >
                {i + 1}
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold">{v.title}</h3>
              <p className="mt-3 max-w-[40ch] leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                {v.body}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---- Team ---------------------------------------------------- */}
      <section
        className="border-y py-16 md:py-24"
        style={{ backgroundColor: "var(--bg-sunken)", borderColor: "var(--rule)" }}
      >
        <div className="shell">
          <SectionHeading
            eyebrow="The team"
            title="The people who answer"
            accent="when you call"
          />

          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((person, i) => (
              <Reveal as="li" key={person.name} delay={i * 90} className="h-full">
                <div className="surface surface-lift h-full overflow-hidden text-center">
                  <div className="relative aspect-square">
                    <Image
                      src={person.photo}
                      alt={`${person.name}, ${person.role}`}
                      fill
                      sizes="(min-width: 1024px) 18rem, (min-width: 640px) 44vw, 90vw"
                      className="object-cover object-top"
                    />
                    <span
                      className="absolute inset-x-0 bottom-0 h-20"
                      style={{
                        backgroundImage: "linear-gradient(to top, rgb(7 31 56 / 0.6), transparent)",
                      }}
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-[1.0625rem] font-semibold">{person.name}</h3>
                    <p className="mt-1 text-[0.8125rem] font-semibold" style={{ color: "var(--accent)" }}>
                      {person.role}
                    </p>
                    <p
                      className="mt-3 text-[0.875rem] leading-relaxed"
                      style={{ color: "var(--ink-soft)" }}
                    >
                      {person.bio}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ---- Closing ------------------------------------------------- */}
      <section className="shell py-16 md:py-24">
        <Reveal>
          <figure className="aurora mx-auto max-w-3xl text-center">
            <Quotes size={34} weight="fill" style={{ color: "var(--accent)", opacity: 0.4 }} className="mx-auto" />
            <blockquote className="display mt-5 text-[1.6rem] leading-snug sm:text-[2rem]">
              {site.tagline.split(" ").slice(0, 2).join(" ")}{" "}
              <span className="script text-[1.15em]" style={{ color: "var(--accent)" }}>
                Repeat.
              </span>
            </blockquote>
            <figcaption className="mt-5" style={{ color: "var(--ink-soft)" }}>
              Three words on our logo, and the whole brief.
            </figcaption>
            <Link href="/contact" className="btn btn-primary mt-9">
              Plan my trip
              <ArrowRight size={17} weight="bold" />
            </Link>
          </figure>
        </Reveal>
      </section>
    </>
  );
}
