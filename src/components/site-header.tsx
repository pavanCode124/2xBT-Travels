"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  List,
  X,
  Phone,
  CaretDown,
  EnvelopeSimple,
  InstagramLogo,
  FacebookLogo,
  WhatsappLogo,
  ArrowRight,
} from "@phosphor-icons/react";
import { nav, site } from "@/data/site";
import { categories, packages } from "@/data/packages";
import { ThemeToggle } from "@/components/theme-toggle";

const CATEGORY_ART: Record<string, string> = {
  yatra: "/images/tours/kedarnath-yatra-ex-haridwar.webp",
  himalaya: "/images/tours/ladakh-explorer-6d5n.webp",
  kerala: "/images/tours/munnar-thekkady-allepy-5d4n.webp",
  islands: "/images/tours/andaman-islands-6-day-tour.webp",
  trek: "/images/tours/raigad-fort.webp",
};

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState(false);
  const [lifted, setLifted] = useState(false);
  const megaWrap = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const onScroll = () => setLifted(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setMega(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // The mega-menu opens on hover but must also close on an outside click
  // and on Escape, so keyboard and touch users are not trapped in it.
  useEffect(() => {
    if (!mega) return;
    const onDown = (e: MouseEvent) => {
      if (!megaWrap.current?.contains(e.target as Node)) setMega(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMega(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [mega]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const countOf = (id: string) => packages.filter((p) => p.category === id).length;

  return (
    <>
      {/* Contact strip. Hidden on small screens, where the floating
          buttons already cover calling and WhatsApp. */}
      <div
        className="hidden lg:block"
        style={{ backgroundColor: "var(--color-navy-900)", color: "var(--ink-onDeep-soft)" }}
      >
        <div className="shell flex h-10 items-center justify-between text-[0.8125rem]">
          <p className="flex items-center gap-2">
            <span
              className="inline-block h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: "var(--color-flame-400)" }}
            />
            Group tours · Yatras · Treks · Bike rides — departures from Mumbai, Delhi &amp; Haridwar
          </p>
          <div className="flex items-center gap-5">
            <a href={site.phoneHref} className="flex items-center gap-1.5 hover:text-white">
              <Phone size={14} weight="fill" />
              {site.phone}
            </a>
            <a href={site.emailHref} className="flex items-center gap-1.5 hover:text-white">
              <EnvelopeSimple size={14} weight="fill" />
              {site.email}
            </a>
            <span className="flex items-center gap-3">
              <a
                href={site.socials.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="2XBT on Instagram"
                className="hover:text-white"
              >
                <InstagramLogo size={16} weight="fill" />
              </a>
              <a
                href={site.socials.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="2XBT on Facebook"
                className="hover:text-white"
              >
                <FacebookLogo size={16} weight="fill" />
              </a>
              <a
                href={site.socials.whatsapp}
                target="_blank"
                rel="noreferrer"
                aria-label="2XBT on WhatsApp"
                className="hover:text-white"
              >
                <WhatsappLogo size={16} weight="fill" />
              </a>
            </span>
          </div>
        </div>
      </div>

      <header
        className="sticky top-0 z-50 transition-[background-color,box-shadow,border-color] duration-300"
        style={{
          backgroundColor: lifted
            ? "color-mix(in oklab, var(--bg) 86%, transparent)"
            : "var(--bg)",
          backdropFilter: lifted ? "blur(16px) saturate(1.6)" : undefined,
          borderBottom: `1px solid ${lifted ? "var(--rule)" : "transparent"}`,
          boxShadow: lifted ? "var(--shadow-sm)" : "none",
        }}
      >
        <div className="shell flex h-[4.5rem] items-center justify-between gap-6 lg:h-20">
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2.5"
            aria-label={`${site.name} home`}
          >
            <Image
              src="/images/logo-mark.png"
              alt=""
              width={671}
              height={575}
              priority
              className="brand-plate h-12 w-auto sm:h-14"
            />
            <span className="sr-only">{site.legalName}</span>
          </Link>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-0.5">
              {nav.map((item) => {
                const active = isActive(item.href);

                if (item.href !== "/packages") {
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        aria-current={active ? "page" : undefined}
                        className="relative block rounded-full px-3.5 py-2 text-[0.9375rem] font-medium transition-colors duration-200"
                        style={{ color: active ? "var(--ink)" : "var(--ink-soft)" }}
                      >
                        {item.label}
                        <span
                          className="absolute inset-x-3.5 bottom-0 h-[2px] rounded-full transition-transform duration-300 origin-left"
                          style={{
                            backgroundImage:
                              "linear-gradient(90deg, var(--accent), var(--cool))",
                            transform: active ? "scaleX(1)" : "scaleX(0)",
                          }}
                        />
                      </Link>
                    </li>
                  );
                }

                return (
                  <li
                    key={item.href}
                    ref={megaWrap}
                    className="relative"
                    onMouseEnter={() => setMega(true)}
                    onMouseLeave={() => setMega(false)}
                  >
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      aria-expanded={mega}
                      onClick={() => setMega(false)}
                      onFocus={() => setMega(true)}
                      className="relative flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[0.9375rem] font-medium transition-colors duration-200"
                      style={{ color: active || mega ? "var(--ink)" : "var(--ink-soft)" }}
                    >
                      {item.label}
                      <CaretDown
                        size={13}
                        weight="bold"
                        className="transition-transform duration-300"
                        style={{ transform: mega ? "rotate(180deg)" : undefined }}
                      />
                      <span
                        className="absolute inset-x-3.5 bottom-0 h-[2px] rounded-full transition-transform duration-300 origin-left"
                        style={{
                          backgroundImage:
                            "linear-gradient(90deg, var(--accent), var(--cool))",
                          transform: active ? "scaleX(1)" : "scaleX(0)",
                        }}
                      />
                    </Link>

                    <div
                      className="absolute left-1/2 top-full w-[46rem] -translate-x-1/2 pt-3"
                      style={{
                        opacity: mega ? 1 : 0,
                        transform: `translate(-50%, ${mega ? "0" : "-8px"})`,
                        pointerEvents: mega ? "auto" : "none",
                        transition:
                          "opacity 240ms var(--ease-out-strong), transform 240ms var(--ease-out-strong)",
                      }}
                    >
                      <div
                        className="surface overflow-hidden p-2"
                        style={{ boxShadow: "var(--shadow-lg)" }}
                      >
                        <ul className="grid grid-cols-2 gap-1">
                          {categories.map((c) => (
                            <li key={c.id}>
                              <Link
                                href={`/packages?category=${c.id}`}
                                className="group flex items-start gap-3 rounded-2xl p-3 transition-colors duration-200 hover:bg-[var(--bg-sunken)]"
                              >
                                <span className="relative h-14 w-16 shrink-0 overflow-hidden rounded-xl">
                                  <Image
                                    src={CATEGORY_ART[c.id]}
                                    alt=""
                                    fill
                                    sizes="64px"
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                  />
                                </span>
                                <span className="min-w-0">
                                  <span className="flex items-center gap-2 font-display text-[0.9375rem] font-semibold">
                                    {c.label}
                                    <span
                                      className="rounded-full px-1.5 py-0.5 text-[0.625rem] font-bold"
                                      style={{
                                        backgroundColor: "var(--accent-soft)",
                                        color: "var(--accent)",
                                      }}
                                    >
                                      {countOf(c.id)}
                                    </span>
                                  </span>
                                  <span
                                    className="mt-1 block text-[0.8125rem] leading-snug"
                                    style={{ color: "var(--ink-faint)" }}
                                  >
                                    {c.blurb}
                                  </span>
                                </span>
                              </Link>
                            </li>
                          ))}
                          <li>
                            <Link
                              href="/packages"
                              className="flex h-full items-center justify-between gap-3 rounded-2xl p-4 transition-colors duration-200"
                              style={{
                                backgroundColor: "var(--color-navy-900)",
                                color: "var(--ink-onDeep)",
                              }}
                            >
                              <span>
                                <span className="block font-display text-[0.9375rem] font-semibold">
                                  All {packages.length} packages
                                </span>
                                <span
                                  className="mt-1 block text-[0.8125rem]"
                                  style={{ color: "var(--ink-onDeep-soft)" }}
                                >
                                  Filter by region, length and budget
                                </span>
                              </span>
                              <ArrowRight size={18} weight="bold" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="hidden items-center gap-2.5 lg:flex">
            <ThemeToggle />
            <Link href="/contact" className="btn btn-primary btn-sm">
              Plan my trip
              <ArrowRight size={15} weight="bold" />
            </Link>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              className="grid h-10 w-10 place-items-center rounded-full border"
              style={{ borderColor: "var(--rule-strong)", color: "var(--ink)" }}
            >
              {open ? <X size={19} weight="bold" /> : <List size={19} weight="bold" />}
            </button>
          </div>
        </div>

        {open ? (
          <div
            id="mobile-nav"
            className="overflow-y-auto lg:hidden"
            style={{
              backgroundColor: "var(--bg)",
              borderTop: "1px solid var(--rule)",
              height: "calc(100dvh - 4.5rem)",
            }}
          >
            <div className="shell flex min-h-full flex-col justify-between gap-8 py-8">
              <div>
                <ul className="grid">
                  {nav.map((item, i) => (
                    <li
                      key={item.href}
                      style={{
                        opacity: 0,
                        animation: `revealUp 420ms var(--ease-out-strong) ${i * 45}ms forwards`,
                      }}
                    >
                      <Link
                        href={item.href}
                        className="flex items-center justify-between border-b py-4 font-display text-[1.6rem] font-semibold"
                        style={{
                          color: isActive(item.href) ? "var(--accent)" : "var(--ink)",
                          borderColor: "var(--rule)",
                        }}
                      >
                        {item.label}
                        <ArrowRight size={18} weight="bold" style={{ opacity: 0.4 }} />
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-wrap gap-2">
                  {categories.map((c) => (
                    <Link key={c.id} href={`/packages?category=${c.id}`} className="chip">
                      {c.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="grid gap-3">
                <a href={site.phoneHref} className="btn btn-ghost w-full">
                  <Phone size={17} weight="fill" />
                  {site.phone}
                </a>
                <Link href="/contact" className="btn btn-primary w-full">
                  Plan my trip
                  <ArrowRight size={16} weight="bold" />
                </Link>
              </div>
            </div>
          </div>
        ) : null}
      </header>

      <style>{`
        @keyframes revealUp {
          from { opacity: 0; transform: translate3d(0, 14px, 0); }
          to   { opacity: 1; transform: none; }
        }
        @media (prefers-reduced-motion: reduce) {
          @keyframes revealUp { from { opacity: 1; } to { opacity: 1; } }
        }
      `}</style>
    </>
  );
}
