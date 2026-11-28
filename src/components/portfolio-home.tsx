"use client";

import Link from "next/link";
import { ArrowUpRight, Briefcase, Layers, Send } from "lucide-react";
import { CopyEmailButton } from "@/components/copy-email-button";
import { GitHubIcon } from "@/components/github-icon";
import { PageShell } from "@/components/page-shell";
import { PlatformSpecs } from "@/components/platform-specs";
import { ProjectCards } from "@/components/project-cards";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Marquee from "@/components/ui/marquee";
import { SITE_META } from "@/content/site";
import { useI18n } from "@/lib/i18n";

const splitList = (value: string) => value.split(", ");

export function PortfolioHome() {
  const { site: copy } = useI18n();
  const marqueeItems = [
    ...new Set([
      ...copy.platformSpecs.map((row) => row.platform),
      ...splitList(copy.practiceSection.stackList),
    ]),
  ];

  return (
    <PageShell pathname="/">
      {/* Hero bento */}
      <section
        aria-labelledby="hero-heading"
        className="grid gap-5 py-10 sm:py-14 lg:grid-cols-[minmax(0,1.65fr)_minmax(0,1fr)]"
      >
        <div className="flex min-w-0 flex-col justify-between gap-10 rounded-base border-3 border-border bg-main p-6 shadow-shadow sm:p-10">
          <h1
            id="hero-heading"
            className="text-[clamp(2.25rem,7.5vw,5rem)] leading-[1.02] uppercase"
          >
            {SITE_META.name}
          </h1>
          <div className="space-y-6">
            <p className="max-w-[42ch] text-lg sm:text-xl">{copy.hero.statement}</p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/works/hubz-publisher"
                className={buttonVariants({ variant: "dark", size: "lg" })}
              >
                <Send strokeWidth={2.5} aria-hidden="true" />
                <span>{copy.hero.primaryCta}</span>
                <ArrowUpRight strokeWidth={2.5} aria-hidden="true" />
              </Link>
              <CopyEmailButton
                email={SITE_META.email}
                label={copy.hero.copyEmailLabel}
                copiedLabel={copy.hero.copiedLabel}
              />
            </div>
          </div>
        </div>

        <div className="grid min-w-0 gap-5 sm:grid-cols-2 lg:grid-cols-1">
          <div className="flex flex-col justify-between gap-6 rounded-base border-3 border-border bg-secondary-background p-6 shadow-shadow">
            <Badge className="gap-1.5 bg-mint px-3 py-1 font-bold">
              <Briefcase className="size-3.5" strokeWidth={2.5} aria-hidden="true" />
              <span>{copy.practiceSection.leftHeading}</span>
            </Badge>
            <p className="font-heading text-2xl leading-tight sm:text-[1.7rem]">
              {copy.hero.roles}
            </p>
          </div>

          <a
            href={SITE_META.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="press group flex flex-col justify-between gap-6 rounded-base border-3 border-border bg-foreground p-6 text-secondary-background"
          >
            <span className="flex items-center justify-between gap-4">
              <span className="inline-flex items-center gap-2 font-bold">
                <GitHubIcon className="size-5 text-main" />
                <span>{SITE_META.githubHandle}</span>
              </span>
              <ArrowUpRight
                className="size-6 transition-transform group-hover:rotate-45"
                strokeWidth={2.5}
                aria-hidden="true"
              />
            </span>
            <span className="space-y-1.5">
              <span className="block font-heading text-2xl font-extrabold text-main">
                {copy.practiceSection.githubTitle}
              </span>
              <span className="block text-sm text-secondary-background/90">
                {copy.practiceSection.githubCta}
              </span>
            </span>
          </a>
        </div>
      </section>

      {/* Full-bleed marquee */}
      <div className="relative left-1/2 w-screen -translate-x-1/2">
        <Marquee items={marqueeItems} label={copy.nav.marqueeLabel} />
      </div>

      {/* Selected work */}
      <section id="work" aria-labelledby="work-heading" className="space-y-8 pt-16 sm:pt-20">
        <SectionHeading
          id="work-heading"
          title={copy.workSection.heading}
          intro={copy.workSection.intro}
        />
        <ProjectCards projects={copy.projects} />
      </section>

      {/* Platform envelope */}
      <section aria-labelledby="spec-heading" className="space-y-8 pt-16 sm:pt-20">
        <SectionHeading
          id="spec-heading"
          title={copy.specSection.heading}
          intro={copy.specSection.intro}
        />
        <PlatformSpecs />
        <p className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <span>{copy.specSection.legalNotePrefix}</span>
          <Link href="/terms" className="text-link">
            {copy.specSection.termsLabel}
          </Link>
          <Link href="/privacy" className="text-link">
            {copy.specSection.privacyLabel}
          </Link>
        </p>
      </section>

      {/* Practice and stack */}
      <section aria-labelledby="practice-heading" className="space-y-8 pt-16 sm:pt-20">
        <SectionHeading id="practice-heading" title={copy.practiceSection.heading} />
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="border-3 bg-secondary-background">
            <CardHeader className="flex flex-row items-center gap-3">
              <span
                aria-hidden="true"
                className="grid size-10 shrink-0 place-items-center rounded-base border-2 border-border bg-mint shadow-sm"
              >
                <Briefcase className="size-5" strokeWidth={2.5} />
              </span>
              <CardTitle>
                <h3 className="text-2xl">{copy.practiceSection.leftHeading}</h3>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>{copy.practiceSection.leftBody}</p>
            </CardContent>
          </Card>
          <Card className="border-3 bg-violet">
            <CardHeader className="flex flex-row items-center gap-3">
              <span
                aria-hidden="true"
                className="grid size-10 shrink-0 place-items-center rounded-base border-2 border-border bg-secondary-background shadow-sm"
              >
                <Layers className="size-5" strokeWidth={2.5} />
              </span>
              <CardTitle>
                <h3 className="text-2xl">{copy.practiceSection.rightHeading}</h3>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <p>{copy.practiceSection.rightBody}</p>
              <ul aria-label={copy.practiceSection.stackLabel} className="flex flex-wrap gap-2">
                {splitList(copy.practiceSection.stackList).map((tool) => (
                  <li key={tool}>
                    <Badge variant="neutral" className="font-bold">
                      {tool}
                    </Badge>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </PageShell>
  );
}
