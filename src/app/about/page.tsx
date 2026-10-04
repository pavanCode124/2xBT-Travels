import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/reveal";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "2XBT Building Boyz Tours & Travels is a Mumbai based tour operator running group tours, treks and custom packages across India. Meet the team.",
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

export default function AboutPage() {
  return (
    <>
      {/* Intro, split against a real photo */}
      <section className="shell grid items-center gap-12 pt-12 pb-20 md:pt-16 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <div>
          <h1 className="max-w-[17ch] font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl">
            A travel company that travels with you
          </h1>
          <p
            className="mt-6 max-w-[54ch] text-lg leading-relaxed"
            style={{ color: "var(--ink-soft)" }}
          >
            2XBT Building Boyz Tours & Travels is a Mumbai based tour operator
            building group tours, customised packages and curated travel events
            across India.
          </p>
          <p
            className="mt-4 max-w-[54ch] leading-relaxed"
            style={{ color: "var(--ink-soft)" }}
          >
            We believe travel is more than destinations. It is shared
            experiences, comfort, safety and memories that last. Our team works
            on well planned itineraries, reliable services and seamless
            coordination so every journey is enjoyable and stress free. Weekend
            getaway, adventure trip or a full group departure, the job is the
            same: get you there and back without the admin.
          </p>
          <Link href="/packages" className="btn btn-primary mt-9">
            See our tours
            <ArrowRight size={17} weight="bold" />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/images/group-kedarnath.webp"
            alt="A 2XBT group together on the Kedarnath route"
            width={1600}
            height={900}
            priority
            sizes="(max-width: 1024px) 50vw, 300px"
            className="col-span-2 h-56 w-full rounded-2xl object-cover sm:h-72"
          />
          <Image
            src="/images/trek-clouds.webp"
            alt="A traveller above the clouds on a Western Ghats trek"
            width={1600}
            height={1205}
            sizes="(max-width: 1024px) 50vw, 300px"
            className="h-44 w-full rounded-2xl object-cover sm:h-56"
          />
          <Image
            src="/images/snow-forest.webp"
            alt="Snow covered pines on a winter trek"
            width={828}
            height={1472}
            sizes="(max-width: 1024px) 50vw, 300px"
            className="h-44 w-full rounded-2xl object-cover sm:h-56"
          />
        </div>
      </section>

      {/* Values, as a plain grid with no cards */}
      <section
        className="border-y py-20 md:py-24"
        style={{ backgroundColor: "var(--bg-sunken)", borderColor: "var(--rule)" }}
      >
        <div className="shell">
          <h2 className="max-w-[20ch] font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            How we think about a trip
          </h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {[
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
            ].map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div
                  className="h-0.5 w-10 rounded-full"
                  style={{ backgroundColor: "var(--accent)" }}
                />
                <h3 className="mt-5 font-display text-xl font-semibold">{v.title}</h3>
                <p
                  className="mt-2.5 max-w-[40ch] leading-relaxed"
                  style={{ color: "var(--ink-soft)" }}
                >
                  {v.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="shell py-20 md:py-28">
        <h2 className="max-w-[22ch] font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
          The people who answer when you call
        </h2>

        <ul className="mt-12 grid gap-x-10 gap-y-14 sm:grid-cols-2">
          {team.map((person, i) => (
            <Reveal as="li" key={person.name} delay={i * 70}>
              <div className="flex items-start gap-6">
                <div
                  className="relative h-32 w-32 shrink-0 overflow-hidden rounded-full ring-4 ring-[var(--accent-soft)] sm:h-36 sm:w-36"
                >
                  <Image
                    src={person.photo}
                    alt={`${person.name}, ${person.role}`}
                    width={300}
                    height={300}
                    sizes="144px"
                    className="h-full w-full object-cover object-top"
                  />
                </div>
                <div className="pt-1">
                  <h3 className="font-display text-xl font-semibold">{person.name}</h3>
                  <p className="mt-1 text-[0.9375rem] font-medium" style={{ color: "var(--accent)" }}>
                    {person.role}
                  </p>
                </div>
              </div>
              <p
                className="mt-5 max-w-[46ch] leading-relaxed"
                style={{ color: "var(--ink-soft)" }}
              >
                {person.bio}
              </p>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* Contact strip */}
      <section
        className="border-t py-16"
        style={{ backgroundColor: "var(--bg-sunken)", borderColor: "var(--rule)" }}
      >
        <div className="shell flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              Got a group and a rough idea?
            </h2>
            <p className="mt-2" style={{ color: "var(--ink-soft)" }}>
              Call {site.phone} or send the details across.
            </p>
          </div>
          <Link href="/contact" className="btn btn-primary shrink-0">
            Plan my trip
            <ArrowRight size={17} weight="bold" />
          </Link>
        </div>
      </section>
    </>
  );
}
