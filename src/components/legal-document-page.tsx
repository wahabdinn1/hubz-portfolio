"use client";

import Link from "next/link";
import { BookOpen, Calendar, Mail, Scale, ShieldCheck } from "lucide-react";
import { BackLink } from "@/components/back-link";
import { PageShell } from "@/components/page-shell";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { SITE_META } from "@/content/site";
import { useI18n } from "@/lib/i18n";

export function LegalDocumentPage({ doc }: { doc: "terms" | "privacy" }) {
  const { site, legal, setLocale } = useI18n();
  const documentData = legal[doc];
  const nav = site.nav;
  const pathname = doc === "terms" ? "/terms" : "/privacy";
  const DocIcon = doc === "terms" ? Scale : ShieldCheck;

  return (
    <PageShell pathname={pathname}>
      <div className="pt-8">
        <BackLink href="/" label={documentData.backLabel} />
      </div>

      <div className="mt-6 grid gap-8 lg:grid-cols-[250px_minmax(0,1fr)] lg:items-start">
        <nav
          aria-label={nav.onThisPage}
          className="hidden rounded-base border-3 border-border bg-secondary-background p-5 shadow-shadow lg:sticky lg:top-28 lg:block"
        >
          <p className="mb-3 flex items-center gap-2 font-heading text-lg font-extrabold">
            <BookOpen className="size-4 shrink-0" strokeWidth={2.5} aria-hidden="true" />
            <span>{nav.onThisPage}</span>
          </p>
          <ol className="space-y-1 text-sm">
            {documentData.sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="block rounded-[6px] border-2 border-transparent px-2 py-1 font-bold hover:border-border hover:bg-main"
                >
                  {section.heading}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <article className="min-w-0 overflow-hidden rounded-base border-3 border-border bg-secondary-background shadow-shadow">
          <header className="space-y-4 border-b-3 border-border bg-mint p-6 sm:p-10">
            <div className="flex items-start justify-between gap-4">
              <h1 className="text-[clamp(2.4rem,6vw,4.5rem)] leading-[0.95]">
                {documentData.title}
              </h1>
              <span
                aria-hidden="true"
                className="hidden size-14 shrink-0 place-items-center rounded-base border-3 border-border bg-secondary-background shadow-sm sm:grid"
              >
                <DocIcon className="size-7" strokeWidth={2.5} />
              </span>
            </div>
            <p className="max-w-[62ch] text-lg">{documentData.summary}</p>
            <Badge variant="neutral" className="gap-1.5 px-3 py-1 text-sm">
              <Calendar className="size-3.5" strokeWidth={2.5} aria-hidden="true" />
              <span>
                {documentData.effectiveDateLabel}:{" "}
                <time className="font-bold">{documentData.effectiveDate}</time>
              </span>
            </Badge>
          </header>

          <div className="space-y-10 p-6 sm:p-10">
            {documentData.authorityNotice && (
              <div
                role="note"
                className="max-w-[70ch] rounded-base border-3 border-border bg-main p-5 shadow-sm"
              >
                <p>{documentData.authorityNotice}</p>
                <p className="mt-2">
                  <button
                    type="button"
                    onClick={() => setLocale("en")}
                    className="cursor-pointer font-bold break-all underline underline-offset-4"
                  >
                    {SITE_META.domain}
                    {pathname}
                  </button>
                </p>
              </div>
            )}

            {documentData.sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                aria-labelledby={`heading-${section.id}`}
                className="max-w-[70ch] space-y-3"
              >
                <h2 id={`heading-${section.id}`} className="text-2xl sm:text-[1.75rem]">
                  {section.heading}
                </h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.bullets && (
                  <ul className="space-y-2">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span
                          aria-hidden="true"
                          className="mt-[0.55em] size-2.5 shrink-0 border-2 border-border bg-coral"
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <footer className="flex flex-wrap items-center justify-between gap-4 border-t-3 border-border bg-background p-6 sm:px-10">
            <Link
              href={documentData.otherDocPath}
              className={buttonVariants({ variant: "neutral" })}
            >
              {documentData.otherDocLabel}
            </Link>
            <a
              href={`mailto:${SITE_META.email}`}
              className="text-link inline-flex items-center gap-2 break-all"
            >
              <Mail className="size-4 shrink-0" strokeWidth={2.5} aria-hidden="true" />
              <span>{SITE_META.email}</span>
            </a>
          </footer>
        </article>
      </div>
    </PageShell>
  );
}
