"use client";

import { WhatsappLogo } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { whatsappLink } from "@/data/site";

/**
 * Floating WhatsApp contact. Appears once the user is past the hero so it
 * never competes with the primary CTA above the fold.
 */
export function WhatsappFab() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={whatsappLink("Hi 2XBT, I would like to know more about your tours.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with 2XBT on WhatsApp"
      aria-hidden={!shown}
      tabIndex={shown ? 0 : -1}
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full text-white shadow-lg"
      style={{
        backgroundColor: "#25d366",
        opacity: shown ? 1 : 0,
        transform: shown ? "translate3d(0,0,0) scale(1)" : "translate3d(0,8px,0) scale(0.94)",
        pointerEvents: shown ? "auto" : "none",
        transition:
          "opacity 220ms var(--ease-out-strong), transform 220ms var(--ease-out-strong)",
      }}
    >
      <WhatsappLogo size={28} weight="fill" />
    </a>
  );
}
