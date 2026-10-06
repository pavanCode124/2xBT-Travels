export const site = {
  name: "2XBT",
  legalName: "2XBT Building Boyz Tours & Travels",
  tagline: "Travel. Chill. Repeat.",
  url: "https://www.2xbt.in",
  description:
    "Group tours, yatras, treks and bike rides across India and Nepal — run end to end by 2XBT Building Boyz Tours & Travels, Mumbai.",
  phone: "+91 91362 38620",
  phoneHref: "tel:+919136238620",
  phoneRaw: "919136238620",
  email: "travel@2xbt.in",
  emailHref: "mailto:travel@2xbt.in",
  address: {
    line1: "112, Parijat, Parel",
    line2: "Mumbai 400012, Maharashtra",
    maps: "https://maps.app.goo.gl/KbhEhWVDfsCu6jBXA",
  },
  socials: {
    instagram: "https://www.instagram.com/2xbt_mumbai",
    facebook: "https://www.facebook.com/people/2XBT/61575814928172/",
    whatsapp: "https://wa.me/919136238620",
    google: "https://share.google/MYN2P3vuBVoGsmFI3",
  },
  eventsPartner: "https://vibeandthrivee.com/",
  /** Live booking engine; every package detail page links through to it. */
  bookingHost: "https://www.tripzocrm.com/booking",
} as const;

export function whatsappLink(message: string) {
  return `https://wa.me/${site.phoneRaw}?text=${encodeURIComponent(message)}`;
}

export function bookingLink(slug: string) {
  return `${site.bookingHost}/${slug}`;
}

export const nav = [
  { href: "/", label: "Home" },
  { href: "/packages", label: "Tour Packages" },
  { href: "/group-tours", label: "Group Tours" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

/** Numbers quoted across the site. Kept here so they only change once. */
export const stats = [
  { value: "52+", label: "Curated packages" },
  { value: "15+", label: "Destinations covered" },
  { value: "5,000+", label: "Travellers moved" },
  { value: "24×7", label: "On-tour assistance" },
] as const;
