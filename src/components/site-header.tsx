"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { List, X, Phone } from "@phosphor-icons/react";
import { nav, site } from "@/data/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [lifted, setLifted] = useState(false);

  useEffect(() => {
    const onScroll = () => setLifted(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className="sticky top-0 z-50 transition-[background-color,border-color,box-shadow] duration-200"
      style={{
        backgroundColor: lifted
          ? "color-mix(in oklab, var(--bg) 88%, transparent)"
          : "transparent",
        backdropFilter: lifted ? "blur(12px)" : "none",
        borderBottom: `1px solid ${lifted ? "var(--rule)" : "transparent"}`,
      }}
    >
      <div className="shell flex h-20 items-center justify-between gap-6">
        <Link href="/" className="flex shrink-0 items-center gap-2.5" aria-label={`${site.name} home`}>
          <Image
            src="/images/logo-mark.png"
            alt=""
            width={671}
            height={575}
            priority
            className="brand-plate h-14 w-auto sm:h-16"
          />
          <span className="sr-only">{site.legalName}</span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className="relative rounded-full px-3.5 py-2 text-[0.9375rem] font-medium transition-colors duration-150"
                  style={{
                    color: isActive(item.href) ? "var(--ink)" : "var(--ink-soft)",
                  }}
                >
                  {item.label}
                  {isActive(item.href) ? (
                    <span
                      className="absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded-full"
                      style={{ backgroundColor: "var(--accent)" }}
                    />
                  ) : null}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={site.phoneHref}
            className="flex items-center gap-2 text-[0.9375rem] font-medium"
            style={{ color: "var(--ink-soft)" }}
          >
            <Phone size={17} weight="fill" />
            {site.phone}
          </a>
          <Link href="/contact" className="btn btn-primary">
            Plan my trip
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="btn btn-ghost !px-3 !py-2.5 lg:hidden"
        >
          {open ? <X size={20} /> : <List size={20} />}
        </button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="lg:hidden"
          style={{
            backgroundColor: "var(--bg)",
            borderTop: "1px solid var(--rule)",
            height: "calc(100dvh - 80px)",
          }}
        >
          <div className="shell flex h-full flex-col justify-between py-8">
            <ul className="grid gap-1">
              {nav.map((item, i) => (
                <li
                  key={item.href}
                  className="reveal-in"
                  style={{ transitionDelay: `${i * 35}ms` }}
                >
                  <Link
                    href={item.href}
                    className="block py-3 font-display text-2xl font-medium"
                    style={{
                      color: isActive(item.href) ? "var(--accent)" : "var(--ink)",
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="grid gap-3">
              <a href={site.phoneHref} className="btn btn-ghost w-full">
                <Phone size={17} weight="fill" />
                {site.phone}
              </a>
              <Link href="/contact" className="btn btn-primary w-full">
                Plan my trip
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
