"use client";

import { useMemo, useState } from "react";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { PackageCard } from "@/components/package-card";
import type { Pkg } from "@/data/packages";

type Filter = "All" | Pkg["theme"] | Pkg["region"];

const themeFilters: Filter[] = ["All", "Pilgrimage", "Trek", "Leisure"];

export function PackagesExplorer({ packages }: { packages: Pkg[] }) {
  const [filter, setFilter] = useState<Filter>("All");
  const [sort, setSort] = useState<"price-asc" | "price-desc" | "duration">("price-asc");

  const regions = useMemo(
    () => Array.from(new Set(packages.map((p) => p.region))) as Filter[],
    [packages],
  );

  const shown = useMemo(() => {
    const list = packages.filter(
      (p) => filter === "All" || p.theme === filter || p.region === filter,
    );
    return [...list].sort((a, b) => {
      if (sort === "price-asc") return a.price - b.price;
      if (sort === "price-desc") return b.price - a.price;
      return b.days - a.days;
    });
  }, [packages, filter, sort]);

  return (
    <section className="shell pb-24">
      <div
        className="sticky top-20 z-30 -mx-5 mb-10 flex flex-col gap-4 border-y px-5 py-4 md:-mx-8 md:flex-row md:items-center md:justify-between md:px-8"
        style={{
          backgroundColor: "color-mix(in oklab, var(--bg) 92%, transparent)",
          backdropFilter: "blur(10px)",
          borderColor: "var(--rule)",
        }}
      >
        <div
          role="group"
          aria-label="Filter tours"
          className="no-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1"
        >
          {[...themeFilters, ...regions].map((f) => {
            const active = filter === f;
            return (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                aria-pressed={active}
                className="shrink-0 rounded-full border px-3.5 py-2 text-[0.8125rem] font-medium transition-[background-color,border-color,color] duration-150"
                style={
                  active
                    ? {
                        backgroundColor: "var(--accent)",
                        borderColor: "var(--accent)",
                        color: "var(--accent-ink)",
                      }
                    : {
                        backgroundColor: "transparent",
                        borderColor: "var(--rule-strong)",
                        color: "var(--ink-soft)",
                      }
                }
              >
                {f}
              </button>
            );
          })}
        </div>

        <label className="flex shrink-0 items-center gap-2.5 text-[0.8125rem]">
          <span style={{ color: "var(--ink-faint)" }}>Sort</span>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as typeof sort)}
            className="field !w-auto !py-2 !text-[0.8125rem]"
          >
            <option value="price-asc">Price, low to high</option>
            <option value="price-desc">Price, high to low</option>
            <option value="duration">Longest first</option>
          </select>
        </label>
      </div>

      {shown.length === 0 ? (
        <div
          className="surface grid place-items-center gap-3 px-6 py-20 text-center"
          style={{ borderStyle: "dashed" }}
        >
          <MagnifyingGlass size={28} style={{ color: "var(--ink-faint)" }} />
          <h2 className="font-display text-xl font-semibold">
            Nothing matches that filter yet
          </h2>
          <p className="max-w-[44ch]" style={{ color: "var(--ink-soft)" }}>
            We build custom trips outside this list all the time. Tell us where
            you want to go and we will quote it.
          </p>
          <button type="button" onClick={() => setFilter("All")} className="btn btn-ghost mt-2">
            Show all tours
          </button>
        </div>
      ) : (
        <>
          <p className="sr-only" aria-live="polite">
            {shown.length} tours shown
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {shown.map((p, i) => (
              <PackageCard key={p.slug} pkg={p} priority={i < 3} />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
