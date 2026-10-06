import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { termsSections } from "@/data/legal";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "The terms that govern bookings, payments, cancellations, travel documents and liability for tours operated by 2XBT.",
};

export default function TermsPage() {
  return (
    <LegalPage
      kind="Terms & Conditions"
      sections={termsSections}
      description="The terms that govern bookings, payments, cancellations, travel documents and liability for every trip we operate."
      image="/images/places/konark-puri.webp"
    />
  );
}
