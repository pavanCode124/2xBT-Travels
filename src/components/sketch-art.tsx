/**
 * Pencil art: hand-drawn travel line art used as section decoration.
 *
 * Everything here is a server component, aria-hidden and
 * pointer-events-none — it is wallpaper, never content. Strokes use
 * `currentColor` so a wrapper's text colour sets the graphite, and
 * every piece is passed through the shared roughen filter from
 * <SketchDefs />, which gives a vector stroke the wobble of a pencil.
 *
 * Motion lives in globals.css ("Pencil art and travel motion") and all
 * of it stills under prefers-reduced-motion.
 */

const ROUGH = "url(#sketch-rough)";

/** Shared stroke setup — round caps, no fill, graphite weight. */
const pencil = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/**
 * The one copy of the roughen filter, mounted once per document in the
 * root layout. Filters resolve by id across the page, so each sketch
 * below just references it.
 */
export function SketchDefs() {
  return (
    <svg
      aria-hidden
      focusable="false"
      width="0"
      height="0"
      style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}
    >
      <defs>
        <filter id="sketch-rough" x="-12%" y="-12%" width="124%" height="124%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.028"
            numOctaves="3"
            seed="7"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="2.4"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>
    </svg>
  );
}

type ArtProps = { className?: string; style?: React.CSSProperties };

/* ================================================================
   The aeroplane
================================================================ */

/* Top-down airliner, nose on +x, drawn around the origin so it can be
   dropped straight onto an offset-path. */
const PLANE_BODY =
  "M22 0 8-2.5 2-2.5-8-13-12-13-6-2.5-16-2.5-18-7-21-7-20-2.5-22 0-20 2.5-21 7-18 7-16 2.5-6 2.5-12 13-8 13 2 2.5 8 2.5Z";

export function PlaneGlyph({ className = "", style }: ArtProps) {
  return (
    <svg
      aria-hidden
      focusable="false"
      viewBox="-24 -16 48 32"
      className={className}
      style={style}
    >
      <path d={PLANE_BODY} fill="currentColor" filter={ROUGH} />
    </svg>
  );
}

/**
 * A route arc with the dashes drawing themselves and an aeroplane
 * flying along the identical path, so the nose always points down-route.
 *
 * `flip` mirrors the climb into a descent for right-to-left bands.
 */
export function FlightPath({
  className = "",
  style,
  duration = 17,
  flip = false,
  dots = true,
}: ArtProps & { duration?: number; flip?: boolean; dots?: boolean }) {
  const d = "M10 152C140 152 268 126 380 90 482 58 570 36 670 20";

  return (
    <svg
      aria-hidden
      focusable="false"
      viewBox="0 0 680 172"
      className={className}
      style={{ ...style, transform: flip ? "scaleX(-1)" : undefined }}
      fill="none"
    >
      {/* A broad ghost of the route under the dashes, so the line still
          reads when the dashes are mid-gap. */}
      <path d={d} {...pencil} strokeWidth="9" opacity="0.1" />
      <path
        d={d}
        {...pencil}
        strokeWidth="2.2"
        opacity="0.7"
        className="trail-draw"
        filter={ROUGH}
      />
      {dots ? (
        <>
          <circle cx="10" cy="152" r="4.5" fill="currentColor" opacity="0.45" />
          <circle cx="670" cy="20" r="4.5" fill="currentColor" opacity="0.45" />
          <circle cx="670" cy="20" r="10" {...pencil} strokeWidth="1.6" opacity="0.3" />
        </>
      ) : null}

      <g
        className="plane-fly"
        style={
          {
            offsetPath: `path("${d}")`,
            "--plane-duration": `${duration}s`,
          } as React.CSSProperties
        }
      >
        <path d={PLANE_BODY} fill="currentColor" filter={ROUGH} />
      </g>
    </svg>
  );
}

/* ================================================================
   Landscape
================================================================ */

