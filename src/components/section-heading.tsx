import { Reveal } from "@/components/reveal";
import { WaveRule } from "@/components/wave";

/**
 * The one heading block used by every section: eyebrow, headline with an
 * optional serif-italic accent word, wave rule, and supporting line.
 */
export function SectionHeading({
  eyebrow,
  title,
  accent,
  tail,
  blurb,
  align = "center",
  onDeep = false,
  action,
}: {
  eyebrow?: string;
  title: string;
  accent?: string;
  tail?: string;
  blurb?: string;
  align?: "center" | "left";
  onDeep?: boolean;
  action?: React.ReactNode;
}) {
  const centred = align === "center";

  return (
    <div
      className={
        centred
          ? "mx-auto flex max-w-2xl flex-col items-center text-center"
          : "flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
      }
    >
      <div className={centred ? "contents" : "max-w-2xl"}>
        {eyebrow ? (
          <Reveal>
            <p
              className="eyebrow"
              style={{ color: onDeep ? "var(--color-flame-300)" : "var(--accent)" }}
            >
              {eyebrow}
            </p>
          </Reveal>
        ) : null}

        <Reveal delay={60}>
          <h2
            className="display mt-3 text-[2rem] sm:text-[2.6rem] lg:text-[3.1rem]"
            style={{ color: onDeep ? "var(--ink-onDeep)" : "var(--ink)" }}
          >
            {title}
            {accent ? (
              <>
                {" "}
                <span
                  className="script text-[1.15em]"
                  style={{ color: onDeep ? "var(--color-flame-300)" : "var(--accent)" }}
                >
                  {accent}
                </span>
              </>
            ) : null}
            {tail ? <> {tail}</> : null}
          </h2>
        </Reveal>

        <Reveal delay={110}>
          <WaveRule className={centred ? "mx-auto mt-5" : "mt-5"} />
        </Reveal>

        {blurb ? (
          <Reveal delay={150}>
            <p
              className={`mt-5 text-[1.0625rem] leading-relaxed ${centred ? "" : "max-w-xl"}`}
              style={{ color: onDeep ? "var(--ink-onDeep-soft)" : "var(--ink-soft)" }}
            >
              {blurb}
            </p>
          </Reveal>
        ) : null}
      </div>

      {action && !centred ? (
        <Reveal delay={200} className="shrink-0">
          {action}
        </Reveal>
      ) : null}
      {action && centred ? (
        <Reveal delay={200} className="mt-8">
          {action}
        </Reveal>
      ) : null}
    </div>
  );
}
