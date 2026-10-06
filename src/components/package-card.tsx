import Link from "next/link";
import Image from "next/image";
import { CalendarBlank, MapPin, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { durationOf, inr, type Package } from "@/data/packages";

const CATEGORY_LABEL: Record<string, string> = {
  yatra: "Yatra",
  himalaya: "Himalaya",
  kerala: "South",
  islands: "Islands",
  trek: "Trek",
};

export function PackageCard({
  pkg,
  priority = false,
  sizes = "(min-width: 1280px) 25rem, (min-width: 768px) 45vw, 92vw",
}: {
  pkg: Package;
  priority?: boolean;
  sizes?: string;
}) {
  const saving =
    pkg.originalPrice && pkg.originalPrice > pkg.price
      ? Math.round(((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100)
      : 0;

  return (
    <article className="surface surface-lift group flex h-full flex-col overflow-hidden">
      <Link href={`/packages/${pkg.slug}`} className="relative block aspect-[16/11] overflow-hidden">
        <Image
          src={pkg.image}
          alt={pkg.name}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover transition-transform duration-[900ms] ease-[var(--ease-out-strong)] group-hover:scale-[1.08]"
        />
        <span
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to top, rgb(7 31 56 / 0.78) 0%, rgb(7 31 56 / 0.1) 42%, transparent 70%)",
          }}
        />

        <span className="absolute left-3.5 top-3.5 flex gap-1.5">
          <span
            className="badge"
            style={{ backgroundColor: "rgb(255 255 255 / 0.92)", color: "var(--color-navy-800)" }}
          >
            {CATEGORY_LABEL[pkg.category]}
          </span>
          {saving >= 15 ? (
            <span className="badge" style={{ backgroundColor: "var(--accent)", color: "#fff" }}>
              Save {saving}%
            </span>
          ) : null}
        </span>

        <span className="absolute inset-x-3.5 bottom-3.5 flex items-end justify-between gap-3">
          <span className="flex items-center gap-1.5 text-[0.8125rem] font-medium text-white/90">
            <CalendarBlank size={14} weight="fill" />
            {durationOf(pkg)}
          </span>
          <span className="grid h-9 w-9 translate-y-2 place-items-center rounded-full bg-white text-[var(--color-navy-800)] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <ArrowUpRight size={17} weight="bold" />
          </span>
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-[1.0625rem] font-semibold leading-snug">
          <Link
            href={`/packages/${pkg.slug}`}
            className="transition-colors duration-200 hover:text-[var(--accent)]"
          >
            {pkg.name}
          </Link>
        </h3>

        {pkg.travellers ? (
          <p
            className="mt-2 flex items-start gap-1.5 text-[0.8125rem] leading-snug"
            style={{ color: "var(--ink-faint)" }}
          >
            <MapPin size={14} weight="fill" className="mt-0.5 shrink-0" />
            {pkg.travellers}
          </p>
        ) : null}

        <div
          className="mt-auto flex items-end justify-between gap-3 border-t pt-4"
          style={{ borderColor: "var(--rule)" }}
        >
          <p>
            <span className="block text-[0.6875rem] uppercase tracking-wider" style={{ color: "var(--ink-faint)" }}>
              Starts from
            </span>
            <span className="flex items-baseline gap-2">
              <span className="font-display text-[1.375rem] font-bold" style={{ color: "var(--accent)" }}>
                {inr(pkg.price)}
              </span>
              {pkg.originalPrice && pkg.originalPrice > pkg.price ? (
                <span className="text-[0.8125rem] line-through" style={{ color: "var(--ink-faint)" }}>
                  {inr(pkg.originalPrice)}
                </span>
              ) : null}
            </span>
          </p>
          <Link href={`/packages/${pkg.slug}`} className="btn btn-ghost btn-sm">
            Details
          </Link>
        </div>
      </div>
    </article>
  );
}