/** Two ridge lines with snow zigzags and slope hatching. */
export function SketchRange({ className = "", style }: ArtProps) {
  return (
    <svg
      aria-hidden
      focusable="false"
      viewBox="0 0 1200 220"
      preserveAspectRatio="none"
      className={className}
      style={style}
      fill="none"
    >
      <g filter={ROUGH}>
        {/* Far range */}
        <path
          d="M-20 202 120 112 192 154 300 68 374 120 470 50 562 128 660 86 742 148 850 66 932 130 1032 84 1122 150 1220 118"
          {...pencil}
          strokeWidth="2"
          opacity="0.42"
        />
        {/* Snow caps on the three high peaks */}
        <g {...pencil} strokeWidth="1.6" opacity="0.5">
          <path d="M276 90 290 78 300 86 312 74 322 84" />
          <path d="M446 72 460 58 470 66 482 54 492 64" />
          <path d="M826 88 840 74 850 82 862 70 872 80" />
        </g>
        {/* Near range, heavier, with hatched shadow faces */}
        <path
          d="M-20 214 80 168 152 192 252 128 332 176 422 124 512 184 602 138 692 190 792 142 882 196 982 150 1082 198 1220 166"
          {...pencil}
          strokeWidth="2.6"
          opacity="0.6"
        />
        <g {...pencil} strokeWidth="1.3" opacity="0.3">
          <path d="M258 140 240 168M272 142 252 176M286 148 266 182" />
          <path d="M428 136 410 166M442 140 420 174M456 146 434 180" />
          <path d="M798 154 780 182M812 158 792 188M826 164 806 194" />
          <path d="M988 162 970 190M1002 166 982 196" />
        </g>
      </g>
    </svg>
  );
}

/** An outlined cloud. Pair with `cloud-drift` for a slow traverse. */
export function SketchCloud({ className = "", style }: ArtProps) {
  return (
    <svg
      aria-hidden
      focusable="false"
      viewBox="0 0 140 70"
      className={className}
      style={style}
      fill="none"
    >
      <g filter={ROUGH}>
        <path
          d="M26 62A15 15 0 0 1 28 32 22 22 0 0 1 70 22 18 18 0 0 1 104 28 17 17 0 0 1 118 62Z"
          {...pencil}
          strokeWidth="2.2"
        />
        <path d="M40 62A10 10 0 0 1 46 46" {...pencil} strokeWidth="1.5" opacity="0.5" />
        <path d="M78 62A12 12 0 0 1 86 44" {...pencil} strokeWidth="1.5" opacity="0.5" />
      </g>
    </svg>
  );
}

/** Three birds in formation. */
export function SketchBirds({ className = "", style }: ArtProps) {
  return (
    <svg
      aria-hidden
      focusable="false"
      viewBox="0 0 120 56"
      className={className}
      style={style}
      fill="none"
    >
      <g {...pencil} strokeWidth="2" filter={ROUGH}>
        <path className="flap" d="M8 26C14 18 18 18 24 26 30 18 34 18 40 26" />
        <path
          className="flap"
          style={{ animationDelay: "0.5s" }}
          d="M50 12C55 6 58 6 63 12 68 6 71 6 76 12"
          opacity="0.8"
        />
        <path
          className="flap"
          style={{ animationDelay: "1.1s" }}
          d="M78 40C83 34 86 34 91 40 96 34 99 34 104 40"
          opacity="0.65"
        />
      </g>
    </svg>
  );
}

