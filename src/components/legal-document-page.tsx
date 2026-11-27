import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Separator } from "@/components/ui/separator";
import { LEGAL_CONTENT } from "@/content/legal";
import { SITE_META } from "@/content/site";
import { localizePath, type Locale } from "@/lib/locale";

export function LegalDocumentPage({
  locale,
  doc,
}: {
  locale: Locale;
  doc: "terms" | "privacy";
}) {
  const documentData = LEGAL_CONTENT[locale][doc];
  const baseEnPath = doc === "terms" ? "/terms" : "/privacy";
  const pathname = localizePath(baseEnPath, locale);
  const homeHref = localizePath("/", locale);

  return (
    <div id="top" className="flex min-h-dvh flex-col bg-paper text-ink">
      <SiteHeader locale={locale} pathname={pathname} />

      <main
        id="main-content"
        className="mx-auto w-full max-w-[1120px] flex-1 px-4 py-12 sm:px-6 sm:py-16 lg:px-8"
      >
        <div className="mb-8">
          <Link
            href={homeHref}
            className="editorial-link inline-flex items-center gap-1.5 text-sm font-medium whitespace-nowrap"
          >
            <ArrowLeft className="size-3.5" aria-hidden="true" />
            <span>{documentData.backLabel}</span>
          </Link>
        </div>

        <article className="max-w-[68ch] space-y-10">
          <header className="space-y-4 border-b border-rule-2 pb-8">
            <h1 className="font-display text-[clamp(2.5rem,5.5vw,4.25rem)] font-normal leading-[1.02] text-ink">
              {documentData.title}
            </h1>
            <p className="text-base text-ink-2">{documentData.summary}</p>
            <p className="text-sm text-muted-ink">
              {documentData.effectiveDateLabel}:{" "}
              <time className="text-ink font-medium">{documentData.effectiveDate}</time>
            </p>
          </header>

          {documentData.authorityNotice && (
            <div
              role="note"
              className="border-l-2 border-signal bg-paper-2 px-5 py-4 text-sm text-ink"
            >
              <p>{documentData.authorityNotice}</p>
              <p className="mt-2">
                <Link href={baseEnPath} className="editorial-link font-medium">
                  {SITE_META.domain}
                  {baseEnPath}
                </Link>
              </p>
            </div>
          )}

          <div className="space-y-10">
            {documentData.sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                aria-labelledby={`heading-${section.id}`}
                className="space-y-3"
              >
                <h2
                  id={`heading-${section.id}`}
                  className="font-display text-2xl font-normal text-ink"
                >
                  {section.heading}
                </h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-base text-ink-2">
                    {paragraph}
                  </p>
                ))}
                {section.bullets && (
                  <ul className="space-y-2 border-l border-rule-2 pl-5 text-base text-ink-2">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <Separator />

          <footer className="flex flex-wrap items-center justify-between gap-4 text-sm">
            <Link
              href={documentData.otherDocPath}
              className="editorial-link font-medium whitespace-nowrap"
            >
              {documentData.otherDocLabel}
            </Link>
            <a
              href={`mailto:${SITE_META.email}`}
              className="editorial-link font-medium whitespace-nowrap"
            >
              {SITE_META.email}
            </a>
          </footer>
        </article>
      </main>

      <SiteFooter locale={locale} />
    </div>
  );
}
