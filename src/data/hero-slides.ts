/**
 * The homepage hero reel. Each frame is a photograph from the catalogue
 * paired with the package it belongs to, so the caption's duration and
 * price are read from `packages` rather than being restated here.
 *
 * Order matters: it is the rotation, so consecutive frames are kept
 * visually unalike — rock, snow, temple, tea, sea, summit, fort.
 */
export type HeroSlide = {
  src: string;
  alt: string;
  place: string;
  region: string;
  /** Slug in `packages`; drives the caption's price, length and link. */
  slug: string;
};

export const heroSlides: HeroSlide[] = [
  {
    src: "/images/tours/ladakh-explorer-6d5n.webp",
    alt: "The Indus and Zanskar rivers meeting below the Ladakh ranges",
    place: "Indus & Zanskar",
    region: "Ladakh",
    slug: "ladakh-explorer-6d5n",
  },
  {
    src: "/images/tours/kashmir-vaishno-devi-8d7n.webp",
    alt: "Snow peaks above the meadows of the Sonmarg valley in Kashmir",
    place: "Sonmarg valley",
    region: "Kashmir",
    slug: "kashmir-vaishno-devi-8d7n",
  },
  {
    src: "/images/places/badrinath.webp",
    alt: "Badrinath temple below the snow line in Uttarakhand",
    place: "Badrinath Dham",
    region: "Uttarakhand",
    slug: "chardham-yatra-ex-haridwar",
  },
  {
    src: "/images/places/munnar.webp",
    alt: "Tea terraces rolling down to a lake in the Munnar hills",
    place: "Munnar hills",
    region: "Kerala",
    slug: "munnar-thekkady-allepy-5d4n",
  },
  {
    src: "/images/places/havelock.webp",
    alt: "Boats on turquoise shallows off Havelock Island",
    place: "Havelock Island",
    region: "Andaman",
    slug: "andaman-islands-6-day-tour",
  },
  {
    src: "/images/places/annapurna.webp",
    alt: "First light on the Annapurna range above prayer flags",
    place: "Annapurna range",
    region: "Nepal",
    slug: "annapurna-base-camp-trek-ex-mumbai",
  },
  {
    src: "/images/tours/raigad-fort.webp",
    alt: "The ruins of Raigad fort in monsoon mist",
    place: "Raigad fort",
    region: "Sahyadri",
    slug: "raigad-fort",
  },
];

/** How long each frame holds before the cross-fade to the next begins. */
export const HERO_SLIDE_MS = 5600;
