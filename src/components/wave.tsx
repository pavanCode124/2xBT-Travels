/**
 * The twin wave under the 2XBT wordmark, reused as a section divider.
 * `flip` points the crest downward so a band can be closed as well as opened.
 */
export function WaveDivider({
  fill = "var(--bg)",
  flip = false,
  className = "",
  accent = true,
}: {
  fill?: string;
  flip?: boolean;
  className?: string;
  accent?: boolean;
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none w-full leading-[0] ${className}`}
      style={{ transform: flip ? "scaleY(-1)" : undefined }}
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="block h-[52px] w-full sm:h-[80px] lg:h-[110px]"
      >
        {accent ? (
          <path
            d="M0 74c180-46 320 14 500 22s300-54 480-50 280 56 460 44v60H0z"
            fill="var(--cool)"
            opacity="0.18"
          />
        ) : null}
        <path
          d="M0 96c200-54 340 8 520 16s320-56 500-50 260 54 420 40v38H0z"
          fill={fill}
        />
      </svg>
    </div>
  );
}

/** The brand's double-stroke swoosh, used as a small underline flourish. */
export function WaveRule({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 120 20"
      className={`h-[14px] w-[86px] ${className}`}
      fill="none"
    >
      <path
        d="M2 13c18-12 36 6 54-2s42 8 62-4"
        stroke="var(--accent)"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M10 19c16-9 32 4 48-3s38 6 56-5"
        stroke="var(--cool)"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.8"
      />
    </svg>
  );
}
