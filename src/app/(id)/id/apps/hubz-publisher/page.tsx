import type { Metadata } from "next";
import { HubzPublisherPage } from "@/components/hubz-publisher-page";
import { SITE_CONTENT } from "@/content/site";

export const metadata: Metadata = {
  title: SITE_CONTENT.id.meta.productTitle,
  description: SITE_CONTENT.id.meta.productDescription,
  alternates: {
    canonical: "/id/apps/hubz-publisher",
    languages: {
      en: "/apps/hubz-publisher",
      id: "/id/apps/hubz-publisher",
    },
  },
};

export default function IndonesianHubzPublisherRoute() {
  return <HubzPublisherPage locale="id" />;
}
