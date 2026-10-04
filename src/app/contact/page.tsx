import type { Metadata } from "next";
import {
  MapPin,
  Phone,
  EnvelopeSimple,
  InstagramLogo,
  FacebookLogo,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr";
import { Suspense } from "react";
import { EnquiryForm } from "@/components/enquiry-form";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Talk to 2XBT about group tours, custom packages, travel events and corporate travel. Call +91 91362 38620 or send an enquiry.",
};

export default function ContactPage() {
  return (
    <>
      <section className="shell pt-12 pb-12 md:pt-16">
        <h1 className="max-w-[16ch] font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl">
          Tell us where you want to go
        </h1>
        <p
          className="mt-5 max-w-[58ch] text-lg leading-relaxed"
          style={{ color: "var(--ink-soft)" }}
        >
          Group tours, custom packages, travel events and corporate travel. Send
          the details and we will come back with dates, an itinerary and a fixed
          price.
        </p>
      </section>

      <section className="shell grid gap-12 pb-24 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
        <Suspense fallback={<div className="surface h-[32rem]" aria-hidden />}>
          <EnquiryForm />
        </Suspense>

        <aside className="grid content-start gap-10">
          <div>
            <h2 className="font-display text-lg font-semibold">Reach us directly</h2>
            <ul className="mt-5 grid gap-4">
              <li>
                <a
                  href={site.phoneHref}
                  className="flex items-start gap-3 transition-colors duration-150 hover:text-[var(--accent)]"
                >
                  <Phone size={19} className="mt-0.5 shrink-0" style={{ color: "var(--accent)" }} />
                  <span>
                    <span className="block font-medium">{site.phone}</span>
                    <span className="text-[0.875rem]" style={{ color: "var(--ink-faint)" }}>
                      Call or WhatsApp, any day
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={site.emailHref}
                  className="flex items-start gap-3 transition-colors duration-150 hover:text-[var(--accent)]"
                >
                  <EnvelopeSimple
                    size={19}
                    className="mt-0.5 shrink-0"
                    style={{ color: "var(--accent)" }}
                  />
                  <span>
                    <span className="block font-medium">{site.email}</span>
                    <span className="text-[0.875rem]" style={{ color: "var(--ink-faint)" }}>
                      For itineraries and invoices
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={site.address.maps}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-3 transition-colors duration-150 hover:text-[var(--accent)]"
                >
                  <MapPin size={19} className="mt-0.5 shrink-0" style={{ color: "var(--accent)" }} />
                  <span>
                    <span className="block font-medium">{site.address.line1}</span>
                    <span className="text-[0.875rem]" style={{ color: "var(--ink-faint)" }}>
                      {site.address.line2}
                    </span>
                  </span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-lg font-semibold">Follow along</h2>
            <ul className="mt-5 grid gap-3">
              <li>
                <SocialRow
                  href={site.socials.instagram}
                  label="Instagram"
                  handle="@2xbt_mumbai"
                  icon={<InstagramLogo size={19} />}
                />
              </li>
              <li>
                <SocialRow
                  href={site.socials.facebook}
                  label="Facebook"
                  handle="2XBT"
                  icon={<FacebookLogo size={19} />}
                />
              </li>
              <li>
                <SocialRow
                  href={site.socials.whatsapp}
                  label="WhatsApp"
                  handle={site.phone}
                  icon={<WhatsappLogo size={19} />}
                />
              </li>
            </ul>
          </div>

          <div className="overflow-hidden rounded-2xl border" style={{ borderColor: "var(--rule)" }}>
            <iframe
              title="2XBT office location on the map"
              src="https://www.google.com/maps?q=112+Parijat+Parel+Mumbai+400012&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-64 w-full border-0"
            />
          </div>
        </aside>
      </section>
    </>
  );
}

function SocialRow({
  href,
  label,
  handle,
  icon,
}: {
  href: string;
  label: string;
  handle: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-3 rounded-xl border px-4 py-3 transition-[border-color,background-color] duration-150 hover:border-[var(--accent)] hover:bg-[var(--accent-soft)]"
      style={{ borderColor: "var(--rule)" }}
    >
      <span style={{ color: "var(--accent)" }}>{icon}</span>
      <span className="flex-1 font-medium">{label}</span>
      <span className="text-[0.875rem]" style={{ color: "var(--ink-faint)" }}>
        {handle}
      </span>
    </a>
  );
}
