"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  MagnifyingGlass,
  X,
  SlidersHorizontal,
  CaretDown,
} from "@phosphor-icons/react";
import { PackageCard } from "@/components/package-card";
import { Reveal } from "@/components/reveal";
import { categories, inr, type Category, type Package } from "@/data/packages";

type Sort = "popular" | "price-asc" | "price-desc" | "short" | "long";

const SORTS: { id: Sort; label: string }[] = [
  { id: "popular", label: "Biggest saving" },
  { id: "price-asc", label: "Price: low to high" },
  { id: "price-desc", label: "Price: high to low" },
  { id: "short", label: "Shortest first" },
  { id: "long", label: "Longest first" },
];

const LENGTHS = [
  { id: "weekend", label: "2–3 days", test: (p: Package) => p.days <= 3 },
  { id: "short", label: "4–6 days", test: (p: Package) => p.days >= 4 && p.days <= 6 },
  { id: "week", label: "7–9 days", test: (p: Package) => p.days >= 7 && p.days <= 9 },
  { id: "long", label: "10 days +", test: (p: Package) => p.days >= 10 },
];

const BUDGETS = [
  { id: "under5", label: `Under ${inr(5000)}`, test: (p: Package) => p.price < 5000 },
  { id: "5-15", label: `${inr(5000)} – ${inr(15000)}`, test: (p: Package) => p.price >= 5000 && p.price < 15000 },
  { id: "15-25", label: `${inr(15000)} – ${inr(25000)}`, test: (p: Package) => p.price >= 15000 && p.price < 25000 },
  { id: "25plus", label: `${inr(25000)} +`, test: (p: Package) => p.price >= 25000 },
];

const saving = (p: Package) =>
  p.originalPrice && p.originalPrice > p.price
    ? (p.originalPrice - p.price) / p.originalPrice
    : 0;

