"use client";

import { useState } from "react";
import { CaretDown } from "@phosphor-icons/react";
import type { Day } from "@/data/packages";

export function Itinerary({ days }: { days: Day[] }) {
  // The first day opens by default so the page never reads as a wall of
  // closed rows, and so there is a visible example of what a row contains.
  const [open, setOpen] = useState<number[]>([0]);

  const toggle = (i: number) =>
    setOpen((prev) => (prev.includes(i) ? prev.filter((n) => n !== i) : [...prev, i]));

  return (
    <div className="mt-6 grid gap-2.5">
      {days.map((day, i) => {
        const isOpen = open.includes(i);
        return (
          <div
            key={day.title + i}
            className="overflow-hidden rounded-2xl border transition-colors duration-200"
            style={{
              borderColor: isOpen ? "var(--rule-strong)" : "var(--rule)",
              backgroundColor: "var(--bg-raised)",
            }}
          >
            <h3>
              <button
                type="button"
                onClick={() => toggle(i)}
                aria-expanded={isOpen}
                aria-controls={`day-panel-${i}`}
                className="flex w-full items-center gap-4 px-5 py-4 text-left"
              >
                <span
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-full font-display text-[0.8125rem] font-semibold transition-colors duration-200"
                  style={
                    isOpen
                      ? { backgroundColor: "var(--accent)", color: "var(--accent-ink)" }
                      : { backgroundColor: "var(--bg-sunken)", color: "var(--ink-soft)" }
                  }
                >
                  {i + 1}
                </span>
                <span className="flex-1 font-display text-[1.0625rem] font-medium leading-snug">
                  {day.title}
                </span>
                <CaretDown
                  size={17}
                  aria-hidden
                  className="shrink-0 transition-transform duration-200 ease-[var(--ease-out-strong)]"
                  style={{
                    color: "var(--ink-faint)",
                    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </button>
            </h3>

            <div
              id={`day-panel-${i}`}
              role="region"
              className="grid transition-[grid-template-rows] duration-200 ease-[var(--ease-out-strong)]"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <ul className="grid gap-2.5 px-5 pb-5 pl-[4.25rem]">
                  {day.items.map((item) => (
                    <li
                      key={item}
                      className="relative text-[0.9375rem] leading-relaxed before:absolute before:-left-4 before:top-[0.6875rem] before:h-1 before:w-1 before:rounded-full before:bg-[var(--accent)]"
                      style={{ color: "var(--ink-soft)" }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
