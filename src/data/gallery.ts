export type Shot = {
  src: string;
  place: string;
  region: string;
  group: "himalaya" | "yatra" | "kerala" | "islands" | "trek" | "groups";
};

/** Photographs from 2XBT departures, grouped the same way the packages are. */
export const gallery: Shot[] = [
  { src: "/images/places/pangong-lake.webp", place: "Pangong Tso", region: "Ladakh", group: "himalaya" },
  { src: "/images/places/nubra-valley.webp", place: "Nubra Valley", region: "Ladakh", group: "himalaya" },
  { src: "/images/places/turtuk-village.webp", place: "Turtuk", region: "Ladakh", group: "himalaya" },
  { src: "/images/places/leh.webp", place: "Leh", region: "Ladakh", group: "himalaya" },
  { src: "/images/places/gulmarg.webp", place: "Gulmarg", region: "Kashmir", group: "himalaya" },
  { src: "/images/hero-gulmarg.webp", place: "Gulmarg meadows", region: "Kashmir", group: "himalaya" },
  { src: "/images/places/sonmarg.webp", place: "Sonmarg", region: "Kashmir", group: "himalaya" },
  { src: "/images/places/pahalgam.webp", place: "Pahalgam", region: "Kashmir", group: "himalaya" },
  { src: "/images/places/dal-lake.webp", place: "Dal Lake", region: "Srinagar", group: "himalaya" },
  { src: "/images/places/pokhara.webp", place: "Pokhara", region: "Nepal", group: "himalaya" },
  { src: "/images/places/annapurna.webp", place: "Annapurna Base Camp", region: "Nepal", group: "himalaya" },
  { src: "/images/places/kathmandu.webp", place: "Kathmandu", region: "Nepal", group: "himalaya" },
  { src: "/images/places/shimla.webp", place: "Shimla", region: "Himachal", group: "himalaya" },
  { src: "/images/places/manali.webp", place: "Manali", region: "Himachal", group: "himalaya" },
  { src: "/images/places/solang-valley.webp", place: "Solang Valley", region: "Himachal", group: "himalaya" },
  { src: "/images/snow-forest.webp", place: "Winter pines", region: "Himachal", group: "himalaya" },

  { src: "/images/places/kedarnath.webp", place: "Kedarnath", region: "Uttarakhand", group: "yatra" },
  { src: "/images/kedarnath.webp", place: "Kedarnath temple", region: "Uttarakhand", group: "yatra" },
  { src: "/images/places/tungnath.webp", place: "Tungnath", region: "Uttarakhand", group: "yatra" },
  { src: "/images/places/badrinath.webp", place: "Badrinath", region: "Uttarakhand", group: "yatra" },
  { src: "/images/places/yamunotri.webp", place: "Yamunotri", region: "Uttarakhand", group: "yatra" },
  { src: "/images/places/rishikesh.webp", place: "Rishikesh", region: "Uttarakhand", group: "yatra" },
  { src: "/images/places/mussoorie.webp", place: "Mussoorie", region: "Uttarakhand", group: "yatra" },
  { src: "/images/chardham.webp", place: "Char Dham route", region: "Uttarakhand", group: "yatra" },
  { src: "/images/places/vaishno-devi.webp", place: "Vaishno Devi", region: "Katra", group: "yatra" },
  { src: "/images/places/shivkhori.webp", place: "Shivkhori", region: "Katra", group: "yatra" },
  { src: "/images/places/ujjain-mahakal.webp", place: "Mahakaleshwar", region: "Ujjain", group: "yatra" },
  { src: "/images/places/omkareshwar.webp", place: "Omkareshwar", region: "Madhya Pradesh", group: "yatra" },
  { src: "/images/places/maheshwar.webp", place: "Maheshwar", region: "Madhya Pradesh", group: "yatra" },
  { src: "/images/places/trimbakeshwar.webp", place: "Trimbakeshwar", region: "Maharashtra", group: "yatra" },
  { src: "/images/places/bhimashankar.webp", place: "Bhimashankar", region: "Maharashtra", group: "yatra" },
  { src: "/images/places/grishneshwar.webp", place: "Grishneshwar", region: "Maharashtra", group: "yatra" },
  { src: "/images/places/konark-puri.webp", place: "Konark Sun Temple", region: "Odisha", group: "yatra" },
  { src: "/images/places/bhubaneswar.webp", place: "Bhubaneswar", region: "Odisha", group: "yatra" },
  { src: "/images/puri.webp", place: "Jagannath Puri", region: "Odisha", group: "yatra" },
  { src: "/images/places/rameshwaram.webp", place: "Rameshwaram", region: "Tamil Nadu", group: "yatra" },
  { src: "/images/places/madurai.webp", place: "Madurai", region: "Tamil Nadu", group: "yatra" },
  { src: "/images/places/kanyakumari.webp", place: "Kanyakumari", region: "Tamil Nadu", group: "yatra" },

  { src: "/images/places/munnar.webp", place: "Munnar", region: "Kerala", group: "kerala" },
  { src: "/images/places/thekkady.webp", place: "Thekkady", region: "Kerala", group: "kerala" },
  { src: "/images/places/kovalam.webp", place: "Kovalam", region: "Kerala", group: "kerala" },
  { src: "/images/places/kochi.webp", place: "Kochi", region: "Kerala", group: "kerala" },
  { src: "/images/kerala.webp", place: "Backwaters", region: "Kerala", group: "kerala" },

  { src: "/images/places/havelock.webp", place: "Havelock Island", region: "Andaman", group: "islands" },
  { src: "/images/places/neil-island.webp", place: "Neil Island", region: "Andaman", group: "islands" },
  { src: "/images/places/port-blair.webp", place: "Ross & North Bay", region: "Andaman", group: "islands" },

  { src: "/images/places/raigad.webp", place: "Raigad Fort", region: "Sahyadri", group: "trek" },
  { src: "/images/places/aadrai.webp", place: "Aadrai Jungle", region: "Sahyadri", group: "trek" },
  { src: "/images/places/ratnagiri.webp", place: "Ratnagiri", region: "Konkan", group: "trek" },
  { src: "/images/places/hampi.webp", place: "Hampi", region: "Karnataka", group: "trek" },
  { src: "/images/places/badami.webp", place: "Badami", region: "Karnataka", group: "trek" },
  { src: "/images/trek-clouds.webp", place: "Above the clouds", region: "Sahyadri", group: "trek" },
  { src: "/images/jodhpur.webp", place: "Jodhpur", region: "Rajasthan", group: "trek" },

  { src: "/images/group-kedarnath.webp", place: "Our group at Kedarnath", region: "Uttarakhand", group: "groups" },
  { src: "/images/group-maheshwar.webp", place: "Our group at Maheshwar", region: "Madhya Pradesh", group: "groups" },
  { src: "/images/kedarnath-tungnath.webp", place: "Kedarnath & Tungnath departure", region: "Uttarakhand", group: "groups" },
  { src: "/images/kedarnath-haridwar-rishikesh.webp", place: "Haridwar & Rishikesh leg", region: "Uttarakhand", group: "groups" },
  { src: "/images/do-dham.webp", place: "Do Dham departure", region: "Uttarakhand", group: "groups" },
  { src: "/images/ujjain.webp", place: "Ujjain departure", region: "Madhya Pradesh", group: "groups" },
];

export const galleryGroups = [
  { id: "all", label: "Everything" },
  { id: "himalaya", label: "Himalaya & Nepal" },
  { id: "yatra", label: "Yatra & temples" },
  { id: "kerala", label: "Kerala & South" },
  { id: "islands", label: "Islands" },
  { id: "trek", label: "Treks & forts" },
  { id: "groups", label: "Our groups" },
] as const;
