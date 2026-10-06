"use client";

import { useEffect, useState } from "react";

/**
 * In-page section nav for the package detail page. Highlights the section
 * currently in view; falls back to plain anchor links without JS.
 */
export function StickyNav({ sections }: { sections: { id: string; label: string }[] }) {
  const [active, setActive] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const nodes = sections
      .map((s) => document.getElementById(s.id))
      .filter((n): n is HTMLElement => Boolean(n));
    if (!nodes.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        // Pick the topmost section currently intersecting the band just
        // below the sticky header.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-18% 0px -70% 0px", threshold: 0 },
    );

    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, [sections]);

  return (
    <nav
      aria-label="On this page"
      className="sticky top-[4.5rem] z-30 lg:top-20"
      style={{
        backgroundColor: "color-mix(in oklab, var(--bg) 92%, transparent)",
        backdropFilter: "blur(14px)",
        borderBottom: "1px solid var(--rule)",
      }}
    >
      <div className="shell">
        <ul className="no-scrollbar -mx-1 flex gap-1 overflow-x-auto py-2.5">
          {sections.map((s) => {
            const on = active === s.id;
            return (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  aria-current={on ? "true" : undefined}
                  className="relative block whitespace-nowrap rounded-full px-4 py-2 text-[0.875rem] font-medium transition-colors duration-200"
                  style={{
                    color: on ? "var(--accent-ink)" : "var(--ink-soft)",
                    backgroundColor: on ? "var(--accent)" : "transparent",
                  }}
                >
                  {s.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
