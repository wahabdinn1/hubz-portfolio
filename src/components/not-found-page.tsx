"use client";

import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { buttonVariants } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";

export function NotFoundPage() {
  const { site: copy } = useI18n();
  const page = copy.notFound;

  return (
    <PageShell pathname="/404">
      <div className="flex flex-1 flex-col items-start justify-center gap-8 py-16 sm:py-24">
        <p
          aria-hidden="true"
          className="-rotate-3 rounded-base border-3 border-border bg-coral px-8 py-3 font-heading text-7xl font-extrabold shadow-shadow sm:text-8xl"
        >
          404
        </p>
        <div className="max-w-[46ch] space-y-4">
          <h1 className="text-4xl sm:text-5xl">{page.heading}</h1>
          <p className="text-lg">{page.body}</p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/"
            className={buttonVariants({ variant: "dark", size: "lg" })}
          >
            {page.homeCta}
          </Link>
          <Link
            href="/terms"
            className={buttonVariants({ variant: "neutral", size: "lg" })}
          >
            {page.termsCta}
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
