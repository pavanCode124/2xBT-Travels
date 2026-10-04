export const site = {
  name: "2XBT",
  legalName: "2XBT Building Boyz Tours & Travels",
  tagline: "Travel. Chill. Repeat.",
  url: "https://www.2xbt.in",
  description:
    "Group tours, treks and custom travel packages across India, run end to end by 2XBT Building Boyz Tours & Travels, Mumbai.",
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
  },
  eventsPartner: "https://vibeandthrivee.com/",
} as const;

export function whatsappLink(message: string) {
  return `https://wa.me/${site.phoneRaw}?text=${encodeURIComponent(message)}`;
}

export const nav = [
  { href: "/", label: "Home" },
  { href: "/packages", label: "Tour Packages" },
  { href: "/group-tours", label: "Group Tours" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
