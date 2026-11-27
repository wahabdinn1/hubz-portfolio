import type { Metadata } from "next";
import { HubzPublisherPage } from "@/components/hubz-publisher-page";
import { SITE_CONTENT } from "@/content/site";

export const metadata: Metadata = {
  title: SITE_CONTENT.en.meta.productTitle,
  description: SITE_CONTENT.en.meta.productDescription,
  alternates: {
    canonical: "/apps/hubz-publisher",
    languages: {
      en: "/apps/hubz-publisher",
      id: "/id/apps/hubz-publisher",
    },
  },
};

export default function EnglishHubzPublisherRoute() {
  return <HubzPublisherPage locale="en" />;
}
