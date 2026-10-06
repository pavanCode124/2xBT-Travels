"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "@phosphor-icons/react";
import { heroSlides, HERO_SLIDE_MS } from "@/data/hero-slides";
import { durationOf, inr, packageBySlug } from "@/data/packages";

/**
 * Drives the hero reel.
 *
 * Returns the live index plus the set of frames worth rendering: the reel
 * mounts one frame ahead of itself rather than all seven up front, so the
 * page costs two photographs on load instead of a megabyte of them.
 */
export function useHeroReel() {
  const [index, setIndex] = useState(0);
  const [reach, setReach] = useState(1);
  const [paused, setPaused] = useState(false);
  const reduced = useRef(false);

  useEffect(() => {
    reduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced.current) return;

    // A hidden tab should not burn a timer, and coming back should not
    // flush a queue of missed advances.
    const onVisibility = () => setPaused(document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  useEffect(() => {
    if (reduced.current || paused) return;
    const id = window.setTimeout(
      () => setIndex((i) => (i + 1) % heroSlides.length),
      HERO_SLIDE_MS,
    );
    return () => window.clearTimeout(id);
  }, [index, paused]);

  // Keep one frame of headroom so the next cross-fade has something decoded.
  useEffect(() => {
    setReach((r) => Math.max(r, Math.min(index + 2, heroSlides.length)));
  }, [index]);

  return { index, reach, select: setIndex };
}

/** The stacked photographs. Sits behind everything else in the hero. */
export function HeroStage({ index, reach }: { index: number; reach: number }) {
  return (
    <>
      {heroSlides.map((slide, i) => {
        if (i >= reach) return null;
        const live = i === index;
        return (
          <Image
            key={slide.src}
            src={slide.src}
            alt={live ? slide.alt : ""}
            aria-hidden={!live}
            fill
            priority={i === 0}
            // Lazy loading is geometric, and a frame sitting at opacity 0 in a
            // backgrounded tab may never be fetched — it then arrives blank on
            // its turn. Mounting ahead only helps if the fetch starts with it.
            loading="eager"
            sizes="100vw"
            className="hero-frame object-cover object-center"
            data-live={live}
            data-pan={i % 2 === 0 ? "in" : "out"}
          />
        );
      })}
    </>
  );
}

/**
 * Caption and dots for the reel. The caption links to the package the
 * photograph was taken for, so the reel is a way into the catalogue and
 * not only decoration.
 */
export function HeroReelNav({
  index,
  onSelect,
}: {
  index: number;
  onSelect: (i: number) => void;
}) {
  // The photographs cross-fade over 1.4s, so swapping the words the instant
  // the index changes would caption the outgoing frame. The text dissolves
  // on its own clock and changes at the midpoint of the hand-over.
  const [shown, setShown] = useState(index);
  const [dissolving, setDissolving] = useState(false);

  useEffect(() => {
    if (index === shown) return;
    setDissolving(true);
    const swap = window.setTimeout(() => {
      setShown(index);
      setDissolving(false);
    }, 420);
    return () => window.clearTimeout(swap);
  }, [index, shown]);

  const slide = heroSlides[shown];
  const pkg = packageBySlug(slide.slug);

  return (
    <div
      className="w-fit rounded-2xl border px-4 py-3.5"
      style={{
        borderColor: "rgb(255 255 255 / 0.22)",
        backgroundColor: "rgb(5 22 40 / 0.3)",
        backdropFilter: "blur(12px) saturate(1.3)",
      }}
    >
      <Link
        href={`/packages/${slide.slug}`}
        className="group flex items-center gap-5"
        style={{
          opacity: dissolving ? 0 : 1,
          transition: "opacity 400ms var(--ease-out-strong)",
        }}
      >
        <span className="min-w-0">
          <span
            className="block text-[0.6875rem] font-semibold uppercase tracking-[0.16em]"
            style={{ color: "var(--color-flame-300)" }}
          >
            {slide.region}
          </span>
          <span className="mt-0.5 block font-display text-[0.9375rem] font-semibold text-white">
            {slide.place}
          </span>
          {pkg ? (
            <span className="mt-0.5 block text-[0.75rem] text-white/70">
              {durationOf(pkg)} · from {inr(pkg.price)}
            </span>
          ) : null}
        </span>
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/35 text-white transition-colors duration-200 group-hover:border-white group-hover:bg-white group-hover:text-[var(--color-navy-800)]">
          <ArrowUpRight size={15} weight="bold" />
        </span>
      </Link>

      <div
        className="mt-3.5 flex items-center gap-1.5"
        role="tablist"
        aria-label="Hero photographs"
      >
        {heroSlides.map((s, i) => {
          const live = i === index;
          return (
            <button
              key={s.src}
              type="button"
              role="tab"
              aria-selected={live}
              aria-label={`${s.place}, ${s.region}`}
              onClick={() => onSelect(i)}
              className="h-1.5 overflow-hidden rounded-full transition-[width,background-color] duration-500 ease-[var(--ease-out-strong)]"
              style={{
                width: live ? "2.25rem" : "0.375rem",
                backgroundColor: live ? "rgb(255 255 255 / 0.25)" : "rgb(255 255 255 / 0.5)",
              }}
            >
              {live ? (
                <span
                  className="hero-dot-fill block h-full w-full rounded-full"
                  style={
                    {
                      backgroundColor: "var(--color-flame-400)",
                      "--hero-slide-ms": `${HERO_SLIDE_MS}ms`,
                    } as React.CSSProperties
                  }
                />
              ) : null}
            </button>
          );
        })}
      </div>
    </div>
  );
}
