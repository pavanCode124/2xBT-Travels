"use client";

import { useEffect, useRef, useState } from "react";

type Direction = "up" | "left" | "right" | "scale" | "none";

const OFFSET: Record<Direction, string> = {
  up: "translate3d(0, 24px, 0)",
  left: "translate3d(-28px, 0, 0)",
  right: "translate3d(28px, 0, 0)",
  scale: "scale(0.94)",
  none: "none",
};

/**
 * Scroll reveal. Content renders visible in the HTML; the hidden state is
 * applied only after mount, so no-JS and reduced-motion visitors never see
 * a blank page. Transform and opacity only.
 */
export function Reveal({
  children,
  delay = 0,
  from = "up",
  as: Tag = "div",
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  from?: Direction;
  as?: "div" | "section" | "li" | "article" | "span";
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const [armed, setArmed] = useState(false);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }
    setArmed(true);

    const node = ref.current;
    if (!node) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        // Reveal on entry, but also when the element is already above the
        // viewport — a hash jump, a restored scroll position or a fast fling
        // can carry it past without it ever intersecting, and it must not be
        // left invisible.
        if (entry.isIntersecting || entry.boundingClientRect.bottom <= 0) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
    );

    io.observe(node);
    return () => io.disconnect();
  }, []);

  const hidden = armed && !shown;

  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      className={className}
      style={
        armed
          ? {
              opacity: hidden ? 0 : 1,
              transform: hidden ? OFFSET[from] : "none",
              transition:
                "opacity 760ms var(--ease-out-strong), transform 760ms var(--ease-out-strong)",
              transitionDelay: shown ? `${delay}ms` : undefined,
              willChange: hidden ? "transform, opacity" : undefined,
            }
          : undefined
      }
    >
      {children}
    </Tag>
  );
}
