export type Day = { title: string; items: string[] };

export type Pkg = {
  slug: string;
  name: string;
  headline: string;
  blurb: string;
  region: "Himalayas" | "South India" | "Central India" | "East India";
  theme: "Pilgrimage" | "Trek" | "Leisure";
  image: string;
  imageAlt: string;
  price: number;
  doubleSharingExtra: number;
  nights: number;
  days: number;
  startDate: string | null;
  route: string[];
  itinerary: Day[];
  includes: string[];
  excludes: string[];
  notes?: string[];
  featured?: boolean;
};

const himalayanExcludes = [
  "Train travel between Mumbai and Haridwar",
  "Temple VIP darshan and special pooja charges",
  "Pony, palki or doli charges",
  "Local union taxi between Sonprayag and Gaurikund",
  "Tatkal and premium tatkal train fare",
  "Lunch and en route meals",
  "Personal expenses such as shopping, tips and laundry",
  "Medical and emergency expenses",
  "Breakfast on the Kedarnath trek day",
  "Costs arising from weather, landslides or road blockages",
];

export const packages: Pkg[] = [
  {
    slug: "chardham-yatra",
    name: "Char Dham Yatra",
    headline: "All four dhams, one unbroken journey",
    blurb:
      "Yamunotri, Gangotri, Kedarnath and Badrinath across twelve days, with a 2XBT coordinator on the ground from the first morning to the last.",
    region: "Himalayas",
    theme: "Pilgrimage",
    image: "/images/chardham.webp",
    imageAlt: "The four Himalayan dham temples of Uttarakhand",
    price: 31999,
    doubleSharingExtra: 2500,
    nights: 11,
    days: 12,
    startDate: "11 June 2026",
    route: ["Haridwar", "Yamunotri", "Gangotri", "Kedarnath", "Badrinath", "Haridwar"],
    itinerary: [
      {
        title: "Haridwar to Barkot",
        items: [
          "Arrival at Haridwar by 8:00 AM",
          "Drive to Barkot through scenic mountain roads",
          "Rivers, valleys and Himalayan views en route",
          "Hotel check in",
          "Dinner and overnight stay at Barkot",
        ],
      },
      {
        title: "Barkot to Yamunotri and back",
        items: [
          "Early breakfast",
          "Drive to Janki Chatti",
          "Trek to Yamunotri Temple on foot, pony or palki",
          "Darshan of Goddess Yamuna",
          "Return trek and drive back to Barkot",
          "Dinner and overnight stay at Barkot",
        ],
      },
      {
        title: "Barkot to Uttarkashi",
        items: [
          "After breakfast, drive to Uttarkashi",
          "Scenic views of the Bhagirathi river",
          "Hotel check in",
          "Visit Kashi Vishwanath Temple, subject to time",
          "Dinner and overnight stay at Uttarkashi",
        ],
      },
      {
        title: "Uttarkashi to Gangotri and back",
        items: [
          "Early breakfast",
          "Drive to Gangotri Dham",
          "Holy dip in the Bhagirathi and Gangotri darshan",
          "Return to Uttarkashi",
          "Dinner and overnight stay at Uttarkashi",
        ],
      },
      {
        title: "Uttarkashi to Rampur",
        items: [
          "After breakfast",
          "Scenic drive towards Rampur",
          "Himalayan landscapes en route",
          "Check in and relax",
          "Dinner and overnight stay at Rampur",
        ],
      },
      {
        title: "Rampur to Kedarnath",
        items: [
          "Early breakfast",
          "Drive to Sonprayag",
          "Transfer to Gaurikund by local union taxi",
          "Trek to Kedarnath Temple on foot, pony or palki",
          "Arrival near the temple by evening",
          "Dinner and overnight stay at Kedarnath",
        ],
      },
      {
        title: "Kedarnath to Rampur",
        items: [
          "Early morning Kedarnath darshan",
          "Trek down to Gaurikund",
          "Local taxi to Sonprayag",
          "Drive back to Rampur",
          "Dinner and overnight stay at Rampur",
        ],
      },
      {
        title: "Rampur to Chopta",
        items: [
          "After breakfast",
          "Visit Triyuginarayan Temple",
          "Trek to Tungnath, the highest Shiva temple in the world",
          "Reach Chopta by evening",
          "Dinner and overnight stay at Chopta",
        ],
      },
      {
        title: "Chopta to Badrinath",
        items: [
          "After breakfast",
          "Drive through scenic mountain passes",
          "Hotel check in",
          "Badrinath Temple darshan, subject to time",
          "Dinner and overnight stay at Badrinath",
        ],
      },
      {
        title: "Badrinath to Srinagar",
        items: [
          "Early breakfast",
          "Visit Mana village, the last village of India",
          "Proceed towards Srinagar",
          "Dinner and overnight stay at Srinagar",
        ],
      },
      {
        title: "Srinagar to Haridwar",
        items: [
          "After breakfast",
          "Drive to Rishikesh",
          "Visit Ram Jhula and Laxman Jhula",
          "Continue to Haridwar",
          "Evening Ganga Aarti at Har Ki Pauri",
          "Dinner and overnight stay at Haridwar",
        ],
      },
      {
        title: "Departure from Haridwar",
        items: ["After breakfast", "Transfer to the railway station for your onward journey"],
      },
    ],
    includes: [
      "11 nights hotel accommodation",
      "Char Dham Yatra pass",
      "Daily breakfast and dinner",
      "All sightseeing and transfers by private bus",
      "Tour coordinator and group leader from 2XBT",
    ],
    excludes: himalayanExcludes,
    featured: true,
  },
  {
    slug: "do-dham-yatra",
    name: "Do Dham Yatra",
    headline: "Kedarnath and Badrinath, nine days",
    blurb:
      "The two dhams most people come for, with Tungnath and Mana village folded in. Private bus throughout and a group leader who has walked the route before.",
    region: "Himalayas",
    theme: "Pilgrimage",
    image: "/images/do-dham.webp",
    imageAlt: "Kedarnath, Tungnath and Badrinath temples",
    price: 23999,
    doubleSharingExtra: 2500,
    nights: 8,
    days: 9,
    startDate: "15 June 2026",
    route: ["Haridwar", "Kedarnath", "Badrinath", "Haridwar"],
    itinerary: [
      {
        title: "Haridwar to Rampur",
        items: [
          "Pickup from Haridwar station at 8:00 AM",
          "Scenic drive towards Rampur past rivers and valleys",
          "Hotel check in and rest",
          "Dinner and overnight stay at Rampur",
        ],
      },
      {
        title: "Rampur to Kedarnath",
        items: [
          "Breakfast at the hotel",
          "Drive to Sonprayag, then transfer to Gaurikund by local union taxi",
          "Trek to Kedarnath Temple on foot, pony or palki",
          "Arrival near the temple by evening",
          "Dinner and overnight stay at Kedarnath",
        ],
      },
      {
        title: "Kedarnath darshan to Rampur",
        items: [
          "Early morning Kedarnath darshan",
          "Trek down to Gaurikund, return to Sonprayag by local taxi",
          "Drive back to Rampur",
          "Dinner and overnight stay at Rampur",
        ],
      },
      {
        title: "Rampur to Chopta",
        items: [
          "Breakfast at the hotel",
          "Drive towards Chopta",
          "En route visit Triyuginarayan Temple",
          "Trek to Tungnath, the highest Shiva temple in the world",
          "Reach Chopta by evening",
          "Dinner and overnight stay at Chopta",
        ],
      },
      {
        title: "Chopta to Badrinath",
        items: [
          "Breakfast at the hotel",
          "Drive to Badrinath through mountain passes",
          "Hotel check in",
          "Badrinath Temple darshan, subject to time",
          "Dinner and overnight stay at Badrinath",
        ],
      },
      {
        title: "Badrinath to Srinagar",
        items: [
          "Breakfast at the hotel",
          "Visit Mana village, the last village of India",
          "Continue towards Srinagar in Uttarakhand",
          "Dinner and overnight stay at Srinagar",
        ],
      },
      {
        title: "Srinagar to Rishikesh",
        items: [
          "Breakfast at the hotel",
          "Drive to Rishikesh",
          "Visit Ram Jhula and Laxman Jhula",
          "Dinner and overnight stay at Rishikesh",
        ],
      },
      {
        title: "Rishikesh to Haridwar",
        items: [
          "Breakfast at the hotel",
          "Drive to Haridwar",
          "Free time for shopping and temple visits",
          "Evening Ganga Aarti at Har Ki Pauri",
          "Dinner and overnight stay at Haridwar",
        ],
      },
      {
        title: "Departure from Haridwar",
        items: ["Breakfast at the hotel", "Transfer to the railway station"],
      },
    ],
    includes: [
      "8 nights hotel accommodation",
      "Yatra pass",
      "Daily breakfast and dinner",
      "All sightseeing and transfers by private bus",
      "Tour coordinator and group leader from 2XBT",
    ],
    excludes: himalayanExcludes,
    notes: [
      "Accommodation at Kedarnath is on a 5 to 7 person sharing basis because of limited availability.",
    ],
    featured: true,
  },
  {
    slug: "kedarnath-tungnath",
    name: "Kedarnath & Tungnath",
    headline: "Two temples, one high ridge",
    blurb:
      "Seven days pairing the Kedarnath trek with Tungnath, the highest Shiva temple in the world, and an evening of Ganga Aarti to close.",
    region: "Himalayas",
    theme: "Trek",
    image: "/images/kedarnath-tungnath.webp",
    imageAlt: "Kedarnath and Tungnath temples in the Garhwal Himalayas",
    price: 19999,
    doubleSharingExtra: 2000,
    nights: 6,
    days: 7,
    startDate: "15 June 2026",
    route: ["Haridwar", "Kedarnath", "Tungnath", "Haridwar"],
    itinerary: [
      {
        title: "Haridwar to Rampur",
        items: [
          "After breakfast",
          "Scenic drive towards Rampur",
          "Himalayan landscapes en route",
          "Hotel check in and rest",
          "Dinner and overnight stay at Rampur",
        ],
      },
      {
        title: "Rampur to Kedarnath",
        items: [
          "Early breakfast",
          "Drive to Sonprayag",
          "Transfer to Gaurikund by local union taxi",
          "Trek to Kedarnath Temple on foot, pony or palki",
          "Arrival near the temple by evening",
          "Dinner and overnight stay at Kedarnath",
        ],
      },
      {
        title: "Kedarnath to Rampur",
        items: [
          "Early morning Kedarnath darshan",
          "Trek down to Gaurikund",
          "Local taxi transfer to Sonprayag",
          "Drive back to Rampur",
          "Dinner and overnight stay at Rampur",
        ],
      },
      {
        title: "Rampur to Chopta",
        items: [
          "After breakfast",
          "Visit Triyuginarayan Temple",
          "Trek to Tungnath Temple",
          "Reach Chopta by evening",
          "Dinner and overnight stay at Chopta",
        ],
      },
      {
        title: "Chopta to Rishikesh",
        items: [
          "After breakfast",
          "Drive towards Rishikesh through scenic mountain routes",
          "Hotel check in",
          "Dinner and overnight stay at Rishikesh",
        ],
      },
      {
        title: "Rishikesh to Haridwar",
        items: [
          "After breakfast",
          "Visit Ram Jhula and Laxman Jhula",
          "Continue to Haridwar",
          "Evening Ganga Aarti at Har Ki Pauri",
          "Dinner and overnight stay at Haridwar",
        ],
      },
      {
        title: "Departure from Haridwar",
        items: ["After breakfast", "Transfer to the railway station for your onward journey"],
      },
    ],
    includes: [
      "6 nights hotel accommodation",
      "Kedarnath Yatra pass",
      "Daily breakfast and dinner",
      "All sightseeing and transfers by private bus",
      "Tour coordinator and group leader from 2XBT",
    ],
    excludes: himalayanExcludes,
    featured: true,
  },
  {
    slug: "kedarnath-haridwar-rishikesh",
    name: "Kedarnath, Haridwar & Rishikesh",
    headline: "The short Kedarnath run",
    blurb:
      "Six days built for a long weekend plus leave. Kedarnath darshan, Triyuginarayan, the Rishikesh jhulas and Har Ki Pauri at dusk.",
    region: "Himalayas",
    theme: "Pilgrimage",
    image: "/images/kedarnath-haridwar-rishikesh.webp",
    imageAlt: "Kedarnath Temple under snow",
    price: 17999,
    doubleSharingExtra: 1500,
    nights: 5,
    days: 6,
    startDate: "15 June 2026",
    route: ["Haridwar", "Kedarnath", "Rishikesh", "Haridwar"],
    itinerary: [
      {
        title: "Haridwar to Rampur",
        items: [
          "After breakfast",
          "Scenic drive towards Rampur",
          "Himalayan landscapes en route",
          "Hotel check in and rest",
          "Dinner and overnight stay at Rampur",
        ],
      },
      {
        title: "Rampur to Kedarnath",
        items: [
          "Early breakfast",
          "Drive to Sonprayag",
          "Transfer to Gaurikund by local union taxi",
          "Trek to Kedarnath Temple on foot, pony or palki",
          "Arrival near the temple by evening",
          "Dinner and overnight stay at Kedarnath",
        ],
      },
      {
        title: "Kedarnath to Rampur",
        items: [
          "Early morning Kedarnath darshan",
          "Trek down to Gaurikund",
          "Local taxi transfer to Sonprayag",
          "Drive back to Rampur",
          "Dinner and overnight stay at Rampur",
        ],
      },
      {
        title: "Rampur to Rishikesh",
        items: [
          "After breakfast",
          "Visit Triyuginarayan Temple",
          "Drive towards Rishikesh through scenic mountain routes",
          "Hotel check in",
          "Dinner and overnight stay at Rishikesh",
        ],
      },
      {
        title: "Rishikesh to Haridwar",
        items: [
          "After breakfast",
          "Visit Ram Jhula and Laxman Jhula",
          "Continue to Haridwar",
          "Evening Ganga Aarti at Har Ki Pauri",
          "Dinner and overnight stay at Haridwar",
        ],
      },
      {
        title: "Departure from Haridwar",
        items: ["After breakfast", "Transfer to the railway station for your onward journey"],
      },
    ],
    includes: [
      "5 nights hotel accommodation",
      "Kedarnath Yatra pass",
      "Daily breakfast and dinner",
      "All sightseeing and transfers by private bus",
      "Tour coordinator and group leader from 2XBT",
    ],
    excludes: himalayanExcludes,
  },
  {
    slug: "kedarnath",
    name: "Kedarnath Yatra",
    headline: "Straight to the temple and back",
    blurb:
      "Four days, no detours. The fastest honest way to reach Kedarnath from Haridwar with accommodation, passes and a group leader sorted.",
    region: "Himalayas",
    theme: "Pilgrimage",
    image: "/images/kedarnath.webp",
    imageAlt: "Kedarnath Temple lit up against the snow",
    price: 9999,
    doubleSharingExtra: 1000,
    nights: 3,
    days: 4,
    startDate: "15 June 2026",
    route: ["Haridwar", "Kedarnath", "Haridwar"],
    itinerary: [
      {
        title: "Haridwar to Rampur",
        items: [
          "After breakfast",
          "Scenic drive towards Rampur",
          "Himalayan landscapes en route",
          "Hotel check in and rest",
          "Dinner and overnight stay at Rampur",
        ],
      },
      {
        title: "Rampur to Kedarnath",
        items: [
          "Early breakfast",
          "Drive to Sonprayag",
          "Transfer to Gaurikund by local union taxi",
          "Trek to Kedarnath Temple on foot, pony or palki",
          "Arrival near the temple by evening",
          "Dinner and overnight stay at Kedarnath",
        ],
      },
      {
        title: "Kedarnath to Rampur",
        items: [
          "Early morning Kedarnath darshan",
          "Trek down to Gaurikund",
          "Local taxi transfer to Sonprayag",
          "Drive back to Rampur",
          "Dinner and overnight stay at Rampur",
        ],
      },
      {
        title: "Rampur to Haridwar",
        items: [
          "After breakfast",
          "Visit Triyuginarayan Temple",
          "Drive back to Haridwar",
          "Transfer to the railway station for your onward journey",
        ],
      },
    ],
    includes: [
      "3 nights hotel accommodation",
      "Kedarnath Yatra pass",
      "Daily breakfast and dinner",
      "All sightseeing and transfers by private bus",
      "Tour coordinator and group leader from 2XBT",
    ],
    excludes: himalayanExcludes,
  },
  {
    slug: "kerala",
    name: "Kerala Backwaters & Beaches",
    headline: "Tea gardens down to the Arabian Sea",
    blurb:
      "Eight days from Munnar to Kovalam, with a night on a traditional Alleppey houseboat and every meal on board included.",
    region: "South India",
    theme: "Leisure",
    image: "/images/kerala.webp",
    imageAlt: "A traditional houseboat on the Kerala backwaters",
    price: 19999,
    doubleSharingExtra: 3000,
    nights: 7,
    days: 8,
    startDate: "14 March 2026",
    route: ["Kochi", "Munnar", "Thekkady", "Alleppey", "Varkala", "Kovalam", "Trivandrum"],
    itinerary: [
      {
        title: "Kochi to Munnar",
        items: [
          "Arrival at Kochi or Ernakulam",
          "Scenic drive towards Munnar",
          "Tea gardens, waterfalls and hill views en route",
          "Visit Cheeyappara and Valara waterfalls, subject to time",
          "Hotel check in",
          "Dinner and overnight stay at Munnar",
        ],
      },
      {
        title: "Munnar",
        items: [
          "After breakfast",
          "Visit Eravikulam National Park at Rajamalai",
          "Visit Mattupetty Dam",
          "Visit Echo Point and the tea gardens",
          "Local shopping and leisure time",
          "Dinner and overnight stay at Munnar",
        ],
      },
      {
        title: "Munnar to Thekkady",
        items: [
          "After breakfast",
          "Drive to Thekkady",
          "Visit Periyar Wildlife Sanctuary with an optional boat safari",
          "Optional spice plantation visit",
          "Optional Kathakali or Kalaripayattu show",
          "Dinner and overnight stay at Thekkady",
        ],
      },
      {
        title: "Thekkady to the Alleppey houseboat",
        items: [
          "After breakfast",
          "Drive to Alleppey",
          "Check in to a traditional houseboat",
          "Cruise through the backwaters and villages",
          "Lunch, evening snacks and dinner on board",
          "Overnight stay on the houseboat",
        ],
      },
      {
        title: "Alleppey to Varkala",
        items: [
          "Breakfast on the houseboat",
          "Drive towards Varkala",
          "En route visit Jatayu Earth Center, ropeway optional",
          "Visit Varkala cliff and beach",
          "Hotel check in",
          "Dinner and overnight stay at Varkala",
        ],
      },
      {
        title: "Varkala to Kovalam",
        items: [
          "After breakfast",
          "Drive to Kovalam",
          "Visit Lighthouse Beach, Hawa Beach and Samudra Beach",
          "Hotel check in",
          "Dinner and overnight stay at Kovalam",
        ],
      },
      {
        title: "Kovalam to Trivandrum",
        items: [
          "After breakfast",
          "Visit Padmanabhaswamy Temple, dress code applicable",
          "Visit Napier Museum and Zoo, subject to time",
          "Local sightseeing and shopping",
          "Dinner and overnight stay at Trivandrum",
        ],
      },
      {
        title: "Trivandrum drop",
        items: ["After breakfast", "Transfer to Trivandrum airport or railway station"],
      },
    ],
    includes: [
      "6 nights hotel accommodation plus 1 night on a houseboat",
      "Daily breakfast and dinner",
      "All meals on the houseboat including lunch, snacks and dinner",
      "All sightseeing and transfers by private vehicle",
      "Tour coordinator and group leader from 2XBT",
    ],
    excludes: [
      "Travel to Kochi and from Trivandrum",
      "Entry fees, safari tickets and adventure activities",
      "Jatayu ropeway and boating charges",
      "Lunch, except on the houseboat day",
      "Personal expenses such as shopping, tips and laundry",
      "Medical and emergency expenses",
      "Any additional cost due to weather or road conditions",
    ],
    featured: true,
  },
  {
    slug: "jagannath-puri-konark-bhubaneswar",
    name: "Jagannath Puri, Konark & Bhubaneswar",
    headline: "The Odisha temple triangle",
    blurb:
      "Four days across Lingaraj, the Konark Sun Temple and Shri Jagannath, with beach time at Puri between darshans.",
    region: "East India",
    theme: "Pilgrimage",
    image: "/images/puri.webp",
    imageAlt: "Shri Jagannath Temple at Puri at sunset",
    price: 9999,
    doubleSharingExtra: 1500,
    nights: 3,
    days: 4,
    startDate: "12 April 2026",
    route: ["Bhubaneswar", "Konark", "Puri", "Bhubaneswar"],
    itinerary: [
      {
        title: "Arrival in Bhubaneswar",
        items: [
          "Arrival at Bhubaneswar",
          "Hotel check in and freshen up",
          "Visit Lingaraj Temple",
          "Visit Mukteshwar Temple",
          "Visit Rajarani Temple, subject to time",
          "Dinner and overnight stay at Bhubaneswar",
        ],
      },
      {
        title: "Bhubaneswar to Puri via Konark",
        items: [
          "After breakfast",
          "Drive to Konark",
          "Visit the Konark Sun Temple, a UNESCO World Heritage Site",
          "Visit Konark beach, subject to time",
          "Proceed towards Puri",
          "Hotel check in",
          "Dinner and overnight stay at Puri",
        ],
      },
      {
        title: "Puri",
        items: [
          "Early morning Shri Jagannath Temple darshan as per the temple slot",
          "Breakfast at the hotel",
          "Visit Puri beach",
          "Visit Gundicha Temple",
          "Free time for the local market and prasad shopping",
          "Dinner and overnight stay at Puri",
        ],
      },
      {
        title: "Puri to Bhubaneswar drop",
        items: [
          "After breakfast",
          "Drive back to Bhubaneswar",
          "Visit Dhauli Shanti Stupa, subject to time",
          "Transfer to the airport or railway station",
          "Drop by 2:00 PM",
        ],
      },
    ],
    includes: [
      "3 nights hotel accommodation",
      "Daily breakfast and dinner",
      "All sightseeing and transfers by private vehicle",
      "Tour coordinator and group leader from 2XBT",
    ],
    excludes: [
      "Travel to and from Bhubaneswar",
      "Temple VIP darshan and special pooja charges",
      "Lunch and en route meals",
      "Personal expenses such as shopping, tips and laundry",
      "Medical and emergency expenses",
      "Any additional cost due to weather or road conditions",
    ],
  },
  {
    slug: "ujjain-omkareshwar-maheshwar",
    name: "Ujjain, Omkareshwar & Maheshwar",
    headline: "Two jyotirlingas in three days",
    blurb:
      "Mahakaleshwar and Omkareshwar back to back, closing on the Narmada ghats at Maheshwar. The shortest trip we run.",
    region: "Central India",
    theme: "Pilgrimage",
    image: "/images/ujjain.webp",
    imageAlt: "Mahakaleshwar Temple at Ujjain",
    price: 6999,
    doubleSharingExtra: 999,
    nights: 2,
    days: 3,
    startDate: null,
    route: ["Ujjain", "Omkareshwar", "Maheshwar", "Indore"],
    itinerary: [
      {
        title: "Arrival in Ujjain",
        items: [
          "Arrival at Ujjain",
          "Hotel check in and freshen up",
          "Visit Mahakaleshwar Jyotirlinga, darshan as per the allotted slot",
          "Visit Kal Bhairav Temple",
          "Visit Ram Ghat for the evening aarti, subject to time",
          "Dinner and overnight stay at Ujjain",
        ],
      },
      {
        title: "Ujjain to Omkareshwar",
        items: [
          "After breakfast",
          "Drive to Omkareshwar",
          "Darshan at Omkareshwar Jyotirlinga",
          "Narmada parikrama and Mamleshwar Temple visit",
          "Return to Ujjain or a nearby stay",
          "Dinner and overnight stay",
        ],
      },
      {
        title: "Maheshwar to Indore drop",
        items: [
          "After breakfast",
          "Drive to Maheshwar",
          "Visit Ahilya Bai Fort and the Maheshwar ghats",
          "Leisure time at the Narmada ghats",
          "Proceed to Indore",
          "Drop at Indore by 4:00 PM",
        ],
      },
    ],
    includes: [
      "2 nights hotel accommodation",
      "Daily breakfast and dinner",
      "All sightseeing and transfers by private vehicle",
      "Tour coordinator and group leader from 2XBT",
    ],
    excludes: [
      "Travel to Ujjain and from Indore",
      "VIP darshan and special pooja charges",
      "Lunch and en route meals",
      "Personal expenses such as shopping, tips and laundry",
      "Medical and emergency expenses",
      "Any additional cost due to weather or road conditions",
    ],
  },
];

