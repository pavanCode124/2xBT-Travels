import Link from "next/link";

export default function NotFound() {
  return (
    <section className="shell grid min-h-[60vh] place-items-center py-20 text-center">
      <div>
        <p className="font-display text-6xl font-semibold" style={{ color: "var(--accent)" }}>
          404
        </p>
        <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight">
          That page has moved on
        </h1>
        <p className="mx-auto mt-4 max-w-[44ch] leading-relaxed" style={{ color: "var(--ink-soft)" }}>
          The link is broken or the tour is no longer listed. The current
          departures are all on the tours page.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/packages" className="btn btn-primary">
            Browse tours
          </Link>
          <Link href="/" className="btn btn-ghost">
            Back home
          </Link>
        </div>
      </div>
    </section>
  );
}
