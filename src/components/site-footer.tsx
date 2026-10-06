import Link from "next/link";
import Image from "next/image";
import {
  InstagramLogo,
  FacebookLogo,
  WhatsappLogo,
  MapPin,
  Phone,
  EnvelopeSimple,
  ArrowRight,
} from "@phosphor-icons/react/dist/ssr";
import { site, nav } from "@/data/site";
import { categories, packages } from "@/data/packages";
import { WaveDivider } from "@/components/wave";
import { SketchRange } from "@/components/sketch-art";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const popular = packages.filter((p) => p.price >= 8000).slice(0, 5);

  return (
    <footer
      className="relative overflow-hidden"
      style={{ backgroundColor: "var(--color-navy-950)", color: "var(--ink-onDeep-soft)" }}
    >
      <WaveDivider fill="var(--color-navy-950)" accent={false} className="-mt-px" />

      {/* The ranges close the page out, drawn along the very bottom. */}
      <SketchRange className="sketch-layer inset-x-0 bottom-0 h-[150px] w-full select-none text-white opacity-[0.07]" />

      <div className="shell relative pb-10 pt-6 md:pt-10">
        {/* Final call to action, sitting inside the footer so the page always
            closes on an invitation rather than a link list. */}
        <div
          className="relative overflow-hidden rounded-[28px] px-6 py-10 md:px-12 md:py-12"
          style={{
            backgroundImage:
              "linear-gradient(118deg, var(--color-flame-600) 0%, var(--color-flame-500) 42%, var(--color-lagoon-600) 100%)",
          }}
        >
          <div className="grid-veil absolute inset-0" />
          <div className="relative flex flex-col items-start justify-between gap-7 lg:flex-row lg:items-center">
            <div>
              <h2 className="display max-w-[18ch] text-[1.9rem] text-white sm:text-[2.4rem]">
                Got a date in mind? <span className="script text-[1.15em]">Let&rsquo;s plan it.</span>
              </h2>
              <p className="mt-3 max-w-[52ch] text-[0.9375rem] leading-relaxed text-white/85">
                Tell us the dates, the group size and the budget. We come back with a
                costed itinerary, usually the same day.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="btn bg-white text-[var(--color-navy-800)] hover:-translate-y-0.5"
              >
                Plan my trip
                <ArrowRight size={16} weight="bold" />
              </Link>
              <a
                href={site.socials.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="btn btn-onimage"
              >
                <WhatsappLogo size={18} weight="fill" />
                WhatsApp us
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1.3fr]">
          <div>
            <Image
              src="/images/logo.png"
              alt={site.legalName}
              width={671}
              height={802}
              className="h-20 w-auto rounded-xl bg-white p-2"
            />
            <p className="mt-5 max-w-[36ch] text-[0.9375rem] leading-relaxed">
              Group tours, yatras, treks and bike rides across India and Nepal, run
              end to end from Mumbai. Fixed departures and private groups.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <SocialLink href={site.socials.instagram} label="2XBT on Instagram">
                <InstagramLogo size={19} weight="fill" />
              </SocialLink>
              <SocialLink href={site.socials.facebook} label="2XBT on Facebook">
                <FacebookLogo size={19} weight="fill" />
              </SocialLink>
              <SocialLink href={site.socials.whatsapp} label="2XBT on WhatsApp">
                <WhatsappLogo size={19} weight="fill" />
              </SocialLink>
            </div>
          </div>

          <FooterCol title="Explore">
            {nav.map((item) => (
              <FooterLink key={item.href} href={item.href}>
                {item.label}
              </FooterLink>
            ))}
          </FooterCol>

          <FooterCol title="By region">
            {categories.map((c) => (
              <FooterLink key={c.id} href={`/packages?category=${c.id}`}>
                {c.label}
              </FooterLink>
            ))}
          </FooterCol>

          <FooterCol title="Reach us">
            <li>
              <a
                href={site.address.maps}
                target="_blank"
                rel="noreferrer"
                className="flex gap-2.5 text-[0.9375rem] leading-relaxed transition-colors duration-200 hover:text-white"
              >
                <MapPin size={17} weight="fill" className="mt-0.5 shrink-0" />
                <span>
                  {site.address.line1}
                  <br />
                  {site.address.line2}
                </span>
              </a>
            </li>
            <li>
              <a
                href={site.phoneHref}
                className="flex items-center gap-2.5 text-[0.9375rem] transition-colors duration-200 hover:text-white"
              >
                <Phone size={17} weight="fill" className="shrink-0" />
                {site.phone}
              </a>
            </li>
            <li>
              <a
                href={site.emailHref}
                className="flex items-center gap-2.5 text-[0.9375rem] transition-colors duration-200 hover:text-white"
              >
                <EnvelopeSimple size={17} weight="fill" className="shrink-0" />
                {site.email}
              </a>
            </li>
          </FooterCol>
        </div>

        <div className="mt-12">
          <h2 className="font-display text-sm font-semibold text-white">Popular departures</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {popular.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/packages/${p.slug}`}
                  className="inline-block rounded-full border px-3 py-1.5 text-[0.8125rem] transition-colors duration-200 hover:border-[var(--color-flame-400)] hover:text-white"
                  style={{ borderColor: "var(--rule-onDeep)" }}
                >
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div
          className="mt-12 flex flex-col gap-4 border-t pt-7 text-sm sm:flex-row sm:items-center sm:justify-between"
          style={{ borderColor: "var(--rule-onDeep)" }}
        >
          <p>
            {"©"} {year} {site.legalName}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-white">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-display text-sm font-semibold text-white">{title}</h2>
      <ul className="mt-5 grid gap-3">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="text-[0.9375rem] transition-colors duration-200 hover:text-white"
      >
        {children}
      </Link>
    </li>
  );
}

function SocialLink({
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
      className="grid h-10 w-10 place-items-center rounded-full border transition-[background-color,border-color,color,transform] duration-200 hover:-translate-y-0.5 hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white"
      style={{ borderColor: "var(--rule-onDeep)" }}
    >
      {children}
    </a>
  );
}
