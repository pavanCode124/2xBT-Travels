"use client";

import Link from "next/link";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowLeft,
  ArrowUpRight,
  MoonStars,
  CalendarBlank,
} from "@phosphor-icons/react/dist/ssr";
import { inr, type Pkg } from "@/data/packages";

/**
 * The featured departures, as a swipeable rail instead of a grid. Cards are a
 * fixed width and the track bleeds off the right edge of the shell, so the row
 * reads as "there is more along here" rather than as a wall of boxes. Arrows
 * drive it on desktop, native scroll-snap does the work on touch, and the
 * progress bar underneath is the only scroll affordance on top of that.
 */
export function DeparturesRail({
  items,
  total,
}: {
  items: Pkg[];
  total: number;
}) {
  const railRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [progress, setProgress] = useState({ size: 1, offset: 0 });

  const measure = useCallback(() => {
    const el = railRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setAtStart(el.scrollLeft <= 2);
    setAtEnd(el.scrollLeft >= max - 2);
    setProgress({
      size: max <= 0 ? 1 : el.clientWidth / el.scrollWidth,
      offset: max <= 0 ? 0 : el.scrollLeft / el.scrollWidth,
    });
  }, []);

  useEffect(() => {
    const el = railRef.current;
    if (!el) return;
    measure();
    el.addEventListener("scroll", measure, { passive: true });
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", measure);
      ro.disconnect();
    };
  }, [measure]);

  const nudge = (dir: 1 | -1) => {
    const el = railRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 20 : el.clientWidth * 0.8;
    el.scrollBy({
      left: step * dir,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  };

  return (
    <section className="py-20 md:py-28">
      <div className="shell flex flex-wrap items-end justify-between gap-x-10 gap-y-6">
        <div>
          <p
            className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em]"
            style={{ color: "var(--accent)" }}
          >
            Upcoming group departures
          </p>
          <h2 className="mt-3 max-w-[18ch] font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            Fixed dates, fixed prices, no surprises
          </h2>
        </div>

        <div className="flex items-center gap-5">
          <Link
            href="/packages"
            className="group flex items-center gap-2 font-medium"
            style={{ color: "var(--accent)" }}
          >
            See all {total} tours
            <ArrowRight
              size={17}
              weight="bold"
              className="transition-transform duration-200 ease-[var(--ease-out-strong)] motion-safe:group-hover:translate-x-0.5"
            />
          </Link>

          <div className="hidden items-center gap-2 sm:flex">
            <RailButton
              label="Previous departures"
              disabled={atStart}
              onClick={() => nudge(-1)}
            >
              <ArrowLeft size={17} weight="bold" />
            </RailButton>
            <RailButton
              label="More departures"
              disabled={atEnd}
              onClick={() => nudge(1)}
            >
              <ArrowRight size={17} weight="bold" />
            </RailButton>
          </div>
        </div>
      </div>

      <div className="shell mt-10 md:mt-12">
        <div
          ref={railRef}
          role="group"
          aria-label="Featured departures"
          className="no-scrollbar -mx-5 flex snap-x snap-mandatory scroll-pl-5 gap-5 overflow-x-auto px-5 pb-1 md:-mx-8 md:scroll-pl-8 md:px-8"
        >
          {items.map((pkg, i) => (
            <TripCard key={pkg.slug} pkg={pkg} index={i} priority={i < 2} />
          ))}
        </div>

        <div
          aria-hidden
          className="mt-8 h-[3px] w-full overflow-hidden rounded-full"
          style={{ backgroundColor: "var(--rule)" }}
        >
          <div
            className="h-full rounded-full motion-safe:transition-transform motion-safe:duration-200 motion-safe:ease-out"
            style={{
              backgroundColor: "var(--accent)",
              width: `${Math.max(progress.size, 0.12) * 100}%`,
              transform: `translateX(${
                (progress.offset / Math.max(progress.size, 0.12)) * 100
              }%)`,
            }}
          />
        </div>
      </div>
    </section>
  );
}

