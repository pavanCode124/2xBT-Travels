# 2XBT Building Boyz Tours & Travels

Marketing and booking site for 2XBT, built in Next.js. The tour catalogue —
52 packages with itineraries, pricing tiers, inclusions and policies — mirrors
the live booking records published at
[tripzocrm.com/hosts/2xbt](https://www.tripzocrm.com/hosts/2xbt).

## Running it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # prerenders all 64 routes
```

## Stack

- Next.js 16 (App Router), React 19, TypeScript
- Tailwind CSS v4, design tokens in `src/app/globals.css`
- Phosphor Icons
- Every route prerenders to static HTML

## Where things live

| Path | What it is |
| --- | --- |
| `src/data/packages.ts` | All 52 tours: itineraries, pricing tiers, inclusions, exclusions, FAQs, policies |
| `src/data/site.ts` | Phone, email, address, social links, navigation, headline stats |
| `src/data/legal.ts` | Privacy Policy and Terms & Conditions copy |
| `src/data/gallery.ts` | The gallery set, grouped by region |
| `src/data/testimonials.ts` | Traveller quotes (empty until real ones are added) |
| `src/app/globals.css` | Colour, type, radius, motion tokens — light and dark |
| `src/components/` | Header, footer, cards, itinerary accordion, filters, lightbox, forms |
| `public/images/tours/` | Package banner photographs |
| `public/images/places/` | Destination photographs used by the gallery and spotlight |

## Design system

Three brand colours, straight off the logo: orange `#F4701A` drives action,
navy `#0E3A63` carries structure and ink, and cyan `#1C9AD6` is the atmosphere
— gradients, the wave motif and hairline accents. Both light and dark are
defined as token sets and follow `prefers-color-scheme`, with a manual
override stored under `2xbt-theme`.

Type is Sora for display, Plus Jakarta Sans for body, and Instrument Serif
italic for the one accent word per headline. Radii are fixed: 20px surfaces,
12px inputs, pill buttons. Motion is transform and opacity only, and
`prefers-reduced-motion` is honoured throughout.

## The tour catalogue

`src/data/packages.ts` is generated, not hand-written. It was built from the
public booking API (`api.tripzocrm.cloud/api/public/tours/<slug>`), with the
CRM's HTML fields flattened into plain bullet lists and the shared booking
terms, payment policies, cancellation policies and FAQ sets interned into
keyed tables so the module stays readable.

To refresh it after the catalogue changes, re-fetch each slug from that API
and regenerate the file; do not hand-edit it. The booking button on each
detail page links through to the live booking engine, so prices shown here
should be kept in step with the CRM.

### Adding or editing a tour

The listing page, the detail route, the mega-menu counts, the sitemap and the
homepage all read from the one `packages` array, so a tour only needs adding
there. `category` places it in one of the five regions defined at the bottom
of the same file.

## The enquiry form

The site has no backend, so the contact form validates locally and hands the
completed enquiry to WhatsApp, with a `mailto:` fallback. Nothing is stored or
posted anywhere. To add a server-side inbox later, replace the submit handler
in `src/components/enquiry-form.tsx`.

## Testimonials

`src/data/testimonials.ts` ships empty on purpose — no invented reviews. Drop
in verbatim quotes (with permission) and the social-proof section on the
homepage renders them; leave it empty and the page shows an invitation to the
Google profile instead.
