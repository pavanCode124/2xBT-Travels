/**
 * Privacy Policy and Terms & Conditions as published for 2xBT at
 * tripzocrm.com/privacy-policy/2xbt and /terms-and-conditions/2xbt.
 * The source uses an {ORG} placeholder; it is substituted at render time
 * with the legal name from src/data/site.ts.
 */

export type LegalSection = {
  title: string;
  body?: string[];
  list?: string[];
  after?: string[];
};

export const legalEffectiveDate = "25 August 2026";

export const privacySections: LegalSection[] = [
  {
    title: "Privacy Policy",
    body: [
      "{ORG} (“{ORG}”, “we”, “us”, or “our”) respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, and protect information when you use our website, mobile application, travel services, social media pages, Meta applications, and other services provided by {ORG} (collectively, the “Services”).",
      "By using our Services, you acknowledge that you have read and understood this Privacy Policy.",
    ],
  },
  {
    title: "1. Information We Collect",
    body: ["Depending on how you use our Services, we may collect the following information:"],
    list: [
      "Your name, phone number, email address, and other contact information.",
      "Travel-related information, including destination, travel dates, passenger details, accommodation preferences, transportation requirements, and booking information.",
      "Information required to process bookings and payments.",
      "Account and login information when you create an account or use a third-party login service.",
      "Information you provide when contacting our customer support team.",
      "Device and technical information such as IP address, browser type, operating system, application version, and usage information.",
      "Information provided through Meta platforms when you choose to interact with or connect your Meta account to our Services.",
      "Any other information that you voluntarily provide to us.",
    ],
  },
  {
    title: "2. Information Received Through Meta",
    body: [
      "If you use our application or services through Facebook, Instagram, WhatsApp, or another Meta platform, we may receive information that you choose to provide or authorize Meta to share with us.",
      "Depending on the permissions you grant, this information may include your name, email address, profile information, user ID, and other information made available through the relevant Meta platform.",
      "We use information received from Meta only for legitimate purposes related to providing and improving our Services, including account creation, authentication, customer support, bookings, communication, and other functions you request.",
      "We do not sell personal information obtained through Meta platforms.",
    ],
  },
  {
    title: "3. How We Use Your Information",
    body: ["We may use your information to:"],
    list: [
      "Provide and manage travel bookings and services.",
      "Process payments and transactions.",
      "Communicate with you regarding bookings, payments, cancellations, changes, and customer support.",
      "Provide information about tours, travel packages, destinations, and related services.",
      "Verify your identity and maintain account security.",
      "Prevent fraud, unauthorized activity, and misuse of our Services.",
      "Improve our website, application, products, and services.",
      "Understand how users interact with our Services.",
      "Send promotional or marketing communications where permitted by applicable law.",
      "Comply with legal, regulatory, and governmental requirements.",
      "Protect the rights, property, and safety of {ORG}, our customers, employees, and other users.",
    ],
  },
  {
    title: "4. Sharing of Information",
    body: [
      "We may share your information with trusted third parties when necessary to provide our Services.",
      "These third parties may include:",
    ],
    list: [
      "Airlines and transportation providers.",
      "Hotels and accommodation providers.",
      "Tour operators and travel partners.",
      "Payment processors and financial service providers.",
      "Technology and hosting providers.",
      "Customer support and communication providers.",
      "Professional advisers and service providers.",
      "Government authorities or law-enforcement agencies when required by law.",
    ],
    after: [
      "We only share information where reasonably necessary for the relevant purpose or where required or permitted by applicable law.",
    ],
  },
  {
    title: "5. Payment Information",
    body: [
      "Payments may be processed through third-party payment providers.",
      "{ORG} may receive information such as payment status, transaction reference, amount, and other information required to confirm your transaction. Complete payment card or banking credentials may be processed directly by the relevant payment provider.",
      "Third-party payment providers may have their own privacy policies and terms.",
    ],
  },
  {
    title: "6. Data Security",
    body: [
      "We take reasonable technical, organizational, and administrative measures to protect your personal information against unauthorized access, misuse, loss, alteration, or disclosure.",
      "However, no method of electronic transmission or storage is completely secure, and we cannot guarantee absolute security of your information.",
    ],
  },
  {
    title: "7. Data Retention",
    body: [
      "We retain personal information for as long as reasonably necessary to provide our Services, maintain business and transaction records, resolve disputes, prevent fraud, enforce agreements, and comply with legal and regulatory obligations.",
      "When information is no longer required, we may securely delete or anonymize it in accordance with applicable requirements.",
    ],
  },
  {
    title: "8. Cookies and Similar Technologies",
    body: [
      "Our website and application may use cookies, analytics tools, software development kits, pixels, and similar technologies to:",
    ],
    list: [
      "Operate and secure our Services.",
      "Remember user preferences.",
      "Understand website and application usage.",
      "Improve performance and functionality.",
      "Analyze trends and usage.",
      "Support marketing activities where permitted.",
    ],
    after: ["You may be able to control certain cookies through your browser or device settings."],
  },
  {
    title: "9. Third-Party Services and Links",
    body: [
      "Our Services may contain links to or integrations with third-party websites, applications, payment services, social media platforms, airlines, hotels, and other service providers.",
      "Third-party services operate under their own terms and privacy policies. {ORG} is not responsible for the privacy practices or content of third-party services that are outside our control.",
    ],
  },
  {
    title: "10. Children’s Privacy",
    body: [
      "Our Services are not intentionally directed toward children who are below the minimum age permitted under applicable law to use the relevant service without parental or guardian consent.",
      "We do not knowingly collect personal information from children in violation of applicable law.",
    ],
  },
  {
    title: "11. Your Privacy Rights",
    body: ["Subject to applicable law, you may have the right to:"],
    list: [
      "Request access to your personal information.",
      "Request correction or updating of inaccurate information.",
      "Request deletion of certain personal information.",
      "Withdraw consent where processing is based on consent.",
      "Object to or restrict certain processing activities.",
      "Request information about how your personal information is used.",
    ],
    after: [
      "To exercise any applicable privacy rights, please contact {ORG} using the contact information provided below.",
      "We may request reasonable information to verify your identity before processing a privacy request.",
    ],
  },
  {
    title: "12. International Data Processing",
    body: [
      "Some of our service providers may process or store information outside your country of residence.",
      "Where required by applicable law, we will take reasonable steps to ensure appropriate safeguards are applied to such transfers.",
    ],
  },
  {
    title: "13. Changes to This Privacy Policy",
    body: [
      "{ORG} may update this Privacy Policy from time to time.",
      "Any updated Privacy Policy will be made available through our website, application, or other relevant Services. The updated policy will become effective when posted unless another effective date is specified.",
    ],
  },
  {
    title: "14. Contact Us",
    body: [
      "If you have questions, concerns, or requests regarding this Privacy Policy, please contact us using the details below.",
    ],
  },
];

