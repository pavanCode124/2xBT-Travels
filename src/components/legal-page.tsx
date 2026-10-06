import Link from "next/link";
import { Phone, EnvelopeSimple, MapPin } from "@phosphor-icons/react/dist/ssr";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { site } from "@/data/site";
import { legalEffectiveDate, type LegalSection } from "@/data/legal";

/** Replaces the published {ORG} placeholder with the trading name. */
const fill = (text: string) => text.replaceAll("{ORG}", site.name);

export function LegalPage({
  kind,
  sections,
  description,
  image,
}: {
  kind: "Privacy Policy" | "Terms & Conditions";
  sections: LegalSection[];
  description: string;
  image: string;
}) {
  // The first block is the preamble: it carries the document title already,
  // so it renders as lead copy rather than as a numbered section.
  const [preamble, ...rest] = sections;

  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={kind}
        blurb={description}
        image={image}
        crumbs={[
          { href: "/", label: "Home" },
          { href: "#", label: kind },
        ]}
      />

      <div className="shell grid items-start gap-12 py-16 lg:grid-cols-[1fr_17rem] lg:gap-16">
        <article className="prose-legal min-w-0 max-w-[68ch]">
          <p
            className="rounded-xl px-4 py-3 text-[0.875rem]"
            style={{ backgroundColor: "var(--cool-soft)", color: "var(--ink-soft)" }}
          >
            Effective date: <strong style={{ color: "var(--ink)" }}>{legalEffectiveDate}</strong> ·
            Last updated: {legalEffectiveDate}
          </p>

          {preamble?.body?.map((p, i) => (
            <p key={i} className={i === 0 ? "mt-6 text-[1.0625rem]" : "text-[1.0625rem]"}>
              {fill(p)}
            </p>
          ))}

          {rest.map((section) => (
            <Reveal key={section.title} as="section">
              <h2 id={slug(section.title)} className="scroll-mt-28">
                {fill(section.title)}
              </h2>
              {section.body?.map((p, i) => (
                <p key={i}>{fill(p)}</p>
              ))}
              {section.list ? (
                <ul>
                  {section.list.map((item) => (
                    <li key={item}>{fill(item)}</li>
                  ))}
                </ul>
              ) : null}
              {section.after?.map((p, i) => (
                <p key={i}>{fill(p)}</p>
              ))}
            </Reveal>
          ))}

          <div
            className="mt-10 rounded-2xl border p-6"
            style={{ borderColor: "var(--rule-strong)", backgroundColor: "var(--bg-sunken)" }}
          >
            <h2 className="!mt-0">Contact details</h2>
            <ul className="!list-none !pl-0 !gap-3">
              <li className="flex items-center gap-2.5">
                <Phone size={16} weight="fill" style={{ color: "var(--accent)" }} />
                <a href={site.phoneHref} className="hover:text-[var(--accent)]">
                  {site.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <EnvelopeSimple size={16} weight="fill" style={{ color: "var(--accent)" }} />
                <a href={site.emailHref} className="hover:text-[var(--accent)]">
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={16} weight="fill" className="mt-1" style={{ color: "var(--accent)" }} />
                <span>
                  {site.legalName}
                  <br />
                  {site.address.line1}, {site.address.line2}
                </span>
              </li>
            </ul>
          </div>
        </article>

        {/* Contents rail. Plain anchors — no JS needed to navigate. */}
        <aside className="hidden lg:block lg:sticky lg:top-32">
          <p className="eyebrow" style={{ color: "var(--ink-faint)" }}>
            On this page
          </p>
          <ul className="mt-5 grid gap-2 border-l pl-4" style={{ borderColor: "var(--rule)" }}>
            {rest.map((section) => (
              <li key={section.title}>
                <a
                  href={`#${slug(section.title)}`}
                  className="block text-[0.8125rem] leading-snug transition-colors duration-200 hover:text-[var(--accent)]"
                  style={{ color: "var(--ink-faint)" }}
                >
                  {fill(section.title)}
                </a>
              </li>
            ))}
          </ul>
          <Link href="/contact" className="btn btn-ghost btn-sm mt-7 w-full">
            Questions? Contact us
          </Link>
        </aside>
      </div>
    </>
  );
}

function slug(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
