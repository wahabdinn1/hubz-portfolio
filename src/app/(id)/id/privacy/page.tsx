import type { Metadata } from "next";
import { LegalDocumentPage } from "@/components/legal-document-page";
import { LEGAL_CONTENT } from "@/content/legal";

export const metadata: Metadata = {
  title: LEGAL_CONTENT.id.privacy.title,
  description: LEGAL_CONTENT.id.privacy.metaDescription,
  alternates: {
    canonical: "/id/privacy",
    languages: {
      en: "/privacy",
      id: "/id/privacy",
    },
  },
};

export default function IndonesianPrivacyPage() {
  return <LegalDocumentPage locale="id" doc="privacy" />;
}
