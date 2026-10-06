import { WaveRule } from "@/components/wave";

const PLACES = [
  "Kedarnath",
  "Char Dham",
  "Ladakh",
  "Kashmir",
  "Nepal",
  "Annapurna Base Camp",
  "Munnar",
  "Alleppey",
  "Andaman",
  "Hampi",
  "Ujjain",
  "Jagannath Puri",
  "Rameshwaram",
  "Kanyakumari",
  "Shimla",
  "Raigad",
  "Konkan",
  "Vaishno Devi",
];

/**
 * Continuous destination ribbon. The list is rendered twice and the track
 * translated by -50%, so the loop has no visible seam.
 */
export function DestinationMarquee() {
  return (
    <div
      className="marquee-mask overflow-hidden border-y py-4"
      style={{ backgroundColor: "var(--bg-sunken)", borderColor: "var(--rule)" }}
    >
      <div className="marquee-track flex w-max items-center gap-10">
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            aria-hidden={copy === 1}
            className="flex items-center gap-10"
          >
            {PLACES.map((place) => (
              <li key={place} className="flex shrink-0 items-center gap-10">
                <span
                  className="font-display text-[0.9375rem] font-semibold uppercase tracking-[0.14em] whitespace-nowrap"
                  style={{ color: "var(--ink-faint)" }}
                >
                  {place}
                </span>
                <WaveRule className="h-[10px] w-[42px] opacity-60" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
