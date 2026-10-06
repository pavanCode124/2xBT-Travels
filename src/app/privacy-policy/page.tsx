import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { privacySections } from "@/data/legal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How 2XBT collects, uses, stores and protects personal information across its website, booking platform and travel services.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      kind="Privacy Policy"
      sections={privacySections}
      description="How we collect, use, store and protect your information across our website, booking platform, Meta applications and travel services."
      image="/images/places/dal-lake.webp"
    />
  );
}
