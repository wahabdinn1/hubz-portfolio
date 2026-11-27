import type { Metadata } from "next";
import { WorksIndexPage } from "@/components/works-index-page";
import { SITE_CONTENT } from "@/content/site";

export const metadata: Metadata = {
  title: SITE_CONTENT.en.meta.worksTitle,
  description: SITE_CONTENT.en.meta.worksDescription,
  alternates: {
    canonical: "/works",
  },
};

export default function WorksRoute() {
  return <WorksIndexPage />;
}
