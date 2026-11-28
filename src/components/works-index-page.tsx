"use client";

import { ArrowUpRight, Layers, Mail } from "lucide-react";
import { BackLink } from "@/components/back-link";
import { PageShell } from "@/components/page-shell";
import { ProjectCards } from "@/components/project-cards";
import { buttonVariants } from "@/components/ui/button";
import { SITE_META } from "@/content/site";
import { useI18n } from "@/lib/i18n";

export function WorksIndexPage() {
  const { site: copy } = useI18n();
  const page = copy.worksPage;

  return (
    <PageShell pathname="/works">
      <div className="pt-8">
        <BackLink href="/" label={page.backLabel} />
      </div>

      <section
        aria-labelledby="works-heading"
        className="mt-6 space-y-5 rounded-base border-3 border-border bg-violet p-6 shadow-shadow sm:p-10"
      >
        <div className="flex items-start justify-between gap-4">
          <h1
            id="works-heading"
            className="text-[clamp(2.25rem,7.5vw,5rem)] leading-[1.02] uppercase"
          >
            {page.heading}
          </h1>
          <span
            aria-hidden="true"
            className="hidden size-16 shrink-0 place-items-center rounded-base border-3 border-border bg-main shadow-sm sm:grid"
          >
            <Layers className="size-8" strokeWidth={2.5} />
          </span>
        </div>
        <p className="max-w-[58ch] text-lg sm:text-xl">{page.subtitle}</p>
      </section>

      <section aria-label={copy.workSection.heading} className="pt-12 sm:pt-16">
        <ProjectCards projects={copy.projects} />
      </section>

      <section className="mt-14 flex flex-col items-start justify-between gap-6 rounded-base border-3 border-border bg-secondary-background p-6 shadow-shadow sm:flex-row sm:items-center sm:p-8">
        <div className="space-y-1.5">
          <h2 className="text-2xl">{page.ctaHeading}</h2>
          <p className="max-w-[52ch]">{page.ctaBody}</p>
        </div>
        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <a
            href={`mailto:${SITE_META.email}`}
            className={buttonVariants({ variant: "dark" })}
          >
            <Mail strokeWidth={2.5} aria-hidden="true" />
            <span>{copy.nav.emailAction}</span>
          </a>
          <a
            href={SITE_META.githubUrl}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({ variant: "neutral" })}
          >
            <span>{copy.footer.githubLabel}</span>
            <ArrowUpRight strokeWidth={2.5} aria-hidden="true" />
          </a>
        </div>
      </section>
    </PageShell>
  );
}
