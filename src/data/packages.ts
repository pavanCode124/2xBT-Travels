// Generated from the 2XBT package catalogue. Prices, itineraries and
// policies mirror the live booking records; regenerate rather than
// hand-editing if the catalogue changes.

export type Category = "yatra" | "himalaya" | "kerala" | "islands" | "trek";

export type ItineraryDay = {
  day: number;
  title: string;
  city: string;
  points: string[];
  timing: string;
  nightstay: string;
  meals: string[];
};

export type PriceTier = { label: string; price: number };
export type Faq = { q: string; a: string };

export type Package = {
  slug: string;
  name: string;
  heading: string;
  code: string;
  category: Category;
  days: number;
  nights: number;
  price: number;
  originalPrice: number | null;
  intro: string[];
  highlights: string[];
  travellers: string;
  image: string;
  pricing: PriceTier[];
  inclusions: string[];
  exclusions: string[];
  support: string[];
  accommodation: string;
  meals: string;
  notes: string;
  paymentKey: string;
  cancellationKey: string;
  faqKey: string;
  itinerary: ItineraryDay[];
};

/** Booking terms are identical across the catalogue. */
export const bookingTerms: string[] = [
  "1. All bookings are subject to availability and will be confirmed only after receipt of the applicable booking amount or full payment.",
  "2. By confirming the booking, the participant acknowledges that they have read, understood, and agreed to these Terms & Conditions.",
  "3. Participants must ensure they are physically and medically fit for the selected tour, trek, bike ride, or adventure activity. Any medical condition that may affect participation must be disclosed before booking.",
  "4. All participants must carry a valid Government-issued Photo ID throughout the trip.",
  "5. Participants must strictly follow the instructions of the Tour Leader, Trek Leader, Ride Captain, Driver, and support staff at all times.",
  "6. Consumption or possession of alcohol, illegal drugs, narcotics, or any intoxicating substances during the tour is strictly prohibited.",
  "7. The Company reserves the right to refuse participation or remove any participant whose behaviour is unsafe, intoxicated, abusive, or disruptive. No refund shall be provided in such cases.",
  "8. The itinerary is tentative and may be modified, postponed, or cancelled due to weather conditions, road conditions, government regulations, forest permissions, local authority restrictions, operational requirements, safety concerns, or any unforeseen circumstances.",
  "9. Hotels, camps, vehicles, bike models, transport providers, restaurants, sightseeing locations, and other services mentioned in the itinerary are subject to availability and may be replaced with similar-category alternatives without prior notice.",
  "10. Travel timings, sightseeing schedules, and activity timings are approximate and may vary due to traffic, weather, road conditions, or operational reasons.",
  "11. Adventure activities such as trekking, camping, bike riding, water sports, rafting, boating, jeep safaris, ziplining, and similar activities involve inherent risks. Participants voluntarily participate at their own risk.",
  "12. Participants must carry suitable clothing, footwear, riding gear, personal medicines, and other essentials required for the selected tour or activity.",
  "13. Participants are solely responsible for their personal belongings, luggage, cash, valuables, electronic devices, riding gear, and travel documents. The Company shall not be liable for any loss, theft, or damage.",
  "14. Littering, damaging public or private property, or violating local laws is strictly prohibited. Participants must respect nature, wildlife, religious places, and local communities.",
  "15. Any damage caused to hotel property, vehicles, bikes, camping equipment, or public/private property due to a participant's negligence or misconduct shall be recovered from the concerned participant.",
  "Package Inclusions & Exclusions",
  "16. Unless specifically mentioned under Package Inclusions, expenses such as entry tickets, permits, camera fees, adventure activities, local transport, meals, insurance, porter charges, pony charges, GST (if applicable), personal expenses, and any other services are excluded from the package cost.",
  "17. A minimum of 12 participants is required to operate Group Tours, Treks, and Group Bike Rides. If the minimum number of participants is not achieved, 2XBT (Building Boyz Tours & Travels) reserves the right to cancel or reschedule the departure.",
  "18. All Group Tours, Treks, and Group Bike Rides operate on fixed departure dates. Departure dates cannot be changed, postponed, or customized at the request of any participant.",
  "19. The Company shall not be liable for delays, cancellations, accidents, injuries, illness, baggage loss, theft, property damage, financial loss, or additional expenses arising due to natural calamities, landslides, floods, road closures, vehicle breakdowns, strikes, political unrest, pandemics, government restrictions, or any other Force Majeure event.",
  "20. Participants are advised to obtain suitable travel and medical insurance wherever applicable. The Company shall not be responsible for any medical expenses incurred during or after the tour.",
  "21. By participating in any service offered by 2XBT (Building Boyz Tours & Travels), the participant acknowledges the inherent risks involved and agrees to participate at their own responsibility.",
  "© 2025 2XBT (Building Boyz Tours & Travels). All Rights Reserved."
];

export const paymentPolicies: Record<string, string[]> = {
  "payment-1": [
    "100% at the time of Booking"
  ],
  "payment-2": [
    "50% advance payment required. 25% payable 15 days before the tour. Balance payable 2 days prior to departure."
  ],
  "payment-3": [
    "25% advance payment required. 25% payable 30 days before the tour. Balance payable 2 days prior to departure."
  ],
  "payment-4": [
    "30% Advance,",
    "40% Before 30 Days",
    "Remaining 3 Days Before the Trip"
  ],
  "payment-5": [],
};

export const cancellationPolicies: Record<string, string[]> = {
  "cancel-1": [
    "Participant Cancellation Policy",
    "All bookings are strictly non-refundable.",
    "No refund will be provided for participant cancellations, no-shows, late arrivals, early departures, missed activities, or any unused services.",
    "Bookings are non-transferable unless expressly approved in writing by 2XBT (Building Boyz Tours and Travels).",
    "Company Cancellation / Itinerary Changes",
    "If 2XBT (Building Boyz Tours and Travels) is required to cancel, postpone, modify, or curtail a tour due to adverse weather conditions, government orders, forest or local authority restrictions, road closures, natural calamities, safety concerns, operational requirements, or any other Force Majeure event beyond the Company's reasonable control:",
    "No refund or compensation shall be provided for missed sightseeing, activities, meals, accommodation, transportation, or any unused services resulting from such circumstances.",
    "The Company reserves the right to modify the itinerary, alter routes, change pickup/drop locations, replace hotels, vehicles, activities, or other services with comparable alternatives to ensure participant safety and the successful completion of the tour.",
    "Any additional expenses arising due to such changes, including but not limited to accommodation, transportation, meals, or personal expenses, shall be borne by the participant.",
    "Minimum Group Size & Company Cancellation",
    "A minimum of 18 confirmed participants is required for every trekking event organized by 2XBT (Building Boyz Tours and Travels).",
    "If the minimum group size is not achieved, the Company reserves the right to cancel the trek.",
    "In such cases, 100% of the booking amount paid to 2XBT will be refunded. No cancellation charges will be deducted.",
    "Participants will be informed of the cancellation on the day of departure by 4:00 PM via their registered mobile number, WhatsApp, or email.",
    "Refunds, where applicable, will be processed within the Company's standard refund processing timeline.",
    "2XBT (Building Boyz Tours and Travels) shall not be liable for any indirect, incidental, or consequential losses or expenses incurred by participants, including but not limited to personal travel bookings, hotel reservations, leave from work, connecting transportation, or any other personal costs arising from such cancellation.",
    "Acknowledgement",
    "By confirming a booking with 2XBT (Building Boyz Tours and Travels), the participant acknowledges that they have read, understood, and agreed to this Cancellation and Itinerary Change Policy."
  ],
  "cancel-2": [
    "A. Trekking & 2–3 Days Bike Rides / Tours",
    "- All bookings are strictly non-refundable.",
    "- No refund will be provided for cancellations, no-shows, late arrivals, early departures, missed activities, or unused services.",
    "B. Bike Rides & Tours (4 Days & Above)",
    "- The 1st Installment / Booking Amount is non-refundable.",
    "- Cancellation made 15–30 days before departure: 50% of the total tour package amount will be charged as cancellation charges.",
    "- Cancellation made within 15 days of departure: No refund will be provided.",
    "- No refund will be provided for no-shows, late arrivals, early departures, missed activities, or unused services.",
    "Company Cancellation / Itinerary Changes",
    "If 2XBT (Building Boyz Tours & Travels) is required to cancel, postpone, modify, or curtail a tour due to adverse weather conditions, government orders, forest or local authority restrictions, road closures, natural calamities, safety concerns, operational requirements, or any other Force Majeure event beyond the Company's control:",
    "- No refund or compensation shall be provided for missed sightseeing, activities, meals, accommodation, transportation, or any unused services.",
    "- The Company reserves the right to modify the itinerary, change routes, replace hotels, vehicles, activities, or services with similar alternatives to ensure participant safety and smooth operations.",
    "- Any additional expenses arising due to such changes shall be borne by the participant."
  ],
  "cancel-3": [],
};

export const faqSets: Record<string, Faq[]> = {
  "faq-1": [
    {
      "q": "What is the difficulty level of the trek?",
      "a": "The trek is moderately challenging and suitable for individuals with a reasonable level of fitness."
    },
    {
      "q": "What should I wear?",
      "a": "Wear comfortable trekking shoes, layered clothing, and a hat."
    },
    {
      "q": "Is food provided?",
      "a": "Yes, breakfast and lunch are included in the package."
    },
    {
      "q": "What if I get lost?",
      "a": "Our experienced guides will assist you and ensure your safety."
    },
    {
      "q": "Is there first aid available?",
      "a": "Yes, a first aid kit and experienced personnel are available."
    },
    {
      "q": "What is the cancellation policy?",
      "a": "Please refer to our website for details on the cancellation policy."
    },
    {
      "q": "Are there any age restrictions?",
      "a": "Minimum age is 16 years."
    },
    {
      "q": "What if the trek is cancelled due to weather?",
      "a": "We will provide a full refund or reschedule the trek."
    }
  ],
  "faq-2": [
    {
      "q": "What is included in the package?",
      "a": "The package includes airport pickup and drop, accommodation, daily breakfast and dinner, all sightseeing as per itinerary, ferry/cruise tickets, and AC vehicle for transfers and sightseeing."
    },
    {
      "q": "What is not included in the package?",
      "a": "Flight tickets, personal expenses, extra mattress/extra bed charges, and anything not mentioned under \"Package Inclusions\"."
    },
    {
      "q": "What is the cancellation policy?",
      "a": "Cancellation charges apply. Please refer to our website for details."
    },
    {
      "q": "Can I customize the itinerary?",
      "a": "Yes, we can customize the itinerary based on your preferences. Please contact us to discuss your requirements."
    },
    {
      "q": "What is the best time to visit Andaman?",
      "a": "The best time to visit Andaman is from October to May."
    },
    {
      "q": "Do children get a discount?",
      "a": "Children below 5 years are complimentary (without extra bed)."
    },
    {
      "q": "What kind of accommodation is provided?",
      "a": "Accommodation is provided in 3-4 star hotels."
    },
    {
      "q": "Is there any option for snorkeling?",
      "a": "Optional snorkeling is available at Elephant Beach (additional cost)."
    }
  ],
  "faq-3": [
    {
      "q": "What is the duration of the Kedarnath Yatra?",
      "a": "The tour is 4 Days / 3 Nights from Haridwar to Haridwar/Rishikesh."
    },
    {
      "q": "Can I upgrade my Kedarnath tent stay to a hotel stay?",
      "a": "Yes. You can upgrade your Kedarnath Tent Stay to a hotel stay by paying an additional ₹2,000 per person. The hotel accommodation will be on a 7-sharing basis, and guests will be required to adjust and share the room with other group members. This upgrade must be confirmed at the time of booking and is subject to availability."
    },
    {
      "q": "Are helicopter, pony, palki, and pithoo charges included?",
      "a": "No. Helicopter, pony, palki, and pithoo services are not included in the package. These are optional services, subject to availability, and the charges must be paid directly by the guest."
    },
    {
      "q": "Is the itinerary fixed?",
      "a": "Yes. This is a fixed group departure itinerary, and no modifications can be made at the request of individual guests. However, the itinerary may be altered by the tour operator due to weather conditions, road closures, landslides, government regulations, temple timings, or any unforeseen circumstances in the interest of guest safety. If you wish to customize the itinerary according to your preferences, we recommend booking a Customized Tour Package by contacting our team."
    },
    {
      "q": "Is this tour suitable for senior citizens?",
      "a": "Yes, provided they are medically fit for long road journeys and high-altitude travel. Those unable to trek can opt for pony, palki, or helicopter services (at their own cost)."
    },
    {
      "q": "Is the Kedarnath trek compulsory?",
      "a": "Yes. The trek is approximately 18 km (one way) from Gaurikund. Guests may alternatively hire a pony, palki, pithoo, or helicopter at their own cost."
    }
  ],
  "faq-4": [
    {
      "q": "What is included in the package price?",
      "a": "The package includes 10 nights hotel stay, 1 night Alleppey houseboat stay, 11 breakfasts, 11 dinners, lunch during houseboat stay, sightseeing & transfers by AC bus/tempo traveller, driver allowance, toll tax, parking charges & fuel, and all transfers as per the itinerary."
    },
    {
      "q": "What is not included in the package price?",
      "a": "The package excludes 5% GST, entry fees to monuments, parks, museums, temples and sightseeing attractions, adventure activities and optional experiences, train/flight fare, lunch (except houseboat lunch), personal expenses, travel insurance, additional sightseeing or vehicle usage not mentioned in the itinerary, and expenses due to unforeseen circumstances."
    },
    {
      "q": "What is the cancellation policy?",
      "a": "Cancellation charges apply. Please refer to our website for detailed cancellation policy."
    },
    {
      "q": "What is the payment policy?",
      "a": "50% advance payment required. Balance payable 30 days prior to departure."
    },
    {
      "q": "Can I customize the itinerary?",
      "a": "Yes, we can customize the itinerary to suit your preferences. Please contact us to discuss your requirements."
    },
    {
      "q": "What type of accommodation will I be staying in?",
      "a": "You will be staying in comfortable hotels and a traditional Kerala houseboat."
    },
    {
      "q": "What is the best time to visit Kerala?",
      "a": "The best time to visit Kerala is during the winter months (October to March) when the weather is pleasant."
    },
    {
      "q": "Do I need a visa to visit India?",
      "a": "Visa requirements vary depending on your nationality. Please check with the Indian embassy or consulate in your country for details."
    }
  ],
  "faq-5": [
    {
      "q": "What is included in the package?",
      "a": "The package includes airport pickup and drop, accommodation, daily breakfast and dinner, all sightseeing as per itinerary, ferry/cruise tickets, and AC vehicle for transfers and sightseeing."
    },
    {
      "q": "What is not included in the package?",
      "a": "Flight tickets, personal expenses, extra mattress/extra bed charges, and anything not mentioned under \"Package Inclusions\"."
    },
    {
      "q": "What is the cancellation policy?",
      "a": "Cancellation charges apply. Please refer to our website for details."
    },
    {
      "q": "Can I customize the itinerary?",
      "a": "Yes, we can customize the itinerary based on your preferences. Please contact us to discuss your requirements."
    },
    {
      "q": "What is the best time to visit Andaman?",
      "a": "The best time to visit Andaman is from October to May."
    },
    {
      "q": "Do children get a discount?",
      "a": "Children below 5 years are complimentary (without extra bed)."
    },
    {
      "q": "What kind of accommodation is provided?",
      "a": "Accommodation is provided in 2-3 star hotels."
    }
  ],
  "faq-6": [
    {
      "q": "What is the duration of the Kedarnath Yatra?",
      "a": "The tour is 6 Days / 5 Nights from Delhi to Delhi."
    },
    {
      "q": "Can I upgrade my Kedarnath tent stay to a hotel stay?",
      "a": "Yes. You can upgrade your Kedarnath Tent Stay to a hotel stay by paying an additional ₹2,000 per person. The hotel accommodation will be on a 7-sharing basis, and guests will be required to adjust and share the room with other group members. This upgrade must be confirmed at the time of booking and is subject to availability."
    },
    {
      "q": "Are helicopter, pony, palki, and pithoo charges included?",
      "a": "No. Helicopter, pony, palki, and pithoo services are not included in the package. These are optional services, subject to availability, and the charges must be paid directly by the guest."
    },
    {
      "q": "Is the itinerary fixed?",
      "a": "Yes. This is a fixed group departure itinerary, and no modifications can be made at the request of individual guests. However, the itinerary may be altered by the tour operator due to weather conditions, road closures, landslides, government regulations, temple timings, or any unforeseen circumstances in the interest of guest safety. If you wish to customize the itinerary according to your preferences, we recommend booking a Customized Tour Package by contacting our team."
    },
    {
      "q": "Is this tour suitable for senior citizens?",
      "a": "Yes, provided they are medically fit for long road journeys and high-altitude travel. Those unable to trek can opt for pony, palki, or helicopter services (at their own cost)."
    },
    {
      "q": "Is the Kedarnath trek compulsory?",
      "a": "Yes. The trek is approximately 18 km (one way) from Gaurikund. Guests may alternatively hire a pony, palki, pithoo, or helicopter at their own cost."
    }
  ],
  "faq-7": [
    {
      "q": "What is not included in the package price?",
      "a": "The package excludes 5% GST, entry fees to monuments, parks, museums, temples and sightseeing attractions, adventure activities and optional experiences, train/flight fare, lunch (except houseboat lunch), personal expenses, travel insurance, additional sightseeing or vehicle usage not mentioned in the itinerary, and expenses due to unforeseen circumstances."
    },
    {
      "q": "What is the cancellation policy?",
      "a": "Cancellation charges apply. Please refer to our website for detailed cancellation policy."
    },
    {
      "q": "What is the payment policy?",
      "a": "30% advance payment required. Balance payable 30 days prior to departure."
    },
    {
      "q": "Can I customize the itinerary?",
      "a": "Yes, we can customize the itinerary to suit your preferences. Please contact us to discuss your requirements."
    },
    {
      "q": "What type of accommodation will I be staying in?",
      "a": "You will be staying in comfortable hotels and a traditional Kerala houseboat."
    },
    {
      "q": "What is the best time to visit Kerala?",
      "a": "The best time to visit Kerala is during the winter months (October to March) when the weather is pleasant."
    },
    {
      "q": "Do I need a visa to visit India?",
      "a": "Visa requirements vary depending on your nationality. Please check with the Indian embassy or consulate in your country for details."
    }
  ],
  "faq-8": [
    {
      "q": "What is the duration of the Do Dham Yatra?",
      "a": "The tour is 7 Days / 6 Nights from Haridwar to Haridwar/Rishikesh."
    },
    {
      "q": "Can I upgrade my Kedarnath tent stay to a hotel stay?",
      "a": "Yes. You can upgrade your Kedarnath Tent Stay to a hotel stay by paying an additional ₹2,000 per person. The hotel accommodation will be on a 7-sharing basis, and guests will be required to adjust and share the room with other group members. This upgrade must be confirmed at the time of booking and is subject to availability."
    },
    {
      "q": "Are helicopter, pony, palki, and pithoo charges included?",
      "a": "No. Helicopter, pony, palki, and pithoo services are not included in the package. These are optional services, subject to availability, and the charges must be paid directly by the guest."
    },
    {
      "q": "Is the itinerary fixed?",
      "a": "Yes. This is a fixed group departure itinerary, and no modifications can be made at the request of individual guests. However, the itinerary may be altered by the tour operator due to weather conditions, road closures, landslides, government regulations, temple timings, or any unforeseen circumstances in the interest of guest safety. If you wish to customize the itinerary according to your preferences, we recommend booking a Customized Tour Package by contacting our team."
    },
    {
      "q": "Is this tour suitable for senior citizens?",
      "a": "Yes, provided they are medically fit for long road journeys and high-altitude travel. Those unable to trek can opt for pony, palki, or helicopter services (at their own cost)."
    },
    {
      "q": "Is the Kedarnath trek compulsory?",
      "a": "Yes. The trek is approximately 18 km (one way) from Gaurikund. Guests may alternatively hire a pony, palki, pithoo, or helicopter at their own cost."
    }
  ],
  "faq-9": [
    {
      "q": "What is the difficulty level of the trek?",
      "a": "The trek is considered moderate, requiring a good level of fitness."
    },
    {
      "q": "What should I pack for the trek?",
      "a": "Pack layers of clothing, sturdy trekking boots, a waterproof jacket, and sunscreen."
    },
    {
      "q": "Is there internet access during the trek?",
      "a": "Internet access is limited and unreliable in the mountains."
    },
    {
      "q": "What kind of accommodation will I have?",
      "a": "You will be staying in tea houses and hotels along the route."
    },
    {
      "q": "Do I need a visa for Nepal?",
      "a": "Yes, you will need a visa to enter Nepal. Please check the latest visa requirements before your trip."
    }
  ],
  "faq-10": [
    {
      "q": "What is the duration of the Do Dham Yatra?",
      "a": "The tour is 9 Days / 8 Nights from Delhi to Delhi."
    },
    {
      "q": "Can I upgrade my Kedarnath tent stay to a hotel stay?",
      "a": "Yes. You can upgrade your Kedarnath Tent Stay to a hotel stay by paying an additional ₹2,000 per person. The hotel accommodation will be on a 7-sharing basis, and guests will be required to adjust and share the room with other group members. This upgrade must be confirmed at the time of booking and is subject to availability."
    },
    {
      "q": "Are helicopter, pony, palki, and pithoo charges included?",
      "a": "No. Helicopter, pony, palki, and pithoo services are not included in the package. These are optional services, subject to availability, and the charges must be paid directly by the guest."
    },
    {
      "q": "Is the itinerary fixed?",
      "a": "Yes. This is a fixed group departure itinerary, and no modifications can be made at the request of individual guests. However, the itinerary may be altered by the tour operator due to weather conditions, road closures, landslides, government regulations, temple timings, or any unforeseen circumstances in the interest of guest safety. If you wish to customize the itinerary according to your preferences, we recommend booking a Customized Tour Package by contacting our team."
    },
    {
      "q": "Is this tour suitable for senior citizens?",
      "a": "Yes, provided they are medically fit for long road journeys and high-altitude travel. Those unable to trek can opt for pony, palki, or helicopter services (at their own cost)."
    },
    {
      "q": "Is the Kedarnath trek compulsory?",
      "a": "Yes. The trek is approximately 18 km (one way) from Gaurikund. Guests may alternatively hire a pony, palki, pithoo, or helicopter at their own cost."
    }
  ],
  "faq-11": [
    {
      "q": "What is the duration of the Char Dham Yatra?",
      "a": "The tour is 11 Days / 10 Nights from Haridwar to Haridwar."
    },
    {
      "q": "Can I upgrade my Kedarnath tent stay to a hotel stay?",
      "a": "Yes. You can upgrade your Kedarnath Tent Stay to a hotel stay by paying an additional ₹2,000 per person. The hotel accommodation will be on a 7-sharing basis, and guests will be required to adjust and share the room with other group members. This upgrade must be confirmed at the time of booking and is subject to availability."
    },
    {
      "q": "Are helicopter, pony, palki, and pithoo charges included?",
      "a": "No. Helicopter, pony, palki, and pithoo services are not included in the package. These are optional services, subject to availability, and the charges must be paid directly by the guest."
    },
    {
      "q": "Is the itinerary fixed?",
      "a": "Yes. This is a fixed group departure itinerary, and no modifications can be made at the request of individual guests. However, the itinerary may be altered by the tour operator due to weather conditions, road closures, landslides, government regulations, temple timings, or any unforeseen circumstances in the interest of guest safety. If you wish to customize the itinerary according to your preferences, we recommend booking a Customized Tour Package by contacting our team."
    },
    {
      "q": "Is this tour suitable for senior citizens?",
      "a": "Yes, provided they are medically fit for long road journeys and high-altitude travel. Those unable to trek can opt for pony, palki, or helicopter services (at their own cost)."
    },
    {
      "q": "Is the Kedarnath trek compulsory?",
      "a": "Yes. The trek is approximately 18 km (one way) from Gaurikund. Guests may alternatively hire a pony, palki, pithoo, or helicopter at their own cost."
    }
  ],
  "faq-12": [
    {
      "q": "What is the duration of the Char Dham Yatra?",
      "a": "The tour is 13 Days / 12 Nights from Delhi to Delhi."
    },
    {
      "q": "Can I upgrade my Kedarnath tent stay to a hotel stay?",
      "a": "Yes. You can upgrade your Kedarnath Tent Stay to a hotel stay by paying an additional ₹2,000 per person. The hotel accommodation will be on a 7-sharing basis, and guests will be required to adjust and share the room with other group members. This upgrade must be confirmed at the time of booking and is subject to availability."
    },
    {
      "q": "Are helicopter, pony, palki, and pithoo charges included?",
      "a": "No. Helicopter, pony, palki, and pithoo services are not included in the package. These are optional services, subject to availability, and the charges must be paid directly by the guest."
    },
    {
      "q": "Is the itinerary fixed?",
      "a": "Yes. This is a fixed group departure itinerary, and no modifications can be made at the request of individual guests. However, the itinerary may be altered by the tour operator due to weather conditions, road closures, landslides, government regulations, temple timings, or any unforeseen circumstances in the interest of guest safety. If you wish to customize the itinerary according to your preferences, we recommend booking a Customized Tour Package by contacting our team."
    },
    {
      "q": "Is this tour suitable for senior citizens?",
      "a": "Yes, provided they are medically fit for long road journeys and high-altitude travel. Those unable to trek can opt for pony, palki, or helicopter services (at their own cost)."
    },
    {
      "q": "Is the Kedarnath trek compulsory?",
      "a": "Yes. The trek is approximately 18 km (one way) from Gaurikund. Guests may alternatively hire a pony, palki, pithoo, or helicopter at their own cost."
    }
  ],
};

export const packages: Package[] = [
  {
    "slug": "aadrai-jungle-trek",
    "name": "Aadrai Jungle Trek",
    "heading": "Mumbai Jungle Adventure",
    "code": "AADRAI-JUNGL",
    "category": "trek",
    "days": 2,
    "nights": 1,
    "price": 1499,
    "originalPrice": 2000,
    "intro": [
      "Embark on an unforgettable jungle trek from Mumbai! Journey through lush landscapes, cascading waterfalls, and scenic viewpoints. Our experienced guides will lead you on an adventure filled with exploration, relaxation, and stunning photo opportunities. Create lifetime memories in the heart of nature."
    ],
    "highlights": [
      "Explore Dense Forests 🏞️ Discover Waterfalls 📸 Capture Memories 👨‍⚕️ Experienced Guides 🚌 Comfortable Travel"
    ],
    "travellers": "Adventure Seekers & Nature Lovers",
    "image": "/images/tours/aadrai-jungle-trek.webp",
    "pricing": [
      {
        "label": "Male",
        "price": 1499
      },
      {
        "label": "Female",
        "price": 1399
      },
      {
        "label": "Group (5+) Males",
        "price": 1399
      },
      {
        "label": "Group (5+) Females",
        "price": 1299
      }
    ],
    "inclusions": [
      "Comfortable AC Bus Travel",
      "Breakfast & Lunch",
      "Experienced Trek Leaders",
      "First Aid Support",
      "Friendly Group Experience",
      "Photography Opportunities",
      "Safe & Secure Travel",
      "Lifetime Memories",
      "Zero Hidden Charges",
      "Women's Safety Priority",
      "Friendly Travel Community",
      "Comfortable Transportation",
      "Well-Planned & Organized Trips"
    ],
    "exclusions": [
      "Flight Tickets",
      "Personal Expenses",
      "Extra Mattress/Extra Bed Charges",
      "Anything not mentioned under \"Package Inclusions\"",
      "Adventure activities & optional experiences (boating, safari, elephant ride, cultural shows, cable car, etc.)",
      "Lunch & any meals not mentioned in inclusions",
      "Personal expenses (shopping, tips, laundry, phone calls, etc.)",
      "Entry fees to monuments, parks, museums & sightseeing spots",
      "Anything not specifically mentioned in “Package Includes”"
    ],
    "support": [
      "Experienced First Aid Team 🧭 Local Guides 🛡️ Safety Protocols 📞 Emergency Contacts"
    ],
    "accommodation": "No Accommodation Will Provided",
    "meals": "Breakfast & Lunch included.",
    "notes": "This itinerary is designed for a thrilling jungle experience. Please wear comfortable trekking shoes and clothing. Pack essentials like sunscreen, insect repellent, and a hat.",
    "paymentKey": "payment-1",
    "cancellationKey": "cancel-1",
    "faqKey": "faq-1",
    "itinerary": [
      {
        "day": 1,
        "title": "Mumbai Pickup",
        "city": "Mumbai",
        "points": [
          "Mumbai Pickup",
          "9:00 PM – Borivali",
          "9:20 PM – Andheri",
          "9:40 PM – Bandra East",
          "10:00 PM – Dadar",
          "10:30 PM – Sion",
          "10:40 PM – Kurla",
          "10:50 PM – Ghatkopar",
          "11:00 PM – Mulund",
          "11:20 PM – Thane"
        ],
        "timing": "9:00 PM - 11:00 PM",
        "nightstay": "",
        "meals": []
      },
      {
        "day": 2,
        "title": "Trek Day",
        "city": "Aadrai Jungle",
        "points": [
          "Trek Day",
          "03:00 AM – 04:00 AM – Reach Base Village",
          "04:00 AM – 05:00 AM – Breakfast & Freshen Up",
          "05:00 AM – Trek Briefing by Trek Leaders",
          "Start Aadrai Jungle Trek",
          "Trek through the dense forest, waterfalls, streams, and scenic viewpoints",
          "Explore, Relax & Capture Amazing Memories",
          "11:00 AM – Begin Descending",
          "02:00 PM – 03:00 PM – Reach Base Village",
          "03:00 PM – Lunch",
          "Begin Return Journey to Mumbai"
        ],
        "timing": "03:00 AM - 02:00 PM",
        "nightstay": "Overnight at base village",
        "meals": [
          "Breakfast",
          "Lunch"
        ]
      }
    ]
  },
  {
    "slug": "raigad-fort",
    "name": "Raigad Fort",
    "heading": "🏰 RAIGAD FORT TREKKING 2026 🏰",
    "code": "RAIGAD-FORT",
    "category": "trek",
    "days": 2,
    "nights": 1,
    "price": 1799,
    "originalPrice": 2000,
    "intro": [
      "\"The Pride of Chhatrapati Shivaji Maharaj's Capital\" ⚔️",
      "Join 2XBT – Building Boyz Tours & Travels for an unforgettable monsoon trek to the majestic Raigad Fort, the historic capital of the Maratha Empire. Experience breathtaking mountain views, lush greenery, ancient architecture, and the glorious legacy of Chhatrapati Shivaji Maharaj with our experienced trek leaders.",
      "📅 Trek Date:",
      "🗓️ 18–19 July 2026"
    ],
    "highlights": [
      "The Pride of Chhatrapati Shivaji Maharaj's Capital\" ⚔️",
      "Join 2XBT – Building Boyz Tours & Travels for an unforgettable monsoon trek to the majestic Raigad Fort, the historic capital of the Maratha Empire. Experience breathtaking mountain views, lush greenery, ancient architecture, and the glorious legacy of Chhatrapati Shivaji Maharaj with our experienced trek leaders."
    ],
    "travellers": "",
    "image": "/images/tours/raigad-fort.webp",
    "pricing": [
      {
        "label": "FEMALES",
        "price": 1699
      },
      {
        "label": "Males",
        "price": 1799
      }
    ],
    "inclusions": [
      "AC Bus Pickup & Drop (Mumbai, Suburban & Navi Mumbai)",
      "Breakfast",
      "Veg & Non-Veg Lunch",
      "Raigad Fort Entry Fees",
      "Experienced Trek Leader",
      "First Aid Support",
      "Safety Assistance",
      "Group Photography",
      "Toll, Parking & Driver Charges"
    ],
    "exclusions": [
      "Personal expenses, meals not mentioned, and beverages.",
      "Entry fees, activity charges, permits, and guide charges unless specifically included.",
      "Travel to/from the pickup point unless mentioned in the package.",
      "Travel/medical insurance, medication, and emergency evacuation costs.",
      "Porter, mule, luggage-carrying, and camping-equipment rental charges.",
      "Expenses caused by weather, roadblocks, route changes, delays, or other circumstances beyond our control.",
      "Any service not explicitly listed under “Inclusions.”"
    ],
    "support": [
      "Get ready to conquer the legendary Raigad Fort and create unforgettable memories this monsoon with 2XBT – Building Boyz Tours & Travels!"
    ],
    "accommodation": "No Accomodation",
    "meals": "Breakfast & Lunch",
    "notes": "",
    "paymentKey": "payment-2",
    "cancellationKey": "cancel-2",
    "faqKey": "faq-2",
    "itinerary": [
      {
        "day": 1,
        "title": "Pickup from Point",
        "city": "Mumbai",
        "points": [
          "Pickup Schedule",
          "8:00 PM – Borivali",
          "8:10 PM – Goregaon",
          "8:20 PM – Andheri",
          "8:30 PM – Santacruz",
          "8:40 PM – Bandra East",
          "9:00 PM – Dadar",
          "9:30 PM – Sion",
          "9:40 PM – Kurla",
          "9:50 PM – Ghatkopar",
          "10:00 PM – Bhandup",
          "10:10 PM – Airoli",
          "10:20 PM – Ghansoli",
          "10:30 PM – Kopar Khairane",
          "10:40 PM – Juinagar",
          "10:50 PM – Nerul",
          "11:00 PM – Belapur",
          "11:10 PM – Kalamboli",
          "11:30 PM – Panvel"
        ],
        "timing": "",
        "nightstay": "",
        "meals": []
      },
      {
        "day": 2,
        "title": "RAIGAD FORT TREKKING 19 July 2023",
        "city": "Raigad Fort",
        "points": [
          "3:00 AM – Reach Base Village",
          "3:00–4:00 AM – Breakfast",
          "4:00 AM – Start Trek",
          "8:00 AM – Reach Raigad Fort & Explore",
          "12:00 PM – Start Descending",
          "3:00 PM – Reach Base Village",
          "3:00–4:00 PM – Lunch",
          "5:00 PM – Return Journey to Mumbai",
          "Estimated Drop Timings",
          "8:00 PM – Panvel",
          "8:20 PM – Kalamboli",
          "8:30 PM – Belapur",
          "8:40 PM – Nerul",
          "8:50 PM – Juinagar",
          "9:00 PM – Kopar Khairane",
          "9:10 PM – Ghansoli",
          "9:20 PM – Airoli",
          "9:30 PM – Bhandup",
          "9:40 PM – Ghatkopar",
          "9:50 PM – Kurla",
          "10:00 PM – Sion",
          "10:20 PM – Dadar",
          "10:40 PM – Bandra East",
          "10:50 PM – Santacruz",
          "11:00 PM – Andheri",
          "11:10 PM – Goregaon",
          "11:20 PM – Borivali"
        ],
        "timing": "",
        "nightstay": "",
        "meals": [
          "Breakfast",
          "Lunch"
        ]
      }
    ]
  },
  {
    "slug": "ujjain-omkareshwar-2d1n",
    "name": "Ujjain & Omkareshwar 2D/1N",
    "heading": "4 Days Ujjain & Omkareshwar",
    "code": "UJJAIN-OMKAR-4",
    "category": "yatra",
    "days": 2,
    "nights": 1,
    "price": 3000,
    "originalPrice": 5000,
    "intro": [
      "Experience a spiritually enriching and",
      "culturally vibrant journey to Odisha’s most",
      "iconic destinations. Seek divine blessings",
      "at Shree Jagannath Temple (Char Dham) in",
      "Puri, explore the ancient temples of",
      "Bhubaneswar – the Temple City of India,",
      "and witness the architectural brilliance of",
      "the Konark Sun Temple (UNESCO World",
      "Heritage Site). This tour perfectly blends",
      "devotion, heritage, and coastal beauty,",
      "offering a memorable travel experience",
      "from Mumbai to Mumbai."
    ],
    "highlights": [
      "Explore ancient temples, serene beaches, and vibrant coastal towns. Immerse yourself in rich culture and spirituality. Enjoy comfortable accommodations and seamless travel. Discover the beauty of central India."
    ],
    "travellers": "Couples / Families",
    "image": "/images/tours/ujjain-omkareshwar-maheshwar-indore-4d3n.webp",
    "pricing": [
      {
        "label": "Quad / Triple Sharing",
        "price": 3000
      },
      {
        "label": "Double Sharing",
        "price": 3500
      }
    ],
    "inclusions": [
      "Accommodation in selected hotels as per the itinerary",
      "Daily Breakfast & Dinner",
      "All sightseeing as mentioned in the itinerary",
      "Private AC Vehicle for transfers and sightseeing — Car / Tempo Traveler / Bus as per group size",
      "Pickup from Ujjain Railway Station / Bus Stand by Auto / E-Rickshaw",
      "Ujjain local sightseeing by Auto / E-Rickshaw",
      "Drop at Indore Railway Station",
      "Children below 5 years are complimentary, without an extra bed & Seat in Vehicle"
    ],
    "exclusions": [
      "5% GST",
      "Train / Bus / Flight tickets",
      "Lunch and personal meals",
      "Packaged drinking water / water bottles",
      "Cold drinks, soft drinks and other beverages",
      "Temple Darshan / VIP Darshan / Puja charges",
      "Entry tickets, monument charges and camera fees",
      "Boating charges at Omkareshwar",
      "Personal expenses such as laundry, telephone calls, room service, shopping, etc.",
      "Travel insurance",
      "Any expenses arising due to delays, natural calamities or unforeseen circumstances",
      "Anything not specifically mentioned under Inclusions"
    ],
    "support": [
      "Dedicated support team available throughout your journey. Assistance with travel arrangements and local inquiries. Emergency assistance in case of unforeseen circumstances. Experienced guides to enhance your experience."
    ],
    "accommodation": "1 Nights Hotel Stay",
    "meals": "1 Breakfast & 1 Dinner Included",
    "notes": "Package includes transportation between Ujjain, Omkareshwar, and Maheshwar. Sightseeing tours will be conducted by a local guide. This itinerary is subject to change based on weather conditions or unforeseen circumstances.",
    "paymentKey": "payment-2",
    "cancellationKey": "cancel-2",
    "faqKey": "faq-2",
    "itinerary": [
      {
        "day": 1,
        "title": "Ujjain",
        "city": "Ujjain",
        "points": [
          "Arrive at Ujjain Railway Station / Bus Stand and proceed to the hotel by Auto / E-Rickshaw, subject to availability. Complete the check-in formalities and freshen up.",
          "Afterward, begin your Ujjain local sightseeing by Auto / E-Rickshaw, covering Kal Bhairav Temple, Gadkalika Temple, Shantibani Ashram and Mangalnath Temple.",
          "In the evening, visit Ram Ghat to experience the spiritual atmosphere and attend the beautiful Shipra River Aarti. After the Aarti, proceed to Harsiddhi Mata Temple for darshan and blessings.",
          "Continue to Mahakal Lok Corridor and then visit Shri Mahakaleshwar Jyotirlinga Temple for darshan. After completing the sightseeing and temple visits, return to the hotel for an overnight stay in Ujjain."
        ],
        "timing": "Full Day",
        "nightstay": "Ujjain",
        "meals": [
          "Dinner"
        ]
      },
      {
        "day": 2,
        "title": "Ujjain → Omkareshwar → Indore",
        "city": "Omkareshwar Sightseeing",
        "points": [
          "After breakfast, check out from the hotel and start your journey towards Omkareshwar by private AC vehicle (Car / Tempo Traveller / Bus as per group size).",
          "Upon arrival, visit the sacred Omkareshwar Jyotirlinga Temple and Mamleshwar Temple for darshan. Later, enjoy the scenic surroundings of the Narmada River, with an option to experience boating, followed by a visit to the magnificent Statue of Adi Shankaracharya.",
          "After completing the Omkareshwar sightseeing, proceed towards Indore by private AC vehicle. On arrival, you will be dropped at Indore Railway Station as per your onward travel schedule, marking the end of the tour."
        ],
        "timing": "Full Day",
        "nightstay": "",
        "meals": [
          "Breakfast"
        ]
      }
    ]
  },
  {
    "slug": "ujjain-omkareshwar-indore-3d2n",
    "name": "Ujjain Omkareshwar & Indore 3D/2N",
    "heading": "3 Days Ujjain, Omkareshwar & Indore",
    "code": "UJJAIN-OMKAR-3",
    "category": "yatra",
    "days": 3,
    "nights": 2,
    "price": 5000,
    "originalPrice": 10000,
    "intro": [
      "Experience a spiritually enriching and",
      "culturally vibrant journey to Odisha’s most",
      "iconic destinations. Seek divine blessings",
      "at Shree Jagannath Temple (Char Dham) in",
      "Puri, explore the ancient temples of",
      "Bhubaneswar – the Temple City of India,",
      "and witness the architectural brilliance of",
      "the Konark Sun Temple (UNESCO World",
      "Heritage Site). This tour perfectly blends",
      "devotion, heritage, and coastal beauty,",
      "offering a memorable travel experience",
      "from Mumbai to Mumbai."
    ],
    "highlights": [
      "Explore ancient temples, serene beaches, and vibrant coastal towns. Immerse yourself in rich culture and spirituality. Enjoy comfortable accommodations and seamless travel. Discover the beauty of central India."
    ],
    "travellers": "Couples / Families",
    "image": "/images/tours/ujjain-omkareshwar-maheshwar-indore-4d3n.webp",
    "pricing": [
      {
        "label": "Quad / Triple Sharing",
        "price": 5000
      },
      {
        "label": "Double Sharing",
        "price": 5500
      }
    ],
    "inclusions": [
      "Accommodation in selected hotels as per the itinerary",
      "Daily Breakfast & Dinner",
      "All sightseeing as mentioned in the itinerary",
      "Private AC Vehicle for all transfers and sightseeing — Car / Tempo Traveller / Bus as per group size",
      "Pickup from Ujjain Railway Station / Bus Stand by Auto / E-Rickshaw",
      "Ujjain local sightseeing by Auto / E-Rickshaw",
      "Pickup & Drop from Railway Station / Bus Stand",
      "Children below 5 years are complimentary, without an extra bed & Seat in Vehicle."
    ],
    "exclusions": [
      "5% GST",
      "Train / Bus / Flight tickets",
      "Lunch and personal meals",
      "Dinner on Indore Stay",
      "Packaged drinking water / water bottles",
      "Cold drinks, soft drinks and other beverages",
      "Temple Darshan / VIP Darshan / Puja charges",
      "Entry tickets, monument charges and camera fees",
      "Boating charges at Omkareshwar",
      "Food and beverages at Sarafa Bazaar / Chappan Dukan",
      "Shopping expenses, including Namkeen and sweets",
      "Personal expenses such as laundry, telephone calls, room service, etc.",
      "Travel insurance",
      "Any expenses arising due to delays, natural calamities or unforeseen circumstances",
      "Anything not specifically mentioned under Inclusions"
    ],
    "support": [
      "Dedicated support team available throughout your journey. Assistance with travel arrangements and local inquiries. Emergency assistance in case of unforeseen circumstances. Experienced guides to enhance your experience."
    ],
    "accommodation": "2 Nights Hotel Stay",
    "meals": "2 Breakfast & 1 Dinner Included",
    "notes": "Package includes transportation between Ujjain, Omkareshwar, and Maheshwar. Sightseeing tours will be conducted by a local guide. This itinerary is subject to change based on weather conditions or unforeseen circumstances.",
    "paymentKey": "payment-2",
    "cancellationKey": "cancel-2",
    "faqKey": "faq-2",
    "itinerary": [
      {
        "day": 1,
        "title": "Ujjain",
        "city": "Ujjain",
        "points": [
          "Arrive at Ujjain Railway Station / Bus Stand and proceed to the hotel by Auto / E-Rickshaw, subject to availability. Complete the check-in formalities and freshen up.",
          "Afterward, begin your Ujjain local sightseeing by Auto / E-Rickshaw, covering Kal Bhairav Temple, Gadkalika Temple, Shantibani Ashram and Mangalnath Temple.",
          "In the evening, visit Ram Ghat to experience the spiritual atmosphere and attend the beautiful Shipra River Aarti. After the Aarti, proceed to Harsiddhi Mata Temple for darshan and blessings.",
          "Continue to Mahakal Lok Corridor and then visit Shri Mahakaleshwar Jyotirlinga Temple for darshan. After completing the sightseeing and temple visits, return to the hotel for an overnight stay in Ujjain."
        ],
        "timing": "Full Day",
        "nightstay": "Ujjain",
        "meals": [
          "Dinner"
        ]
      },
      {
        "day": 2,
        "title": "Ujjain → Omkareshwar → Indore",
        "city": "Omkareshwar",
        "points": [
          "After breakfast, check out from the hotel and start your journey towards Omkareshwar by private AC vehicle (Car / Tempo Traveller / Bus as per group size).",
          "Upon arrival, visit the sacred Omkareshwar Jyotirlinga Temple and Mamleshwar Temple for darshan. Later, enjoy the scenic surroundings of the Narmada River, followed by a visit to the magnificent Statue of Adi Shankaracharya. After completing the sightseeing and temple visits, proceed towards Indore by private AC vehicle.",
          "On arrival in Indore, check in to the hotel and freshen up.",
          "In the evening, visit the famous Sarafa Bazaar, known for its vibrant atmosphere and delicious local street food. Enjoy the variety of Indore’s popular street-food delicacies and explore the lively market. Later, return to the hotel and relax for an overnight stay in Indore."
        ],
        "timing": "Full Day",
        "nightstay": "Indore",
        "meals": [
          "Breakfast"
        ]
      },
      {
        "day": 3,
        "title": "Indore Depature",
        "city": "Indore",
        "points": [
          "After breakfast, check out from the hotel and begin your Indore local sightseeing. Visit the historic Rajwada Palace, a magnificent symbol of the Holkar dynasty, followed by a visit to the beautiful Lal Bagh Palace.",
          "Later, seek blessings at the famous Khajrana Ganesh Temple. Continue your sightseeing with a visit to Chappan Dukan (56 Dukan), one of Indore’s popular food destinations, where you can enjoy local snacks and specialties. If time permits, you may also shop for famous Indore Namkeen and sweets.",
          "Later, proceed for your onward journey with a drop at Indore Railway Station."
        ],
        "timing": "Half Day",
        "nightstay": "",
        "meals": [
          "Breakfast"
        ]
      }
    ]
  },
  {
    "slug": "ujjain-omkareshwar-maheshwar-3d2n",
    "name": "Ujjain Omkareshwar Maheshwar 3D/2N",
    "heading": "3 Days Ujjain & Coastal Escape",
    "code": "UJJAIN-OMKAR",
    "category": "yatra",
    "days": 3,
    "nights": 2,
    "price": 5500,
    "originalPrice": 7999,
    "intro": [
      "Experience a spiritually enriching and",
      "culturally vibrant journey to Odisha’s most",
      "iconic destinations. Seek divine blessings",
      "at Shree Jagannath Temple (Char Dham) in",
      "Puri, explore the ancient temples of",
      "Bhubaneswar – the Temple City of India,",
      "and witness the architectural brilliance of",
      "the Konark Sun Temple (UNESCO World",
      "Heritage Site). This tour perfectly blends",
      "devotion, heritage, and coastal beauty,",
      "offering a memorable travel experience",
      "from Mumbai to Mumbai."
    ],
    "highlights": [
      "Explore ancient temples, serene beaches, and vibrant coastal towns. Immerse yourself in rich culture and spirituality. Enjoy comfortable accommodations and seamless travel. Discover the beauty of central India."
    ],
    "travellers": "Couples / Families",
    "image": "/images/tours/ujjain-omkareshwar-maheshwar-indore-4d3n.webp",
    "pricing": [
      {
        "label": "Quad / Triple Sharing",
        "price": 5500
      },
      {
        "label": "Double Sharing",
        "price": 6000
      }
    ],
    "inclusions": [
      "Accommodation in selected hotels as per the itinerary",
      "Daily Breakfast & Dinner",
      "All sightseeing as mentioned in the itinerary",
      "Private AC Vehicle for all transfers and sightseeing — Car / Tempo Traveller / Bus as per group size",
      "Pickup from Ujjain Railway Station / Bus Stand by Auto / E-Rickshaw",
      "Ujjain local sightseeing by Auto / E-Rickshaw",
      "Pickup & Drop from Railway Station / Bus Stand",
      "Children below 5 years are complimentary, without an extra bed & Seat In Vehicle"
    ],
    "exclusions": [
      "5% GST, if applicable",
      "Train / Bus / Flight tickets",
      "Lunch and personal meals",
      "Dinner at Indore stay",
      "Packaged drinking water / water bottles",
      "Cold drinks, soft drinks and other beverages",
      "Temple Darshan / VIP Darshan / Puja charges",
      "Entry tickets, monument charges and camera fees",
      "Boating charges at Omkareshwar",
      "Food and beverages at Sarafa Bazaar / Chappan Dukan",
      "Shopping expenses, including Namkeen and sweets",
      "Personal expenses such as laundry, telephone calls, room service, etc.",
      "Travel insurance",
      "Any expenses arising due to delays, natural calamities or unforeseen circumstances",
      "Anything not specifically mentioned under Inclusions"
    ],
    "support": [
      "Dedicated support team available throughout your journey. Assistance with travel arrangements and local inquiries. Emergency assistance in case of unforeseen circumstances. Experienced guides to enhance your experience."
    ],
    "accommodation": "2 Nights Hotel Stay.",
    "meals": "2 Breakfast & 2 Dinner Included",
    "notes": "Package includes transportation between Ujjain, Omkareshwar, and Maheshwar. Sightseeing tours will be conducted by a local guide. This itinerary is subject to change based on weather conditions or unforeseen circumstances.",
    "paymentKey": "payment-2",
    "cancellationKey": "cancel-2",
    "faqKey": "faq-2",
    "itinerary": [
      {
        "day": 1,
        "title": "Ujjain",
        "city": "Ujjain",
        "points": [
          "Arrive at Ujjain Railway Station / Bus Stand and proceed to the hotel by Auto / E-Rickshaw, subject to availability. Complete the check-in formalities and freshen up.",
          "Afterward, begin your Ujjain local sightseeing by Auto / E-Rickshaw, covering Kal Bhairav Temple, Gadkalika Temple, Shantibani Ashram and Mangalnath Temple.",
          "In the evening, visit Ram Ghat to experience the spiritual atmosphere and attend the beautiful Shipra River Aarti. After the Aarti, proceed to Harsiddhi Mata Temple for darshan and blessings.",
          "Continue to Mahakal Lok Corridor and then visit Shri Mahakaleshwar Jyotirlinga Temple for darshan. After completing the sightseeing and temple visits, return to the hotel for an overnight stay in Ujjain."
        ],
        "timing": "Full Day",
        "nightstay": "Ujjain",
        "meals": [
          "Dinner"
        ]
      },
      {
        "day": 2,
        "title": "Ujjain → Omkareshwar → Maheshwar",
        "city": "Omkareshwar",
        "points": [
          "After breakfast, check out from the hotel and start your journey towards Omkareshwar by private AC vehicle (Car / Tempo Traveller / Bus as per group size).",
          "Upon arrival, visit the sacred Omkareshwar Jyotirlinga Temple and Mamleshwar Temple for darshan. Later, enjoy the scenic surroundings of the Narmada River, followed by a visit to the magnificent Statue of Adi Shankaracharya. After completing the sightseeing and temple visits, proceed towards Indore by private AC vehicle.",
          "On arrival in Indore, check in to the hotel and freshen up.",
          "In the evening, visit the famous Sarafa Bazaar, known for its vibrant atmosphere and delicious local street food. Enjoy the variety of Indore’s popular street-food delicacies and explore the lively market. Later, return to the hotel and relax for an overnight stay in Indore."
        ],
        "timing": "Full Day",
        "nightstay": "Indore",
        "meals": [
          "Breakfast"
        ]
      },
      {
        "day": 3,
        "title": "Maheshwar → Indore",
        "city": "Maheshwar",
        "points": [
          "Early morning, visit the historic Maheshwar Fort & Palace, beautifully situated on the banks of the Narmada River. Explore the magnificent fort complex and the Ahilya Palace, associated with Maharani Ahilyabai Holkar. Admire the traditional architecture, royal courtyards, ancient structures and the beautiful views of the Narmada River from the fort. Also visit the temples located within and around the fort complex, including the Ahilyeshwar Temple, and spend some peaceful time along the riverside ghats.",
          "After completing the Maheshwar sightseeing, return to the hotel for breakfast.",
          "After breakfast, check out from the hotel and start your journey towards Indore by private AC vehicle.",
          "Enjoy the scenic drive from Maheshwar to Indore and, on arrival, proceed directly to Indore Railway Station for your onward journey, marking the end of the tour."
        ],
        "timing": "Half Day",
        "nightstay": "",
        "meals": [
          "Breakfast"
        ]
      }
    ]
  },
  {
    "slug": "munnar-3d2n",
    "name": "Munnar 3D/2N",
    "heading": "3 Days Kerala Adventure",
    "code": "KERALA-TOUR-2",
    "category": "kerala",
    "days": 3,
    "nights": 2,
    "price": 6000,
    "originalPrice": 20000,
    "intro": [
      "Discover the enchanting state of Kerala with our 5-day tour. Immerse yourself in the lush landscapes, vibrant culture, and serene backwaters. This package offers a perfect blend of adventure and relaxation, showcasing the best of Kerala's natural beauty and heritage."
    ],
    "highlights": [
      "Experience the beauty of Kerala, explore tea plantations, wildlife sanctuaries, and backwaters."
    ],
    "travellers": "Families / Couples",
    "image": "/images/tours/munnar-thekkady-allepy-5d4n.webp",
    "pricing": [
      {
        "label": "Quad Sharing",
        "price": 5500
      },
      {
        "label": "Triple Sharing",
        "price": 5500
      },
      {
        "label": "Double Sharing",
        "price": 6000
      }
    ],
    "inclusions": [
      "3 Nights hotel Stay",
      "1 Night Alleppey houseboat",
      "Includes Lunch",
      "4 Breakfast & 4 Dinner",
      "Sightseeing & Transfers by Bus or Tempo Traveller",
      "Tour Captain / group leader"
    ],
    "exclusions": [
      "Entry fees to monuments, parks, museums & sightseeing spots",
      "Adventure activities & optional experiences (boating, safari, elephant ride, cultural shows, cable car, etc.)",
      "Train/Flight ticket fare",
      "Lunch & any meals not mentioned in inclusions",
      "Personal expenses (shopping, tips, laundry, phone calls, etc.)",
      "Anything not specifically mentioned in “Package Includes”"
    ],
    "support": [
      "Dedicated support team available",
      "Emergency assistance provided",
      "Local guides for seamless exploration"
    ],
    "accommodation": "Daily breakfast (or as specified)\n\n\nPrivate or shared rooms\n\n\nAttached bathroom\n\n\nHousekeeping services\n\n\nWi-Fi (where available)\n\n\nCheck-in and check-out assistance\n\n\n24-hour front desk (in hotels)\n\n\nAir conditioning/heating (subject to property type)\n\n\nComplimentary toiletries and basic amenities",
    "meals": "Today begins with breakfast, followed by lunch and concludes with dinner. It’s a day dedicated to experiencing these meals and the spaces in which they are consumed. A simple and focused approach to nourishment and location.\n\nBreakfast is served.\nLunch is provided.\nDinner is served.",
    "notes": "This package includes standard accommodations and meals. Pricing is per person based on quad sharing. Premium package offers upgraded accommodations and additional services. Contact us for customized itineraries.",
    "paymentKey": "payment-2",
    "cancellationKey": "cancel-2",
    "faqKey": "faq-2",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival in Kerala",
        "city": "Munnar",
        "points": [
          "Arrive at Ernakulam Railway Station, meet our representative/driver and proceed towards Munnar. Enjoy a scenic drive through Kerala’s beautiful countryside, lush green landscapes, spice and rubber plantations, winding mountain roads and charming villages.",
          "En route, you can enjoy scenic photo stops at Cheeyappara Waterfalls, Valara Waterfalls and other beautiful viewpoints, subject to time, weather and road conditions.",
          "Upon arrival in Munnar, check in to the hotel and relax. The evening is free to explore the nearby market and surroundings at your own pace."
        ],
        "timing": "Full Day",
        "nightstay": "Munnar",
        "meals": [
          "Dinner"
        ]
      },
      {
        "day": 2,
        "title": "Munnar Sightseeing",
        "city": "Munnar",
        "points": [
          "Start your day with breakfast before heading out for a full-day sightseeing tour of Munnar, surrounded by rolling hills, tea plantations, forests, and beautiful lakes.",
          "Visit Mattupetty Dam, a popular scenic attraction offering beautiful views of the surrounding mountains and lake. Continue towards Echo Point, known for its natural echo phenomenon and peaceful surroundings.",
          "Later, visit Kundala Lake and Kundala Dam, surrounded by lush green hills and tea plantations. Enjoy some time taking photographs and appreciating the natural beauty of the region.",
          "You may also visit the Tea Museum, where you can learn about the history and traditional methods of tea production in Munnar, subject to opening hours.",
          "After completing the sightseeing, return to the hotel and spend the evening at leisure. You can explore the local market or simply relax at the property."
        ],
        "timing": "Full Day",
        "nightstay": "Munnar",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 3,
        "title": "Munnar to Kochi Drop",
        "city": "Kochi",
        "points": [
          "After breakfast, check out from the hotel and begin your journey from Munnar to Kochi. Enjoy the scenic drive through Kerala’s beautiful hills, tea plantations, waterfalls, lush green landscapes and winding mountain roads as you travel towards Kochi.",
          "Upon reaching Kochi, the vehicle will provide a comfortable drop at Ernakulam Railway Station / Kochi Airport as per your onward travel schedule. This day is planned as a transfer and drop only, with no additional sightseeing included in Kochi."
        ],
        "timing": "4 Hrs",
        "nightstay": "",
        "meals": [
          "Breakfast"
        ]
      }
    ]
  },
  {
    "slug": "hampi-badami-3d2n",
    "name": "Hampi & Badami 3D/2N",
    "heading": "3 Days Hampi & Badami Tour",
    "code": "HAMPI-BADAMI",
    "category": "trek",
    "days": 3,
    "nights": 2,
    "price": 6999,
    "originalPrice": 8999,
    "intro": [
      "Embark on a captivating 3-day journey through the historical wonders of Hampi and Badami. This tour offers a unique opportunity to delve into the past, exploring magnificent temples, royal palaces, and breathtaking landscapes. Experience the charm of these ancient cities with our expert guides and create unforgettable memories."
    ],
    "highlights": [
      "Explore ancient temples, royal ruins, and stunning landscapes. Discover the rich history and culture of Hampi and Badami. Enjoy guided tours and immersive experiences. A perfect blend of history, architecture, and natural beauty."
    ],
    "travellers": "Couples & Families",
    "image": "/images/tours/hampi-badami-3d2n.webp",
    "pricing": [
      {
        "label": "Per Person",
        "price": 8999
      }
    ],
    "inclusions": [
      "2 Nights hotel accommodation",
      "Daily Breakfast & Dinner",
      "All sightseeing & transfers by private bus",
      "Tour coordinator / group leader from 2XBT"
    ],
    "exclusions": [
      "Entry fees to monuments, parks, museums & sightseeing spots",
      "Adventure activities & optional experiences (boating, safari, elephant ride, cultural shows, cable car, etc.)",
      "Train/Flight ticket fare",
      "Lunch & any meals not mentioned in inclusions",
      "Personal expenses (shopping, tips, laundry, phone calls, etc.)",
      "Anything not specifically mentioned in “Package Includes”"
    ],
    "support": [
      "Dedicated support team available 24/7",
      "Emergency assistance provided",
      "Local guides for seamless exploration",
      "Flexible itinerary options"
    ],
    "accommodation": "2 Nights in comfortable hotels in Hospet & Badami.",
    "meals": "Breakfast & Dinner included daily.",
    "notes": "Package includes transportation between Hospet and Badami. Sightseeing activities are subject to weather conditions.",
    "paymentKey": "payment-2",
    "cancellationKey": "cancel-2",
    "faqKey": "faq-2",
    "itinerary": [
      {
        "day": 1,
        "title": "Day 1 – Hospet to Hampi",
        "city": "Hampi",
        "points": [
          "Today, immerse yourself in the historical heart of Hampi, beginning with the bustling Virupaksha Temple. Then, delve into the remnants of the Vijayanagara Empire within the Royal Enclosure, encountering remarkable architectural feats like the Stone Chariot. Finally, explore the evocative ruins of the Vittala and Hazara Rama temples, each showcasing intricate carvings and tales of ancient legends.",
          "Vibrant Virupaksha Temple exploration.",
          "Royal Enclosure’s historical significance.",
          "Unique Stone Chariot discovery.",
          "Intricate carvings at Vittala Temple."
        ],
        "timing": "Full Day",
        "nightstay": "Hampi",
        "meals": [
          "Breakfast"
        ]
      },
      {
        "day": 2,
        "title": "Day 2 – Hampi",
        "city": "Hampi",
        "points": [
          "Today’s journey takes you through the ancient wonders of Hampi, beginning with the unique Queen’s Bath, a series of natural pools carved into the rock. You’ll then delve into the history of the Vijayanagara Empire at the Elephant Stables, followed by a visit to the Pushkarini, a significant water source. As the day concludes, find a vantage point on Matanga Hill to observe the breathtaking sunset over the expansive landscape.",
          "Queen’s Bath: Interconnected bathing pools.",
          "Elephant Stables: Architectural marvels of Vijayanagara.",
          "Pushkarini: Vital water source for the city.",
          "Matanga Hill: Sunset over the Hampi landscape."
        ],
        "timing": "Full Day",
        "nightstay": "Hampi",
        "meals": [
          "Breakfast",
          "Lunch"
        ]
      },
      {
        "day": 3,
        "title": "Day 3 – Hampi to Badami",
        "city": "Badami",
        "points": [
          "Today’s journey takes you through the heart of Karnataka’s ancient heritage. You’ll begin with the imposing Badami Fort, a sprawling complex of temples and palaces, followed by the intricate beauty of the Aihole Chennakesava Temple. The day culminates with a visit to the remarkable Pattadakal temples, a testament to India’s rich architectural history and a UNESCO World Heritage Site, all while enjoying the serene beauty of Badami Lake.",
          "Badami Fort exploration begins.",
          "Aihole Chennakesava Temple marvel.",
          "Pattadakal temples – UNESCO site.",
          "Stunning views of Badami Lake."
        ],
        "timing": "Full Day",
        "nightstay": "Badami",
        "meals": [
          "Breakfast"
        ]
      }
    ]
  },
  {
    "slug": "ujjain-omkareshwar-maheshwar-indore-4d3n",
    "name": "Ujjain Omkareshwar Maheshwar & Indore 4D/3N",
    "heading": "4 Days Ujjain & Omkareshwar",
    "code": "UJJAIN-OMKAR-2",
    "category": "yatra",
    "days": 4,
    "nights": 3,
    "price": 7000,
    "originalPrice": 10000,
    "intro": [
      "Experience a spiritually enriching and",
      "culturally vibrant journey to Odisha’s most",
      "iconic destinations. Seek divine blessings",
      "at Shree Jagannath Temple (Char Dham) in",
      "Puri, explore the ancient temples of",
      "Bhubaneswar – the Temple City of India,",
      "and witness the architectural brilliance of",
      "the Konark Sun Temple (UNESCO World",
      "Heritage Site). This tour perfectly blends",
      "devotion, heritage, and coastal beauty,",
      "offering a memorable travel experience",
      "from Mumbai to Mumbai."
    ],
    "highlights": [
      "Explore ancient temples, serene beaches, and vibrant coastal towns. Immerse yourself in rich culture and spirituality. Enjoy comfortable accommodations and seamless travel. Discover the beauty of central India."
    ],
    "travellers": "Couples / Families",
    "image": "/images/tours/ujjain-omkareshwar-maheshwar-indore-4d3n.webp",
    "pricing": [
      {
        "label": "Quad / Triple Sharing",
        "price": 7000
      },
      {
        "label": "Double Sharing",
        "price": 8000
      }
    ],
    "inclusions": [
      "Accommodation in selected hotels as per the itinerary",
      "Daily Breakfast & Dinner",
      "All sightseeing as mentioned in the itinerary",
      "Private AC Vehicle for all transfers and sightseeing — Car / Tempo Traveller / Bus as per group size",
      "Pickup from Ujjain Railway Station / Bus Stand by Auto / E-Rickshaw",
      "Ujjain local sightseeing by Auto / E-Rickshaw",
      "Pickup & Drop from Railway Station / Bus Stand",
      "Children below 5 years are complimentary, without an extra bed & Seat In Vehicle"
    ],
    "exclusions": [
      "5% GST, if applicable",
      "Train / Bus / Flight tickets",
      "Lunch and personal meals",
      "Dinner on Indore Stay",
      "Packaged drinking water / water bottles",
      "Cold drinks, soft drinks and other beverages",
      "Temple Darshan / VIP Darshan / Puja charges",
      "Entry tickets, monument charges and camera fees",
      "Boating charges at Omkareshwar",
      "Food and beverages at Sarafa Bazaar / Chappan Dukan",
      "Shopping expenses, including Namkeen and sweets",
      "Personal expenses such as laundry, telephone calls, room service, etc.",
      "Travel insurance",
      "Any expenses arising due to delays, natural calamities or unforeseen circumstances",
      "Anything not specifically mentioned under Inclusions"
    ],
    "support": [
      "Dedicated support team available throughout your journey. Assistance with travel arrangements and local inquiries. Emergency assistance in case of unforeseen circumstances. Experienced guides to enhance your experience."
    ],
    "accommodation": "3 Nights Hotel Stay",
    "meals": "3 Breakfast & 2 Dinner Included",
    "notes": "Package includes transportation between Ujjain, Omkareshwar, and Maheshwar. Sightseeing tours will be conducted by a local guide. This itinerary is subject to change based on weather conditions or unforeseen circumstances.",
    "paymentKey": "payment-2",
    "cancellationKey": "cancel-2",
    "faqKey": "faq-2",
    "itinerary": [
      {
        "day": 1,
        "title": "Ujjain",
        "city": "Ujjain",
        "points": [
          "Arrive at Ujjain Railway Station / Bus Stand and proceed to the hotel by Auto / E-Rickshaw, subject to availability. Complete the check-in formalities and freshen up.",
          "Afterward, begin your Ujjain local sightseeing by Auto / E-Rickshaw, covering Kal Bhairav Temple, Gadkalika Temple, Shantibani Ashram and Mangalnath Temple.",
          "In the evening, visit Ram Ghat to experience the spiritual atmosphere and attend the beautiful Shipra River Aarti. After the Aarti, proceed to Harsiddhi Mata Temple for darshan and blessings.",
          "Continue to Mahakal Lok Corridor and then visit Shri Mahakaleshwar Jyotirlinga Temple for darshan. After completing the sightseeing and temple visits, return to the hotel for an overnight stay in Ujjain."
        ],
        "timing": "Full Day",
        "nightstay": "Ujjain",
        "meals": [
          "Dinner"
        ]
      },
      {
        "day": 2,
        "title": "Ujjain → Omkareshwar → Maheshwar",
        "city": "Omkareshwar",
        "points": [
          "After breakfast, check out from the hotel and start your journey towards Omkareshwar by private AC vehicle (Car / Tempo Traveller / Bus as per group size).",
          "Upon arrival, visit the sacred Omkareshwar Jyotirlinga Temple and Mamleshwar Temple for darshan. Later, enjoy the scenic surroundings of the Narmada River and visit the magnificent Statue of Adi Shankaracharya.",
          "After completing the temple visits and sightseeing, proceed towards Maheshwar by private AC vehicle.",
          "On arrival in Maheshwar, check in to the hotel and freshen up. Spend the evening relaxing at the hotel or exploring the peaceful surroundings of this historic riverside town. Enjoy an overnight stay in Maheshwar."
        ],
        "timing": "Full Day",
        "nightstay": "Maheshwar",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 3,
        "title": "Maheshwar → Indore",
        "city": "Maheshwar",
        "points": [
          "Early morning, visit the magnificent Maheshwar Fort, located along the banks of the Narmada River. Explore the historic fort, its beautiful architecture and the scenic surroundings.",
          "After completing the visit, return to the hotel for breakfast. After breakfast, check out and start your journey towards Indore by private AC vehicle.",
          "On arrival in Indore, check in to the hotel and freshen up.",
          "In the evening, visit the famous Sarafa Bazaar, known for its vibrant atmosphere and delicious local street food. Enjoy Indore’s popular street-food delicacies and explore the lively market. Later, return to the hotel and relax for an overnight stay in Indore."
        ],
        "timing": "Full Day",
        "nightstay": "Indore",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 4,
        "title": "Indore Depature",
        "city": "Indore",
        "points": [
          "After breakfast, check out from the hotel and begin your Indore local sightseeing. Visit the historic Rajwada Palace, a magnificent symbol of the Holkar dynasty, followed by a visit to the beautiful Lal Bagh Palace.",
          "Later, seek blessings at the famous Khajrana Ganesh Temple. Continue your sightseeing with a visit to Chappan Dukan (56 Dukan), one of Indore’s popular food destinations, where you can enjoy local snacks and specialties. If time permits, you may also shop for famous Indore Namkeen and sweets.",
          "Later, proceed for your onward journey with a drop at Indore Railway Station."
        ],
        "timing": "Half Day",
        "nightstay": "",
        "meals": [
          "Breakfast"
        ]
      }
    ]
  },
  {
    "slug": "3-jyotirlinga-maharashtra-3d2n",
    "name": "3 Jyotirlinga Maharashtra 3D/2N",
    "heading": "3 Jyotirlinga Maharashtra Tour",
    "code": "3-JYOTIRLING",
    "category": "yatra",
    "days": 3,
    "nights": 2,
    "price": 7999,
    "originalPrice": 9999,
    "intro": [
      "Embark on a soul-enriching journey",
      "with our Panch Jyotirlinga Divine",
      "Darshan Yatra, specially designed",
      "for devotees seeking blessings",
      "from five sacred Jyotirlingas in one",
      "divine expedition. This spiritual tour",
      "covers the holy shrines of",
      "Bhimashankar Jyotirlinga,",
      "Grishneshwar Jyotirlinga,",
      "Mahakaleshwar Jyotirlinga,",
      "Omkareshwar Jyotirlinga, and",
      "Trimbakeshwar Jyotirlinga."
    ],
    "highlights": [
      "Explore three of Maharashtra’s most sacred Jyotirlinga temples. Immerse yourself in rich Hindu culture and spirituality. Witness breathtaking landscapes and ancient architecture. A truly transformative journey."
    ],
    "travellers": "Spiritual Travelers",
    "image": "/images/tours/3-jyotirlinga-maharashtra-3d2n.webp",
    "pricing": [
      {
        "label": "Per Person",
        "price": 7999
      }
    ],
    "inclusions": [
      "Accommodation in 2-star hotels",
      "Breakfast, Lunch & Dinner",
      "Transportation by AC vehicle",
      "ViP/Direct Darshan Pass Bhimashankar, Trimbakeshwar & Shirdi."
    ],
    "exclusions": [
      "Train ticket fare is not included.",
      "Lunch on all 3 days is not included.",
      "Breakfast on Day 3 and Dinner on Day 2 are not included.",
      "Personal expenses such as shopping, tips, laundry, phone calls, etc., are not included.",
      "Entry fees, monument tickets, and activity passes are not included.",
      "Medical and emergency expenses are not included.",
      "Any additional cost arising due to landslides, adverse weather conditions, road blockages, or other unforeseen circumstances shall be borne by the traveler.",
      "Travel insurance, medical expenses, and emergency evacuation costs are not included.",
      "Any service or item not specifically mentioned under the \"Package Includes\" section is excluded."
    ],
    "support": [
      "Dedicated tour manager",
      "Emergency assistance available",
      "Local guides fluent in English"
    ],
    "accommodation": "Triple Sharing:\nTriple sharing means 3 persons will\nbe accommodated in one double-bed\nroom, and an extra mattress will be\nprovided for the third person. VIP Darshan Pass:\nVIP Darshan Pass is compulsory for\nevery member to avoid long waiting\nhours and ensure smooth, hasslefree darshan at all Jyotirlinga\ntemples.",
    "meals": "Breakfast & Dinner Included according to the itinerary.",
    "notes": "Package includes transportation, accommodation, and breakfast. Lunch and dinner are not included. Temple entrance fees are not included. This is a basic package and can be customized.",
    "paymentKey": "payment-2",
    "cancellationKey": "cancel-2",
    "faqKey": "faq-2",
    "itinerary": [
      {
        "day": 1,
        "title": "Trimbakeshwar",
        "city": "Trimbakeshwar",
        "points": [
          "The journey begins with an early departure from Mumbai, heading towards the sacred city of Nashik. The day unfolds with a visit to the revered Trimbakeshwar Jyotirlinga, followed by a serene experience witnessing the Godavari Aarti at Ramkund in Panchavati. As the day progresses, the route leads towards Shirdi, promising a peaceful evening and overnight rest.",
          "Trimbakeshwar Jyotirlinga visit",
          "Godavari Aarti at Ramkund",
          "Journey towards Shirdi",
          "Overnight stay in Shirdi"
        ],
        "timing": "All Day",
        "nightstay": "Dinner and overnight stay at Shirdi.",
        "meals": [
          "Dinner"
        ]
      },
      {
        "day": 2,
        "title": "Grishneshwar & Ellora",
        "city": "Yavatmal",
        "points": [
          "The day begins with a simple breakfast before setting out towards the impressive Ellora Caves, a complex of ancient rock-cut temples. A visit to the Bhadra Maruti Temple offers a moment of reflection, followed by an evening darshan at the Grishneshwar Jyotirlinga. Finally, the journey concludes with a return to Shirdi for dinner and overnight accommodation.",
          "Ellora Caves exploration begins.",
          "Bhadra Maruti Temple visit.",
          "Grishneshwar Jyotirlinga darshan.",
          "Return to Shirdi for rest."
        ],
        "timing": "All Day",
        "nightstay": "Dinner and overnight stay at Shirdi.",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 3,
        "title": "Bhimashankar & Shirdi",
        "city": "Shirdi",
        "points": [
          "Begin your day with a serene darshan at the revered Sai Baba Temple, immersing yourself in the spiritual atmosphere. Afterwards, journey to Bhimashankar for a sacred visit, followed by a scenic drive back to Mumbai, carrying cherished recollections of this profound journey.",
          "Sai Baba Temple darshan",
          "Bhimashankar Darshan experience",
          "Departure for Mumbai",
          "Memories of a spiritual journey"
        ],
        "timing": "Morning - Afternoon",
        "nightstay": "Pune",
        "meals": [
          "Breakfast"
        ]
      }
    ]
  },
  {
    "slug": "kedarnath-yatra-ex-haridwar",
    "name": "Kedarnath Yatra EX Haridwar",
    "heading": "7 Day Dodham Yatra",
    "code": "DO-DHAM-YATR-2",
    "category": "yatra",
    "days": 4,
    "nights": 6,
    "price": 8000,
    "originalPrice": 20000,
    "intro": [
      "Kedarnath Yatra – A Divine Journey to the Sacred Himalayas",
      "Experience the spiritual beauty of Kedarnath Dham, one of the most revered Jyotirlingas of Lord Shiva, surrounded by majestic Himalayan peaks. This divine journey offers a perfect blend of devotion, adventure, scenic landscapes, and unforgettable memories with comfortable stays, guided assistance, and a well-planned itinerary."
    ],
    "highlights": [
      "Spiritual Journey",
      "Holiest Pilgrimage Destinations",
      "Scenic Himalayan Landscapes",
      "Divine Temple Darshans",
      "Cultural Immersion"
    ],
    "travellers": "",
    "image": "/images/tours/kedarnath-yatra-ex-haridwar.webp",
    "pricing": [
      {
        "label": "Quad Sharing",
        "price": 8000
      },
      {
        "label": "Triple Sharing",
        "price": 9000
      },
      {
        "label": "Double Sharing",
        "price": 10000
      }
    ],
    "inclusions": [
      "Airport & Railway Station Pickup & Drop",
      "Comfortable Hotel / Resort / Tent Accommodation",
      "Daily Breakfast & Dinner",
      "All Sightseeing as per the Itinerary",
      "Transportation by Non-AC Vehicle in the Hills (AC operates only in the plains, subject to weather and government regulations)",
      "All Toll Taxes, Parking Charges & Driver Allowances",
      "Experienced Tour Captain / Trip Coordinator",
      "24×7 On-Tour Assistance",
      "Children below 5 years travel Complimentary (without extra bed and vehicle seat)"
    ],
    "exclusions": [
      "5% GST will be charged extra on the total package cost.",
      "Flight Tickets & Train Tickets (unless specifically mentioned)",
      "Lunch & any meals not mentioned under the package inclusions",
      "Personal expenses (shopping, tips, laundry, phone calls, beverages, etc.)",
      "Entry fees to monuments, parks, museums & sightseeing attractions",
      "Adventure activities & optional experiences (River Rafting, Bungee Jumping, Zipline, Boating, Safari, Cable Car, Cultural Shows, etc.)",
      "Pony, Palki, Pithoo & Helicopter charges",
      "Local shuttle/jeep charges (Sonprayag – Gaurikund or wherever applicable)",
      "VIP Darshan / Special Entry Passes at temples or monuments",
      "Medical expenses, doctor consultation & emergency evacuation charges",
      "Travel Insurance of any kind",
      "Expenses arising due to natural calamities, landslides, roadblocks, weather conditions, strikes, vehicle breakdowns, or any unforeseen circumstances",
      "Any increase in government taxes, tolls, parking charges, fuel prices, or permit fees after booking",
      "Anything not specifically mentioned under \"Package Includes\"."
    ],
    "support": [
      "Comfortable Transportation & Sightseeing",
      "Experienced Tour Captain",
      "24×7 On-Tour Assistance",
      "Dedicated Ground Support",
      "Safe & Well-Planned Itinerary",
      "No Hidden Charges"
    ],
    "accommodation": "3 Nights Accommodations2 Nights Hotel1 Nights Tent stay",
    "meals": "2 Breakfast & 3 Dinner",
    "notes": "Additional Expenses Payable by Guests: During the tour, guests are required to bear certain expenses directly wherever applicable. These include Mansa Devi & Chandi Devi Ropeway tickets, Sonprayag to Gaurikund local shuttle/jeep charges, Pony, Palki, Pithoo, and Helicopter services for Yamunotri and Kedarnath, luggage handling/storage charges at the Rampur/Sitapur hotel during the Kedarnath trek, all adventure activities at Shivpuri (such as River Rafting, Bungee Jumping, Giant Swing, Zipline, Flying Fox, etc.), VIP Darshan passes, camera/video camera fees (if applicable), room heater charges, laundry, porter charges, personal shopping, meals and beverages not included in the package, medical expenses, and any other personal expenses or services not specifically mentioned under the package inclusions. All such charges must be paid directly by the guest at the respective location.",
    "paymentKey": "payment-3",
    "cancellationKey": "cancel-2",
    "faqKey": "faq-3",
    "itinerary": [
      {
        "day": 1,
        "title": "Haridwar to Rampur / Sitapur",
        "city": "Buddha Kedarnath",
        "points": [
          "Upon arrival at Haridwar Railway Station or Bus Stand, meet our tour representative and begin your scenic journey towards Rampur/Sitapur, the gateway to the sacred Kedarnath Dham. Enjoy a beautiful drive through the Garhwal Himalayas, passing picturesque valleys, rivers, and charming hill towns.",
          "En route, visit the revered Dhari Devi Temple, dedicated to Goddess Kali and regarded as one of the guardian deities of Uttarakhand. Continue your journey while enjoying breathtaking views of the Alaknanda River and the surrounding Himalayan landscapes.",
          "Upon arrival at Rampur/Sitapur, complete the hotel check-in formalities and relax after the day's journey. Spend the evening at leisure while preparing for the next day's Kedarnath pilgrimage.",
          "Enjoy a delicious dinner and an overnight stay at Rampur/Sitapur."
        ],
        "timing": "Full Day",
        "nightstay": "Rampur/Sitapur",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 2,
        "title": "Rampur / Sitapur to Kedarnath",
        "city": "Kedarnath",
        "points": [
          "Wake up early, check out from the hotel, and proceed towards Sonprayag. From here, take the local shuttle to Gaurikund (at your own cost), the starting point of the Kedarnath trek.",
          "Please Note: As only essential luggage can be carried during the trek, your main luggage/baggage will be left at the hotel in Rampur/Sitapur. Guests are required to pay the luggage handling/storage charges directly to the hotel manager (if applicable). It is recommended to carry only a small backpack with essentials required for the overnight stay in Kedarnath.",
          "Begin the sacred 18 km trek (one way) from Gaurikund to Kedarnath, which generally takes 7–10 hours, depending on your pace. Pony, palki, pithoo, and helicopter services are available at an additional cost for pilgrims who prefer an alternative to trekking.",
          "Upon arrival in Kedarnath, check in to your tent stay near Kedarnath Temple and freshen up. In the evening, enjoy the mesmerizing Kedarnath Temple Aarti from the vicinity of your accommodation, surrounded by the serene Himalayan landscape and the divine atmosphere of the shrine."
        ],
        "timing": "Full Day",
        "nightstay": "Kedarnath Tent Stay",
        "meals": [
          "Dinner"
        ]
      },
      {
        "day": 3,
        "title": "Kedarnath to Rampur / Sitapur",
        "city": "Kedarnath",
        "points": [
          "Wake up early and visit the sacred Shri Kedarnath Temple for the auspicious Morning Darshan. After seeking the blessings of Lord Shiva, explore the nearby attractions around the temple, including the Adi Shankaracharya Samadhi, Bhairavnath Temple (subject to weather and time availability), and enjoy the breathtaking views of the surrounding Himalayan peaks.",
          "Later, return to your accommodation for breakfast, complete the check-out formalities, and begin the 18 km descent trek from Kedarnath to Gaurikund, which generally takes 5–7 hours. Pony, palki, and pithoo services are available at an additional cost.",
          "Upon reaching Gaurikund, take the local shuttle to Sonprayag (at your own cost), where your vehicle will be waiting. Continue your journey to Rampur/Sitapur.",
          "Upon arrival, check in to the hotel. Enjoy a delicious dinner and relax with an overnight stay at Rampur/Sitapur."
        ],
        "timing": "Full Day",
        "nightstay": "Rampur/Sitapur",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 4,
        "title": "Rampur / Sitapur to Chopta",
        "city": "Rishikesh",
        "points": [
          "After breakfast, check out from the resort and enjoy your morning with exciting adventure activities in Shivpuri. Guests can participate in thrilling experiences such as River Rafting, Bungee Jumping, Giant Swing, Zipline, and other adventure sports at their own cost. Adventure activity timings are from 9:00 AM to 2:00 PM.",
          "At 2:00 PM, proceed towards Rishikesh for sightseeing. Visit popular attractions including Ram Jhula, Laxman Jhula, and Parmarth Niketan Ashram. In the evening, witness the mesmerizing Ganga Aarti at Triveni Ghat, a spiritually uplifting experience filled with devotional chants, illuminated lamps, and prayers on the banks of the sacred River Ganga. You will also have free time to explore the local markets and shop for souvenirs.",
          "At 7:00 PM, begin your return journey to Delhi, carrying unforgettable memories of the sacred Char Dham Yatra and the adventure-filled experiences of Rishikesh. Overnight journey to Delhi."
        ],
        "timing": "Full Day",
        "nightstay": "",
        "meals": [
          "Breakfast"
        ]
      }
    ]
  },
  {
    "slug": "munnar-thekkady-4d3n",
    "name": "Munnar & Thekkady 4D/3N",
    "heading": "4 Days Kerala Adventure",
    "code": "KERALA-TOUR--2",
    "category": "kerala",
    "days": 4,
    "nights": 3,
    "price": 8000,
    "originalPrice": 20000,
    "intro": [
      "Discover the enchanting state of Kerala with our 5-day tour. Immerse yourself in the lush landscapes, vibrant culture, and serene backwaters. This package offers a perfect blend of adventure and relaxation, showcasing the best of Kerala's natural beauty and heritage."
    ],
    "highlights": [
      "Experience the beauty of Kerala, explore tea plantations, wildlife sanctuaries, and backwaters."
    ],
    "travellers": "Families / Couples",
    "image": "/images/tours/munnar-thekkady-allepy-5d4n.webp",
    "pricing": [
      {
        "label": "Quad Sharing",
        "price": 8000
      },
      {
        "label": "Triple Sharing",
        "price": 8200
      },
      {
        "label": "Double Sharing",
        "price": 9000
      }
    ],
    "inclusions": [
      "3 Nights hotel Stay",
      "1 Night Alleppey houseboat",
      "Includes Lunch",
      "4 Breakfast & 4 Dinner",
      "Sightseeing & Transfers by Bus or Tempo Traveller",
      "Tour Captain / group leader"
    ],
    "exclusions": [
      "Entry fees to monuments, parks, museums & sightseeing spots",
      "Adventure activities & optional experiences (boating, safari, elephant ride, cultural shows, cable car, etc.)",
      "Train/Flight ticket fare",
      "Lunch & any meals not mentioned in inclusions",
      "Personal expenses (shopping, tips, laundry, phone calls, etc.)",
      "Anything not specifically mentioned in “Package Includes”"
    ],
    "support": [
      "Dedicated support team available",
      "Emergency assistance provided",
      "Local guides for seamless exploration"
    ],
    "accommodation": "Daily breakfast (or as specified)\n\n\nPrivate or shared rooms\n\n\nAttached bathroom\n\n\nHousekeeping services\n\n\nWi-Fi (where available)\n\n\nCheck-in and check-out assistance\n\n\n24-hour front desk (in hotels)\n\n\nAir conditioning/heating (subject to property type)\n\n\nComplimentary toiletries and basic amenities",
    "meals": "Today begins with breakfast, followed by lunch and concludes with dinner. It’s a day dedicated to experiencing these meals and the spaces in which they are consumed. A simple and focused approach to nourishment and location.\n\nBreakfast is served.\nLunch is provided.\nDinner is served.",
    "notes": "This package includes standard accommodations and meals. Pricing is per person based on quad sharing. Premium package offers upgraded accommodations and additional services. Contact us for customized itineraries.",
    "paymentKey": "payment-2",
    "cancellationKey": "cancel-2",
    "faqKey": "faq-2",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival in Kerala",
        "city": "Munnar",
        "points": [
          "Arrive at Ernakulam Railway Station, meet our representative/driver and proceed towards Munnar. Enjoy a scenic drive through Kerala’s beautiful countryside, lush green landscapes, spice and rubber plantations, winding mountain roads and charming villages.",
          "En route, you can enjoy scenic photo stops at Cheeyappara Waterfalls, Valara Waterfalls and other beautiful viewpoints, subject to time, weather and road conditions.",
          "Upon arrival in Munnar, check in to the hotel and relax. The evening is free to explore the nearby market and surroundings at your own pace."
        ],
        "timing": "Full Day",
        "nightstay": "Munnar",
        "meals": [
          "Dinner"
        ]
      },
      {
        "day": 2,
        "title": "Munnar Sightseeing",
        "city": "Munnar",
        "points": [
          "Start your day with breakfast before heading out for a full-day sightseeing tour of Munnar, surrounded by rolling hills, tea plantations, forests, and beautiful lakes.",
          "Visit Mattupetty Dam, a popular scenic attraction offering beautiful views of the surrounding mountains and lake. Continue towards Echo Point, known for its natural echo phenomenon and peaceful surroundings.",
          "Later, visit Kundala Lake and Kundala Dam, surrounded by lush green hills and tea plantations. Enjoy some time taking photographs and appreciating the natural beauty of the region.",
          "You may also visit the Tea Museum, where you can learn about the history and traditional methods of tea production in Munnar, subject to opening hours.",
          "After completing the sightseeing, return to the hotel and spend the evening at leisure. You can explore the local market or simply relax at the property."
        ],
        "timing": "Full Day",
        "nightstay": "Munnar",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 3,
        "title": "Thekkady Sightseeing",
        "city": "Thekkady",
        "points": [
          "Start your day with breakfast before checking out from your hotel and proceeding towards Thekkady, one of Kerala’s most famous destinations for wildlife, forests, and spice plantations.",
          "Enjoy a scenic drive through the Western Ghats, passing through winding mountain roads, dense greenery, spice plantations, and beautiful countryside.",
          "Upon arrival in Thekkady, check in to your hotel and relax.",
          "Later, you can explore the local market and shop for Kerala’s famous spices, tea, coffee, handmade products, and other souvenirs.",
          "Guests can also opt for activities such as Periyar Lake boating, spice plantation visits, Kathakali performances, or Kalaripayattu shows, subject to availability and additional charges.",
          "Return to the hotel after the evening activities."
        ],
        "timing": "Full Day",
        "nightstay": "Thekkady",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 4,
        "title": "Return Journey",
        "city": "Kochi",
        "points": [
          "After breakfast, check out from the hotel and start your journey from Thekkady to Kochi. Enjoy a comfortable drive through Kerala’s scenic landscapes, lush forests, spice plantations, small villages and winding mountain roads as you gradually travel towards the coastal city of Kochi.",
          "On arrival in Kochi, proceed directly to your scheduled Ernakulam Railway Station / Kochi Airport drop. The vehicle will ensure a comfortable and convenient transfer for your onward journey.",
          "This day is planned as a transfer and drop day only, and no additional sightseeing in Kochi is included."
        ],
        "timing": "4/5 Hrs",
        "nightstay": "",
        "meals": [
          "Breakfast"
        ]
      }
    ]
  },
  {
    "slug": "rameshwaram-madurai-3d2n",
    "name": "Rameshwaram & Madurai 3D/2N",
    "heading": "Padma & Tamil Nadu 5-Day Pilgrimage",
    "code": "RAMESHWARAM",
    "category": "yatra",
    "days": 3,
    "nights": 2,
    "price": 8000,
    "originalPrice": 30000,
    "intro": [
      "Experience the perfect blend of spirituality, heritage, and breathtaking landscapes on this unforgettable 5 Days / 4 Nights journey through Kerala & Tamil Nadu. Begin your adventure in the vibrant city of Trivandrum, then witness the spectacular confluence of three seas at Kanyakumari. Visit the sacred island of Rameshwaram, explore the historic ruins of Dhanushkodi, and seek blessings at the renowned Sri Ramanathaswamy Temple.",
      "Continue to the cultural capital of Tamil Nadu, Madurai, where the magnificent Meenakshi Amman Temple and other iconic landmarks showcase the region's rich heritage."
    ],
    "highlights": [
      "Spiritual journey covering major South Indian temples",
      "Trivandrum & Kovalam – Temple, beach & coastal beauty",
      "Kanyakumari – Experience the unique meeting point of three seas",
      "Rameshwaram – Sacred temple town & iconic Pamban Bridge",
      "Madurai – Explore the historic temple city",
      "Coimbatore – Gateway to Western Tamil Nadu"
    ],
    "travellers": "Couples / Families",
    "image": "/images/tours/trivandrum-madurai-5d4n.webp",
    "pricing": [
      {
        "label": "Quad Sharing",
        "price": 8000
      },
      {
        "label": "Triple Sharing",
        "price": 8300
      },
      {
        "label": "Double Sharing",
        "price": 9000
      }
    ],
    "inclusions": [
      "2 Nights Accommodation",
      "2 Breakfasts",
      "1 Dinners",
      "AC Vehicle for Transfers & Sightseeing",
      "Pickup & Drop as per itinerary",
      "Sightseeing as mentioned in the itinerary",
      "Driver charges, fuel & parking",
      "Hotel & transportation taxes/charges as applicable",
      "Trip Coordinator / Travel Support",
      "All transfers and sightseeing as per the planned itinerary"
    ],
    "exclusions": [
      "5% GST",
      "Entry fees to monuments, parks, museums, temples and sightseeing attractions",
      "Adventure activities and optional experiences (boating, safari, elephant ride, cultural shows, cable car, etc.)",
      "Train/Flight fare",
      "Lunch (except Houseboat Lunch) and any meals not mentioned in the inclusions",
      "Personal expenses such as shopping, tips, laundry, phone calls, room service and beverages",
      "Camera and video camera charges (where applicable)",
      "Travel Insurance",
      "Additional sightseeing or vehicle usage not mentioned in the itinerary",
      "Expenses due to natural calamities, roadblocks, landslides, weather conditions, strikes, political disturbances or any unforeseen circumstances",
      "Anything not specifically mentioned under \"Package Includes\""
    ],
    "support": [
      "Comfortable AC vehicle throughout the tour",
      "Dedicated driver for transfers & sightseeing",
      "Hotel check-in and check-out assistance",
      "Pickup & drop coordination",
      "Assistance during sightseeing and transfers",
      "Well-planned daily travel schedule",
      "On-trip coordination for a smooth and hassle-free journey"
    ],
    "accommodation": "Rameshwaram: 1 Night\nMadurai: 1 Night\nTotal: 2 Nights / 3 Days\nComfortable accommodation in selected hotels on a sharing basis.",
    "meals": "2 Breakfasts2 Dinners\nMeals will be provided as per the hotel schedule and itinerary.",
    "notes": "This itinerary is subject to change based on weather conditions and unforeseen circumstances. The Dhanushkodi visit is subject to time and weather conditions. Optional activities are available at an additional cost. Please note that the driver allowance is for local transportation and does not include personal expenses.",
    "paymentKey": "payment-4",
    "cancellationKey": "cancel-2",
    "faqKey": "faq-4",
    "itinerary": [
      {
        "day": 1,
        "title": "Kanyakumari to Rameswaram",
        "city": "Rameshwaram",
        "points": [
          "Arrive at Madurai Airport / Railway Station and meet our representative or driver. After pickup, begin your journey towards Rameshwaram, enjoying the scenic drive through Tamil Nadu’s countryside, villages and coastal landscapes.",
          "Upon reaching Rameshwaram, proceed towards Dhanushkodi, a fascinating coastal destination known for its pristine beaches, historic ruins and the meeting point of the Bay of Bengal and Indian Ocean. Visit Dhanushkodi Beach, Arichal Munai and the remains of the old town, subject to weather and road conditions.",
          "Later, return to Rameshwaram and check in to the hotel. Relax and spend the evening at leisure."
        ],
        "timing": "Mumbai",
        "nightstay": "",
        "meals": [
          "Dinner"
        ]
      },
      {
        "day": 2,
        "title": "Rameswaram to Madurai",
        "city": "Madurai",
        "points": [
          "Start your day early in the morning and get ready for the sacred Ramanathaswamy Temple Darshan. As the temple follows a traditional dress code, traditional attire is compulsory for temple entry. Boys should wear Dhoti/Mundu with an appropriate upper garment, while Girls should wear Saree, Salwar Suit, or other permitted traditional attire.",
          "Proceed to the temple for the early morning darshan and experience the spiritual atmosphere of one of India’s most revered pilgrimage sites and one of the 12 Jyotirlingas. The temple is also famous for its magnificent corridors, intricately carved pillars, and sacred 22 Theerthams (holy water wells).",
          "After completing the darshan, return to the hotel for breakfast and freshen up. Later, check out and begin your journey towards Madurai.",
          "Upon arrival in Madurai, proceed for sightseeing and visit the magnificent Meenakshi Amman Temple, renowned for its grand gopurams, intricate sculptures, and rich spiritual heritage. Also explore the surrounding Puthu Mandapam and local markets, famous for traditional handicrafts, textiles, and local products.",
          "If time permits, visit Thirumalai Nayakkar Palace, known for its impressive architecture and historic significance.",
          "After completing the sightseeing, check in to your hotel and relax."
        ],
        "timing": "Full Day",
        "nightstay": "Madurai",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 3,
        "title": "Madurai Departure",
        "city": "Madurai",
        "points": [
          "After breakfast, check out from the hotel and get ready for your onward journey. Depending on your departure schedule, you can spend some leisure time in Madurai for last-minute shopping or exploring the nearby local surroundings.",
          "Later, our vehicle will transfer you to Madurai Railway Station / Airport for your scheduled departure. Bid farewell to the beautiful destinations, temples and coastal landscapes explored during your Kerala & Tamil Nadu journey, taking back wonderful memories of the trip."
        ],
        "timing": "Morning",
        "nightstay": "",
        "meals": [
          "Breakfast"
        ]
      }
    ]
  },
  {
    "slug": "munnar-allepey-tour-4d3n",
    "name": "Munnar & Allepey Tour 4D/3N",
    "heading": "4 Days Kerala Adventure",
    "code": "KERALA-TOUR-",
    "category": "kerala",
    "days": 4,
    "nights": 3,
    "price": 9000,
    "originalPrice": 20000,
    "intro": [
      "Discover the enchanting state of Kerala with our 5-day tour. Immerse yourself in the lush landscapes, vibrant culture, and serene backwaters. This package offers a perfect blend of adventure and relaxation, showcasing the best of Kerala's natural beauty and heritage."
    ],
    "highlights": [
      "Experience the beauty of Kerala, explore tea plantations, wildlife sanctuaries, and backwaters."
    ],
    "travellers": "Families / Couples",
    "image": "/images/tours/munnar-thekkady-allepy-5d4n.webp",
    "pricing": [
      {
        "label": "Quad Sharing",
        "price": 9000
      },
      {
        "label": "Triple Sharing",
        "price": 9000
      },
      {
        "label": "Double Sharing",
        "price": 10500
      }
    ],
    "inclusions": [
      "Airport Pickup and Drop",
      "Accommodation",
      "Daily Breakfast and Dinner",
      "All Sightseeing as per Itinerary",
      "AC Vehicle for Transfers and Sightseeing",
      "Children below 5 Years Complimentary (Without Extra Bed)"
    ],
    "exclusions": [
      "Entry fees to monuments, parks, museums & sightseeing spots",
      "Adventure activities & optional experiences (boating, safari, elephant ride, cultural shows, cable car, etc.)",
      "Train/Flight ticket fare",
      "Lunch & any meals not mentioned in inclusions",
      "Personal expenses (shopping, tips, laundry, phone calls, etc.)",
      "Anything not specifically mentioned in “Package Includes”"
    ],
    "support": [
      "Dedicated support team available",
      "Emergency assistance provided",
      "Local guides for seamless exploration"
    ],
    "accommodation": "3 Nights Accommodations2 Nights Hotel Stay1 Night Boathouse Stay",
    "meals": "3 Breakfast, 3 Dinner & 1 Lunch at Boathouse",
    "notes": "This package includes standard accommodations and meals. Pricing is per person based on quad sharing. Premium package offers upgraded accommodations and additional services. Contact us for customized itineraries.",
    "paymentKey": "payment-2",
    "cancellationKey": "cancel-2",
    "faqKey": "faq-5",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival in Kerala",
        "city": "Munnar",
        "points": [
          "Arrive at Ernakulam Railway Station, meet our representative/driver and proceed towards Munnar. Enjoy a scenic drive through Kerala’s beautiful countryside, lush green landscapes, spice and rubber plantations, winding mountain roads and charming villages.",
          "En route, you can enjoy scenic photo stops at Cheeyappara Waterfalls, Valara Waterfalls and other beautiful viewpoints, subject to time, weather and road conditions.",
          "Upon arrival in Munnar, check in to the hotel and relax. The evening is free to explore the nearby market and surroundings at your own pace."
        ],
        "timing": "Full Day",
        "nightstay": "Munnar",
        "meals": [
          "Dinner"
        ]
      },
      {
        "day": 2,
        "title": "Munnar Sightseeing",
        "city": "Munnar",
        "points": [
          "Start your day with breakfast before heading out for a full-day sightseeing tour of Munnar, surrounded by rolling hills, tea plantations, forests, and beautiful lakes.",
          "Visit Mattupetty Dam, a popular scenic attraction offering beautiful views of the surrounding mountains and lake. Continue towards Echo Point, known for its natural echo phenomenon and peaceful surroundings.",
          "Later, visit Kundala Lake and Kundala Dam, surrounded by lush green hills and tea plantations. Enjoy some time taking photographs and appreciating the natural beauty of the region.",
          "You may also visit the Tea Museum, where you can learn about the history and traditional methods of tea production in Munnar, subject to opening hours.",
          "After completing the sightseeing, return to the hotel and spend the evening at leisure. You can explore the local market or simply relax at the property."
        ],
        "timing": "Full Day",
        "nightstay": "Munnar",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 3,
        "title": "Alleppey Boat House",
        "city": "Alleppey",
        "points": [
          "Start your day with breakfast before checking out and beginning your journey towards Alleppey, famously known as the Venice of the East and renowned for its beautiful backwaters.",
          "Drive through the scenic Kerala countryside, passing lush paddy fields, coconut plantations, villages, and waterways.",
          "Upon arrival in Alleppey, board your houseboat and enjoy a welcome drink before completing the check-in formalities. Enjoy a delicious lunch on board as the houseboat cruises through the serene backwaters.",
          "Relax while enjoying views of traditional villages, coconut trees, paddy fields, and local life along the waterways. Later, witness the beautiful sunset over the backwaters and enjoy the peaceful surroundings."
        ],
        "timing": "Full Day",
        "nightstay": "Alleppey Houseboat",
        "meals": [
          "Breakfast",
          "Lunch",
          "Dinner"
        ]
      },
      {
        "day": 4,
        "title": "Return Journey",
        "city": "kochi",
        "points": [
          "After breakfast, check out from the hotel and start your journey from Alleppey (Alappuzha) to Kochi. Enjoy the scenic drive through Kerala’s lush greenery, charming villages, coconut plantations and beautiful backwater surroundings. Depending on your departure schedule, you may have some free time in Kochi to explore the local surroundings, do some shopping or relax before your onward journey.",
          "Later, proceed towards your scheduled drop point. The vehicle will provide a convenient drop at Ernakulam Railway Station or Kochi Airport, making your onward journey comfortable and hassle-free. The tour concludes with wonderful memories of Kerala and its beautiful landscapes."
        ],
        "timing": "3 Hrs",
        "nightstay": "",
        "meals": [
          "Breakfast"
        ]
      }
    ]
  },
  {
    "slug": "rameshwaram-madurai-coimbatore-4d3n",
    "name": "Rameshwaram Madurai & Coimbatore 4D/3N",
    "heading": "Padma & Tamil Nadu 5-Day Pilgrimage",
    "code": "RAMESHWARAM-2",
    "category": "yatra",
    "days": 4,
    "nights": 3,
    "price": 10500,
    "originalPrice": 30000,
    "intro": [
      "Experience the perfect blend of spirituality, heritage, and breathtaking landscapes on this unforgettable 5 Days / 4 Nights journey through Kerala & Tamil Nadu. Begin your adventure in the vibrant city of Trivandrum, then witness the spectacular confluence of three seas at Kanyakumari. Visit the sacred island of Rameshwaram, explore the historic ruins of Dhanushkodi, and seek blessings at the renowned Sri Ramanathaswamy Temple.",
      "Continue to the cultural capital of Tamil Nadu, Madurai, where the magnificent Meenakshi Amman Temple and other iconic landmarks showcase the region's rich heritage."
    ],
    "highlights": [
      "Spiritual journey covering major South Indian temples",
      "Trivandrum & Kovalam – Temple, beach & coastal beauty",
      "Kanyakumari – Experience the unique meeting point of three seas",
      "Rameshwaram – Sacred temple town & iconic Pamban Bridge",
      "Madurai – Explore the historic temple city",
      "Coimbatore – Gateway to Western Tamil Nadu"
    ],
    "travellers": "Couples / Families",
    "image": "/images/tours/trivandrum-madurai-5d4n.webp",
    "pricing": [
      {
        "label": "Quad Sharing",
        "price": 10500
      },
      {
        "label": "Triple Sharing",
        "price": 11000
      },
      {
        "label": "Double Sharing",
        "price": 12000
      }
    ],
    "inclusions": [
      "3 Nights Accommodation",
      "3 Breakfasts",
      "3 Dinners",
      "AC Vehicle for Transfers & Sightseeing",
      "Pickup & Drop as per itinerary",
      "Sightseeing as mentioned in the itinerary",
      "Driver charges, fuel & parking",
      "Hotel & transportation taxes/charges as applicable",
      "Trip Coordinator / Travel Support",
      "All transfers and sightseeing as per the planned itinerary"
    ],
    "exclusions": [
      "5% GST",
      "Entry fees to monuments, parks, museums, temples and sightseeing attractions",
      "Adventure activities and optional experiences (boating, safari, elephant ride, cultural shows, cable car, etc.)",
      "Train/Flight fare",
      "Lunch (except Houseboat Lunch) and any meals not mentioned in the inclusions",
      "Personal expenses such as shopping, tips, laundry, phone calls, room service and beverages",
      "Camera and video camera charges (where applicable)",
      "Travel Insurance",
      "Additional sightseeing or vehicle usage not mentioned in the itinerary",
      "Expenses due to natural calamities, roadblocks, landslides, weather conditions, strikes, political disturbances or any unforeseen circumstances",
      "Anything not specifically mentioned under \"Package Includes\""
    ],
    "support": [
      "Comfortable AC vehicle throughout the tour",
      "Dedicated driver for transfers & sightseeing",
      "Hotel check-in and check-out assistance",
      "Pickup & drop coordination",
      "Assistance during sightseeing and transfers",
      "Well-planned daily travel schedule",
      "On-trip coordination for a smooth and hassle-free journey"
    ],
    "accommodation": "Kanyakumari: 1 Night\nRameshwaram: 1 Night\nMadurai: 1 Night\nTotal: 3 Nights / 4 Days\nComfortable accommodation in selected hotels on a sharing basis.",
    "meals": "3 Breakfasts3 Dinners\nMeals will be provided as per the hotel schedule and itinerary.",
    "notes": "This itinerary is subject to change based on weather conditions and unforeseen circumstances. The Dhanushkodi visit is subject to time and weather conditions. Optional activities are available at an additional cost. Please note that the driver allowance is for local transportation and does not include personal expenses.",
    "paymentKey": "payment-4",
    "cancellationKey": "cancel-2",
    "faqKey": "faq-4",
    "itinerary": [
      {
        "day": 1,
        "title": "Madurai to Rameshwaram",
        "city": "Rameshwaram",
        "points": [
          "Arrive at Madurai Airport / Railway Station and meet our representative or driver. After pickup, begin your journey towards Rameshwaram, enjoying the scenic drive through Tamil Nadu’s countryside, villages and coastal landscapes.",
          "Upon reaching Rameshwaram, proceed towards Dhanushkodi, a fascinating coastal destination known for its pristine beaches, historic ruins and the meeting point of the Bay of Bengal and Indian Ocean. Visit Dhanushkodi Beach, Arichal Munai and the remains of the old town, subject to weather and road conditions.",
          "Later, return to Rameshwaram and check in to the hotel. Relax and spend the evening at leisure."
        ],
        "timing": "Mumbai",
        "nightstay": "",
        "meals": [
          "Dinner"
        ]
      },
      {
        "day": 2,
        "title": "Rameswaram to Madurai",
        "city": "Madurai",
        "points": [
          "Start your day early in the morning and get ready for the sacred Ramanathaswamy Temple Darshan. As the temple follows a traditional dress code, traditional attire is compulsory for temple entry. Boys should wear Dhoti/Mundu with an appropriate upper garment, while Girls should wear Saree, Salwar Suit, or other permitted traditional attire.",
          "Proceed to the temple for the early morning darshan and experience the spiritual atmosphere of one of India’s most revered pilgrimage sites and one of the 12 Jyotirlingas. The temple is also famous for its magnificent corridors, intricately carved pillars, and sacred 22 Theerthams (holy water wells).",
          "After completing the darshan, return to the hotel for breakfast and freshen up. Later, check out and begin your journey towards Madurai.",
          "Upon arrival in Madurai, proceed for sightseeing and visit the magnificent Meenakshi Amman Temple, renowned for its grand gopurams, intricate sculptures, and rich spiritual heritage. Also explore the surrounding Puthu Mandapam and local markets, famous for traditional handicrafts, textiles, and local products.",
          "If time permits, visit Thirumalai Nayakkar Palace, known for its impressive architecture and historic significance.",
          "After completing the sightseeing, check in to your hotel and relax."
        ],
        "timing": "Full Day",
        "nightstay": "Madurai",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 3,
        "title": "Madurai to Coimbatore",
        "city": "Coimbatore",
        "points": [
          "Start your day with breakfast at the hotel before checking out and beginning your journey towards Coimbatore, known as the gateway to the beautiful Western Ghats.",
          "Enjoy the scenic drive through the Tamil Nadu countryside, passing through villages, farmlands, and lush green landscapes. Upon arrival in Coimbatore, check in to your hotel and freshen up.",
          "Later, proceed for Coimbatore sightseeing. Visit the magnificent Adiyogi Shiva Statue at Isha Yoga Center, surrounded by the scenic Velliangiri Hills. Spend some peaceful time exploring the surroundings and enjoying the spiritual atmosphere.",
          "Later, visit Marudamalai Temple, a popular hilltop temple dedicated to Lord Murugan, subject to available time and temple timings.",
          "In the evening, explore the local markets of Coimbatore or enjoy some leisure time at the hotel.",
          "Return to the hotel and relax after the day’s journey and sightseeing."
        ],
        "timing": "Full Day",
        "nightstay": "Coimbatore",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 4,
        "title": "Coimbatore Departure",
        "city": "Coimbatore",
        "points": [
          "Start your final day with breakfast at the hotel before checking out and completing the necessary departure formalities.",
          "Depending on your departure schedule, enjoy some free time for local shopping or explore nearby areas of Coimbatore. You can shop for traditional South Indian products, spices, handicrafts, textiles, and local souvenirs.",
          "Later, proceed towards Coimbatore Railway Station / Airport as per your departure schedule.",
          "Take home beautiful memories of your journey through Kerala & Tamil Nadu, covering scenic hill stations, tea plantations, peaceful backwaters, beautiful beaches, sacred temples, cultural heritage, and the spiritual destinations of South India.",
          "Tour Ends with Happy Memories."
        ],
        "timing": "Morning",
        "nightstay": "",
        "meals": [
          "Breakfast"
        ]
      }
    ]
  },
  {
    "slug": "rameshwaram-madurai-kanyakumari-4d3n",
    "name": "Rameshwaram Madurai & Kanyakumari 4D/3N",
    "heading": "Padma & Tamil Nadu 5-Day Pilgrimage",
    "code": "TRIVANDRUM-M",
    "category": "yatra",
    "days": 4,
    "nights": 3,
    "price": 10500,
    "originalPrice": 30000,
    "intro": [
      "Experience the perfect blend of spirituality, heritage, and breathtaking landscapes on this unforgettable 5 Days / 4 Nights journey through Kerala & Tamil Nadu. Begin your adventure in the vibrant city of Trivandrum, then witness the spectacular confluence of three seas at Kanyakumari. Visit the sacred island of Rameshwaram, explore the historic ruins of Dhanushkodi, and seek blessings at the renowned Sri Ramanathaswamy Temple.",
      "Continue to the cultural capital of Tamil Nadu, Madurai, where the magnificent Meenakshi Amman Temple and other iconic landmarks showcase the region's rich heritage."
    ],
    "highlights": [
      "Spiritual journey covering major South Indian temples",
      "Trivandrum & Kovalam – Temple, beach & coastal beauty",
      "Kanyakumari – Experience the unique meeting point of three seas",
      "Rameshwaram – Sacred temple town & iconic Pamban Bridge",
      "Madurai – Explore the historic temple city",
      "Coimbatore – Gateway to Western Tamil Nadu"
    ],
    "travellers": "Couples / Families",
    "image": "/images/tours/trivandrum-madurai-5d4n.webp",
    "pricing": [
      {
        "label": "Quad Sharing",
        "price": 10500
      },
      {
        "label": "Triple Sharing",
        "price": 11000
      },
      {
        "label": "Double Sharing",
        "price": 12000
      }
    ],
    "inclusions": [
      "3 Nights Accommodation",
      "3 Breakfasts",
      "3 Dinners",
      "AC Vehicle for Transfers & Sightseeing",
      "Pickup & Drop as per itinerary",
      "Sightseeing as mentioned in the itinerary",
      "Driver charges, fuel & parking",
      "Hotel & transportation taxes/charges as applicable",
      "Trip Coordinator / Travel Support",
      "All transfers and sightseeing as per the planned itinerary"
    ],
    "exclusions": [
      "5% GST",
      "Entry fees to monuments, parks, museums, temples and sightseeing attractions",
      "Adventure activities and optional experiences (boating, safari, elephant ride, cultural shows, cable car, etc.)",
      "Train/Flight fare",
      "Lunch (except Houseboat Lunch) and any meals not mentioned in the inclusions",
      "Personal expenses such as shopping, tips, laundry, phone calls, room service and beverages",
      "Camera and video camera charges (where applicable)",
      "Travel Insurance",
      "Additional sightseeing or vehicle usage not mentioned in the itinerary",
      "Expenses due to natural calamities, roadblocks, landslides, weather conditions, strikes, political disturbances or any unforeseen circumstances",
      "Anything not specifically mentioned under \"Package Includes\""
    ],
    "support": [
      "Comfortable AC vehicle throughout the tour",
      "Dedicated driver for transfers & sightseeing",
      "Hotel check-in and check-out assistance",
      "Pickup & drop coordination",
      "Assistance during sightseeing and transfers",
      "Well-planned daily travel schedule",
      "On-trip coordination for a smooth and hassle-free journey"
    ],
    "accommodation": "Kanyakumari: 1 Night\nRameshwaram: 1 Night\nMadurai: 1 Night\nTotal: 3 Nights / 4 Days\nComfortable accommodation in selected hotels on a sharing basis.",
    "meals": "3 Breakfasts3 Dinners\nMeals will be provided as per the hotel schedule and itinerary.",
    "notes": "This itinerary is subject to change based on weather conditions and unforeseen circumstances. The Dhanushkodi visit is subject to time and weather conditions. Optional activities are available at an additional cost. Please note that the driver allowance is for local transportation and does not include personal expenses.",
    "paymentKey": "payment-4",
    "cancellationKey": "cancel-2",
    "faqKey": "faq-4",
    "itinerary": [
      {
        "day": 1,
        "title": "Madurai to Kanyakumari",
        "city": "Kanyakumari",
        "points": [
          "Arrive at Madurai Airport / Railway Station and meet our representative or driver. Begin your journey towards Kanyakumari, enjoying the scenic drive through Tamil Nadu’s countryside, villages and lush green landscapes.",
          "Upon arrival in Kanyakumari, check in to the hotel and freshen up.",
          "Later, proceed for Kanyakumari local sightseeing and explore the beautiful coastal surroundings. Visit Kanyakumari Beach, Gandhi Mandapam, Kanyakumari Temple and other nearby attractions, subject to time and opening hours.",
          "If time permits, enjoy the spectacular sunset at Kanyakumari, where the Arabian Sea, Bay of Bengal and Indian Ocean meet."
        ],
        "timing": "Full Day",
        "nightstay": "Kanyakumari",
        "meals": [
          "Dinner"
        ]
      },
      {
        "day": 2,
        "title": "Kanyakumari to Rameswaram",
        "city": "Rameswaram",
        "points": [
          "Start your day with breakfast before checking out from the hotel and proceeding towards the sacred town of Rameshwaram, one of the most important pilgrimage destinations in South India.",
          "Enjoy the scenic journey through Tamil Nadu’s countryside and coastal landscapes. Upon reaching Rameshwaram, proceed directly towards Dhanushkodi, the legendary ghost town located at the eastern tip of Rameshwaram Island.",
          "Explore the beautiful and dramatic landscapes of Dhanushkodi, including Dhanushkodi Beach, the meeting point of the sea, and the historic ruins of the old town, subject to road and weather conditions.",
          "After completing the sightseeing, proceed to your hotel in Rameshwaram and check in. Spend the evening relaxing at the hotel."
        ],
        "timing": "Full Day",
        "nightstay": "Rameswaram",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 3,
        "title": "Rameswaram to Madurai",
        "city": "Madurai",
        "points": [
          "Start your day early in the morning and get ready for the sacred Ramanathaswamy Temple Darshan. As the temple follows a traditional dress code, traditional attire is compulsory for temple entry. Boys should wear Dhoti/Mundu with an appropriate upper garment, while Girls should wear Saree, Salwar Suit, or other permitted traditional attire.",
          "Proceed to the temple for the early morning darshan and experience the spiritual atmosphere of one of India’s most revered pilgrimage sites and one of the 12 Jyotirlingas. The temple is also famous for its magnificent corridors, intricately carved pillars, and sacred 22 Theerthams (holy water wells).",
          "After completing the darshan, return to the hotel for breakfast and freshen up. Later, check out and begin your journey towards Madurai.",
          "Upon arrival in Madurai, proceed for sightseeing and visit the magnificent Meenakshi Amman Temple, renowned for its grand gopurams, intricate sculptures, and rich spiritual heritage. Also explore the surrounding Puthu Mandapam and local markets, famous for traditional handicrafts, textiles, and local products.",
          "If time permits, visit Thirumalai Nayakkar Palace, known for its impressive architecture and historic significance.",
          "After completing the sightseeing, check in to your hotel and relax."
        ],
        "timing": "Full Day",
        "nightstay": "Madurai",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 4,
        "title": "Madurai Departure",
        "city": "Madurai",
        "points": [
          "After breakfast, check out from the hotel and get ready for your onward journey. Depending on your departure schedule, you can spend some leisure time in Madurai for last-minute shopping or exploring the nearby local surroundings.",
          "Later, our vehicle will transfer you to Madurai Railway Station / Airport for your scheduled departure. Bid farewell to the beautiful destinations, temples and coastal landscapes explored during your Kerala & Tamil Nadu journey, taking back wonderful memories of the trip."
        ],
        "timing": "Morning",
        "nightstay": "",
        "meals": [
          "Breakfast"
        ]
      }
    ]
  },
  {
    "slug": "munnar-thekkady-allepy-5d4n",
    "name": "Munnar, Thekkady & Allepy 5D/4N",
    "heading": "5 Days Kerala Adventure",
    "code": "KERALA-TOUR",
    "category": "kerala",
    "days": 5,
    "nights": 4,
    "price": 11500,
    "originalPrice": 20000,
    "intro": [
      "Discover the enchanting state of Kerala with our 5-day tour. Immerse yourself in the lush landscapes, vibrant culture, and serene backwaters. This package offers a perfect blend of adventure and relaxation, showcasing the best of Kerala's natural beauty and heritage."
    ],
    "highlights": [
      "Munnar Hills & Tea Plantations",
      "Scenic Waterfalls & Mountain Roads",
      "Thekkady Nature & Spice Plantation Experience",
      "Alleppey Backwater & Boathouse Experience",
      "Beautiful Kerala Landscapes & Local Villages"
    ],
    "travellers": "Families / Couples",
    "image": "/images/tours/munnar-thekkady-allepy-5d4n.webp",
    "pricing": [
      {
        "label": "Quad Sharing",
        "price": 11500
      },
      {
        "label": "Triple Sharing",
        "price": 12000
      },
      {
        "label": "Double Sharing",
        "price": 13500
      }
    ],
    "inclusions": [
      "4 Nights Accommodation – Munnar (2N), Thekkady (1N), Alleppey (1N)",
      "4 Breakfasts & 4 Dinners",
      "1 Lunch at Alleppey Boathouse",
      "AC Vehicle for Transfers & Sightseeing",
      "Ernakulam Railway Station / Kochi Airport Pickup & Drop",
      "Sightseeing as per the itinerary",
      "Driver & Trip Coordinator Support",
      "All applicable hotel & transportation charges"
    ],
    "exclusions": [
      "5% GST on the total package cost",
      "Train / Flight tickets to and from Kochi",
      "Lunches except the Boathouse Lunch",
      "Entry fees, activity charges & camera fees",
      "Boating, Jeep Safari, Elephant Ride and other optional activities",
      "Personal expenses, shopping, snacks & beverages",
      "Travel insurance",
      "Tips and gratuities",
      "Early check-in / late check-out charges",
      "Any additional sightseeing not mentioned in the itinerary",
      "Expenses due to weather, roadblocks or unforeseen circumstances",
      "Any additional cost arising from changes requested by the guest",
      "Anything not specifically mentioned under Inclusions"
    ],
    "support": [
      "Comfortable AC Vehicle for Transfers & Sightseeing",
      "Hotel Check-in & Check-out Assistance",
      "Ernakulam Railway Station / Kochi Airport Pickup & Drop",
      "Dedicated Driver / Trip Coordinator Support",
      "Assistance Throughout the Journey",
      "Well-Planned & Hassle-Free Kerala Experience"
    ],
    "accommodation": "Munnar: 2 NightsThekkady: 1 NightAlleppey: 1 NightTotal: 4 Nights / 5 DaysComfortable accommodation in selected hotels on a sharing basis.",
    "meals": "4 Breakfasts\n4 Dinners\n1 Lunch – Served at the Alleppey Boathouse\nMeals will be provided as per the itinerary and hotel schedule.",
    "notes": "This package includes standard accommodations and meals. Pricing is per person based on quad sharing. Premium package offers upgraded accommodations and additional services. Contact us for customized itineraries.",
    "paymentKey": "payment-2",
    "cancellationKey": "cancel-2",
    "faqKey": "faq-2",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival in Kerala",
        "city": "Munnar",
        "points": [
          "Arrive at Ernakulam Railway Station, meet our representative/driver and proceed towards Munnar. Enjoy a scenic drive through Kerala’s beautiful countryside, lush green landscapes, spice and rubber plantations, winding mountain roads and charming villages.",
          "En route, you can enjoy scenic photo stops at Cheeyappara Waterfalls, Valara Waterfalls and other beautiful viewpoints, subject to time, weather and road conditions.",
          "Upon arrival in Munnar, check in to the hotel and relax. The evening is free to explore the nearby market and surroundings at your own pace."
        ],
        "timing": "Full Day",
        "nightstay": "Munnar",
        "meals": [
          "Dinner"
        ]
      },
      {
        "day": 2,
        "title": "Munnar Sightseeing",
        "city": "Munnar",
        "points": [
          "Start your day with breakfast before heading out for a full-day sightseeing tour of Munnar, surrounded by rolling hills, tea plantations, forests, and beautiful lakes.",
          "Visit Mattupetty Dam, a popular scenic attraction offering beautiful views of the surrounding mountains and lake. Continue towards Echo Point, known for its natural echo phenomenon and peaceful surroundings.",
          "Later, visit Kundala Lake and Kundala Dam, surrounded by lush green hills and tea plantations. Enjoy some time taking photographs and appreciating the natural beauty of the region.",
          "You may also visit the Tea Museum, where you can learn about the history and traditional methods of tea production in Munnar, subject to opening hours.",
          "After completing the sightseeing, return to the hotel and spend the evening at leisure. You can explore the local market or simply relax at the property."
        ],
        "timing": "Full Day",
        "nightstay": "Munnar",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 3,
        "title": "Thekkady Sightseeing",
        "city": "Thekkady",
        "points": [
          "Start your day with breakfast before checking out from your hotel and proceeding towards Thekkady, one of Kerala’s most famous destinations for wildlife, forests, and spice plantations.",
          "Enjoy a scenic drive through the Western Ghats, passing through winding mountain roads, dense greenery, spice plantations, and beautiful countryside.",
          "Upon arrival in Thekkady, check in to your hotel and relax.",
          "Later, you can explore the local market and shop for Kerala’s famous spices, tea, coffee, handmade products, and other souvenirs.",
          "Guests can also opt for activities such as Periyar Lake boating, spice plantation visits, Kathakali performances, or Kalaripayattu shows, subject to availability and additional charges.",
          "Return to the hotel after the evening activities."
        ],
        "timing": "Full Day",
        "nightstay": "Thekkady",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 4,
        "title": "Alleppey Boat House",
        "city": "Alleppey",
        "points": [
          "Start your day with breakfast before checking out and beginning your journey towards Alleppey, famously known as the Venice of the East and renowned for its beautiful backwaters.",
          "Drive through the scenic Kerala countryside, passing lush paddy fields, coconut plantations, villages, and waterways.",
          "Upon arrival in Alleppey, board your houseboat and enjoy a welcome drink before completing the check-in formalities. Enjoy a delicious lunch on board as the houseboat cruises through the serene backwaters.",
          "Relax while enjoying views of traditional villages, coconut trees, paddy fields, and local life along the waterways. Later, witness the beautiful sunset over the backwaters and enjoy the peaceful surroundings."
        ],
        "timing": "Full Day",
        "nightstay": "Alleppey Houseboat",
        "meals": [
          "Breakfast",
          "Lunch",
          "Dinner"
        ]
      },
      {
        "day": 5,
        "title": "Return Journey",
        "city": "kochi",
        "points": [
          "After breakfast, check out from the hotel and start your journey from Alleppey (Alappuzha) to Kochi. Enjoy the scenic drive through Kerala’s lush greenery, charming villages, coconut plantations and beautiful backwater surroundings. Depending on your departure schedule, you may have some free time in Kochi to explore the local surroundings, do some shopping or relax before your onward journey.",
          "Later, proceed towards your scheduled drop point. The vehicle will provide a convenient drop at Ernakulam Railway Station or Kochi Airport, making your onward journey comfortable and hassle-free. The tour concludes with wonderful memories of Kerala and its beautiful landscapes."
        ],
        "timing": "3 Hrs",
        "nightstay": "",
        "meals": [
          "Breakfast"
        ]
      }
    ]
  },
  {
    "slug": "panch-jyotirlinga-yatra-5d4n",
    "name": "Panch Jyotirlinga Yatra 5D/4N",
    "heading": "Panch Jyotirlinga Pilgrimage",
    "code": "PANCH-JYOTIR",
    "category": "yatra",
    "days": 5,
    "nights": 4,
    "price": 11999,
    "originalPrice": 19998,
    "intro": [
      "Embark on a transformative 5-day journey to the five most revered Jyotirlinga temples in India. This pilgrimage offers a profound spiritual experience, allowing you to connect with ancient traditions and immerse yourself in the sacred atmosphere."
    ],
    "highlights": [
      "Experience the divine Panch Jyotirlingas. Explore ancient temples. Spiritual journey. Hassle-free pilgrimage."
    ],
    "travellers": "Spiritual Seekers",
    "image": "/images/tours/panch-jyotirlinga-yatra-5d4n.webp",
    "pricing": [
      {
        "label": "Double Sharing",
        "price": 13500
      }
    ],
    "inclusions": [
      "Accommodation: 3 Nights Hotel Stay",
      "Meals: 3 Breakfast & Dinner",
      "Transportation: AC Tempo Traveller (as per group size)",
      "VIP/Direct Darshan Pass",
      "Bhimashankar",
      "Trimbakeshwar",
      "Omkareshwar",
      "Mahakaleshwar",
      "Shirdi"
    ],
    "exclusions": [
      "Train ticket fare",
      "Entry fees pass",
      "Personal expenses (shopping, tips, laundry, etc.)",
      "Medical/Emergency Expenses",
      "Lunch on all 5 days",
      "Any cost due to landslide, weather, or road blockage",
      "Breakfast on Day 3 & Dinner on Day 2",
      "Travel insurance, medical expenses & emergency evacuation",
      "Anything not mentioned in Includes"
    ],
    "support": [
      "Dedicated support team",
      "Emergency assistance",
      "Local guides"
    ],
    "accommodation": "Comfortable hotels with double sharing.",
    "meals": "Breakfast included daily.",
    "notes": "Package includes VIP Darshan Passes for all temples. Triple sharing means 3 persons will be accommodated in one double-bed room, and an extra mattress will be provided for the third person. Prices vary based on seat number. Travel dates: July 8 – 11, August 5 – 9, September 2 – 6, October 2 – 6, December 25 – 29.",
    "paymentKey": "payment-2",
    "cancellationKey": "cancel-2",
    "faqKey": "faq-2",
    "itinerary": [
      {
        "day": 1,
        "title": "Bhimashankar",
        "city": "Bhimashankar",
        "points": [
          "Visit the sacred Bhimashankar Temple, one of the twelve Jyotirlingas.",
          "Explore the surrounding forest and waterfalls.",
          "Experience the serene atmosphere and spiritual significance of the place.",
          "Witness the natural beauty of the Sahyadri range.",
          "Learn about the temple's history and mythology."
        ],
        "timing": "Morning - Afternoon",
        "nightstay": "",
        "meals": [
          "Dinner"
        ]
      },
      {
        "day": 2,
        "title": "Grishneshwar",
        "city": "Grishneshwar",
        "points": [
          "Visit the Grishneshwar Temple, another Jyotirlinga.",
          "Explore the cave temples and sacred pools.",
          "Experience the unique architecture and religious significance.",
          "Witness the evening aarti ceremony.",
          "Enjoy the panoramic views of the surrounding landscape."
        ],
        "timing": "Morning - Evening",
        "nightstay": "",
        "meals": [
          "Breakfast"
        ]
      },
      {
        "day": 3,
        "title": "Mahakaleshwar",
        "city": "Ujjain",
        "points": [
          "Visit the Mahakaleshwar Temple, one of the most important Shiva temples.",
          "Experience the grandeur and spiritual atmosphere of the temple.",
          "Witness the morning rituals and ceremonies.",
          "Learn about the temple's history and significance.",
          "Explore the surrounding city of Ujjain."
        ],
        "timing": "Morning - Evening",
        "nightstay": "",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 4,
        "title": "Omkareshwar",
        "city": "Omkareshwar",
        "points": [
          "Visit the Omkareshwar Temple, a stunning temple complex on an island.",
          "Explore the intricate carvings and architectural marvels.",
          "Cross the Arbuda Setu (bridge) to reach the temple.",
          "Experience the spiritual energy of the place.",
          "Witness the evening aarti ceremony."
        ],
        "timing": "Morning - Evening",
        "nightstay": "",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 5,
        "title": "Trimbakeshwar",
        "city": "Trimbakeshwar",
        "points": [
          "Visit the Trimbakeshwar Temple, one of the 12 Jyotirlingas and a major pilgrimage site.",
          "Explore the three Shiva lingams representing different deities.",
          "Witness the sacred Pushkarini (holy pond).",
          "Experience the spiritual significance of the temple.",
          "Learn about the temple's history and mythology."
        ],
        "timing": "Morning - Afternoon",
        "nightstay": "",
        "meals": [
          "Breakfast"
        ]
      }
    ]
  },
  {
    "slug": "aadrai-jungle-trek-2",
    "name": "Aadrai Jungle Trek",
    "heading": "Mumbai Jungle Adventure",
    "code": "AADRAI-JUNGL-P670",
    "category": "trek",
    "days": 2,
    "nights": 1,
    "price": 12000,
    "originalPrice": 2000,
    "intro": [
      "Embark on an unforgettable jungle trek from Mumbai! Journey through lush landscapes, cascading waterfalls, and scenic viewpoints. Our experienced guides will lead you on an adventure filled with exploration, relaxation, and stunning photo opportunities. Create lifetime memories in the heart of nature."
    ],
    "highlights": [
      "Explore Dense Forests 🏞️ Discover Waterfalls 📸 Capture Memories 👨‍⚕️ Experienced Guides 🚌 Comfortable Travel"
    ],
    "travellers": "Adventure Seekers & Nature Lovers",
    "image": "/images/tours/aadrai-jungle-trek.webp",
    "pricing": [],
    "inclusions": [
      "Comfortable AC Bus Travel",
      "Breakfast & Lunch",
      "Experienced Trek Leaders",
      "First Aid Support",
      "Friendly Group Experience",
      "Photography Opportunities",
      "Safe & Secure Travel",
      "Lifetime Memories",
      "Zero Hidden Charges",
      "Women's Safety Priority",
      "Friendly Travel Community",
      "Comfortable Transportation",
      "Well-Planned & Organized Trips"
    ],
    "exclusions": [
      "Flight Tickets",
      "Personal Expenses",
      "Extra Mattress/Extra Bed Charges",
      "Anything not mentioned under \"Package Inclusions\"",
      "Adventure activities & optional experiences (boating, safari, elephant ride, cultural shows, cable car, etc.)",
      "Lunch & any meals not mentioned in inclusions",
      "Personal expenses (shopping, tips, laundry, phone calls, etc.)",
      "Entry fees to monuments, parks, museums & sightseeing spots",
      "Anything not specifically mentioned in “Package Includes”"
    ],
    "support": [
      "Experienced First Aid Team 🧭 Local Guides 🛡️ Safety Protocols 📞 Emergency Contacts"
    ],
    "accommodation": "No Accommodation Will Provided",
    "meals": "Breakfast & Lunch included.",
    "notes": "",
    "paymentKey": "payment-5",
    "cancellationKey": "cancel-3",
    "faqKey": "faq-1",
    "itinerary": [
      {
        "day": 1,
        "title": "Mumbai Pickup",
        "city": "",
        "points": [],
        "timing": "",
        "nightstay": "",
        "meals": []
      },
      {
        "day": 2,
        "title": "Trek Day",
        "city": "",
        "points": [],
        "timing": "",
        "nightstay": "",
        "meals": []
      }
    ]
  },
  {
    "slug": "kedarnath-yatra-ex-delhi",
    "name": "Kedarnath Yatra EX Delhi",
    "heading": "6 Day Kedarnath Yatra",
    "code": "DO-DHAM-YATR",
    "category": "yatra",
    "days": 6,
    "nights": 5,
    "price": 12000,
    "originalPrice": 15000,
    "intro": [
      "Kedarnath Yatra – A Divine Journey to the Sacred Himalayas",
      "Experience the spiritual beauty of Kedarnath Dham, one of the most revered Jyotirlingas of Lord Shiva, surrounded by majestic Himalayan peaks. This divine journey offers a perfect blend of devotion, adventure, scenic landscapes, and unforgettable memories with comfortable stays, guided assistance, and a well-planned itinerary."
    ],
    "highlights": [
      "Spiritual Journey",
      "Holiest Pilgrimage Destinations",
      "Scenic Himalayan Landscapes",
      "Divine Temple Darshans",
      "Cultural Immersion"
    ],
    "travellers": "",
    "image": "/images/tours/kedarnath-yatra-ex-haridwar.webp",
    "pricing": [
      {
        "label": "Quad Sharing",
        "price": 12000
      },
      {
        "label": "Triple Sharing",
        "price": 13000
      },
      {
        "label": "Double Sharing",
        "price": 14000
      }
    ],
    "inclusions": [
      "Airport & Railway Station Pickup & Drop",
      "Comfortable Hotel / Resort / Tent Accommodation",
      "Daily Breakfast & Dinner",
      "All Sightseeing as per the Itinerary",
      "Transportation by Non-AC Vehicle in the Hills (AC operates only in the plains, subject to weather and government regulations)",
      "All Toll Taxes, Parking Charges & Driver Allowances",
      "Experienced Tour Captain / Trip Coordinator",
      "24×7 On-Tour Assistance",
      "Children below 5 years travel Complimentary (without extra bed and vehicle seat)"
    ],
    "exclusions": [
      "5% GST will be charged extra on the total package cost.",
      "Flight Tickets & Train Tickets (unless specifically mentioned)",
      "Lunch & any meals not mentioned under the package inclusions",
      "Personal expenses (shopping, tips, laundry, phone calls, beverages, etc.)",
      "Entry fees to monuments, parks, museums & sightseeing attractions",
      "Adventure activities & optional experiences (River Rafting, Bungee Jumping, Zipline, Boating, Safari, Cable Car, Cultural Shows, etc.)",
      "Pony, Palki, Pithoo & Helicopter charges",
      "Ropeway charges (Mansa Devi, Chandi Devi or any other ropeway)",
      "Local shuttle/jeep charges (Sonprayag – Gaurikund or wherever applicable)",
      "VIP Darshan / Special Entry Passes at temples or monuments",
      "Medical expenses, doctor consultation & emergency evacuation charges",
      "Travel Insurance of any kind",
      "Expenses arising due to natural calamities, landslides, roadblocks, weather conditions, strikes, vehicle breakdowns, or any unforeseen circumstances",
      "Any increase in government taxes, tolls, parking charges, fuel prices, or permit fees after booking",
      "Anything not specifically mentioned under \"Package Includes\"."
    ],
    "support": [
      "Comfortable Transportation & Sightseeing",
      "Experienced Tour Captain",
      "24×7 On-Tour Assistance",
      "Dedicated Ground Support",
      "Safe & Well-Planned Itinerary",
      "No Hidden Charges"
    ],
    "accommodation": "5 Nights Accommodations4 Nights Hotel1 Nights Tent stay",
    "meals": "4 Breakfast & 5 Dinner",
    "notes": "Additional Expenses Payable by Guests: During the tour, guests are required to bear certain expenses directly wherever applicable. These include Mansa Devi & Chandi Devi Ropeway tickets, Sonprayag to Gaurikund local shuttle/jeep charges, Pony, Palki, Pithoo, and Helicopter services for Yamunotri and Kedarnath, luggage handling/storage charges at the Rampur/Sitapur hotel during the Kedarnath trek, all adventure activities at Shivpuri (such as River Rafting, Bungee Jumping, Giant Swing, Zipline, Flying Fox, etc.), VIP Darshan passes, camera/video camera fees (if applicable), room heater charges, laundry, porter charges, personal shopping, meals and beverages not included in the package, medical expenses, and any other personal expenses or services not specifically mentioned under the package inclusions. All such charges must be paid directly by the guest at the respective location.",
    "paymentKey": "payment-3",
    "cancellationKey": "cancel-2",
    "faqKey": "faq-6",
    "itinerary": [
      {
        "day": 1,
        "title": "Delhi to Haridwar",
        "city": "Haridwar",
        "points": [
          "Upon arrival in Delhi, begin your spiritual journey towards Haridwar, one of India's holiest pilgrimage destinations nestled on the banks of the sacred River Ganga. Enjoy the scenic drive through the plains of North India before reaching Haridwar.",
          "Upon arrival, complete the hotel check-in formalities and freshen up. Visit the revered Mansa Devi Temple and Chandi Devi Temple. Guests may opt to reach the temples via the scenic Ropeway (Udan Khatola) at their own cost, offering breathtaking aerial views of Haridwar, the Ganga River, and the surrounding hills. Seek blessings at both sacred Shakti Peeths before proceeding to the iconic Har Ki Pauri to witness the mesmerizing Ganga Aarti, where thousands of lamps illuminate the river, creating a truly divine atmosphere. You may also explore the nearby local markets and temples.",
          "Return to the hotel after the evening prayers. Enjoy a delicious dinner and relax with an overnight stay in Haridwar."
        ],
        "timing": "Full Day",
        "nightstay": "Haridwar",
        "meals": [
          "Dinner"
        ]
      },
      {
        "day": 2,
        "title": "Haridwar to Rampur / Sitapur",
        "city": "Dhari Devi & Devprayag Sangam",
        "points": [
          "After breakfast, check out from the hotel and begin your journey towards Rampur/Sitapur, the base point for the sacred Kedarnath Yatra. Enjoy a scenic drive through the beautiful Garhwal Himalayas, passing through winding mountain roads, lush green valleys, and breathtaking landscapes.",
          "En route, stop at the Devprayag Sangam View Point to witness the magnificent confluence of the Alaknanda and Bhagirathi rivers from the bridge, where they merge to form the holy River Ganga. Spend some time capturing the panoramic views and enjoying the spiritual atmosphere.",
          "Continue your journey towards Rampur/Sitapur. Upon arrival, complete the hotel check-in formalities and relax. Prepare yourself for the next day's sacred Kedarnath pilgrimage.",
          "Enjoy dinner and an overnight stay at Rampur/Sitapur."
        ],
        "timing": "Full Day",
        "nightstay": "Rampur/Sitapur",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 3,
        "title": "Rampur / Sitapur to Kedarnath",
        "city": "Kedarnath",
        "points": [
          "Wake up early, check out from the hotel, and proceed towards Sonprayag. From here, take the local shuttle to Gaurikund (at your own cost), the starting point of the Kedarnath trek.",
          "Please Note: As only essential luggage can be carried during the trek, your main luggage/baggage will be left at the hotel in Rampur/Sitapur. Guests are required to pay the luggage handling/storage charges directly to the hotel manager (if applicable). It is recommended to carry only a small backpack with essentials required for the overnight stay in Kedarnath.",
          "Begin the sacred 18 km trek (one way) from Gaurikund to Kedarnath, which generally takes 7–10 hours, depending on your pace. Pony, palki, pithoo, and helicopter services are available at an additional cost for pilgrims who prefer an alternative to trekking.",
          "Upon arrival in Kedarnath, check in to your tent stay near Kedarnath Temple and freshen up. In the evening, enjoy the mesmerizing Kedarnath Temple Aarti from the vicinity of your accommodation, surrounded by the serene Himalayan landscape and the divine atmosphere of the shrine."
        ],
        "timing": "Full Day",
        "nightstay": "Kedarnath Tent Stay",
        "meals": [
          "Dinner"
        ]
      },
      {
        "day": 4,
        "title": "Kedarnath to Rampur / Sitapur",
        "city": "Kedarnath",
        "points": [
          "Wake up early and visit the sacred Shri Kedarnath Temple for the auspicious Morning Darshan. After seeking the blessings of Lord Shiva, explore the nearby attractions around the temple, including the Adi Shankaracharya Samadhi, Bhairavnath Temple (subject to weather and time availability), and enjoy the breathtaking views of the surrounding Himalayan peaks.",
          "Later, return to your accommodation for breakfast, complete the check-out formalities, and begin the 18 km descent trek from Kedarnath to Gaurikund, which generally takes 5–7 hours. Pony, palki, and pithoo services are available at an additional cost.",
          "Upon reaching Gaurikund, take the local shuttle to Sonprayag (at your own cost), where your vehicle will be waiting. Continue your journey to Rampur/Sitapur.",
          "Upon arrival, check in to the hotel. Enjoy a delicious dinner and relax with an overnight stay at Rampur/Sitapur."
        ],
        "timing": "Full Day",
        "nightstay": "Rampur/Sitapur",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 5,
        "title": "Rampur/Sitapur to Shivpuri",
        "city": "Rishikesh",
        "points": [
          "After breakfast, check out from the hotel and begin your journey towards Shivpuri, Rishikesh. Enjoy a scenic drive through the beautiful Garhwal Himalayas, passing through winding mountain roads, lush green valleys, and breathtaking landscapes.",
          "Upon arrival at Shivpuri, complete the resort check-in formalities and freshen up. Spend the evening relaxing at the resort's swimming pool or enjoy the lively DJ Night, making it a perfect way to unwind after completing the sacred Kedarnath Yatra.",
          "Enjoy a delicious dinner and relax with an overnight stay at the Shivpuri Resort."
        ],
        "timing": "full Day",
        "nightstay": "Shivpuri (Rishikesh)",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 6,
        "title": "Rishikesh Sightseeing to Delhi Drop",
        "city": "Rishikesh",
        "points": [
          "After breakfast, check out from the resort and enjoy your morning with exciting adventure activities in Shivpuri. Guests can participate in thrilling experiences such as River Rafting, Bungee Jumping, Giant Swing, Zipline, and other adventure sports at their own cost. Adventure activity timings are from 9:00 AM to 2:00 PM.",
          "At 2:00 PM, proceed towards Rishikesh for sightseeing. Visit popular attractions including Ram Jhula, Laxman Jhula, and Parmarth Niketan Ashram. In the evening, witness the mesmerizing Ganga Aarti at Triveni Ghat, a spiritually uplifting experience filled with devotional chants, illuminated lamps, and prayers on the banks of the sacred River Ganga. You will also have free time to explore the local markets and shop for souvenirs.",
          "At 7:00 PM, begin your return journey to Delhi, carrying unforgettable memories of the sacred Char Dham Yatra and the adventure-filled experiences of Rishikesh. Overnight journey to Delhi."
        ],
        "timing": "Full Day",
        "nightstay": "",
        "meals": [
          "Breakfast"
        ]
      }
    ]
  },
  {
    "slug": "rameshwaram-madurai-kanyakumari-coimbatore-5d4n",
    "name": "Rameshwaram Madurai Kanyakumari & Coimbatore 5D/4N",
    "heading": "Padma & Tamil Nadu 5-Day Pilgrimage",
    "code": "TRIVANDRUM-M-2",
    "category": "yatra",
    "days": 5,
    "nights": 4,
    "price": 13000,
    "originalPrice": 30000,
    "intro": [
      "Experience the perfect blend of spirituality, heritage, and breathtaking landscapes on this unforgettable 5 Days / 4 Nights journey through Kerala & Tamil Nadu. Begin your adventure in the vibrant city of Trivandrum, then witness the spectacular confluence of three seas at Kanyakumari. Visit the sacred island of Rameshwaram, explore the historic ruins of Dhanushkodi, and seek blessings at the renowned Sri Ramanathaswamy Temple.",
      "Continue to the cultural capital of Tamil Nadu, Madurai, where the magnificent Meenakshi Amman Temple and other iconic landmarks showcase the region's rich heritage."
    ],
    "highlights": [
      "Spiritual journey covering major South Indian temples",
      "Trivandrum & Kovalam – Temple, beach & coastal beauty",
      "Kanyakumari – Experience the unique meeting point of three seas",
      "Rameshwaram – Sacred temple town & iconic Pamban Bridge",
      "Madurai – Explore the historic temple city",
      "Coimbatore – Gateway to Western Tamil Nadu"
    ],
    "travellers": "Couples / Families",
    "image": "/images/tours/trivandrum-madurai-5d4n.webp",
    "pricing": [
      {
        "label": "Quad Sharing",
        "price": 13000
      },
      {
        "label": "Triple Sharing",
        "price": 13500
      },
      {
        "label": "Double Sharing",
        "price": 15000
      }
    ],
    "inclusions": [
      "4 Nights Accommodation",
      "4 Breakfasts",
      "4 Dinners",
      "AC Vehicle for Transfers & Sightseeing",
      "Pickup & Drop as per itinerary",
      "Sightseeing as mentioned in the itinerary",
      "Driver charges, fuel & parking",
      "Hotel & transportation taxes/charges as applicable",
      "Trip Coordinator / Travel Support",
      "All transfers and sightseeing as per the planned itinerary"
    ],
    "exclusions": [
      "5% GST",
      "Entry fees to monuments, parks, museums, temples and sightseeing attractions",
      "Adventure activities and optional experiences (boating, safari, elephant ride, cultural shows, cable car, etc.)",
      "Train/Flight fare",
      "Lunch (except Houseboat Lunch) and any meals not mentioned in the inclusions",
      "Personal expenses such as shopping, tips, laundry, phone calls, room service and beverages",
      "Camera and video camera charges (where applicable)",
      "Travel Insurance",
      "Additional sightseeing or vehicle usage not mentioned in the itinerary",
      "Expenses due to natural calamities, roadblocks, landslides, weather conditions, strikes, political disturbances or any unforeseen circumstances",
      "Anything not specifically mentioned under \"Package Includes\""
    ],
    "support": [
      "Comfortable AC vehicle throughout the tour",
      "Dedicated driver for transfers & sightseeing",
      "Hotel check-in and check-out assistance",
      "Pickup & drop coordination",
      "Assistance during sightseeing and transfers",
      "Well-planned daily travel schedule",
      "On-trip coordination for a smooth and hassle-free journey"
    ],
    "accommodation": "Kanyakumari: 1 Night\nRameshwaram: 1 Night\nMadurai: 1 NightCoimbatore: 1 Night\nTotal: 4 Nights / 5 Days\nComfortable accommodation in selected hotels on a sharing basis.",
    "meals": "4 Breakfasts4 Dinners\nMeals will be provided as per the hotel schedule and itinerary.",
    "notes": "This itinerary is subject to change based on weather conditions and unforeseen circumstances. The Dhanushkodi visit is subject to time and weather conditions. Optional activities are available at an additional cost. Please note that the driver allowance is for local transportation and does not include personal expenses.",
    "paymentKey": "payment-4",
    "cancellationKey": "cancel-2",
    "faqKey": "faq-4",
    "itinerary": [
      {
        "day": 1,
        "title": "Madurai to Kanyakumari",
        "city": "Kanyakumari",
        "points": [
          "Arrive at Madurai Airport / Railway Station and meet our representative or driver. Begin your journey towards Kanyakumari, enjoying the scenic drive through Tamil Nadu’s countryside, villages and lush green landscapes.",
          "Upon arrival in Kanyakumari, check in to the hotel and freshen up.",
          "Later, proceed for Kanyakumari local sightseeing and explore the beautiful coastal surroundings. Visit Kanyakumari Beach, Gandhi Mandapam, Kanyakumari Temple and other nearby attractions, subject to time and opening hours.",
          "If time permits, enjoy the spectacular sunset at Kanyakumari, where the Arabian Sea, Bay of Bengal and Indian Ocean meet."
        ],
        "timing": "Full Day",
        "nightstay": "Kanyakumari",
        "meals": [
          "Dinner"
        ]
      },
      {
        "day": 2,
        "title": "Kanyakumari to Rameswaram",
        "city": "Rameswaram",
        "points": [
          "Start your day with breakfast before checking out from the hotel and proceeding towards the sacred town of Rameshwaram, one of the most important pilgrimage destinations in South India.",
          "Enjoy the scenic journey through Tamil Nadu’s countryside and coastal landscapes. Upon reaching Rameshwaram, proceed directly towards Dhanushkodi, the legendary ghost town located at the eastern tip of Rameshwaram Island.",
          "Explore the beautiful and dramatic landscapes of Dhanushkodi, including Dhanushkodi Beach, the meeting point of the sea, and the historic ruins of the old town, subject to road and weather conditions.",
          "After completing the sightseeing, proceed to your hotel in Rameshwaram and check in. Spend the evening relaxing at the hotel."
        ],
        "timing": "Full Day",
        "nightstay": "Rameswaram",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 3,
        "title": "Rameswaram to Madurai",
        "city": "Madurai",
        "points": [
          "Start your day early in the morning and get ready for the sacred Ramanathaswamy Temple Darshan. As the temple follows a traditional dress code, traditional attire is compulsory for temple entry. Boys should wear Dhoti/Mundu with an appropriate upper garment, while Girls should wear Saree, Salwar Suit, or other permitted traditional attire.",
          "Proceed to the temple for the early morning darshan and experience the spiritual atmosphere of one of India’s most revered pilgrimage sites and one of the 12 Jyotirlingas. The temple is also famous for its magnificent corridors, intricately carved pillars, and sacred 22 Theerthams (holy water wells).",
          "After completing the darshan, return to the hotel for breakfast and freshen up. Later, check out and begin your journey towards Madurai.",
          "Upon arrival in Madurai, proceed for sightseeing and visit the magnificent Meenakshi Amman Temple, renowned for its grand gopurams, intricate sculptures, and rich spiritual heritage. Also explore the surrounding Puthu Mandapam and local markets, famous for traditional handicrafts, textiles, and local products.",
          "If time permits, visit Thirumalai Nayakkar Palace, known for its impressive architecture and historic significance.",
          "After completing the sightseeing, check in to your hotel and relax."
        ],
        "timing": "Full Day",
        "nightstay": "Madurai",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 4,
        "title": "Madurai to Coimbatore",
        "city": "Coimbatore",
        "points": [
          "Start your day with breakfast at the hotel before checking out and beginning your journey towards Coimbatore, known as the gateway to the beautiful Western Ghats.",
          "Enjoy the scenic drive through the Tamil Nadu countryside, passing through villages, farmlands, and lush green landscapes. Upon arrival in Coimbatore, check in to your hotel and freshen up.",
          "Later, proceed for Coimbatore sightseeing. Visit the magnificent Adiyogi Shiva Statue at Isha Yoga Center, surrounded by the scenic Velliangiri Hills. Spend some peaceful time exploring the surroundings and enjoying the spiritual atmosphere.",
          "Later, visit Marudamalai Temple, a popular hilltop temple dedicated to Lord Murugan, subject to available time and temple timings.",
          "In the evening, explore the local markets of Coimbatore or enjoy some leisure time at the hotel.",
          "Return to the hotel and relax after the day’s journey and sightseeing."
        ],
        "timing": "Full Day",
        "nightstay": "Coimbatore",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 5,
        "title": "Coimbatore Departure",
        "city": "Coimbatore",
        "points": [
          "Start your final day with breakfast at the hotel before checking out and completing the necessary departure formalities.",
          "Depending on your departure schedule, enjoy some free time for local shopping or explore nearby areas of Coimbatore. You can shop for traditional South Indian products, spices, handicrafts, textiles, and local souvenirs.",
          "Later, proceed towards Coimbatore Railway Station / Airport as per your departure schedule.",
          "Take home beautiful memories of your journey through Kerala & Tamil Nadu, covering scenic hill stations, tea plantations, peaceful backwaters, beautiful beaches, sacred temples, cultural heritage, and the spiritual destinations of South India.",
          "Tour Ends with Happy Memories."
        ],
        "timing": "Morning",
        "nightstay": "",
        "meals": [
          "Breakfast"
        ]
      }
    ]
  },
  {
    "slug": "trivandrum-madurai-5d4n",
    "name": "Trivandrum - Madurai 5D/4N",
    "heading": "Padma & Tamil Nadu 5-Day Pilgrimage",
    "code": "TRIVANDRUM-C",
    "category": "yatra",
    "days": 5,
    "nights": 4,
    "price": 13000,
    "originalPrice": 30000,
    "intro": [
      "Experience the perfect blend of spirituality, heritage, and breathtaking landscapes on this unforgettable 5 Days / 4 Nights journey through Kerala & Tamil Nadu. Begin your adventure in the vibrant city of Trivandrum, then witness the spectacular confluence of three seas at Kanyakumari. Visit the sacred island of Rameshwaram, explore the historic ruins of Dhanushkodi, and seek blessings at the renowned Sri Ramanathaswamy Temple.",
      "Continue to the cultural capital of Tamil Nadu, Madurai, where the magnificent Meenakshi Amman Temple and other iconic landmarks showcase the region's rich heritage."
    ],
    "highlights": [
      "Spiritual journey covering major South Indian temples",
      "Trivandrum & Kovalam – Temple, beach & coastal beauty",
      "Kanyakumari – Experience the unique meeting point of three seas",
      "Rameshwaram – Sacred temple town & iconic Pamban Bridge",
      "Madurai – Explore the historic temple city",
      "Coimbatore – Gateway to Western Tamil Nadu"
    ],
    "travellers": "Couples / Families",
    "image": "/images/tours/trivandrum-madurai-5d4n.webp",
    "pricing": [
      {
        "label": "Quad Sharing",
        "price": 13000
      },
      {
        "label": "Triple Sharing",
        "price": 13500
      },
      {
        "label": "Double Sharing",
        "price": 15000
      }
    ],
    "inclusions": [
      "4 Nights Accommodation",
      "4 Breakfasts",
      "4 Dinners",
      "AC Vehicle for Transfers & Sightseeing",
      "Pickup & Drop as per itinerary",
      "Sightseeing as mentioned in the itinerary",
      "Driver charges, fuel & parking",
      "Hotel & transportation taxes/charges as applicable",
      "Trip Coordinator / Travel Support",
      "All transfers and sightseeing as per the planned itinerary"
    ],
    "exclusions": [
      "5% GST",
      "Entry fees to monuments, parks, museums, temples and sightseeing attractions",
      "Adventure activities and optional experiences (boating, safari, elephant ride, cultural shows, cable car, etc.)",
      "Train/Flight fare",
      "Lunch (except Houseboat Lunch) and any meals not mentioned in the inclusions",
      "Personal expenses such as shopping, tips, laundry, phone calls, room service and beverages",
      "Camera and video camera charges (where applicable)",
      "Travel Insurance",
      "Additional sightseeing or vehicle usage not mentioned in the itinerary",
      "Expenses due to natural calamities, roadblocks, landslides, weather conditions, strikes, political disturbances or any unforeseen circumstances",
      "Anything not specifically mentioned under \"Package Includes\""
    ],
    "support": [
      "Comfortable AC vehicle throughout the tour",
      "Dedicated driver for transfers & sightseeing",
      "Hotel check-in and check-out assistance",
      "Pickup & drop coordination",
      "Assistance during sightseeing and transfers",
      "Well-planned daily travel schedule",
      "On-trip coordination for a smooth and hassle-free journey"
    ],
    "accommodation": "Kovalam / Trivandrum: 1 Night\nKanyakumari: 1 Night\nRameshwaram: 1 Night\nMadurai: 1 Night\nTotal: 4 Nights / 5 Days\nComfortable accommodation in selected hotels on a sharing basis.",
    "meals": "4 Breakfasts4 Dinners\nMeals will be provided as per the hotel schedule and itinerary.",
    "notes": "This itinerary is subject to change based on weather conditions and unforeseen circumstances. The Dhanushkodi visit is subject to time and weather conditions. Optional activities are available at an additional cost. Please note that the driver allowance is for local transportation and does not include personal expenses.",
    "paymentKey": "payment-4",
    "cancellationKey": "cancel-2",
    "faqKey": "faq-4",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival Trivandram",
        "city": "Kovalam",
        "points": [
          "Arrive at Trivandrum (Thiruvananthapuram) Airport / Railway Station and meet our representative or driver. Begin your Kerala journey with a visit to the famous Sree Padmanabhaswamy Temple, one of the most renowned spiritual landmarks in Thiruvananthapuram. Spend some peaceful time at the temple and explore the surrounding heritage area.",
          "Later, proceed towards Kovalam, a beautiful coastal destination known for its golden beaches and scenic Arabian Sea views. Visit Kovalam Beach and the Lighthouse area, enjoy the coastal surroundings and take some time for photography and relaxation.",
          "After sightseeing, check in to the hotel and relax. The evening is free to enjoy the beach or explore the nearby surroundings."
        ],
        "timing": "Full Day",
        "nightstay": "Kovalam",
        "meals": [
          "Dinner"
        ]
      },
      {
        "day": 2,
        "title": "Kovalam to Kanyakumari",
        "city": "Kanyakumari",
        "points": [
          "Start your day with breakfast before checking out from the hotel and beginning your journey towards Kanyakumari, the southernmost point of mainland India.",
          "Enjoy the scenic drive through the coastal landscapes and beautiful villages of South India. Upon arrival in Kanyakumari, check in to your hotel and freshen up.",
          "Later, proceed for sightseeing and visit the famous Vivekananda Rock Memorial, located on a rocky island surrounded by the sea. Also visit the Thiruvalluvar Statue and Kanyakumari Beach, where the Arabian Sea, Bay of Bengal, and Indian Ocean meet.",
          "In the evening, enjoy the spectacular sunset at Kanyakumari, subject to weather conditions. Spend some time exploring the local market before returning to the hotel."
        ],
        "timing": "Full Day",
        "nightstay": "Kanyakumari",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 3,
        "title": "Kanyakumari to Rameswaram",
        "city": "Rameswaram",
        "points": [
          "Start your day with breakfast before checking out from the hotel and proceeding towards the sacred town of Rameshwaram, one of the most important pilgrimage destinations in South India.",
          "Enjoy the scenic journey through Tamil Nadu’s countryside and coastal landscapes. Upon reaching Rameshwaram, proceed directly towards Dhanushkodi, the legendary ghost town located at the eastern tip of Rameshwaram Island.",
          "Explore the beautiful and dramatic landscapes of Dhanushkodi, including Dhanushkodi Beach, the meeting point of the sea, and the historic ruins of the old town, subject to road and weather conditions.",
          "After completing the sightseeing, proceed to your hotel in Rameshwaram and check in. Spend the evening relaxing at the hotel."
        ],
        "timing": "Full Day",
        "nightstay": "Rameswaram",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 4,
        "title": "Rameswaram to Madurai",
        "city": "Madurai",
        "points": [
          "Start your day early in the morning and get ready for the sacred Ramanathaswamy Temple Darshan. As the temple follows a traditional dress code, traditional attire is compulsory for temple entry. Boys should wear Dhoti/Mundu with an appropriate upper garment, while Girls should wear Saree, Salwar Suit, or other permitted traditional attire.",
          "Proceed to the temple for the early morning darshan and experience the spiritual atmosphere of one of India’s most revered pilgrimage sites and one of the 12 Jyotirlingas. The temple is also famous for its magnificent corridors, intricately carved pillars, and sacred 22 Theerthams (holy water wells).",
          "After completing the darshan, return to the hotel for breakfast and freshen up. Later, check out and begin your journey towards Madurai.",
          "Upon arrival in Madurai, proceed for sightseeing and visit the magnificent Meenakshi Amman Temple, renowned for its grand gopurams, intricate sculptures, and rich spiritual heritage. Also explore the surrounding Puthu Mandapam and local markets, famous for traditional handicrafts, textiles, and local products.",
          "If time permits, visit Thirumalai Nayakkar Palace, known for its impressive architecture and historic significance.",
          "After completing the sightseeing, check in to your hotel and relax."
        ],
        "timing": "Full Day",
        "nightstay": "Madurai",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 5,
        "title": "Madurai Departure",
        "city": "Madurai",
        "points": [
          "After breakfast, check out from the hotel and get ready for your onward journey. Depending on your departure schedule, you can spend some leisure time in Madurai for last-minute shopping or exploring the nearby local surroundings.",
          "Later, our vehicle will transfer you to Madurai Railway Station / Airport for your scheduled departure. Bid farewell to the beautiful destinations, temples and coastal landscapes explored during your Kerala & Tamil Nadu journey, taking back wonderful memories of the trip."
        ],
        "timing": "Morning",
        "nightstay": "",
        "meals": [
          "Breakfast"
        ]
      }
    ]
  },
  {
    "slug": "kochi-munnar-thekkady-allepey-6d5n",
    "name": "Kochi, Munnar, Thekkady & Allepey 6D/5N",
    "heading": "Kerala & Tamil Nadu Adventure",
    "code": "KERALA-7-DAY",
    "category": "kerala",
    "days": 6,
    "nights": 5,
    "price": 13500,
    "originalPrice": 30000,
    "intro": [
      "Discover the best of Kerala with visits to Kochi, Munnar, Thekkady & Alleppey. Experience lush tea gardens, peaceful backwaters, scenic beaches, wildlife, and rich cultural heritage—all in one unforgettable journey."
    ],
    "highlights": [
      "Explore Kerala's backwaters, witness Kanyakumari's sunrise, delve into Tamil Nadu's temples and culture, experience wildlife in Periyar, and enjoy diverse landscapes."
    ],
    "travellers": "Couples / Families",
    "image": "/images/tours/trivandrum-madurai-5d4n.webp",
    "pricing": [
      {
        "label": "Quad Sharing",
        "price": 13500
      },
      {
        "label": "Triple Sharing",
        "price": 14000
      },
      {
        "label": "Double Sharing",
        "price": 16000
      }
    ],
    "inclusions": [
      "1 Night Alleppey Houseboat Stay",
      "4 Nights Hotel Stay",
      "Lunch Included during Houseboat Stay",
      "5 Breakfasts & 5 Dinners",
      "Sightseeing & Transfers by AC Bus or Tempo Traveller (as per group size)",
      "Driver Allowance, Toll Tax, Parking Charges & Fuel",
      "All Transfers as per the Itinerary"
    ],
    "exclusions": [
      "5% GST",
      "Entry fees to monuments, parks, museums, temples and sightseeing attractions",
      "Adventure activities and optional experiences (boating, safari, elephant ride, cultural shows, cable car, etc.)",
      "Train/Flight fare",
      "Lunch (except Houseboat Lunch) and any meals not mentioned in the inclusions",
      "Personal expenses such as shopping, tips, laundry, phone calls, room service and beverages",
      "Camera and video camera charges (where applicable)",
      "Travel Insurance",
      "Additional sightseeing or vehicle usage not mentioned in the itinerary",
      "Expenses due to natural calamities, roadblocks, landslides, weather conditions, strikes, political disturbances or any unforeseen circumstances",
      "Anything not specifically mentioned under \"Package Includes\""
    ],
    "support": [
      "Comfortable Accommodation",
      "Daily Breakfast",
      "Private AC Transportation",
      "Experienced Driver",
      "Sightseeing as per Itinerary",
      "Pickup & Drop Assistance",
      "Safe & Hassle-Free Journey",
      "24×7 Customer Support"
    ],
    "accommodation": "4 Nights in comfortable hotels, 1 Night on a traditional Kerala houseboat.",
    "meals": "Breakfast, Dinner included. Lunch during houseboat stay.",
    "notes": "This itinerary is subject to change based on weather conditions and unforeseen circumstances. The Dhanushkodi visit is subject to time and weather conditions. Optional activities are available at an additional cost. Please note that the driver allowance is for local transportation and does not include personal expenses.",
    "paymentKey": "payment-4",
    "cancellationKey": "cancel-2",
    "faqKey": "faq-7",
    "itinerary": [
      {
        "day": 1,
        "title": "Kochi Arrival & Local Sightseeing",
        "city": "Kochi",
        "points": [
          "Arrive at Kochi, the gateway to Kerala, where our representative/driver will welcome you and assist you with your transfer. After meeting the team, proceed for local sightseeing and explore some of the city's most famous attractions.",
          "Visit the historic Fort Kochi area, known for its colonial architecture, charming streets, and cultural heritage. Explore the iconic Chinese Fishing Nets, followed by a visit to St. Francis Church and the historic Santa Cruz Basilica.",
          "Later, visit Mattancherry Palace (Dutch Palace) and explore the nearby Jew Town and Paradesi Synagogue, subject to opening hours.",
          "In the evening, enjoy some free time at Marine Drive or explore the local markets and waterfront areas.",
          "After completing the sightseeing, proceed to your hotel and check in. Relax and prepare for the upcoming Kerala journey."
        ],
        "timing": "Full Day",
        "nightstay": "Kochi",
        "meals": [
          "Dinner"
        ]
      },
      {
        "day": 2,
        "title": "Kochi to Munnar",
        "city": "Munnar",
        "points": [
          "Start your day with breakfast at the hotel before checking out and beginning your scenic journey from Kochi to Munnar, one of Kerala’s most beautiful hill stations.",
          "Drive through the lush green countryside of Kerala, passing through picturesque villages, coconut plantations, spice plantations, valleys, and the winding roads of the Western Ghats. The route offers spectacular views of the surrounding mountains and dense greenery.",
          "En route, visit the beautiful Cheeyappara Waterfalls and Valara Waterfalls, where you can take a short break and enjoy the natural surroundings, subject to weather and local conditions.",
          "Continue your journey towards Munnar, passing through the famous tea plantations that cover the hillsides. Stop at suitable viewpoints along the way for photography and to enjoy the breathtaking scenery.",
          "Upon arrival in Munnar, check in to your hotel and relax. Spend the evening at leisure, exploring the nearby surroundings or enjoying the peaceful mountain atmosphere."
        ],
        "timing": "Full Day",
        "nightstay": "Munnar",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 3,
        "title": "Munnar Sightseeing",
        "city": "Munnar",
        "points": [
          "Start your day with breakfast before heading out for a full-day sightseeing tour of Munnar, surrounded by rolling hills, tea plantations, forests, and beautiful lakes.",
          "Visit Mattupetty Dam, a popular scenic attraction offering beautiful views of the surrounding mountains and lake. Continue towards Echo Point, known for its natural echo phenomenon and peaceful surroundings.",
          "Later, visit Kundala Lake and Kundala Dam, surrounded by lush green hills and tea plantations. Enjoy some time taking photographs and appreciating the natural beauty of the region.",
          "You may also visit the Tea Museum, where you can learn about the history and traditional methods of tea production in Munnar, subject to opening hours.",
          "After completing the sightseeing, return to the hotel and spend the evening at leisure. You can explore the local market or simply relax at the property."
        ],
        "timing": "Full Day",
        "nightstay": "Munnar",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 4,
        "title": "Munnar to Thekkady",
        "city": "Thekkady",
        "points": [
          "Start your day with breakfast before checking out from your hotel and proceeding towards Thekkady, one of Kerala’s most famous destinations for wildlife, forests, and spice plantations.",
          "Enjoy a scenic drive through the Western Ghats, passing through winding mountain roads, dense greenery, spice plantations, and beautiful countryside.",
          "Upon arrival in Thekkady, check in to your hotel and relax.",
          "Later, you can explore the local market and shop for Kerala’s famous spices, tea, coffee, handmade products, and other souvenirs.",
          "Guests can also opt for activities such as Periyar Lake boating, spice plantation visits, Kathakali performances, or Kalaripayattu shows, subject to availability and additional charges.",
          "Return to the hotel after the evening activities."
        ],
        "timing": "Full Day",
        "nightstay": "Thekkady",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 5,
        "title": "Thekkady to Alleppey",
        "city": "Alleppey",
        "points": [
          "Start your day with breakfast before checking out and beginning your journey towards Alleppey, famously known as the Venice of the East and renowned for its beautiful backwaters.",
          "Drive through the scenic Kerala countryside, passing lush paddy fields, coconut plantations, villages, and waterways.",
          "Upon arrival in Alleppey, board your houseboat and enjoy a welcome drink before completing the check-in formalities. Enjoy a delicious lunch on board as the houseboat cruises through the serene backwaters.",
          "Relax while enjoying views of traditional villages, coconut trees, paddy fields, and local life along the waterways. Later, witness the beautiful sunset over the backwaters and enjoy the peaceful surroundings."
        ],
        "timing": "Full Day",
        "nightstay": "Alleppey Houseboat",
        "meals": [
          "Breakfast",
          "Lunch",
          "Dinner"
        ]
      },
      {
        "day": 6,
        "title": "Alleppey to Kochi",
        "city": "Coimbatore",
        "points": [
          "Start your final day with breakfast at the hotel before checking out and completing the necessary departure formalities.",
          "Depending on your departure schedule, enjoy some free time for local shopping or explore nearby areas of Coimbatore. You can shop for traditional South Indian products, spices, handicrafts, textiles, and local souvenirs.",
          "Later, proceed towards Coimbatore Railway Station / Airport as per your departure schedule.",
          "Take home beautiful memories of your journey through Kerala & Tamil Nadu, covering scenic hill stations, tea plantations, peaceful backwaters, beautiful beaches, sacred temples, cultural heritage, and the spiritual destinations of South India.",
          "Tour Ends with Happy Memories."
        ],
        "timing": "Morning",
        "nightstay": "",
        "meals": [
          "Breakfast"
        ]
      }
    ]
  },
  {
    "slug": "do-dham-yatra-ex-haridwar",
    "name": "Do Dham Yatra EX Haridwar",
    "heading": "7 Day Dodham Yatra",
    "code": "CHARDHAM-YAT-2",
    "category": "yatra",
    "days": 7,
    "nights": 6,
    "price": 14000,
    "originalPrice": 20000,
    "intro": [
      "Embark on a divine 9 Days / 8 Nights DO Dham Yatra, covering the two sacred shrines of Kedarnath, and Badrinath. Experience a perfect blend of spirituality, breathtaking Himalayan landscapes, ancient temples, scenic treks, and unforgettable moments. The journey also includes visits to Mana Village, Tungnath, Triyuginarayan, Guptkashi, Dhari Devi, Devprayag, and an exciting adventure experience at Shivpuri, making it a truly memorable pilgrimage through the heart of Dev Bhoomi Uttarakhand."
    ],
    "highlights": [
      "Spiritual Journey",
      "Holiest Pilgrimage Destinations",
      "Scenic Himalayan Landscapes",
      "Divine Temple Darshans",
      "Cultural Immersion"
    ],
    "travellers": "",
    "image": "/images/tours/kedarnath-yatra-ex-haridwar.webp",
    "pricing": [
      {
        "label": "Quad Sharing",
        "price": 14000
      },
      {
        "label": "Triple Sharing",
        "price": 15500
      },
      {
        "label": "Double Sharing",
        "price": 17000
      }
    ],
    "inclusions": [
      "Airport & Railway Station Pickup & Drop",
      "Comfortable Hotel / Resort / Tent Accommodation",
      "Daily Breakfast & Dinner",
      "All Sightseeing as per the Itinerary",
      "Transportation by Non-AC Vehicle in the Hills (AC operates only in the plains, subject to weather and government regulations)",
      "All Toll Taxes, Parking Charges & Driver Allowances",
      "Experienced Tour Captain / Trip Coordinator",
      "24×7 On-Tour Assistance",
      "Children below 5 years travel Complimentary (without extra bed and vehicle seat)"
    ],
    "exclusions": [
      "5% GST will be charged extra on the total package cost.",
      "Flight Tickets & Train Tickets (unless specifically mentioned)",
      "Lunch & any meals not mentioned under the package inclusions",
      "Personal expenses (shopping, tips, laundry, phone calls, beverages, etc.)",
      "Entry fees to monuments, parks, museums & sightseeing attractions",
      "Adventure activities & optional experiences (River Rafting, Bungee Jumping, Zipline, Boating, Safari, Cable Car, Cultural Shows, etc.)",
      "Pony, Palki, Pithoo & Helicopter charges",
      "Local shuttle/jeep charges (Sonprayag – Gaurikund or wherever applicable)",
      "VIP Darshan / Special Entry Passes at temples or monuments",
      "Medical expenses, doctor consultation & emergency evacuation charges",
      "Travel Insurance of any kind",
      "Expenses arising due to natural calamities, landslides, roadblocks, weather conditions, strikes, vehicle breakdowns, or any unforeseen circumstances",
      "Any increase in government taxes, tolls, parking charges, fuel prices, or permit fees after booking",
      "Anything not specifically mentioned under \"Package Includes\"."
    ],
    "support": [
      "Comfortable Transportation & Sightseeing",
      "Experienced Tour Captain",
      "24×7 On-Tour Assistance",
      "Dedicated Ground Support",
      "Safe & Well-Planned Itinerary",
      "No Hidden Charges"
    ],
    "accommodation": "6 Nights Accommodations4 Nights Hotel2 Nights Tent stay",
    "meals": "5 Breakfast & 4 Dinner",
    "notes": "Additional Expenses Payable by Guests: During the tour, guests are required to bear certain expenses directly wherever applicable. These include Mansa Devi & Chandi Devi Ropeway tickets, Sonprayag to Gaurikund local shuttle/jeep charges, Pony, Palki, Pithoo, and Helicopter services for Yamunotri and Kedarnath, luggage handling/storage charges at the Rampur/Sitapur hotel during the Kedarnath trek, all adventure activities at Shivpuri (such as River Rafting, Bungee Jumping, Giant Swing, Zipline, Flying Fox, etc.), VIP Darshan passes, camera/video camera fees (if applicable), room heater charges, laundry, porter charges, personal shopping, meals and beverages not included in the package, medical expenses, and any other personal expenses or services not specifically mentioned under the package inclusions. All such charges must be paid directly by the guest at the respective location.",
    "paymentKey": "payment-3",
    "cancellationKey": "cancel-2",
    "faqKey": "faq-8",
    "itinerary": [
      {
        "day": 1,
        "title": "Haridwar to Rampur / Sitapur",
        "city": "Buddha Kedarnath",
        "points": [
          "Upon arrival at Haridwar Railway Station or Bus Stand, meet our tour representative and begin your scenic journey towards Rampur/Sitapur, the gateway to the sacred Kedarnath Dham. Enjoy a beautiful drive through the Garhwal Himalayas, passing picturesque valleys, rivers, and charming hill towns.",
          "En route, visit the revered Dhari Devi Temple, dedicated to Goddess Kali and regarded as one of the guardian deities of Uttarakhand. Continue your journey while enjoying breathtaking views of the Alaknanda River and the surrounding Himalayan landscapes.",
          "Upon arrival at Rampur/Sitapur, complete the hotel check-in formalities and relax after the day's journey. Spend the evening at leisure while preparing for the next day's Kedarnath pilgrimage.",
          "Enjoy a delicious dinner and an overnight stay at Rampur/Sitapur."
        ],
        "timing": "Full Day",
        "nightstay": "Rampur/Sitapur",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 2,
        "title": "Rampur / Sitapur to Kedarnath",
        "city": "Kedarnath",
        "points": [
          "Wake up early, check out from the hotel, and proceed towards Sonprayag. From here, take the local shuttle to Gaurikund (at your own cost), the starting point of the Kedarnath trek.",
          "Please Note: As only essential luggage can be carried during the trek, your main luggage/baggage will be left at the hotel in Rampur/Sitapur. Guests are required to pay the luggage handling/storage charges directly to the hotel manager (if applicable). It is recommended to carry only a small backpack with essentials required for the overnight stay in Kedarnath.",
          "Begin the sacred 18 km trek (one way) from Gaurikund to Kedarnath, which generally takes 7–10 hours, depending on your pace. Pony, palki, pithoo, and helicopter services are available at an additional cost for pilgrims who prefer an alternative to trekking.",
          "Upon arrival in Kedarnath, check in to your tent stay near Kedarnath Temple and freshen up. In the evening, enjoy the mesmerizing Kedarnath Temple Aarti from the vicinity of your accommodation, surrounded by the serene Himalayan landscape and the divine atmosphere of the shrine."
        ],
        "timing": "Full Day",
        "nightstay": "Kedarnath Tent Stay",
        "meals": [
          "Dinner"
        ]
      },
      {
        "day": 3,
        "title": "Kedarnath to Rampur / Sitapur",
        "city": "Kedarnath",
        "points": [
          "Wake up early and visit the sacred Shri Kedarnath Temple for the auspicious Morning Darshan. After seeking the blessings of Lord Shiva, explore the nearby attractions around the temple, including the Adi Shankaracharya Samadhi, Bhairavnath Temple (subject to weather and time availability), and enjoy the breathtaking views of the surrounding Himalayan peaks.",
          "Later, return to your accommodation for breakfast, complete the check-out formalities, and begin the 18 km descent trek from Kedarnath to Gaurikund, which generally takes 5–7 hours. Pony, palki, and pithoo services are available at an additional cost.",
          "Upon reaching Gaurikund, take the local shuttle to Sonprayag (at your own cost), where your vehicle will be waiting. Continue your journey to Rampur/Sitapur.",
          "Upon arrival, check in to the hotel. Enjoy a delicious dinner and relax with an overnight stay at Rampur/Sitapur."
        ],
        "timing": "Full Day",
        "nightstay": "Rampur/Sitapur",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 4,
        "title": "Rampur / Sitapur to Chopta",
        "city": "Chopta",
        "points": [
          "After breakfast, check out from the hotel and begin your journey towards the scenic hill station of Chopta, popularly known as the \"Mini Switzerland of India.\"",
          "En route, visit the sacred Triyuginarayan Temple, the legendary wedding venue of Lord Shiva and Goddess Parvati, where the eternal flame (Akhand Dhuni) is believed to have been burning since their divine marriage. Continue to Guptkashi and visit the revered Shri Vishwanath Temple and the Ardhnarishwar Temple, both of which hold immense religious significance for devotees of Lord Shiva.",
          "After seeking blessings, continue your picturesque drive through the beautiful Himalayan valleys and dense forests to Chopta.",
          "Upon arrival, complete the hotel check-in formalities and relax amidst the serene natural surroundings. Enjoy a delicious dinner and an overnight stay in Chopta."
        ],
        "timing": "Full Day",
        "nightstay": "Chopta Tent Stay",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 5,
        "title": "Chopta to Badrinath",
        "city": "Tungnath",
        "points": [
          "Wake up early and enjoy breakfast before beginning the trek to the sacred Tungnath Temple, the highest Shiva temple in the world, situated at an altitude of approximately 3,680 meters (12,073 ft).",
          "The trek from Chopta to Tungnath is approximately 3.5 km (one way) and usually takes around 2–3 hours, depending on your pace. The well-paved trail offers spectacular views of the Himalayan peaks, lush meadows, and pristine forests. After offering prayers and spending some peaceful time at the temple, trek back 3.5 km to Chopta, taking approximately 1.5–2.5 hours.",
          "After returning, continue your scenic drive towards Badrinath, the final and most revered destination of the Char Dham Yatra. En route, enjoy the breathtaking landscapes of the Garhwal Himalayas.",
          "Upon arrival in Badrinath, complete the hotel check-in formalities and freshen up. In the evening, visit the sacred Badrinath Temple for Evening Darshan and witness the serene spiritual atmosphere of this holy shrine dedicated to Lord Vishnu.",
          "Return to the hotel after darshan. Enjoy a delicious dinner and relax with an overnight stay in Badrinath."
        ],
        "timing": "Full Day",
        "nightstay": "Badrinath",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 6,
        "title": "Badrinath – Mana Village – Badrinath",
        "city": "Badrinath",
        "points": [
          "Wake up early and visit the sacred Badrinath Temple for the auspicious Morning Darshan. After seeking the blessings of Lord Badri Vishal, return to the hotel for breakfast.",
          "Later, proceed to explore Mana Village, the Last Indian Village located near the Indo-Tibetan border. Visit the famous Vyas Gufa, where Sage Veda Vyasa is believed to have composed the Mahabharata, followed by Ganesh Gufa, where Lord Ganesha is said to have written the epic. Continue to the iconic Bheem Pul, a massive natural rock bridge believed to have been placed by Bhima over the roaring Saraswati River. You can also witness the confluence of mythology and nature at the origin of the Saraswati River.",
          "After sightseeing, return to Badrinath and spend some leisure time exploring the temple surroundings or local market.",
          "Return to the hotel in the evening. Enjoy a delicious dinner and relax with an overnight stay in Badrinath."
        ],
        "timing": "Full Day",
        "nightstay": "Badrinath",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 7,
        "title": "Badrinath to Haridwar/Rishikesh Drop",
        "city": "Rishikesh",
        "points": [
          "After breakfast, check out from the hotel and begin your journey towards Shivpuri. Enjoy a scenic drive through the breathtaking Garhwal Himalayas, passing along winding mountain roads and the sacred Alaknanda River.",
          "En route, visit the revered Dhari Devi Temple, dedicated to Goddess Kali and regarded as one of the guardian deities of Uttarakhand. Continue to the holy Devprayag Sangam, where the Alaknanda and Bhagirathi rivers merge to form the sacred River Ganga. Spend some time admiring the spectacular confluence and its spiritual significance before continuing your journey.",
          "Upon reaching Rishikesh, guests opting to end their tour may be dropped at the Rishikesh Highway Point. Those requiring a drop at Haridwar Bus Stand or Haridwar Railway Station"
        ],
        "timing": "full Day",
        "nightstay": "",
        "meals": [
          "Breakfast"
        ]
      }
    ]
  },
  {
    "slug": "himachal-9-day-adventure-9d8n",
    "name": "Himachal 9 Day Adventure 9D/8N",
    "heading": "9 Day Himachal Tour from Delhi",
    "code": "HIMACHAL-9-D",
    "category": "himalaya",
    "days": 9,
    "nights": 8,
    "price": 14999,
    "originalPrice": 16999,
    "intro": [
      "Discover the beauty of Himachal Pradesh on this 9-day tour from Delhi. Journey through picturesque towns, witness breathtaking views, and immerse yourself in the region's rich heritage. This package offers a perfect blend of sightseeing, adventure, and relaxation."
    ],
    "highlights": [
      "Explore stunning Himalayan landscapes, experience local culture, enjoy adventure activities, and relax in serene settings."
    ],
    "travellers": "Families & Couples",
    "image": "/images/tours/himachal-9-day-adventure-9d8n.webp",
    "pricing": [
      {
        "label": "Triple Sharing",
        "price": 14999
      },
      {
        "label": "Double Sharing",
        "price": 16999
      }
    ],
    "inclusions": [
      "Package Includes: 7 Nights Comfortable Hotel Stay 🏨",
      "Package Includes: 7 Breakfasts 🍳 & 7 Dinners 🍛",
      "Package Includes: 8 Lunches 🍽️ as per Package",
      "Package Includes: Mineral water 💦",
      "Package Includes: All Local Transfers & Sightseeing by Bus 🚐",
      "Package Includes: Entry Fees as per Package 🎟️",
      "Package Includes: Experienced Tour Manager 👨‍✈️",
      "Package Includes: 24×7 Assistance & On-Trip Support 🔒",
      "Package Includes: All Taxes Included"
    ],
    "exclusions": [
      "Package Excludes: Personal expenses (snacks, shopping, laundry, etc)",
      "Package Excludes: Travel Insurance & Medical Emergencies 🩺",
      "Package Excludes: Adventure activities – Paragliding, Skiing, Rafting",
      "Package Excludes: Train Tickets 3 AC or Sleeper As per package",
      "Package Excludes: Monument camera/video charges (if applicable) 📸",
      "Package Excludes: Any additional sightseeing mentioned in itinerary",
      "Package Excludes: Meals other than those specified in the inclusions 🍔",
      "Package Excludes: Early check-in / late check-out at hotels ⏰",
      "Package Excludes: Anything not mentioned in the “Package Includes”"
    ],
    "support": [
      "Dedicated tour manager",
      "Emergency assistance available",
      "Flexible itinerary options"
    ],
    "accommodation": "Standard hotels throughout the tour.",
    "meals": "Breakfast included daily.",
    "notes": "This package includes sightseeing in Shimla and Manali. The itinerary covers key attractions and offers a comfortable travel experience. Kasol and Dharamshala are included with local sightseeing. Delhi to Shimla is a scenic drive. Delhi to Delhi drop is included.",
    "paymentKey": "payment-2",
    "cancellationKey": "cancel-2",
    "faqKey": "faq-2",
    "itinerary": [
      {
        "day": 1,
        "title": "Day 1: Delhi ➜ Shimla",
        "city": "India",
        "points": [
          "Your unforgettable journey begins from Delhi, where our representative will assist you with your departure. After completing the boarding formalities, begin your comfortable overnight journey towards the beautiful hill station of Shimla, the Queen of Hills.",
          "As you leave behind the bustling city, enjoy the scenic drive through the plains of Haryana and Punjab before gradually ascending into the picturesque Himalayan foothills. Sit back, relax, and admire the changing landscapes, winding mountain roads, lush green valleys, and refreshing weather."
        ],
        "timing": "8 hours",
        "nightstay": "NA",
        "meals": []
      },
      {
        "day": 2,
        "title": "Day 2: Shimla Sightseeing",
        "city": "Shimla",
        "points": [
          "Upon arrival in Shimla, complete the hotel check-in formalities and freshen up, begin your day with a visit to the picturesque hill station of Kufri, renowned for its breathtaking mountain views, lush green landscapes, and exciting adventure activities (subject to season).",
          "Later, proceed for a sightseeing tour of Shimla, covering popular attractions such as The Ridge, Mall Road, Christ Church, and Jakhoo Temple. Enjoy some free time to explore the vibrant local markets, shop for souvenirs, or simply soak in the charm and colonial beauty of the Queen of Hills.",
          "Return to the hotel in the evening and unwind after a memorable day. Enjoy a delicious dinner and relax."
        ],
        "timing": "8 hours",
        "nightstay": "Shimla",
        "meals": [
          "Dinner"
        ]
      },
      {
        "day": 3,
        "title": "Day 3: Shimla to Manali",
        "city": "India",
        "points": [
          "After an early breakfast, check out from the hotel and begin your scenic journey towards Manali, one of Himachal Pradesh's most beautiful hill stations. The drive takes you through picturesque valleys, dense pine forests, charming villages, and alongside the majestic Beas River, offering breathtaking views throughout the journey.",
          "En route, enjoy the changing landscapes as you pass through Kullu Valley, famous for its apple orchards, traditional handicrafts, and scenic beauty. You may also visit the Kullu Shawl Factory and River Rafting Point (optional, at an additional cost), depending on time and road conditions.",
          "Upon arrival in Manali, check in to your hotel and relax after the long yet scenic drive. In the evening, enjoy a delicious dinner at the hotel."
        ],
        "timing": "8 hours",
        "nightstay": "Manali",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 4,
        "title": "Day 4: Solang Valley & Atul Tunnel",
        "city": "India",
        "points": [
          "After a delicious breakfast, get ready for an exciting excursion to Solang Valley, one of the most scenic destinations near Manali. Surrounded by snow-capped mountains and lush landscapes, Solang Valley is a paradise for adventure lovers. Enjoy optional activities such as paragliding, ziplining, ATV rides, horse riding, snow scooter rides, skiing (during winter), and cable car rides at your own expense.",
          "Later, drive through the iconic Atal Tunnel, one of the world's longest high-altitude highway tunnels, offering a remarkable engineering experience and breathtaking views of the surrounding Himalayan mountains. Spend some time exploring the beautiful landscapes around the North Portal before returning.",
          "In the evening, return to Manali and relax at the hotel. Enjoy a delicious dinner and unwind after a memorable day."
        ],
        "timing": "8 hours",
        "nightstay": "Manali",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 5,
        "title": "Day 5: Manali to Kasol",
        "city": "India",
        "points": [
          "After a delightful breakfast, check out from the hotel and begin your Manali local sightseeing. Visit the famous Hadimba Devi Temple, surrounded by towering deodar forests, followed by the peaceful Vashisht Temple & Hot Water Springs. Continue to the Tibetan Monastery, Club House, and enjoy leisure time exploring the vibrant Mall Road, where you can shop for souvenirs, local handicrafts, and Himachali delicacies.",
          "Later, proceed towards the picturesque village of Kasol, nestled in the beautiful Parvati Valley. Enjoy the scenic drive along the Parvati River, passing through lush forests and charming mountain landscapes.",
          "Upon arrival in Kasol, check in to your riverside campsite and relax amidst nature. As the evening sets in, enjoy a lively DJ Night with music, bonfire (subject to weather and local regulations), and delicious dinner, creating unforgettable memories under the starry Himalayan sky."
        ],
        "timing": "8 hours",
        "nightstay": "Kasol",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 6,
        "title": "Day 6: Kasol to Dharamshala",
        "city": "India",
        "points": [
          "After breakfast, check out from the campsite and explore the beautiful village of Kasol, often known as the \"Mini Israel of India.\" Visit the lively Kasol Market, enjoy a peaceful walk along the Parvati River, and soak in the breathtaking views of the surrounding mountains. If time permits, you may also visit the nearby Manikaran Sahib Gurudwara, famous for its hot water springs and spiritual significance.",
          "Later, begin your scenic journey towards Dharamshala, nestled in the foothills of the majestic Dhauladhar Range. Upon arrival, check in to the hotel and relax."
        ],
        "timing": "8 hours",
        "nightstay": "Dharamshala",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 7,
        "title": "Day 7: Dharamshala to Amritsar",
        "city": "India",
        "points": [
          "After breakfast, check out from the hotel and proceed for a sightseeing tour of Dharamshala and McLeod Ganj. Visit the peaceful Dalai Lama Temple (Tsuglagkhang Complex), Bhagsunag Temple & Waterfall, St. John in the Wilderness Church, Dal Lake, and the vibrant McLeod Ganj Market, known for its Tibetan culture, cafés, and handicrafts.",
          "Later, depart for Amritsar. Upon arrival, check in to the hotel and relax after the journey."
        ],
        "timing": "8 hours",
        "nightstay": "Amritsar",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 8,
        "title": "Day 8: Amritsar to Delhi",
        "city": "India",
        "points": [
          "After breakfast, check out from the hotel and explore the historic city of Amritsar. Visit the magnificent Golden Temple (Sri Harmandir Sahib), the spiritual heart of Sikhism, followed by the Jallianwala Bagh Memorial, a site of great historical importance.",
          "Later, proceed to the Wagah Border to witness the world-famous Beating Retreat Ceremony, a spectacular display of patriotism by the Indian and Pakistani border security forces (subject to timing).",
          "In the evening, begin your overnight journey to Delhi, carrying unforgettable memories of your Himalayan and Punjab tour."
        ],
        "timing": "8 hours",
        "nightstay": "Delhi",
        "meals": [
          "Breakfast"
        ]
      },
      {
        "day": 9,
        "title": "Day 9: Delhi Drop",
        "city": "India",
        "points": [
          "Arrive in Delhi in the morning, marking the end of your memorable journey through the breathtaking landscapes of Himachal Pradesh and the cultural heritage of Punjab.",
          "Our representative will assist you with the drop at the designated location (Railway Station/Airport/Bus Stand) as per your onward travel plans.",
          "With unforgettable memories, new friendships, and countless experiences to cherish, your tour with 2XBT – Building Boyz Tours & Travels comes to an end.",
          "We thank you for choosing 2XBT and look forward to welcoming you on another exciting adventure soon."
        ],
        "timing": "2 hours",
        "nightstay": "",
        "meals": []
      }
    ]
  },
  {
    "slug": "munnar-thekkady-alleppy-kovalam-6d5n",
    "name": "Munnar, Thekkady, Alleppy & Kovalam 6D/5N",
    "heading": "Kerala & Tamil Nadu 12-Day Adventure",
    "code": "KERALA-7-DAY-2",
    "category": "kerala",
    "days": 6,
    "nights": 5,
    "price": 15000,
    "originalPrice": 30000,
    "intro": [
      "Experience the enchanting beauty of Kerala, where lush green hills, serene backwaters, pristine beaches, and rich cultural heritage come together for an unforgettable holiday. Explore the colonial charm of Kochi, relax on the cliffside beaches of Varkala, witness the breathtaking tea plantations of Munnar, enjoy wildlife and spice plantations in Thekkady, cruise through the tranquil backwaters of Alleppey, unwind at the golden beaches of Kovalam, and seek blessings at the world-famous Sree Padmanabhaswamy Temple in Thiruvananthapuram.",
      "This tour offers the perfect blend of nature, adventure, spirituality, and relaxation, making it an ideal getaway for families, couples, honeymooners, and groups looking to experience the best of God's Own Country. 🌿🚤🏖️🛕"
    ],
    "highlights": [
      "Explore Kerala's backwaters, witness Kanyakumari's sunrise, delve into Tamil Nadu's temples and culture, experience wildlife in Periyar, and enjoy diverse landscapes."
    ],
    "travellers": "Couples / Families",
    "image": "/images/tours/trivandrum-madurai-5d4n.webp",
    "pricing": [
      {
        "label": "Quad Sharing",
        "price": 15000
      },
      {
        "label": "Triple Sharing",
        "price": 16000
      },
      {
        "label": "Double Sharing",
        "price": 18000
      }
    ],
    "inclusions": [
      "1 Night Alleppey Houseboat Stay",
      "4 Nights Hotel Stay",
      "Lunch Included during Houseboat Stay",
      "5 Breakfasts & 5 Dinners",
      "Sightseeing & Transfers by AC Bus or Tempo Traveller (as per group size)",
      "Driver Allowance, Toll Tax, Parking Charges & Fuel",
      "All Transfers as per the Itinerary"
    ],
    "exclusions": [
      "5% GST",
      "Entry fees to monuments, parks, museums, temples and sightseeing attractions",
      "Adventure activities and optional experiences (boating, safari, elephant ride, cultural shows, cable car, etc.)",
      "Train/Flight fare",
      "Lunch (except Houseboat Lunch) and any meals not mentioned in the inclusions",
      "Personal expenses such as shopping, tips, laundry, phone calls, room service and beverages",
      "Camera and video camera charges (where applicable)",
      "Travel Insurance",
      "Additional sightseeing or vehicle usage not mentioned in the itinerary",
      "Expenses due to natural calamities, roadblocks, landslides, weather conditions, strikes, political disturbances or any unforeseen circumstances",
      "Anything not specifically mentioned under \"Package Includes\""
    ],
    "support": [
      "Comfortable Accommodation",
      "Daily Breakfast",
      "Private AC Transportation",
      "Experienced Driver",
      "Sightseeing as per Itinerary",
      "Pickup & Drop Assistance",
      "Safe & Hassle-Free Journey",
      "24×7 Customer Support"
    ],
    "accommodation": "4 Nights in comfortable hotels, 1 Night on a traditional Kerala houseboat.",
    "meals": "Breakfast, Dinner included. Lunch during houseboat stay.",
    "notes": "This itinerary is subject to change based on weather conditions and unforeseen circumstances. The Dhanushkodi visit is subject to time and weather conditions. Optional activities are available at an additional cost. Please note that the driver allowance is for local transportation and does not include personal expenses.",
    "paymentKey": "payment-4",
    "cancellationKey": "cancel-2",
    "faqKey": "faq-7",
    "itinerary": [
      {
        "day": 1,
        "title": "Kochi to Munnar",
        "city": "Munnar",
        "points": [
          "Arrive at Ernakulam Railway Station, meet our representative/driver and proceed towards Munnar. Enjoy a scenic drive through Kerala’s beautiful countryside, lush green landscapes, spice and rubber plantations, winding mountain roads and charming villages.",
          "En route, you can enjoy scenic photo stops at Cheeyappara Waterfalls, Valara Waterfalls and other beautiful viewpoints, subject to time, weather and road conditions.",
          "Upon arrival in Munnar, check in to the hotel and relax. The evening is free to explore the nearby market and surroundings at your own pace."
        ],
        "timing": "Full Day",
        "nightstay": "Munnar",
        "meals": [
          "Dinner"
        ]
      },
      {
        "day": 2,
        "title": "Munnar Sightseeing",
        "city": "Munnar",
        "points": [
          "Start your day with breakfast before heading out for a full-day sightseeing tour of Munnar, surrounded by rolling hills, tea plantations, forests, and beautiful lakes.",
          "Visit Mattupetty Dam, a popular scenic attraction offering beautiful views of the surrounding mountains and lake. Continue towards Echo Point, known for its natural echo phenomenon and peaceful surroundings.",
          "Later, visit Kundala Lake and Kundala Dam, surrounded by lush green hills and tea plantations. Enjoy some time taking photographs and appreciating the natural beauty of the region.",
          "You may also visit the Tea Museum, where you can learn about the history and traditional methods of tea production in Munnar, subject to opening hours.",
          "After completing the sightseeing, return to the hotel and spend the evening at leisure. You can explore the local market or simply relax at the property."
        ],
        "timing": "Full Day",
        "nightstay": "Munnar",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 3,
        "title": "Munnar to Thekkady",
        "city": "Thekkady",
        "points": [
          "Start your day with breakfast before checking out from your hotel and proceeding towards Thekkady, one of Kerala’s most famous destinations for wildlife, forests, and spice plantations.",
          "Enjoy a scenic drive through the Western Ghats, passing through winding mountain roads, dense greenery, spice plantations, and beautiful countryside.",
          "Upon arrival in Thekkady, check in to your hotel and relax.",
          "Later, you can explore the local market and shop for Kerala’s famous spices, tea, coffee, handmade products, and other souvenirs.",
          "Guests can also opt for activities such as Periyar Lake boating, spice plantation visits, Kathakali performances, or Kalaripayattu shows, subject to availability and additional charges.",
          "Return to the hotel after the evening activities."
        ],
        "timing": "Full Day",
        "nightstay": "Thekkady",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 4,
        "title": "Thekkady to Alleppey",
        "city": "Alleppey",
        "points": [
          "Start your day with breakfast before checking out and beginning your journey towards Alleppey, famously known as the Venice of the East and renowned for its beautiful backwaters.",
          "Drive through the scenic Kerala countryside, passing lush paddy fields, coconut plantations, villages, and waterways.",
          "Upon arrival in Alleppey, board your houseboat and enjoy a welcome drink before completing the check-in formalities. Enjoy a delicious lunch on board as the houseboat cruises through the serene backwaters.",
          "Relax while enjoying views of traditional villages, coconut trees, paddy fields, and local life along the waterways. Later, witness the beautiful sunset over the backwaters and enjoy the peaceful surroundings."
        ],
        "timing": "Full Day",
        "nightstay": "Alleppey Houseboat",
        "meals": [
          "Breakfast",
          "Lunch",
          "Dinner"
        ]
      },
      {
        "day": 5,
        "title": "Alleppey to Kovalam",
        "city": "Kovalam",
        "points": [
          "Start your day with breakfast before checking out from the houseboat and proceeding towards Jatayu Earth’s Center, one of Kerala’s unique attractions.",
          "Upon arrival, explore the magnificent Jatayu sculpture, one of the largest bird sculptures in the world, and enjoy the surrounding natural landscapes. The attraction is also associated with the legendary story of Jatayu from the Ramayana.",
          "After completing your visit, continue towards Varkala, a beautiful coastal destination famous for its dramatic cliffs overlooking the Arabian Sea. Visit Varkala Beach and Varkala Cliff, where you can enjoy the sea views, explore the local shops, and spend some relaxing time by the coast.",
          "If time permits, enjoy the sunset at Varkala Beach. After sunset, proceed towards Kovalam and check in to your hotel."
        ],
        "timing": "Full Day",
        "nightstay": "Kovalam",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 6,
        "title": "Kovalam Sightseeing & Trivandra Depature",
        "city": "Kovalam",
        "points": [
          "After breakfast, check out from the hotel and proceed for Kovalam sightseeing. Visit the beautiful Kovalam Beach and Lighthouse area, and enjoy some time for photography and relaxation by the Arabian Sea.",
          "Later, proceed to Sree Padmanabhaswamy Temple, Trivandrum, one of Kerala’s most famous temples. Traditional dress code is mandatory for temple entry. Visitors should follow the temple’s prescribed dress requirements; suitable traditional attire can be arranged/rented locally if required.",
          "After darshan, proceed towards Trivandrum Airport / Railway Station as per your onward travel schedule. Our vehicle will provide a comfortable drop, marking the end of your memorable Kerala journey."
        ],
        "timing": "Full Day",
        "nightstay": "Kovalam",
        "meals": [
          "Breakfast"
        ]
      }
    ]
  },
  {
    "slug": "kerala-bike-ride-adventure-5d4d",
    "name": "Kerala Bike Ride Adventure 5D/4D",
    "heading": "5-Day Kerala Bike Tour",
    "code": "KERALA-BIKE",
    "category": "kerala",
    "days": 5,
    "nights": 4,
    "price": 15500,
    "originalPrice": 20000,
    "intro": [
      "Embark on a 5-day Kerala bike adventure, traversing the state's diverse landscapes. This package combines thrilling cycling with cultural immersion, offering a unique perspective on Kerala's beauty. Explore iconic destinations like Munnar, Thekkady, and Alleppey, experiencing the state's natural wonders and local traditions. Perfect for adventure seekers and culture enthusiasts alike."
    ],
    "highlights": [
      "Explore Kerala's scenic beauty on a thrilling bike ride. Discover charming towns and lush landscapes. Experience authentic Kerala culture. Enjoy a memorable adventure."
    ],
    "travellers": "Adventure Seekers",
    "image": "/images/tours/kerala-bike-ride-adventure-5d4d.webp",
    "pricing": [
      {
        "label": "Dual Quad Sharing",
        "price": 15500
      },
      {
        "label": "Dual Double Sharing",
        "price": 17500
      },
      {
        "label": "Solo Quad Sharing",
        "price": 20500
      },
      {
        "label": "Solo Triple Sharing",
        "price": 21500
      },
      {
        "label": "Solo Double Sharing",
        "price": 22500
      }
    ],
    "inclusions": [
      "Accommodation: 3 Nights Hotel Stay",
      "Houseboat: 1 Night Alleppey Houseboat",
      "Meals: Includes 4 Breakfasts and 4 Dinners",
      "Transportation: Bike & Fuel (Royal Enfield 350cc)",
      "Guide: Tour Captain / Group Leader"
    ],
    "exclusions": [
      "Entry fees to monuments, parks, museums & sightseeing spots",
      "Adventure activities & optional experiences (boating, safari, elephant ride, cultural shows, cable car, etc.)",
      "Train/Flight ticket fare",
      "Lunch & any meals not mentioned in inclusions",
      "Personal expenses (shopping, tips, laundry, phone calls, etc.)",
      "Anything not specifically mentioned in “Package Includes”"
    ],
    "support": [
      "Dedicated support team",
      "Emergency assistance",
      "Bike maintenance"
    ],
    "accommodation": "Standard hotel accommodations throughout the tour.",
    "meals": "Breakfast included daily.",
    "notes": "Package offers Dual and Solo Rider options with varying sharing arrangements. Pricing is per person and based on Quad Sharing. The package includes a support vehicle for safety and logistical support. The itinerary is subject to change based on weather conditions or unforeseen circumstances.",
    "paymentKey": "payment-2",
    "cancellationKey": "cancel-2",
    "faqKey": "faq-2",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival in Kerala",
        "city": "Kochi",
        "points": [
          "Arrive at Kochi Airport/Railway Station.",
          "Complete bike rental formalities and collect your motorcycle.",
          "Begin your scenic ride to Munnar through winding roads, lush forests, waterfalls, and spice plantations.",
          "En route stops:",
          "Cheeyappara Waterfalls",
          "Valara Waterfalls",
          "Check in to your hotel in Munnar.",
          "Spend the evening exploring the local market"
        ],
        "timing": "Flexible",
        "nightstay": "Munnar",
        "meals": [
          "Dinner"
        ]
      },
      {
        "day": 2,
        "title": "Munnar Sightseeing",
        "city": "Munnar",
        "points": [
          "Enjoy breakfast at the hotel.",
          "Explore Munnar's scenic attractions:",
          "Eravikulam National Park",
          "Mattupetty Dam",
          "Echo Point",
          "Kundala Lake",
          "Tea Museum (optional)",
          "Ride through the picturesque tea plantations and stop at panoramic viewpoints for photos."
        ],
        "timing": "Full Day",
        "nightstay": "Munnar",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 3,
        "title": "Thekkady Sightseeing",
        "city": "Thekkady",
        "points": [
          "Breakfast and check-out from the hotel.",
          "Ride towards Thekkady through scenic mountain roads and spice plantations.",
          "Upon arrival, check in to the hotel and relax.",
          "Later, visit the Periyar Tiger Reserve region and enjoy optional activities such as:",
          "Boat cruise on Periyar Lake",
          "Elephant safari",
          "Spice plantation tour",
          "Kathakali cultural performance",
          "Kalaripayattu martial arts show"
        ],
        "timing": "Full Day",
        "nightstay": "Thekkady",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 4,
        "title": "Alleppey Boat House",
        "city": "Alleppey",
        "points": [
          "Breakfast and check-out from the hotel.",
          "Begin your scenic ride towards Alleppey, Kerala's famous backwater destination.",
          "Upon arrival, check in to the hotel and relax.",
          "Enjoy lunch at the hotel.",
          "Later, explore the picturesque backwaters, tranquil canals, and local villages. You may also enjoy an optional shikara ride or a sunset cruise.",
          "Spend the evening at leisure by the waterfront.",
          "Enjoy dinner at the hotel."
        ],
        "timing": "Full Day",
        "nightstay": "Houseboat",
        "meals": [
          "Breakfast",
          "Dinner",
          "Lunch"
        ]
      },
      {
        "day": 5,
        "title": "Return Journey",
        "city": "Kochi",
        "points": [
          "Breakfast and check-out from the hotel.",
          "Begin your scenic ride back to Ernakulam (Kochi).",
          "Return the rented bikes and complete the drop-off formalities.",
          "Enjoy free time for local exploration and shopping.",
          "Explore nearby attractions or shop for Kerala souvenirs, spices, handicrafts, and local products (depending on departure time).",
          "Proceed to Kochi Airport/Railway Station for your return journey.",
          "End of the Kerala Bike Trip."
        ],
        "timing": "Morning",
        "nightstay": "",
        "meals": [
          "Breakfast"
        ]
      }
    ]
  },
  {
    "slug": "jaganathpuri-7-day-spiritual-journey",
    "name": "Jaganathpuri 7 Day Spiritual Journey",
    "heading": "7 Days Jaganathpuri Tour",
    "code": "JAGANATHPURI",
    "category": "yatra",
    "days": 7,
    "nights": 6,
    "price": 15999,
    "originalPrice": 19999,
    "intro": [
      "Embark on a transformative 7-day journey to Jaganathpuri, a revered pilgrimage site in Odisha."
    ],
    "highlights": [
      "Experience the sacred city of Jaganathpuri. Explore ancient temples and immerse yourself in local culture. Enjoy a spiritual journey through Odisha. Discover the rich heritage and traditions of the region."
    ],
    "travellers": "Spiritual Travelers",
    "image": "/images/tours/jaganathpuri-7-day-spiritual-journey.webp",
    "pricing": [
      {
        "label": "INR Triple Sharing",
        "price": 15999
      },
      {
        "label": "3AC Coach Train Package",
        "price": 17999
      },
      {
        "label": "Double Sharing Room",
        "price": 2000
      }
    ],
    "inclusions": [
      "3 Nights hotel accommodation",
      "Yatra Pass",
      "Daily Breakfast & Dinner",
      "All sightseeing & transfers by private bus",
      "Tour coordinator / group leader from 2XBT",
      "Train travel by Bdts Hw Express (Mumbai ⇄ Bhubneshwar)"
    ],
    "exclusions": [
      "Temple VIP Darshan / Pooja Charges",
      "Tatkal / Premium Tatkal train ticket fare",
      "Lunch & En-route Meals",
      "Personal Expenses (shopping, tips, laundry, etc.)",
      "Medical / Emergency Expenses",
      "Any cost due to landslide, weather, or road blockage"
    ],
    "support": [
      "Dedicated support team available throughout the trip",
      "Assistance with travel arrangements and local inquiries",
      "Emergency assistance in case of unforeseen circumstances"
    ],
    "accommodation": "3AC Coach Train Package",
    "meals": "Breakfast Included",
    "notes": "Package includes sleeper coach train travel. Additional cost for double sharing room. Mumbai to Bhubaneswar train journey included. Train journey from Puri to Mumbai is included. Day 6 and 7 are train journeys.",
    "paymentKey": "payment-2",
    "cancellationKey": "cancel-2",
    "faqKey": "faq-2",
    "itinerary": [
      {
        "day": 1,
        "title": "Mumbai to Bhubaneswar",
        "city": "Mumbai",
        "points": [
          "Departure from Mumbai by train.",
          "Enjoy the scenic journey to Bhubaneswar.",
          "Relax and unwind during the train ride.",
          "Opportunity to interact with fellow travelers."
        ],
        "timing": "N/A",
        "nightstay": "N/A",
        "meals": []
      },
      {
        "day": 2,
        "title": "Bhubaneswar",
        "city": "Bhubaneswar",
        "points": [
          "Visit the iconic Jagannath Temple.",
          "Explore the Khandagiri and Udayagiri Caves.",
          "Discover the historical sites of Bhubaneswar.",
          "Immerse yourself in the local culture."
        ],
        "timing": "N/A",
        "nightstay": "Bhubaneswar",
        "meals": [
          "Breakfast"
        ]
      },
      {
        "day": 3,
        "title": "Bhubaneswar",
        "city": "Bhubaneswar",
        "points": [
          "Visit the Odisha State Museum.",
          "Explore the Loknath Temple.",
          "Discover the Chilika Lake (optional excursion).",
          "Experience the local markets."
        ],
        "timing": "N/A",
        "nightstay": "Bhubaneswar",
        "meals": [
          "Breakfast"
        ]
      },
      {
        "day": 4,
        "title": "Konark to Puri",
        "city": "Puri",
        "points": [
          "Visit the magnificent Konark Sun Temple (UNESCO World Heritage Site).",
          "Explore the beaches of Puri.",
          "Witness the traditional Puri Rath Yatra (if applicable).",
          "Enjoy the vibrant atmosphere of Puri."
        ],
        "timing": "N/A",
        "nightstay": "Puri",
        "meals": [
          "Breakfast",
          "Lunch"
        ]
      },
      {
        "day": 5,
        "title": "Puri to Mumbai",
        "city": "Puri",
        "points": [
          "Departure from Puri by train.",
          "Enjoy the scenic journey back to Mumbai.",
          "Relax and unwind during the train ride."
        ],
        "timing": "N/A",
        "nightstay": "N/A",
        "meals": [
          "Breakfast"
        ]
      },
      {
        "day": 6,
        "title": "Train Journey",
        "city": "N/A",
        "points": [
          "Enjoy the train journey.",
          "Relax and reflect on the trip."
        ],
        "timing": "N/A",
        "nightstay": "N/A",
        "meals": [
          "Breakfast"
        ]
      },
      {
        "day": 7,
        "title": "Arrival Mumbai",
        "city": "Mumbai",
        "points": [
          "Arrival at Mumbai.",
          "Departure from Mumbai."
        ],
        "timing": "N/A",
        "nightstay": "N/A",
        "meals": []
      }
    ]
  },
  {
    "slug": "nepal-ex-gorakhpur",
    "name": "Nepal Ex Gorakhpur",
    "heading": "9-Day Nepal Tour",
    "code": "NEPAL-EX-MUM",
    "category": "himalaya",
    "days": 6,
    "nights": 8,
    "price": 16000,
    "originalPrice": 25000,
    "intro": [
      "Embark on an unforgettable Nepal journey from Gorakhpur, exploring the country's most breathtaking destinations. Travel through the serene lakeside city of Pokhara, seek blessings at the sacred Muktinath Temple, and experience the rich culture and spirituality of Kathmandu. Witness spectacular Himalayan landscapes, visit ancient temples and UNESCO World Heritage Sites, enjoy peaceful lakes, vibrant local markets, and scenic mountain drives. Designed for pilgrims, nature lovers, and adventure seekers alike, this tour offers the perfect blend of spirituality, natural beauty, and comfortable travel—all starting from Gorakhpur."
    ],
    "highlights": [
      "Seek blessings at the sacred Muktinath Temple",
      "Visit the famous Pashupatinath Temple in Kathmandu",
      "Witness breathtaking Himalayan mountain views",
      "Enjoy boating on the beautiful Phewa Lake",
      "Optional sunrise experience at Sarangkot",
      "Explore Davis Falls & Gupteshwor Mahadev Cave"
    ],
    "travellers": "Couples / Families / Adventure Seekers",
    "image": "/images/tours/nepal-with-ayodhya-pickup-ayodhya-drop-gorakhpur.webp",
    "pricing": [
      {
        "label": "Quad Sharing",
        "price": 16000
      },
      {
        "label": "Triple Sharing",
        "price": 17000
      },
      {
        "label": "Double Sharing",
        "price": 20000
      }
    ],
    "inclusions": [
      "Private AC Vehicle for the entire Nepal tour",
      "Hotel accommodation on Twin/Triple Sharing basis",
      "Daily Breakfast & Dinner",
      "Experienced Tour Leader throughout the trip",
      "All sightseeing as per the itinerary",
      "India–Nepal Border assistance",
      "Driver allowance, toll taxes, parking charges & fuel",
      "Basic First Aid Kit",
      "24×7 Customer Support"
    ],
    "exclusions": [
      "5% GST (Goods & Services Tax)",
      "Train & Flight Tickets",
      "Lunch and personal snacks",
      "Entry fees, camera charges & monument tickets",
      "Boating charges at Phewa Lake",
      "Pony, Jeep or Helicopter charges for Muktinath (if required)",
      "Travel Insurance",
      "Personal expenses such as shopping, laundry, telephone bills, porter charges, tips, beverages, etc.",
      "Expenses arising due to roadblocks, landslides, weather conditions, natural calamities, strikes, or government restrictions",
      "Any additional cost due to itinerary changes beyond the control of the tour operator",
      "Anything not specifically mentioned under \"Package Includes\""
    ],
    "support": [
      "Private Vehicle for the entire tour",
      "Hotel Accommodation on Twin/Triple Sharing",
      "Daily Breakfast & Dinner",
      "Experienced Tour Leader",
      "All Sightseeing as per Itinerary",
      "India–Nepal Border Assistance",
      "Basic First Aid Kit",
      "24×7 Customer Support",
      "Driver Allowance, Toll Tax & Parking Charges"
    ],
    "accommodation": "Accommodation will be provided in comfortable hotels. Accommodation standards may vary depending on the location and altitude.Pokhara: 2 Night (Hotel)Muktinath: 1 Night (Hotel)Kathmandu: 2 Nights (Hotel)",
    "meals": "The package includes meals as mentioned in the itinerary.5 Breakfasts4 DinnersLunch is NOT included and will be at the guest's own expense throughout the tour.Please Note:Dinner is not included on Day 7 (Kathmandu Nightlife)Meals will be served at the respective hotels and tea houses as per the itinerary.During the trekking days, simple, freshly prepared meals will be provided, subject to availability at higher altitudes.",
    "notes": "This is a high-altitude trekking expedition that requires a good level of physical fitness and endurance. Participants are advised to engage in regular walking, cardio, and leg-strengthening exercises at least 4–6 weeks before the trek. The itinerary may be modified due to weather conditions, road closures, landslides, government regulations, or the health and safety of the group. Accommodation during the trek will be in basic tea houses with limited facilities, and electricity, Wi-Fi, hot showers, and mobile network connectivity may be available only at an additional cost or may not be available at higher altitudes. All participants must carry valid original government-issued photo identification and ensure they meet the entry requirements for Nepal. The trek leader's decision will be final in matters concerning safety, route changes, and overall tour management. Guests are advised to carry sufficient cash in Indian Rupees and Nepalese Rupees, as digital payment facilities and ATMs may not be available throughout the trekking route.",
    "paymentKey": "payment-2",
    "cancellationKey": "cancel-2",
    "faqKey": "faq-9",
    "itinerary": [
      {
        "day": 1,
        "title": "Gorakhpur to Pokhara",
        "city": "Pokhara",
        "points": [
          "Arrive at Gorakhpur Railway Station at approximately 7:10 AM and meet your tour representative. Begin your scenic drive towards the Sonauli India–Nepal Border (approximately 4 hours). Upon arrival, complete the immigration and border formalities before continuing your journey into Nepal.",
          "After crossing the border, proceed towards the beautiful lakeside city of Pokhara, enjoying breathtaking views of rivers, lush green hills, terraced fields, and traditional Nepalese villages along the way.",
          "Upon arrival in Pokhara, complete the hotel check-in formalities and relax after the day's journey. Enjoy a delicious dinner and an overnight stay in Pokhara."
        ],
        "timing": "Full Day",
        "nightstay": "Pokhara",
        "meals": [
          "Dinner"
        ]
      },
      {
        "day": 2,
        "title": "Pokhara Local Sightseeing",
        "city": "Pokhara",
        "points": [
          "Wake up to the breathtaking beauty of the Annapurna Himalayan range and enjoy a delicious breakfast at the hotel. Today is dedicated to exploring the natural and cultural attractions of Pokhara.",
          "Begin the day with an optional early morning visit to Sarangkot to witness a spectacular sunrise over the snow-capped Himalayas. Later, visit the sacred Bindhyabasini Temple, followed by the stunning Davis Falls and the mystical Gupteshwor Mahadev Cave.",
          "Enjoy a peaceful boat ride on Phewa Lake and visit the famous Tal Barahi Temple, located on an island in the middle of the lake. Spend the evening exploring the lively Lakeside Market, where you can shop for local handicrafts, souvenirs, and Nepali cuisine.",
          "Return to the hotel for dinner and an overnight stay in Pokhara."
        ],
        "timing": "Full Day",
        "nightstay": "Pokhara",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 3,
        "title": "Pokhara to Muktinath",
        "city": "Mukhtinath",
        "points": [
          "Start your day early with breakfast before embarking on one of the most scenic journeys in Nepal. Drive through the breathtaking landscapes of the Kali Gandaki Valley, passing picturesque mountain villages, waterfalls, and rugged Himalayan terrain on your way to the sacred town of Muktinath.",
          "Upon arrival, visit the revered Muktinath Temple, one of the holiest pilgrimage sites for both Hindus and Buddhists. Seek blessings at the temple, experience the spiritual significance of the 108 sacred water spouts (Muktidhara), and visit the eternal flame at Jwala Mai Temple.",
          "After completing the darshan, spend some time enjoying the spectacular views of the Annapurna and Dhaulagiri mountain ranges before checking in to your hotel.",
          "Dinner and overnight stay at Muktinath/Jomsom."
        ],
        "timing": "Full Day",
        "nightstay": "Mukhtinath or Jomsom",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 4,
        "title": "Muktinath to Kathmandu",
        "city": "Kathmandu",
        "points": [
          "Wake up early and visit the sacred Muktinath Temple, one of Nepal's most revered pilgrimage sites for both Hindus and Buddhists. After seeking blessings and exploring the temple परिसर, return to the hotel for breakfast.",
          "Later, check out and begin your scenic journey towards Kathmandu. Travel through the spectacular Kali Gandaki Valley, passing beautiful mountain landscapes, traditional villages, rivers, and lush green hills as you descend from the Himalayas to Nepal's vibrant capital.",
          "Upon arrival in Kathmandu, complete the hotel check-in formalities and spend the evening at leisure exploring the nearby markets or relaxing after the long journey.",
          "Enjoy a delicious dinner and an overnight stay in Kathmandu."
        ],
        "timing": "Full Day",
        "nightstay": "Kathmandu",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 5,
        "title": "Kathmandu Sightseeing",
        "city": "Kathmandu",
        "points": [
          "After breakfast, embark on a full-day sightseeing tour of Nepal's vibrant capital city. Visit the sacred Pashupatinath Temple, one of the holiest Shiva temples in the world, followed by the magnificent Boudhanath Stupa, one of the largest Buddhist stupas in Asia. Continue to the iconic Swayambhunath Stupa (Monkey Temple), offering panoramic views of Kathmandu Valley, and explore the historic Kathmandu Durbar Square, renowned for its ancient palaces, temples, and traditional Newari architecture.",
          "In the evening, experience the lively atmosphere of Thamel, Kathmandu's most popular tourist district. Stroll through its colorful streets filled with cafés, restaurants, live music venues, souvenir shops, and local markets. Guests may enjoy the nightlife, local cuisine, or shop for trekking gear and handicrafts at their own pace.",
          "Dinner is not included today, allowing guests the flexibility to explore Kathmandu's famous cafés and restaurants at their own expense.",
          "Return to the hotel for an overnight stay in Kathmandu."
        ],
        "timing": "Full Day",
        "nightstay": "Kathmandu",
        "meals": [
          "Breakfast"
        ]
      },
      {
        "day": 6,
        "title": "Kathmandu to Gorakhpur",
        "city": "Gorakhpur",
        "points": [
          "After an early breakfast, check out from the hotel and begin your return journey to Gorakhpur. Drive through the scenic hills of Nepal towards the Sunauli Border, where you will complete the necessary immigration formalities before entering India.",
          "Continue your drive to Gorakhpur, arriving by evening. The tour concludes upon arrival in Gorakhpur with wonderful memories of Nepal's breathtaking landscapes, sacred temples, and unforgettable experiences."
        ],
        "timing": "Full Day",
        "nightstay": "",
        "meals": [
          "Breakfast"
        ]
      }
    ]
  },
  {
    "slug": "trivandrum-coimbatore-6d5n",
    "name": "Trivandrum - Coimbatore 6D/5N",
    "heading": "Padma & Tamil Nadu 6-Day Pilgrimage",
    "code": "KERALA-KANYA-2",
    "category": "yatra",
    "days": 6,
    "nights": 5,
    "price": 16000,
    "originalPrice": 30000,
    "intro": [
      "Experience the perfect blend of spirituality, heritage, and breathtaking landscapes on this unforgettable 6 Days / 5 Nights journey through Kerala & Tamil Nadu. Begin your adventure in the vibrant city of Trivandrum, then witness the spectacular confluence of three seas at Kanyakumari. Visit the sacred island of Rameshwaram, explore the historic ruins of Dhanushkodi, and seek blessings at the renowned Sri Ramanathaswamy Temple.",
      "Continue to the cultural capital of Tamil Nadu, Madurai, where the magnificent Meenakshi Amman Temple and other iconic landmarks showcase the region's rich heritage. Conclude your journey in Coimbatore, carrying home cherished memories of ancient temples, scenic coastlines, and South India's timeless traditions."
    ],
    "highlights": [
      "Spiritual journey covering major South Indian temples",
      "Trivandrum & Kovalam – Temple, beach & coastal beauty",
      "Kanyakumari – Experience the unique meeting point of three seas",
      "Rameshwaram – Sacred temple town & iconic Pamban Bridge",
      "Madurai – Explore the historic temple city",
      "Coimbatore – Gateway to Western Tamil Nadu"
    ],
    "travellers": "Couples / Families",
    "image": "/images/tours/trivandrum-madurai-5d4n.webp",
    "pricing": [
      {
        "label": "Quad Sharing",
        "price": 16000
      },
      {
        "label": "Triple Sharing",
        "price": 17000
      },
      {
        "label": "Double Sharing",
        "price": 19000
      }
    ],
    "inclusions": [
      "5 Nights Accommodation",
      "5 Breakfasts",
      "5 Dinners",
      "AC Vehicle for Transfers & Sightseeing",
      "Pickup & Drop as per itinerary",
      "Sightseeing as mentioned in the itinerary",
      "Driver charges, fuel & parking",
      "Hotel & transportation taxes/charges as applicable",
      "Trip Coordinator / Travel Support",
      "All transfers and sightseeing as per the planned itinerary"
    ],
    "exclusions": [
      "5% GST",
      "Entry fees to monuments, parks, museums, temples and sightseeing attractions",
      "Adventure activities and optional experiences (boating, safari, elephant ride, cultural shows, cable car, etc.)",
      "Train/Flight fare",
      "Lunch (except Houseboat Lunch) and any meals not mentioned in the inclusions",
      "Personal expenses such as shopping, tips, laundry, phone calls, room service and beverages",
      "Camera and video camera charges (where applicable)",
      "Travel Insurance",
      "Additional sightseeing or vehicle usage not mentioned in the itinerary",
      "Expenses due to natural calamities, roadblocks, landslides, weather conditions, strikes, political disturbances or any unforeseen circumstances",
      "Anything not specifically mentioned under \"Package Includes\""
    ],
    "support": [
      "Comfortable AC vehicle throughout the tour",
      "Dedicated driver for transfers & sightseeing",
      "Hotel check-in and check-out assistance",
      "Pickup & drop coordination",
      "Assistance during sightseeing and transfers",
      "Well-planned daily travel schedule",
      "On-trip coordination for a smooth and hassle-free journey"
    ],
    "accommodation": "Kovalam / Trivandrum: 1 Night\nKanyakumari: 1 Night\nRameshwaram: 1 Night\nMadurai: 1 Night\nCoimbatore: 1 Night\nTotal: 5 Nights / 6 Days\nComfortable accommodation in selected hotels on a sharing basis.",
    "meals": "5 Breakfasts\n5 Dinners\nMeals will be provided as per the hotel schedule and itinerary.",
    "notes": "This itinerary is subject to change based on weather conditions and unforeseen circumstances. The Dhanushkodi visit is subject to time and weather conditions. Optional activities are available at an additional cost. Please note that the driver allowance is for local transportation and does not include personal expenses.",
    "paymentKey": "payment-4",
    "cancellationKey": "cancel-2",
    "faqKey": "faq-4",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival Trivandram",
        "city": "Kovalam",
        "points": [
          "Arrive at Trivandrum (Thiruvananthapuram) Airport / Railway Station and meet our representative or driver. Begin your Kerala journey with a visit to the famous Sree Padmanabhaswamy Temple, one of the most renowned spiritual landmarks in Thiruvananthapuram. Spend some peaceful time at the temple and explore the surrounding heritage area.",
          "Later, proceed towards Kovalam, a beautiful coastal destination known for its golden beaches and scenic Arabian Sea views. Visit Kovalam Beach and the Lighthouse area, enjoy the coastal surroundings and take some time for photography and relaxation.",
          "After sightseeing, check in to the hotel and relax. The evening is free to enjoy the beach or explore the nearby surroundings."
        ],
        "timing": "Full Day",
        "nightstay": "Kovalam",
        "meals": [
          "Dinner"
        ]
      },
      {
        "day": 2,
        "title": "Kovalam to Kanyakumari",
        "city": "Kanyakumari",
        "points": [
          "Start your day with breakfast before checking out from the hotel and beginning your journey towards Kanyakumari, the southernmost point of mainland India.",
          "Enjoy the scenic drive through the coastal landscapes and beautiful villages of South India. Upon arrival in Kanyakumari, check in to your hotel and freshen up.",
          "Later, proceed for sightseeing and visit the famous Vivekananda Rock Memorial, located on a rocky island surrounded by the sea. Also visit the Thiruvalluvar Statue and Kanyakumari Beach, where the Arabian Sea, Bay of Bengal, and Indian Ocean meet.",
          "In the evening, enjoy the spectacular sunset at Kanyakumari, subject to weather conditions. Spend some time exploring the local market before returning to the hotel."
        ],
        "timing": "Full Day",
        "nightstay": "Kanyakumari",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 3,
        "title": "Kanyakumari to Rameswaram",
        "city": "Rameswaram",
        "points": [
          "Start your day with breakfast before checking out from the hotel and proceeding towards the sacred town of Rameshwaram, one of the most important pilgrimage destinations in South India.",
          "Enjoy the scenic journey through Tamil Nadu’s countryside and coastal landscapes. Upon reaching Rameshwaram, proceed directly towards Dhanushkodi, the legendary ghost town located at the eastern tip of Rameshwaram Island.",
          "Explore the beautiful and dramatic landscapes of Dhanushkodi, including Dhanushkodi Beach, the meeting point of the sea, and the historic ruins of the old town, subject to road and weather conditions.",
          "After completing the sightseeing, proceed to your hotel in Rameshwaram and check in. Spend the evening relaxing at the hotel."
        ],
        "timing": "Full Day",
        "nightstay": "Rameswaram",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 4,
        "title": "Rameswaram to Madurai",
        "city": "Madurai",
        "points": [
          "Start your day early in the morning and get ready for the sacred Ramanathaswamy Temple Darshan. As the temple follows a traditional dress code, traditional attire is compulsory for temple entry. Boys should wear Dhoti/Mundu with an appropriate upper garment, while Girls should wear Saree, Salwar Suit, or other permitted traditional attire.",
          "Proceed to the temple for the early morning darshan and experience the spiritual atmosphere of one of India’s most revered pilgrimage sites and one of the 12 Jyotirlingas. The temple is also famous for its magnificent corridors, intricately carved pillars, and sacred 22 Theerthams (holy water wells).",
          "After completing the darshan, return to the hotel for breakfast and freshen up. Later, check out and begin your journey towards Madurai.",
          "Upon arrival in Madurai, proceed for sightseeing and visit the magnificent Meenakshi Amman Temple, renowned for its grand gopurams, intricate sculptures, and rich spiritual heritage. Also explore the surrounding Puthu Mandapam and local markets, famous for traditional handicrafts, textiles, and local products.",
          "If time permits, visit Thirumalai Nayakkar Palace, known for its impressive architecture and historic significance.",
          "After completing the sightseeing, check in to your hotel and relax."
        ],
        "timing": "Full Day",
        "nightstay": "Madurai",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 5,
        "title": "Madurai to Coimbatore",
        "city": "Coimbatore",
        "points": [
          "Start your day with breakfast at the hotel before checking out and beginning your journey towards Coimbatore, known as the gateway to the beautiful Western Ghats.",
          "Enjoy the scenic drive through the Tamil Nadu countryside, passing through villages, farmlands, and lush green landscapes. Upon arrival in Coimbatore, check in to your hotel and freshen up.",
          "Later, proceed for Coimbatore sightseeing. Visit the magnificent Adiyogi Shiva Statue at Isha Yoga Center, surrounded by the scenic Velliangiri Hills. Spend some peaceful time exploring the surroundings and enjoying the spiritual atmosphere.",
          "Later, visit Marudamalai Temple, a popular hilltop temple dedicated to Lord Murugan, subject to available time and temple timings.",
          "In the evening, explore the local markets of Coimbatore or enjoy some leisure time at the hotel.",
          "Return to the hotel and relax after the day’s journey and sightseeing."
        ],
        "timing": "Full Day",
        "nightstay": "Coimbatore",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 6,
        "title": "Coimbatore Departure",
        "city": "Coimbatore",
        "points": [
          "Start your final day with breakfast at the hotel before checking out and completing the necessary departure formalities.",
          "Depending on your departure schedule, enjoy some free time for local shopping or explore nearby areas of Coimbatore. You can shop for traditional South Indian products, spices, handicrafts, textiles, and local souvenirs.",
          "Later, proceed towards Coimbatore Railway Station / Airport as per your departure schedule.",
          "Take home beautiful memories of your journey through Kerala & Tamil Nadu, covering scenic hill stations, tea plantations, peaceful backwaters, beautiful beaches, sacred temples, cultural heritage, and the spiritual destinations of South India.",
          "Tour Ends with Happy Memories."
        ],
        "timing": "Morning",
        "nightstay": "",
        "meals": [
          "Breakfast"
        ]
      }
    ]
  },
  {
    "slug": "munnar-thekkady-allepey-kovalam-7d6n",
    "name": "Munnar Thekkady Allepey Kovalam 7D/6N",
    "heading": "Kerala & Tamil Nadu 12-Day Adventure",
    "code": "KERALA-8-DAY",
    "category": "kerala",
    "days": 7,
    "nights": 6,
    "price": 17000,
    "originalPrice": 30000,
    "intro": [
      "Experience the enchanting beauty of Kerala, where lush green hills, serene backwaters, pristine beaches, and rich cultural heritage come together for an unforgettable holiday. Explore the colonial charm of Kochi, relax on the cliffside beaches of Varkala, witness the breathtaking tea plantations of Munnar, enjoy wildlife and spice plantations in Thekkady, cruise through the tranquil backwaters of Alleppey, unwind at the golden beaches of Kovalam, and seek blessings at the world-famous Sree Padmanabhaswamy Temple in Thiruvananthapuram.",
      "This tour offers the perfect blend of nature, adventure, spirituality, and relaxation, making it an ideal getaway for families, couples, honeymooners, and groups looking to experience the best of God's Own Country. 🌿🚤🏖️🛕"
    ],
    "highlights": [
      "Explore Kerala's backwaters, witness Kanyakumari's sunrise, delve into Tamil Nadu's temples and culture, experience wildlife in Periyar, and enjoy diverse landscapes."
    ],
    "travellers": "Couples / Families",
    "image": "/images/tours/trivandrum-madurai-5d4n.webp",
    "pricing": [
      {
        "label": "Quad Sharing",
        "price": 16500
      },
      {
        "label": "Triple Sharing",
        "price": 17500
      },
      {
        "label": "Double Sharing",
        "price": 20000
      }
    ],
    "inclusions": [
      "1 Night Alleppey Houseboat Stay",
      "5 Nights Hotel Stay",
      "Lunch Included during Houseboat Stay",
      "6 Breakfasts & 6 Dinners",
      "Sightseeing & Transfers by AC Bus or Tempo Traveller (as per group size)",
      "Driver Allowance, Toll Tax, Parking Charges & Fuel",
      "All Transfers as per the Itinerary"
    ],
    "exclusions": [
      "5% GST",
      "Entry fees to monuments, parks, museums, temples and sightseeing attractions",
      "Adventure activities and optional experiences (boating, safari, elephant ride, cultural shows, cable car, etc.)",
      "Train/Flight fare",
      "Lunch (except Houseboat Lunch) and any meals not mentioned in the inclusions",
      "Personal expenses such as shopping, tips, laundry, phone calls, room service and beverages",
      "Camera and video camera charges (where applicable)",
      "Travel Insurance",
      "Additional sightseeing or vehicle usage not mentioned in the itinerary",
      "Expenses due to natural calamities, roadblocks, landslides, weather conditions, strikes, political disturbances or any unforeseen circumstances",
      "Anything not specifically mentioned under \"Package Includes\""
    ],
    "support": [
      "Comfortable Accommodation",
      "Daily Breakfast",
      "Private AC Transportation",
      "Experienced Driver",
      "Sightseeing as per Itinerary",
      "Pickup & Drop Assistance",
      "Safe & Hassle-Free Journey",
      "24×7 Customer Support"
    ],
    "accommodation": "5 Nights in comfortable hotels, 1 Night on a traditional Kerala houseboat.",
    "meals": "Breakfast, Dinner included. Lunch during houseboat stay.",
    "notes": "This itinerary is subject to change based on weather conditions and unforeseen circumstances. The Dhanushkodi visit is subject to time and weather conditions. Optional activities are available at an additional cost. Please note that the driver allowance is for local transportation and does not include personal expenses.",
    "paymentKey": "payment-4",
    "cancellationKey": "cancel-2",
    "faqKey": "faq-7",
    "itinerary": [
      {
        "day": 1,
        "title": "Kochi to Munnar",
        "city": "Munnar",
        "points": [
          "Arrive at Ernakulam Railway Station, meet our representative/driver and proceed towards Munnar. Enjoy a scenic drive through Kerala’s beautiful countryside, lush green landscapes, spice and rubber plantations, winding mountain roads and charming villages.",
          "En route, you can enjoy scenic photo stops at Cheeyappara Waterfalls, Valara Waterfalls and other beautiful viewpoints, subject to time, weather and road conditions.",
          "Upon arrival in Munnar, check in to the hotel and relax. The evening is free to explore the nearby market and surroundings at your own pace."
        ],
        "timing": "Full Day",
        "nightstay": "Munnar",
        "meals": [
          "Dinner"
        ]
      },
      {
        "day": 2,
        "title": "Munnar Sightseeing",
        "city": "Munnar",
        "points": [
          "Start your day with breakfast before heading out for a full-day sightseeing tour of Munnar, surrounded by rolling hills, tea plantations, forests, and beautiful lakes.",
          "Visit Mattupetty Dam, a popular scenic attraction offering beautiful views of the surrounding mountains and lake. Continue towards Echo Point, known for its natural echo phenomenon and peaceful surroundings.",
          "Later, visit Kundala Lake and Kundala Dam, surrounded by lush green hills and tea plantations. Enjoy some time taking photographs and appreciating the natural beauty of the region.",
          "You may also visit the Tea Museum, where you can learn about the history and traditional methods of tea production in Munnar, subject to opening hours.",
          "After completing the sightseeing, return to the hotel and spend the evening at leisure. You can explore the local market or simply relax at the property."
        ],
        "timing": "Full Day",
        "nightstay": "Munnar",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 3,
        "title": "Munnar to Thekkady",
        "city": "Thekkady",
        "points": [
          "Start your day with breakfast before checking out from your hotel and proceeding towards Thekkady, one of Kerala’s most famous destinations for wildlife, forests, and spice plantations.",
          "Enjoy a scenic drive through the Western Ghats, passing through winding mountain roads, dense greenery, spice plantations, and beautiful countryside.",
          "Upon arrival in Thekkady, check in to your hotel and relax.",
          "Later, you can explore the local market and shop for Kerala’s famous spices, tea, coffee, handmade products, and other souvenirs.",
          "Guests can also opt for activities such as Periyar Lake boating, spice plantation visits, Kathakali performances, or Kalaripayattu shows, subject to availability and additional charges.",
          "Return to the hotel after the evening activities."
        ],
        "timing": "Full Day",
        "nightstay": "Thekkady",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 4,
        "title": "Thekkady to Alleppey",
        "city": "Alleppey",
        "points": [
          "Start your day with breakfast before checking out and beginning your journey towards Alleppey, famously known as the Venice of the East and renowned for its beautiful backwaters.",
          "Drive through the scenic Kerala countryside, passing lush paddy fields, coconut plantations, villages, and waterways.",
          "Upon arrival in Alleppey, board your houseboat and enjoy a welcome drink before completing the check-in formalities. Enjoy a delicious lunch on board as the houseboat cruises through the serene backwaters.",
          "Relax while enjoying views of traditional villages, coconut trees, paddy fields, and local life along the waterways. Later, witness the beautiful sunset over the backwaters and enjoy the peaceful surroundings."
        ],
        "timing": "Full Day",
        "nightstay": "Alleppey Houseboat",
        "meals": [
          "Breakfast",
          "Lunch",
          "Dinner"
        ]
      },
      {
        "day": 5,
        "title": "Alleppey to Kovalam",
        "city": "Kovalam",
        "points": [
          "Start your day with breakfast before checking out from the houseboat and proceeding towards Jatayu Earth’s Center, one of Kerala’s unique attractions.",
          "Upon arrival, explore the magnificent Jatayu sculpture, one of the largest bird sculptures in the world, and enjoy the surrounding natural landscapes. The attraction is also associated with the legendary story of Jatayu from the Ramayana.",
          "After completing your visit, continue towards Varkala, a beautiful coastal destination famous for its dramatic cliffs overlooking the Arabian Sea. Visit Varkala Beach and Varkala Cliff, where you can enjoy the sea views, explore the local shops, and spend some relaxing time by the coast.",
          "If time permits, enjoy the sunset at Varkala Beach. After sunset, proceed towards Kovalam and check in to your hotel."
        ],
        "timing": "Full Day",
        "nightstay": "Kovalam",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 6,
        "title": "Kovalam Sightseeing",
        "city": "Kovalam",
        "points": [
          "Start your day with a delicious breakfast at the hotel before heading out for Kovalam sightseeing. Visit Lighthouse Beach, Hawa Beach, and Samudra Beach, and enjoy the beautiful coastal views and leisure time by the Arabian Sea.",
          "After completing the sightseeing, return to the hotel and freshen up. Get ready for the evening temple visit and change into traditional attire — Mundu/Dhoti for Boys and Saree/Salwar Suit for Girls, as per the temple dress requirements.",
          "Later, proceed towards Thiruvananthapuram for an evening visit to the revered Sree Padmanabhaswamy Temple. Attend the darshan during the available evening temple timings, subject to entry regulations and crowd conditions.",
          "After darshan, return to Kovalam and relax at the hotel."
        ],
        "timing": "Full Day",
        "nightstay": "Kovalam",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 7,
        "title": "Trivandram Departure",
        "city": "Kovalam",
        "points": [
          "After breakfast, check out from the hotel and get ready for your onward journey. As per your departure schedule, our vehicle will pick you up from the hotel in Kovalam and proceed directly towards Trivandrum Airport / Railway Station.",
          "Enjoy a comfortable drive through the scenic coastal surroundings of Kerala while travelling towards your departure point. The vehicle will drop you at the designated airport or railway station with sufficient time for your onward journey.",
          "This is a departure transfer only and no sightseeing is included in Trivandrum on this day."
        ],
        "timing": "1 Hr",
        "nightstay": "",
        "meals": [
          "Breakfast"
        ]
      }
    ]
  },
  {
    "slug": "kashmir-vaishno-devi-8d7n",
    "name": "Kashmir & Vaishno Devi 8D/7N",
    "heading": "7 Days Kashmir Adventure",
    "code": "KASHMIR-EXPL",
    "category": "yatra",
    "days": 8,
    "nights": 7,
    "price": 17999,
    "originalPrice": 24999,
    "intro": [
      "Discover the breathtaking beauty of Kashmir with our 7-day adventure package. Immerse yourself in the rich culture, explore stunning landscapes, and create unforgettable memories. This tour includes visits to iconic landmarks, scenic drives, and cultural experiences. Experience the magic of Kashmir!"
    ],
    "highlights": [
      "Explore the Valley of Flowers",
      "Witness Mughal architecture",
      "Experience local culture",
      "Scenic Dal Lake cruise"
    ],
    "travellers": "Adventurous Travelers",
    "image": "/images/tours/kashmir-vaishno-devi-8d7n.webp",
    "pricing": [
      {
        "label": "Triple Sharing",
        "price": 17999
      },
      {
        "label": "Double Sharing",
        "price": 21999
      }
    ],
    "inclusions": [
      "Flight or Train Tickets",
      "Breakfast & Dinner (Daily)",
      "Sightseeing by Local Union Taxi / Sumo",
      "Entry Fees for Gardens & Monuments (as per itinerary)",
      "Shikara Ride (as per package)",
      "Gondola Ride (Phase one & Phase Two )",
      "Accommodation in Hotels / Houseboat",
      "Driver Allowance, Toll, Parking & Fuel Charges",
      "Basic Trip Assistance & Coordination",
      "Snow Points Visit (where accessible)",
      "Pick-up & Drop (Airport / Railway Station)"
    ],
    "exclusions": [
      "Lunch & Any items not mentioned in meals",
      "Pony / Horse Ride charges (Sonmarg, Pahalgam, Gulmarg)",
      "Local Union Taxis for ABC points (in Pahalgam) if not included",
      "Activities: Skiing, Snowbike, Rafting, Zorbing, etc.",
      "Personal Expenses: Shopping, Tips, Mineral Water, Laundry",
      "Travel Insurance / Medical Expenses",
      "Entry Fees Not Mentioned in the inclusions",
      "Helicopter Tickets for Vaishnodevi (if part of package)",
      "Extra Services beyond standard itinerary",
      "Any Changes in Itinerary due to weather/road blocks"
    ],
    "support": [
      "Dedicated support team",
      "Emergency assistance",
      "Local guides"
    ],
    "accommodation": "Comfortable hotels and houseboats throughout the trip.",
    "meals": "Breakfast included daily.",
    "notes": "Package includes INR🚆 TRAIN (3AC) PACKAGES for Day 8. Flight packages are available at an additional cost.",
    "paymentKey": "payment-2",
    "cancellationKey": "cancel-2",
    "faqKey": "faq-2",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival in Srinagar",
        "city": "Srinagar",
        "points": [
          "Arrival at Srinagar Airport.",
          "Transfer to hotel in Srinagar.",
          "Freshen up and relax.",
          "Evening leisure time."
        ],
        "timing": "Afternoon",
        "nightstay": "Srinagar",
        "meals": [
          "Breakfast"
        ]
      },
      {
        "day": 2,
        "title": "Srinagar Local Sightseeing",
        "city": "Srinagar",
        "points": [
          "Visit Dal Lake and enjoy a Shikara ride.",
          "Explore Mughal Gardens (Shalimar Bagh, Nishat Bagh).",
          "Visit Jamia Masjid and Shah Hamdan Shrine."
        ],
        "timing": "Morning & Afternoon",
        "nightstay": "Srinagar",
        "meals": [
          "Breakfast",
          "Lunch"
        ]
      },
      {
        "day": 3,
        "title": "Srinagar ➝ Sonmarg ➝ Srinagar",
        "city": "Srinagar",
        "points": [
          "Drive to Sonmarg (Meadow of Flowers).",
          "Enjoy stunning views of the Thajiwas Glacier.",
          "Optional: Pony ride to Thajiwas Glacier.",
          "Return to Srinagar."
        ],
        "timing": "Full Day",
        "nightstay": "Srinagar",
        "meals": [
          "Breakfast",
          "Lunch"
        ]
      },
      {
        "day": 4,
        "title": "Srinagar ➝ Gulmarg ➝ Srinagar",
        "city": "Srinagar",
        "points": [
          "Drive to Gulmarg (Summer Capital).",
          "Enjoy Gondola ride to Kongdori & Apharwat Peak.",
          "Optional: Skiing/Snowboarding (seasonal).",
          "Return to Srinagar."
        ],
        "timing": "Full Day",
        "nightstay": "Srinagar",
        "meals": [
          "Breakfast",
          "Lunch"
        ]
      },
      {
        "day": 5,
        "title": "Srinagar ➝ Pahalgam",
        "city": "Pahalgam",
        "points": [
          "Drive to Pahalgam (Valley of Shepherds).",
          "Visit Betaab Valley and Aru Valley.",
          "Enjoy river rafting (optional).",
          "Return to Pahalgam."
        ],
        "timing": "Full Day",
        "nightstay": "Pahalgam",
        "meals": [
          "Breakfast",
          "Lunch"
        ]
      },
      {
        "day": 6,
        "title": "Pahalgam ➝ Katra",
        "city": "Katra",
        "points": [
          "Drive to Katra.",
          "Visit Mata Vaishno Devi Temple (Darshan).",
          "Return to Katra."
        ],
        "timing": "Full Day",
        "nightstay": "Katra",
        "meals": [
          "Breakfast",
          "Lunch"
        ]
      },
      {
        "day": 7,
        "title": "Vaishnodevi Darshan",
        "city": "Katra",
        "points": [
          "Visit Mata Vaishno Devi Temple.",
          "Darshan at the holy shrine.",
          "Return to Katra."
        ],
        "timing": "Full Day",
        "nightstay": "Katra",
        "meals": [
          "Breakfast",
          "Lunch"
        ]
      },
      {
        "day": 8,
        "title": "Katra Railway Station Drop",
        "city": "Katra",
        "points": [
          "Transfer to Katra Railway Station.",
          "Board train for onward journey."
        ],
        "timing": "Morning",
        "nightstay": "",
        "meals": [
          "Breakfast"
        ]
      }
    ]
  },
  {
    "slug": "do-dham-yatra-ex-delhi",
    "name": "Do dham Yatra EX Delhi",
    "heading": "9 Day Do dham Yatra",
    "code": "CHARDHAM-YAT-3",
    "category": "yatra",
    "days": 9,
    "nights": 8,
    "price": 18000,
    "originalPrice": 30000,
    "intro": [
      "Embark on a divine 9 Days / 8 Nights DO Dham Yatra, covering the two sacred shrines of Kedarnath, and Badrinath. Experience a perfect blend of spirituality, breathtaking Himalayan landscapes, ancient temples, scenic treks, and unforgettable moments. The journey also includes visits to Haridwar, Rishikesh, Mana Village, Tungnath, Triyuginarayan, Guptkashi, Dhari Devi, Devprayag, and an exciting adventure experience at Shivpuri, making it a truly memorable pilgrimage through the heart of Dev Bhoomi Uttarakhand."
    ],
    "highlights": [
      "Spiritual Journey",
      "Holiest Pilgrimage Destinations",
      "Scenic Himalayan Landscapes",
      "Divine Temple Darshans",
      "Cultural Immersion"
    ],
    "travellers": "",
    "image": "/images/tours/kedarnath-yatra-ex-haridwar.webp",
    "pricing": [
      {
        "label": "Quad Sharing",
        "price": 18000
      },
      {
        "label": "Triple Sharing",
        "price": 20000
      },
      {
        "label": "Double Sharing",
        "price": 22000
      }
    ],
    "inclusions": [
      "Airport & Railway Station Pickup & Drop",
      "Comfortable Hotel / Resort / Tent Accommodation",
      "Daily Breakfast & Dinner",
      "All Sightseeing as per the Itinerary",
      "Transportation by Non-AC Vehicle in the Hills (AC operates only in the plains, subject to weather and government regulations)",
      "All Toll Taxes, Parking Charges & Driver Allowances",
      "Experienced Tour Captain / Trip Coordinator",
      "24×7 On-Tour Assistance",
      "Children below 5 years travel Complimentary (without extra bed and vehicle seat)"
    ],
    "exclusions": [
      "5% GST will be charged extra on the total package cost.",
      "Flight Tickets & Train Tickets (unless specifically mentioned)",
      "Lunch & any meals not mentioned under the package inclusions",
      "Personal expenses (shopping, tips, laundry, phone calls, beverages, etc.)",
      "Entry fees to monuments, parks, museums & sightseeing attractions",
      "Adventure activities & optional experiences (River Rafting, Bungee Jumping, Zipline, Boating, Safari, Cable Car, Cultural Shows, etc.)",
      "Pony, Palki, Pithoo & Helicopter charges",
      "Ropeway charges (Mansa Devi, Chandi Devi or any other ropeway)",
      "Local shuttle/jeep charges (Sonprayag – Gaurikund or wherever applicable)",
      "VIP Darshan / Special Entry Passes at temples or monuments",
      "Medical expenses, doctor consultation & emergency evacuation charges",
      "Travel Insurance of any kind",
      "Expenses arising due to natural calamities, landslides, roadblocks, weather conditions, strikes, vehicle breakdowns, or any unforeseen circumstances",
      "Any increase in government taxes, tolls, parking charges, fuel prices, or permit fees after booking",
      "Anything not specifically mentioned under \"Package Includes\"."
    ],
    "support": [
      "Comfortable Transportation & Sightseeing",
      "Experienced Tour Captain",
      "24×7 On-Tour Assistance",
      "Dedicated Ground Support",
      "Safe & Well-Planned Itinerary",
      "No Hidden Charges"
    ],
    "accommodation": "8 Nights Accommodations6 Nights Hotel2 Nights Tent stay",
    "meals": "7 Breakfast & 8 Dinner",
    "notes": "Additional Expenses Payable by Guests: During the tour, guests are required to bear certain expenses directly wherever applicable. These include Mansa Devi & Chandi Devi Ropeway tickets, Sonprayag to Gaurikund local shuttle/jeep charges, Pony, Palki, Pithoo, and Helicopter services for Yamunotri and Kedarnath, luggage handling/storage charges at the Rampur/Sitapur hotel during the Kedarnath trek, all adventure activities at Shivpuri (such as River Rafting, Bungee Jumping, Giant Swing, Zipline, Flying Fox, etc.), VIP Darshan passes, camera/video camera fees (if applicable), room heater charges, laundry, porter charges, personal shopping, meals and beverages not included in the package, medical expenses, and any other personal expenses or services not specifically mentioned under the package inclusions. All such charges must be paid directly by the guest at the respective location.",
    "paymentKey": "payment-3",
    "cancellationKey": "cancel-2",
    "faqKey": "faq-10",
    "itinerary": [
      {
        "day": 1,
        "title": "Delhi to Haridwar",
        "city": "Haridwar",
        "points": [
          "Upon arrival in Delhi, begin your spiritual journey towards Haridwar, one of India's holiest pilgrimage destinations nestled on the banks of the sacred River Ganga. Enjoy the scenic drive through the plains of North India before reaching Haridwar.",
          "Upon arrival, complete the hotel check-in formalities and freshen up. Visit the revered Mansa Devi Temple and Chandi Devi Temple. Guests may opt to reach the temples via the scenic Ropeway (Udan Khatola) at their own cost, offering breathtaking aerial views of Haridwar, the Ganga River, and the surrounding hills. Seek blessings at both sacred Shakti Peeths before proceeding to the iconic Har Ki Pauri to witness the mesmerizing Ganga Aarti, where thousands of lamps illuminate the river, creating a truly divine atmosphere. You may also explore the nearby local markets and temples.",
          "Return to the hotel after the evening prayers. Enjoy a delicious dinner and relax with an overnight stay in Haridwar."
        ],
        "timing": "Full Day",
        "nightstay": "Haridwar",
        "meals": [
          "Dinner"
        ]
      },
      {
        "day": 2,
        "title": "Haridwar to Rampur / Sitapur",
        "city": "Dhari Devi & Devprayag Sangam",
        "points": [
          "After breakfast, check out from the hotel and begin your journey towards Rampur/Sitapur, the base point for the sacred Kedarnath Yatra. Enjoy a scenic drive through the beautiful Garhwal Himalayas, passing through winding mountain roads, lush green valleys, and breathtaking landscapes.",
          "En route, stop at the Devprayag Sangam View Point to witness the magnificent confluence of the Alaknanda and Bhagirathi rivers from the bridge, where they merge to form the holy River Ganga. Spend some time capturing the panoramic views and enjoying the spiritual atmosphere.",
          "Continue your journey towards Rampur/Sitapur. Upon arrival, complete the hotel check-in formalities and relax. Prepare yourself for the next day's sacred Kedarnath pilgrimage.",
          "Enjoy dinner and an overnight stay at Rampur/Sitapur."
        ],
        "timing": "Full Day",
        "nightstay": "Rampur/Sitapur",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 3,
        "title": "Rampur / Sitapur to Kedarnath",
        "city": "Kedarnath",
        "points": [
          "Wake up early, check out from the hotel, and proceed towards Sonprayag. From here, take the local shuttle to Gaurikund (at your own cost), the starting point of the Kedarnath trek.",
          "Please Note: As only essential luggage can be carried during the trek, your main luggage/baggage will be left at the hotel in Rampur/Sitapur. Guests are required to pay the luggage handling/storage charges directly to the hotel manager (if applicable). It is recommended to carry only a small backpack with essentials required for the overnight stay in Kedarnath.",
          "Begin the sacred 18 km trek (one way) from Gaurikund to Kedarnath, which generally takes 7–10 hours, depending on your pace. Pony, palki, pithoo, and helicopter services are available at an additional cost for pilgrims who prefer an alternative to trekking.",
          "Upon arrival in Kedarnath, check in to your tent stay near Kedarnath Temple and freshen up. In the evening, enjoy the mesmerizing Kedarnath Temple Aarti from the vicinity of your accommodation, surrounded by the serene Himalayan landscape and the divine atmosphere of the shrine."
        ],
        "timing": "Full Day",
        "nightstay": "Kedarnath Tent Stay",
        "meals": [
          "Dinner"
        ]
      },
      {
        "day": 4,
        "title": "Kedarnath to Rampur / Sitapur",
        "city": "Kedarnath",
        "points": [
          "Wake up early and visit the sacred Shri Kedarnath Temple for the auspicious Morning Darshan. After seeking the blessings of Lord Shiva, explore the nearby attractions around the temple, including the Adi Shankaracharya Samadhi, Bhairavnath Temple (subject to weather and time availability), and enjoy the breathtaking views of the surrounding Himalayan peaks.",
          "Later, return to your accommodation for breakfast, complete the check-out formalities, and begin the 18 km descent trek from Kedarnath to Gaurikund, which generally takes 5–7 hours. Pony, palki, and pithoo services are available at an additional cost.",
          "Upon reaching Gaurikund, take the local shuttle to Sonprayag (at your own cost), where your vehicle will be waiting. Continue your journey to Rampur/Sitapur.",
          "Upon arrival, check in to the hotel. Enjoy a delicious dinner and relax with an overnight stay at Rampur/Sitapur."
        ],
        "timing": "Full Day",
        "nightstay": "Rampur/Sitapur",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 5,
        "title": "Rampur / Sitapur to Chopta",
        "city": "Chopta",
        "points": [
          "After breakfast, check out from the hotel and begin your journey towards the scenic hill station of Chopta, popularly known as the \"Mini Switzerland of India.\"",
          "En route, visit the sacred Triyuginarayan Temple, the legendary wedding venue of Lord Shiva and Goddess Parvati, where the eternal flame (Akhand Dhuni) is believed to have been burning since their divine marriage. Continue to Guptkashi and visit the revered Shri Vishwanath Temple and the Ardhnarishwar Temple, both of which hold immense religious significance for devotees of Lord Shiva.",
          "After seeking blessings, continue your picturesque drive through the beautiful Himalayan valleys and dense forests to Chopta.",
          "Upon arrival, complete the hotel check-in formalities and relax amidst the serene natural surroundings. Enjoy a delicious dinner and an overnight stay in Chopta."
        ],
        "timing": "Full Day",
        "nightstay": "Chopta Tent Stay",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 6,
        "title": "Chopta to Badrinath",
        "city": "Tungnath",
        "points": [
          "Wake up early and enjoy breakfast before beginning the trek to the sacred Tungnath Temple, the highest Shiva temple in the world, situated at an altitude of approximately 3,680 meters (12,073 ft).",
          "The trek from Chopta to Tungnath is approximately 3.5 km (one way) and usually takes around 2–3 hours, depending on your pace. The well-paved trail offers spectacular views of the Himalayan peaks, lush meadows, and pristine forests. After offering prayers and spending some peaceful time at the temple, trek back 3.5 km to Chopta, taking approximately 1.5–2.5 hours.",
          "After returning, continue your scenic drive towards Badrinath, the final and most revered destination of the Char Dham Yatra. En route, enjoy the breathtaking landscapes of the Garhwal Himalayas.",
          "Upon arrival in Badrinath, complete the hotel check-in formalities and freshen up. In the evening, visit the sacred Badrinath Temple for Evening Darshan and witness the serene spiritual atmosphere of this holy shrine dedicated to Lord Vishnu.",
          "Return to the hotel after darshan. Enjoy a delicious dinner and relax with an overnight stay in Badrinath."
        ],
        "timing": "Full Day",
        "nightstay": "Badrinath",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 7,
        "title": "Badrinath – Mana Village – Badrinath",
        "city": "Badrinath",
        "points": [
          "Wake up early and visit the sacred Badrinath Temple for the auspicious Morning Darshan. After seeking the blessings of Lord Badri Vishal, return to the hotel for breakfast.",
          "Later, proceed to explore Mana Village, the Last Indian Village located near the Indo-Tibetan border. Visit the famous Vyas Gufa, where Sage Veda Vyasa is believed to have composed the Mahabharata, followed by Ganesh Gufa, where Lord Ganesha is said to have written the epic. Continue to the iconic Bheem Pul, a massive natural rock bridge believed to have been placed by Bhima over the roaring Saraswati River. You can also witness the confluence of mythology and nature at the origin of the Saraswati River.",
          "After sightseeing, return to Badrinath and spend some leisure time exploring the temple surroundings or local market.",
          "Return to the hotel in the evening. Enjoy a delicious dinner and relax with an overnight stay in Badrinath."
        ],
        "timing": "Full Day",
        "nightstay": "Badrinath",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 8,
        "title": "Badrinath to Shivpuri",
        "city": "Rishikesh",
        "points": [
          "After breakfast, check out from the hotel and begin your journey towards Shivpuri, near Rishikesh. Enjoy a scenic drive through the breathtaking Garhwal Himalayas, passing along winding mountain roads and the sacred Alaknanda River.",
          "En route, visit the revered Dhari Devi Temple, dedicated to Goddess Kali and regarded as one of the guardian deities of Uttarakhand. Continue your journey to the holy Devprayag Sangam, where the Alaknanda and Bhagirathi rivers merge to form the sacred River Ganga. Spend some time admiring the spectacular confluence and its spiritual significance.",
          "Upon arrival in Shivpuri, complete the resort check-in formalities and freshen up. Spend the evening relaxing at the resort's swimming pool or enjoy the lively DJ Night, making it a perfect way to unwind after completing the sacred Char Dham Yatra.",
          "Enjoy a delicious dinner and relax with an overnight stay at the Shivpuri Resort."
        ],
        "timing": "full Day",
        "nightstay": "Shivpuri (Rishikesh)",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 9,
        "title": "Rishikesh Sightseeing to Delhi Drop",
        "city": "Rishikesh",
        "points": [
          "After breakfast, check out from the resort and enjoy your morning with exciting adventure activities in Shivpuri. Guests can participate in thrilling experiences such as River Rafting, Bungee Jumping, Giant Swing, Zipline, and other adventure sports at their own cost. Adventure activity timings are from 9:00 AM to 2:00 PM.",
          "At 2:00 PM, proceed towards Rishikesh for sightseeing. Visit popular attractions including Ram Jhula, Laxman Jhula, and Parmarth Niketan Ashram. In the evening, witness the mesmerizing Ganga Aarti at Triveni Ghat, a spiritually uplifting experience filled with devotional chants, illuminated lamps, and prayers on the banks of the sacred River Ganga. You will also have free time to explore the local markets and shop for souvenirs.",
          "At 7:00 PM, begin your return journey to Delhi, carrying unforgettable memories of the sacred Char Dham Yatra and the adventure-filled experiences of Rishikesh. Overnight journey to Delhi."
        ],
        "timing": "Full Day",
        "nightstay": "",
        "meals": [
          "Breakfast"
        ]
      }
    ]
  },
  {
    "slug": "kochi-munnar-thekkady-allepy-kovalam-7d6n",
    "name": "Kochi, Munnar, Thekkady, Allepy & Kovalam 7D/6N",
    "heading": "Kerala & Tamil Nadu 12-Day Adventure",
    "code": "KERALA-TAMIL-2",
    "category": "kerala",
    "days": 7,
    "nights": 6,
    "price": 18000,
    "originalPrice": 30000,
    "intro": [
      "Experience the enchanting beauty of Kerala, where lush green hills, serene backwaters, pristine beaches, and rich cultural heritage come together for an unforgettable holiday. Explore the colonial charm of Kochi, relax on the cliffside beaches of Varkala, witness the breathtaking tea plantations of Munnar, enjoy wildlife and spice plantations in Thekkady, cruise through the tranquil backwaters of Alleppey, unwind at the golden beaches of Kovalam, and seek blessings at the world-famous Sree Padmanabhaswamy Temple in Thiruvananthapuram.",
      "This tour offers the perfect blend of nature, adventure, spirituality, and relaxation, making it an ideal getaway for families, couples, honeymooners, and groups looking to experience the best of God's Own Country. 🌿🚤🏖️🛕"
    ],
    "highlights": [
      "Explore Kerala's backwaters, witness Kanyakumari's sunrise, delve into Tamil Nadu's temples and culture, experience wildlife in Periyar, and enjoy diverse landscapes."
    ],
    "travellers": "Couples / Families",
    "image": "/images/tours/trivandrum-madurai-5d4n.webp",
    "pricing": [
      {
        "label": "Quad Sharing",
        "price": 17000
      },
      {
        "label": "Triple Sharing",
        "price": 18000
      },
      {
        "label": "Double Sharing",
        "price": 20000
      }
    ],
    "inclusions": [
      "1 Night Alleppey Houseboat Stay",
      "5 Nights Hotel Stay",
      "Lunch Included during Houseboat Stay",
      "6 Breakfasts & 6 Dinners",
      "Sightseeing & Transfers by AC Bus or Tempo Traveller (as per group size)",
      "Driver Allowance, Toll Tax, Parking Charges & Fuel",
      "All Transfers as per the Itinerary"
    ],
    "exclusions": [
      "5% GST",
      "Entry fees to monuments, parks, museums, temples and sightseeing attractions",
      "Adventure activities and optional experiences (boating, safari, elephant ride, cultural shows, cable car, etc.)",
      "Train/Flight fare",
      "Lunch (except Houseboat Lunch) and any meals not mentioned in the inclusions",
      "Personal expenses such as shopping, tips, laundry, phone calls, room service and beverages",
      "Camera and video camera charges (where applicable)",
      "Travel Insurance",
      "Additional sightseeing or vehicle usage not mentioned in the itinerary",
      "Expenses due to natural calamities, roadblocks, landslides, weather conditions, strikes, political disturbances or any unforeseen circumstances",
      "Anything not specifically mentioned under \"Package Includes\""
    ],
    "support": [
      "Comfortable Accommodation",
      "Daily Breakfast",
      "Private AC Transportation",
      "Experienced Driver",
      "Sightseeing as per Itinerary",
      "Pickup & Drop Assistance",
      "Safe & Hassle-Free Journey",
      "24×7 Customer Support"
    ],
    "accommodation": "5 Nights in comfortable hotels, 1 Night on a traditional Kerala houseboat.",
    "meals": "Breakfast, Dinner included. Lunch during houseboat stay.",
    "notes": "This itinerary is subject to change based on weather conditions and unforeseen circumstances. The Dhanushkodi visit is subject to time and weather conditions. Optional activities are available at an additional cost. Please note that the driver allowance is for local transportation and does not include personal expenses.",
    "paymentKey": "payment-4",
    "cancellationKey": "cancel-2",
    "faqKey": "faq-7",
    "itinerary": [
      {
        "day": 1,
        "title": "Kochi Arrival & Local Sightseeing",
        "city": "Kochi",
        "points": [
          "Arrive at Kochi, the gateway to Kerala, where our representative/driver will welcome you and assist you with your transfer. After meeting the team, proceed for local sightseeing and explore some of the city's most famous attractions.",
          "Visit the historic Fort Kochi area, known for its colonial architecture, charming streets, and cultural heritage. Explore the iconic Chinese Fishing Nets, followed by a visit to St. Francis Church and the historic Santa Cruz Basilica.",
          "Later, visit Mattancherry Palace (Dutch Palace) and explore the nearby Jew Town and Paradesi Synagogue, subject to opening hours.",
          "In the evening, enjoy some free time at Marine Drive or explore the local markets and waterfront areas.",
          "After completing the sightseeing, proceed to your hotel and check in. Relax and prepare for the upcoming Kerala journey."
        ],
        "timing": "Full Day",
        "nightstay": "Kochi",
        "meals": [
          "Dinner"
        ]
      },
      {
        "day": 2,
        "title": "Kochi to Munnar",
        "city": "Munnar",
        "points": [
          "Start your day with breakfast at the hotel before checking out and beginning your scenic journey from Kochi to Munnar, one of Kerala’s most beautiful hill stations.",
          "Drive through the lush green countryside of Kerala, passing through picturesque villages, coconut plantations, spice plantations, valleys, and the winding roads of the Western Ghats. The route offers spectacular views of the surrounding mountains and dense greenery.",
          "En route, visit the beautiful Cheeyappara Waterfalls and Valara Waterfalls, where you can take a short break and enjoy the natural surroundings, subject to weather and local conditions.",
          "Continue your journey towards Munnar, passing through the famous tea plantations that cover the hillsides. Stop at suitable viewpoints along the way for photography and to enjoy the breathtaking scenery.",
          "Upon arrival in Munnar, check in to your hotel and relax. Spend the evening at leisure, exploring the nearby surroundings or enjoying the peaceful mountain atmosphere."
        ],
        "timing": "Full Day",
        "nightstay": "Munnar",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 3,
        "title": "Munnar Sightseeing",
        "city": "Munnar",
        "points": [
          "Start your day with breakfast before heading out for a full-day sightseeing tour of Munnar, surrounded by rolling hills, tea plantations, forests, and beautiful lakes.",
          "Visit Mattupetty Dam, a popular scenic attraction offering beautiful views of the surrounding mountains and lake. Continue towards Echo Point, known for its natural echo phenomenon and peaceful surroundings.",
          "Later, visit Kundala Lake and Kundala Dam, surrounded by lush green hills and tea plantations. Enjoy some time taking photographs and appreciating the natural beauty of the region.",
          "You may also visit the Tea Museum, where you can learn about the history and traditional methods of tea production in Munnar, subject to opening hours.",
          "After completing the sightseeing, return to the hotel and spend the evening at leisure. You can explore the local market or simply relax at the property."
        ],
        "timing": "Full Day",
        "nightstay": "Munnar",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 4,
        "title": "Munnar to Thekkady",
        "city": "Thekkady",
        "points": [
          "Start your day with breakfast before checking out from your hotel and proceeding towards Thekkady, one of Kerala’s most famous destinations for wildlife, forests, and spice plantations.",
          "Enjoy a scenic drive through the Western Ghats, passing through winding mountain roads, dense greenery, spice plantations, and beautiful countryside.",
          "Upon arrival in Thekkady, check in to your hotel and relax.",
          "Later, you can explore the local market and shop for Kerala’s famous spices, tea, coffee, handmade products, and other souvenirs.",
          "Guests can also opt for activities such as Periyar Lake boating, spice plantation visits, Kathakali performances, or Kalaripayattu shows, subject to availability and additional charges.",
          "Return to the hotel after the evening activities."
        ],
        "timing": "Full Day",
        "nightstay": "Thekkady",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 5,
        "title": "Thekkady to Alleppey",
        "city": "Alleppey",
        "points": [
          "Start your day with breakfast before checking out and beginning your journey towards Alleppey, famously known as the Venice of the East and renowned for its beautiful backwaters.",
          "Drive through the scenic Kerala countryside, passing lush paddy fields, coconut plantations, villages, and waterways.",
          "Upon arrival in Alleppey, board your houseboat and enjoy a welcome drink before completing the check-in formalities. Enjoy a delicious lunch on board as the houseboat cruises through the serene backwaters.",
          "Relax while enjoying views of traditional villages, coconut trees, paddy fields, and local life along the waterways. Later, witness the beautiful sunset over the backwaters and enjoy the peaceful surroundings."
        ],
        "timing": "Full Day",
        "nightstay": "Alleppey Houseboat",
        "meals": [
          "Breakfast",
          "Lunch",
          "Dinner"
        ]
      },
      {
        "day": 6,
        "title": "Alleppey to Kovalam",
        "city": "Kovalam",
        "points": [
          "Start your day with breakfast before checking out from the houseboat and proceeding towards Jatayu Earth’s Center, one of Kerala’s unique attractions.",
          "Upon arrival, explore the magnificent Jatayu sculpture, one of the largest bird sculptures in the world, and enjoy the surrounding natural landscapes. The attraction is also associated with the legendary story of Jatayu from the Ramayana.",
          "After completing your visit, continue towards Varkala, a beautiful coastal destination famous for its dramatic cliffs overlooking the Arabian Sea. Visit Varkala Beach and Varkala Cliff, where you can enjoy the sea views, explore the local shops, and spend some relaxing time by the coast.",
          "If time permits, enjoy the sunset at Varkala Beach. After sunset, proceed towards Kovalam and check in to your hotel."
        ],
        "timing": "Full Day",
        "nightstay": "Kovalam",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 7,
        "title": "Kovalam Sightseeing & Trivandra Depature",
        "city": "Kovalam",
        "points": [
          "After breakfast, check out from the hotel and proceed for Kovalam sightseeing. Visit the beautiful Kovalam Beach and Lighthouse area, and enjoy some time for photography and relaxation by the Arabian Sea.",
          "Later, proceed to Sree Padmanabhaswamy Temple, Trivandrum, one of Kerala’s most famous temples. Traditional dress code is mandatory for temple entry. Visitors should follow the temple’s prescribed dress requirements; suitable traditional attire can be arranged/rented locally if required.",
          "After darshan, proceed towards Trivandrum Airport / Railway Station as per your onward travel schedule. Our vehicle will provide a comfortable drop, marking the end of your memorable Kerala journey."
        ],
        "timing": "Full Day",
        "nightstay": "Kovalam",
        "meals": [
          "Breakfast"
        ]
      }
    ]
  },
  {
    "slug": "nepal-with-ayodhya-pickup-ayodhya-drop-gorakhpur",
    "name": "Nepal with Ayodhya Pickup Ayodhya Drop Gorakhpur",
    "heading": "10-Day Nepal with Ayodhya",
    "code": "NEPAL-WITH-A-5",
    "category": "himalaya",
    "days": 7,
    "nights": 9,
    "price": 18000,
    "originalPrice": 35000,
    "intro": [
      "Embark on a memorable Nepal pilgrimage and sightseeing tour with Ayodhya pickup and Gorakhpur drop. Begin your journey from the holy city of Ayodhya, then travel through Nepal's most iconic destinations, including the picturesque Pokhara, the sacred Muktinath Temple, and the vibrant capital Kathmandu. Experience breathtaking Himalayan landscapes, serene lakes, ancient temples, and rich cultural heritage while enjoying comfortable travel and well-planned sightseeing. This tour is perfect for pilgrims, families, and nature lovers seeking a seamless spiritual and scenic getaway, starting from Ayodhya and concluding at Gorakhpur."
    ],
    "highlights": [
      "Visit Shri Ram Janmabhoomi Temple in Ayodhya",
      "Seek blessings at the sacred Muktinath Temple",
      "Visit the famous Pashupatinath Temple in Kathmandu",
      "Witness breathtaking Himalayan mountain views",
      "Enjoy boating on the beautiful Phewa Lake",
      "Optional sunrise experience at Sarangkot"
    ],
    "travellers": "Couples / Families / Adventure Seekers",
    "image": "/images/tours/nepal-with-ayodhya-pickup-ayodhya-drop-gorakhpur.webp",
    "pricing": [
      {
        "label": "Quad Sharing",
        "price": 18000
      },
      {
        "label": "Triple Sharing",
        "price": 19000
      },
      {
        "label": "Double Sharing",
        "price": 21999
      }
    ],
    "inclusions": [
      "Private AC Vehicle for the entire Nepal tour",
      "Hotel accommodation on Twin/Triple Sharing basis",
      "Daily Breakfast & Dinner",
      "Experienced Tour Leader throughout the trip",
      "All sightseeing as per the itinerary",
      "India–Nepal Border assistance",
      "Driver allowance, toll taxes, parking charges & fuel",
      "Basic First Aid Kit",
      "24×7 Customer Support"
    ],
    "exclusions": [
      "5% GST (Goods & Services Tax)",
      "Train & Flight Tickets",
      "Lunch and personal snacks",
      "Entry fees, camera charges & monument tickets",
      "Boating charges at Phewa Lake",
      "Pony, Jeep or Helicopter charges for Muktinath (if required)",
      "Travel Insurance",
      "Personal expenses such as shopping, laundry, telephone bills, porter charges, tips, beverages, etc.",
      "Expenses arising due to roadblocks, landslides, weather conditions, natural calamities, strikes, or government restrictions",
      "Any additional cost due to itinerary changes beyond the control of the tour operator",
      "Anything not specifically mentioned under \"Package Includes\""
    ],
    "support": [
      "Private Vehicle for the entire tour",
      "Hotel Accommodation on Twin/Triple Sharing",
      "Daily Breakfast & Dinner",
      "Experienced Tour Leader",
      "All Sightseeing as per Itinerary",
      "India–Nepal Border Assistance",
      "Basic First Aid Kit",
      "24×7 Customer Support",
      "Driver Allowance, Toll Tax & Parking Charges"
    ],
    "accommodation": "Accommodation will be provided in comfortable hotels. Accommodation standards may vary depending on the location and altitude.Ayodhya: 1 Night (Hotel)Pokhara: 2 Night (Hotel)Muktinath: 1 Night (Hotel)Kathmandu: 2 Nights (Hotel)",
    "meals": "The package includes meals as mentioned in the itinerary.6 Breakfasts5 DinnersLunch is NOT included and will be at the guest's own expense throughout the tour.Please Note:Dinner is not included on Day 8 (Kathmandu Nightlife)Meals will be served at the respective hotels and tea houses as per the itinerary.During the trekking days, simple, freshly prepared meals will be provided, subject to availability at higher altitudes.",
    "notes": "This is a high-altitude trekking expedition that requires a good level of physical fitness and endurance. Participants are advised to engage in regular walking, cardio, and leg-strengthening exercises at least 4–6 weeks before the trek. The itinerary may be modified due to weather conditions, road closures, landslides, government regulations, or the health and safety of the group. Accommodation during the trek will be in basic tea houses with limited facilities, and electricity, Wi-Fi, hot showers, and mobile network connectivity may be available only at an additional cost or may not be available at higher altitudes. All participants must carry valid original government-issued photo identification and ensure they meet the entry requirements for Nepal. The trek leader's decision will be final in matters concerning safety, route changes, and overall tour management. Guests are advised to carry sufficient cash in Indian Rupees and Nepalese Rupees, as digital payment facilities and ATMs may not be available throughout the trekking route.",
    "paymentKey": "payment-2",
    "cancellationKey": "cancel-2",
    "faqKey": "faq-9",
    "itinerary": [
      {
        "day": 1,
        "title": "Ayodhya Sightseeing",
        "city": "Ayodhya",
        "points": [
          "Arrive in Ayodhya, the sacred birthplace of Lord Shri Ram, and check in to your hotel (subject to room availability). After freshening up and having breakfast, begin a full-day sightseeing tour of this holy city.",
          "Visit the magnificent Shri Ram Janmabhoomi Temple, seek blessings at Hanuman Garhi, explore the beautiful Kanak Bhawan, and experience the spiritual atmosphere along the banks of the Saryu River. In the evening, witness the mesmerizing Saryu Aarti (subject to timing).",
          "Return to the hotel for dinner and an overnight stay in Ayodhya."
        ],
        "timing": "Full Day",
        "nightstay": "Ayodhya",
        "meals": [
          "Dinner"
        ]
      },
      {
        "day": 2,
        "title": "Ayodhya to Pokhara",
        "city": "Sunauli Border",
        "points": [
          "Wake up early and enjoy breakfast before checking out from the hotel. Begin your journey towards Nepal, crossing the Sunauli Border after completing the immigration formalities.",
          "Continue the scenic drive through the picturesque landscapes of Nepal, passing charming villages, rivers, and lush green hills before reaching the beautiful lakeside city of Pokhara.",
          "Upon arrival, check in to your hotel and relax after the long journey. In the evening, you may take a leisurely walk along the vibrant Lakeside Market, enjoying the peaceful atmosphere and stunning views of Phewa Lake.",
          "Dinner and overnight stay in Pokhara."
        ],
        "timing": "Full Day",
        "nightstay": "Pokhara",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 3,
        "title": "Pokhara Local Sightseeing",
        "city": "Pokhara",
        "points": [
          "Wake up to the breathtaking beauty of the Annapurna Himalayan range and enjoy a delicious breakfast at the hotel. Today is dedicated to exploring the natural and cultural attractions of Pokhara.",
          "Begin the day with an optional early morning visit to Sarangkot to witness a spectacular sunrise over the snow-capped Himalayas. Later, visit the sacred Bindhyabasini Temple, followed by the stunning Davis Falls and the mystical Gupteshwor Mahadev Cave.",
          "Enjoy a peaceful boat ride on Phewa Lake and visit the famous Tal Barahi Temple, located on an island in the middle of the lake. Spend the evening exploring the lively Lakeside Market, where you can shop for local handicrafts, souvenirs, and Nepali cuisine.",
          "Return to the hotel for dinner and an overnight stay in Pokhara."
        ],
        "timing": "Full Day",
        "nightstay": "Pokhara",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 4,
        "title": "Pokhara to Muktinath",
        "city": "Mukhtinath",
        "points": [
          "Start your day early with breakfast before embarking on one of the most scenic journeys in Nepal. Drive through the breathtaking landscapes of the Kali Gandaki Valley, passing picturesque mountain villages, waterfalls, and rugged Himalayan terrain on your way to the sacred town of Muktinath.",
          "Upon arrival, visit the revered Muktinath Temple, one of the holiest pilgrimage sites for both Hindus and Buddhists. Seek blessings at the temple, experience the spiritual significance of the 108 sacred water spouts (Muktidhara), and visit the eternal flame at Jwala Mai Temple.",
          "After completing the darshan, spend some time enjoying the spectacular views of the Annapurna and Dhaulagiri mountain ranges before checking in to your hotel.",
          "Dinner and overnight stay at Muktinath/Jomsom."
        ],
        "timing": "Full Day",
        "nightstay": "Mukhtinath or Jomsom",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 5,
        "title": "Muktinath to Kathmandu",
        "city": "Kathmandu",
        "points": [
          "Wake up early and visit the sacred Muktinath Temple, one of Nepal's most revered pilgrimage sites for both Hindus and Buddhists. After seeking blessings and exploring the temple परिसर, return to the hotel for breakfast.",
          "Later, check out and begin your scenic journey towards Kathmandu. Travel through the spectacular Kali Gandaki Valley, passing beautiful mountain landscapes, traditional villages, rivers, and lush green hills as you descend from the Himalayas to Nepal's vibrant capital.",
          "Upon arrival in Kathmandu, complete the hotel check-in formalities and spend the evening at leisure exploring the nearby markets or relaxing after the long journey.",
          "Enjoy a delicious dinner and an overnight stay in Kathmandu."
        ],
        "timing": "Full Day",
        "nightstay": "Kathmandu",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 6,
        "title": "Kathmandu Sightseeing",
        "city": "Kathmandu",
        "points": [
          "After breakfast, embark on a full-day sightseeing tour of Nepal's vibrant capital city. Visit the sacred Pashupatinath Temple, one of the holiest Shiva temples in the world, followed by the magnificent Boudhanath Stupa, one of the largest Buddhist stupas in Asia. Continue to the iconic Swayambhunath Stupa (Monkey Temple), offering panoramic views of Kathmandu Valley, and explore the historic Kathmandu Durbar Square, renowned for its ancient palaces, temples, and traditional Newari architecture.",
          "In the evening, experience the lively atmosphere of Thamel, Kathmandu's most popular tourist district. Stroll through its colorful streets filled with cafés, restaurants, live music venues, souvenir shops, and local markets. Guests may enjoy the nightlife, local cuisine, or shop for trekking gear and handicrafts at their own pace.",
          "Dinner is not included today, allowing guests the flexibility to explore Kathmandu's famous cafés and restaurants at their own expense.",
          "Return to the hotel for an overnight stay in Kathmandu."
        ],
        "timing": "Full Day",
        "nightstay": "Kathmandu",
        "meals": [
          "Breakfast"
        ]
      },
      {
        "day": 7,
        "title": "Kathmandu to Gorakhpur",
        "city": "Gorakhpur",
        "points": [
          "After an early breakfast, check out from the hotel and begin your return journey to Gorakhpur. Drive through the scenic hills of Nepal towards the Sunauli Border, where you will complete the necessary immigration formalities before entering India.",
          "Continue your drive to Gorakhpur, arriving by evening. The tour concludes upon arrival in Gorakhpur with wonderful memories of Nepal's breathtaking landscapes, sacred temples, and unforgettable experiences."
        ],
        "timing": "Full Day",
        "nightstay": "",
        "meals": [
          "Breakfast"
        ]
      }
    ]
  },
  {
    "slug": "kochi-munnar-thekkady-allepy-kovalam-8d7n",
    "name": "Kochi, Munnar, Thekkady, Allepy & Kovalam 8D/7N",
    "heading": "Kerala & Tamil Nadu 12-Day Adventure",
    "code": "KERALA-2-P6B",
    "category": "kerala",
    "days": 8,
    "nights": 7,
    "price": 19000,
    "originalPrice": 30000,
    "intro": [
      "Experience the enchanting beauty of Kerala, where lush green hills, serene backwaters, pristine beaches, and rich cultural heritage come together for an unforgettable holiday. Explore the colonial charm of Kochi, relax on the cliffside beaches of Varkala, witness the breathtaking tea plantations of Munnar, enjoy wildlife and spice plantations in Thekkady, cruise through the tranquil backwaters of Alleppey, unwind at the golden beaches of Kovalam, and seek blessings at the world-famous Sree Padmanabhaswamy Temple in Thiruvananthapuram.",
      "This tour offers the perfect blend of nature, adventure, spirituality, and relaxation, making it an ideal getaway for families, couples, honeymooners, and groups looking to experience the best of God's Own Country. 🌿🚤🏖️🛕"
    ],
    "highlights": [
      "Explore Kerala's backwaters, witness Kanyakumari's sunrise, delve into Tamil Nadu's temples and culture, experience wildlife in Periyar, and enjoy diverse landscapes."
    ],
    "travellers": "Couples / Families",
    "image": "/images/tours/trivandrum-madurai-5d4n.webp",
    "pricing": [
      {
        "label": "Quad Sharing",
        "price": 19000
      },
      {
        "label": "Triple Sharing",
        "price": 20000
      },
      {
        "label": "Double Sharing",
        "price": 23000
      }
    ],
    "inclusions": [
      "1 Night Alleppey Houseboat Stay",
      "6 Nights Hotel Stay",
      "Lunch Included during Houseboat Stay",
      "7 Breakfasts & 7 Dinners",
      "Sightseeing & Transfers by AC Bus or Tempo Traveller (as per group size)",
      "Driver Allowance, Toll Tax, Parking Charges & Fuel",
      "All Transfers as per the Itinerary"
    ],
    "exclusions": [
      "5% GST",
      "Entry fees to monuments, parks, museums, temples and sightseeing attractions",
      "Adventure activities and optional experiences (boating, safari, elephant ride, cultural shows, cable car, etc.)",
      "Train/Flight fare",
      "Lunch (except Houseboat Lunch) and any meals not mentioned in the inclusions",
      "Personal expenses such as shopping, tips, laundry, phone calls, room service and beverages",
      "Camera and video camera charges (where applicable)",
      "Travel Insurance",
      "Additional sightseeing or vehicle usage not mentioned in the itinerary",
      "Expenses due to natural calamities, roadblocks, landslides, weather conditions, strikes, political disturbances or any unforeseen circumstances",
      "Anything not specifically mentioned under \"Package Includes\""
    ],
    "support": [
      "Comfortable Accommodation",
      "Daily Breakfast",
      "Private AC Transportation",
      "Experienced Driver",
      "Sightseeing as per Itinerary",
      "Pickup & Drop Assistance",
      "Safe & Hassle-Free Journey",
      "24×7 Customer Support"
    ],
    "accommodation": "6 Nights in comfortable hotels, 1 Night on a traditional Kerala houseboat.",
    "meals": "Breakfast, Dinner included. Lunch during houseboat stay.",
    "notes": "This itinerary is subject to change based on weather conditions and unforeseen circumstances. The Dhanushkodi visit is subject to time and weather conditions. Optional activities are available at an additional cost. Please note that the driver allowance is for local transportation and does not include personal expenses.",
    "paymentKey": "payment-4",
    "cancellationKey": "cancel-2",
    "faqKey": "faq-7",
    "itinerary": [
      {
        "day": 1,
        "title": "Kochi Arrival & Local Sightseeing",
        "city": "Kochi",
        "points": [
          "Arrive at Kochi, the gateway to Kerala, where our representative/driver will welcome you and assist you with your transfer. After meeting the team, proceed for local sightseeing and explore some of the city's most famous attractions.",
          "Visit the historic Fort Kochi area, known for its colonial architecture, charming streets, and cultural heritage. Explore the iconic Chinese Fishing Nets, followed by a visit to St. Francis Church and the historic Santa Cruz Basilica.",
          "Later, visit Mattancherry Palace (Dutch Palace) and explore the nearby Jew Town and Paradesi Synagogue, subject to opening hours.",
          "In the evening, enjoy some free time at Marine Drive or explore the local markets and waterfront areas.",
          "After completing the sightseeing, proceed to your hotel and check in. Relax and prepare for the upcoming Kerala journey."
        ],
        "timing": "Full Day",
        "nightstay": "Kochi",
        "meals": [
          "Dinner"
        ]
      },
      {
        "day": 2,
        "title": "Kochi to Munnar",
        "city": "Munnar",
        "points": [
          "Start your day with breakfast at the hotel before checking out and beginning your scenic journey from Kochi to Munnar, one of Kerala’s most beautiful hill stations.",
          "Drive through the lush green countryside of Kerala, passing through picturesque villages, coconut plantations, spice plantations, valleys, and the winding roads of the Western Ghats. The route offers spectacular views of the surrounding mountains and dense greenery.",
          "En route, visit the beautiful Cheeyappara Waterfalls and Valara Waterfalls, where you can take a short break and enjoy the natural surroundings, subject to weather and local conditions.",
          "Continue your journey towards Munnar, passing through the famous tea plantations that cover the hillsides. Stop at suitable viewpoints along the way for photography and to enjoy the breathtaking scenery.",
          "Upon arrival in Munnar, check in to your hotel and relax. Spend the evening at leisure, exploring the nearby surroundings or enjoying the peaceful mountain atmosphere."
        ],
        "timing": "Full Day",
        "nightstay": "Munnar",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 3,
        "title": "Munnar Sightseeing",
        "city": "Munnar",
        "points": [
          "Start your day with breakfast before heading out for a full-day sightseeing tour of Munnar, surrounded by rolling hills, tea plantations, forests, and beautiful lakes.",
          "Visit Mattupetty Dam, a popular scenic attraction offering beautiful views of the surrounding mountains and lake. Continue towards Echo Point, known for its natural echo phenomenon and peaceful surroundings.",
          "Later, visit Kundala Lake and Kundala Dam, surrounded by lush green hills and tea plantations. Enjoy some time taking photographs and appreciating the natural beauty of the region.",
          "You may also visit the Tea Museum, where you can learn about the history and traditional methods of tea production in Munnar, subject to opening hours.",
          "After completing the sightseeing, return to the hotel and spend the evening at leisure. You can explore the local market or simply relax at the property."
        ],
        "timing": "Full Day",
        "nightstay": "Munnar",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 4,
        "title": "Munnar to Thekkady",
        "city": "Thekkady",
        "points": [
          "Start your day with breakfast before checking out from your hotel and proceeding towards Thekkady, one of Kerala’s most famous destinations for wildlife, forests, and spice plantations.",
          "Enjoy a scenic drive through the Western Ghats, passing through winding mountain roads, dense greenery, spice plantations, and beautiful countryside.",
          "Upon arrival in Thekkady, check in to your hotel and relax.",
          "Later, you can explore the local market and shop for Kerala’s famous spices, tea, coffee, handmade products, and other souvenirs.",
          "Guests can also opt for activities such as Periyar Lake boating, spice plantation visits, Kathakali performances, or Kalaripayattu shows, subject to availability and additional charges.",
          "Return to the hotel after the evening activities."
        ],
        "timing": "Full Day",
        "nightstay": "Thekkady",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 5,
        "title": "Thekkady to Alleppey",
        "city": "Alleppey",
        "points": [
          "Start your day with breakfast before checking out and beginning your journey towards Alleppey, famously known as the Venice of the East and renowned for its beautiful backwaters.",
          "Drive through the scenic Kerala countryside, passing lush paddy fields, coconut plantations, villages, and waterways.",
          "Upon arrival in Alleppey, board your houseboat and enjoy a welcome drink before completing the check-in formalities. Enjoy a delicious lunch on board as the houseboat cruises through the serene backwaters.",
          "Relax while enjoying views of traditional villages, coconut trees, paddy fields, and local life along the waterways. Later, witness the beautiful sunset over the backwaters and enjoy the peaceful surroundings."
        ],
        "timing": "Full Day",
        "nightstay": "Alleppey Houseboat",
        "meals": [
          "Breakfast",
          "Lunch",
          "Dinner"
        ]
      },
      {
        "day": 6,
        "title": "Alleppey to Kovalam",
        "city": "Kovalam",
        "points": [
          "Start your day with breakfast before checking out from the houseboat and proceeding towards Jatayu Earth’s Center, one of Kerala’s unique attractions.",
          "Upon arrival, explore the magnificent Jatayu sculpture, one of the largest bird sculptures in the world, and enjoy the surrounding natural landscapes. The attraction is also associated with the legendary story of Jatayu from the Ramayana.",
          "After completing your visit, continue towards Varkala, a beautiful coastal destination famous for its dramatic cliffs overlooking the Arabian Sea. Visit Varkala Beach and Varkala Cliff, where you can enjoy the sea views, explore the local shops, and spend some relaxing time by the coast.",
          "If time permits, enjoy the sunset at Varkala Beach. After sunset, proceed towards Kovalam and check in to your hotel."
        ],
        "timing": "Full Day",
        "nightstay": "Kovalam",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 7,
        "title": "Kovalam Sightseeing",
        "city": "Kovalam",
        "points": [
          "Start your day with a delicious breakfast at the hotel before heading out for Kovalam sightseeing. Visit Lighthouse Beach, Hawa Beach, and Samudra Beach, and enjoy the beautiful coastal views and leisure time by the Arabian Sea.",
          "After completing the sightseeing, return to the hotel and freshen up. Get ready for the evening temple visit and change into traditional attire — Mundu/Dhoti for Boys and Saree/Salwar Suit for Girls, as per the temple dress requirements.",
          "Later, proceed towards Thiruvananthapuram for an evening visit to the revered Sree Padmanabhaswamy Temple. Attend the darshan during the available evening temple timings, subject to entry regulations and crowd conditions.",
          "After darshan, return to Kovalam and relax at the hotel."
        ],
        "timing": "Full Day",
        "nightstay": "Kovalam",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 8,
        "title": "Trivandram Departure",
        "city": "Kovalam",
        "points": [
          "After breakfast, check out from the hotel and get ready for your onward journey. As per your departure schedule, our vehicle will pick you up from the hotel in Kovalam and proceed directly towards Trivandrum Airport / Railway Station.",
          "Enjoy a comfortable drive through the scenic coastal surroundings of Kerala while travelling towards your departure point. The vehicle will drop you at the designated airport or railway station with sufficient time for your onward journey.",
          "This is a departure transfer only and no sightseeing is included in Trivandrum on this day."
        ],
        "timing": "1 Hr",
        "nightstay": "",
        "meals": [
          "Breakfast"
        ]
      }
    ]
  },
  {
    "slug": "amarnath-vaishnavdevi-shivkhori",
    "name": "Amarnath, VaishnavDevi & Shivkhori",
    "heading": "10-Day Amarnath & Vaishno Devi Pilgrimage",
    "code": "AMARNATH-VAI",
    "category": "yatra",
    "days": 8,
    "nights": 9,
    "price": 20000,
    "originalPrice": 25000,
    "intro": [
      "Embark on a 8-day spiritual journey to the revered Amarnath and Vaishno Devi shrines. This package includes travel from Jammu, visits to key locations like Srinagar, Sonmarg, and Katra, and participation in the Yatra. Enjoy comfortable accommodations and seamless logistics for a fulfilling pilgrimage experience. This package includes internal transportation and sightseeing."
    ],
    "highlights": [
      "Experience the sacred Amarnath & Vaishno Devi Yatra. Explore ancient temples and immerse yourself in spiritual traditions. Journey through scenic landscapes of Jammu & Kashmir. A transformative pilgrimage for devotees."
    ],
    "travellers": "Spiritual Seekers",
    "image": "/images/tours/amarnath-vaishnavdevi-shivkhori.webp",
    "pricing": [
      {
        "label": "Triple Sharing",
        "price": 20000
      },
      {
        "label": "Double Sharing",
        "price": 23000
      }
    ],
    "inclusions": [
      "Packing Includes Accommodation: 6 Nights Hotel Stay",
      "Packing Includes Accommodation: 1 Night Boathouse Stay",
      "Packing Includes Meals: 5 Breakfast",
      "Packing Includes Meals: 7 Dinner",
      "Packing Includes Transportation: Car/Tempo Traveller",
      "Packing Includes Transportation: 3rd AC Train Tickets"
    ],
    "exclusions": [
      "Temple VIP Darshan / Pooja Charges",
      "Pony, Palki, Doli & Helicopter Charges",
      "Tatkal or Premium Train ticket fare",
      "Union Taxi (Sonmarg – Baltal)",
      "Medical / Emergency Expenses",
      "Breakfast Amarnath & Vaishnav Devi",
      "Trek Day",
      "Any cost due to landslide, weather, or road blockage",
      "VIP Darshan / Special Puja charges",
      "Travel Insurance, Medical expenses & emergency evacuation",
      "Anything not mentioned in Includes"
    ],
    "support": [
      "Dedicated support team available throughout the journey",
      "Assistance with permits and logistics",
      "Medical assistance on request",
      "Emergency contact available"
    ],
    "accommodation": "Comfortable 3-star hotels and guesthouses throughout the journey.",
    "meals": "Breakfast included daily. Lunch and Dinner at designated locations during the Yatra.",
    "notes": "Package includes INR packing cost. Accommodation is triple/double sharing as specified. The Amarnath Yatra permit is subject to availability and government regulations. The itinerary is subject to change based on weather conditions and logistical constraints. This package is designed for pilgrims seeking a spiritually enriching experience.",
    "paymentKey": "payment-2",
    "cancellationKey": "cancel-2",
    "faqKey": "faq-2",
    "itinerary": [
      {
        "day": 1,
        "title": "Jammu to Srinagar",
        "city": "Udhampur, Srinagar",
        "points": [
          "arrival in Jammu, setting the stage for a journey towards Srinagar. The transfer will take you through scenic landscapes, offering glimpses of the region’s natural beauty as you travel towards the capital city. Prepare for a comfortable transition as you move closer to your destination.",
          "Arrival in Jammu",
          "Transfer to Srinagar",
          "Scenic route through landscapes",
          "Journey towards Srinagar capital"
        ],
        "timing": "Morning",
        "nightstay": "Hotel in Srinagar",
        "meals": [
          "Dinner"
        ]
      },
      {
        "day": 2,
        "title": "Srinagar to Sonmarg",
        "city": "Sonmarg",
        "points": [
          "Drive to Sonmarg, known as the 'Meadow of Flowers'.",
          "Explore the Thajiwas Glacier.",
          "Drive to Sonmarg, a flower meadow.",
          "Explore the majestic Thajiwas Glacier.",
          "Witness stunning views of the surrounding landscape.",
          "Observe the local flora and fauna."
        ],
        "timing": "Full Day",
        "nightstay": "Hotel in Sonmarg",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 3,
        "title": "Amarnath Yatra Day",
        "city": "Amarnath, Pahalgam",
        "points": [
          "Today’s journey begins with a travel to the Amarnath Cave, a significant pilgrimage site. The day will be dedicated to experiencing the sacred Darshan at the Amarnath Shrine, a revered location for devotees. This is a day of spiritual reflection and witnessing a deeply held tradition.",
          "Travel to Amarnath Cave",
          "Darshan at the Amarnath Shrine"
        ],
        "timing": "Full Day",
        "nightstay": "Hotel in Pahalgam",
        "meals": [
          "Dinner"
        ]
      },
      {
        "day": 4,
        "title": "Sonmarg to Srinagar",
        "city": "Sonmarg, Srinagar",
        "points": [
          "Today marks a return journey to Srinagar, leaving behind the stunning landscapes of Sonmarg. The drive will take you through picturesque valleys and along the Jhelum River, offering a final glimpse of the region’s natural beauty before arriving in the capital city. It’s a day of reflection on the memories created in the mountains.",
          "Return journey to Srinagar.",
          "Drive along the Jhelum River.",
          "Pass through picturesque valleys.",
          "Final views of Sonmarg’s landscapes."
        ],
        "timing": "Morning",
        "nightstay": "Hotel in Srinagar",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 5,
        "title": "Srinagar to Katra",
        "city": "Katra",
        "points": [
          "The journey begins with a transfer from Srinagar to Katra, marking the start of a pilgrimage to the revered Mata Vaishno Devi temple. This transition signifies the commencement of a spiritual journey through the picturesque landscapes of Jammu and Kashmir. The travel will take you through the varied terrains of the region.",
          "Transfer from Srinagar to Katra",
          "Travel through Jammu and Kashmir",
          "Pilgrimage to Mata Vaishno Devi",
          "Journey through varied terrains"
        ],
        "timing": "Full Day",
        "nightstay": "Hotel in Katra",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 6,
        "title": "Vaishno Devi Yatra",
        "city": "Vaishno Devi, Katra",
        "points": [
          "The journey to the Vaishno Devi Temple begins with a pilgrimage to this revered site, a place of deep spiritual significance for countless devotees. The day is dedicated to seeking blessings and experiencing the sacred atmosphere surrounding the shrine. A profound sense of peace and devotion permeates the air as visitors embark on this holy quest.",
          "Visit the Vaishno Devi Temple.",
          "Darshan at the Shrine."
        ],
        "timing": "Full Day",
        "nightstay": "Hotel in Katra",
        "meals": [
          "Dinner"
        ]
      },
      {
        "day": 7,
        "title": "Shivkhori",
        "city": "Shivkhori, Katra",
        "points": [
          "Today’s journey leads you to Shivkhori, a place steeped in history and revered as a sacred site. You’ll have the opportunity to explore the ancient temple, a testament to centuries of devotion and a place of quiet reflection. Immerse yourself in the atmosphere of this unique location and connect with its enduring legacy.",
          "Visit a sacred, ancient temple site.",
          "Explore the temple’s historical significance.",
          "Experience the spiritual atmosphere.",
          "Discover a place of reverence."
        ],
        "timing": "Half Day",
        "nightstay": "Hotel in Katra",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 8,
        "title": "Katra to Jammu",
        "city": "Katra, Mumbai",
        "points": [
          "The journey begins with a train departure from Katra, setting off on a long-distance travel to Mumbai. This marks the start of a significant travel experience, traversing through various landscapes and connecting with new destinations. The train ride offers a unique perspective on the changing scenery as you move towards your final destination.",
          "Train departure from Katra",
          "Travel to Mumbai",
          "Long-distance journey",
          "Scenic route observation"
        ],
        "timing": "Overnight",
        "nightstay": "Train",
        "meals": [
          "Breakfast"
        ]
      }
    ]
  },
  {
    "slug": "andaman-islands-5-day-tour",
    "name": "Andaman Islands 5 Day Tour",
    "heading": "Andaman Adventure - 6 Days",
    "code": "ANDAMAN-ISLA-2",
    "category": "islands",
    "days": 6,
    "nights": 5,
    "price": 20000,
    "originalPrice": 30000,
    "intro": [
      "Discover the beauty of the Andaman Islands on this 6-day tour. Explore Port Blair's rich history, relax on stunning beaches like Radhanagar and Kalapathar, and cruise to Havelock and Neil Islands. Experience the unique Baratang Mangrove Forest and witness the iconic Cellular Jail. This package offers a perfect blend of adventure and relaxation."
    ],
    "highlights": [
      "Explore Port Blair's historical landmarks",
      "Relax on pristine beaches",
      "Cruise to Havelock and Neil Islands",
      "Experience the unique Baratang Mangrove Forest",
      "Witness the Cellular Jail"
    ],
    "travellers": "Couples / Families",
    "image": "/images/tours/andaman-islands-6-day-tour.webp",
    "pricing": [
      {
        "label": "Couple Sharing",
        "price": 20000
      }
    ],
    "inclusions": [
      "Airport Pickup and Drop",
      "Accommodation",
      "Daily Breakfast and Dinner",
      "All Sightseeing as per Itinerary",
      "Ferry/Cruise Tickets as per Itinerary",
      "AC Vehicle for Transfers and Sightseeing",
      "Children below 5 Years Complimentary (Without Extra Bed)"
    ],
    "exclusions": [
      "Flight Tickets",
      "Personal Expenses",
      "Extra Mattress/Extra Bed Charges",
      "Anything not mentioned under \"Package Inclusions\"",
      "Adventure activities & optional experiences (boating, safari, elephant ride, cultural shows, cable car, etc.)",
      "Lunch & any meals not mentioned in inclusions",
      "Personal expenses (shopping, tips, laundry, phone calls, etc.)",
      "Entry fees to monuments, parks, museums & sightseeing spots",
      "Anything not specifically mentioned in “Package Includes”"
    ],
    "support": [
      "Dedicated support team available 24/7",
      "Emergency assistance provided",
      "Local guides for seamless exploration",
      "Flexible itinerary options"
    ],
    "accommodation": "Port Blair – 4 Nights, Havelock Island – 1 Night",
    "meals": "Breakfast & Dinner Included",
    "notes": "This package includes all transfers and sightseeing as per the itinerary. Optional activities like Elephant Beach excursion are available at an additional cost. Weather conditions may affect certain excursions.",
    "paymentKey": "payment-2",
    "cancellationKey": "cancel-2",
    "faqKey": "faq-2",
    "itinerary": [
      {
        "day": 1,
        "title": "Day 1 – Arrival at Port Blair",
        "city": "Port Blair",
        "points": [
          "Airport Pickup and Hotel Check-in",
          "Visit Corbyn's Cove Beach",
          "Visit Cellular Jail",
          "Attend the Light & Sound Show"
        ],
        "timing": "Variable",
        "nightstay": "Port Blair",
        "meals": [
          "Dinner"
        ]
      },
      {
        "day": 2,
        "title": "Day 2 – Ross Island & North Bay Island",
        "city": "Port Blair",
        "points": [
          "Breakfast",
          "Full-day excursion to Ross Island and North Bay Island",
          "Return to Port Blair"
        ],
        "timing": "Full Day",
        "nightstay": "Port Blair",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 3,
        "title": "Day 3 – Port Blair to Havelock Island",
        "city": "Havelock Island",
        "points": [
          "Cruise Transfer to Havelock Island",
          "Visit Radhanagar Beach",
          "Visit Kalapathar Beach"
        ],
        "timing": "Morning",
        "nightstay": "Havelock Island",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 4,
        "title": "Day 4 – Neil Island",
        "city": "Neil Island",
        "points": [
          "Cruise to Neil Island",
          "Visit Bharatpur Beach (Optional)",
          "Visit Laxshmanpur Beach",
          "Visit Natural Bridge"
        ],
        "timing": "Full Day",
        "nightstay": "Neil Island",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 5,
        "title": "Day 5 – Baratang Island",
        "city": "Baratang",
        "points": [
          "Early Morning Departure by AC Vehicle",
          "Enjoy the scenic drive through the Mangrove Forest",
          "Visit Limestone Cave",
          "Visit Mud Volcano"
        ],
        "timing": "Full Day",
        "nightstay": "Port Blair",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 6,
        "title": "Day 6 – Departure",
        "city": "Port Blair",
        "points": [
          "Breakfast",
          "Hotel Check-out",
          "Airport Drop"
        ],
        "timing": "Morning",
        "nightstay": "",
        "meals": [
          "Breakfast"
        ]
      }
    ]
  },
  {
    "slug": "chardham-yatra-ex-haridwar",
    "name": "Chardham Yatra EX Haridwar",
    "heading": "11 Day Chardham Yatra",
    "code": "CHARDHAM-YAT",
    "category": "yatra",
    "days": 11,
    "nights": 12,
    "price": 20000,
    "originalPrice": 30000,
    "intro": [
      "Embark on a divine 13 Days / 12 Nights Char Dham Yatra, covering the four sacred shrines of Yamunotri, Gangotri, Kedarnath, and Badrinath. Experience a perfect blend of spirituality, breathtaking Himalayan landscapes, ancient temples, scenic treks, and unforgettable moments. The journey also includes visits to Mana Village, Tungnath, Triyuginarayan, Guptkashi, Dhari Devi, Devprayag, and an exciting adventure experience at Shivpuri, making it a truly memorable pilgrimage through the heart of Dev Bhoomi Uttarakhand."
    ],
    "highlights": [
      "Spiritual Journey",
      "Holiest Pilgrimage Destinations",
      "Scenic Himalayan Landscapes",
      "Divine Temple Darshans",
      "Cultural Immersion"
    ],
    "travellers": "",
    "image": "/images/tours/kedarnath-yatra-ex-haridwar.webp",
    "pricing": [
      {
        "label": "Quad Sharing",
        "price": 20000
      },
      {
        "label": "Triple Sharing",
        "price": 22000
      },
      {
        "label": "Double Sharing",
        "price": 24000
      }
    ],
    "inclusions": [
      "Airport & Railway Station Pickup & Drop",
      "Comfortable Hotel / Resort / Tent Accommodation",
      "Daily Breakfast & Dinner",
      "All Sightseeing as per the Itinerary",
      "Transportation by Non-AC Vehicle in the Hills (AC operates only in the plains, subject to weather and government regulations)",
      "All Toll Taxes, Parking Charges & Driver Allowances",
      "Experienced Tour Captain / Trip Coordinator",
      "24×7 On-Tour Assistance",
      "Children below 5 years travel Complimentary (without extra bed and vehicle seat)"
    ],
    "exclusions": [
      "5% GST will be charged extra on the total package cost.",
      "Flight Tickets & Train Tickets (unless specifically mentioned)",
      "Lunch & any meals not mentioned under the package inclusions",
      "Personal expenses (shopping, tips, laundry, phone calls, beverages, etc.)",
      "Entry fees to monuments, parks, museums & sightseeing attractions",
      "Adventure activities & optional experiences (River Rafting, Bungee Jumping, Zipline, Boating, Safari, Cable Car, Cultural Shows, etc.)",
      "Pony, Palki, Pithoo & Helicopter charges",
      "Local shuttle/jeep charges (Sonprayag – Gaurikund or wherever applicable)",
      "VIP Darshan / Special Entry Passes at temples or monuments",
      "Medical expenses, doctor consultation & emergency evacuation charges",
      "Travel Insurance of any kind",
      "Expenses arising due to natural calamities, landslides, roadblocks, weather conditions, strikes, vehicle breakdowns, or any unforeseen circumstances",
      "Any increase in government taxes, tolls, parking charges, fuel prices, or permit fees after booking",
      "Anything not specifically mentioned under \"Package Includes\"."
    ],
    "support": [
      "Comfortable Transportation & Sightseeing",
      "Experienced Tour Captain",
      "24×7 On-Tour Assistance",
      "Dedicated Ground Support",
      "Safe & Well-Planned Itinerary",
      "No Hidden Charges"
    ],
    "accommodation": "10 Nights Accommodations8 Nights Hotel2 Nights Tent stay",
    "meals": "9 Breakfast & 10 Dinner",
    "notes": "Additional Expenses Payable by Guests: During the tour, guests are required to bear certain expenses directly wherever applicable. These include Mansa Devi & Chandi Devi Ropeway tickets, Sonprayag to Gaurikund local shuttle/jeep charges, Pony, Palki, Pithoo, and Helicopter services for Yamunotri and Kedarnath, luggage handling/storage charges at the Rampur/Sitapur hotel during the Kedarnath trek, all adventure activities at Shivpuri (such as River Rafting, Bungee Jumping, Giant Swing, Zipline, Flying Fox, etc.), VIP Darshan passes, camera/video camera fees (if applicable), room heater charges, laundry, porter charges, personal shopping, meals and beverages not included in the package, medical expenses, and any other personal expenses or services not specifically mentioned under the package inclusions. All such charges must be paid directly by the guest at the respective location.",
    "paymentKey": "payment-3",
    "cancellationKey": "cancel-2",
    "faqKey": "faq-11",
    "itinerary": [
      {
        "day": 1,
        "title": "Haridwar to Janki Chatti",
        "city": "Mussoorie",
        "points": [
          "Arrival and proceed towards Janki Chatti via the beautiful hill town of Barkot. En route, stop at the picturesque Mussoorie Waterfall, where you can enjoy the refreshing natural surroundings and capture memorable photographs. Continue your scenic drive through lush green valleys, winding mountain roads, charming hill towns, and breathtaking Himalayan landscapes.",
          "Upon arrival at Janki Chatti, complete the hotel check-in formalities and spend the rest of the day at leisure. Relax and acclimatize to the high-altitude surroundings while preparing for the next day's trek to Yamunotri.",
          "Enjoy a delicious dinner and an overnight stay at Janki Chatti."
        ],
        "timing": "Full Day",
        "nightstay": "Jankichatti",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 2,
        "title": "Yamunotri Dham",
        "city": "Yamnotari",
        "points": [
          "Begin your day early and proceed to the starting point of the Yamunotri Trek. Trek approximately 6 km (one way) from Janki Chatti to Yamunotri Temple, which usually takes around 3–4 hours, depending on your pace. Pony, palki, and pithoo services are available at an additional cost for those who wish to avoid trekking.",
          "En route, admire the stunning Himalayan scenery and visit the holy Surya Kund, where devotees prepare rice and potatoes as sacred prasad. Offer prayers at the revered Yamunotri Temple, seek the blessings of Goddess Yamuna, and, if weather permits, take a holy dip in the sacred waters.",
          "After completing the darshan, begin the 6 km return trek to Janki Chatti, which generally takes 2.5–3.5 hours.",
          "Return to the hotel in the evening after completing a total trekking distance of approximately 12 km. Enjoy a delicious dinner and relax with an overnight stay at Janki Chatti."
        ],
        "timing": "Full Day",
        "nightstay": "Jankichatti",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 3,
        "title": "Janki Chatti to Uttarkashi",
        "city": "Uttarkashi",
        "points": [
          "After breakfast, check out from the hotel and proceed towards Uttarkashi, a sacred town beautifully situated on the banks of the Bhagirathi River. Enjoy the scenic drive through the majestic Himalayan valleys and picturesque mountain landscapes.",
          "En route, visit the serene Shiv Gufa (Shiva Cave), a peaceful spiritual site nestled amidst nature. Continue your journey to Uttarkashi and, upon arrival, complete the hotel check-in formalities and freshen up.",
          "In the evening, visit the revered Kashi Vishwanath Temple, one of the oldest and most significant temples dedicated to Lord Shiva in Uttarakhand. Later, attend the divine Bhagirathi River Aarti, where the soothing chants and illuminated lamps create a truly spiritual atmosphere.",
          "Return to the hotel after the evening prayers. Enjoy a delicious dinner and relax with an overnight stay in Uttarkashi."
        ],
        "timing": "Full Day",
        "nightstay": "Uttarkashi",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 4,
        "title": "Gangotri Dham",
        "city": "Gangotari Dham",
        "points": [
          "Wake up early and enjoy breakfast before proceeding towards Gangotri, one of the four sacred shrines of the Char Dham Yatra and the holy origin of the River Ganga. Enjoy the breathtaking drive through the Himalayan mountains, dense pine forests, and the beautiful Bhagirathi River valley.",
          "En route, visit the picturesque Harsil Valley, a serene Himalayan village known for its apple orchards, snow-capped peaks, and tranquil surroundings. Continue your journey to Gangotri Temple, where devotees offer prayers to Goddess Ganga and seek divine blessings. You may also visit the sacred Bhagirath Shila, Surya Kund, and the holy banks of the Bhagirathi River.",
          "After completing the darshan and spending some peaceful time at the temple, begin your return journey to Uttarkashi.",
          "Upon arrival, relax at the hotel after a spiritually fulfilling day. Enjoy a delicious dinner and an overnight stay in Uttarkashi."
        ],
        "timing": "Full Day",
        "nightstay": "Uttarkashi",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 5,
        "title": "Uttarkashi to Rampur / Sitapur",
        "city": "Buddha Kedarnath",
        "points": [
          "After an early breakfast, check out from the hotel and begin your journey towards Rampur/Sitapur, the gateway to the sacred Kedarnath Dham. Enjoy a scenic drive through the majestic Garhwal Himalayas, passing picturesque valleys, rivers, and charming mountain villages.",
          "En route, visit the revered Budha Kedar Temple, an ancient shrine dedicated to Lord Shiva and considered one of the most sacred temples in Uttarakhand. Spend some peaceful time seeking blessings and experiencing the spiritual serenity of this holy place before continuing your journey.",
          "Upon arrival at Rampur/Sitapur, complete the hotel check-in formalities and relax after the day's drive. Spend the evening at leisure while preparing for the next day's Kedarnath pilgrimage.",
          "Enjoy a delicious dinner and an overnight stay at Rampur/Sitapur."
        ],
        "timing": "Full Day",
        "nightstay": "Rampur/Sitapur",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 6,
        "title": "Rampur / Sitapur to Kedarnath",
        "city": "Kedarnath",
        "points": [
          "Wake up early, check out from the hotel, and proceed towards Sonprayag. From here, take the local shuttle to Gaurikund (at your own cost), the starting point of the Kedarnath trek.",
          "Please Note: As only essential luggage can be carried during the trek, your main luggage/baggage will be left at the hotel in Rampur/Sitapur. Guests are required to pay the luggage handling/storage charges directly to the hotel manager (if applicable). It is recommended to carry only a small backpack with essentials required for the overnight stay in Kedarnath.",
          "Begin the sacred 18 km trek (one way) from Gaurikund to Kedarnath, which generally takes 7–10 hours, depending on your pace. Pony, palki, pithoo, and helicopter services are available at an additional cost for pilgrims who prefer an alternative to trekking.",
          "Upon arrival in Kedarnath, check in to your tent stay near Kedarnath Temple and freshen up. In the evening, enjoy the mesmerizing Kedarnath Temple Aarti from the vicinity of your accommodation, surrounded by the serene Himalayan landscape and the divine atmosphere of the shrine."
        ],
        "timing": "Full Day",
        "nightstay": "Kedarnath Tent Stay",
        "meals": [
          "Dinner"
        ]
      },
      {
        "day": 7,
        "title": "Kedarnath to Rampur / Sitapur",
        "city": "Kedarnath",
        "points": [
          "Wake up early and visit the sacred Shri Kedarnath Temple for the auspicious Morning Darshan. After seeking the blessings of Lord Shiva, explore the nearby attractions around the temple, including the Adi Shankaracharya Samadhi, Bhairavnath Temple (subject to weather and time availability), and enjoy the breathtaking views of the surrounding Himalayan peaks.",
          "Later, return to your accommodation for breakfast, complete the check-out formalities, and begin the 18 km descent trek from Kedarnath to Gaurikund, which generally takes 5–7 hours. Pony, palki, and pithoo services are available at an additional cost.",
          "Upon reaching Gaurikund, take the local shuttle to Sonprayag (at your own cost), where your vehicle will be waiting. Continue your journey to Rampur/Sitapur.",
          "Upon arrival, check in to the hotel. Enjoy a delicious dinner and relax with an overnight stay at Rampur/Sitapur."
        ],
        "timing": "Full Day",
        "nightstay": "Rampur/Sitapur",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 8,
        "title": "Rampur / Sitapur to Chopta",
        "city": "Chopta",
        "points": [
          "After breakfast, check out from the hotel and begin your journey towards the scenic hill station of Chopta, popularly known as the \"Mini Switzerland of India.\"",
          "En route, visit the sacred Triyuginarayan Temple, the legendary wedding venue of Lord Shiva and Goddess Parvati, where the eternal flame (Akhand Dhuni) is believed to have been burning since their divine marriage. Continue to Guptkashi and visit the revered Shri Vishwanath Temple and the Ardhnarishwar Temple, both of which hold immense religious significance for devotees of Lord Shiva.",
          "After seeking blessings, continue your picturesque drive through the beautiful Himalayan valleys and dense forests to Chopta.",
          "Upon arrival, complete the hotel check-in formalities and relax amidst the serene natural surroundings. Enjoy a delicious dinner and an overnight stay in Chopta."
        ],
        "timing": "Full Day",
        "nightstay": "Chopta Tent Stay",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 9,
        "title": "Chopta to Badrinath",
        "city": "Tungnath",
        "points": [
          "Wake up early and enjoy breakfast before beginning the trek to the sacred Tungnath Temple, the highest Shiva temple in the world, situated at an altitude of approximately 3,680 meters (12,073 ft).",
          "The trek from Chopta to Tungnath is approximately 3.5 km (one way) and usually takes around 2–3 hours, depending on your pace. The well-paved trail offers spectacular views of the Himalayan peaks, lush meadows, and pristine forests. After offering prayers and spending some peaceful time at the temple, trek back 3.5 km to Chopta, taking approximately 1.5–2.5 hours.",
          "After returning, continue your scenic drive towards Badrinath, the final and most revered destination of the Char Dham Yatra. En route, enjoy the breathtaking landscapes of the Garhwal Himalayas.",
          "Upon arrival in Badrinath, complete the hotel check-in formalities and freshen up. In the evening, visit the sacred Badrinath Temple for Evening Darshan and witness the serene spiritual atmosphere of this holy shrine dedicated to Lord Vishnu.",
          "Return to the hotel after darshan. Enjoy a delicious dinner and relax with an overnight stay in Badrinath."
        ],
        "timing": "Full Day",
        "nightstay": "Badrinath",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 10,
        "title": "Badrinath – Mana Village – Badrinath",
        "city": "Badrinath",
        "points": [
          "Wake up early and visit the sacred Badrinath Temple for the auspicious Morning Darshan. After seeking the blessings of Lord Badri Vishal, return to the hotel for breakfast.",
          "Later, proceed to explore Mana Village, the Last Indian Village located near the Indo-Tibetan border. Visit the famous Vyas Gufa, where Sage Veda Vyasa is believed to have composed the Mahabharata, followed by Ganesh Gufa, where Lord Ganesha is said to have written the epic. Continue to the iconic Bheem Pul, a massive natural rock bridge believed to have been placed by Bhima over the roaring Saraswati River. You can also witness the confluence of mythology and nature at the origin of the Saraswati River.",
          "After sightseeing, return to Badrinath and spend some leisure time exploring the temple surroundings or local market.",
          "Return to the hotel in the evening. Enjoy a delicious dinner and relax with an overnight stay in Badrinath."
        ],
        "timing": "Full Day",
        "nightstay": "Badrinath",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 11,
        "title": "Badrinath to Haridwar/Rishikesh Drop",
        "city": "Rishikesh",
        "points": [
          "After breakfast, check out from the hotel and begin your journey towards Shivpuri. Enjoy a scenic drive through the breathtaking Garhwal Himalayas, passing along winding mountain roads and the sacred Alaknanda River.",
          "En route, visit the revered Dhari Devi Temple, dedicated to Goddess Kali and regarded as one of the guardian deities of Uttarakhand. Continue to the holy Devprayag Sangam, where the Alaknanda and Bhagirathi rivers merge to form the sacred River Ganga. Spend some time admiring the spectacular confluence and its spiritual significance before continuing your journey.",
          "Upon reaching Rishikesh, guests opting to end their tour may be dropped at the Rishikesh Highway Point. Those requiring a drop at Haridwar Bus Stand or Haridwar Railway Station"
        ],
        "timing": "full Day",
        "nightstay": "",
        "meals": [
          "Breakfast"
        ]
      }
    ]
  },
  {
    "slug": "nepal-ex-mumbai",
    "name": "Nepal Ex Mumbai",
    "heading": "9-Day Nepal Tour",
    "code": "NEPAL-WITH-A-4",
    "category": "himalaya",
    "days": 9,
    "nights": 8,
    "price": 20000,
    "originalPrice": 30000,
    "intro": [
      "Embark on an unforgettable 9-day Nepal journey from Mumbai by train, exploring the country's most breathtaking destinations. Travel through the serene lakeside city of Pokhara, seek blessings at the sacred Muktinath Temple, and experience the rich culture and spirituality of Kathmandu. Witness spectacular Himalayan landscapes, visit ancient temples and UNESCO World Heritage Sites, enjoy peaceful lakes, vibrant local markets, and scenic mountain drives. Designed for pilgrims, nature lovers, and adventure seekers alike, this tour offers the perfect blend of spirituality, natural beauty, and comfortable travel—all starting from Mumbai by train."
    ],
    "highlights": [
      "Seek blessings at the sacred Muktinath Temple",
      "Visit the famous Pashupatinath Temple in Kathmandu",
      "Witness breathtaking Himalayan mountain views",
      "Enjoy boating on the beautiful Phewa Lake",
      "Optional sunrise experience at Sarangkot",
      "Explore Davis Falls & Gupteshwor Mahadev Cave"
    ],
    "travellers": "Couples / Families / Adventure Seekers",
    "image": "/images/tours/nepal-with-ayodhya-pickup-ayodhya-drop-gorakhpur.webp",
    "pricing": [
      {
        "label": "Quad Sharing",
        "price": 20000
      },
      {
        "label": "Triple Sharing",
        "price": 21000
      },
      {
        "label": "Double Sharing",
        "price": 23000
      }
    ],
    "inclusions": [
      "Mumbai – Gorakhpur – Mumbai Train Tickets (as per package)",
      "Private AC Vehicle for the entire Nepal tour",
      "Hotel accommodation on Twin/Triple Sharing basis",
      "Daily Breakfast & Dinner",
      "Experienced Tour Leader throughout the trip",
      "All sightseeing as per the itinerary",
      "India–Nepal Border assistance",
      "Driver allowance, toll taxes, parking charges & fuel",
      "Basic First Aid Kit",
      "24×7 Customer Support"
    ],
    "exclusions": [
      "5% GST (Goods & Services Tax)",
      "Lunch and personal snacks",
      "Entry fees, camera charges & monument tickets",
      "Boating charges at Phewa Lake",
      "Pony, Jeep or Helicopter charges for Muktinath (if required)",
      "Travel Insurance",
      "Personal expenses such as shopping, laundry, telephone bills, porter charges, tips, beverages, etc.",
      "Expenses arising due to roadblocks, landslides, weather conditions, natural calamities, strikes, or government restrictions",
      "Any additional cost due to itinerary changes beyond the control of the tour operator",
      "Anything not specifically mentioned under \"Package Includes\""
    ],
    "support": [
      "Private Vehicle for the entire tour",
      "Hotel Accommodation on Twin/Triple Sharing",
      "Daily Breakfast & Dinner",
      "Experienced Tour Leader",
      "All Sightseeing as per Itinerary",
      "India–Nepal Border Assistance",
      "Basic First Aid Kit",
      "24×7 Customer Support",
      "Driver Allowance, Toll Tax & Parking Charges"
    ],
    "accommodation": "Accommodation will be provided in comfortable hotels. Accommodation standards may vary depending on the location and altitude.Pokhara: 2 Night (Hotel)Muktinath: 1 Night (Hotel)Kathmandu: 2 Nights (Hotel)",
    "meals": "The package includes meals as mentioned in the itinerary.5 Breakfasts4 DinnersLunch is NOT included and will be at the guest's own expense throughout the tour.Please Note:Meals during the train journey are NOT included.Dinner is not included on Day 7 (Kathmandu Nightlife)Meals will be served at the respective hotels and tea houses as per the itinerary.During the trekking days, simple, freshly prepared meals will be provided, subject to availability at higher altitudes.",
    "notes": "This is a high-altitude trekking expedition that requires a good level of physical fitness and endurance. Participants are advised to engage in regular walking, cardio, and leg-strengthening exercises at least 4–6 weeks before the trek. The itinerary may be modified due to weather conditions, road closures, landslides, government regulations, or the health and safety of the group. Accommodation during the trek will be in basic tea houses with limited facilities, and electricity, Wi-Fi, hot showers, and mobile network connectivity may be available only at an additional cost or may not be available at higher altitudes. All participants must carry valid original government-issued photo identification and ensure they meet the entry requirements for Nepal. The trek leader's decision will be final in matters concerning safety, route changes, and overall tour management. Guests are advised to carry sufficient cash in Indian Rupees and Nepalese Rupees, as digital payment facilities and ATMs may not be available throughout the trekking route.",
    "paymentKey": "payment-2",
    "cancellationKey": "cancel-2",
    "faqKey": "faq-9",
    "itinerary": [
      {
        "day": 1,
        "title": "Mumbai to Gorakhpur",
        "city": "India",
        "points": [
          "Gather at Lokmanya Tilak Terminus (LTT) at 12:00 AM on Day. Meet your trek leader, complete the attendance and briefing, and prepare to board the Kushinagar Express for an unforgettable journey to Nepal and the Annapurna Himalayas.",
          "Board the Kushinagar Express at 12:35 AM. Enjoy a full-day train journey through the beautiful landscapes of India while getting to know your fellow trekkers. Overnight journey on the train."
        ],
        "timing": "Full Day & Night",
        "nightstay": "Train",
        "meals": []
      },
      {
        "day": 2,
        "title": "Ayodhya to Pokhara",
        "city": "Pokhara",
        "points": [
          "Arrive at Gorakhpur Railway Station at approximately 7:10 AM and meet your tour representative. Begin your scenic drive towards the Sonauli India–Nepal Border (approximately 4 hours). Upon arrival, complete the immigration and border formalities before continuing your journey into Nepal.",
          "After crossing the border, proceed towards the beautiful lakeside city of Pokhara, enjoying breathtaking views of rivers, lush green hills, terraced fields, and traditional Nepalese villages along the way.",
          "Upon arrival in Pokhara, complete the hotel check-in formalities and relax after the day's journey. Enjoy a delicious dinner and an overnight stay in Pokhara."
        ],
        "timing": "Full Day",
        "nightstay": "Pokhara",
        "meals": [
          "Dinner"
        ]
      },
      {
        "day": 3,
        "title": "Pokhara Local Sightseeing",
        "city": "Pokhara",
        "points": [
          "Wake up to the breathtaking beauty of the Annapurna Himalayan range and enjoy a delicious breakfast at the hotel. Today is dedicated to exploring the natural and cultural attractions of Pokhara.",
          "Begin the day with an optional early morning visit to Sarangkot to witness a spectacular sunrise over the snow-capped Himalayas. Later, visit the sacred Bindhyabasini Temple, followed by the stunning Davis Falls and the mystical Gupteshwor Mahadev Cave.",
          "Enjoy a peaceful boat ride on Phewa Lake and visit the famous Tal Barahi Temple, located on an island in the middle of the lake. Spend the evening exploring the lively Lakeside Market, where you can shop for local handicrafts, souvenirs, and Nepali cuisine.",
          "Return to the hotel for dinner and an overnight stay in Pokhara."
        ],
        "timing": "Full Day",
        "nightstay": "Pokhara",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 4,
        "title": "Pokhara to Muktinath",
        "city": "Mukhtinath",
        "points": [
          "Start your day early with breakfast before embarking on one of the most scenic journeys in Nepal. Drive through the breathtaking landscapes of the Kali Gandaki Valley, passing picturesque mountain villages, waterfalls, and rugged Himalayan terrain on your way to the sacred town of Muktinath.",
          "Upon arrival, visit the revered Muktinath Temple, one of the holiest pilgrimage sites for both Hindus and Buddhists. Seek blessings at the temple, experience the spiritual significance of the 108 sacred water spouts (Muktidhara), and visit the eternal flame at Jwala Mai Temple.",
          "After completing the darshan, spend some time enjoying the spectacular views of the Annapurna and Dhaulagiri mountain ranges before checking in to your hotel.",
          "Dinner and overnight stay at Muktinath/Jomsom."
        ],
        "timing": "Full Day",
        "nightstay": "Mukhtinath or Jomsom",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 5,
        "title": "Muktinath to Kathmandu",
        "city": "Kathmandu",
        "points": [
          "Wake up early and visit the sacred Muktinath Temple, one of Nepal's most revered pilgrimage sites for both Hindus and Buddhists. After seeking blessings and exploring the temple परिसर, return to the hotel for breakfast.",
          "Later, check out and begin your scenic journey towards Kathmandu. Travel through the spectacular Kali Gandaki Valley, passing beautiful mountain landscapes, traditional villages, rivers, and lush green hills as you descend from the Himalayas to Nepal's vibrant capital.",
          "Upon arrival in Kathmandu, complete the hotel check-in formalities and spend the evening at leisure exploring the nearby markets or relaxing after the long journey.",
          "Enjoy a delicious dinner and an overnight stay in Kathmandu."
        ],
        "timing": "Full Day",
        "nightstay": "Kathmandu",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 6,
        "title": "Kathmandu Sightseeing",
        "city": "Kathmandu",
        "points": [
          "After breakfast, embark on a full-day sightseeing tour of Nepal's vibrant capital city. Visit the sacred Pashupatinath Temple, one of the holiest Shiva temples in the world, followed by the magnificent Boudhanath Stupa, one of the largest Buddhist stupas in Asia. Continue to the iconic Swayambhunath Stupa (Monkey Temple), offering panoramic views of Kathmandu Valley, and explore the historic Kathmandu Durbar Square, renowned for its ancient palaces, temples, and traditional Newari architecture.",
          "In the evening, experience the lively atmosphere of Thamel, Kathmandu's most popular tourist district. Stroll through its colorful streets filled with cafés, restaurants, live music venues, souvenir shops, and local markets. Guests may enjoy the nightlife, local cuisine, or shop for trekking gear and handicrafts at their own pace.",
          "Dinner is not included today, allowing guests the flexibility to explore Kathmandu's famous cafés and restaurants at their own expense.",
          "Return to the hotel for an overnight stay in Kathmandu."
        ],
        "timing": "Full Day",
        "nightstay": "Kathmandu",
        "meals": [
          "Breakfast"
        ]
      },
      {
        "day": 7,
        "title": "Kathmandu to Gorakhpur",
        "city": "India",
        "points": [
          "After an early breakfast, check out from the hotel and begin your return journey towards the Sonauli India–Nepal Border. Complete the immigration formalities before entering India and continue the drive to Gorakhpur.",
          "Upon arrival in Gorakhpur, check in to the hotel and relax after the long journey. Spend the evening at leisure before preparing for your return train journey the following morning."
        ],
        "timing": "Full Day",
        "nightstay": "",
        "meals": [
          "Breakfast"
        ]
      },
      {
        "day": 8,
        "title": "Gorakhpur to Mumbai",
        "city": "India",
        "points": [
          "Arrive at Gorakhpur Railway Station between 2:00 AM and 4:00 AM. After a short break at the station, board the GKP–LTT Express departing at 5:45 AM for your return journey to Mumbai.",
          "Spend the day relaxing onboard the train while cherishing the unforgettable memories of the Annapurna Base Camp Trek, Muktinath Darshan, and your incredible Nepal adventure.",
          "Overnight journey on the train."
        ],
        "timing": "Full Day",
        "nightstay": "Train",
        "meals": []
      },
      {
        "day": 9,
        "title": "Mumbai Arrival",
        "city": "Mumbai",
        "points": [
          "Arrive at Lokmanya Tilak Terminus (LTT), Mumbai at approximately 5:30 PM.",
          "Your tour concludes with unforgettable memories of the majestic Himalayas, the successful Annapurna Base Camp Trek, the divine blessings of Muktinath, and the cultural experiences of Nepal. We look forward to welcoming you on another adventure with 2XBT – Building Boyz Tours & Travels."
        ],
        "timing": "Full Day",
        "nightstay": "Mumbai",
        "meals": []
      }
    ]
  },
  {
    "slug": "konkan-sahyadri-explorer-7d6n",
    "name": "Konkan & Sahyadri Explorer 7D/6N",
    "heading": "7 Days Konkan Adventure",
    "code": "KONKAN-SAHYA",
    "category": "trek",
    "days": 7,
    "nights": 6,
    "price": 21000,
    "originalPrice": 35000,
    "intro": [
      "Embark on a 7-day journey through the captivating Konkan and Sahyadri regions of India. This package combines historical exploration with breathtaking landscapes, offering a diverse and memorable experience. From the charming hill station of Mahabaleshwar to the ancient forts of Raigad, you'll delve into the rich heritage and natural beauty of this region."
    ],
    "highlights": [
      "Explore stunning beaches, historical forts, and serene hill stations. Discover the natural beauty of Konkan and Sahyadri. Experience local culture and cuisine. Enjoy comfortable accommodation and seamless travel."
    ],
    "travellers": "Couples / Families",
    "image": "/images/tours/konkan-sahyadri-explorer-7d6n.webp",
    "pricing": [
      {
        "label": "Triple Sharing",
        "price": 18000
      },
      {
        "label": "Double Sharing",
        "price": 22000
      }
    ],
    "inclusions": [
      "Accommodation: 6 Nights Hotel Stay",
      "Meals: 6 Breakfast & 6 Dinner",
      "Transportation: AC Tempo Traveller (as per group size)"
    ],
    "exclusions": [
      "Entry tickets, camera fees, boating charges, ropeway tickets, and other activity charges.",
      "Personal expenses such as laundry, shopping, room service, and tips.",
      "Meals not explicitly mentioned in the package inclusions.",
      "Any adventure activities or water sports.",
      "Travel insurance and medical expenses.",
      "Expenses due to natural calamities, road blocks, vehicle breakdowns, or unforeseen circumstances.",
      "GST/TCS (if applicable).",
      "Anything not specifically listed under Package Inclusions."
    ],
    "support": [
      "Dedicated support team available 24/7",
      "Assistance with travel arrangements",
      "Emergency assistance"
    ],
    "accommodation": "Triple Sharing: Double Occupancy Room with one Extra Mattress.",
    "meals": "Breakfast Included",
    "notes": "Packing cost is additional. Hotel check-in 12:00 PM, check-out 10:00 AM. Early check-in/late check-out subject to hotel availability and additional charges.",
    "paymentKey": "payment-2",
    "cancellationKey": "cancel-2",
    "faqKey": "faq-2",
    "itinerary": [
      {
        "day": 1,
        "title": "Mumbai Arrival",
        "city": "Mumbai",
        "points": [
          "Arrival at Mumbai Airport/Station.",
          "Transfer to hotel in Mumbai.",
          "Free time for exploring Mumbai.",
          "Optional: Visit Gateway of India or Marine Drive."
        ],
        "timing": "Variable",
        "nightstay": "Mumbai",
        "meals": [
          "Dinner"
        ]
      },
      {
        "day": 2,
        "title": "Mahabaleshwar",
        "city": "Mahabaleshwar",
        "points": [
          "Travel to Mahabaleshwar.",
          "Visit Pandaripur Beach.",
          "Explore Venugram Hill.",
          "Visit Mahabaleshwar Temple."
        ],
        "timing": "Variable",
        "nightstay": "Mahabaleshwar",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 3,
        "title": "Pratapgad",
        "city": "Mahabaleshwar",
        "points": [
          "Visit Pratapgad Fort.",
          "Explore the historical significance of the fort.",
          "Enjoy panoramic views of the surrounding landscape."
        ],
        "timing": "Variable",
        "nightstay": "Mahabaleshwar",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 4,
        "title": "Ratnagiri",
        "city": "Ratnagiri",
        "points": [
          "Travel to Ratnagiri.",
          "Visit Tulareshwar Temple.",
          "Explore the beaches of Ratnagiri."
        ],
        "timing": "Variable",
        "nightstay": "Ratnagiri",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 5,
        "title": "Harihareshwar",
        "city": "Harihareshwar",
        "points": [
          "Travel to Harihareshwar.",
          "Visit Harihareshwar Temple.",
          "Explore the beaches of Harihareshwar."
        ],
        "timing": "Variable",
        "nightstay": "Harihareshwar",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 6,
        "title": "Raigad",
        "city": "Raigad",
        "points": [
          "Visit Raigad Fort.",
          "Explore the historical significance of the fort.",
          "Enjoy panoramic views of the surrounding landscape."
        ],
        "timing": "Variable",
        "nightstay": "Raigad",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 7,
        "title": "Mumbai Depature",
        "city": "Mumbai",
        "points": [
          "Transfer to Mumbai Airport/Station.",
          "Departure from Mumbai."
        ],
        "timing": "Variable",
        "nightstay": "",
        "meals": [
          "Breakfast"
        ]
      }
    ]
  },
  {
    "slug": "andaman-islands-6-day-tour",
    "name": "Andaman Islands 6 Day Tour",
    "heading": "Andaman Adventure - 6 Days",
    "code": "ANDAMAN-ISLA",
    "category": "islands",
    "days": 6,
    "nights": 5,
    "price": 22000,
    "originalPrice": 30000,
    "intro": [
      "Discover the beauty of the Andaman Islands on this 6-day tour. Explore Port Blair's rich history, relax on stunning beaches like Radhanagar and Kalapathar, and cruise to Havelock and Neil Islands. Experience the unique Baratang Mangrove Forest and witness the iconic Cellular Jail. This package offers a perfect blend of adventure and relaxation."
    ],
    "highlights": [
      "Explore Port Blair's historical landmarks",
      "Relax on pristine beaches",
      "Cruise to Havelock and Neil Islands",
      "Experience the unique Baratang Mangrove Forest",
      "Witness the Cellular Jail"
    ],
    "travellers": "Couples / Families",
    "image": "/images/tours/andaman-islands-6-day-tour.webp",
    "pricing": [
      {
        "label": "Per Person",
        "price": 22000
      }
    ],
    "inclusions": [
      "Airport Pickup and Drop",
      "Accommodation",
      "Daily Breakfast and Dinner",
      "All Sightseeing as per Itinerary",
      "Ferry/Cruise Tickets as per Itinerary",
      "AC Vehicle for Transfers and Sightseeing",
      "Children below 5 Years Complimentary (Without Extra Bed)"
    ],
    "exclusions": [
      "Flight Tickets",
      "Personal Expenses",
      "Extra Mattress/Extra Bed Charges",
      "Anything not mentioned under \"Package Inclusions\"",
      "Adventure activities & optional experiences (boating, safari, elephant ride, cultural shows, cable car, etc.)",
      "Lunch & any meals not mentioned in inclusions",
      "Personal expenses (shopping, tips, laundry, phone calls, etc.)",
      "Entry fees to monuments, parks, museums & sightseeing spots",
      "Anything not specifically mentioned in “Package Includes”"
    ],
    "support": [
      "Dedicated support team available 24/7",
      "Emergency assistance provided",
      "Local guides for seamless exploration",
      "Flexible itinerary options"
    ],
    "accommodation": "Port Blair – 4 Nights, Havelock Island – 1 Night",
    "meals": "Breakfast & Dinner Included",
    "notes": "This package includes all transfers and sightseeing as per the itinerary. Optional activities like Elephant Beach excursion are available at an additional cost. Weather conditions may affect certain excursions.",
    "paymentKey": "payment-2",
    "cancellationKey": "cancel-2",
    "faqKey": "faq-2",
    "itinerary": [
      {
        "day": 1,
        "title": "Day 1 – Arrival at Port Blair",
        "city": "Port Blair",
        "points": [
          "Airport Pickup and Hotel Check-in",
          "Visit Corbyn's Cove Beach",
          "Visit Cellular Jail",
          "Attend the Light & Sound Show"
        ],
        "timing": "Variable",
        "nightstay": "Port Blair",
        "meals": [
          "Dinner"
        ]
      },
      {
        "day": 2,
        "title": "Day 2 – Ross Island & North Bay Island",
        "city": "Port Blair",
        "points": [
          "Breakfast",
          "Full-day excursion to Ross Island and North Bay Island",
          "Return to Port Blair"
        ],
        "timing": "Full Day",
        "nightstay": "Port Blair",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 3,
        "title": "Day 3 – Port Blair to Havelock Island",
        "city": "Havelock Island",
        "points": [
          "Cruise Transfer to Havelock Island",
          "Visit Radhanagar Beach",
          "Visit Kalapathar Beach"
        ],
        "timing": "Morning",
        "nightstay": "Havelock Island",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 4,
        "title": "Day 4 – Neil Island",
        "city": "Neil Island",
        "points": [
          "Cruise to Neil Island",
          "Visit Bharatpur Beach (Optional)",
          "Visit Laxshmanpur Beach",
          "Visit Natural Bridge"
        ],
        "timing": "Full Day",
        "nightstay": "Neil Island",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 5,
        "title": "Day 5 – Baratang Island",
        "city": "Baratang",
        "points": [
          "Early Morning Departure by AC Vehicle",
          "Enjoy the scenic drive through the Mangrove Forest",
          "Visit Limestone Cave",
          "Visit Mud Volcano"
        ],
        "timing": "Full Day",
        "nightstay": "Port Blair",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 6,
        "title": "Day 6 – Departure",
        "city": "Port Blair",
        "points": [
          "Breakfast",
          "Hotel Check-out",
          "Airport Drop"
        ],
        "timing": "Morning",
        "nightstay": "",
        "meals": [
          "Breakfast"
        ]
      }
    ]
  },
  {
    "slug": "nepal-with-ayodhya-ex-mumbai",
    "name": "Nepal with Ayodhya Ex Mumbai",
    "heading": "10-Day Nepal with Ayodhya",
    "code": "NEPAL-WITH-A-3",
    "category": "himalaya",
    "days": 10,
    "nights": 9,
    "price": 22000,
    "originalPrice": 35000,
    "intro": [
      "Embark on a memorable 10-day spiritual and scenic journey from Mumbai to Nepal, covering the sacred city of Ayodhya, the picturesque lakeside town of Pokhara, the divine Muktinath Temple, and the vibrant capital Kathmandu. Experience the perfect blend of devotion, culture, and nature as you visit iconic temples, serene lakes, majestic Himalayan landscapes, and UNESCO World Heritage Sites. From the blessings of Shri Ram Janmabhoomi and Muktinath to the beauty of Phewa Lake, Sarangkot, and Pashupatinath Temple, this tour offers an unforgettable travel experience filled with spirituality, breathtaking scenery, and lifelong memories."
    ],
    "highlights": [
      "Visit Shri Ram Janmabhoomi Temple in Ayodhya",
      "Seek blessings at the sacred Muktinath Temple",
      "Visit the famous Pashupatinath Temple in Kathmandu",
      "Witness breathtaking Himalayan mountain views",
      "Enjoy boating on the beautiful Phewa Lake",
      "Optional sunrise experience at Sarangkot"
    ],
    "travellers": "Couples / Families / Adventure Seekers",
    "image": "/images/tours/nepal-with-ayodhya-pickup-ayodhya-drop-gorakhpur.webp",
    "pricing": [
      {
        "label": "Quad Sharing",
        "price": 22000
      },
      {
        "label": "Triple Sharing",
        "price": 23000
      },
      {
        "label": "Double Sharing",
        "price": 25000
      }
    ],
    "inclusions": [
      "Mumbai – Ayodhya & Gorakhpur – Mumbai Train Tickets (as per package)",
      "Private AC Vehicle for the entire Nepal tour",
      "Hotel accommodation on Twin/Triple Sharing basis",
      "Daily Breakfast & Dinner",
      "Experienced Tour Leader throughout the trip",
      "All sightseeing as per the itinerary",
      "India–Nepal Border assistance",
      "Driver allowance, toll taxes, parking charges & fuel",
      "Basic First Aid Kit",
      "24×7 Customer Support"
    ],
    "exclusions": [
      "5% GST (Goods & Services Tax)",
      "Lunch and personal snacks",
      "Entry fees, camera charges & monument tickets",
      "Boating charges at Phewa Lake",
      "Pony, Jeep or Helicopter charges for Muktinath (if required)",
      "Travel Insurance",
      "Personal expenses such as shopping, laundry, telephone bills, porter charges, tips, beverages, etc.",
      "Expenses arising due to roadblocks, landslides, weather conditions, natural calamities, strikes, or government restrictions",
      "Any additional cost due to itinerary changes beyond the control of the tour operator",
      "Anything not specifically mentioned under \"Package Includes\""
    ],
    "support": [
      "Private Vehicle for the entire tour",
      "Hotel Accommodation on Twin/Triple Sharing",
      "Daily Breakfast & Dinner",
      "Experienced Tour Leader",
      "All Sightseeing as per Itinerary",
      "India–Nepal Border Assistance",
      "Basic First Aid Kit",
      "24×7 Customer Support",
      "Driver Allowance, Toll Tax & Parking Charges"
    ],
    "accommodation": "Accommodation will be provided in comfortable hotels. Accommodation standards may vary depending on the location and altitude.Ayodhya: 1 Night (Hotel)Pokhara: 2 Night (Hotel)Muktinath: 1 Night (Hotel)Kathmandu: 2 Nights (Hotel)",
    "meals": "The package includes meals as mentioned in the itinerary.6 Breakfasts5 DinnersLunch is NOT included and will be at the guest's own expense throughout the tour.Please Note:Meals during the train journey are NOT included.Dinner is not included on Day 8 (Kathmandu Nightlife)Meals will be served at the respective hotels and tea houses as per the itinerary.During the trekking days, simple, freshly prepared meals will be provided, subject to availability at higher altitudes.",
    "notes": "This is a high-altitude trekking expedition that requires a good level of physical fitness and endurance. Participants are advised to engage in regular walking, cardio, and leg-strengthening exercises at least 4–6 weeks before the trek. The itinerary may be modified due to weather conditions, road closures, landslides, government regulations, or the health and safety of the group. Accommodation during the trek will be in basic tea houses with limited facilities, and electricity, Wi-Fi, hot showers, and mobile network connectivity may be available only at an additional cost or may not be available at higher altitudes. All participants must carry valid original government-issued photo identification and ensure they meet the entry requirements for Nepal. The trek leader's decision will be final in matters concerning safety, route changes, and overall tour management. Guests are advised to carry sufficient cash in Indian Rupees and Nepalese Rupees, as digital payment facilities and ATMs may not be available throughout the trekking route.",
    "paymentKey": "payment-2",
    "cancellationKey": "cancel-2",
    "faqKey": "faq-9",
    "itinerary": [
      {
        "day": 1,
        "title": "Mumbai to Ayodhya",
        "city": "Mumbai",
        "points": [
          "Gather at Lokmanya Tilak Terminus (LTT), Mumbai, at 5:00 AM. Meet your tour leader, complete the attendance and trip briefing, and get ready to begin your spiritual journey to Ayodhya and Nepal.",
          "Board the Tulsi Express or Saket Express at 6:00 AM. Relax and enjoy a scenic train journey through the heart of India while interacting with your fellow travellers. Spend the night onboard as the train continues towards Ayodhya."
        ],
        "timing": "Full Day",
        "nightstay": "Train Journey",
        "meals": []
      },
      {
        "day": 2,
        "title": "Ayodhya Sightseeing",
        "city": "Ayodhya",
        "points": [
          "Arrive in Ayodhya, the sacred birthplace of Lord Shri Ram, and check in to your hotel (subject to room availability). After freshening up and having breakfast, begin a full-day sightseeing tour of this holy city.",
          "Visit the magnificent Shri Ram Janmabhoomi Temple, seek blessings at Hanuman Garhi, explore the beautiful Kanak Bhawan, and experience the spiritual atmosphere along the banks of the Saryu River. In the evening, witness the mesmerizing Saryu Aarti (subject to timing).",
          "Return to the hotel for dinner and an overnight stay in Ayodhya."
        ],
        "timing": "Full Day",
        "nightstay": "Ayodhya",
        "meals": [
          "Dinner"
        ]
      },
      {
        "day": 3,
        "title": "Ayodhya to Pokhara",
        "city": "Sunauli Border",
        "points": [
          "Wake up early and enjoy breakfast before checking out from the hotel. Begin your journey towards Nepal, crossing the Sunauli Border after completing the immigration formalities.",
          "Continue the scenic drive through the picturesque landscapes of Nepal, passing charming villages, rivers, and lush green hills before reaching the beautiful lakeside city of Pokhara.",
          "Upon arrival, check in to your hotel and relax after the long journey. In the evening, you may take a leisurely walk along the vibrant Lakeside Market, enjoying the peaceful atmosphere and stunning views of Phewa Lake.",
          "Dinner and overnight stay in Pokhara."
        ],
        "timing": "Full Day",
        "nightstay": "Pokhara",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 4,
        "title": "Pokhara Local Sightseeing",
        "city": "Pokhara",
        "points": [
          "Wake up to the breathtaking beauty of the Annapurna Himalayan range and enjoy a delicious breakfast at the hotel. Today is dedicated to exploring the natural and cultural attractions of Pokhara.",
          "Begin the day with an optional early morning visit to Sarangkot to witness a spectacular sunrise over the snow-capped Himalayas. Later, visit the sacred Bindhyabasini Temple, followed by the stunning Davis Falls and the mystical Gupteshwor Mahadev Cave.",
          "Enjoy a peaceful boat ride on Phewa Lake and visit the famous Tal Barahi Temple, located on an island in the middle of the lake. Spend the evening exploring the lively Lakeside Market, where you can shop for local handicrafts, souvenirs, and Nepali cuisine.",
          "Return to the hotel for dinner and an overnight stay in Pokhara."
        ],
        "timing": "Full Day",
        "nightstay": "Pokhara",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 5,
        "title": "Pokhara to Muktinath",
        "city": "Mukhtinath",
        "points": [
          "Start your day early with breakfast before embarking on one of the most scenic journeys in Nepal. Drive through the breathtaking landscapes of the Kali Gandaki Valley, passing picturesque mountain villages, waterfalls, and rugged Himalayan terrain on your way to the sacred town of Muktinath.",
          "Upon arrival, visit the revered Muktinath Temple, one of the holiest pilgrimage sites for both Hindus and Buddhists. Seek blessings at the temple, experience the spiritual significance of the 108 sacred water spouts (Muktidhara), and visit the eternal flame at Jwala Mai Temple.",
          "After completing the darshan, spend some time enjoying the spectacular views of the Annapurna and Dhaulagiri mountain ranges before checking in to your hotel.",
          "Dinner and overnight stay at Muktinath/Jomsom."
        ],
        "timing": "Full Day",
        "nightstay": "Mukhtinath or Jomsom",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 6,
        "title": "Muktinath to Kathmandu",
        "city": "Kathmandu",
        "points": [
          "Wake up early and visit the sacred Muktinath Temple, one of Nepal's most revered pilgrimage sites for both Hindus and Buddhists. After seeking blessings and exploring the temple परिसर, return to the hotel for breakfast.",
          "Later, check out and begin your scenic journey towards Kathmandu. Travel through the spectacular Kali Gandaki Valley, passing beautiful mountain landscapes, traditional villages, rivers, and lush green hills as you descend from the Himalayas to Nepal's vibrant capital.",
          "Upon arrival in Kathmandu, complete the hotel check-in formalities and spend the evening at leisure exploring the nearby markets or relaxing after the long journey.",
          "Enjoy a delicious dinner and an overnight stay in Kathmandu."
        ],
        "timing": "Full Day",
        "nightstay": "Kathmandu",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 7,
        "title": "Kathmandu Sightseeing",
        "city": "Kathmandu",
        "points": [
          "After breakfast, embark on a full-day sightseeing tour of Nepal's vibrant capital city. Visit the sacred Pashupatinath Temple, one of the holiest Shiva temples in the world, followed by the magnificent Boudhanath Stupa, one of the largest Buddhist stupas in Asia. Continue to the iconic Swayambhunath Stupa (Monkey Temple), offering panoramic views of Kathmandu Valley, and explore the historic Kathmandu Durbar Square, renowned for its ancient palaces, temples, and traditional Newari architecture.",
          "In the evening, experience the lively atmosphere of Thamel, Kathmandu's most popular tourist district. Stroll through its colorful streets filled with cafés, restaurants, live music venues, souvenir shops, and local markets. Guests may enjoy the nightlife, local cuisine, or shop for trekking gear and handicrafts at their own pace.",
          "Dinner is not included today, allowing guests the flexibility to explore Kathmandu's famous cafés and restaurants at their own expense.",
          "Return to the hotel for an overnight stay in Kathmandu."
        ],
        "timing": "Full Day",
        "nightstay": "Kathmandu",
        "meals": [
          "Breakfast"
        ]
      },
      {
        "day": 8,
        "title": "Kathmandu to Gorakhpur",
        "city": "India",
        "points": [
          "After an early breakfast, check out from the hotel and begin your return journey towards the Sonauli India–Nepal Border. Complete the immigration formalities before entering India and continue the drive to Gorakhpur.",
          "Upon arrival in Gorakhpur, check in to the hotel and relax after the long journey. Spend the evening at leisure before preparing for your return train journey the following morning."
        ],
        "timing": "Full Day",
        "nightstay": "",
        "meals": [
          "Breakfast"
        ]
      },
      {
        "day": 9,
        "title": "Gorakhpur to Mumbai",
        "city": "India",
        "points": [
          "Arrive at Gorakhpur Railway Station between 2:00 AM and 4:00 AM. After a short break at the station, board the GKP–LTT Express departing at 5:45 AM for your return journey to Mumbai.",
          "Spend the day relaxing onboard the train while cherishing the unforgettable memories of the Annapurna Base Camp Trek, Muktinath Darshan, and your incredible Nepal adventure.",
          "Overnight journey on the train."
        ],
        "timing": "Full Day",
        "nightstay": "Train",
        "meals": []
      },
      {
        "day": 10,
        "title": "Mumbai Arrival",
        "city": "Mumbai",
        "points": [
          "Arrive at Lokmanya Tilak Terminus (LTT), Mumbai at approximately 5:30 PM.",
          "Your tour concludes with unforgettable memories of the majestic Himalayas, the successful Annapurna Base Camp Trek, the divine blessings of Muktinath, and the cultural experiences of Nepal. We look forward to welcoming you on another adventure with 2XBT – Building Boyz Tours & Travels."
        ],
        "timing": "Full Day",
        "nightstay": "Mumbai",
        "meals": []
      }
    ]
  },
  {
    "slug": "chardham-yatra-ex-delhi",
    "name": "Chardham Yatra EX Delhi",
    "heading": "13 Day Chardham Yatra",
    "code": "CHARDHAM-YAT-64G8",
    "category": "yatra",
    "days": 13,
    "nights": 12,
    "price": 24000,
    "originalPrice": 30000,
    "intro": [
      "Embark on a divine 13 Days / 12 Nights Char Dham Yatra, covering the four sacred shrines of Yamunotri, Gangotri, Kedarnath, and Badrinath. Experience a perfect blend of spirituality, breathtaking Himalayan landscapes, ancient temples, scenic treks, and unforgettable moments. The journey also includes visits to Haridwar, Rishikesh, Mana Village, Tungnath, Triyuginarayan, Guptkashi, Dhari Devi, Devprayag, and an exciting adventure experience at Shivpuri, making it a truly memorable pilgrimage through the heart of Dev Bhoomi Uttarakhand."
    ],
    "highlights": [
      "Spiritual Journey",
      "Holiest Pilgrimage Destinations",
      "Scenic Himalayan Landscapes",
      "Divine Temple Darshans",
      "Cultural Immersion"
    ],
    "travellers": "",
    "image": "/images/tours/kedarnath-yatra-ex-haridwar.webp",
    "pricing": [
      {
        "label": "Quad Sharing",
        "price": 24000
      },
      {
        "label": "Triple Sharing",
        "price": 26000
      },
      {
        "label": "Double Sharing",
        "price": 28000
      }
    ],
    "inclusions": [
      "Airport & Railway Station Pickup & Drop",
      "Comfortable Hotel / Resort / Tent Accommodation",
      "Daily Breakfast & Dinner",
      "All Sightseeing as per the Itinerary",
      "Transportation by Non-AC Vehicle in the Hills (AC operates only in the plains, subject to weather and government regulations)",
      "All Toll Taxes, Parking Charges & Driver Allowances",
      "Experienced Tour Captain / Trip Coordinator",
      "24×7 On-Tour Assistance",
      "Children below 5 years travel Complimentary (without extra bed and vehicle seat)"
    ],
    "exclusions": [
      "5% GST will be charged extra on the total package cost.",
      "Flight Tickets & Train Tickets (unless specifically mentioned)",
      "Lunch & any meals not mentioned under the package inclusions",
      "Personal expenses (shopping, tips, laundry, phone calls, beverages, etc.)",
      "Entry fees to monuments, parks, museums & sightseeing attractions",
      "Adventure activities & optional experiences (River Rafting, Bungee Jumping, Zipline, Boating, Safari, Cable Car, Cultural Shows, etc.)",
      "Pony, Palki, Pithoo & Helicopter charges",
      "Ropeway charges (Mansa Devi, Chandi Devi or any other ropeway)",
      "Local shuttle/jeep charges (Sonprayag – Gaurikund or wherever applicable)",
      "VIP Darshan / Special Entry Passes at temples or monuments",
      "Medical expenses, doctor consultation & emergency evacuation charges",
      "Travel Insurance of any kind",
      "Expenses arising due to natural calamities, landslides, roadblocks, weather conditions, strikes, vehicle breakdowns, or any unforeseen circumstances",
      "Any increase in government taxes, tolls, parking charges, fuel prices, or permit fees after booking",
      "Anything not specifically mentioned under \"Package Includes\"."
    ],
    "support": [
      "Comfortable Transportation & Sightseeing",
      "Experienced Tour Captain",
      "24×7 On-Tour Assistance",
      "Dedicated Ground Support",
      "Safe & Well-Planned Itinerary",
      "No Hidden Charges"
    ],
    "accommodation": "12 Nights Accommodations10 Nights Hotel2 Nights Tent stay",
    "meals": "11 Breakfast & 12 Dinner",
    "notes": "Additional Expenses Payable by Guests: During the tour, guests are required to bear certain expenses directly wherever applicable. These include Mansa Devi & Chandi Devi Ropeway tickets, Sonprayag to Gaurikund local shuttle/jeep charges, Pony, Palki, Pithoo, and Helicopter services for Yamunotri and Kedarnath, luggage handling/storage charges at the Rampur/Sitapur hotel during the Kedarnath trek, all adventure activities at Shivpuri (such as River Rafting, Bungee Jumping, Giant Swing, Zipline, Flying Fox, etc.), VIP Darshan passes, camera/video camera fees (if applicable), room heater charges, laundry, porter charges, personal shopping, meals and beverages not included in the package, medical expenses, and any other personal expenses or services not specifically mentioned under the package inclusions. All such charges must be paid directly by the guest at the respective location.",
    "paymentKey": "payment-3",
    "cancellationKey": "cancel-2",
    "faqKey": "faq-12",
    "itinerary": [
      {
        "day": 1,
        "title": "Delhi to Haridwar",
        "city": "Haridwar",
        "points": [
          "Upon arrival in Delhi, begin your spiritual journey towards Haridwar, one of India's holiest pilgrimage destinations nestled on the banks of the sacred River Ganga. Enjoy the scenic drive through the plains of North India before reaching Haridwar.",
          "Upon arrival, complete the hotel check-in formalities and freshen up. Visit the revered Mansa Devi Temple and Chandi Devi Temple. Guests may opt to reach the temples via the scenic Ropeway (Udan Khatola) at their own cost, offering breathtaking aerial views of Haridwar, the Ganga River, and the surrounding hills. Seek blessings at both sacred Shakti Peeths before proceeding to the iconic Har Ki Pauri to witness the mesmerizing Ganga Aarti, where thousands of lamps illuminate the river, creating a truly divine atmosphere. You may also explore the nearby local markets and temples.",
          "Return to the hotel after the evening prayers. Enjoy a delicious dinner and relax with an overnight stay in Haridwar."
        ],
        "timing": "Full Day",
        "nightstay": "Haridwar",
        "meals": [
          "Dinner"
        ]
      },
      {
        "day": 2,
        "title": "Haridwar to Janki Chatti",
        "city": "Mussoorie",
        "points": [
          "After an early breakfast, check out from the hotel and proceed towards Janki Chatti via the beautiful hill town of Barkot. En route, stop at the picturesque Mussoorie Waterfall, where you can enjoy the refreshing natural surroundings and capture memorable photographs. Continue your scenic drive through lush green valleys, winding mountain roads, charming hill towns, and breathtaking Himalayan landscapes.",
          "Upon arrival at Janki Chatti, complete the hotel check-in formalities and spend the rest of the day at leisure. Relax and acclimatize to the high-altitude surroundings while preparing for the next day's trek to Yamunotri.",
          "Enjoy a delicious dinner and an overnight stay at Janki Chatti."
        ],
        "timing": "Full Day",
        "nightstay": "Jankichatti",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 3,
        "title": "Yamunotri Dham",
        "city": "Yamnotari",
        "points": [
          "Begin your day early and proceed to the starting point of the Yamunotri Trek. Trek approximately 6 km (one way) from Janki Chatti to Yamunotri Temple, which usually takes around 3–4 hours, depending on your pace. Pony, palki, and pithoo services are available at an additional cost for those who wish to avoid trekking.",
          "En route, admire the stunning Himalayan scenery and visit the holy Surya Kund, where devotees prepare rice and potatoes as sacred prasad. Offer prayers at the revered Yamunotri Temple, seek the blessings of Goddess Yamuna, and, if weather permits, take a holy dip in the sacred waters.",
          "After completing the darshan, begin the 6 km return trek to Janki Chatti, which generally takes 2.5–3.5 hours.",
          "Return to the hotel in the evening after completing a total trekking distance of approximately 12 km. Enjoy a delicious dinner and relax with an overnight stay at Janki Chatti."
        ],
        "timing": "Full Day",
        "nightstay": "Jankichatti",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 4,
        "title": "Janki Chatti to Uttarkashi",
        "city": "Uttarkashi",
        "points": [
          "After breakfast, check out from the hotel and proceed towards Uttarkashi, a sacred town beautifully situated on the banks of the Bhagirathi River. Enjoy the scenic drive through the majestic Himalayan valleys and picturesque mountain landscapes.",
          "En route, visit the serene Shiv Gufa (Shiva Cave), a peaceful spiritual site nestled amidst nature. Continue your journey to Uttarkashi and, upon arrival, complete the hotel check-in formalities and freshen up.",
          "In the evening, visit the revered Kashi Vishwanath Temple, one of the oldest and most significant temples dedicated to Lord Shiva in Uttarakhand. Later, attend the divine Bhagirathi River Aarti, where the soothing chants and illuminated lamps create a truly spiritual atmosphere.",
          "Return to the hotel after the evening prayers. Enjoy a delicious dinner and relax with an overnight stay in Uttarkashi."
        ],
        "timing": "Full Day",
        "nightstay": "Uttarkashi",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 5,
        "title": "Gangotri Dham",
        "city": "Gangotari Dham",
        "points": [
          "Wake up early and enjoy breakfast before proceeding towards Gangotri, one of the four sacred shrines of the Char Dham Yatra and the holy origin of the River Ganga. Enjoy the breathtaking drive through the Himalayan mountains, dense pine forests, and the beautiful Bhagirathi River valley.",
          "En route, visit the picturesque Harsil Valley, a serene Himalayan village known for its apple orchards, snow-capped peaks, and tranquil surroundings. Continue your journey to Gangotri Temple, where devotees offer prayers to Goddess Ganga and seek divine blessings. You may also visit the sacred Bhagirath Shila, Surya Kund, and the holy banks of the Bhagirathi River.",
          "After completing the darshan and spending some peaceful time at the temple, begin your return journey to Uttarkashi.",
          "Upon arrival, relax at the hotel after a spiritually fulfilling day. Enjoy a delicious dinner and an overnight stay in Uttarkashi."
        ],
        "timing": "Full Day",
        "nightstay": "Uttarkashi",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 6,
        "title": "Uttarkashi to Rampur / Sitapur",
        "city": "Buddha Kedarnath",
        "points": [
          "After an early breakfast, check out from the hotel and begin your journey towards Rampur/Sitapur, the gateway to the sacred Kedarnath Dham. Enjoy a scenic drive through the majestic Garhwal Himalayas, passing picturesque valleys, rivers, and charming mountain villages.",
          "En route, visit the revered Budha Kedar Temple, an ancient shrine dedicated to Lord Shiva and considered one of the most sacred temples in Uttarakhand. Spend some peaceful time seeking blessings and experiencing the spiritual serenity of this holy place before continuing your journey.",
          "Upon arrival at Rampur/Sitapur, complete the hotel check-in formalities and relax after the day's drive. Spend the evening at leisure while preparing for the next day's Kedarnath pilgrimage.",
          "Enjoy a delicious dinner and an overnight stay at Rampur/Sitapur."
        ],
        "timing": "Full Day",
        "nightstay": "Rampur/Sitapur",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 7,
        "title": "Rampur / Sitapur to Kedarnath",
        "city": "Kedarnath",
        "points": [
          "Wake up early, check out from the hotel, and proceed towards Sonprayag. From here, take the local shuttle to Gaurikund (at your own cost), the starting point of the Kedarnath trek.",
          "Please Note: As only essential luggage can be carried during the trek, your main luggage/baggage will be left at the hotel in Rampur/Sitapur. Guests are required to pay the luggage handling/storage charges directly to the hotel manager (if applicable). It is recommended to carry only a small backpack with essentials required for the overnight stay in Kedarnath.",
          "Begin the sacred 18 km trek (one way) from Gaurikund to Kedarnath, which generally takes 7–10 hours, depending on your pace. Pony, palki, pithoo, and helicopter services are available at an additional cost for pilgrims who prefer an alternative to trekking.",
          "Upon arrival in Kedarnath, check in to your tent stay near Kedarnath Temple and freshen up. In the evening, enjoy the mesmerizing Kedarnath Temple Aarti from the vicinity of your accommodation, surrounded by the serene Himalayan landscape and the divine atmosphere of the shrine."
        ],
        "timing": "Full Day",
        "nightstay": "Kedarnath Tent Stay",
        "meals": [
          "Dinner"
        ]
      },
      {
        "day": 8,
        "title": "Kedarnath to Rampur / Sitapur",
        "city": "Kedarnath",
        "points": [
          "Wake up early and visit the sacred Shri Kedarnath Temple for the auspicious Morning Darshan. After seeking the blessings of Lord Shiva, explore the nearby attractions around the temple, including the Adi Shankaracharya Samadhi, Bhairavnath Temple (subject to weather and time availability), and enjoy the breathtaking views of the surrounding Himalayan peaks.",
          "Later, return to your accommodation for breakfast, complete the check-out formalities, and begin the 18 km descent trek from Kedarnath to Gaurikund, which generally takes 5–7 hours. Pony, palki, and pithoo services are available at an additional cost.",
          "Upon reaching Gaurikund, take the local shuttle to Sonprayag (at your own cost), where your vehicle will be waiting. Continue your journey to Rampur/Sitapur.",
          "Upon arrival, check in to the hotel. Enjoy a delicious dinner and relax with an overnight stay at Rampur/Sitapur."
        ],
        "timing": "Full Day",
        "nightstay": "Rampur/Sitapur",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 9,
        "title": "Rampur / Sitapur to Chopta",
        "city": "Chopta",
        "points": [
          "After breakfast, check out from the hotel and begin your journey towards the scenic hill station of Chopta, popularly known as the \"Mini Switzerland of India.\"",
          "En route, visit the sacred Triyuginarayan Temple, the legendary wedding venue of Lord Shiva and Goddess Parvati, where the eternal flame (Akhand Dhuni) is believed to have been burning since their divine marriage. Continue to Guptkashi and visit the revered Shri Vishwanath Temple and the Ardhnarishwar Temple, both of which hold immense religious significance for devotees of Lord Shiva.",
          "After seeking blessings, continue your picturesque drive through the beautiful Himalayan valleys and dense forests to Chopta.",
          "Upon arrival, complete the hotel check-in formalities and relax amidst the serene natural surroundings. Enjoy a delicious dinner and an overnight stay in Chopta."
        ],
        "timing": "Full Day",
        "nightstay": "Chopta Tent Stay",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 10,
        "title": "Chopta to Badrinath",
        "city": "Tungnath",
        "points": [
          "Wake up early and enjoy breakfast before beginning the trek to the sacred Tungnath Temple, the highest Shiva temple in the world, situated at an altitude of approximately 3,680 meters (12,073 ft).",
          "The trek from Chopta to Tungnath is approximately 3.5 km (one way) and usually takes around 2–3 hours, depending on your pace. The well-paved trail offers spectacular views of the Himalayan peaks, lush meadows, and pristine forests. After offering prayers and spending some peaceful time at the temple, trek back 3.5 km to Chopta, taking approximately 1.5–2.5 hours.",
          "After returning, continue your scenic drive towards Badrinath, the final and most revered destination of the Char Dham Yatra. En route, enjoy the breathtaking landscapes of the Garhwal Himalayas.",
          "Upon arrival in Badrinath, complete the hotel check-in formalities and freshen up. In the evening, visit the sacred Badrinath Temple for Evening Darshan and witness the serene spiritual atmosphere of this holy shrine dedicated to Lord Vishnu.",
          "Return to the hotel after darshan. Enjoy a delicious dinner and relax with an overnight stay in Badrinath."
        ],
        "timing": "Full Day",
        "nightstay": "Badrinath",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 11,
        "title": "Badrinath – Mana Village – Badrinath",
        "city": "Badrinath",
        "points": [
          "Wake up early and visit the sacred Badrinath Temple for the auspicious Morning Darshan. After seeking the blessings of Lord Badri Vishal, return to the hotel for breakfast.",
          "Later, proceed to explore Mana Village, the Last Indian Village located near the Indo-Tibetan border. Visit the famous Vyas Gufa, where Sage Veda Vyasa is believed to have composed the Mahabharata, followed by Ganesh Gufa, where Lord Ganesha is said to have written the epic. Continue to the iconic Bheem Pul, a massive natural rock bridge believed to have been placed by Bhima over the roaring Saraswati River. You can also witness the confluence of mythology and nature at the origin of the Saraswati River.",
          "After sightseeing, return to Badrinath and spend some leisure time exploring the temple surroundings or local market.",
          "Return to the hotel in the evening. Enjoy a delicious dinner and relax with an overnight stay in Badrinath."
        ],
        "timing": "Full Day",
        "nightstay": "Badrinath",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 12,
        "title": "Badrinath to Shivpuri",
        "city": "Rishikesh",
        "points": [
          "After breakfast, check out from the hotel and begin your journey towards Shivpuri, near Rishikesh. Enjoy a scenic drive through the breathtaking Garhwal Himalayas, passing along winding mountain roads and the sacred Alaknanda River.",
          "En route, visit the revered Dhari Devi Temple, dedicated to Goddess Kali and regarded as one of the guardian deities of Uttarakhand. Continue your journey to the holy Devprayag Sangam, where the Alaknanda and Bhagirathi rivers merge to form the sacred River Ganga. Spend some time admiring the spectacular confluence and its spiritual significance.",
          "Upon arrival in Shivpuri, complete the resort check-in formalities and freshen up. Spend the evening relaxing at the resort's swimming pool or enjoy the lively DJ Night, making it a perfect way to unwind after completing the sacred Char Dham Yatra.",
          "Enjoy a delicious dinner and relax with an overnight stay at the Shivpuri Resort."
        ],
        "timing": "full Day",
        "nightstay": "Shivpuri (Rishikesh)",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 13,
        "title": "Rishikesh Sightseeing to Delhi Drop",
        "city": "Rishikesh",
        "points": [
          "After breakfast, check out from the resort and enjoy your morning with exciting adventure activities in Shivpuri. Guests can participate in thrilling experiences such as River Rafting, Bungee Jumping, Giant Swing, Zipline, and other adventure sports at their own cost. Adventure activity timings are from 9:00 AM to 2:00 PM.",
          "At 2:00 PM, proceed towards Rishikesh for sightseeing. Visit popular attractions including Ram Jhula, Laxman Jhula, and Parmarth Niketan Ashram. In the evening, witness the mesmerizing Ganga Aarti at Triveni Ghat, a spiritually uplifting experience filled with devotional chants, illuminated lamps, and prayers on the banks of the sacred River Ganga. You will also have free time to explore the local markets and shop for souvenirs.",
          "At 7:00 PM, begin your return journey to Delhi, carrying unforgettable memories of the sacred Char Dham Yatra and the adventure-filled experiences of Rishikesh. Overnight journey to Delhi."
        ],
        "timing": "Full Day",
        "nightstay": "",
        "meals": [
          "Breakfast"
        ]
      }
    ]
  },
  {
    "slug": "annapurna-base-camp-trek-ex-gorakhpur",
    "name": "Annapurna Base Camp Trek Ex Gorakhpur",
    "heading": "9-Day Annapurna Base Camp Adventure",
    "code": "NEPAL-WITH-A-2",
    "category": "himalaya",
    "days": 9,
    "nights": 8,
    "price": 28000,
    "originalPrice": 40000,
    "intro": [
      "Experience the thrill of the 12-Day Annapurna Base Camp (ABC) Trek from Mumbai. Journey through the scenic landscapes of Nepal, trek across charming mountain villages, lush forests, suspension bridges, and breathtaking Himalayan valleys to reach Annapurna Base Camp (4,130 m). Witness spectacular views of the Annapurna Massif, relax in the natural hot springs of Jhinu Danda, and create unforgettable memories before returning to Mumbai. This adventure is the perfect blend of trekking, nature, culture, and the majestic Himalayas."
    ],
    "highlights": [
      "Hike to Annapurna Base Camp",
      "Explore Pokhara & Kathmandu",
      "Witness stunning Himalayan views",
      "Experience Nepali culture & traditions",
      "Relax in natural hot springs"
    ],
    "travellers": "Couples / Families / Adventure Seekers",
    "image": "/images/tours/nepal-with-ayodhya-pickup-ayodhya-drop-gorakhpur.webp",
    "pricing": [
      {
        "label": "Quad Sharing",
        "price": 28000
      },
      {
        "label": "Triple Sharing",
        "price": 29500
      },
      {
        "label": "Double Sharing",
        "price": 32000
      }
    ],
    "inclusions": [
      "All transportation in Nepal as per the itinerary",
      "Tea House accommodation during the trek",
      "8 Breakfasts & 8 Dinners as mentioned in the itinerary",
      "Experienced 2XBT Trek Leader",
      "Government-Registered Local Nepal Trekking Guide",
      "Annapurna Conservation Area Permit (ACAP)",
      "TIMS Card (if applicable as per Nepal Government regulations)",
      "Kathmandu Sightseeing as per the itinerary",
      "Pokhara Sightseeing as per the itinerary",
      "Muktinath Temple Visit",
      "First Aid Kit with the Trek Leader",
      "Assistance with India–Nepal Border Immigration Formalities",
      "All applicable hotel taxes and service charges"
    ],
    "exclusions": [
      "5% GST (Goods & Services Tax)",
      "Train & Flight Tickets",
      "Lunch throughout the tour",
      "Meals during the train journey",
      "Dinner on Day 12 (Kathmandu Nightlife) and Day 14 (Train Journey)",
      "Local Jeep charges from Nayapul – Jhinu Danda",
      "Personal porter charges (available on request)",
      "Personal expenses such as laundry, shopping, telephone calls, snacks, beverages, bottled water, etc.",
      "Travel Insurance (strongly recommended)",
      "Emergency rescue or helicopter evacuation charges",
      "Pony, horse, or doli charges (if required)",
      "Entry tickets to monuments, museums, boating, cable cars, or any activities not mentioned in the itinerary",
      "Camera and video charges (where applicable)",
      "Any expenses arising due to bad weather, landslides, roadblocks, natural calamities, political disturbances, train delays/cancellations, or any unforeseen circumstances beyond the organizer's control",
      "Any item not specifically mentioned under \"Inclusions\""
    ],
    "support": [
      "Experienced Trek Leader from 2XBT – Building Boyz Tours & Travels",
      "Experienced Local Nepal Trekking Guide throughout the trek",
      "Government-Registered Local Support Team",
      "Porter Assistance Available (Optional / Chargeable)",
      "24×7 On-Tour Assistance",
      "First Aid Kit with the Trek Leader",
      "Emergency Evacuation Assistance (Helicopter evacuation available at an additional cost and subject to weather conditions & insurance coverage)",
      "Assistance with India–Nepal Border Immigration Formalities",
      "Daily Trek Briefing and Safety Instructions",
      "Basic Altitude Sickness Awareness and Guidance",
      "Group WhatsApp Support Before and During the Tour",
      "Coordination for Hotels, Transportation, and Tea House Check-ins",
      "Backup Vehicle Assistance (where road access is available)"
    ],
    "accommodation": "Accommodation will be provided in comfortable hotels and traditional tea houses throughout the journey. While hotels are available in major cities, tea houses offer basic yet clean lodging during the trekking section. Accommodation standards may vary depending on the location and altitude.Pokhara: 1 Night (Hotel)Jhinu Danda: 2 Nights (Tea House)Sinuwa: 2 Nights (Tea House)Deurali: 2 Nights (Tea House)Annapurna Base Camp (ABC): 1 Night (Tea House)",
    "meals": "The package includes meals as mentioned in the itinerary.8 Breakfasts8 DinnersLunch is NOT included and will be at the guest's own expense throughout the tour.Please Note:Meals will be served at the respective hotels and tea houses as per the itinerary.During the trekking days, simple, freshly prepared meals will be provided, subject to availability at higher altitudes.",
    "notes": "This is a high-altitude trekking expedition that requires a good level of physical fitness and endurance. Participants are advised to engage in regular walking, cardio, and leg-strengthening exercises at least 4–6 weeks before the trek. The itinerary may be modified due to weather conditions, road closures, landslides, government regulations, or the health and safety of the group. Accommodation during the trek will be in basic tea houses with limited facilities, and electricity, Wi-Fi, hot showers, and mobile network connectivity may be available only at an additional cost or may not be available at higher altitudes. All participants must carry valid original government-issued photo identification and ensure they meet the entry requirements for Nepal. The trek leader's decision will be final in matters concerning safety, route changes, and overall tour management. Guests are advised to carry sufficient cash in Indian Rupees and Nepalese Rupees, as digital payment facilities and ATMs may not be available throughout the trekking route.",
    "paymentKey": "payment-2",
    "cancellationKey": "cancel-2",
    "faqKey": "faq-9",
    "itinerary": [
      {
        "day": 1,
        "title": "Gorakhpur to Pokhara",
        "city": "Pokhara",
        "points": [
          "Arrive at Gorakhpur Railway Station at approximately 7:10 AM and meet your tour representative. Begin your scenic drive towards the Sonauli India–Nepal Border (approximately 4 hours). Upon arrival, complete the immigration and border formalities before continuing your journey into Nepal.",
          "After crossing the border, proceed towards the beautiful lakeside city of Pokhara, enjoying breathtaking views of rivers, lush green hills, terraced fields, and traditional Nepalese villages along the way.",
          "Upon arrival in Pokhara, complete the hotel check-in formalities and relax after the day's journey. Enjoy a delicious dinner and an overnight stay in Pokhara."
        ],
        "timing": "Full Day",
        "nightstay": "Pokhara",
        "meals": [
          "Dinner"
        ]
      },
      {
        "day": 2,
        "title": "Pokhara Sightseeing – Nayapul – Jhinu Danda",
        "city": "Jhinu Danda",
        "points": [
          "After breakfast, explore the beautiful city of Pokhara, renowned for its serene lakes, breathtaking Himalayan views, and vibrant atmosphere. Visit some of the city's popular attractions before beginning your journey towards Nayapul, the official starting point of the Annapurna Base Camp Trek.",
          "From Nayapul, continue to Jhinu Danda by local jeep (fare approximately NPR 500–1,000 per person, payable directly and subject to season and availability). Enjoy the scenic off-road drive through picturesque villages, terraced fields, and the beautiful Modi Khola Valley.",
          "Upon arrival at Jhinu Danda, check in to your tea house and spend the evening relaxing amidst the peaceful mountain surroundings while preparing for the trekking adventure ahead.",
          "Enjoy a delicious dinner and an overnight stay at Jhinu Danda."
        ],
        "timing": "Full Day",
        "nightstay": "Jhinu Danda",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 3,
        "title": "Jhinu Danda to Sinuwa",
        "city": "Sinuwa",
        "points": [
          "Wake up to the fresh mountain air and enjoy an early breakfast before beginning your first day of trekking towards Sinuwa. Cross the suspension bridge over the Modi Khola River and ascend through lush forests and traditional Gurung villages.",
          "Pass through the beautiful village of Chhomrong, the last major settlement on the Annapurna Base Camp trail, offering breathtaking views of Annapurna South, Hiunchuli, and the iconic Machhapuchhre (Fishtail Mountain). After a short rest and lunch break (at your own expense), continue the gradual ascent through dense rhododendron and bamboo forests to Sinuwa.",
          "Upon arrival, check in to your tea house and relax amidst the peaceful Himalayan surroundings.",
          "Trek Distance: Approx. 10 km",
          "Trek Duration: 7–8 Hours",
          "Enjoy a delicious dinner and an overnight stay at Sinuwa."
        ],
        "timing": "Full Day",
        "nightstay": "Sinuwa",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 4,
        "title": "Sinuwa to Deurali",
        "city": "Deurali",
        "points": [
          "After an early breakfast, continue your trek deeper into the heart of the Annapurna Sanctuary. The trail passes through dense forests of bamboo, oak, and rhododendron, with the soothing sound of the Modi Khola River accompanying you along the way.",
          "Trek through the peaceful villages of Bamboo and Dovan, taking in the breathtaking mountain scenery, cascading waterfalls, and lush alpine landscapes. As you gain altitude, the vegetation gradually changes, revealing magnificent views of the surrounding Himalayan peaks before reaching Deurali.",
          "Upon arrival, check in to your tea house and relax after a rewarding day on the trail.",
          "Trek Distance: Approx. 12 km",
          "Trek Duration: 9–10 Hours",
          "Enjoy a delicious dinner and an overnight stay at Deurali."
        ],
        "timing": "Full Day",
        "nightstay": "Deurali",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 5,
        "title": "Deurali to Annapurna Base Camp",
        "city": "Annapurna Base Camp",
        "points": [
          "Wake up early and enjoy breakfast before beginning the most exciting and rewarding day of your trek. From Deurali, follow the trail through the spectacular Annapurna Sanctuary, surrounded by towering snow-capped peaks and glacial landscapes.",
          "Pass through Machhapuchhre Base Camp (MBC), where you'll be rewarded with magnificent views of the iconic Machhapuchhre (Fishtail Mountain), Annapurna South, Hiunchuli, and Gangapurna. After a short rest, continue your gradual ascent to Annapurna Base Camp (4,130 m), the highlight of the expedition.",
          "Upon reaching Annapurna Base Camp, witness the breathtaking 360° panorama of the Annapurna Massif, one of the most spectacular mountain amphitheatres in the world. Spend time soaking in the incredible Himalayan scenery and capturing unforgettable memories.",
          "Trek Distance: Approx. 12 km",
          "Trek Duration: 7–8 Hours",
          "Highest Altitude: 4,130 m (13,550 ft)",
          "Enjoy a delicious dinner and an overnight stay at Annapurna Base Camp (ABC)."
        ],
        "timing": "Full Day",
        "nightstay": "Annapurna Base Camp",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 6,
        "title": "Annapurna Base Camp to Deurali",
        "city": "Deurali",
        "points": [
          "Wake up early to witness a breathtaking sunrise over the Annapurna Massif, as the first rays of sunlight illuminate the snow-covered peaks of Annapurna I, Annapurna South, Hiunchuli, Gangapurna, and the majestic Machhapuchhre (Fishtail Mountain). Spend some time soaking in the spectacular Himalayan views and capturing unforgettable memories before enjoying breakfast.",
          "After breakfast, begin your descent from Annapurna Base Camp towards Machhapuchhre Base Camp (MBC) and continue along the scenic trail back to Deurali. Descending through the glacial valley offers a completely different perspective of the surrounding mountains and rugged landscapes.",
          "Upon arrival at Deurali, check in to your tea house and relax after a rewarding day of trekking.",
          "Trek Distance: Approx. 12 km",
          "Trek Duration: 6–7 Hours",
          "Enjoy a delicious dinner and an overnight stay at Deurali."
        ],
        "timing": "Full Day",
        "nightstay": "Deurali",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 7,
        "title": "Deurali to Sinuwa",
        "city": "Sinuwa",
        "points": [
          "After breakfast, continue your descent through the spectacular Annapurna Sanctuary, retracing the scenic trail via Dovan and Bamboo. Walk through lush rhododendron and bamboo forests, cross beautiful suspension bridges, and enjoy the soothing sounds of the Modi Khola River flowing alongside the trail.",
          "As you descend to a lower altitude, the air becomes warmer and the dense Himalayan forests come alive with birdsong and vibrant greenery. Take in the final views of the towering snow-capped peaks before reaching Sinuwa.",
          "Upon arrival, check in to your tea house and relax after another rewarding day on the trail.",
          "Trek Distance: Approx. 12 km",
          "Trek Duration: 7–8 Hours",
          "Enjoy a delicious dinner and an overnight stay at Sinuwa."
        ],
        "timing": "Full Day",
        "nightstay": "Sinuwa",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 8,
        "title": "Sinuwa to Jhinu Danda",
        "city": "Jhinu Danda",
        "points": [
          "After breakfast, begin your final day of trekking as you descend through beautiful forests and traditional mountain villages. Retrace the scenic trail via Chhomrong, enjoying the last magnificent views of Annapurna South, Hiunchuli, and Machhapuchhre (Fishtail Mountain).",
          "Continue your descent to Jhinu Danda, famous for its natural hot springs located beside the Modi Khola River. After checking into your tea house, take a short walk to the hot springs and enjoy a relaxing soak in the naturally heated mineral water, the perfect way to rejuvenate after completing the Annapurna Base Camp Trek.",
          "Upon returning, spend the evening celebrating your successful trek with your fellow travellers.",
          "Trek Distance: Approx. 10 km",
          "Trek Duration: 6–7 Hours",
          "Enjoy a delicious dinner and an overnight stay at Jhinu Danda."
        ],
        "timing": "Full Day",
        "nightstay": "Jhinu Danda",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 9,
        "title": "Jhinu Danda to Gorakhpur",
        "city": "Gorakhpur",
        "points": [
          "After an early breakfast, check out from the hotel and begin your return journey to Gorakhpur. Drive through the scenic hills of Nepal towards the Sunauli Border, where you will complete the necessary immigration formalities before entering India.",
          "Continue your drive to Gorakhpur, arriving by evening. The tour concludes upon arrival in Gorakhpur with wonderful memories of Nepal's breathtaking landscapes, sacred temples, and unforgettable experiences."
        ],
        "timing": "Full Day",
        "nightstay": "",
        "meals": [
          "Breakfast"
        ]
      }
    ]
  },
  {
    "slug": "ladakh-explorer-6d5n",
    "name": "Ladakh Explorer 6D/5N",
    "heading": "6 Days/5 Nights Ladakh Adventure",
    "code": "LADAKH-EXPLO",
    "category": "himalaya",
    "days": 6,
    "nights": 5,
    "price": 28000,
    "originalPrice": 30000,
    "intro": [
      "Discover the captivating beauty of Ladakh on this 6-day adventure. Journey through stunning valleys, encounter vibrant local culture, and witness unforgettable views of the Himalayas. This tour offers a blend of cultural immersion and scenic exploration, creating memories that will last a lifetime. Experience the magic of Ladakh!"
    ],
    "highlights": [
      "Explore the majestic Himalayas, visit ancient monasteries, experience unique culture, and witness breathtaking landscapes."
    ],
    "travellers": "Adventure Seekers",
    "image": "/images/tours/ladakh-explorer-6d5n.webp",
    "pricing": [
      {
        "label": "Dual Rider",
        "price": 28000
      },
      {
        "label": "Solo Rider",
        "price": 32000
      },
      {
        "label": "SIC",
        "price": 28000
      }
    ],
    "inclusions": [
      "Accommodation (Hotel / Camps) 🏨",
      "Meals (Breakfast & Dinner) 🍽️",
      "Bike & Fuel (Royal Enfield / Himalayan)",
      "Leh & local sightseeing by Innova / Tempo Traveller 🚐",
      "Backup vehicle",
      "Experienced road captain 🧭",
      "Mechanic support 🔧",
      "Riding gear (Helmet, jackets, knee Pad) 🧥",
      "Inner line permits & required permissions 📄",
      "Oxygen cylinder & basic first aid 🩺",
      "Airport pickup & drop (Leh & Srinagar)"
    ],
    "exclusions": [
      "Airfare / Train tickets ✈️🚆",
      "Lunch & any meals not mentioned 🍽️",
      "Personal expenses (shopping, tips, laundry, etc.) 🛍️",
      "Entry fees, camera charges & activity charges 🎟️",
      "Any type of insurance (travel / medical) 🩺",
      "Bike damage charges (if any) 🔧",
      "Fuel for personal use beyond itinerary ⛽",
      "Room heater charges (if applicable) 🔥",
      "Extra stay / transport due to weather or road blockage ⚠️",
      "Anything not mentioned in “Includes”"
    ],
    "support": [
      "Dedicated tour guide",
      "Emergency assistance available",
      "24/7 helpline"
    ],
    "accommodation": "Standard hotels with attached bathrooms.",
    "meals": "Breakfast included daily.",
    "notes": "Package includes SIC (Seat in Car) option. Prices are per person and based on availability. Detailed itinerary available upon request.",
    "paymentKey": "payment-2",
    "cancellationKey": "cancel-2",
    "faqKey": "faq-2",
    "itinerary": [
      {
        "day": 1,
        "title": "Leh Arrival",
        "city": "Leh",
        "points": [
          "Arrival at Leh Airport and transfer to hotel.",
          "Rest and acclimatization to the high altitude.",
          "Leisurely stroll around Leh market.",
          "Visit Shanti Stupa for panoramic views."
        ],
        "timing": "Morning",
        "nightstay": "Leh",
        "meals": [
          "Dinner"
        ]
      },
      {
        "day": 2,
        "title": "Leh to Nubra",
        "city": "Nubra Valley",
        "points": [
          "Drive to Nubra Valley via Khardung La Pass (one of the highest motorable passes in the world).",
          "Visit Diskit Monastery and see the giant Buddha statue.",
          "Experience a double-humped camel ride in Hunder sand dunes."
        ],
        "timing": "Full Day",
        "nightstay": "Nubra Valley",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 3,
        "title": "Turtuk Village",
        "city": "Turtuk",
        "points": [
          "Drive to Turtuk, the last village before the Line of Control.",
          "Explore the unique Balti culture and architecture.",
          "Visit the local school and interact with the community."
        ],
        "timing": "Full Day",
        "nightstay": "Nubra Valley",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 4,
        "title": "Nubra To Pangong",
        "city": "Pangong Tso",
        "points": [
          "Drive to Pangong Tso Lake, a high-altitude lake known for its stunning blue color.",
          "Enjoy the breathtaking views of the lake and surrounding mountains.",
          "Spend time relaxing by the lake and soaking in the beauty of nature."
        ],
        "timing": "Full Day",
        "nightstay": "Pangong Tso",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 5,
        "title": "Pangong to Leh",
        "city": "Leh",
        "points": [
          "Drive back to Leh from Pangong Tso.",
          "Visit Shey Palace and Thiksey Monastery en route.",
          "Explore Leh market for souvenirs."
        ],
        "timing": "Full Day",
        "nightstay": "Leh",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 6,
        "title": "Leh Departure",
        "city": "Leh",
        "points": [
          "Transfer to Leh Airport for your departure flight."
        ],
        "timing": "Morning",
        "nightstay": "",
        "meals": [
          "Breakfast"
        ]
      }
    ]
  },
  {
    "slug": "kochi-madurai-11d10n",
    "name": "Kochi - Madurai 11D/10N",
    "heading": "Kerala & Tamil Nadu 12-Day Adventure",
    "code": "KERALA-TAMIL",
    "category": "yatra",
    "days": 11,
    "nights": 10,
    "price": 29000,
    "originalPrice": 40000,
    "intro": [
      "Embark on a captivating 11-day journey through Kerala and Tamil Nadu, immersing yourself in the region's rich culture, stunning landscapes, and historical landmarks. This tour offers a diverse experience, from the serene backwaters of Alleppey to the vibrant temples of Madurai and the spiritual significance of Kanyakumari. Discover the beauty of Munnar's tea plantations, the wildlife of Periyar, and the historical sites of Tamil Nadu."
    ],
    "highlights": [
      "Kochi – Kerala’s vibrant coastal city",
      "Munnar – Tea Gardens, Hills & Waterfalls",
      "Thekkady – Spice Plantations & Nature",
      "Alleppey – Famous Kerala Backwaters",
      "Kovalam / Trivandrum – Beaches & Temple Experience",
      "Kanyakumari – Scenic Coastal Views & Sunset"
    ],
    "travellers": "Couples / Families",
    "image": "/images/tours/trivandrum-madurai-5d4n.webp",
    "pricing": [
      {
        "label": "Quad Sharing",
        "price": 29500
      },
      {
        "label": "Triple Sharing",
        "price": 31000
      },
      {
        "label": "Double",
        "price": 35000
      }
    ],
    "inclusions": [
      "10 Nights Accommodation",
      "10 Breakfasts & 10 Dinners",
      "AC Vehicle for all transfers and sightseeing",
      "Pickup & Drop as per the itinerary",
      "Sightseeing as mentioned in the itinerary",
      "Driver Charges, Fuel & Parking",
      "Hotel & Transportation Charges as applicable",
      "Dedicated Trip Coordination & Travel Support"
    ],
    "exclusions": [
      "5% GST",
      "Entry fees to monuments, parks, museums, temples and sightseeing attractions",
      "Adventure activities and optional experiences (boating, safari, elephant ride, cultural shows, cable car, etc.)",
      "Train/Flight fare",
      "Lunch (except Houseboat Lunch) and any meals not mentioned in the inclusions",
      "Personal expenses such as shopping, tips, laundry, phone calls, room service and beverages",
      "Camera and video camera charges (where applicable)",
      "Travel Insurance",
      "Additional sightseeing or vehicle usage not mentioned in the itinerary",
      "Expenses due to natural calamities, roadblocks, landslides, weather conditions, strikes, political disturbances or any unforeseen circumstances",
      "Anything not specifically mentioned under \"Package Includes\""
    ],
    "support": [
      "Comfortable Accommodation",
      "Daily Breakfast",
      "Private AC Transportation",
      "Experienced Driver",
      "Sightseeing as per Itinerary",
      "Pickup & Drop Assistance",
      "Safe & Hassle-Free Journey",
      "24×7 Customer Support"
    ],
    "accommodation": "Kochi: 1 Night\n\n\nMunnar: 2 Nights\n\n\nThekkady: 1 Night\n\n\nAlleppey: 1 Night\n\n\nKovalam / Trivandrum: 2 Nights\n\n\nKanyakumari: 1 Night\n\n\nRameshwaram: 1 Night\n\n\nMadurai: 1 Night\n\nTotal: 10 Nights / 11 Days\nComfortable accommodation in selected hotels on a sharing basis.",
    "meals": "10 Breakfasts\n\n10 Dinners1 LunchMeals provided as per the hotel schedule and itinerary",
    "notes": "This itinerary is subject to change based on weather conditions and unforeseen circumstances. The Dhanushkodi visit is subject to time and weather conditions. Optional activities are available at an additional cost. Please note that the driver allowance is for local transportation and does not include personal expenses.",
    "paymentKey": "payment-4",
    "cancellationKey": "cancel-2",
    "faqKey": "faq-4",
    "itinerary": [
      {
        "day": 1,
        "title": "Kochi Arrival & Local Sightseeing",
        "city": "Kochi",
        "points": [
          "Arrive at Kochi, the gateway to Kerala, where our representative/driver will welcome you and assist you with your transfer. After meeting the team, proceed for local sightseeing and explore some of the city's most famous attractions.",
          "Visit the historic Fort Kochi area, known for its colonial architecture, charming streets, and cultural heritage. Explore the iconic Chinese Fishing Nets, followed by a visit to St. Francis Church and the historic Santa Cruz Basilica.",
          "Later, visit Mattancherry Palace (Dutch Palace) and explore the nearby Jew Town and Paradesi Synagogue, subject to opening hours.",
          "In the evening, enjoy some free time at Marine Drive or explore the local markets and waterfront areas.",
          "After completing the sightseeing, proceed to your hotel and check in. Relax and prepare for the upcoming Kerala journey."
        ],
        "timing": "Full Day",
        "nightstay": "Kochi",
        "meals": [
          "Dinner"
        ]
      },
      {
        "day": 2,
        "title": "Kochi to Munnar",
        "city": "Munnar",
        "points": [
          "Start your day with breakfast at the hotel before checking out and beginning your scenic journey from Kochi to Munnar, one of Kerala’s most beautiful hill stations.",
          "Drive through the lush green countryside of Kerala, passing through picturesque villages, coconut plantations, spice plantations, valleys, and the winding roads of the Western Ghats. The route offers spectacular views of the surrounding mountains and dense greenery.",
          "En route, visit the beautiful Cheeyappara Waterfalls and Valara Waterfalls, where you can take a short break and enjoy the natural surroundings, subject to weather and local conditions.",
          "Continue your journey towards Munnar, passing through the famous tea plantations that cover the hillsides. Stop at suitable viewpoints along the way for photography and to enjoy the breathtaking scenery.",
          "Upon arrival in Munnar, check in to your hotel and relax. Spend the evening at leisure, exploring the nearby surroundings or enjoying the peaceful mountain atmosphere."
        ],
        "timing": "Full Day",
        "nightstay": "Munnar",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 3,
        "title": "Munnar Sightseeing",
        "city": "Munnar",
        "points": [
          "Start your day with breakfast before heading out for a full-day sightseeing tour of Munnar, surrounded by rolling hills, tea plantations, forests, and beautiful lakes.",
          "Visit Mattupetty Dam, a popular scenic attraction offering beautiful views of the surrounding mountains and lake. Continue towards Echo Point, known for its natural echo phenomenon and peaceful surroundings.",
          "Later, visit Kundala Lake and Kundala Dam, surrounded by lush green hills and tea plantations. Enjoy some time taking photographs and appreciating the natural beauty of the region.",
          "You may also visit the Tea Museum, where you can learn about the history and traditional methods of tea production in Munnar, subject to opening hours.",
          "After completing the sightseeing, return to the hotel and spend the evening at leisure. You can explore the local market or simply relax at the property."
        ],
        "timing": "Full Day",
        "nightstay": "Munnar",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 4,
        "title": "Munnar to Thekkady",
        "city": "Thekkady",
        "points": [
          "Start your day with breakfast before checking out from your hotel and proceeding towards Thekkady, one of Kerala’s most famous destinations for wildlife, forests, and spice plantations.",
          "Enjoy a scenic drive through the Western Ghats, passing through winding mountain roads, dense greenery, spice plantations, and beautiful countryside.",
          "Upon arrival in Thekkady, check in to your hotel and relax.",
          "Later, you can explore the local market and shop for Kerala’s famous spices, tea, coffee, handmade products, and other souvenirs.",
          "Guests can also opt for activities such as Periyar Lake boating, spice plantation visits, Kathakali performances, or Kalaripayattu shows, subject to availability and additional charges.",
          "Return to the hotel after the evening activities."
        ],
        "timing": "Full Day",
        "nightstay": "Thekkady",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 5,
        "title": "Thekkady to Alleppey",
        "city": "Alleppey",
        "points": [
          "Start your day with breakfast before checking out and beginning your journey towards Alleppey, famously known as the Venice of the East and renowned for its beautiful backwaters.",
          "Drive through the scenic Kerala countryside, passing lush paddy fields, coconut plantations, villages, and waterways.",
          "Upon arrival in Alleppey, board your houseboat and enjoy a welcome drink before completing the check-in formalities. Enjoy a delicious lunch on board as the houseboat cruises through the serene backwaters.",
          "Relax while enjoying views of traditional villages, coconut trees, paddy fields, and local life along the waterways. Later, witness the beautiful sunset over the backwaters and enjoy the peaceful surroundings."
        ],
        "timing": "Full Day",
        "nightstay": "Alleppey Houseboat",
        "meals": [
          "Breakfast",
          "Lunch",
          "Dinner"
        ]
      },
      {
        "day": 6,
        "title": "Alleppey → Jatayu Earth Center → Varkala → Kovalam",
        "city": "Kovalam",
        "points": [
          "Start your day with breakfast before checking out from the houseboat and proceeding towards Jatayu Earth’s Center, one of Kerala’s unique attractions.",
          "Upon arrival, explore the magnificent Jatayu sculpture, one of the largest bird sculptures in the world, and enjoy the surrounding natural landscapes. The attraction is also associated with the legendary story of Jatayu from the Ramayana.",
          "After completing your visit, continue towards Varkala, a beautiful coastal destination famous for its dramatic cliffs overlooking the Arabian Sea. Visit Varkala Beach and Varkala Cliff, where you can enjoy the sea views, explore the local shops, and spend some relaxing time by the coast.",
          "If time permits, enjoy the sunset at Varkala Beach. After sunset, proceed towards Kovalam and check in to your hotel."
        ],
        "timing": "Full Day",
        "nightstay": "Kovalam",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 7,
        "title": "Kovalam Sightseeing",
        "city": "Kovalam",
        "points": [
          "Start your day with a delicious breakfast at the hotel before heading out for Kovalam sightseeing. Visit Lighthouse Beach, Hawa Beach, and Samudra Beach, and enjoy the beautiful coastal views and leisure time by the Arabian Sea.",
          "After completing the sightseeing, return to the hotel and freshen up. Get ready for the evening temple visit and change into traditional attire — Mundu/Dhoti for Boys and Saree/Salwar Suit for Girls, as per the temple dress requirements.",
          "Later, proceed towards Thiruvananthapuram for an evening visit to the revered Sree Padmanabhaswamy Temple. Attend the darshan during the available evening temple timings, subject to entry regulations and crowd conditions.",
          "After darshan, return to Kovalam and relax at the hotel."
        ],
        "timing": "Full Day",
        "nightstay": "Kovalam",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 8,
        "title": "Kovalam to Kanyakumari",
        "city": "Kanyakumari",
        "points": [
          "Start your day with breakfast before checking out from the hotel and beginning your journey towards Kanyakumari, the southernmost point of mainland India.",
          "Enjoy the scenic drive through the coastal landscapes and beautiful villages of South India. Upon arrival in Kanyakumari, check in to your hotel and freshen up.",
          "Later, proceed for sightseeing and visit the famous Vivekananda Rock Memorial, located on a rocky island surrounded by the sea. Also visit the Thiruvalluvar Statue and Kanyakumari Beach, where the Arabian Sea, Bay of Bengal, and Indian Ocean meet.",
          "In the evening, enjoy the spectacular sunset at Kanyakumari, subject to weather conditions. Spend some time exploring the local market before returning to the hotel."
        ],
        "timing": "Full Day",
        "nightstay": "Kanyakumari",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 9,
        "title": "Kanyakumari to Rameswaram",
        "city": "Rameswaram",
        "points": [
          "Start your day with breakfast before checking out from the hotel and proceeding towards the sacred town of Rameshwaram, one of the most important pilgrimage destinations in South India.",
          "Enjoy the scenic journey through Tamil Nadu’s countryside and coastal landscapes. Upon reaching Rameshwaram, proceed directly towards Dhanushkodi, the legendary ghost town located at the eastern tip of Rameshwaram Island.",
          "Explore the beautiful and dramatic landscapes of Dhanushkodi, including Dhanushkodi Beach, the meeting point of the sea, and the historic ruins of the old town, subject to road and weather conditions.",
          "After completing the sightseeing, proceed to your hotel in Rameshwaram and check in. Spend the evening relaxing at the hotel."
        ],
        "timing": "Full Day",
        "nightstay": "Rameswaram",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 10,
        "title": "Rameswaram to Madurai",
        "city": "Madurai",
        "points": [
          "Start your day early in the morning and get ready for the sacred Ramanathaswamy Temple Darshan. As the temple follows a traditional dress code, traditional attire is compulsory for temple entry. Boys should wear Dhoti/Mundu with an appropriate upper garment, while Girls should wear Saree, Salwar Suit, or other permitted traditional attire.",
          "Proceed to the temple for the early morning darshan and experience the spiritual atmosphere of one of India’s most revered pilgrimage sites and one of the 12 Jyotirlingas. The temple is also famous for its magnificent corridors, intricately carved pillars, and sacred 22 Theerthams (holy water wells).",
          "After completing the darshan, return to the hotel for breakfast and freshen up. Later, check out and begin your journey towards Madurai.",
          "Upon arrival in Madurai, proceed for sightseeing and visit the magnificent Meenakshi Amman Temple, renowned for its grand gopurams, intricate sculptures, and rich spiritual heritage. Also explore the surrounding Puthu Mandapam and local markets, famous for traditional handicrafts, textiles, and local products.",
          "If time permits, visit Thirumalai Nayakkar Palace, known for its impressive architecture and historic significance.",
          "After completing the sightseeing, check in to your hotel and relax."
        ],
        "timing": "Full Day",
        "nightstay": "Madurai",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 11,
        "title": "Madurai Departure",
        "city": "Madurai",
        "points": [
          "After breakfast, check out from the hotel and get ready for your onward journey. Depending on your departure schedule, you can spend some leisure time in Madurai for last-minute shopping or exploring the nearby local surroundings.",
          "Later, our vehicle will transfer you to Madurai Railway Station / Airport for your scheduled departure. Bid farewell to the beautiful destinations, temples and coastal landscapes explored during your Kerala & Tamil Nadu journey, taking back wonderful memories of the trip."
        ],
        "timing": "Morning",
        "nightstay": "",
        "meals": [
          "Breakfast"
        ]
      }
    ]
  },
  {
    "slug": "nepal-with-annapurna-base-camp-trek-ex-gorakhpur",
    "name": "Nepal with Annapurna Base Camp Trek Ex Gorakhpur",
    "heading": "16-Day Annapurna Base Camp Adventure",
    "code": "NEPAL-WITH-A-6",
    "category": "himalaya",
    "days": 12,
    "nights": 11,
    "price": 31000,
    "originalPrice": 50000,
    "intro": [
      "Embark on an unforgettable 12-Day Annapurna Base Camp (ABC) Trek from Gorakhpur, combining adventure, breathtaking Himalayan landscapes, and the cultural charm of Nepal. Begin your journey from Gorakhpur, travel through the vibrant cities of Kathmandu and Pokhara, and trek deep into the majestic Annapurna Conservation Area to reach the iconic Annapurna Base Camp (4,130 m). Walk through picturesque mountain villages, lush rhododendron forests, cascading waterfalls, and suspension bridges while enjoying panoramic views of Annapurna, Machhapuchhre (Fishtail), Hiunchuli, and other Himalayan peaks. This carefully planned itinerary offers the perfect balance of adventure, natural beauty, and authentic Nepali hospitality, making it an ideal experience for trekking enthusiasts and nature lovers."
    ],
    "highlights": [
      "Hike to Annapurna Base Camp",
      "Explore Pokhara & Kathmandu",
      "Witness stunning Himalayan views",
      "Experience Nepali culture & traditions",
      "Relax in natural hot springs"
    ],
    "travellers": "Couples / Families / Adventure Seekers",
    "image": "/images/tours/nepal-with-ayodhya-pickup-ayodhya-drop-gorakhpur.webp",
    "pricing": [
      {
        "label": "Quad Sharing",
        "price": 31000
      },
      {
        "label": "Triple Sharing",
        "price": 32000
      },
      {
        "label": "Double Sharing",
        "price": 35000
      }
    ],
    "inclusions": [
      "All transportation in Nepal as per the itinerary",
      "Local Jeep Transfer Nayapul – Jhinu Danda",
      "Hotel accommodation in Pokhara, Muktinath, Kathmandu & Gorakhpur",
      "Tea House accommodation during the trek",
      "11 Breakfasts & 10 Dinners as mentioned in the itinerary",
      "Experienced 2XBT Trek Leader",
      "Government-Registered Local Nepal Trekking Guide",
      "Annapurna Conservation Area Permit (ACAP)",
      "TIMS Card (if applicable as per Nepal Government regulations)",
      "Kathmandu Sightseeing as per the itinerary",
      "Pokhara Sightseeing as per the itinerary",
      "Muktinath Temple Visit",
      "First Aid Kit with the Trek Leader",
      "Assistance with India–Nepal Border Immigration Formalities",
      "All applicable hotel taxes and service charges"
    ],
    "exclusions": [
      "5% GST (Goods & Services Tax)",
      "Train & Flight Tickets.",
      "Lunch throughout the tour",
      "Meals during the train journey",
      "Dinner on Day 12 (Kathmandu Nightlife) and Day 14 (Train Journey)",
      "Local Jeep charges from Nayapul – Jhinu Danda (if not opted as part of the package)",
      "Personal porter charges (available on request)",
      "Personal expenses such as laundry, shopping, telephone calls, snacks, beverages, bottled water, etc.",
      "Travel Insurance (strongly recommended)",
      "Emergency rescue or helicopter evacuation charges",
      "Pony, horse, or doli charges (if required)",
      "Entry tickets to monuments, museums, boating, cable cars, or any activities not mentioned in the itinerary",
      "Camera and video charges (where applicable)",
      "Any expenses arising due to bad weather, landslides, roadblocks, natural calamities, political disturbances, train delays/cancellations, or any unforeseen circumstances beyond the organizer's control",
      "Any item not specifically mentioned under \"Inclusions\""
    ],
    "support": [
      "Experienced Trek Leader from 2XBT – Building Boyz Tours & Travels",
      "Experienced Local Nepal Trekking Guide throughout the trek",
      "Government-Registered Local Support Team",
      "Porter Assistance Available (Optional / Chargeable)",
      "24×7 On-Tour Assistance",
      "First Aid Kit with the Trek Leader",
      "Emergency Evacuation Assistance (Helicopter evacuation available at an additional cost and subject to weather conditions & insurance coverage)",
      "Assistance with India–Nepal Border Immigration Formalities",
      "Daily Trek Briefing and Safety Instructions",
      "Basic Altitude Sickness Awareness and Guidance",
      "Group WhatsApp Support Before and During the Tour",
      "Coordination for Hotels, Transportation, and Tea House Check-ins",
      "Backup Vehicle Assistance (where road access is available)"
    ],
    "accommodation": "Accommodation will be provided in comfortable hotels and traditional tea houses throughout the journey. While hotels are available in major cities, tea houses offer basic yet clean lodging during the trekking section. Accommodation standards may vary depending on the location and altitude.Pokhara: 1 Night (Hotel)Jhinu Danda: 2 Nights (Tea House)Sinuwa: 2 Nights (Tea House)Deurali: 2 Nights (Tea House)Annapurna Base Camp (ABC): 1 Night (Tea House)Muktinath: 1 Night (Hotel)Kathmandu: 2 Nights (Hotel)",
    "meals": "The package includes meals as mentioned in the itinerary.11 Breakfasts10 DinnersLunch is NOT included and will be at the guest's own expense throughout the tour.Please Note:Dinner is not included on Day 11 (Kathmandu Nightlife)Meals will be served at the respective hotels and tea houses as per the itinerary.During the trekking days, simple, freshly prepared meals will be provided, subject to availability at higher altitudes.",
    "notes": "This is a high-altitude trekking expedition that requires a good level of physical fitness and endurance. Participants are advised to engage in regular walking, cardio, and leg-strengthening exercises at least 4–6 weeks before the trek. The itinerary may be modified due to weather conditions, road closures, landslides, government regulations, or the health and safety of the group. Accommodation during the trek will be in basic tea houses with limited facilities, and electricity, Wi-Fi, hot showers, and mobile network connectivity may be available only at an additional cost or may not be available at higher altitudes. All participants must carry valid original government-issued photo identification and ensure they meet the entry requirements for Nepal. The trek leader's decision will be final in matters concerning safety, route changes, and overall tour management. Guests are advised to carry sufficient cash in Indian Rupees and Nepalese Rupees, as digital payment facilities and ATMs may not be available throughout the trekking route.",
    "paymentKey": "payment-2",
    "cancellationKey": "cancel-2",
    "faqKey": "faq-9",
    "itinerary": [
      {
        "day": 1,
        "title": "Gorakhpur to Pokhara",
        "city": "Pokhara",
        "points": [
          "Arrive at Gorakhpur Railway Station at approximately 7:10 AM and meet your tour representative. Begin your scenic drive towards the Sonauli India–Nepal Border (approximately 4 hours). Upon arrival, complete the immigration and border formalities before continuing your journey into Nepal.",
          "After crossing the border, proceed towards the beautiful lakeside city of Pokhara, enjoying breathtaking views of rivers, lush green hills, terraced fields, and traditional Nepalese villages along the way.",
          "Upon arrival in Pokhara, complete the hotel check-in formalities and relax after the day's journey. Enjoy a delicious dinner and an overnight stay in Pokhara."
        ],
        "timing": "Full Day",
        "nightstay": "Pokhara",
        "meals": [
          "Dinner"
        ]
      },
      {
        "day": 2,
        "title": "Pokhara Sightseeing – Nayapul – Jhinu Danda",
        "city": "Jhinu Danda",
        "points": [
          "After breakfast, explore the beautiful city of Pokhara, renowned for its serene lakes, breathtaking Himalayan views, and vibrant atmosphere. Visit some of the city's popular attractions before beginning your journey towards Nayapul, the official starting point of the Annapurna Base Camp Trek.",
          "From Nayapul, continue to Jhinu Danda by local jeep (fare approximately NPR 500–1,000 per person, payable directly and subject to season and availability). Enjoy the scenic off-road drive through picturesque villages, terraced fields, and the beautiful Modi Khola Valley.",
          "Upon arrival at Jhinu Danda, check in to your tea house and spend the evening relaxing amidst the peaceful mountain surroundings while preparing for the trekking adventure ahead.",
          "Enjoy a delicious dinner and an overnight stay at Jhinu Danda."
        ],
        "timing": "Full Day",
        "nightstay": "Jhinu Danda",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 3,
        "title": "Jhinu Danda to Sinuwa",
        "city": "Sinuwa",
        "points": [
          "Wake up to the fresh mountain air and enjoy an early breakfast before beginning your first day of trekking towards Sinuwa. Cross the suspension bridge over the Modi Khola River and ascend through lush forests and traditional Gurung villages.",
          "Pass through the beautiful village of Chhomrong, the last major settlement on the Annapurna Base Camp trail, offering breathtaking views of Annapurna South, Hiunchuli, and the iconic Machhapuchhre (Fishtail Mountain). After a short rest and lunch break (at your own expense), continue the gradual ascent through dense rhododendron and bamboo forests to Sinuwa.",
          "Upon arrival, check in to your tea house and relax amidst the peaceful Himalayan surroundings.",
          "Trek Distance: Approx. 10 km",
          "Trek Duration: 7–8 Hours",
          "Enjoy a delicious dinner and an overnight stay at Sinuwa."
        ],
        "timing": "Full Day",
        "nightstay": "Sinuwa",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 4,
        "title": "Sinuwa to Deurali",
        "city": "Deurali",
        "points": [
          "After an early breakfast, continue your trek deeper into the heart of the Annapurna Sanctuary. The trail passes through dense forests of bamboo, oak, and rhododendron, with the soothing sound of the Modi Khola River accompanying you along the way.",
          "Trek through the peaceful villages of Bamboo and Dovan, taking in the breathtaking mountain scenery, cascading waterfalls, and lush alpine landscapes. As you gain altitude, the vegetation gradually changes, revealing magnificent views of the surrounding Himalayan peaks before reaching Deurali.",
          "Upon arrival, check in to your tea house and relax after a rewarding day on the trail.",
          "Trek Distance: Approx. 12 km",
          "Trek Duration: 9–10 Hours",
          "Enjoy a delicious dinner and an overnight stay at Deurali."
        ],
        "timing": "Full Day",
        "nightstay": "Deurali",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 5,
        "title": "Deurali to Annapurna Base Camp",
        "city": "Annapurna Base Camp",
        "points": [
          "Wake up early and enjoy breakfast before beginning the most exciting and rewarding day of your trek. From Deurali, follow the trail through the spectacular Annapurna Sanctuary, surrounded by towering snow-capped peaks and glacial landscapes.",
          "Pass through Machhapuchhre Base Camp (MBC), where you'll be rewarded with magnificent views of the iconic Machhapuchhre (Fishtail Mountain), Annapurna South, Hiunchuli, and Gangapurna. After a short rest, continue your gradual ascent to Annapurna Base Camp (4,130 m), the highlight of the expedition.",
          "Upon reaching Annapurna Base Camp, witness the breathtaking 360° panorama of the Annapurna Massif, one of the most spectacular mountain amphitheatres in the world. Spend time soaking in the incredible Himalayan scenery and capturing unforgettable memories.",
          "Trek Distance: Approx. 12 km",
          "Trek Duration: 7–8 Hours",
          "Highest Altitude: 4,130 m (13,550 ft)",
          "Enjoy a delicious dinner and an overnight stay at Annapurna Base Camp (ABC)."
        ],
        "timing": "Full Day",
        "nightstay": "Annapurna Base Camp",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 6,
        "title": "Annapurna Base Camp to Deurali",
        "city": "Deurali",
        "points": [
          "Wake up early to witness a breathtaking sunrise over the Annapurna Massif, as the first rays of sunlight illuminate the snow-covered peaks of Annapurna I, Annapurna South, Hiunchuli, Gangapurna, and the majestic Machhapuchhre (Fishtail Mountain). Spend some time soaking in the spectacular Himalayan views and capturing unforgettable memories before enjoying breakfast.",
          "After breakfast, begin your descent from Annapurna Base Camp towards Machhapuchhre Base Camp (MBC) and continue along the scenic trail back to Deurali. Descending through the glacial valley offers a completely different perspective of the surrounding mountains and rugged landscapes.",
          "Upon arrival at Deurali, check in to your tea house and relax after a rewarding day of trekking.",
          "Trek Distance: Approx. 12 km",
          "Trek Duration: 6–7 Hours",
          "Enjoy a delicious dinner and an overnight stay at Deurali."
        ],
        "timing": "Full Day",
        "nightstay": "Deurali",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 7,
        "title": "Deurali to Sinuwa",
        "city": "Sinuwa",
        "points": [
          "After breakfast, continue your descent through the spectacular Annapurna Sanctuary, retracing the scenic trail via Dovan and Bamboo. Walk through lush rhododendron and bamboo forests, cross beautiful suspension bridges, and enjoy the soothing sounds of the Modi Khola River flowing alongside the trail.",
          "As you descend to a lower altitude, the air becomes warmer and the dense Himalayan forests come alive with birdsong and vibrant greenery. Take in the final views of the towering snow-capped peaks before reaching Sinuwa.",
          "Upon arrival, check in to your tea house and relax after another rewarding day on the trail.",
          "Trek Distance: Approx. 12 km",
          "Trek Duration: 7–8 Hours",
          "Enjoy a delicious dinner and an overnight stay at Sinuwa."
        ],
        "timing": "Full Day",
        "nightstay": "Sinuwa",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 8,
        "title": "Sinuwa to Jhinu Danda",
        "city": "Jhinu Danda",
        "points": [
          "After breakfast, begin your final day of trekking as you descend through beautiful forests and traditional mountain villages. Retrace the scenic trail via Chhomrong, enjoying the last magnificent views of Annapurna South, Hiunchuli, and Machhapuchhre (Fishtail Mountain).",
          "Continue your descent to Jhinu Danda, famous for its natural hot springs located beside the Modi Khola River. After checking into your tea house, take a short walk to the hot springs and enjoy a relaxing soak in the naturally heated mineral water, the perfect way to rejuvenate after completing the Annapurna Base Camp Trek.",
          "Upon returning, spend the evening celebrating your successful trek with your fellow travellers.",
          "Trek Distance: Approx. 10 km",
          "Trek Duration: 6–7 Hours",
          "Enjoy a delicious dinner and an overnight stay at Jhinu Danda."
        ],
        "timing": "Full Day",
        "nightstay": "Jhinu Danda",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 9,
        "title": "Jhinu Danda to Muktinath",
        "city": "Muktinath",
        "points": [
          "After breakfast, travel from Jhinu Danda to Nayapul by local jeep (fare approximately NPR 500–1,000 per person, payable directly and subject to season and availability). Upon reaching Nayapul, board your vehicle and begin the scenic drive towards the sacred pilgrimage destination of Muktinath.",
          "Travel through the breathtaking Kali Gandaki Valley, passing picturesque mountain villages, deep river gorges, cascading waterfalls, apple orchards, and the charming town of Jomsom. Throughout the journey, enjoy spectacular views of the Annapurna and Dhaulagiri mountain ranges, making this one of the most scenic drives in Nepal.",
          "Upon arrival in Muktinath, complete the hotel check-in formalities and relax after the day's journey.",
          "Enjoy a delicious dinner and an overnight stay at Muktinath."
        ],
        "timing": "Full Day",
        "nightstay": "Muktinath",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 10,
        "title": "Muktinath to Kathmandu",
        "city": "Kathmandu",
        "points": [
          "Wake up early and visit the sacred Muktinath Temple, one of Nepal's most revered pilgrimage sites for both Hindus and Buddhists. After seeking blessings and exploring the temple परिसर, return to the hotel for breakfast.",
          "Later, check out and begin your scenic journey towards Kathmandu. Travel through the spectacular Kali Gandaki Valley, passing beautiful mountain landscapes, traditional villages, rivers, and lush green hills as you descend from the Himalayas to Nepal's vibrant capital.",
          "Upon arrival in Kathmandu, complete the hotel check-in formalities and spend the evening at leisure exploring the nearby markets or relaxing after the long journey.",
          "Enjoy a delicious dinner and an overnight stay in Kathmandu."
        ],
        "timing": "Full Day",
        "nightstay": "Kathmandu",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 11,
        "title": "Kathmandu Sightseeing",
        "city": "Kathmandu",
        "points": [
          "After breakfast, embark on a full-day sightseeing tour of Nepal's vibrant capital city. Visit the sacred Pashupatinath Temple, one of the holiest Shiva temples in the world, followed by the magnificent Boudhanath Stupa, one of the largest Buddhist stupas in Asia. Continue to the iconic Swayambhunath Stupa (Monkey Temple), offering panoramic views of Kathmandu Valley, and explore the historic Kathmandu Durbar Square, renowned for its ancient palaces, temples, and traditional Newari architecture.",
          "In the evening, experience the lively atmosphere of Thamel, Kathmandu's most popular tourist district. Stroll through its colorful streets filled with cafés, restaurants, live music venues, souvenir shops, and local markets. Guests may enjoy the nightlife, local cuisine, or shop for trekking gear and handicrafts at their own pace.",
          "Dinner is not included today, allowing guests the flexibility to explore Kathmandu's famous cafés and restaurants at their own expense.",
          "Return to the hotel for an overnight stay in Kathmandu."
        ],
        "timing": "Full Day",
        "nightstay": "Kathmandu",
        "meals": [
          "Breakfast"
        ]
      },
      {
        "day": 12,
        "title": "Kathmandu to Gorakhpur",
        "city": "Gorakhpur",
        "points": [
          "After an early breakfast, check out from the hotel and begin your return journey to Gorakhpur. Drive through the scenic hills of Nepal towards the Sunauli Border, where you will complete the necessary immigration formalities before entering India.",
          "Continue your drive to Gorakhpur, arriving by evening. The tour concludes upon arrival in Gorakhpur with wonderful memories of Nepal's breathtaking landscapes, sacred temples, and unforgettable experiences."
        ],
        "timing": "Full Day",
        "nightstay": "",
        "meals": [
          "Breakfast"
        ]
      }
    ]
  },
  {
    "slug": "annapurna-base-camp-trek-ex-mumbai",
    "name": "Annapurna Base Camp Trek Ex Mumbai",
    "heading": "12-Day Annapurna Base Camp Adventure",
    "code": "ANNAPURNA-BA",
    "category": "himalaya",
    "days": 12,
    "nights": 8,
    "price": 32000,
    "originalPrice": 40000,
    "intro": [
      "Experience the thrill of the 12-Day Annapurna Base Camp (ABC) Trek from Mumbai. Journey through the scenic landscapes of Nepal, trek across charming mountain villages, lush forests, suspension bridges, and breathtaking Himalayan valleys to reach Annapurna Base Camp (4,130 m). Witness spectacular views of the Annapurna Massif, relax in the natural hot springs of Jhinu Danda, and create unforgettable memories before returning to Mumbai. This adventure is the perfect blend of trekking, nature, culture, and the majestic Himalayas."
    ],
    "highlights": [
      "Hike to Annapurna Base Camp",
      "Explore Pokhara & Kathmandu",
      "Witness stunning Himalayan views",
      "Experience Nepali culture & traditions",
      "Relax in natural hot springs"
    ],
    "travellers": "Couples / Families / Adventure Seekers",
    "image": "/images/tours/nepal-with-ayodhya-pickup-ayodhya-drop-gorakhpur.webp",
    "pricing": [
      {
        "label": "Quad Sharing",
        "price": 32000
      },
      {
        "label": "Triple Sharing",
        "price": 33500
      },
      {
        "label": "Double Sharing",
        "price": 36000
      }
    ],
    "inclusions": [
      "All transportation in Nepal as per the itinerary",
      "Train Tickets 3AC (Mumbai to Gorakhpur to Mumbai)",
      "Tea House accommodation during the trek",
      "8 Breakfasts & 8 Dinners as mentioned in the itinerary",
      "Experienced 2XBT Trek Leader",
      "Government-Registered Local Nepal Trekking Guide",
      "Annapurna Conservation Area Permit (ACAP)",
      "TIMS Card (if applicable as per Nepal Government regulations)",
      "Kathmandu Sightseeing as per the itinerary",
      "Pokhara Sightseeing as per the itinerary",
      "Muktinath Temple Visit",
      "First Aid Kit with the Trek Leader",
      "Assistance with India–Nepal Border Immigration Formalities",
      "All applicable hotel taxes and service charges"
    ],
    "exclusions": [
      "5% GST (Goods & Services Tax)",
      "Lunch throughout the tour",
      "Meals during the train journey",
      "Dinner on Day 12 (Kathmandu Nightlife) and Day 14 (Train Journey)",
      "Local Jeep charges from Nayapul – Jhinu Danda",
      "Personal porter charges (available on request)",
      "Personal expenses such as laundry, shopping, telephone calls, snacks, beverages, bottled water, etc.",
      "Travel Insurance (strongly recommended)",
      "Emergency rescue or helicopter evacuation charges",
      "Pony, horse, or doli charges (if required)",
      "Entry tickets to monuments, museums, boating, cable cars, or any activities not mentioned in the itinerary",
      "Camera and video charges (where applicable)",
      "Any expenses arising due to bad weather, landslides, roadblocks, natural calamities, political disturbances, train delays/cancellations, or any unforeseen circumstances beyond the organizer's control",
      "Any item not specifically mentioned under \"Inclusions\""
    ],
    "support": [
      "Experienced Trek Leader from 2XBT – Building Boyz Tours & Travels",
      "Experienced Local Nepal Trekking Guide throughout the trek",
      "Government-Registered Local Support Team",
      "Porter Assistance Available (Optional / Chargeable)",
      "24×7 On-Tour Assistance",
      "First Aid Kit with the Trek Leader",
      "Emergency Evacuation Assistance (Helicopter evacuation available at an additional cost and subject to weather conditions & insurance coverage)",
      "Assistance with India–Nepal Border Immigration Formalities",
      "Daily Trek Briefing and Safety Instructions",
      "Basic Altitude Sickness Awareness and Guidance",
      "Group WhatsApp Support Before and During the Tour",
      "Coordination for Hotels, Transportation, and Tea House Check-ins",
      "Backup Vehicle Assistance (where road access is available)"
    ],
    "accommodation": "Accommodation will be provided in comfortable hotels and traditional tea houses throughout the journey. While hotels are available in major cities, tea houses offer basic yet clean lodging during the trekking section. Accommodation standards may vary depending on the location and altitude.Pokhara: 1 Night (Hotel)Jhinu Danda: 2 Nights (Tea House)Sinuwa: 2 Nights (Tea House)Deurali: 2 Nights (Tea House)Annapurna Base Camp (ABC): 1 Night (Tea House)",
    "meals": "The package includes meals as mentioned in the itinerary.8 Breakfasts8 DinnersLunch is NOT included and will be at the guest's own expense throughout the tour.Please Note:Meals will be served at the respective hotels and tea houses as per the itinerary.During the trekking days, simple, freshly prepared meals will be provided, subject to availability at higher altitudes.",
    "notes": "This is a high-altitude trekking expedition that requires a good level of physical fitness and endurance. Participants are advised to engage in regular walking, cardio, and leg-strengthening exercises at least 4–6 weeks before the trek. The itinerary may be modified due to weather conditions, road closures, landslides, government regulations, or the health and safety of the group. Accommodation during the trek will be in basic tea houses with limited facilities, and electricity, Wi-Fi, hot showers, and mobile network connectivity may be available only at an additional cost or may not be available at higher altitudes. All participants must carry valid original government-issued photo identification and ensure they meet the entry requirements for Nepal. The trek leader's decision will be final in matters concerning safety, route changes, and overall tour management. Guests are advised to carry sufficient cash in Indian Rupees and Nepalese Rupees, as digital payment facilities and ATMs may not be available throughout the trekking route.",
    "paymentKey": "payment-2",
    "cancellationKey": "cancel-2",
    "faqKey": "faq-9",
    "itinerary": [
      {
        "day": 1,
        "title": "Mumbai to Gorakhpur",
        "city": "India",
        "points": [
          "Gather at Lokmanya Tilak Terminus (LTT) at 12:00 AM on Day. Meet your trek leader, complete the attendance and briefing, and prepare to board the Kushinagar Express for an unforgettable journey to Nepal and the Annapurna Himalayas.",
          "Board the Kushinagar Express at 12:35 AM. Enjoy a full-day train journey through the beautiful landscapes of India while getting to know your fellow trekkers. Overnight journey on the train."
        ],
        "timing": "Full Day & Night",
        "nightstay": "Train",
        "meals": []
      },
      {
        "day": 2,
        "title": "Gorakhpur to Pokhara",
        "city": "Pokhara",
        "points": [
          "Arrive at Gorakhpur Railway Station at approximately 7:10 AM and meet your tour representative. Begin your scenic drive towards the Sonauli India–Nepal Border (approximately 4 hours). Upon arrival, complete the immigration and border formalities before continuing your journey into Nepal.",
          "After crossing the border, proceed towards the beautiful lakeside city of Pokhara, enjoying breathtaking views of rivers, lush green hills, terraced fields, and traditional Nepalese villages along the way.",
          "Upon arrival in Pokhara, complete the hotel check-in formalities and relax after the day's journey. Enjoy a delicious dinner and an overnight stay in Pokhara."
        ],
        "timing": "Full Day",
        "nightstay": "Pokhara",
        "meals": [
          "Dinner"
        ]
      },
      {
        "day": 3,
        "title": "Pokhara Sightseeing – Nayapul – Jhinu Danda",
        "city": "Jhinu Danda",
        "points": [
          "After breakfast, explore the beautiful city of Pokhara, renowned for its serene lakes, breathtaking Himalayan views, and vibrant atmosphere. Visit some of the city's popular attractions before beginning your journey towards Nayapul, the official starting point of the Annapurna Base Camp Trek.",
          "From Nayapul, continue to Jhinu Danda by local jeep (fare approximately NPR 500–1,000 per person, payable directly and subject to season and availability). Enjoy the scenic off-road drive through picturesque villages, terraced fields, and the beautiful Modi Khola Valley.",
          "Upon arrival at Jhinu Danda, check in to your tea house and spend the evening relaxing amidst the peaceful mountain surroundings while preparing for the trekking adventure ahead.",
          "Enjoy a delicious dinner and an overnight stay at Jhinu Danda."
        ],
        "timing": "Full Day",
        "nightstay": "Jhinu Danda",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 4,
        "title": "Jhinu Danda to Sinuwa",
        "city": "Sinuwa",
        "points": [
          "Wake up to the fresh mountain air and enjoy an early breakfast before beginning your first day of trekking towards Sinuwa. Cross the suspension bridge over the Modi Khola River and ascend through lush forests and traditional Gurung villages.",
          "Pass through the beautiful village of Chhomrong, the last major settlement on the Annapurna Base Camp trail, offering breathtaking views of Annapurna South, Hiunchuli, and the iconic Machhapuchhre (Fishtail Mountain). After a short rest and lunch break (at your own expense), continue the gradual ascent through dense rhododendron and bamboo forests to Sinuwa.",
          "Upon arrival, check in to your tea house and relax amidst the peaceful Himalayan surroundings.",
          "Trek Distance: Approx. 10 km",
          "Trek Duration: 7–8 Hours",
          "Enjoy a delicious dinner and an overnight stay at Sinuwa."
        ],
        "timing": "Full Day",
        "nightstay": "Sinuwa",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 5,
        "title": "Sinuwa to Deurali",
        "city": "Deurali",
        "points": [
          "After an early breakfast, continue your trek deeper into the heart of the Annapurna Sanctuary. The trail passes through dense forests of bamboo, oak, and rhododendron, with the soothing sound of the Modi Khola River accompanying you along the way.",
          "Trek through the peaceful villages of Bamboo and Dovan, taking in the breathtaking mountain scenery, cascading waterfalls, and lush alpine landscapes. As you gain altitude, the vegetation gradually changes, revealing magnificent views of the surrounding Himalayan peaks before reaching Deurali.",
          "Upon arrival, check in to your tea house and relax after a rewarding day on the trail.",
          "Trek Distance: Approx. 12 km",
          "Trek Duration: 9–10 Hours",
          "Enjoy a delicious dinner and an overnight stay at Deurali."
        ],
        "timing": "Full Day",
        "nightstay": "Deurali",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 6,
        "title": "Deurali to Annapurna Base Camp",
        "city": "Annapurna Base Camp",
        "points": [
          "Wake up early and enjoy breakfast before beginning the most exciting and rewarding day of your trek. From Deurali, follow the trail through the spectacular Annapurna Sanctuary, surrounded by towering snow-capped peaks and glacial landscapes.",
          "Pass through Machhapuchhre Base Camp (MBC), where you'll be rewarded with magnificent views of the iconic Machhapuchhre (Fishtail Mountain), Annapurna South, Hiunchuli, and Gangapurna. After a short rest, continue your gradual ascent to Annapurna Base Camp (4,130 m), the highlight of the expedition.",
          "Upon reaching Annapurna Base Camp, witness the breathtaking 360° panorama of the Annapurna Massif, one of the most spectacular mountain amphitheatres in the world. Spend time soaking in the incredible Himalayan scenery and capturing unforgettable memories.",
          "Trek Distance: Approx. 12 km",
          "Trek Duration: 7–8 Hours",
          "Highest Altitude: 4,130 m (13,550 ft)",
          "Enjoy a delicious dinner and an overnight stay at Annapurna Base Camp (ABC)."
        ],
        "timing": "Full Day",
        "nightstay": "Annapurna Base Camp",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 7,
        "title": "Annapurna Base Camp to Deurali",
        "city": "Deurali",
        "points": [
          "Wake up early to witness a breathtaking sunrise over the Annapurna Massif, as the first rays of sunlight illuminate the snow-covered peaks of Annapurna I, Annapurna South, Hiunchuli, Gangapurna, and the majestic Machhapuchhre (Fishtail Mountain). Spend some time soaking in the spectacular Himalayan views and capturing unforgettable memories before enjoying breakfast.",
          "After breakfast, begin your descent from Annapurna Base Camp towards Machhapuchhre Base Camp (MBC) and continue along the scenic trail back to Deurali. Descending through the glacial valley offers a completely different perspective of the surrounding mountains and rugged landscapes.",
          "Upon arrival at Deurali, check in to your tea house and relax after a rewarding day of trekking.",
          "Trek Distance: Approx. 12 km",
          "Trek Duration: 6–7 Hours",
          "Enjoy a delicious dinner and an overnight stay at Deurali."
        ],
        "timing": "Full Day",
        "nightstay": "Deurali",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 8,
        "title": "Deurali to Sinuwa",
        "city": "Sinuwa",
        "points": [
          "After breakfast, continue your descent through the spectacular Annapurna Sanctuary, retracing the scenic trail via Dovan and Bamboo. Walk through lush rhododendron and bamboo forests, cross beautiful suspension bridges, and enjoy the soothing sounds of the Modi Khola River flowing alongside the trail.",
          "As you descend to a lower altitude, the air becomes warmer and the dense Himalayan forests come alive with birdsong and vibrant greenery. Take in the final views of the towering snow-capped peaks before reaching Sinuwa.",
          "Upon arrival, check in to your tea house and relax after another rewarding day on the trail.",
          "Trek Distance: Approx. 12 km",
          "Trek Duration: 7–8 Hours",
          "Enjoy a delicious dinner and an overnight stay at Sinuwa."
        ],
        "timing": "Full Day",
        "nightstay": "Sinuwa",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 9,
        "title": "Sinuwa to Jhinu Danda",
        "city": "Jhinu Danda",
        "points": [
          "After breakfast, begin your final day of trekking as you descend through beautiful forests and traditional mountain villages. Retrace the scenic trail via Chhomrong, enjoying the last magnificent views of Annapurna South, Hiunchuli, and Machhapuchhre (Fishtail Mountain).",
          "Continue your descent to Jhinu Danda, famous for its natural hot springs located beside the Modi Khola River. After checking into your tea house, take a short walk to the hot springs and enjoy a relaxing soak in the naturally heated mineral water, the perfect way to rejuvenate after completing the Annapurna Base Camp Trek.",
          "Upon returning, spend the evening celebrating your successful trek with your fellow travellers.",
          "Trek Distance: Approx. 10 km",
          "Trek Duration: 6–7 Hours",
          "Enjoy a delicious dinner and an overnight stay at Jhinu Danda."
        ],
        "timing": "Full Day",
        "nightstay": "Jhinu Danda",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 10,
        "title": "Jhinu Danda to Gorakhpur",
        "city": "Gorakhpur",
        "points": [
          "After an early breakfast, check out from the hotel and begin your return journey to Gorakhpur. Drive through the scenic hills of Nepal towards the Sunauli Border, where you will complete the necessary immigration formalities before entering India.",
          "Continue your drive to Gorakhpur, arriving by evening. The tour concludes upon arrival in Gorakhpur with wonderful memories of Nepal's breathtaking landscapes, sacred temples, and unforgettable experiences."
        ],
        "timing": "Full Day",
        "nightstay": "",
        "meals": [
          "Breakfast"
        ]
      },
      {
        "day": 11,
        "title": "Gorakhpur To Mumbai",
        "city": "India",
        "points": [
          "Arrive at Gorakhpur Railway Station between 2:00 AM and 4:00 AM. After a short break at the station, board the GKP–LTT Express departing at 5:45 AM for your return journey to Mumbai.",
          "Spend the day relaxing onboard the train while cherishing the unforgettable memories of the Annapurna Base Camp Trek, Muktinath Darshan, and your incredible Nepal adventure.",
          "Overnight journey on the train."
        ],
        "timing": "Full Day",
        "nightstay": "Train",
        "meals": []
      },
      {
        "day": 12,
        "title": "Mumbai Arrival",
        "city": "Mumbai",
        "points": [
          "Arrive at Lokmanya Tilak Terminus (LTT), Mumbai at approximately 5:30 PM.",
          "Your tour concludes with unforgettable memories of the majestic Himalayas, the successful Annapurna Base Camp Trek, the divine blessings of Muktinath, and the cultural experiences of Nepal. We look forward to welcoming you on another adventure with 2XBT – Building Boyz Tours & Travels."
        ],
        "timing": "Full Day",
        "nightstay": "Mumbai",
        "meals": []
      }
    ]
  },
  {
    "slug": "nepal-with-annapurna-base-camp-trek-ex-mumbai",
    "name": "Nepal with Annapurna Base Camp Trek Ex Mumbai",
    "heading": "16-Day Annapurna Base Camp Adventure",
    "code": "NEPAL-WITH-A",
    "category": "himalaya",
    "days": 15,
    "nights": 14,
    "price": 34999,
    "originalPrice": 50000,
    "intro": [
      "Embark on an unforgettable 15-day journey to the heart of the Annapurna Himalayas. This package combines a challenging trek to Annapurna Base Camp with captivating sightseeing experiences in Pokhara and Kathmandu. Discover breathtaking mountain landscapes, immerse yourself in Nepali culture, and create memories that will last a lifetime. This adventure includes comfortable accommodations, delicious meals, and expert guidance."
    ],
    "highlights": [
      "Hike to Annapurna Base Camp",
      "Explore Pokhara & Kathmandu",
      "Witness stunning Himalayan views",
      "Experience Nepali culture & traditions",
      "Relax in natural hot springs"
    ],
    "travellers": "Couples / Families / Adventure Seekers",
    "image": "/images/tours/nepal-with-ayodhya-pickup-ayodhya-drop-gorakhpur.webp",
    "pricing": [
      {
        "label": "Quad Sharing",
        "price": 34999
      },
      {
        "label": "Triple Sharing",
        "price": 36999
      },
      {
        "label": "Double Sharing",
        "price": 39999
      }
    ],
    "inclusions": [
      "Train Tickets Mumbai – Gorakhpur – Mumbai (3AC as per package selection)",
      "All transportation in Nepal as per the itinerary",
      "Local Jeep Transfer Nayapul – Jhinu Danda",
      "Hotel accommodation in Pokhara, Muktinath, Kathmandu & Gorakhpur",
      "Tea House accommodation during the trek",
      "12 Breakfasts & 11 Dinners as mentioned in the itinerary",
      "Experienced 2XBT Trek Leader",
      "Government-Registered Local Nepal Trekking Guide",
      "Annapurna Conservation Area Permit (ACAP)",
      "TIMS Card (if applicable as per Nepal Government regulations)",
      "Kathmandu Sightseeing as per the itinerary",
      "Pokhara Sightseeing as per the itinerary",
      "Muktinath Temple Visit",
      "First Aid Kit with the Trek Leader",
      "Assistance with India–Nepal Border Immigration Formalities",
      "All applicable hotel taxes and service charges"
    ],
    "exclusions": [
      "5% GST (Goods & Services Tax)",
      "Lunch throughout the tour",
      "Meals during the train journey",
      "Dinner on Day 12 (Kathmandu Nightlife) and Day 14 (Train Journey)",
      "Local Jeep charges from Nayapul – Jhinu Danda (if not opted as part of the package)",
      "Personal porter charges (available on request)",
      "Personal expenses such as laundry, shopping, telephone calls, snacks, beverages, bottled water, etc.",
      "Travel Insurance (strongly recommended)",
      "Emergency rescue or helicopter evacuation charges",
      "Pony, horse, or doli charges (if required)",
      "Entry tickets to monuments, museums, boating, cable cars, or any activities not mentioned in the itinerary",
      "Camera and video charges (where applicable)",
      "Any expenses arising due to bad weather, landslides, roadblocks, natural calamities, political disturbances, train delays/cancellations, or any unforeseen circumstances beyond the organizer's control",
      "Any item not specifically mentioned under \"Inclusions\""
    ],
    "support": [
      "Experienced Trek Leader from 2XBT – Building Boyz Tours & Travels",
      "Experienced Local Nepal Trekking Guide throughout the trek",
      "Government-Registered Local Support Team",
      "Porter Assistance Available (Optional / Chargeable)",
      "24×7 On-Tour Assistance",
      "First Aid Kit with the Trek Leader",
      "Emergency Evacuation Assistance (Helicopter evacuation available at an additional cost and subject to weather conditions & insurance coverage)",
      "Assistance with India–Nepal Border Immigration Formalities",
      "Daily Trek Briefing and Safety Instructions",
      "Basic Altitude Sickness Awareness and Guidance",
      "Group WhatsApp Support Before and During the Tour",
      "Coordination for Hotels, Transportation, and Tea House Check-ins",
      "Backup Vehicle Assistance (where road access is available)"
    ],
    "accommodation": "Accommodation will be provided in comfortable hotels and traditional tea houses throughout the journey. While hotels are available in major cities, tea houses offer basic yet clean lodging during the trekking section. Accommodation standards may vary depending on the location and altitude.Pokhara: 1 Night (Hotel)Jhinu Danda: 2 Nights (Tea House)Sinuwa: 2 Nights (Tea House)Deurali: 2 Nights (Tea House)Annapurna Base Camp (ABC): 1 Night (Tea House)Muktinath: 1 Night (Hotel)Kathmandu: 2 Nights (Hotel)",
    "meals": "The package includes meals as mentioned in the itinerary.11 Breakfasts10 DinnersLunch is NOT included and will be at the guest's own expense throughout the tour.Please Note:Meals during the train journey are NOT included.Dinner is not included on Day 12 (Kathmandu Nightlife)Meals will be served at the respective hotels and tea houses as per the itinerary.During the trekking days, simple, freshly prepared meals will be provided, subject to availability at higher altitudes.",
    "notes": "This is a high-altitude trekking expedition that requires a good level of physical fitness and endurance. Participants are advised to engage in regular walking, cardio, and leg-strengthening exercises at least 4–6 weeks before the trek. The itinerary may be modified due to weather conditions, road closures, landslides, government regulations, or the health and safety of the group. Accommodation during the trek will be in basic tea houses with limited facilities, and electricity, Wi-Fi, hot showers, and mobile network connectivity may be available only at an additional cost or may not be available at higher altitudes. All participants must carry valid original government-issued photo identification and ensure they meet the entry requirements for Nepal. The trek leader's decision will be final in matters concerning safety, route changes, and overall tour management. Guests are advised to carry sufficient cash in Indian Rupees and Nepalese Rupees, as digital payment facilities and ATMs may not be available throughout the trekking route.",
    "paymentKey": "payment-2",
    "cancellationKey": "cancel-2",
    "faqKey": "faq-9",
    "itinerary": [
      {
        "day": 1,
        "title": "Mumbai to Gorakhpur",
        "city": "India",
        "points": [
          "Gather at Lokmanya Tilak Terminus (LTT) at 12:00 AM on Day. Meet your trek leader, complete the attendance and briefing, and prepare to board the Kushinagar Express for an unforgettable journey to Nepal and the Annapurna Himalayas.",
          "Board the Kushinagar Express at 12:35 AM. Enjoy a full-day train journey through the beautiful landscapes of India while getting to know your fellow trekkers. Overnight journey on the train."
        ],
        "timing": "Full Day & Night",
        "nightstay": "Train",
        "meals": []
      },
      {
        "day": 2,
        "title": "Gorakhpur to Pokhara",
        "city": "Pokhara",
        "points": [
          "Arrive at Gorakhpur Railway Station at approximately 7:10 AM and meet your tour representative. Begin your scenic drive towards the Sonauli India–Nepal Border (approximately 4 hours). Upon arrival, complete the immigration and border formalities before continuing your journey into Nepal.",
          "After crossing the border, proceed towards the beautiful lakeside city of Pokhara, enjoying breathtaking views of rivers, lush green hills, terraced fields, and traditional Nepalese villages along the way.",
          "Upon arrival in Pokhara, complete the hotel check-in formalities and relax after the day's journey. Enjoy a delicious dinner and an overnight stay in Pokhara."
        ],
        "timing": "Full Day",
        "nightstay": "Pokhara",
        "meals": [
          "Dinner"
        ]
      },
      {
        "day": 3,
        "title": "Pokhara Sightseeing – Nayapul – Jhinu Danda",
        "city": "Jhinu Danda",
        "points": [
          "After breakfast, explore the beautiful city of Pokhara, renowned for its serene lakes, breathtaking Himalayan views, and vibrant atmosphere. Visit some of the city's popular attractions before beginning your journey towards Nayapul, the official starting point of the Annapurna Base Camp Trek.",
          "From Nayapul, continue to Jhinu Danda by local jeep (fare approximately NPR 500–1,000 per person, payable directly and subject to season and availability). Enjoy the scenic off-road drive through picturesque villages, terraced fields, and the beautiful Modi Khola Valley.",
          "Upon arrival at Jhinu Danda, check in to your tea house and spend the evening relaxing amidst the peaceful mountain surroundings while preparing for the trekking adventure ahead.",
          "Enjoy a delicious dinner and an overnight stay at Jhinu Danda."
        ],
        "timing": "Full Day",
        "nightstay": "Jhinu Danda",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 4,
        "title": "Jhinu Danda to Sinuwa",
        "city": "Sinuwa",
        "points": [
          "Wake up to the fresh mountain air and enjoy an early breakfast before beginning your first day of trekking towards Sinuwa. Cross the suspension bridge over the Modi Khola River and ascend through lush forests and traditional Gurung villages.",
          "Pass through the beautiful village of Chhomrong, the last major settlement on the Annapurna Base Camp trail, offering breathtaking views of Annapurna South, Hiunchuli, and the iconic Machhapuchhre (Fishtail Mountain). After a short rest and lunch break (at your own expense), continue the gradual ascent through dense rhododendron and bamboo forests to Sinuwa.",
          "Upon arrival, check in to your tea house and relax amidst the peaceful Himalayan surroundings.",
          "Trek Distance: Approx. 10 km",
          "Trek Duration: 7–8 Hours",
          "Enjoy a delicious dinner and an overnight stay at Sinuwa."
        ],
        "timing": "Full Day",
        "nightstay": "Sinuwa",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 5,
        "title": "Sinuwa to Deurali",
        "city": "Deurali",
        "points": [
          "After an early breakfast, continue your trek deeper into the heart of the Annapurna Sanctuary. The trail passes through dense forests of bamboo, oak, and rhododendron, with the soothing sound of the Modi Khola River accompanying you along the way.",
          "Trek through the peaceful villages of Bamboo and Dovan, taking in the breathtaking mountain scenery, cascading waterfalls, and lush alpine landscapes. As you gain altitude, the vegetation gradually changes, revealing magnificent views of the surrounding Himalayan peaks before reaching Deurali.",
          "Upon arrival, check in to your tea house and relax after a rewarding day on the trail.",
          "Trek Distance: Approx. 12 km",
          "Trek Duration: 9–10 Hours",
          "Enjoy a delicious dinner and an overnight stay at Deurali."
        ],
        "timing": "Full Day",
        "nightstay": "Deurali",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 6,
        "title": "Deurali to Annapurna Base Camp",
        "city": "Annapurna Base Camp",
        "points": [
          "Wake up early and enjoy breakfast before beginning the most exciting and rewarding day of your trek. From Deurali, follow the trail through the spectacular Annapurna Sanctuary, surrounded by towering snow-capped peaks and glacial landscapes.",
          "Pass through Machhapuchhre Base Camp (MBC), where you'll be rewarded with magnificent views of the iconic Machhapuchhre (Fishtail Mountain), Annapurna South, Hiunchuli, and Gangapurna. After a short rest, continue your gradual ascent to Annapurna Base Camp (4,130 m), the highlight of the expedition.",
          "Upon reaching Annapurna Base Camp, witness the breathtaking 360° panorama of the Annapurna Massif, one of the most spectacular mountain amphitheatres in the world. Spend time soaking in the incredible Himalayan scenery and capturing unforgettable memories.",
          "Trek Distance: Approx. 12 km",
          "Trek Duration: 7–8 Hours",
          "Highest Altitude: 4,130 m (13,550 ft)",
          "Enjoy a delicious dinner and an overnight stay at Annapurna Base Camp (ABC)."
        ],
        "timing": "Full Day",
        "nightstay": "Annapurna Base Camp",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 7,
        "title": "Annapurna Base Camp to Deurali",
        "city": "Deurali",
        "points": [
          "Wake up early to witness a breathtaking sunrise over the Annapurna Massif, as the first rays of sunlight illuminate the snow-covered peaks of Annapurna I, Annapurna South, Hiunchuli, Gangapurna, and the majestic Machhapuchhre (Fishtail Mountain). Spend some time soaking in the spectacular Himalayan views and capturing unforgettable memories before enjoying breakfast.",
          "After breakfast, begin your descent from Annapurna Base Camp towards Machhapuchhre Base Camp (MBC) and continue along the scenic trail back to Deurali. Descending through the glacial valley offers a completely different perspective of the surrounding mountains and rugged landscapes.",
          "Upon arrival at Deurali, check in to your tea house and relax after a rewarding day of trekking.",
          "Trek Distance: Approx. 12 km",
          "Trek Duration: 6–7 Hours",
          "Enjoy a delicious dinner and an overnight stay at Deurali."
        ],
        "timing": "Full Day",
        "nightstay": "Deurali",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 8,
        "title": "Deurali to Sinuwa",
        "city": "Sinuwa",
        "points": [
          "After breakfast, continue your descent through the spectacular Annapurna Sanctuary, retracing the scenic trail via Dovan and Bamboo. Walk through lush rhododendron and bamboo forests, cross beautiful suspension bridges, and enjoy the soothing sounds of the Modi Khola River flowing alongside the trail.",
          "As you descend to a lower altitude, the air becomes warmer and the dense Himalayan forests come alive with birdsong and vibrant greenery. Take in the final views of the towering snow-capped peaks before reaching Sinuwa.",
          "Upon arrival, check in to your tea house and relax after another rewarding day on the trail.",
          "Trek Distance: Approx. 12 km",
          "Trek Duration: 7–8 Hours",
          "Enjoy a delicious dinner and an overnight stay at Sinuwa."
        ],
        "timing": "Full Day",
        "nightstay": "Sinuwa",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 9,
        "title": "Sinuwa to Jhinu Danda",
        "city": "Jhinu Danda",
        "points": [
          "After breakfast, begin your final day of trekking as you descend through beautiful forests and traditional mountain villages. Retrace the scenic trail via Chhomrong, enjoying the last magnificent views of Annapurna South, Hiunchuli, and Machhapuchhre (Fishtail Mountain).",
          "Continue your descent to Jhinu Danda, famous for its natural hot springs located beside the Modi Khola River. After checking into your tea house, take a short walk to the hot springs and enjoy a relaxing soak in the naturally heated mineral water, the perfect way to rejuvenate after completing the Annapurna Base Camp Trek.",
          "Upon returning, spend the evening celebrating your successful trek with your fellow travellers.",
          "Trek Distance: Approx. 10 km",
          "Trek Duration: 6–7 Hours",
          "Enjoy a delicious dinner and an overnight stay at Jhinu Danda."
        ],
        "timing": "Full Day",
        "nightstay": "Jhinu Danda",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 10,
        "title": "Jhinu Danda to Muktinath",
        "city": "Muktinath",
        "points": [
          "After breakfast, travel from Jhinu Danda to Nayapul by local jeep (fare approximately NPR 500–1,000 per person, payable directly and subject to season and availability). Upon reaching Nayapul, board your vehicle and begin the scenic drive towards the sacred pilgrimage destination of Muktinath.",
          "Travel through the breathtaking Kali Gandaki Valley, passing picturesque mountain villages, deep river gorges, cascading waterfalls, apple orchards, and the charming town of Jomsom. Throughout the journey, enjoy spectacular views of the Annapurna and Dhaulagiri mountain ranges, making this one of the most scenic drives in Nepal.",
          "Upon arrival in Muktinath, complete the hotel check-in formalities and relax after the day's journey.",
          "Enjoy a delicious dinner and an overnight stay at Muktinath."
        ],
        "timing": "Full Day",
        "nightstay": "Muktinath",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 11,
        "title": "Muktinath to Kathmandu",
        "city": "Kathmandu",
        "points": [
          "Wake up early and visit the sacred Muktinath Temple, one of Nepal's most revered pilgrimage sites for both Hindus and Buddhists. After seeking blessings and exploring the temple परिसर, return to the hotel for breakfast.",
          "Later, check out and begin your scenic journey towards Kathmandu. Travel through the spectacular Kali Gandaki Valley, passing beautiful mountain landscapes, traditional villages, rivers, and lush green hills as you descend from the Himalayas to Nepal's vibrant capital.",
          "Upon arrival in Kathmandu, complete the hotel check-in formalities and spend the evening at leisure exploring the nearby markets or relaxing after the long journey.",
          "Enjoy a delicious dinner and an overnight stay in Kathmandu."
        ],
        "timing": "Full Day",
        "nightstay": "Kathmandu",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 12,
        "title": "Kathmandu Sightseeing",
        "city": "Kathmandu",
        "points": [
          "After breakfast, embark on a full-day sightseeing tour of Nepal's vibrant capital city. Visit the sacred Pashupatinath Temple, one of the holiest Shiva temples in the world, followed by the magnificent Boudhanath Stupa, one of the largest Buddhist stupas in Asia. Continue to the iconic Swayambhunath Stupa (Monkey Temple), offering panoramic views of Kathmandu Valley, and explore the historic Kathmandu Durbar Square, renowned for its ancient palaces, temples, and traditional Newari architecture.",
          "In the evening, experience the lively atmosphere of Thamel, Kathmandu's most popular tourist district. Stroll through its colorful streets filled with cafés, restaurants, live music venues, souvenir shops, and local markets. Guests may enjoy the nightlife, local cuisine, or shop for trekking gear and handicrafts at their own pace.",
          "Dinner is not included today, allowing guests the flexibility to explore Kathmandu's famous cafés and restaurants at their own expense.",
          "Return to the hotel for an overnight stay in Kathmandu."
        ],
        "timing": "Full Day",
        "nightstay": "Kathmandu",
        "meals": [
          "Breakfast"
        ]
      },
      {
        "day": 13,
        "title": "Kathmandu to Gorakhpur",
        "city": "India",
        "points": [
          "After an early breakfast, check out from the hotel and begin your return journey towards the Sonauli India–Nepal Border. Complete the immigration formalities before entering India and continue the drive to Gorakhpur.",
          "Upon arrival in Gorakhpur, check in to the hotel and relax after the long journey. Spend the evening at leisure before preparing for your return train journey the following morning."
        ],
        "timing": "Full Day",
        "nightstay": "",
        "meals": [
          "Breakfast"
        ]
      },
      {
        "day": 14,
        "title": "Gorakhpur to Mumbai",
        "city": "India",
        "points": [
          "Arrive at Gorakhpur Railway Station between 2:00 AM and 4:00 AM. After a short break at the station, board the GKP–LTT Express departing at 5:45 AM for your return journey to Mumbai.",
          "Spend the day relaxing onboard the train while cherishing the unforgettable memories of the Annapurna Base Camp Trek, Muktinath Darshan, and your incredible Nepal adventure.",
          "Overnight journey on the train."
        ],
        "timing": "Full Day",
        "nightstay": "Train",
        "meals": []
      },
      {
        "day": 15,
        "title": "Mumbai Arrival",
        "city": "Mumbai",
        "points": [
          "Arrive at Lokmanya Tilak Terminus (LTT), Mumbai at approximately 5:30 PM.",
          "Your tour concludes with unforgettable memories of the majestic Himalayas, the successful Annapurna Base Camp Trek, the divine blessings of Muktinath, and the cultural experiences of Nepal. We look forward to welcoming you on another adventure with 2XBT – Building Boyz Tours & Travels."
        ],
        "timing": "Full Day",
        "nightstay": "Mumbai",
        "meals": []
      }
    ]
  },
  {
    "slug": "kochi-coimbatore-12d11n",
    "name": "Kochi - Coimbatore 12D/11N",
    "heading": "Kerala & Tamil Nadu 12-Day Adventure",
    "code": "KERALA-KANYA",
    "category": "kerala",
    "days": 12,
    "nights": 11,
    "price": 35000,
    "originalPrice": 40000,
    "intro": [
      "Embark on a captivating 12-day journey through Kerala and Tamil Nadu, immersing yourself in the region's rich culture, stunning landscapes, and historical landmarks. This tour offers a diverse experience, from the serene backwaters of Alleppey to the vibrant temples of Madurai and the spiritual significance of Kanyakumari. Discover the beauty of Munnar's tea plantations, the wildlife of Periyar, and the historical sites of Tamil Nadu."
    ],
    "highlights": [
      "Explore Kerala's backwaters, witness Kanyakumari's sunrise, delve into Tamil Nadu's temples and culture, experience wildlife in Periyar, and enjoy diverse landscapes."
    ],
    "travellers": "Couples / Families",
    "image": "/images/tours/trivandrum-madurai-5d4n.webp",
    "pricing": [
      {
        "label": "Triple Sharing",
        "price": 35000
      },
      {
        "label": "Double Sharing",
        "price": 38000
      }
    ],
    "inclusions": [
      "1 Night Alleppey Houseboat Stay",
      "10 Nights Hotel Stay",
      "Lunch Included during Houseboat Stay",
      "11 Breakfasts & 11 Dinners",
      "Sightseeing & Transfers by AC Bus or Tempo Traveller (as per group size)",
      "Driver Allowance, Toll Tax, Parking Charges & Fuel",
      "All Transfers as per the Itinerary"
    ],
    "exclusions": [
      "5% GST",
      "Entry fees to monuments, parks, museums, temples and sightseeing attractions",
      "Adventure activities and optional experiences (boating, safari, elephant ride, cultural shows, cable car, etc.)",
      "Train/Flight fare",
      "Lunch (except Houseboat Lunch) and any meals not mentioned in the inclusions",
      "Personal expenses such as shopping, tips, laundry, phone calls, room service and beverages",
      "Camera and video camera charges (where applicable)",
      "Travel Insurance",
      "Additional sightseeing or vehicle usage not mentioned in the itinerary",
      "Expenses due to natural calamities, roadblocks, landslides, weather conditions, strikes, political disturbances or any unforeseen circumstances",
      "Anything not specifically mentioned under \"Package Includes\""
    ],
    "support": [],
    "accommodation": "10 Nights in comfortable hotels, 1 Night on a traditional Kerala houseboat.",
    "meals": "Breakfast, Dinner included. Lunch during houseboat stay.",
    "notes": "This itinerary is subject to change based on weather conditions and unforeseen circumstances. The Dhanushkodi visit is subject to time and weather conditions. Optional activities are available at an additional cost. Please note that the driver allowance is for local transportation and does not include personal expenses.",
    "paymentKey": "payment-4",
    "cancellationKey": "cancel-2",
    "faqKey": "faq-4",
    "itinerary": [
      {
        "day": 1,
        "title": "Kochi Arrival & Local Sightseeing",
        "city": "Kochi",
        "points": [
          "Arrive at Kochi, the gateway to Kerala, where our representative/driver will welcome you and assist you with your transfer. After meeting the team, proceed for local sightseeing and explore some of the city's most famous attractions.",
          "Visit the historic Fort Kochi area, known for its colonial architecture, charming streets, and cultural heritage. Explore the iconic Chinese Fishing Nets, followed by a visit to St. Francis Church and the historic Santa Cruz Basilica.",
          "Later, visit Mattancherry Palace (Dutch Palace) and explore the nearby Jew Town and Paradesi Synagogue, subject to opening hours.",
          "In the evening, enjoy some free time at Marine Drive or explore the local markets and waterfront areas.",
          "After completing the sightseeing, proceed to your hotel and check in. Relax and prepare for the upcoming Kerala journey."
        ],
        "timing": "Full Day",
        "nightstay": "Kochi",
        "meals": [
          "Dinner"
        ]
      },
      {
        "day": 2,
        "title": "Kochi to Munnar",
        "city": "Munnar",
        "points": [
          "Start your day with breakfast at the hotel before checking out and beginning your scenic journey from Kochi to Munnar, one of Kerala’s most beautiful hill stations.",
          "Drive through the lush green countryside of Kerala, passing through picturesque villages, coconut plantations, spice plantations, valleys, and the winding roads of the Western Ghats. The route offers spectacular views of the surrounding mountains and dense greenery.",
          "En route, visit the beautiful Cheeyappara Waterfalls and Valara Waterfalls, where you can take a short break and enjoy the natural surroundings, subject to weather and local conditions.",
          "Continue your journey towards Munnar, passing through the famous tea plantations that cover the hillsides. Stop at suitable viewpoints along the way for photography and to enjoy the breathtaking scenery.",
          "Upon arrival in Munnar, check in to your hotel and relax. Spend the evening at leisure, exploring the nearby surroundings or enjoying the peaceful mountain atmosphere."
        ],
        "timing": "Full Day",
        "nightstay": "Munnar",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 3,
        "title": "Munnar Sightseeing",
        "city": "Munnar",
        "points": [
          "Start your day with breakfast before heading out for a full-day sightseeing tour of Munnar, surrounded by rolling hills, tea plantations, forests, and beautiful lakes.",
          "Visit Mattupetty Dam, a popular scenic attraction offering beautiful views of the surrounding mountains and lake. Continue towards Echo Point, known for its natural echo phenomenon and peaceful surroundings.",
          "Later, visit Kundala Lake and Kundala Dam, surrounded by lush green hills and tea plantations. Enjoy some time taking photographs and appreciating the natural beauty of the region.",
          "You may also visit the Tea Museum, where you can learn about the history and traditional methods of tea production in Munnar, subject to opening hours.",
          "After completing the sightseeing, return to the hotel and spend the evening at leisure. You can explore the local market or simply relax at the property."
        ],
        "timing": "Full Day",
        "nightstay": "Munnar",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 4,
        "title": "Munnar to Thekkady",
        "city": "Thekkady",
        "points": [
          "Start your day with breakfast before checking out from your hotel and proceeding towards Thekkady, one of Kerala’s most famous destinations for wildlife, forests, and spice plantations.",
          "Enjoy a scenic drive through the Western Ghats, passing through winding mountain roads, dense greenery, spice plantations, and beautiful countryside.",
          "Upon arrival in Thekkady, check in to your hotel and relax.",
          "Later, you can explore the local market and shop for Kerala’s famous spices, tea, coffee, handmade products, and other souvenirs.",
          "Guests can also opt for activities such as Periyar Lake boating, spice plantation visits, Kathakali performances, or Kalaripayattu shows, subject to availability and additional charges.",
          "Return to the hotel after the evening activities."
        ],
        "timing": "Full Day",
        "nightstay": "Thekkady",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 5,
        "title": "Thekkady to Alleppey",
        "city": "Alleppey",
        "points": [
          "Start your day with breakfast before checking out and beginning your journey towards Alleppey, famously known as the Venice of the East and renowned for its beautiful backwaters.",
          "Drive through the scenic Kerala countryside, passing lush paddy fields, coconut plantations, villages, and waterways.",
          "Upon arrival in Alleppey, board your houseboat and enjoy a welcome drink before completing the check-in formalities. Enjoy a delicious lunch on board as the houseboat cruises through the serene backwaters.",
          "Relax while enjoying views of traditional villages, coconut trees, paddy fields, and local life along the waterways. Later, witness the beautiful sunset over the backwaters and enjoy the peaceful surroundings."
        ],
        "timing": "Full Day",
        "nightstay": "Alleppey Houseboat",
        "meals": [
          "Breakfast",
          "Lunch",
          "Dinner"
        ]
      },
      {
        "day": 6,
        "title": "Alleppey → Jatayu Earth Center → Varkala → Kovalam",
        "city": "Kovalam",
        "points": [
          "Start your day with breakfast before checking out from the houseboat and proceeding towards Jatayu Earth’s Center, one of Kerala’s unique attractions.",
          "Upon arrival, explore the magnificent Jatayu sculpture, one of the largest bird sculptures in the world, and enjoy the surrounding natural landscapes. The attraction is also associated with the legendary story of Jatayu from the Ramayana.",
          "After completing your visit, continue towards Varkala, a beautiful coastal destination famous for its dramatic cliffs overlooking the Arabian Sea. Visit Varkala Beach and Varkala Cliff, where you can enjoy the sea views, explore the local shops, and spend some relaxing time by the coast.",
          "If time permits, enjoy the sunset at Varkala Beach. After sunset, proceed towards Kovalam and check in to your hotel."
        ],
        "timing": "Full Day",
        "nightstay": "Kovalam",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 7,
        "title": "Kovalam Sightseeing",
        "city": "Kovalam",
        "points": [
          "Start your day with a delicious breakfast at the hotel before heading out for Kovalam sightseeing. Visit Lighthouse Beach, Hawa Beach, and Samudra Beach, and enjoy the beautiful coastal views and leisure time by the Arabian Sea.",
          "After completing the sightseeing, return to the hotel and freshen up. Get ready for the evening temple visit and change into traditional attire — Mundu/Dhoti for Boys and Saree/Salwar Suit for Girls, as per the temple dress requirements.",
          "Later, proceed towards Thiruvananthapuram for an evening visit to the revered Sree Padmanabhaswamy Temple. Attend the darshan during the available evening temple timings, subject to entry regulations and crowd conditions.",
          "After darshan, return to Kovalam and relax at the hotel."
        ],
        "timing": "Full Day",
        "nightstay": "Kovalam",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 8,
        "title": "Kovalam to Kanyakumari",
        "city": "Kanyakumari",
        "points": [
          "Start your day with breakfast before checking out from the hotel and beginning your journey towards Kanyakumari, the southernmost point of mainland India.",
          "Enjoy the scenic drive through the coastal landscapes and beautiful villages of South India. Upon arrival in Kanyakumari, check in to your hotel and freshen up.",
          "Later, proceed for sightseeing and visit the famous Vivekananda Rock Memorial, located on a rocky island surrounded by the sea. Also visit the Thiruvalluvar Statue and Kanyakumari Beach, where the Arabian Sea, Bay of Bengal, and Indian Ocean meet.",
          "In the evening, enjoy the spectacular sunset at Kanyakumari, subject to weather conditions. Spend some time exploring the local market before returning to the hotel."
        ],
        "timing": "Full Day",
        "nightstay": "Kanyakumari",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 9,
        "title": "Kanyakumari to Rameswaram",
        "city": "Rameswaram",
        "points": [
          "Start your day with breakfast before checking out from the hotel and proceeding towards the sacred town of Rameshwaram, one of the most important pilgrimage destinations in South India.",
          "Enjoy the scenic journey through Tamil Nadu’s countryside and coastal landscapes. Upon reaching Rameshwaram, proceed directly towards Dhanushkodi, the legendary ghost town located at the eastern tip of Rameshwaram Island.",
          "Explore the beautiful and dramatic landscapes of Dhanushkodi, including Dhanushkodi Beach, the meeting point of the sea, and the historic ruins of the old town, subject to road and weather conditions.",
          "After completing the sightseeing, proceed to your hotel in Rameshwaram and check in. Spend the evening relaxing at the hotel."
        ],
        "timing": "Full Day",
        "nightstay": "Rameswaram",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 10,
        "title": "Rameswaram to Madurai",
        "city": "Madurai",
        "points": [
          "Start your day early in the morning and get ready for the sacred Ramanathaswamy Temple Darshan. As the temple follows a traditional dress code, traditional attire is compulsory for temple entry. Boys should wear Dhoti/Mundu with an appropriate upper garment, while Girls should wear Saree, Salwar Suit, or other permitted traditional attire.",
          "Proceed to the temple for the early morning darshan and experience the spiritual atmosphere of one of India’s most revered pilgrimage sites and one of the 12 Jyotirlingas. The temple is also famous for its magnificent corridors, intricately carved pillars, and sacred 22 Theerthams (holy water wells).",
          "After completing the darshan, return to the hotel for breakfast and freshen up. Later, check out and begin your journey towards Madurai.",
          "Upon arrival in Madurai, proceed for sightseeing and visit the magnificent Meenakshi Amman Temple, renowned for its grand gopurams, intricate sculptures, and rich spiritual heritage. Also explore the surrounding Puthu Mandapam and local markets, famous for traditional handicrafts, textiles, and local products.",
          "If time permits, visit Thirumalai Nayakkar Palace, known for its impressive architecture and historic significance.",
          "After completing the sightseeing, check in to your hotel and relax."
        ],
        "timing": "Full Day",
        "nightstay": "Madurai",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 11,
        "title": "Madurai to Coimbatore",
        "city": "Coimbatore",
        "points": [
          "Start your day with breakfast at the hotel before checking out and beginning your journey towards Coimbatore, known as the gateway to the beautiful Western Ghats.",
          "Enjoy the scenic drive through the Tamil Nadu countryside, passing through villages, farmlands, and lush green landscapes. Upon arrival in Coimbatore, check in to your hotel and freshen up.",
          "Later, proceed for Coimbatore sightseeing. Visit the magnificent Adiyogi Shiva Statue at Isha Yoga Center, surrounded by the scenic Velliangiri Hills. Spend some peaceful time exploring the surroundings and enjoying the spiritual atmosphere.",
          "Later, visit Marudamalai Temple, a popular hilltop temple dedicated to Lord Murugan, subject to available time and temple timings.",
          "In the evening, explore the local markets of Coimbatore or enjoy some leisure time at the hotel.",
          "Return to the hotel and relax after the day’s journey and sightseeing."
        ],
        "timing": "Full Day",
        "nightstay": "Coimbatore",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 12,
        "title": "Coimbatore Departure",
        "city": "Coimbatore",
        "points": [
          "Start your final day with breakfast at the hotel before checking out and completing the necessary departure formalities.",
          "Depending on your departure schedule, enjoy some free time for local shopping or explore nearby areas of Coimbatore. You can shop for traditional South Indian products, spices, handicrafts, textiles, and local souvenirs.",
          "Later, proceed towards Coimbatore Railway Station / Airport as per your departure schedule.",
          "Take home beautiful memories of your journey through Kerala & Tamil Nadu, covering scenic hill stations, tea plantations, peaceful backwaters, beautiful beaches, sacred temples, cultural heritage, and the spiritual destinations of South India.",
          "Tour Ends with Happy Memories."
        ],
        "timing": "Morning",
        "nightstay": "",
        "meals": [
          "Breakfast"
        ]
      }
    ]
  },
  {
    "slug": "ladakh-kashmir-adventure-9d8n",
    "name": "Ladakh & Kashmir Adventure 9D/8N",
    "heading": "9-Day Ladakh & Kashmir Tour",
    "code": "LADAKH-KASHM",
    "category": "himalaya",
    "days": 9,
    "nights": 8,
    "price": 35000,
    "originalPrice": 45000,
    "intro": [
      "Embark on an unforgettable 9-day adventure through the breathtaking landscapes of Ladakh and Kashmir. This tour combines thrilling motorcycling experiences with cultural immersion, showcasing the region's stunning beauty and rich heritage."
    ],
    "highlights": [
      "Scenic Volvo Journey from Delhi to Manali 🏍️ Bike & Riding Gear Allocation in Manali ⛰️ Ride Through Atal Tunnel 🐪 Camel Safari at Hunder Sand Dunes 🏞️ Visit Turtuk & Thang Excursion 🧲 Experience Magnetic Hill & Indus–Zanskar Sangam ⛰️ Cross Zoji La Pass 🌿 Explore Sonmarg Meadows"
    ],
    "travellers": "Adventure Seekers",
    "image": "/images/tours/ladakh-kashmir-adventure-9d8n.webp",
    "pricing": [
      {
        "label": "Dual Rider",
        "price": 35000
      },
      {
        "label": "Solo Rider",
        "price": 40000
      },
      {
        "label": "SIC",
        "price": 35000
      }
    ],
    "inclusions": [
      "Accommodation (Hotel / Camps / Houseboat) 🏨",
      "Meals (Breakfast & Dinner) 🍽️",
      "Bike & Fuel (Royal Enfield / Himalayan)",
      "Leh & Srinagar local sightseeing by Innova / Tempo Traveller 🚐",
      "Backup vehicle",
      "Experienced road captain 🧭",
      "Mechanic support 🔧",
      "Riding gear (Helmet, jackets, knee Pad) 🧥",
      "Inner line permits & required permissions 📄",
      "Oxygen cylinder & basic first aid 🩺",
      "Airport pickup & drop (Leh & Srinagar) ✈️"
    ],
    "exclusions": [
      "Airfare / Train Tickets ✈️🚆",
      "Lunch and any meals not explicitly included 🍽️",
      "Personal Expenses (shopping, tips, laundry, etc.) 🛍️",
      "Entry Fees, Camera Charges, and Activity Charges 🎟️",
      "Any type of insurance (travel / medical) 🩺",
      "Bike Damage Charges (if any) 🔧",
      "Fuel for personal use beyond the itinerary ⛽",
      "Room Heater Charges (if applicable) 🔥",
      "Extra Stay or Transport due to Weather or Road Blockages ⚠️",
      "Anything not mentioned in the “Includes” section"
    ],
    "support": [
      "Dedicated support team available",
      "Emergency assistance provided",
      "Local guides for seamless travel"
    ],
    "accommodation": "Comfortable hotels throughout the tour.",
    "meals": "Breakfast included daily. Other meals as per itinerary.",
    "notes": "Package includes a scenic Volvo journey from Delhi to Manali. The tour focuses on motorcycling and sightseeing in Ladakh and Kashmir. SIC (Seat-in-Car) option is available. The itinerary includes Turtuk and Pangong Lake excursions. Camel safari at Hunder is included. The tour covers key attractions like Magnetic Hill, Indus-Zanskar Sangam, Zoji La Pass, and Sonmarg Meadows.",
    "paymentKey": "payment-2",
    "cancellationKey": "cancel-2",
    "faqKey": "faq-2",
    "itinerary": [
      {
        "day": 1,
        "title": "Srinagar Arrival",
        "city": "Srinagar",
        "points": [
          "Arrival at Srinagar Airport and transfer to hotel.",
          "Check-in and relax.",
          "Evening at leisure to explore Dal Lake.",
          "Traditional Kashmiri dinner."
        ],
        "timing": "Flexible",
        "nightstay": "Srinagar",
        "meals": [
          "Dinner"
        ]
      },
      {
        "day": 2,
        "title": "Srinagar to Kargil",
        "city": "Kargil",
        "points": [
          "Drive from Srinagar to Kargil, passing through scenic landscapes.",
          "Visit War Memorial at Dras.",
          "Explore local markets in Kargil."
        ],
        "timing": "Full Day",
        "nightstay": "Kargil",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 3,
        "title": "Kargil to Leh",
        "city": "Leh",
        "points": [
          "Drive from Kargil to Leh, crossing Zoji La Pass.",
          "Enjoy breathtaking views of the Himalayas.",
          "Check-in to hotel in Leh."
        ],
        "timing": "Full Day",
        "nightstay": "Leh",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 4,
        "title": "Leh to Nubra",
        "city": "Nubra Valley",
        "points": [
          "Drive to Nubra Valley via Khardung La (one of the highest motorable passes).",
          "Visit Diskit Monastery and enjoy sandboarding.",
          "Explore Hunder sand dunes and experience a camel safari."
        ],
        "timing": "Full Day",
        "nightstay": "Nubra Valley",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 5,
        "title": "Turtuk Sightseeing",
        "city": "Leh",
        "points": [
          "Drive to Turtuk, the last village before the Line of Control.",
          "Explore the unique Balti culture and architecture.",
          "Visit the Turtuk Monastery."
        ],
        "timing": "Full Day",
        "nightstay": "Leh",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 6,
        "title": "Turtuk To Pangong",
        "city": "Pangong Lake",
        "points": [
          "Drive from Turtuk to Pangong Lake.",
          "Enjoy scenic views of the Changthang plateau.",
          "Visit Pangong Lake, known for its stunning blue waters."
        ],
        "timing": "Full Day",
        "nightstay": "Pangong Lake",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 7,
        "title": "Pangong to Leh",
        "city": "Leh",
        "points": [
          "Drive back to Leh from Pangong Lake.",
          "Enjoy scenic views along the way.",
          "Check-in to hotel in Leh."
        ],
        "timing": "Full Day",
        "nightstay": "Leh",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 8,
        "title": "Leh Departure",
        "city": "Leh",
        "points": [
          "Free time for shopping or sightseeing in Leh.",
          "Transfer to Leh Airport for departure."
        ],
        "timing": "Flexible",
        "nightstay": "N/A",
        "meals": [
          "Breakfast"
        ]
      }
    ]
  },
  {
    "slug": "ladakh-kashmir-explorer-9d8n",
    "name": "Ladakh & Kashmir Explorer 9D/8N",
    "heading": "9-Day Ladakh & Kashmir Adventure",
    "code": "LADAKH-KASHM-2",
    "category": "himalaya",
    "days": 9,
    "nights": 8,
    "price": 35000,
    "originalPrice": 45000,
    "intro": [
      "Discover the breathtaking beauty of Ladakh and Kashmir on this 9-day journey. Traverse the rugged terrain of Ladakh, visit remote villages like Turtuk, and marvel at the turquoise waters of Pangong Lake. Then, journey to Srinagar, explore the Dal Lake, and immerse yourself in the rich culture of Kashmir. This package offers a perfect blend of adventure and cultural immersion."
    ],
    "highlights": [
      "Explore the majestic Himalayas, witness stunning landscapes, experience unique cultures, and embark on thrilling adventures in Ladakh and Kashmir."
    ],
    "travellers": "Adventure Seekers & Culture Enthusiasts",
    "image": "/images/tours/ladakh-kashmir-explorer-9d8n.webp",
    "pricing": [
      {
        "label": "Dual Rider",
        "price": 35000
      },
      {
        "label": "Solo Rider",
        "price": 40000
      },
      {
        "label": "SIC",
        "price": 35000
      }
    ],
    "inclusions": [
      "Accommodation: (Hotel / Camps / Houseboat) 🏨",
      "Meals: Breakfast & Dinner 🍽️",
      "Transportation: Bike & Fuel (Royal Enfield / Himalayan)",
      "Sightseeing: Leh & Srinagar local sightseeing by Innova / Tempo Traveller 🚐",
      "Support Services: Backup vehicle",
      "Experienced road captain 🧭",
      "Mechanic support 🔧",
      "Equipment: Riding gear (Helmet, jackets, knee pad) 🧥",
      "Permits & Permissions: Inner line permits & required permissions 📄",
      "Safety Equipment: Oxygen cylinder & basic first aid 🩺",
      "Airport Transfers: Airport pickup & drop (Leh & Srinagar) ✈️"
    ],
    "exclusions": [
      "Airfare / Train tickets ✈️🚆",
      "Lunch & any meals not mentioned 🍽️",
      "Personal expenses (shopping, tips, laundry, etc.) 🛍️",
      "Entry fees, camera charges & activity charges 🎟️",
      "Any type of insurance (travel / medical) 🩺",
      "Bike damage charges (if any) 🔧",
      "Fuel for personal use beyond itinerary ⛽",
      "Room heater charges (if applicable) 🔥",
      "Extra stay / transport due to weather or road blockage ⚠️",
      "Anything not mentioned in “Includes”"
    ],
    "support": [
      "Dedicated tour manager",
      "Emergency assistance available",
      "Local guides"
    ],
    "accommodation": "Standard hotels and guesthouses throughout the tour.",
    "meals": "Breakfast included daily. Lunch and dinner at own expense.",
    "notes": "Package price is per person and based on double occupancy. Packing cost is included. Prices may vary depending on season and availability.",
    "paymentKey": "payment-2",
    "cancellationKey": "cancel-2",
    "faqKey": "faq-2",
    "itinerary": [
      {
        "day": 1,
        "title": "Leh Arrival",
        "city": "Leh",
        "points": [
          "Arrival at Leh Airport",
          "Transfer to hotel",
          "Rest and acclimatization",
          "Leisure time in Leh"
        ],
        "timing": "Flexible",
        "nightstay": "Leh",
        "meals": [
          "Dinner"
        ]
      },
      {
        "day": 2,
        "title": "Leh to Nubra",
        "city": "Nubra Valley",
        "points": [
          "Drive to Nubra Valley via Khardung La Pass (one of the highest motorable passes in the world)",
          "Visit Diskit Monastery",
          "Experience double-humped Bactrian camels in Hunder"
        ],
        "timing": "Full Day",
        "nightstay": "Nubra Valley",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 3,
        "title": "Turtuk Village",
        "city": "Nubra Valley",
        "points": [
          "Visit Turtuk Village, the last village before the Line of Control",
          "Explore the unique Balti culture",
          "Experience the local way of life"
        ],
        "timing": "Full Day",
        "nightstay": "Nubra Valley",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 4,
        "title": "Nubra to Pangong",
        "city": "Pangong Lake",
        "points": [
          "Drive from Nubra Valley to Pangong Lake",
          "Visit Chang La Pass",
          "Enjoy the stunning views of Pangong Lake"
        ],
        "timing": "Full Day",
        "nightstay": "Pangong Lake",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 5,
        "title": "Pangong to Leh",
        "city": "Leh",
        "points": [
          "Drive back to Leh from Pangong Lake",
          "Enjoy the scenic views along the way"
        ],
        "timing": "Full Day",
        "nightstay": "Leh",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 6,
        "title": "Leh to Kargil",
        "city": "Kargil",
        "points": [
          "Drive to Kargil",
          "Visit War Memorial",
          "Explore local markets"
        ],
        "timing": "Full Day",
        "nightstay": "Kargil",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 7,
        "title": "Kargil to Srinagar",
        "city": "Srinagar",
        "points": [
          "Drive to Srinagar",
          "Visit Zoji La Pass",
          "Enjoy the scenic beauty of the Kashmir Valley"
        ],
        "timing": "Full Day",
        "nightstay": "Srinagar",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 8,
        "title": "Srinagar Local",
        "city": "Srinagar",
        "points": [
          "Visit Dal Lake",
          "Explore Mughal Gardens",
          "Shopping in local markets"
        ],
        "timing": "Full Day",
        "nightstay": "Srinagar",
        "meals": [
          "Breakfast",
          "Dinner"
        ]
      },
      {
        "day": 9,
        "title": "Srinagar Departure",
        "city": "Srinagar",
        "points": [
          "Transfer to Srinagar Airport for departure"
        ],
        "timing": "Morning",
        "nightstay": "",
        "meals": [
          "Breakfast"
        ]
      }
    ]
  }
];

export const categories: { id: Category; label: string; blurb: string }[] = [
  { id: "yatra", label: "Yatra & Pilgrimage", blurb: "Char Dham, Kedarnath, Jyotirlingas and the temple trails of the south." },
  { id: "himalaya", label: "Himalaya & Nepal", blurb: "Ladakh, Kashmir, Himachal and the Annapurna base camp trail." },
  { id: "kerala", label: "Kerala & South", blurb: "Munnar hills, Thekkady forests, Alleppey backwaters and Kovalam sand." },
  { id: "islands", label: "Islands", blurb: "Port Blair, Havelock and Neil — reefs, ferries and white sand." },
  { id: "trek", label: "Treks & Weekends", blurb: "Sahyadri forts, jungle trails and short escapes out of Mumbai." },
];

export function packageBySlug(slug: string) {
  return packages.find((p) => p.slug === slug);
}

export const durationOf = (p: Package) => `${p.days}D / ${p.nights}N`;

export const inr = (n: number) => `₹${n.toLocaleString("en-IN")}`;
