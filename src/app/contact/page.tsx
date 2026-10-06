import type { Metadata } from "next";
import { Suspense } from "react";
import {
  MapPin,
  Phone,
  EnvelopeSimple,
  InstagramLogo,
  FacebookLogo,
  WhatsappLogo,
  Clock,
  Sparkle,
} from "@phosphor-icons/react/dist/ssr";
import { PageHero } from "@/components/page-hero";
import { EnquiryForm } from "@/components/enquiry-form";
import { Reveal } from "@/components/reveal";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Talk to 2XBT about group tours, yatras, treks, bike rides and corporate travel. Call +91 91362 38620, WhatsApp us, or send an enquiry.",
};

const CHANNELS = [
  {
    icon: WhatsappLogo,
    label: "WhatsApp",
    value: "Fastest reply",
    detail: site.phone,
    href: site.socials.whatsapp,
    external: true,
  },
  {
    icon: Phone,
    label: "Call us",
    value: site.phone,
    detail: "Seven days a week",
    href: site.phoneHref,
    external: false,
  },
  {
    icon: EnvelopeSimple,
    label: "Email",
    value: site.email,
    detail: "For detailed itineraries",
    href: site.emailHref,
    external: false,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us where you"
        accent="want to go"
        blurb="Group tours, custom packages, corporate offsites and travel events. Send the details and we come back with dates, a day-by-day plan and a fixed price."
        image="/images/places/pangong-lake.webp"
        imageAlt="Pangong Tso at the far end of a Ladakh itinerary"
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/contact", label: "Contact" },
        ]}
      />

      <section className="shell -mt-6 pb-4">
        <div className="grid gap-4 md:grid-cols-3">
          {CHANNELS.map(({ icon: Icon, label, value, detail, href, external }, i) => (
            <Reveal key={label} delay={i * 90}>
              <a
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                className="surface surface-lift flex h-full items-start gap-4 p-5"
              >
                <span
                  className="grid h-12 w-12 shrink-0 place-items-center rounded-xl"
                  style={{ backgroundColor: "var(--accent-soft)", color: "var(--accent)" }}
                >
                  <Icon size={22} weight="fill" />
                </span>
                <span className="min-w-0">
                  <span className="block text-[0.75rem] uppercase tracking-wider" style={{ color: "var(--ink-faint)" }}>
                    {label}
                  </span>
                  <span className="mt-1 block truncate font-display text-[1rem] font-semibold">
                    {value}
                  </span>
                  <span className="mt-0.5 block text-[0.8125rem]" style={{ color: "var(--ink-faint)" }}>
                    {detail}
                  </span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="shell grid gap-12 py-14 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
        <div>
          <h2 className="display text-[1.75rem]">Send an enquiry</h2>
          <p className="mt-3 max-w-[54ch]" style={{ color: "var(--ink-soft)" }}>
            Fill this in and it opens a pre-written WhatsApp message — or send it by
            email instead. Nothing is stored on this website.
          </p>
          <div className="mt-8">
            <Suspense fallback={<div className="surface h-[34rem]" aria-hidden />}>
              <EnquiryForm />
            </Suspense>
          </div>
        </div>

        <aside className="grid content-start gap-8">
          <div className="surface p-6">
            <h2 className="flex items-center gap-2 font-display text-[1.0625rem] font-semibold">
              <MapPin size={18} weight="fill" style={{ color: "var(--accent)" }} />
              Office
            </h2>
            <p className="mt-3 leading-relaxed" style={{ color: "var(--ink-soft)" }}>
              {site.legalName}
              <br />
              {site.address.line1}
              <br />
              {site.address.line2}
            </p>
            <a
              href={site.address.maps}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost btn-sm mt-5"
            >
              Open in Maps
            </a>
          </div>

          <div className="surface p-6">
            <h2 className="flex items-center gap-2 font-display text-[1.0625rem] font-semibold">
              <Clock size={18} weight="fill" style={{ color: "var(--accent)" }} />
              When we reply
            </h2>
            <ul className="mt-4 grid gap-2.5 text-[0.9375rem]" style={{ color: "var(--ink-soft)" }}>
              <li>WhatsApp — usually within the hour</li>
              <li>Phone — 9am to 9pm, every day</li>
              <li>Email — same working day</li>
              <li>On-tour emergencies — 24×7</li>
            </ul>
          </div>

          <div
            className="aurora rounded-2xl border p-6"
            style={{ borderColor: "var(--rule-strong)", backgroundColor: "var(--bg-raised)" }}
          >
            <h2 className="flex items-center gap-2 font-display text-[1.0625rem] font-semibold">
              <Sparkle size={18} weight="fill" style={{ color: "var(--cool)" }} />
              Events &amp; celebrations
            </h2>
            <p className="mt-3 text-[0.9375rem] leading-relaxed" style={{ color: "var(--ink-soft)" }}>
              Birthdays, anniversaries and brand activations on the road are handled
              with our events partner.
            </p>
            <a
              href={site.eventsPartner}
              target="_blank"
              rel="noreferrer"
              className="btn btn-cool btn-sm mt-5"
            >
              Vibe &amp; Thrivee
            </a>
          </div>

          <div>
            <h2 className="font-display text-[1.0625rem] font-semibold">Follow along</h2>
            <div className="mt-4 flex gap-3">
              <Social href={site.socials.instagram} label="2XBT on Instagram">
                <InstagramLogo size={19} weight="fill" />
              </Social>
              <Social href={site.socials.facebook} label="2XBT on Facebook">
                <FacebookLogo size={19} weight="fill" />
              </Social>
              <Social href={site.socials.whatsapp} label="2XBT on WhatsApp">
                <WhatsappLogo size={19} weight="fill" />
              </Social>
            </div>
          </div>
        </aside>
      </section>
    </>
  );
}

function Social({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="grid h-11 w-11 place-items-center rounded-full border transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white"
      style={{ borderColor: "var(--rule-strong)", color: "var(--ink-soft)" }}
    >
      {children}
    </a>
  );
}
