import type { Metadata } from "next";
import { PortfolioHome } from "@/components/portfolio-home";
import { SITE_CONTENT } from "@/content/site";

export const metadata: Metadata = {
  title: { absolute: SITE_CONTENT.en.meta.homeTitle },
  description: SITE_CONTENT.en.meta.homeDescription,
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      id: "/id",
    },
  },
};

export default function HomePage() {
  return <PortfolioHome locale="en" />;
}
