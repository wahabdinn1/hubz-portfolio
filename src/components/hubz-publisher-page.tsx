"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  BarChart3,
  Check,
  FolderInput,
  Mail,
  Scale,
  Send,
  ShieldCheck,
  SlidersHorizontal,
  UploadCloud,
} from "lucide-react";
import { BackLink } from "@/components/back-link";
import { PageShell } from "@/components/page-shell";
import { PlatformSpecs } from "@/components/platform-specs";
import { SectionHeading } from "@/components/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { SITE_META } from "@/content/site";
import { useI18n } from "@/lib/i18n";

const STEP_ICONS = [FolderInput, SlidersHorizontal, UploadCloud, BarChart3];

export function HubzPublisherPage() {
  const { site: copy } = useI18n();
  const page = copy.productPage;

  return (
    <PageShell pathname="/works/hubz-publisher">
      <div className="pt-8">
        <BackLink href="/works" label={page.backLabel} />
      </div>

      <section
        aria-labelledby="product-heading"
        className="mt-6 space-y-6 rounded-base border-3 border-border bg-coral p-6 shadow-shadow sm:p-10"
      >
        <div className="flex items-start justify-between gap-4">
          <h1
            id="product-heading"
            className="text-[clamp(2.25rem,7.5vw,5.5rem)] leading-[1.02] uppercase"
          >
            {page.heading}
          </h1>
          <span
            aria-hidden="true"
            className="hidden size-16 shrink-0 place-items-center rounded-base border-3 border-border bg-main shadow-sm sm:grid"
          >
            <Send className="size-8" strokeWidth={2.5} />
          </span>
        </div>
        <p className="max-w-[60ch] text-lg sm:text-xl">{page.subtitle}</p>
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/terms"
            className={buttonVariants({ variant: "dark", size: "lg" })}
          >
            <Scale strokeWidth={2.5} aria-hidden="true" />
            <span>{copy.specSection.termsLabel}</span>
          </Link>
          <Link
            href="/privacy"
            className={buttonVariants({ variant: "neutral", size: "lg" })}
          >
            <ShieldCheck strokeWidth={2.5} aria-hidden="true" />
            <span>{copy.specSection.privacyLabel}</span>
          </Link>
        </div>
      </section>

      <section aria-labelledby="workflow-heading" className="space-y-8 pt-16 sm:pt-20">
        <SectionHeading id="workflow-heading" title={page.workflowHeading} />
        <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {page.workflowSteps.map((item, idx) => {
            const StepIcon = STEP_ICONS[idx % STEP_ICONS.length];
            return (
              <li
                key={item.step}
                className="flex min-w-0 flex-col gap-4 rounded-base border-3 border-border bg-secondary-background p-5 shadow-shadow"
              >
                <div className="flex items-center justify-between gap-3">
                  <span
                    aria-hidden="true"
                    className="grid size-12 place-items-center rounded-base border-2 border-border bg-main font-heading text-xl font-extrabold"
                  >
                    {item.step}
                  </span>
                  <span
                    aria-hidden="true"
                    className="grid size-10 place-items-center rounded-base border-2 border-border bg-background"
                  >
                    <StepIcon className="size-5" strokeWidth={2.5} />
                  </span>
                </div>
                <h3 className="text-xl">{item.title}</h3>
                <p className="text-[0.95rem]">{item.detail}</p>
              </li>
            );
          })}
        </ol>
      </section>

      <section aria-labelledby="api-heading" className="space-y-8 pt-16 sm:pt-20">
        <SectionHeading id="api-heading" title={page.apiHeading} intro={page.apiIntro} />
        <PlatformSpecs />
      </section>

      <section className="grid gap-6 pt-16 sm:pt-20 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <div
          aria-labelledby="security-heading"
          role="region"
          className="space-y-6 rounded-base border-3 border-border bg-mint p-6 shadow-shadow sm:p-8"
        >
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="grid size-11 shrink-0 place-items-center rounded-base border-2 border-border bg-secondary-background shadow-sm"
            >
              <ShieldCheck className="size-6" strokeWidth={2.5} />
            </span>
            <h2 id="security-heading" className="text-[clamp(1.75rem,3vw,2.5rem)]">
              {page.securityHeading}
            </h2>
          </div>
          <ul className="space-y-4">
            {page.securityPoints.map((point) => (
              <li key={point} className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-[6px] border-2 border-border bg-secondary-background"
                >
                  <Check className="size-4" strokeWidth={3} />
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div
          aria-labelledby="legal-heading"
          role="region"
          className="flex flex-col gap-6 rounded-base border-3 border-border bg-secondary-background p-6 shadow-shadow sm:p-8"
        >
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="grid size-11 shrink-0 place-items-center rounded-base border-2 border-border bg-main shadow-sm"
            >
              <Scale className="size-6" strokeWidth={2.5} />
            </span>
            <h2 id="legal-heading" className="text-[clamp(1.75rem,3vw,2.5rem)]">
              {page.legalHeading}
            </h2>
          </div>
          <p>{page.legalIntro}</p>
          <div className="flex flex-col items-start gap-4">
            <Link href="/terms" className={buttonVariants()}>
              <Scale strokeWidth={2.5} aria-hidden="true" />
              <span>{copy.specSection.termsLabel}</span>
              <ArrowUpRight strokeWidth={2.5} aria-hidden="true" />
            </Link>
            <Link href="/privacy" className={buttonVariants({ variant: "neutral" })}>
              <ShieldCheck strokeWidth={2.5} aria-hidden="true" />
              <span>{copy.specSection.privacyLabel}</span>
              <ArrowUpRight strokeWidth={2.5} aria-hidden="true" />
            </Link>
            <a
              href={`mailto:${SITE_META.email}`}
              className="text-link inline-flex items-center gap-2 break-all"
            >
              <Mail className="size-4 shrink-0" strokeWidth={2.5} aria-hidden="true" />
              <span>{SITE_META.email}</span>
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
