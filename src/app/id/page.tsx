import type { Metadata } from "next";
import { PortfolioHome } from "@/components/portfolio-home";
import { SITE_CONTENT } from "@/content/site";

export const metadata: Metadata = {
  title: SITE_CONTENT.id.meta.homeTitle,
  description: SITE_CONTENT.id.meta.homeDescription,
  alternates: {
    canonical: "/id",
    languages: {
      en: "/",
      id: "/id",
    },
  },
};

export default function IndonesianHomePage() {
  return <PortfolioHome locale="id" />;
}
