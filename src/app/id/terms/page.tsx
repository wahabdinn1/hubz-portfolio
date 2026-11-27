import type { Metadata } from "next";
import { LegalDocumentPage } from "@/components/legal-document-page";
import { LEGAL_CONTENT } from "@/content/legal";

export const metadata: Metadata = {
  title: LEGAL_CONTENT.id.terms.title,
  description: LEGAL_CONTENT.id.terms.metaDescription,
  alternates: {
    canonical: "/id/terms",
    languages: {
      en: "/terms",
      id: "/id/terms",
    },
  },
};

export default function IndonesianTermsPage() {
  return <LegalDocumentPage locale="id" doc="terms" />;
}
