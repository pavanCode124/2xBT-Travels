import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  Check,
  X,
  CalendarBlank,
  UsersThree,
  Bed,
  ForkKnife,
  WhatsappLogo,
  Warning,
  ArrowRight,
  Ticket,
  Wallet,
  FileText,
  Sparkle,
  CaretRight,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/reveal";
import { PackageCard } from "@/components/package-card";
import { Itinerary } from "@/components/itinerary";
import { FaqList } from "@/components/faq-list";
import { StickyNav } from "@/components/sticky-nav";
import { WaveRule } from "@/components/wave";
import {
  packages,
  packageBySlug,
  bookingTerms,
  paymentPolicies,
  cancellationPolicies,
  faqSets,
  categories,
  durationOf,
  inr,
} from "@/data/packages";
import { site, whatsappLink, bookingLink } from "@/data/site";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return packages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const pkg = packageBySlug(slug);
  if (!pkg) return { title: "Tour not found" };

  const description = `${pkg.heading} — ${durationOf(pkg)} from ${inr(pkg.price)} per person with 2XBT Building Boyz Tours & Travels.`;
  return {
    title: pkg.name,
    description,
    openGraph: { title: pkg.name, description, images: [pkg.image] },
    alternates: { canonical: `/packages/${pkg.slug}` },
  };
}

const SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "itinerary", label: "Itinerary" },
  { id: "pricing", label: "Pricing" },
  { id: "inclusions", label: "What's included" },
  { id: "policies", label: "Policies" },
  { id: "faq", label: "FAQ" },
];

