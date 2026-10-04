import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, MoonStars, CalendarBlank } from "@phosphor-icons/react/dist/ssr";
import { inr, type Pkg } from "@/data/packages";

export function PackageCard({
  pkg,
  priority = false,
  size = "md",
}: {
  pkg: Pkg;
  priority?: boolean;
  size?: "md" | "lg";
}) {
  return (
    <article className="group h-full">
      <Link
        href={`/packages/${pkg.slug}`}
        className="flex h-full flex-col overflow-hidden rounded-2xl border transition-[border-color,box-shadow,transform] duration-200 ease-[var(--ease-out-strong)] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_-12px_rgb(var(--shadow-tint)/0.26)]"
        style={{ backgroundColor: "var(--bg-raised)", borderColor: "var(--rule)" }}
      >
        <div
          className={`relative overflow-hidden ${size === "lg" ? "aspect-[16/11]" : "aspect-[4/3]"}`}
          style={{ backgroundColor: "var(--bg-sunken)" }}
        >
          <Image
            src={pkg.image}
            alt={pkg.imageAlt}
            fill
            priority={priority}
            sizes={size === "lg" ? "(max-width: 768px) 100vw, 640px" : "(max-width: 768px) 100vw, 400px"}
            className="object-cover transition-transform duration-500 ease-[var(--ease-out-strong)] motion-safe:group-hover:scale-[1.04]"
          />
          <span
            className="absolute left-3 top-3 rounded-full px-3 py-1 text-[0.6875rem] font-semibold tracking-wide text-white backdrop-blur-sm"
            style={{ backgroundColor: "rgb(1 36 64 / 0.72)" }}
          >
            {pkg.theme}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-5">
          <h3
            className={`font-display font-semibold leading-snug ${size === "lg" ? "text-2xl" : "text-lg"}`}
          >
            {pkg.name}
          </h3>
          <p
            className="mt-2 flex-1 text-[0.9375rem] leading-relaxed"
            style={{ color: "var(--ink-soft)" }}
          >
            {size === "lg" ? pkg.blurb : pkg.headline}
          </p>

          <div
            className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[0.8125rem]"
            style={{ color: "var(--ink-faint)" }}
          >
            <span className="flex items-center gap-1.5">
              <MoonStars size={15} />
              {pkg.days} days, {pkg.nights} nights
            </span>
            {pkg.startDate ? (
              <span className="flex items-center gap-1.5">
                <CalendarBlank size={15} />
                {pkg.startDate}
              </span>
            ) : null}
          </div>

          <div
            className="mt-5 flex items-end justify-between border-t pt-4"
            style={{ borderColor: "var(--rule)" }}
          >
            <div>
              <div className="text-[0.75rem]" style={{ color: "var(--ink-faint)" }}>
                Triple sharing, per person
              </div>
              <div className="font-display text-xl font-semibold">{inr(pkg.price)}</div>
            </div>
            <span
              className="grid h-9 w-9 place-items-center rounded-full transition-[background-color,color] duration-200"
              style={{ backgroundColor: "var(--accent-soft)", color: "var(--accent)" }}
            >
              <ArrowUpRight size={17} weight="bold" />
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