/** Coconut palm — the Kerala and Andaman marker. Sways from the base. */
export function SketchPalm({ className = "", style }: ArtProps) {
  return (
    <svg
      aria-hidden
      focusable="false"
      viewBox="0 0 120 220"
      className={className}
      style={style}
      fill="none"
    >
      <g filter={ROUGH}>
        {/* Trunk, with the ring notches a coconut palm carries */}
        <path d="M54 220C50 176 48 136 60 92" {...pencil} strokeWidth="3" />
        <path d="M64 220C60 176 58 136 68 92" {...pencil} strokeWidth="2.4" opacity="0.7" />
        <g {...pencil} strokeWidth="1.2" opacity="0.45">
          <path d="M51 196 65 194M51 170 64 168M52 144 66 142M55 118 68 116" />
        </g>
        {/* Fronds, each a spine with leaflet ticks */}
        <g {...pencil} strokeWidth="2.2">
          <path d="M62 90C40 76 22 74 6 82" />
          <path d="M62 90C44 66 26 56 10 54" opacity="0.9" />
          <path d="M62 90C62 62 70 38 80 22" opacity="0.85" />
          <path d="M62 90C84 70 102 62 118 62" opacity="0.9" />
          <path d="M62 90C86 86 104 92 116 104" opacity="0.8" />
        </g>
        <g {...pencil} strokeWidth="1.1" opacity="0.5">
          <path d="M44 82 38 70M30 78 26 66M18 80 14 68" />
          <path d="M48 74 44 62M36 64 34 52M24 58 22 46" />
          <path d="M64 70 74 62M68 52 78 46M74 36 84 32" />
          <path d="M78 80 76 66M92 72 92 58M106 66 108 52" />
          <path d="M80 86 82 74M96 88 100 76M110 96 114 86" />
        </g>
        {/* Coconuts at the crown */}
        <circle cx="54" cy="96" r="5" {...pencil} strokeWidth="1.6" opacity="0.7" />
        <circle cx="68" cy="99" r="4.5" {...pencil} strokeWidth="1.6" opacity="0.7" />
      </g>
    </svg>
  );
}

/* ================================================================
   Objects
================================================================ */

/** Mariner's compass. The rose turns; the card stays put. */
export function SketchCompass({ className = "", style }: ArtProps) {
  return (
    <svg
      aria-hidden
      focusable="false"
      viewBox="0 0 120 120"
      className={className}
      style={style}
      fill="none"
    >
      <g filter={ROUGH}>
        <circle cx="60" cy="60" r="52" {...pencil} strokeWidth="2.2" />
        <circle cx="60" cy="60" r="43" {...pencil} strokeWidth="1.2" opacity="0.5" />
        {/* Bearing ticks every 30°, the cardinals heavier */}
        <g {...pencil} opacity="0.6">
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
            <path
              key={deg}
              d="M60 17 60 25"
              transform={`rotate(${deg} 60 60)`}
              strokeWidth={deg % 90 === 0 ? 2.4 : 1.4}
            />
          ))}
        </g>
        {/* The needle: one filled half, one hollow */}
        <g className="spin-slow">
          <path d="M60 22 70 60 60 56 50 60Z" fill="currentColor" opacity="0.75" />
          <path d="M60 98 50 60 60 64 70 60Z" {...pencil} strokeWidth="1.8" opacity="0.6" />
        </g>
        <circle cx="60" cy="60" r="4" fill="currentColor" opacity="0.7" />
      </g>
    </svg>
  );
}

/** Strapped suitcase with a travel sticker. */
export function SketchSuitcase({ className = "", style }: ArtProps) {
  return (
    <svg
      aria-hidden
      focusable="false"
      viewBox="0 0 130 104"
      className={className}
      style={style}
      fill="none"
    >
      <g filter={ROUGH}>
        <rect x="12" y="26" width="106" height="66" rx="10" {...pencil} strokeWidth="2.4" />
        <path d="M48 26V18a8 8 0 0 1 8-8h18a8 8 0 0 1 8 8v8" {...pencil} strokeWidth="2.4" />
        <g {...pencil} strokeWidth="2" opacity="0.6">
          <path d="M40 26v66M90 26v66" />
        </g>
        <g {...pencil} strokeWidth="1.4" opacity="0.45">
          <path d="M12 44h106M12 76h106" />
        </g>
        <circle cx="65" cy="59" r="12" {...pencil} strokeWidth="1.6" opacity="0.55" />
        <path d="M58 59 65 52 72 59 65 66Z" {...pencil} strokeWidth="1.3" opacity="0.45" />
        <g {...pencil} strokeWidth="2.2" opacity="0.7">
          <path d="M30 92v8M100 92v8" />
        </g>
      </g>
    </svg>
  );
}

