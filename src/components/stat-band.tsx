"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/data/site";

/** Splits "5,000+" into the number to count up and whatever decorates it. */
function parse(value: string) {
  const match = value.match(/[\d,]+/);
  if (!match) return { target: 0, prefix: value, suffix: "" };
  const target = Number(match[0].replace(/,/g, ""));
  return {
    target,
    prefix: value.slice(0, match.index),
    suffix: value.slice((match.index ?? 0) + match[0].length),
  };
}

export function StatBand() {
  const ref = useRef<HTMLDivElement>(null);
  const [run, setRun] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setRun(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="grid gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((s, i) => (
        <Stat key={s.label} value={s.value} label={s.label} run={run} delay={i * 110} index={i} />
      ))}
    </div>
  );
}

function Stat({
  value,
  label,
  run,
  delay,
  index,
}: {
  value: string;
  label: string;
  run: boolean;
  delay: number;
  index: number;
}) {
  const { target, prefix, suffix } = parse(value);
  const [n, setN] = useState(target);

  useEffect(() => {
    if (!run || !target) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    setN(0);
    let raf = 0;
    const start = performance.now() + delay;
    const tick = (now: number) => {
      const t = Math.min(1, Math.max(0, (now - start) / 1400));
      // Ease-out cubic, so the number lands softly rather than stopping dead.
      setN(Math.round(target * (1 - Math.pow(1 - t, 3))));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, target, delay]);

  return (
    <div
      className="px-6 text-center sm:border-l"
      style={{ borderColor: "var(--rule-onDeep)", borderLeftWidth: index === 0 ? 0 : undefined }}
    >
      <p
        className="font-display text-[2.6rem] font-bold leading-none tracking-tight sm:text-[3rem]"
        style={{ color: "var(--color-flame-400)" }}
      >
        {prefix}
        {target ? n.toLocaleString("en-IN") : ""}
        {suffix}
      </p>
      <p className="mt-3 text-[0.9375rem]" style={{ color: "var(--ink-onDeep-soft)" }}>
        {label}
      </p>
    </div>
  );
}
