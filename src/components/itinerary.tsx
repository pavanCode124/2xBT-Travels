"use client";

import { useState } from "react";
import { CaretDown, MapPin, Moon, ForkKnife, Clock } from "@phosphor-icons/react";
import type { ItineraryDay } from "@/data/packages";

/**
 * Day-by-day accordion. The first day opens by default; the rest are
 * collapsed so a fifteen-day itinerary is still scannable. Panels stay in
 * the DOM so the content is searchable and indexable.
 */
export function Itinerary({ days }: { days: ItineraryDay[] }) {
  const [open, setOpen] = useState<number[]>(days.length ? [days[0].day] : []);

  const toggle = (day: number) =>
    setOpen((prev) => (prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]));

  const allOpen = open.length === days.length;

  return (
    <div>
      <div className="mb-4 flex justify-end">
        <button
          type="button"
          onClick={() => setOpen(allOpen ? [] : days.map((d) => d.day))}
          className="chip"
        >
          {allOpen ? "Collapse all" : "Expand all"}
        </button>
      </div>

      <ol className="relative grid gap-3">
        {days.map((d, i) => {
          const isOpen = open.includes(d.day);
          return (
            <li key={d.day} className="relative pl-12 sm:pl-16">
              {/* Timeline spine: a hairline between the day markers. */}
              {i < days.length - 1 ? (
                <span
                  aria-hidden
                  className="absolute left-[1.3125rem] top-11 bottom-0 w-px sm:left-[1.6875rem]"
                  style={{ backgroundColor: "var(--rule-strong)" }}
                />
              ) : null}

              <span
                aria-hidden
                className="absolute left-0 top-1.5 grid h-11 w-11 place-items-center rounded-full font-display text-[0.8125rem] font-bold transition-colors duration-300 sm:h-14 sm:w-14 sm:text-[0.9375rem]"
                style={{
                  backgroundColor: isOpen ? "var(--accent)" : "var(--bg-sunken)",
                  color: isOpen ? "#fff" : "var(--ink-soft)",
                  border: `1px solid ${isOpen ? "var(--accent)" : "var(--rule-strong)"}`,
                }}
              >
                D{d.day}
              </span>

              <div className="surface overflow-hidden">
                <h3>
                  <button
                    type="button"
                    onClick={() => toggle(d.day)}
                    aria-expanded={isOpen}
                    aria-controls={`day-${d.day}`}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="min-w-0">
                      <span className="block font-display text-[1.0625rem] font-semibold">
                        {d.title}
                      </span>
                      <span
                        className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-[0.8125rem]"
                        style={{ color: "var(--ink-faint)" }}
                      >
                        {d.city ? (
                          <span className="flex items-center gap-1.5">
                            <MapPin size={13} weight="fill" />
                            {d.city}
                          </span>
                        ) : null}
                        {d.timing ? (
                          <span className="flex items-center gap-1.5">
                            <Clock size={13} weight="fill" />
                            {d.timing}
                          </span>
                        ) : null}
                        {d.nightstay ? (
                          <span className="flex items-center gap-1.5">
                            <Moon size={13} weight="fill" />
                            Night in {d.nightstay}
                          </span>
                        ) : null}
                      </span>
                    </span>
                    <CaretDown
                      size={17}
                      weight="bold"
                      className="shrink-0 transition-transform duration-300"
                      style={{
                        color: "var(--ink-faint)",
                        transform: isOpen ? "rotate(180deg)" : undefined,
                      }}
                    />
                  </button>
                </h3>

                <div
                  id={`day-${d.day}`}
                  className="grid transition-[grid-template-rows] duration-400 ease-[var(--ease-out-strong)]"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <div
                      className="border-t px-5 pb-5 pt-4"
                      style={{ borderColor: "var(--rule)" }}
                    >
                      {d.points.length ? (
                        <ul className="grid gap-2.5">
                          {d.points.map((point, k) => (
                            <li
                              key={k}
                              className="flex gap-2.5 text-[0.9375rem] leading-relaxed"
                              style={{ color: "var(--ink-soft)" }}
                            >
                              <span
                                aria-hidden
                                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                                style={{ backgroundColor: "var(--cool)" }}
                              />
                              {point}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-[0.9375rem]" style={{ color: "var(--ink-faint)" }}>
                          Details shared with your joining instructions.
                        </p>
                      )}

                      {d.meals.length ? (
                        <p
                          className="mt-4 flex flex-wrap items-center gap-2 text-[0.8125rem]"
                          style={{ color: "var(--ink-faint)" }}
                        >
                          <ForkKnife size={14} weight="fill" />
                          Meals included:
                          {d.meals.map((m) => (
                            <span
                              key={m}
                              className="rounded-full px-2 py-0.5 text-[0.75rem] font-medium"
                              style={{ backgroundColor: "var(--cool-soft)", color: "var(--cool)" }}
                            >
                              {m}
                            </span>
                          ))}
                        </p>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