function RailButton({
  children,
  label,
  disabled,
  onClick,
}: {
  children: React.ReactNode;
  label: string;
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className="grid h-10 w-10 place-items-center rounded-full border transition-[background-color,border-color,opacity,transform] duration-200 ease-[var(--ease-out-strong)] disabled:opacity-35 enabled:hover:border-[var(--ink-faint)] enabled:hover:bg-[var(--bg-sunken)] enabled:active:translate-y-px"
      style={{ borderColor: "var(--rule-strong)", color: "var(--ink)" }}
    >
      {children}
    </button>
  );
}

function TripCard({
  pkg,
  index,
  priority,
}: {
  pkg: Pkg;
  index: number;
  priority: boolean;
}) {
  return (
    <article
      data-card
      className="group w-[17rem] shrink-0 snap-start sm:w-[19.5rem]"
    >
      <Link
        href={`/packages/${pkg.slug}`}
        className="flex h-full flex-col overflow-hidden rounded-2xl border transition-[border-color,box-shadow,transform] duration-200 ease-[var(--ease-out-strong)] motion-safe:hover:-translate-y-1 hover:shadow-[0_18px_40px_-18px_rgb(var(--shadow-tint)/0.34)]"
        style={{ backgroundColor: "var(--bg-raised)", borderColor: "var(--rule)" }}
      >
        <div
          className="relative aspect-[4/3] overflow-hidden"
          style={{ backgroundColor: "var(--bg-sunken)" }}
        >
          <Image
            src={pkg.image}
            alt={pkg.imageAlt}
            fill
            priority={priority}
            sizes="(max-width: 640px) 72vw, 320px"
            className="object-cover transition-transform duration-500 ease-[var(--ease-out-strong)] motion-safe:group-hover:scale-[1.05]"
          />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-24"
            style={{
              background:
                "linear-gradient(to top, rgb(1 26 46 / 0.78), rgb(1 26 46 / 0))",
            }}
          />
          <span
            className="absolute left-4 top-4 font-display text-[0.8125rem] font-semibold tabular-nums text-white/75"
            aria-hidden
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="absolute bottom-3.5 left-4 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-white">
            {pkg.theme}
          </span>
          <span className="absolute bottom-3.5 right-4 text-[0.6875rem] font-medium text-white/80">
            {pkg.region}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-5">
          <h3 className="font-display text-lg font-semibold leading-snug">
            {pkg.name}
          </h3>
          <p
            className="mt-2 flex-1 text-[0.9375rem] leading-relaxed"
            style={{ color: "var(--ink-soft)" }}
          >
            {pkg.headline}
          </p>

          <div
            className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[0.8125rem]"
            style={{ color: "var(--ink-faint)" }}
          >
            <span className="flex items-center gap-1.5">
              <MoonStars size={15} />
              {pkg.days} days, {pkg.nights} nights
            </span>
            {pkg.startDate ? (
              <span className="flex items-center gap-1.5">
                <CalendarBlank size={15} />
                {pkg.startDate}
              </span>
            ) : null}
          </div>

          <div
            className="mt-5 flex items-end justify-between border-t pt-4"
            style={{ borderColor: "var(--rule)" }}
          >
            <div>
              <div className="text-[0.75rem]" style={{ color: "var(--ink-faint)" }}>
                Triple sharing, per person
              </div>
              <div className="font-display text-xl font-semibold">
                {inr(pkg.price)}
              </div>
            </div>
            <span
              className="grid h-9 w-9 place-items-center rounded-full transition-[background-color,color,transform] duration-200 ease-[var(--ease-out-strong)] motion-safe:group-hover:rotate-45"
              style={{ backgroundColor: "var(--accent-soft)", color: "var(--accent)" }}
            >
              <ArrowUpRight size={17} weight="bold" />
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
