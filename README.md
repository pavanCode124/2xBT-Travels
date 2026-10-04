# 2XBT Building Boyz Tours & Travels

Marketing and booking site for 2XBT, rebuilt in Next.js. Every piece of
content, every photograph and the logo were pulled from the previous site at
[2xbt.in](https://www.2xbt.in/).

## Running it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static export of all 20 routes
```

## Stack

- Next.js 16 (App Router), React 19, TypeScript
- Tailwind CSS v4, with the design tokens in `src/app/globals.css`
- Phosphor Icons
- Every route prerenders to static HTML, so this deploys to any static host

## Where things live

| Path | What it is |
| --- | --- |
| `src/data/packages.ts` | All 8 tours: itineraries, pricing, inclusions, booking terms |
| `src/data/site.ts` | Phone, email, address, social links, navigation |
| `src/app/globals.css` | Colour, type, radius and easing tokens, light and dark |
| `src/components/` | Header, footer, cards, itinerary accordion, enquiry form |
| `public/images/` | Photographs and logo recovered from the old site |

### Adding or editing a tour

Add an entry to the `packages` array in `src/data/packages.ts`. The listing
page, the detail route, the departures calendar, the sitemap and the homepage
departures rail all read from that one array. Set `featured: true` to surface
it on the homepage.

## Design system

One accent colour, orange `#F46811`, taken from the logo. Navy `#00335B` is the
ink and `#0B97CC` stays inside the logo artwork only. Light and dark themes are
both defined as token sets and follow `prefers-color-scheme`; no section inverts
against the page theme.

Type is Outfit for display and Geist for body. Radii are fixed: 16px cards,
10px inputs, pill buttons. Motion is transform and opacity only, under 300ms,
with `prefers-reduced-motion` honoured throughout.

## The enquiry form

The site is statically hosted and has no backend, so the contact form validates
locally and hands the completed enquiry to WhatsApp, with a `mailto:` fallback.
Nothing is stored or posted anywhere. If a server-side inbox is wanted later,
replace the submit handler in `src/components/enquiry-form.tsx`.

## Known asset gap

`public/images/chardham.webp` is only 275x183px. That is the full resolution
Odoo holds for it on the old site (`/web/image/product.template/12/image_1920`
returns the same 275px file), and it is the one photograph on the site
that looks soft. A replacement at 1600px or wider, dropped in at the same path,
fixes it with no code change.
