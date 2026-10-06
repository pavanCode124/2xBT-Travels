"use client";

import { useEffect, useState } from "react";
import { WhatsappLogo, Phone, ArrowUp } from "@phosphor-icons/react";
import { site, whatsappLink } from "@/data/site";

/**
 * Floating contact stack. Appears once the visitor is past the hero so it
 * never competes with the primary call to action above the fold.
 */
export function FloatingContact() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > 560);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const frame = (i: number) => ({
    opacity: shown ? 1 : 0,
    transform: shown ? "none" : "translate3d(0, 14px, 0) scale(0.9)",
    pointerEvents: (shown ? "auto" : "none") as "auto" | "none",
    transition: `opacity 280ms var(--ease-out-strong) ${i * 60}ms, transform 280ms var(--ease-spring) ${i * 60}ms`,
  });

  return (
    <div className="fixed bottom-5 right-4 z-40 flex flex-col items-center gap-2.5 sm:right-6">
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        aria-hidden={!shown}
        tabIndex={shown ? 0 : -1}
        className="grid h-11 w-11 place-items-center rounded-full border"
        style={{
          ...frame(2),
          backgroundColor: "var(--bg-raised)",
          borderColor: "var(--rule-strong)",
          color: "var(--ink-soft)",
          boxShadow: "var(--shadow-md)",
        }}
      >
        <ArrowUp size={18} weight="bold" />
      </button>

      <a
        href={site.phoneHref}
        aria-label={`Call 2XBT on ${site.phone}`}
        aria-hidden={!shown}
        tabIndex={shown ? 0 : -1}
        className="grid h-11 w-11 place-items-center rounded-full text-white"
        style={{
          ...frame(1),
          backgroundColor: "var(--color-navy-700)",
          boxShadow: "var(--shadow-md)",
        }}
      >
        <Phone size={19} weight="fill" />
      </a>

      <a
        href={whatsappLink("Hi 2XBT, I would like to know more about your tour packages.")}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with 2XBT on WhatsApp"
        aria-hidden={!shown}
        tabIndex={shown ? 0 : -1}
        className="relative grid h-14 w-14 place-items-center rounded-full text-white"
        style={{ ...frame(0), backgroundColor: "#25d366", boxShadow: "0 10px 26px rgb(37 211 102 / 0.4)" }}
      >
        <span
          aria-hidden
          className="absolute inset-0 rounded-full"
          style={{
            backgroundColor: "#25d366",
            animation: shown ? "ping 2.4s cubic-bezier(0, 0, 0.2, 1) infinite" : undefined,
            opacity: 0.55,
          }}
        />
        <WhatsappLogo size={28} weight="fill" className="relative" />
      </a>

      <style>{`
        @keyframes ping {
          75%, 100% { transform: scale(1.7); opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          @keyframes ping { from, to { transform: none; opacity: 0; } }
        }
      `}</style>
    </div>
  );
}