/** Rangefinder camera. */
export function SketchCamera({ className = "", style }: ArtProps) {
  return (
    <svg
      aria-hidden
      focusable="false"
      viewBox="0 0 140 100"
      className={className}
      style={style}
      fill="none"
    >
      <g filter={ROUGH}>
        <path
          d="M14 30h20l8-12h30l8 12h46a8 8 0 0 1 8 8v44a8 8 0 0 1-8 8H14a8 8 0 0 1-8-8V38a8 8 0 0 1 8-8Z"
          {...pencil}
          strokeWidth="2.4"
        />
        <circle cx="70" cy="60" r="22" {...pencil} strokeWidth="2.2" />
        <circle cx="70" cy="60" r="13" {...pencil} strokeWidth="1.6" opacity="0.6" />
        <circle cx="70" cy="60" r="5" {...pencil} strokeWidth="1.3" opacity="0.45" />
        <circle cx="113" cy="42" r="4" fill="currentColor" opacity="0.6" />
        <rect x="18" y="40" width="18" height="10" rx="3" {...pencil} strokeWidth="1.5" opacity="0.55" />
        {/* The flash, three short rays */}
        <g {...pencil} strokeWidth="1.5" opacity="0.5">
          <path d="M120 30 126 22M110 26 112 17M128 38 137 34" />
        </g>
      </g>
    </svg>
  );
}

/** Hot-air balloon. Pair with `bob`. */
export function SketchBalloon({ className = "", style }: ArtProps) {
  return (
    <svg
      aria-hidden
      focusable="false"
      viewBox="0 0 120 180"
      className={className}
      style={style}
      fill="none"
    >
      <g filter={ROUGH}>
        <path
          d="M60 8c30 0 46 24 46 50 0 28-24 50-46 64-22-14-46-36-46-64C14 32 30 8 60 8Z"
          {...pencil}
          strokeWidth="2.4"
        />
        <g {...pencil} strokeWidth="1.5" opacity="0.5">
          <path d="M60 8c-14 28-14 76 0 114M60 8c14 28 14 76 0 114" />
          <path d="M34 14c-8 30-6 72 10 104M86 14c8 30 6 72-10 104" opacity="0.8" />
        </g>
        <path d="M46 122h28" {...pencil} strokeWidth="2" opacity="0.7" />
        <g {...pencil} strokeWidth="1.5" opacity="0.65">
          <path d="M50 122 46 146M70 122 74 146" />
        </g>
        <path d="M44 146h32l-4 22H48Z" {...pencil} strokeWidth="2.2" />
        <path d="M46 156h28" {...pencil} strokeWidth="1.2" opacity="0.45" />
      </g>
    </svg>
  );
}

/* ================================================================
   Places
================================================================ */

