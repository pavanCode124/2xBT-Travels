"use client";

import { useState } from "react";
import { Plus } from "@phosphor-icons/react";
import type { Faq } from "@/data/packages";

export function FaqList({ items }: { items: Faq[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="grid gap-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className="surface overflow-hidden">
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls={`faq-${i}`}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-display text-[1rem] font-semibold"
              >
                {item.q}
                <Plus
                  size={17}
                  weight="bold"
                  className="shrink-0 transition-transform duration-300"
                  style={{
                    color: isOpen ? "var(--accent)" : "var(--ink-faint)",
                    transform: isOpen ? "rotate(45deg)" : undefined,
                  }}
                />
              </button>
            </h3>
            <div
              id={`faq-${i}`}
              className="grid transition-[grid-template-rows] duration-400 ease-[var(--ease-out-strong)]"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p
                  className="px-5 pb-5 text-[0.9375rem] leading-relaxed"
                  style={{ color: "var(--ink-soft)" }}
                >
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
