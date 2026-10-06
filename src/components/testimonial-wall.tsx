import Image from "next/image";
import { Quotes, GoogleLogo, Star, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/reveal";
import { testimonials } from "@/data/testimonials";
import { site } from "@/data/site";

export function TestimonialWall() {
  if (testimonials.length === 0) {
    return (
      <Reveal>
        <div className="surface mx-auto flex max-w-3xl flex-col items-center gap-6 p-10 text-center md:flex-row md:text-left">
          <span
            className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl"
            style={{ backgroundColor: "var(--accent-soft)", color: "var(--accent)" }}
          >
            <GoogleLogo size={30} weight="bold" />
          </span>
          <div className="flex-1">
            <p className="font-display text-xl font-semibold">Read what travellers say</p>
            <p className="mt-2 text-[0.9375rem] leading-relaxed" style={{ color: "var(--ink-soft)" }}>
              Reviews from recent 2XBT departures live on our Google profile, written by
              the people who were actually on the bus.
            </p>
          </div>
          <a
            href={site.socials.google}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary shrink-0"
          >
            Open reviews
            <ArrowUpRight size={16} weight="bold" />
          </a>
        </div>
      </Reveal>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {testimonials.map((t, i) => (
        <Reveal key={t.name + t.trip} delay={i * 90} as="article" className="h-full">
          <figure className="surface surface-lift flex h-full flex-col p-7">
            <Quotes size={30} weight="fill" style={{ color: "var(--accent)", opacity: 0.35 }} />
            <blockquote
              className="mt-4 flex-1 text-[1.0625rem] leading-relaxed"
              style={{ color: "var(--ink-soft)" }}
            >
              {t.quote}
            </blockquote>
            <figcaption
              className="mt-6 flex items-center gap-3 border-t pt-5"
              style={{ borderColor: "var(--rule)" }}
            >
              {t.photo ? (
                <Image
                  src={t.photo}
                  alt=""
                  width={44}
                  height={44}
                  className="h-11 w-11 rounded-full object-cover"
                />
              ) : (
                <span
                  className="grid h-11 w-11 place-items-center rounded-full font-display font-bold"
                  style={{ backgroundColor: "var(--accent-soft)", color: "var(--accent)" }}
                >
                  {t.name.charAt(0)}
                </span>
              )}
              <span>
                <span className="block font-display text-[0.9375rem] font-semibold">{t.name}</span>
                <span className="block text-[0.8125rem]" style={{ color: "var(--ink-faint)" }}>
                  {t.trip}
                </span>
              </span>
              <span className="ml-auto flex gap-0.5" style={{ color: "var(--accent)" }}>
                {[0, 1, 2, 3, 4].map((s) => (
                  <Star key={s} size={13} weight="fill" />
                ))}
              </span>
            </figcaption>
          </figure>
        </Reveal>
      ))}
    </div>
  );
}