/** Temple shikhara with kalash and flag — the yatra marker. */
export function SketchTemple({ className = "", style }: ArtProps) {
  return (
    <svg
      aria-hidden
      focusable="false"
      viewBox="0 0 180 200"
      className={className}
      style={style}
      fill="none"
    >
      <g filter={ROUGH}>
        {/* Flag and finial */}
        <path d="M90 6v22" {...pencil} strokeWidth="2" />
        <path
          d="M90 8c10 1 14 5 22 4-4 6-4 10 0 16-10 1-14-3-22-4Z"
          {...pencil}
          strokeWidth="1.8"
          opacity="0.75"
        />
        <path d="M84 34h12l-6-6Z" {...pencil} strokeWidth="1.8" />
        {/* The curved spire */}
        <path d="M90 34c14 38 24 72 34 106H56c10-34 20-68 34-106Z" {...pencil} strokeWidth="2.6" />
        <g {...pencil} strokeWidth="1.3" opacity="0.45">
          <path d="M70 100h40M64 124h52" />
        </g>
        {/* Plinth and doorway */}
        <path d="M44 140h92v16H44Z" {...pencil} strokeWidth="2.2" />
        <path d="M34 156h112v18H34Z" {...pencil} strokeWidth="2.4" />
        <path d="M24 174h132v18H24Z" {...pencil} strokeWidth="2.2" opacity="0.8" />
        <path d="M78 192v-26a12 12 0 0 1 24 0v26" {...pencil} strokeWidth="2" opacity="0.7" />
        {/* Steps */}
        <g {...pencil} strokeWidth="1.4" opacity="0.4">
          <path d="M14 192h152M6 200h168" />
        </g>
      </g>
    </svg>
  );
}

/** Shikara on Dal Lake, with ripples. Pair with `rock`. */
export function SketchShikara({ className = "", style }: ArtProps) {
  return (
    <svg
      aria-hidden
      focusable="false"
      viewBox="0 0 220 120"
      className={className}
      style={style}
      fill="none"
    >
      <g filter={ROUGH}>
        {/* Hull, upswept at both ends */}
        <path d="M14 74c14 14 50 20 96 20s82-6 96-20" {...pencil} strokeWidth="2.6" />
        <path d="M14 74 6 62M206 74l8-12" {...pencil} strokeWidth="2.2" />
        <path d="M22 70h176" {...pencil} strokeWidth="1.6" opacity="0.5" />
        {/* Canopy */}
        <path d="M66 68V40h88v28" {...pencil} strokeWidth="2.2" />
        <path d="M58 40h104l-8-12H66Z" {...pencil} strokeWidth="2.2" />
        <g {...pencil} strokeWidth="1.3" opacity="0.45">
          <path d="M88 68V40M110 68V40M132 68V40" />
        </g>
        {/* The oarsman's pole */}
        <path d="M44 72 30 26" {...pencil} strokeWidth="2" opacity="0.7" />
        {/* Ripples */}
        <g {...pencil} strokeWidth="1.5" opacity="0.4">
          <path d="M18 102c16-6 32 6 48 0s32 6 48 0 32 6 48 0" />
          <path d="M34 114c14-5 28 5 42 0s28 5 42 0" opacity="0.7" />
        </g>
      </g>
    </svg>
  );
}

/** A dotted journey line, optionally pinned — the itinerary, as a doodle.
 *  `pins={0}` leaves just the line, for use as a section connector. */
export function SketchRoute({
  className = "",
  style,
  pins = 4,
}: ArtProps & { pins?: number }) {
  const stops = [
    { x: 40, y: 72 },
    { x: 300, y: 36 },
    { x: 560, y: 80 },
    { x: 820, y: 40 },
  ].slice(0, pins);

  return (
    <svg
      aria-hidden
      focusable="false"
      viewBox="0 0 860 120"
      className={className}
      style={style}
      fill="none"
    >
      <g filter={ROUGH}>
        <path
          d="M40 72C150 72 210 32 300 36 400 40 470 84 560 80 660 76 730 36 820 40"
          {...pencil}
          strokeWidth="2"
          opacity="0.55"
          className="trail-draw"
        />
        {stops.map((s) => (
          <g key={`${s.x}-${s.y}`} transform={`translate(${s.x} ${s.y})`}>
            {/* Pin: a teardrop over its ground dash */}
            <path d="M0 0c-8-8-12-14-12-20a12 12 0 0 1 24 0c0 6-4 12-12 20Z" {...pencil} strokeWidth="2" />
            <circle cx="0" cy="-20" r="4" fill="currentColor" opacity="0.6" />
            <path d="M-7 6h14" {...pencil} strokeWidth="1.4" opacity="0.4" />
          </g>
        ))}
      </g>
    </svg>
  );
}
