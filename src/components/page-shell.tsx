"use client";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export function PageShell({
  pathname,
  children,
}: {
  pathname: string;
  children: React.ReactNode;
}) {
  return (
    <div id="top" className="flex min-h-dvh flex-col">
      <SiteHeader pathname={pathname} />
      <main
        id="main-content"
        className="mx-auto flex w-full max-w-[1200px] flex-1 flex-col px-4 sm:px-6 lg:px-8"
      >
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
