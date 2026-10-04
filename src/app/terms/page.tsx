import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "The terms that govern bookings, payments, cancellations and liability for tours operated by 2XBT Building Boyz Tours & Travels.",
};

const sections = [
  {
    title: "1. Nature of services",
    body: [
      "The Enterprise acts as a tour operator and facilitator for travel related services including accommodation, transportation, sightseeing and activities, many of which are provided by independent third party vendors.",
    ],
  },
  {
    title: "2. Booking and acceptance",
    list: [
      "All bookings are subject to availability and confirmation.",
      "A booking is deemed confirmed only upon receipt of the prescribed advance or full payment.",
      "The Enterprise reserves the right to refuse any booking at its sole discretion.",
    ],
  },
  {
    title: "3. Pricing and payments",
    list: [
      "Prices quoted are subject to change due to factors such as fuel costs, taxes, vendor charges or government levies.",
      "Payments must be made strictly as per the communicated payment schedule.",
      "Delayed or incomplete payments may result in cancellation without further notice.",
    ],
  },
  {
    title: "4. Cancellation and refund policy",
    list: [
      "Cancellation policies vary depending on the package and third party vendor terms.",
      "Any cancellation charges imposed by hotels, transport providers or service partners are borne by the user.",
      "Refunds, if applicable, are processed within a reasonable timeframe after necessary deductions.",
    ],
  },
  {
    title: "5. Amendments and changes",
    body: [
      "The Enterprise reserves the right to alter itineraries, accommodation, transport or timing due to operational requirements, weather conditions, safety concerns or circumstances beyond its control.",
    ],
  },
  {
    title: "6. User obligations",
    body: [
      "Users must comply with all applicable laws, rules and regulations during the tour and maintain proper conduct. The Enterprise is not responsible for any loss arising from misconduct or negligence by the user.",
    ],
  },
  {
    title: "7. Health, safety and risk",
    body: [
      "Participation in adventure activities, water sports or physically demanding tours is entirely at the user's own risk. Users are advised to assess their health and fitness before participation.",
    ],
  },
  {
    title: "8. Limitation of liability",
    body: [
      "The Enterprise is not liable for any delays, cancellations, injuries, losses, damages, accidents, natural calamities, strikes, political disturbances, acts of terrorism or acts of God.",
    ],
  },
  {
    title: "9. Intellectual property",
    body: [
      "All website content including text, images, logos and designs is the intellectual property of the Enterprise and may not be used without prior written permission.",
    ],
  },
  {
    title: "10. Governing law and jurisdiction",
    body: [
      "These Terms are governed by and construed in accordance with the laws of India. Any disputes are subject to the exclusive jurisdiction of courts in India.",
    ],
  },
];

export default function TermsPage() {
  return (
    <article className="shell max-w-[70ch] py-14 md:py-20">
      <h1 className="font-display text-4xl font-semibold tracking-tight">
        Terms &amp; Conditions
      </h1>
      <p className="mt-4 text-[0.875rem]" style={{ color: "var(--ink-faint)" }}>
        Applies to {site.legalName} and every booking made with us.
      </p>

      <div className="prose-legal mt-10">
        <p>
          These Terms govern the relationship between 2XBT (Building Boyz Tours
          &amp; Travels) and the user. By accessing the website, making a
          booking or availing any service, the user agrees to be legally bound
          by these Terms.
        </p>

        {sections.map((s) => (
          <section key={s.title}>
            <h2>{s.title}</h2>
            {s.body?.map((p) => <p key={p}>{p}</p>)}
            {s.list ? (
              <ul>
                {s.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}

        <h2>Questions</h2>
        <p>
          Write to{" "}
          <a href={site.emailHref} style={{ color: "var(--accent)" }}>
            {site.email}
          </a>{" "}
          or call {site.phone}. Tour specific booking terms are also printed on
          each tour page.
        </p>
      </div>
    </article>
  );
}