export default async function PackagePage({ params }: Params) {
  const { slug } = await params;
  const pkg = packageBySlug(slug);
  if (!pkg) notFound();

  const category = categories.find((c) => c.id === pkg.category);
  const faqs = faqSets[pkg.faqKey] ?? [];
  const payment = paymentPolicies[pkg.paymentKey] ?? [];
  const cancellation = cancellationPolicies[pkg.cancellationKey] ?? [];

  // Same region first, then anything else, so the rail is never empty for
  // the one-off categories.
  const related = [
    ...packages.filter((p) => p.slug !== pkg.slug && p.category === pkg.category),
    ...packages.filter((p) => p.slug !== pkg.slug && p.category !== pkg.category),
  ].slice(0, 3);

  const enquiry = whatsappLink(
    `Hi 2XBT, I'm interested in "${pkg.name}" (${durationOf(pkg)}, from ${inr(pkg.price)}). Could you share the next departure dates?`,
  );

  const saving =
    pkg.originalPrice && pkg.originalPrice > pkg.price
      ? Math.round(((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100)
      : 0;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: pkg.name,
    description: pkg.intro.join(" "),
    touristType: pkg.travellers || category?.label,
    offers: {
      "@type": "Offer",
      price: pkg.price,
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      url: `${site.url}/packages/${pkg.slug}`,
    },
    provider: { "@type": "TravelAgency", name: site.legalName, url: site.url },
    itinerary: {
      "@type": "ItemList",
      numberOfItems: pkg.itinerary.length,
      itemListElement: pkg.itinerary.map((d, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: { "@type": "TouristDestination", name: d.city || d.title, description: d.title },
      })),
    },
  };

  return (
    <>
      {/* ---- Masthead ------------------------------------------------ */}
      <section className="relative isolate overflow-hidden">
        <Image
          src={pkg.image}
          alt={pkg.name}
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover object-center"
        />
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgb(5 22 40 / 0.93) 0%, rgb(5 22 40 / 0.78) 50%, rgb(5 22 40 / 0.52) 100%)",
          }}
        />
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage:
              "radial-gradient(40rem 26rem at 6% 94%, rgb(244 112 26 / 0.3), transparent 62%)",
          }}
        />

        <div className="shell pb-16 pt-12 md:pb-20 md:pt-16">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-[0.8125rem] text-white/60">
              <li>
                <Link href="/" className="transition-colors hover:text-white">
                  Home
                </Link>
              </li>
              <li className="flex items-center gap-1.5">
                <CaretRight size={11} weight="bold" />
                <Link href="/packages" className="transition-colors hover:text-white">
                  Tour Packages
                </Link>
              </li>
              {category ? (
                <li className="flex items-center gap-1.5">
                  <CaretRight size={11} weight="bold" />
                  <Link
                    href={`/packages?category=${category.id}`}
                    className="transition-colors hover:text-white"
                  >
                    {category.label}
                  </Link>
                </li>
              ) : null}
            </ol>
          </nav>

          <Reveal>
            <p className="eyebrow mt-7" style={{ color: "var(--color-flame-300)" }}>
              {pkg.heading}
            </p>
          </Reveal>

          <Reveal delay={60}>
            <h1 className="display mt-3 max-w-[22ch] text-[clamp(2rem,5.6vw,3.6rem)] text-white">
              {pkg.name}
            </h1>
          </Reveal>

          <Reveal delay={110}>
            <WaveRule className="mt-6" />
          </Reveal>

          <Reveal delay={150}>
            <ul className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-[0.9375rem] text-white/85">
              <li className="flex items-center gap-2">
                <CalendarBlank size={16} weight="fill" style={{ color: "var(--color-lagoon-300)" }} />
                {durationOf(pkg)}
              </li>
              {pkg.travellers ? (
                <li className="flex items-center gap-2">
                  <UsersThree size={16} weight="fill" style={{ color: "var(--color-lagoon-300)" }} />
                  {pkg.travellers}
                </li>
              ) : null}
              {pkg.code ? (
                <li className="flex items-center gap-2">
                  <Ticket size={16} weight="fill" style={{ color: "var(--color-lagoon-300)" }} />
                  {pkg.code}
                </li>
              ) : null}
            </ul>
          </Reveal>
        </div>
      </section>

      <StickyNav sections={SECTIONS} />

      {/* ---- Body + booking rail ------------------------------------- */}
      <div className="shell grid items-start gap-12 py-14 lg:grid-cols-[1fr_22rem] lg:gap-14">
        <div className="min-w-0">
          {/* Overview */}
          <section id="overview" className="scroll-mt-40">
            <h2 className="display text-[1.75rem]">About this trip</h2>
            <div className="mt-5 grid gap-4">
              {pkg.intro.map((para, i) => (
                <p key={i} className="text-[1.0625rem] leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                  {para}
                </p>
              ))}
            </div>

            {pkg.highlights.length ? (
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {pkg.highlights.map((h) => (
                  <p
                    key={h}
                    className="flex items-start gap-2.5 rounded-xl px-4 py-3 text-[0.9375rem]"
                    style={{ backgroundColor: "var(--accent-soft)", color: "var(--ink)" }}
                  >
                    <Sparkle
                      size={16}
                      weight="fill"
                      className="mt-0.5 shrink-0"
                      style={{ color: "var(--accent)" }}
                    />
                    {h}
                  </p>
                ))}
              </div>
            ) : null}

            {pkg.accommodation || pkg.meals ? (
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {pkg.accommodation ? (
                  <FactCard icon={<Bed size={18} weight="duotone" />} title="Stay">
                    {pkg.accommodation}
                  </FactCard>
                ) : null}
                {pkg.meals ? (
                  <FactCard icon={<ForkKnife size={18} weight="duotone" />} title="Meals">
                    {pkg.meals}
                  </FactCard>
                ) : null}
              </div>
            ) : null}

            {pkg.support.length ? (
              <div className="mt-8">
                <h3 className="font-display text-[1.0625rem] font-semibold">On-tour support</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {pkg.support.map((s) => (
                    <li key={s} className="chip">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </section>

          {/* Itinerary */}
          <section id="itinerary" className="mt-16 scroll-mt-40">
            <h2 className="display text-[1.75rem]">Day by day</h2>
            <p className="mt-3 max-w-[60ch]" style={{ color: "var(--ink-soft)" }}>
              {pkg.itinerary.length} days planned end to end. Timings shift with weather,
              road conditions and darshan queues — your captain keeps you posted.
            </p>
            <div className="mt-8">
              <Itinerary days={pkg.itinerary} />
            </div>
          </section>

          {/* Pricing */}
          <section id="pricing" className="mt-16 scroll-mt-40">
            <h2 className="display text-[1.75rem]">Pricing</h2>
            <p className="mt-3 max-w-[60ch]" style={{ color: "var(--ink-soft)" }}>
              Per person, by sharing basis. Taxes are quoted at the time of booking.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {pkg.pricing.map((tier, i) => (
                <Reveal key={tier.label} delay={i * 70} className="h-full">
                  <div
                    className="surface flex h-full flex-col justify-between p-5"
                    style={
                      i === 0
                        ? { borderColor: "var(--accent)", boxShadow: "0 0 0 1px var(--accent)" }
                        : undefined
                    }
                  >
                    <div>
                      <p className="font-display text-[0.9375rem] font-semibold">{tier.label}</p>
                      {i === 0 ? (
                        <span
                          className="badge mt-2"
                          style={{ backgroundColor: "var(--accent-soft)", color: "var(--accent)" }}
                        >
                          Best price
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-5 font-display text-[1.75rem] font-bold" style={{ color: "var(--accent)" }}>
                      {inr(tier.price)}
                      <span className="ml-1 text-[0.8125rem] font-medium" style={{ color: "var(--ink-faint)" }}>
                        / person
                      </span>
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            {pkg.notes ? (
              <p
                className="mt-6 flex gap-3 rounded-xl border p-4 text-[0.875rem] leading-relaxed"
                style={{
                  borderColor: "var(--rule-strong)",
                  backgroundColor: "var(--bg-sunken)",
                  color: "var(--ink-soft)",
                }}
              >
                <Warning size={17} weight="fill" className="mt-0.5 shrink-0" style={{ color: "var(--accent)" }} />
                {pkg.notes}
              </p>
            ) : null}
          </section>

          {/* Inclusions */}
          <section id="inclusions" className="mt-16 scroll-mt-40">
            <h2 className="display text-[1.75rem]">What&rsquo;s included</h2>
            <div className="mt-7 grid gap-6 md:grid-cols-2">
              <List
                title="Included"
                tone="good"
                icon={<Check size={13} weight="bold" />}
                items={pkg.inclusions}
              />
              <List
                title="Not included"
                tone="bad"
                icon={<X size={13} weight="bold" />}
                items={pkg.exclusions}
              />
            </div>
          </section>

          {/* Policies */}
          <section id="policies" className="mt-16 scroll-mt-40">
            <h2 className="display text-[1.75rem]">Payment, cancellation &amp; terms</h2>

            <div className="mt-7 grid gap-5 md:grid-cols-2">
              <Policy icon={<Wallet size={18} weight="duotone" />} title="Payment" items={payment} />
              <Policy
                icon={<FileText size={18} weight="duotone" />}
                title="Cancellation &amp; refunds"
                items={cancellation}
              />
            </div>

            <details className="surface mt-5 overflow-hidden">
              <summary className="cursor-pointer list-none px-5 py-4 font-display text-[1rem] font-semibold">
                Booking terms &amp; conditions ({bookingTerms.length} clauses)
              </summary>
              <ol
                className="border-t px-5 py-5 text-[0.875rem] leading-relaxed"
                style={{ borderColor: "var(--rule)", color: "var(--ink-soft)" }}
              >
                {bookingTerms.map((t, i) => (
                  <li key={i} className="py-1">
                    {t}
                  </li>
                ))}
              </ol>
            </details>
          </section>

          {/* FAQ */}
          {faqs.length ? (
            <section id="faq" className="mt-16 scroll-mt-40">
              <h2 className="display text-[1.75rem]">Common questions</h2>
              <div className="mt-7">
                <FaqList items={faqs} />
              </div>
            </section>
          ) : null}
        </div>

        {/* ---- Booking card ------------------------------------------ */}
        <aside className="lg:sticky lg:top-32">
          <div className="surface overflow-hidden" style={{ boxShadow: "var(--shadow-md)" }}>
            <div
              className="px-6 py-6"
              style={{
                backgroundImage:
                  "linear-gradient(125deg, var(--color-navy-800), var(--color-navy-700) 60%, var(--color-lagoon-700))",
              }}
            >
              <p className="text-[0.75rem] uppercase tracking-[0.14em] text-white/60">Starts from</p>
              <p className="mt-2 flex items-baseline gap-3">
                <span className="font-display text-[2.25rem] font-bold leading-none" style={{ color: "var(--color-flame-300)" }}>
                  {inr(pkg.price)}
                </span>
                {pkg.originalPrice && pkg.originalPrice > pkg.price ? (
                  <span className="text-[0.9375rem] text-white/50 line-through">
                    {inr(pkg.originalPrice)}
                  </span>
                ) : null}
              </p>
              <p className="mt-1.5 text-[0.8125rem] text-white/70">
                per person · {durationOf(pkg)}
              </p>
              {saving >= 10 ? (
                <span
                  className="badge mt-4"
                  style={{ backgroundColor: "var(--accent)", color: "#fff" }}
                >
                  Save {saving}% this season
                </span>
              ) : null}
            </div>

            <div className="grid gap-3 p-5">
              <a
                href={bookingLink(pkg.slug)}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary w-full"
              >
                Book this trip
                <ArrowRight size={16} weight="bold" />
              </a>
              <a href={enquiry} target="_blank" rel="noreferrer" className="btn btn-ghost w-full">
                <WhatsappLogo size={18} weight="fill" />
                Ask about dates
              </a>

              <dl
                className="mt-2 grid gap-2.5 border-t pt-4 text-[0.875rem]"
                style={{ borderColor: "var(--rule)" }}
              >
                <Row label="Duration" value={durationOf(pkg)} />
                <Row label="Region" value={category?.label ?? "—"} />
                <Row label="Sharing options" value={`${pkg.pricing.length || 1} tiers`} />
                <Row label="Days planned" value={`${pkg.itinerary.length}`} />
              </dl>

              <p
                className="mt-2 rounded-xl p-3 text-[0.8125rem] leading-relaxed"
                style={{ backgroundColor: "var(--cool-soft)", color: "var(--ink-soft)" }}
              >
                Prefer to talk it through? Call{" "}
                <a href={site.phoneHref} className="font-semibold" style={{ color: "var(--cool)" }}>
                  {site.phone}
                </a>
                . We answer seven days a week.
              </p>
            </div>
          </div>
        </aside>
      </div>

      {/* ---- Related ------------------------------------------------- */}
      <section
        className="border-t py-20"
        style={{ backgroundColor: "var(--bg-sunken)", borderColor: "var(--rule)" }}
      >
        <div className="shell">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <h2 className="display text-[1.75rem]">
              You might also{" "}
              <span className="script text-[1.15em]" style={{ color: "var(--accent)" }}>
                like
              </span>
            </h2>
            <Link href="/packages" className="btn btn-ghost btn-sm">
              All packages
              <ArrowRight size={15} weight="bold" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p, i) => (
              <Reveal key={p.slug} delay={i * 90} className="h-full">
                <PackageCard pkg={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <dt style={{ color: "var(--ink-faint)" }}>{label}</dt>
      <dd className="font-medium">{value}</dd>
    </div>
  );
}

function FactCard({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="surface p-5">
      <p className="flex items-center gap-2 font-display text-[0.9375rem] font-semibold">
        <span style={{ color: "var(--cool)" }}>{icon}</span>
        {title}
      </p>
      <p className="mt-2.5 text-[0.9375rem] leading-relaxed" style={{ color: "var(--ink-soft)" }}>
        {children}
      </p>
    </div>
  );
}

function List({
  title,
  items,
  tone,
  icon,
}: {
  title: string;
  items: string[];
  tone: "good" | "bad";
  icon: React.ReactNode;
}) {
  const good = tone === "good";
  if (!items.length) return null;

  return (
    <div className="surface p-6">
      <h3 className="font-display text-[1.0625rem] font-semibold">{title}</h3>
      <ul className="mt-5 grid gap-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-[0.9375rem] leading-relaxed" style={{ color: "var(--ink-soft)" }}>
            <span
              aria-hidden
              className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full"
              style={{
                backgroundColor: good ? "var(--cool-soft)" : "var(--bg-sunken)",
                color: good ? "var(--cool)" : "var(--ink-faint)",
              }}
            >
              {icon}
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Policy({
  icon,
  title,
  items,
}: {
  icon: React.ReactNode;
  title: string;
  items: string[];
}) {
  if (!items.length) return null;
  return (
    <div className="surface p-6">
      <h3 className="flex items-center gap-2 font-display text-[1.0625rem] font-semibold">
        <span style={{ color: "var(--accent)" }}>{icon}</span>
        {title}
      </h3>
      <ul className="mt-5 grid gap-2.5 text-[0.875rem] leading-relaxed" style={{ color: "var(--ink-soft)" }}>
        {items.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </div>
  );
}
