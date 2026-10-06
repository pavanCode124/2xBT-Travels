"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  WhatsappLogo,
  Star,
  ShieldCheck,
  UsersThree,
  Compass,
} from "@phosphor-icons/react";
import { FlightPath, SketchBirds, SketchCloud, SketchRange } from "@/components/sketch-art";
import { HeroStage, HeroReelNav, useHeroReel } from "@/components/hero-reel";
import { site, whatsappLink } from "@/data/site";
import { categories } from "@/data/packages";

const BADGES = [
  { icon: UsersThree, text: "5,000+ travellers moved" },
  { icon: ShieldCheck, text: "No hidden charges" },
  { icon: Compass, text: "52 ready itineraries" },
];

export function HomeHero() {
  const [offset, setOffset] = useState(0);
  const frame = useRef(0);
  const reel = useHeroReel();

  // Slow parallax on the backdrop. rAF-throttled and skipped entirely when
  // the visitor has asked for reduced motion.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onScroll = () => {
      if (frame.current) return;
      frame.current = requestAnimationFrame(() => {
        setOffset(Math.min(window.scrollY, 700) * 0.22);
        frame.current = 0;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, []);

  return (
    <section className="relative isolate overflow-hidden">
      {/* The reel sits in its own layer so the scroll parallax moves all
          seven frames together without fighting each frame's own pan. */}
      <div
        className="absolute inset-0 -z-10 overflow-hidden"
        style={{ transform: `translate3d(0, ${offset}px, 0)` }}
      >
        <HeroStage index={reel.index} reach={reel.reach} />
      </div>

      {/* Two stacked washes: a navy base for legibility, then a warm
          bottom-left bloom so the orange CTA sits in its own light. */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgb(5 22 40 / 0.9) 0%, rgb(5 22 40 / 0.72) 42%, rgb(5 22 40 / 0.35) 100%)",
        }}
      />
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(60rem 40rem at 8% 92%, rgb(244 112 26 / 0.3), transparent 62%), radial-gradient(50rem 36rem at 92% 10%, rgb(28 154 214 / 0.26), transparent 60%)",
        }}
      />

      {/* ---- Pencil layer ------------------------------------------
          Chalk-white line art over the photograph: a route arc with an
          aeroplane flying it, two clouds crossing on different clocks,
          a skein of birds and the ranges along the horizon. All of it
          sits before the content in the DOM, so it paints underneath. */}
      <div aria-hidden className="pointer-events-none absolute inset-0 select-none text-white">
        <FlightPath
          className="sketch-layer left-[30%] top-[3%] hidden h-[160px] w-[68%] opacity-[0.55] md:block"
          duration={19}
        />

        <SketchCloud
          className="cloud-drift h-[54px] w-[108px] opacity-25"
          style={
            {
              position: "absolute",
              top: "9%",
              left: 0,
              "--cloud-duration": "104s",
            } as React.CSSProperties
          }
        />
        {/* The second cloud runs slower and starts mid-crossing, so the
            two are never in step. */}
        <SketchCloud
          className="cloud-drift hidden h-[38px] w-[76px] opacity-20 sm:block"
          style={
            {
              position: "absolute",
              top: "40%",
              left: 0,
              "--cloud-duration": "148s",
              animationDelay: "-46s",
            } as React.CSSProperties
          }
        />

        <SketchBirds className="sketch-layer right-[9%] top-[40%] hidden h-[42px] w-[90px] opacity-30 lg:block" />

        <SketchRange className="sketch-layer inset-x-0 bottom-[46px] h-[150px] w-full opacity-[0.22] sm:bottom-[74px] sm:h-[200px]" />
      </div>

      <div className="shell relative flex min-h-[min(92vh,860px)] flex-col justify-center pb-28 pt-16 md:pb-36 md:pt-24">
        <div className="max-w-3xl">
          <p
            className="inline-flex items-center gap-2.5 rounded-full border px-4 py-2 text-[0.8125rem] font-medium text-white/90"
            style={{
              borderColor: "rgb(255 255 255 / 0.28)",
              backgroundColor: "rgb(255 255 255 / 0.08)",
              backdropFilter: "blur(10px)",
            }}
          >
            <span className="flex items-center gap-0.5" style={{ color: "var(--color-flame-300)" }}>
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} size={13} weight="fill" />
              ))}
            </span>
            Rated by travellers across India &amp; Nepal
          </p>

          <h1 className="display mt-7 text-[clamp(2.6rem,8.4vw,5.4rem)] text-white">
            Travel. Chill.
            <br />
            <span className="script ink-gradient text-[1.12em]">Repeat.</span>
          </h1>

          <p className="mt-7 max-w-[56ch] text-[1.0625rem] leading-relaxed text-white/85 sm:text-[1.1875rem]">
            Fixed-departure group tours, Himalayan yatras, Sahyadri treks and bike
            rides across India and Nepal — stays, transport, meals and a tour
            captain, costed up front with nothing hidden.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/packages" className="btn btn-primary">
              Explore 52 packages
              <ArrowRight size={17} weight="bold" />
            </Link>
            <a
              href={whatsappLink("Hi 2XBT, I'd like help planning a trip.")}
              target="_blank"
              rel="noreferrer"
              className="btn btn-onimage"
            >
              <WhatsappLogo size={18} weight="fill" />
              Plan a private trip
            </a>
          </div>

        </div>

        {/* Proof points on the left, the reel's caption on the right — the
            two share a baseline so the photograph gets a credit line
            without another floating box over the artwork. */}
        <div className="mt-11 flex flex-col gap-9 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <ul className="flex flex-wrap items-center gap-x-7 gap-y-3">
            {BADGES.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-2 text-[0.875rem] text-white/80">
                <Icon size={17} weight="duotone" style={{ color: "var(--color-lagoon-300)" }} />
                {text}
              </li>
            ))}
          </ul>

          <HeroReelNav index={reel.index} onSelect={reel.select} />
        </div>

        {/* The quick-jump rail: five regions, straight into the filtered list. */}
        <div className="mt-14 hidden max-w-5xl lg:block">
          <div
            className="grid grid-cols-5 overflow-hidden rounded-2xl border"
            style={{
              borderColor: "rgb(255 255 255 / 0.2)",
              backgroundColor: "rgb(255 255 255 / 0.08)",
              backdropFilter: "blur(14px) saturate(1.5)",
            }}
          >
            {categories.map((c, i) => (
              <Link
                key={c.id}
                href={`/packages?category=${c.id}`}
                className="group px-5 py-4 transition-colors duration-250 hover:bg-white/10"
                style={{
                  borderLeft: i === 0 ? undefined : "1px solid rgb(255 255 255 / 0.16)",
                }}
              >
                <span className="flex items-center justify-between gap-2 font-display text-[0.9375rem] font-semibold text-white">
                  {c.label}
                  <ArrowRight
                    size={14}
                    weight="bold"
                    className="-translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                  />
                </span>
                <span className="mt-1.5 block text-[0.75rem] leading-snug text-white/65">
                  {c.blurb.split(",")[0]}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* The supplied Gulmarg photograph, framed as a floating plate against
          the hero so it reads as a postcard rather than a background. */}
      <div className="pointer-events-none absolute right-10 top-[20%] hidden xl:block 2xl:right-20">
        <figure
          className="w-[22rem] rotate-3 rounded-2xl p-3 shadow-2xl"
          style={{ backgroundColor: "rgb(255 255 255 / 0.95)", animation: "var(--animate-float)" }}
        >
          <Image
            src="/images/hero-gulmarg.webp"
            alt="Meadows and pine ridges above Gulmarg, Kashmir"
            width={909}
            height={511}
            sizes="22rem"
            className="h-44 w-full rounded-lg object-cover"
          />
          <figcaption className="flex items-center justify-between px-1 pt-2.5">
            <span className="font-display text-[0.8125rem] font-semibold text-[var(--color-navy-800)]">
              Gulmarg, Kashmir
            </span>
            <span className="text-[0.75rem] text-[var(--color-navy-500)]">8D / 7N · from ₹17,999</span>
          </figcaption>
        </figure>
      </div>

      <div className="absolute inset-x-0 bottom-0">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="block h-[60px] w-full sm:h-[90px]">
          <path d="M0 74c180-46 320 14 500 22s300-54 480-50 280 56 460 44v60H0z" fill="var(--cool)" opacity="0.2" />
          <path d="M0 96c200-54 340 8 520 16s320-56 500-50 260 54 420 40v38H0z" fill="var(--bg)" />
        </svg>
      </div>

      <span className="sr-only">{site.tagline}</span>
    </section>
  );
}
