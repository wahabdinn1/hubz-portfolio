import Link from "next/link";
import { SITE_CONTENT, SITE_META } from "@/content/site";
import { localizePath, type Locale } from "@/lib/locale";

export function SiteFooter({ locale }: { locale: Locale }) {
  const copy = SITE_CONTENT[locale];

  return (
    <footer className="mt-auto border-t border-rule-2 bg-paper-2">
      <div className="mx-auto w-full max-w-[1120px] px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 border-b border-rule pb-8 md:flex-row md:items-end md:justify-between">
          <div className="space-y-2">
            <p className="font-display text-3xl font-normal tracking-tight text-ink">
              {SITE_META.name}
            </p>
            <p className="text-sm text-muted-ink">{copy.footer.operatorNote}</p>
          </div>

          <a
            href={`mailto:${SITE_META.email}`}
            className="editorial-link text-base font-medium whitespace-nowrap self-start md:self-auto"
          >
            {SITE_META.email}
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 text-sm">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link
              href={localizePath("/apps/hubz-publisher", locale)}
              className="editorial-link whitespace-nowrap"
            >
              {SITE_META.appName}
            </Link>
            <Link
              href={localizePath("/terms", locale)}
              className="editorial-link whitespace-nowrap"
            >
              {copy.footer.termsLabel}
            </Link>
            <Link
              href={localizePath("/privacy", locale)}
              className="editorial-link whitespace-nowrap"
            >
              {copy.footer.privacyLabel}
            </Link>
            <a
              href={SITE_META.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="editorial-link whitespace-nowrap"
            >
              {copy.footer.githubLabel}
            </a>
          </div>

          <a
            href="#top"
            className="text-sm font-medium text-muted-ink hover:text-ink transition-colors whitespace-nowrap"
          >
            {copy.footer.backToTop}
          </a>
        </div>
      </div>
    </footer>
  );
}
