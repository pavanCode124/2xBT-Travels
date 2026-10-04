import Link from "next/link";
import Image from "next/image";
import {
  InstagramLogo,
  FacebookLogo,
  WhatsappLogo,
  MapPin,
  Phone,
  EnvelopeSimple,
} from "@phosphor-icons/react/dist/ssr";
import { site, nav } from "@/data/site";
import { packages } from "@/data/packages";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{ backgroundColor: "var(--bg-sunken)", borderTop: "1px solid var(--rule)" }}
    >
      <div className="shell py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Image
              src="/images/logo.png"
              alt={site.legalName}
              width={671}
              height={802}
              className="brand-plate h-16 w-auto"
            />
            <p
              className="mt-5 max-w-[34ch] text-[0.9375rem] leading-relaxed"
              style={{ color: "var(--ink-soft)" }}
            >
              Group tours, treks and custom packages across India, run end to end
              from Mumbai since day one.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <SocialLink href={site.socials.instagram} label="2XBT on Instagram">
                <InstagramLogo size={19} />
              </SocialLink>
              <SocialLink href={site.socials.facebook} label="2XBT on Facebook">
                <FacebookLogo size={19} />
              </SocialLink>
              <SocialLink href={site.socials.whatsapp} label="2XBT on WhatsApp">
                <WhatsappLogo size={19} />
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

          <FooterCol title="Popular trips">
            {packages.slice(0, 5).map((p) => (
              <FooterLink key={p.slug} href={`/packages/${p.slug}`}>
                {p.name}
              </FooterLink>
            ))}
          </FooterCol>

          <FooterCol title="Reach us">
            <li>
              <a
                href={site.address.maps}
                target="_blank"
                rel="noreferrer"
                className="flex gap-2.5 text-[0.9375rem] leading-relaxed transition-colors duration-150 hover:text-[var(--accent)]"
                style={{ color: "var(--ink-soft)" }}
              >
                <MapPin size={17} className="mt-0.5 shrink-0" />
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
                className="flex items-center gap-2.5 text-[0.9375rem] transition-colors duration-150 hover:text-[var(--accent)]"
                style={{ color: "var(--ink-soft)" }}
              >
                <Phone size={17} className="shrink-0" />
                {site.phone}
              </a>
            </li>
            <li>
              <a
                href={site.emailHref}
                className="flex items-center gap-2.5 text-[0.9375rem] transition-colors duration-150 hover:text-[var(--accent)]"
                style={{ color: "var(--ink-soft)" }}
              >
                <EnvelopeSimple size={17} className="shrink-0" />
                {site.email}
              </a>
            </li>
          </FooterCol>
        </div>

        <div
          className="mt-14 flex flex-col gap-4 border-t pt-7 text-sm sm:flex-row sm:items-center sm:justify-between"
          style={{ color: "var(--ink-faint)" }}
        >
          <p>
            {"©"} {year} {site.legalName}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="transition-colors hover:text-[var(--accent)]">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-[var(--accent)]">
              Terms & Conditions
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
      <h2 className="font-display text-sm font-semibold" style={{ color: "var(--ink)" }}>
        {title}
      </h2>
      <ul className="mt-5 grid gap-3">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="text-[0.9375rem] transition-colors duration-150 hover:text-[var(--accent)]"
        style={{ color: "var(--ink-soft)" }}
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
      className="grid h-10 w-10 place-items-center rounded-full border transition-[background-color,border-color,color] duration-150 hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--accent-ink)]"
      style={{ borderColor: "var(--rule-strong)", color: "var(--ink-soft)" }}
    >
      {children}
    </a>
  );
}
