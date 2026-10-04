import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  CaretRight,
  Check,
  X,
  MoonStars,
  CalendarBlank,
  MapTrifold,
  WhatsappLogo,
  Warning,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/reveal";
import { PackageCard } from "@/components/package-card";
import { Itinerary } from "@/components/itinerary";
import { packages, getPackage, bookingTerms, inr } from "@/data/packages";
import { site, whatsappLink } from "@/data/site";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return packages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const pkg = getPackage(slug);
  if (!pkg) return { title: "Tour not found" };

  return {
    title: pkg.name,
    description: `${pkg.headline}. ${pkg.days} days from ${inr(pkg.price)} per person with 2XBT Building Boyz Tours & Travels.`,
    openGraph: { title: pkg.name, description: pkg.blurb, images: [pkg.image] },
  };
}

export default async function PackagePage({ params }: Params) {
  const { slug } = await params;
  const pkg = getPackage(slug);
  if (!pkg) notFound();

  const related = packages.filter((p) => p.slug !== pkg.slug).slice(0, 3);
  const enquiry = whatsappLink(
    `Hi 2XBT, I am interested in the ${pkg.name} tour${pkg.startDate ? ` on ${pkg.startDate}` : ""}. Could you share availability?`,
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: pkg.name,
    description: pkg.blurb,
    touristType: pkg.theme,
    itinerary: {
      "@type": "ItemList",
      numberOfItems: pkg.itinerary.length,
      itemListElement: pkg.itinerary.map((d, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: d.title,
      })),
    },
    offers: {
      "@type": "Offer",
      price: pkg.price,
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      url: `${site.url}/packages/${pkg.slug}`,
    },
    provider: { "@type": "TravelAgency", name: site.legalName, telephone: site.phone },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="shell pt-8 md:pt-10">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol
            className="flex items-center gap-1.5 text-[0.8125rem]"
            style={{ color: "var(--ink-faint)" }}
          >
            <li>
              <Link href="/" className="hover:text-[var(--accent)]">
                Home
              </Link>
            </li>
            <CaretRight size={12} aria-hidden />
            <li>
              <Link href="/packages" className="hover:text-[var(--accent)]">
                Tour Packages
              </Link>
            </li>
            <CaretRight size={12} aria-hidden />
            <li aria-current="page" style={{ color: "var(--ink-soft)" }}>
              {pkg.name}
            </li>
          </ol>
        </nav>

        <div className="relative overflow-hidden rounded-3xl">
          <Image
            src={pkg.image}
            alt={pkg.imageAlt}
            width={1600}
            height={900}
            priority
            sizes="100vw"
            className="h-[20rem] w-full object-cover sm:h-[26rem]"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgb(1 26 46 / 0.9) 10%, rgb(1 26 46 / 0.4) 55%, rgb(1 26 46 / 0.1) 100%)",
            }}
          />
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-9">
            <span className="rounded-full bg-white/15 px-3 py-1 text-[0.6875rem] font-semibold tracking-wide text-white backdrop-blur-sm">
              {pkg.theme} {"·"} {pkg.region}
            </span>
            <h1 className="mt-4 max-w-[22ch] font-display text-3xl font-semibold leading-[1.1] text-white sm:text-5xl">
              {pkg.name}
            </h1>
            <p className="mt-3 max-w-[50ch] text-white/85 sm:text-lg">{pkg.headline}</p>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="shell grid gap-12 py-12 lg:grid-cols-[1.55fr_1fr] lg:gap-14 lg:py-16">
        <div className="min-w-0">
          <p className="max-w-[62ch] text-lg leading-relaxed" style={{ color: "var(--ink-soft)" }}>
            {pkg.blurb}
          </p>

          {/* Route */}
          <div className="mt-9">
            <h2 className="flex items-center gap-2 font-display text-sm font-semibold">
              <MapTrifold size={17} style={{ color: "var(--accent)" }} />
              Route
            </h2>
            <ol className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-2">
              {pkg.route.map((stop, i) => (
                <li key={`${stop}-${i}`} className="flex items-center gap-2">
                  <span
                    className="rounded-full border px-3 py-1.5 text-[0.8125rem] font-medium"
                    style={{ borderColor: "var(--rule-strong)", color: "var(--ink-soft)" }}
                  >
                    {stop}
                  </span>
                  {i < pkg.route.length - 1 ? (
                    <CaretRight size={12} style={{ color: "var(--ink-faint)" }} aria-hidden />
                  ) : null}
                </li>
              ))}
            </ol>
          </div>

          {pkg.notes?.length ? (
            <div
              className="mt-9 flex gap-3 rounded-2xl border p-4"
              style={{ borderColor: "var(--rule-strong)", backgroundColor: "var(--accent-soft)" }}
            >
              <Warning size={19} style={{ color: "var(--accent)" }} className="mt-0.5 shrink-0" />
              <div className="grid gap-2">
                {pkg.notes.map((n) => (
                  <p key={n} className="text-[0.9375rem] leading-relaxed">
                    {n}
                  </p>
                ))}
              </div>
            </div>
          ) : null}

          {/* Itinerary */}
          <div className="mt-12">
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              Day by day
            </h2>
            <Itinerary days={pkg.itinerary} />
          </div>

          {/* Includes / excludes */}
          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            <div>
              <h2 className="font-display text-lg font-semibold">What is included</h2>
              <ul className="mt-4 grid gap-3">
                {pkg.includes.map((item) => (
                  <li key={item} className="flex gap-2.5 text-[0.9375rem] leading-relaxed">
                    <Check size={17} weight="bold" className="mt-1 shrink-0 text-emerald-600" />
                    <span style={{ color: "var(--ink-soft)" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-lg font-semibold">What is not included</h2>
              <ul className="mt-4 grid gap-3">
                {pkg.excludes.map((item) => (
                  <li key={item} className="flex gap-2.5 text-[0.9375rem] leading-relaxed">
                    <X size={17} weight="bold" className="mt-1 shrink-0" style={{ color: "var(--ink-faint)" }} />
                    <span style={{ color: "var(--ink-soft)" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Terms */}
          <div className="mt-14">
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              Booking terms for this tour
            </h2>
            <dl className="mt-6 grid gap-5 sm:grid-cols-2">
              {bookingTerms.map((t) => (
                <div key={t.title}>
                  <dt className="font-display text-[0.9375rem] font-semibold">{t.title}</dt>
                  <dd
                    className="mt-1.5 text-[0.875rem] leading-relaxed"
                    style={{ color: "var(--ink-soft)" }}
                  >
                    {t.body}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Booking rail */}
        <aside className="lg:sticky lg:top-[88px] lg:h-fit">
          <div className="surface p-6">
            <div className="text-[0.8125rem]" style={{ color: "var(--ink-faint)" }}>
              Triple sharing, per person
            </div>
            <div className="mt-1 font-display text-4xl font-semibold">{inr(pkg.price)}</div>
            <p className="mt-2 text-[0.8125rem]" style={{ color: "var(--ink-faint)" }}>
              Double sharing adds {inr(pkg.doubleSharingExtra)} per person. This
              price applies to a 6 person booking.
            </p>

            <dl
              className="mt-6 grid gap-3 border-t pt-5 text-[0.9375rem]"
              style={{ borderColor: "var(--rule)" }}
            >
              <div className="flex items-center gap-2.5">
                <MoonStars size={17} style={{ color: "var(--accent)" }} />
                <dt className="sr-only">Duration</dt>
                <dd>
                  {pkg.days} days, {pkg.nights} nights
                </dd>
              </div>
              {pkg.startDate ? (
                <div className="flex items-center gap-2.5">
                  <CalendarBlank size={17} style={{ color: "var(--accent)" }} />
                  <dt className="sr-only">Group departure</dt>
                  <dd>Group departure {pkg.startDate}</dd>
                </div>
              ) : null}
              <div className="flex items-center gap-2.5">
                <MapTrifold size={17} style={{ color: "var(--accent)" }} />
                <dt className="sr-only">Region</dt>
                <dd>{pkg.region}</dd>
              </div>
            </dl>

            <div className="mt-6 grid gap-3">
              <a href={enquiry} target="_blank" rel="noreferrer" className="btn btn-primary w-full">
                <WhatsappLogo size={18} weight="fill" />
                Enquire on WhatsApp
              </a>
              <Link
                href={`/contact?tour=${encodeURIComponent(pkg.name)}`}
                className="btn btn-ghost w-full"
              >
                Send an enquiry
              </Link>
              <a
                href={site.phoneHref}
                className="text-center text-[0.8125rem]"
                style={{ color: "var(--ink-faint)" }}
              >
                Or call {site.phone}
              </a>
            </div>
          </div>
        </aside>
      </section>

      {/* Related */}
      <section
        className="border-t py-20"
        style={{ backgroundColor: "var(--bg-sunken)", borderColor: "var(--rule)" }}
      >
        <div className="shell">
          <h2 className="font-display text-2xl font-semibold tracking-tight">
            Other trips people pair this with
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p, i) => (
              <Reveal key={p.slug} delay={i * 70}>
                <PackageCard pkg={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
