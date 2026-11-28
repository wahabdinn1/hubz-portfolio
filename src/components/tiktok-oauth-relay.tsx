"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { buildLocalForwardUrl } from "@/lib/tiktok-oauth";

export function TikTokOAuthRelay() {
  const [targetUrl, setTargetUrl] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const forward = buildLocalForwardUrl(window.location.search);
    // Defer state update outside effect body via microtask for React lint compliance
    queueMicrotask(() => {
      setTargetUrl(forward);
      setChecked(true);
    });
    if (forward) {
      // Keep this page in session history so Back restores the fallback link if localhost:3000 is down.
      window.location.assign(forward);
    }
  }, []);

  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-[560px] flex-col items-center justify-center px-4 py-16">
      <div className="w-full space-y-5 rounded-base border-3 border-border bg-secondary-background p-8 shadow-shadow">
        <h1 className="text-3xl">
          {targetUrl
            ? "Returning to local studio"
            : checked
              ? "No authorization response found"
              : "Completing TikTok sign-in"}
        </h1>

        <p className="text-base">
          {targetUrl
            ? "Forwarding the TikTok authorization code back to Hubz Publisher running on localhost:3000. Tokens are exchanged and encrypted strictly on your local machine."
            : "This endpoint relays TikTok OAuth callbacks to a local Hubz Publisher instance. Start the connection from your local Accounts page."}
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          {targetUrl ? (
            <a
              href={targetUrl}
              className="press inline-flex h-11 items-center justify-center rounded-base border-2 border-border bg-main px-5 text-sm font-bold text-main-foreground"
            >
              Continue to localhost:3000
            </a>
          ) : (
            <Link
              href="/works/hubz-publisher"
              className="press inline-flex h-11 items-center justify-center rounded-base border-2 border-border bg-main px-5 text-sm font-bold text-main-foreground"
            >
              View Hubz Publisher
            </Link>
          )}
        </div>
      </div>
    </main>
  );
}
