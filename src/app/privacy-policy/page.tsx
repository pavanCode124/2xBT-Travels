import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How 2XBT Building Boyz Tours & Travels collects, uses, stores and protects the information you share with us.",
};

export default function PrivacyPolicyPage() {
  return (
    <article className="shell max-w-[70ch] py-14 md:py-20">
      <h1 className="font-display text-4xl font-semibold tracking-tight">Privacy Policy</h1>
      <p className="mt-4 text-[0.875rem]" style={{ color: "var(--ink-faint)" }}>
        Applies to {site.legalName} and every service we provide.
      </p>

      <div className="prose-legal mt-10">
        <p>
          This Privacy Policy governs the manner in which 2XBT (Building Boyz
          Tours &amp; Travels), a tours and travel service provider operating
          under the laws of India, referred to here as 2XBT, the Enterprise, we,
          us or our, collects, receives, stores, processes, uses, discloses,
          transfers and protects information obtained from users who access or
          use our website, mobile interfaces, booking platforms, social media
          pages, customer support channels or any other services offered by us.
        </p>
        <p>
          By accessing or using our website or Services, you expressly consent
          to the collection, use, storage and disclosure of your information in
          accordance with this Privacy Policy. If you do not agree with the
          terms of this Policy, you are advised to discontinue the use of our
          website and Services immediately.
        </p>

        <h2>1. Scope and applicability</h2>
        <p>
          This Privacy Policy applies to all users who browse the website, make
          enquiries, request quotations, make bookings, participate in tours or
          otherwise interact with the Enterprise in any manner, whether online
          or offline. It should be read together with our Terms &amp; Conditions
          and any other policies published on our website.
        </p>

        <h2>2. Information collected</h2>
        <p>The Enterprise may collect, process and retain the following categories of information:</p>
        <ul>
          <li>
            <strong>Personal information.</strong> Information that identifies or
            can reasonably be linked to an individual, including full name,
            contact number, email address, postal address, date of birth,
            gender, emergency contact details and nationality.
          </li>
          <li>
            <strong>Identification and verification information.</strong>{" "}
            Government issued identification details such as Aadhaar number,
            Voter ID, Driving Licence (Indian only), passport details, visa
            information or any other documents required by hotels, transport
            providers, airlines or government authorities for travel related
            compliance.
          </li>
          <li>
            <strong>Booking and travel information.</strong> Details relating to
            tour packages, destinations, travel dates, accommodation
            preferences, room sharing preferences, meal choices, special
            assistance requests and participation in adventure or water
            activities.
          </li>
          <li>
            <strong>Payment and transaction information.</strong> Payment status,
            transaction references, invoice details and payment mode. The
            Enterprise does not store full debit card, credit card or UPI
            credentials. All payments are processed through secure third party
            payment gateways.
          </li>
          <li>
            <strong>Technical and usage information.</strong> Information
            automatically collected when you access our website, including IP
            address, browser type, device identifiers, operating system,
            referring URLs, access times and pages visited.
          </li>
        </ul>

        <h2>3. Method of collection</h2>
        <p>
          Information may be collected directly from you through forms,
          enquiries, bookings, phone calls, emails, messaging applications or in
          person interactions, as well as indirectly through cookies, analytics
          tools and third party integrations.
        </p>

        <h2>4. Purpose of collection and use</h2>
        <p>The information collected is used for purposes including:</p>
        <ul>
          <li>Processing and managing bookings and reservations</li>
          <li>Providing travel related services and customer support</li>
          <li>Communicating confirmations, updates, itinerary changes and service notifications</li>
          <li>Complying with legal, regulatory and contractual obligations</li>
          <li>Improving website functionality, services and customer experience</li>
          <li>Preventing fraud, misuse or unauthorised access</li>
          <li>Internal record keeping, accounting and administrative purposes</li>
        </ul>

        <h2>5. Disclosure and sharing of information</h2>
        <p>The Enterprise may share your information strictly on a need to know basis with:</p>
        <ul>
          <li>Hotels, transport providers, airlines, guides and activity operators</li>
          <li>Payment gateway and banking partners</li>
          <li>Technology and IT service providers</li>
          <li>Government authorities, law enforcement agencies or regulatory bodies when required by law</li>
        </ul>
        <p>
          The Enterprise does not sell, trade or commercially exploit users&apos;
          personal information.
        </p>

        <h2>6. Data storage and retention</h2>
        <p>
          Personal information is retained only for as long as necessary to
          fulfil the purposes for which it was collected or as required under
          applicable laws. The Enterprise may retain certain information for
          legal, audit or dispute resolution purposes even after completion of
          the tour or service.
        </p>

        <h2>7. Data security measures</h2>
        <p>
          The Enterprise adopts reasonable administrative, technical and
          physical security measures to safeguard personal information against
          unauthorised access, alteration, disclosure or destruction. However,
          the Enterprise does not guarantee absolute security of information
          transmitted over the internet.
        </p>

        <h2>8. Cookies and tracking technologies</h2>
        <p>
          The website may use cookies and similar tracking technologies to
          enhance user experience, analyse website traffic and personalise
          content. Users may choose to disable cookies through browser settings,
          though certain website features may not function optimally.
        </p>

        <h2>9. User responsibilities</h2>
        <p>
          Users are responsible for ensuring that the information provided is
          accurate, complete and up to date.
        </p>

        <h2>10. Amendments to this policy</h2>
        <p>
          The Enterprise reserves the right to modify or update this Privacy
          Policy at any time without prior notice. Continued use of the website
          or Services following any changes constitutes acceptance of the
          revised Policy.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about this policy can go to{" "}
          <a href={site.emailHref} style={{ color: "var(--accent)" }}>
            {site.email}
          </a>{" "}
          or {site.phone}.
        </p>
      </div>
    </article>
  );
}
