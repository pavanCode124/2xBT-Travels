"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { X, CaretLeft, CaretRight, ArrowsOutSimple } from "@phosphor-icons/react";
import { Reveal } from "@/components/reveal";
import { gallery, galleryGroups } from "@/data/gallery";

export function GalleryGrid() {
  const [group, setGroup] = useState<string>("all");
  const [open, setOpen] = useState<number | null>(null);

  const shots = gallery.filter((s) => group === "all" || s.group === group);

  const step = useCallback(
    (delta: number) =>
      setOpen((i) => (i === null ? null : (i + delta + shots.length) % shots.length)),
    [shots.length],
  );

  // Lightbox keyboard controls, plus a scroll lock while it is open.
  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, step]);

  const current = open === null ? null : shots[open];

  return (
    <>
      <div className="flex flex-wrap gap-2">
        {galleryGroups.map((g) => (
          <button
            key={g.id}
            type="button"
            className="chip"
            data-on={group === g.id}
            onClick={() => {
              setGroup(g.id);
              setOpen(null);
            }}
          >
            {g.label}
            <span style={{ opacity: 0.6 }}>
              {g.id === "all" ? gallery.length : gallery.filter((s) => s.group === g.id).length}
            </span>
          </button>
        ))}
      </div>

      {/* Masonry via CSS columns: photographs keep their own aspect ratio
          instead of being cropped to a uniform tile. */}
      <div className="mt-10 gap-4 [column-count:2] sm:[column-count:3] lg:[column-count:4]">
        {shots.map((shot, i) => (
          <Reveal key={shot.src} delay={Math.min(i, 8) * 50} from="scale" className="mb-4 block break-inside-avoid">
            <button
              type="button"
              onClick={() => setOpen(i)}
              className="group relative block w-full overflow-hidden rounded-[16px]"
              aria-label={`Open ${shot.place}, ${shot.region}`}
            >
              <Image
                src={shot.src}
                alt={`${shot.place}, ${shot.region}`}
                width={900}
                height={700}
                sizes="(min-width: 1024px) 22rem, (min-width: 640px) 30vw, 46vw"
                className="h-auto w-full transition-transform duration-[900ms] ease-[var(--ease-out-strong)] group-hover:scale-[1.07]"
              />
              <span
                className="absolute inset-0 opacity-0 transition-opacity duration-400 group-hover:opacity-100"
                style={{
                  backgroundImage: "linear-gradient(to top, rgb(5 22 40 / 0.85), transparent 55%)",
                }}
              />
              <span className="absolute inset-x-4 bottom-3 translate-y-2 text-left opacity-0 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
                <span
                  className="block text-[0.6875rem] font-semibold uppercase tracking-[0.14em]"
                  style={{ color: "var(--color-flame-300)" }}
                >
                  {shot.region}
                </span>
                <span className="block font-display text-[0.9375rem] font-semibold text-white">
                  {shot.place}
                </span>
              </span>
              <span className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-white/90 text-[var(--color-navy-800)] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <ArrowsOutSimple size={15} weight="bold" />
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      {current ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${current.place}, ${current.region}`}
          className="fixed inset-0 z-[60] grid place-items-center p-4"
          style={{ backgroundColor: "rgb(3 15 29 / 0.94)", backdropFilter: "blur(6px)" }}
          onClick={() => setOpen(null)}
        >
          <button
            type="button"
            onClick={() => setOpen(null)}
            aria-label="Close"
            className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full border border-white/25 text-white"
          >
            <X size={20} weight="bold" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            aria-label="Previous photo"
            className="absolute left-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/25 text-white sm:left-6"
          >
            <CaretLeft size={20} weight="bold" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            aria-label="Next photo"
            className="absolute right-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/25 text-white sm:right-6"
          >
            <CaretRight size={20} weight="bold" />
          </button>

          <figure
            className="max-h-[86vh] w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={current.src}
              alt={`${current.place}, ${current.region}`}
              width={1800}
              height={1200}
              sizes="(min-width: 1024px) 56rem, 92vw"
              className="max-h-[76vh] w-full rounded-2xl object-contain"
            />
            <figcaption className="mt-4 text-center">
              <span className="block font-display text-lg font-semibold text-white">
                {current.place}
              </span>
              <span className="mt-1 block text-sm text-white/60">
                {current.region} · {open! + 1} of {shots.length}
              </span>
            </figcaption>
          </figure>
        </div>
      ) : null}
    </>
  );
}
