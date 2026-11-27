import type { Metadata } from "next";
import { LegalDocumentPage } from "@/components/legal-document-page";
import { LEGAL_CONTENT } from "@/content/legal";

export const metadata: Metadata = {
  title: LEGAL_CONTENT.en.privacy.title,
  description: LEGAL_CONTENT.en.privacy.metaDescription,
  alternates: {
    canonical: "/privacy",
    languages: {
      en: "/privacy",
      id: "/id/privacy",
    },
  },
};

export default function PrivacyPage() {
  return <LegalDocumentPage locale="en" doc="privacy" />;
}
