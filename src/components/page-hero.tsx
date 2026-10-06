import Image from "next/image";
import Link from "next/link";
import { CaretRight } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/reveal";
import { WaveRule } from "@/components/wave";
import { FlightPath, SketchCloud, SketchRange } from "@/components/sketch-art";

/** The shared masthead for every page other than the homepage. */
export function PageHero({
  eyebrow,
  title,
  accent,
  blurb,
  image,
  imageAlt = "",
  crumbs,
  children,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  blurb?: string;
  image: string;
  imageAlt?: string;
  crumbs?: { href: string; label: string }[];
  children?: React.ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover object-center"
      />
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgb(5 22 40 / 0.92) 0%, rgb(5 22 40 / 0.76) 48%, rgb(5 22 40 / 0.5) 100%)",
        }}
      />
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(44rem 28rem at 10% 90%, rgb(244 112 26 / 0.26), transparent 62%)",
        }}
      />

      {/* The same chalk layer as the homepage hero, at masthead scale. */}
      <div aria-hidden className="pointer-events-none absolute inset-0 select-none text-white">
        <FlightPath
          className="sketch-layer right-[3%] top-[8%] hidden h-[140px] w-[52%] opacity-50 lg:block"
          duration={21}
          flip
        />
        <SketchCloud
          className="cloud-drift h-[42px] w-[84px] opacity-20"
          style={
            {
              position: "absolute",
              top: "22%",
              left: 0,
              "--cloud-duration": "124s",
            } as React.CSSProperties
          }
        />
        <SketchRange className="sketch-layer inset-x-0 bottom-[34px] h-[120px] w-full opacity-[0.12] sm:bottom-[58px] sm:h-[160px]" />
      </div>

      <div className="shell relative pb-24 pt-14 md:pb-28 md:pt-20">
        {crumbs?.length ? (
          <nav aria-label="Breadcrumb" className="mb-7">
            <ol className="flex flex-wrap items-center gap-1.5 text-[0.8125rem] text-white/60">
              {crumbs.map((c, i) => (
                <li key={c.href} className="flex items-center gap-1.5">
                  {i > 0 ? <CaretRight size={11} weight="bold" /> : null}
                  {i === crumbs.length - 1 ? (
                    <span className="text-white/90">{c.label}</span>
                  ) : (
                    <Link href={c.href} className="transition-colors hover:text-white">
                      {c.label}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        ) : null}

        <Reveal>
          <p className="eyebrow" style={{ color: "var(--color-flame-300)" }}>
            {eyebrow}
          </p>
        </Reveal>

        <Reveal delay={70}>
          <h1 className="display mt-4 max-w-[20ch] text-[clamp(2.1rem,6vw,3.9rem)] text-white">
            {title}
            {accent ? (
              <>
                {" "}
                <span className="script text-[1.12em]" style={{ color: "var(--color-flame-300)" }}>
                  {accent}
                </span>
              </>
            ) : null}
          </h1>
        </Reveal>

        <Reveal delay={120}>
          <WaveRule className="mt-6" />
        </Reveal>

        {blurb ? (
          <Reveal delay={160}>
            <p className="mt-6 max-w-[58ch] text-[1.0625rem] leading-relaxed text-white/80">
              {blurb}
            </p>
          </Reveal>
        ) : null}

        {children ? <Reveal delay={210}>{children}</Reveal> : null}
      </div>

      <div className="absolute inset-x-0 bottom-0">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="block h-[44px] w-full sm:h-[70px]">
          <path d="M0 74c180-46 320 14 500 22s300-54 480-50 280 56 460 44v60H0z" fill="var(--cool)" opacity="0.2" />
          <path d="M0 96c200-54 340 8 520 16s320-56 500-50 260 54 420 40v38H0z" fill="var(--bg)" />
        </svg>
      </div>
    </section>
  );
}
