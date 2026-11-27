import type { Metadata } from "next";
import { TikTokOAuthRelay } from "@/components/tiktok-oauth-relay";

export const metadata: Metadata = {
  title: "TikTok OAuth Callback",
  description: "OAuth callback relay for local Hubz Publisher desktop studio.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function TikTokOAuthCallbackPage() {
  return <TikTokOAuthRelay />;
}