export function PackagesExplorer({ all }: { all: Package[] }) {
  const params = useSearchParams();
  const initialCategory = params.get("category");

  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<Category | "all">(
    categories.some((c) => c.id === initialCategory) ? (initialCategory as Category) : "all",
  );
  const [length, setLength] = useState<string | null>(null);
  const [budget, setBudget] = useState<string | null>(null);
  const [sort, setSort] = useState<Sort>("popular");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    const lengthTest = LENGTHS.find((l) => l.id === length)?.test;
    const budgetTest = BUDGETS.find((b) => b.id === budget)?.test;

    const list = all.filter((p) => {
      if (category !== "all" && p.category !== category) return false;
      if (lengthTest && !lengthTest(p)) return false;
      if (budgetTest && !budgetTest(p)) return false;
      if (!q) return true;
      // Search the title, the pitch and the places on the itinerary, so
      // "pangong" or "houseboat" finds the right trip.
      return (
        p.name.toLowerCase().includes(q) ||
        p.heading.toLowerCase().includes(q) ||
        p.intro.join(" ").toLowerCase().includes(q) ||
        p.itinerary.some(
          (d) => d.city.toLowerCase().includes(q) || d.title.toLowerCase().includes(q),
        )
      );
    });

    const sorted = list.slice();
    if (sort === "price-asc") sorted.sort((a, b) => a.price - b.price);
    else if (sort === "price-desc") sorted.sort((a, b) => b.price - a.price);
    else if (sort === "short") sorted.sort((a, b) => a.days - b.days);
    else if (sort === "long") sorted.sort((a, b) => b.days - a.days);
    else sorted.sort((a, b) => saving(b) - saving(a));
    return sorted;
  }, [all, query, category, length, budget, sort]);

  const activeCount =
    (category !== "all" ? 1 : 0) + (length ? 1 : 0) + (budget ? 1 : 0) + (query ? 1 : 0);

  function reset() {
    setQuery("");
    setCategory("all");
    setLength(null);
    setBudget(null);
  }

  return (
    <div>
      {/* Search + sort bar, sticky under the header so it stays reachable
          while scrolling a 52-card grid. */}
      <div
        className="sticky top-[4.5rem] z-30 -mx-4 px-4 py-4 sm:-mx-6 sm:px-6 lg:top-20"
        style={{
          backgroundColor: "color-mix(in oklab, var(--bg) 90%, transparent)",
          backdropFilter: "blur(14px)",
          borderBottom: "1px solid var(--rule)",
        }}
      >
        <div className="flex flex-wrap items-center gap-3">
          <label className="relative min-w-[14rem] flex-1">
            <span className="sr-only">Search packages</span>
            <MagnifyingGlass
              size={17}
              weight="bold"
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2"
              style={{ color: "var(--ink-faint)" }}
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Try “Ladakh”, “Kedarnath”, “backwaters”…"
              className="field !rounded-full !py-3 pl-11 pr-4"
            />
          </label>

          <button
            type="button"
            onClick={() => setFiltersOpen((v) => !v)}
            aria-expanded={filtersOpen}
            className="btn btn-ghost btn-sm lg:hidden"
          >
            <SlidersHorizontal size={16} weight="bold" />
            Filters
            {activeCount ? (
              <span
                className="grid h-5 min-w-5 place-items-center rounded-full px-1 text-[0.6875rem] font-bold"
                style={{ backgroundColor: "var(--accent)", color: "#fff" }}
              >
                {activeCount}
              </span>
            ) : null}
          </button>

          <label className="relative hidden lg:block">
            <span className="sr-only">Sort packages</span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as Sort)}
              className="field !w-auto !rounded-full !py-3 appearance-none pr-10"
            >
              {SORTS.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.label}
                </option>
              ))}
            </select>
            <CaretDown
              size={14}
              weight="bold"
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2"
              style={{ color: "var(--ink-faint)" }}
            />
          </label>
        </div>

        <div className={`${filtersOpen ? "grid" : "hidden"} gap-4 pt-4 lg:grid`}>
          <FilterRow label="Region">
            <button
              type="button"
              className="chip"
              data-on={category === "all"}
              onClick={() => setCategory("all")}
            >
              Everything ({all.length})
            </button>
            {categories.map((c) => (
              <button
                key={c.id}
                type="button"
                className="chip"
                data-on={category === c.id}
                onClick={() => setCategory(c.id)}
              >
                {c.label} ({all.filter((p) => p.category === c.id).length})
              </button>
            ))}
          </FilterRow>

          <FilterRow label="Length">
            {LENGTHS.map((l) => (
              <button
                key={l.id}
                type="button"
                className="chip"
                data-on={length === l.id}
                onClick={() => setLength(length === l.id ? null : l.id)}
              >
                {l.label}
              </button>
            ))}
          </FilterRow>

          <FilterRow label="Budget">
            {BUDGETS.map((b) => (
              <button
                key={b.id}
                type="button"
                className="chip"
                data-on={budget === b.id}
                onClick={() => setBudget(budget === b.id ? null : b.id)}
              >
                {b.label}
              </button>
            ))}
          </FilterRow>

          <label className="lg:hidden">
            <span className="label">Sort by</span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as Sort)}
              className="field"
            >
              {SORTS.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.label}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 pt-7">
        <p className="text-[0.9375rem]" style={{ color: "var(--ink-soft)" }}>
          Showing <strong style={{ color: "var(--ink)" }}>{results.length}</strong> of {all.length} packages
        </p>
        {activeCount ? (
          <button type="button" onClick={reset} className="chip">
            <X size={13} weight="bold" />
            Clear filters
          </button>
        ) : null}
      </div>

      {results.length === 0 ? (
        <div className="surface mt-8 px-6 py-20 text-center">
          <p className="font-display text-xl font-semibold">Nothing matches that yet</p>
          <p className="mx-auto mt-3 max-w-[46ch]" style={{ color: "var(--ink-soft)" }}>
            Try a wider budget or a different region — or tell us what you had in mind
            and we&rsquo;ll build it.
          </p>
          <button type="button" onClick={reset} className="btn btn-primary mt-7">
            Show everything
          </button>
        </div>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((p, i) => (
            <Reveal key={p.slug} delay={Math.min(i, 5) * 70} className="h-full">
              <PackageCard pkg={p} priority={i < 3} />
            </Reveal>
          ))}
        </div>
      )}
    </div>
  );
}

function FilterRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span
        className="w-16 shrink-0 text-[0.75rem] font-semibold uppercase tracking-wider"
        style={{ color: "var(--ink-faint)" }}
      >
        {label}
      </span>
      {children}
    </div>
  );
}