export const bookingTerms = [
  {
    title: "Tentative itinerary",
    body: "The itinerary is a tentative plan and may change due to weather, road conditions, local restrictions, availability of services or any unforeseen circumstances beyond the company's control.",
  },
  {
    title: "Sightseeing and activities",
    body: "Sightseeing and activities mentioned in the itinerary are subject to time availability and operational feasibility.",
  },
  {
    title: "Right to modify",
    body: "The company reserves the right to alter, amend, reschedule or cancel any part of the itinerary without prior notice, in the interest of guest safety and comfort.",
  },
  {
    title: "No refund on unused services",
    body: "No refund is provided for missed sightseeing, late arrivals, early departures or unused services under any circumstances.",
  },
  {
    title: "Cancellation by the customer",
    body: "Cancelling 15 to 29 days before the tour date gets a 50% refund. Cancelling within 15 days of the tour date gets no refund.",
  },
  {
    title: "Cancellation by the operator",
    body: "If the tour is cancelled by the operator due to unforeseen circumstances, guests are offered a full refund or an alternative travel date. For force majeure events, refunds are processed as per the policies of the respective service providers.",
  },
  {
    title: "Inclusions and exclusions",
    body: "Unless clearly specified in the itinerary, entry fees, camera charges, local union vehicles, boating, safaris, adventure activities and personal expenses are not included.",
  },
  {
    title: "Hotel policy",
    body: "Hotels mentioned are indicative and may be replaced with similar category hotels based on availability. Check in and check out timings are strictly as per hotel policy.",
  },
  {
    title: "Travel time",
    body: "Travel time between destinations is approximate and may vary due to traffic, road or weather conditions.",
  },
  {
    title: "Vehicle and air conditioning",
    body: "Air conditioning in vehicles may not function in hilly areas or during extreme weather conditions.",
  },
  {
    title: "Force majeure",
    body: "The company is not responsible for delays or changes caused by natural calamities, strikes, political disturbances, road blockages or government regulations.",
  },
  {
    title: "Travel documents",
    body: "Guests are responsible for carrying valid government approved photo identification during the tour.",
  },
  {
    title: "Acceptance of terms",
    body: "By confirming the booking, guests agree to all itinerary details, terms and conditions mentioned above.",
  },
];

export function getPackage(slug: string) {
  return packages.find((p) => p.slug === slug);
}

export const inr = (n: number) => "₹" + n.toLocaleString("en-IN");
