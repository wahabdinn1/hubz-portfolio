import type { Metadata } from "next";
import { LegalDocumentPage } from "@/components/legal-document-page";
import { LEGAL_CONTENT } from "@/content/legal";

export const metadata: Metadata = {
  title: LEGAL_CONTENT.en.terms.title,
  description: LEGAL_CONTENT.en.terms.metaDescription,
  alternates: {
    canonical: "/terms",
    languages: {
      en: "/terms",
      id: "/id/terms",
    },
  },
};

export default function TermsPage() {
  return <LegalDocumentPage locale="en" doc="terms" />;
}