export const termsSections: LegalSection[] = [
  {
    title: "Terms and Conditions",
    body: [
      "These Terms and Conditions (“Terms”) govern your use of the {ORG} website, mobile application, Meta application, booking platform, travel services, and related services (collectively, the “Services”).",
      "By accessing or using our Services or making a booking with {ORG}, you agree to these Terms and Conditions.",
    ],
  },
  {
    title: "1. About {ORG}",
    body: [
      "{ORG} provides travel-related services, which may include tours, travel packages, transportation arrangements, accommodation, sightseeing, ticketing, itinerary planning, and other travel-related services.",
      "Certain services may be provided by independent third-party suppliers, including airlines, hotels, transportation companies, tour operators, and other travel providers.",
    ],
  },
  {
    title: "2. Use of Our Services",
    body: [
      "You agree to use our Services only for lawful purposes.",
      "You must provide accurate and complete information when making a booking or using our Services.",
      "You are responsible for ensuring that the information you provide, including passenger names, dates, contact information, identification details, and travel requirements, is accurate.",
      "{ORG} is not responsible for problems caused by incorrect or incomplete information provided by a customer.",
    ],
  },
  {
    title: "3. Bookings",
    body: [
      "A booking request does not automatically guarantee confirmation.",
      "A booking will be considered confirmed only after the required payment or confirmation has been received and {ORG} has confirmed the booking.",
      "Availability, prices, schedules, and other booking details may change before confirmation.",
    ],
  },
  {
    title: "4. Pricing and Payment",
    body: [
      "Prices displayed or quoted by {ORG} may change until a booking is confirmed.",
      "The final price may include applicable taxes, service charges, supplier charges, transportation charges, government fees, or other applicable costs.",
      "Customers are responsible for making payments within the timeframe communicated by {ORG}.",
      "Failure to make the required payment within the specified period may result in cancellation of the booking.",
    ],
  },
  {
    title: "5. Cancellation and Refunds",
    body: [
      "Cancellation, amendment, refund, and rebooking conditions may vary depending on the specific service or supplier.",
      "Certain airline tickets, hotel bookings, tours, travel packages, or other services may be non-refundable or may carry cancellation charges.",
      "The cancellation and refund terms applicable to your specific booking will be communicated at the time of booking or will be governed by the applicable supplier’s terms.",
      "Where a refund is approved, processing time may depend on the relevant supplier or payment provider.",
    ],
  },
  {
    title: "6. Changes to Bookings",
    body: [
      "Customers may request changes to their bookings, subject to availability and applicable charges.",
      "Changes may result in additional fees, fare differences, supplier charges, or cancellation penalties.",
      "{ORG} will make reasonable efforts to assist customers with requested changes but cannot guarantee that changes will always be possible.",
    ],
  },
  {
    title: "7. Travel Documents",
    body: [
      "Customers are responsible for obtaining and maintaining all documents required for their travel.",
      "This may include:",
    ],
    list: [
      "Valid passports.",
      "Visas.",
      "Travel permits.",
      "Government identification.",
      "Entry permits.",
      "Health-related documents where required.",
      "Travel insurance.",
      "Other documents required by the destination or travel provider.",
    ],
    after: [
      "{ORG} may provide general travel information but does not guarantee approval of visas, permits, immigration clearance, or entry into any country.",
    ],
  },
  {
    title: "8. Flights, Hotels, and Third-Party Suppliers",
    body: [
      "Many travel services arranged through {ORG} are provided by independent third-party suppliers.",
      "These may include airlines, hotels, transportation companies, tour operators, activity providers, and other travel businesses.",
      "Third-party suppliers may have their own terms, conditions, cancellation policies, refund policies, and service restrictions.",
      "Customers may be required to comply with those terms in addition to these Terms and Conditions.",
    ],
  },
  {
    title: "9. Delays, Cancellations, and Changes by Suppliers",
    body: [
      "Travel services may be delayed, cancelled, rescheduled, overbooked, or changed by airlines, hotels, transportation providers, tour operators, government authorities, or other suppliers.",
      "{ORG} will make reasonable efforts to assist customers where possible.",
      "However, {ORG} cannot guarantee that a supplier will operate a service exactly according to the original itinerary.",
      "Any refunds or compensation resulting from supplier changes may be subject to the relevant supplier’s policies and applicable law.",
    ],
  },
  {
    title: "10. Force Majeure",
    body: [
      "{ORG} shall not be responsible for delays, cancellations, losses, or inability to provide services caused by circumstances beyond our reasonable control.",
      "Such circumstances may include:",
    ],
    list: [
      "Natural disasters.",
      "Severe weather.",
      "Pandemics or public-health emergencies.",
      "War or terrorism.",
      "Civil unrest.",
      "Strikes or labor disputes.",
      "Government restrictions.",
      "Border closures.",
      "Transportation disruptions.",
      "Technical failures.",
      "Airport or airline disruptions.",
      "Supplier failures.",
      "Other unforeseen circumstances beyond reasonable control.",
    ],
  },
  {
    title: "11. Customer Responsibilities",
    body: ["Customers agree to:"],
    list: [
      "Provide accurate information.",
      "Follow applicable laws and regulations.",
      "Follow airline, hotel, transportation, and tour-provider rules.",
      "Maintain valid travel documents.",
      "Arrive at airports, hotels, departure points, and other locations on time.",
      "Behave respectfully toward staff, suppliers, and other travelers.",
      "Avoid fraudulent, abusive, or unlawful use of our Services.",
    ],
    after: [
      "{ORG} may refuse or terminate services where necessary due to unlawful, fraudulent, abusive, or unsafe conduct, subject to applicable law.",
    ],
  },
  {
    title: "12. Travel Insurance",
    body: [
      "Customers are strongly encouraged to obtain appropriate travel insurance covering circumstances such as medical emergencies, trip cancellation, baggage loss, delays, and other travel-related risks.",
      "Unless expressly stated otherwise, travel insurance is not included in the services provided by {ORG}.",
    ],
  },
  {
    title: "13. Limitation of Liability",
    body: [
      "To the maximum extent permitted by applicable law, {ORG} shall not be responsible for indirect, incidental, special, consequential, or unforeseeable losses arising from the use of our Services or travel arrangements.",
      "{ORG}’s liability, where legally applicable, may be limited to the amount paid by the customer for the relevant service, subject to applicable law.",
      "Nothing in these Terms is intended to exclude or limit any liability that cannot legally be excluded or limited.",
    ],
  },
  {
    title: "14. Privacy",
    body: [
      "Your use of {ORG} Services is also governed by our Privacy Policy.",
      "Our Privacy Policy explains what personal information we collect, how we use it, how it may be shared, and how you can exercise applicable privacy rights.",
    ],
  },
  {
    title: "15. Meta Platforms",
    body: [
      "If you access or use {ORG} through Facebook, Instagram, WhatsApp, or another Meta platform, your use of that Meta platform may also be subject to Meta’s applicable terms, policies, and privacy practices.",
      "{ORG} is not affiliated with, endorsed by, or sponsored by Meta Platforms, Inc. unless expressly stated.",
    ],
  },
  {
    title: "16. Intellectual Property",
    body: [
      "All content made available through {ORG} Services, including logos, trademarks, text, graphics, photographs, designs, software, and other materials, belongs to {ORG} or its licensors unless otherwise stated.",
      "You may not reproduce, modify, distribute, sell, or commercially exploit our content without prior written permission.",
    ],
  },
  {
    title: "17. Suspension or Termination",
    body: [
      "{ORG} may suspend or terminate access to its Services where reasonably necessary, including in cases involving fraud, misuse, unlawful activity, security risks, violation of these Terms, or other circumstances permitted by applicable law.",
    ],
  },
  {
    title: "18. Governing Law",
    body: [
      "These Terms and Conditions shall be governed by the laws of India, subject to applicable mandatory consumer protection and other laws.",
      "Any dispute arising in connection with these Terms or the Services shall be subject to the jurisdiction of the courts or competent authorities having jurisdiction in India, where legally permitted.",
    ],
  },
  {
    title: "19. Changes to These Terms",
    body: [
      "{ORG} may update these Terms and Conditions from time to time.",
      "Updated Terms will be published through our website, application, or other relevant Services.",
      "Your continued use of the Services after the updated Terms become effective constitutes acceptance of the updated Terms, to the extent permitted by applicable law.",
    ],
  },
  {
    title: "20. Contact Us",
    body: ["For questions, support, complaints, or other inquiries, please contact us using the details below."],
  },
];
