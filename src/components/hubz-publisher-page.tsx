import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { SITE_CONTENT, SITE_META } from "@/content/site";
import { localizePath, type Locale } from "@/lib/locale";

export function HubzPublisherPage({ locale }: { locale: Locale }) {
  const copy = SITE_CONTENT[locale];
  const page = copy.productPage;
  const pathname = localizePath("/apps/hubz-publisher", locale);
  const homeHref = localizePath("/", locale);
  const termsHref = localizePath("/terms", locale);
  const privacyHref = localizePath("/privacy", locale);

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
            <span>{page.backLabel}</span>
          </Link>
        </div>

        <section aria-labelledby="product-heading" className="pb-14 space-y-6">
          <div className="specimen-guide pb-4">
            <h1
              id="product-heading"
              className="font-display text-[clamp(2.75rem,6vw,4.75rem)] font-normal leading-[1.02] text-ink"
            >
              {page.heading}
            </h1>
          </div>

          <p className="text-lg text-ink-2 max-w-[60ch]">{page.subtitle}</p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button
              variant="default"
              nativeButton={false}
              render={<Link href={termsHref} />}
            >
              <span>{copy.specSection.termsLabel}</span>
            </Button>
            <Button
              variant="outline"
              nativeButton={false}
              render={<Link href={privacyHref} />}
            >
              <span>{copy.specSection.privacyLabel}</span>
            </Button>
          </div>
        </section>

        <Separator />

        <section
          aria-labelledby="workflow-heading"
          className="py-14 space-y-8"
        >
          <h2
            id="workflow-heading"
            className="font-display text-[clamp(1.85rem,3.6vw,2.75rem)] font-normal text-ink"
          >
            {page.workflowHeading}
          </h2>

          <ol className="divide-y divide-rule border-y border-rule">
            {page.workflowSteps.map((item) => (
              <li
                key={item.step}
                className="grid gap-3 py-6 md:grid-cols-[72px_minmax(0,0.85fr)_minmax(0,1.45fr)] md:items-baseline"
              >
                <span className="tabular-num font-mono text-sm text-muted-ink">
                  {item.step}
                </span>
                <h3 className="font-display text-2xl font-normal text-ink">
                  {item.title}
                </h3>
                <p className="text-base text-ink-2 max-w-[56ch]">
                  {item.detail}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="api-heading" className="py-12 space-y-6">
          <Separator variant="double" />

          <div className="grid gap-4 pt-4 md:grid-cols-2 md:items-end">
            <h2
              id="api-heading"
              className="font-display text-[clamp(1.85rem,3.6vw,2.75rem)] font-normal text-ink"
            >
              {page.apiHeading}
            </h2>
            <p className="text-base text-muted-ink max-w-[48ch]">
              {page.apiIntro}
            </p>
          </div>

          <div className="border-y border-rule-2 bg-paper">
            <Table>
              <TableHeader>
                <TableRow className="border-b border-rule-2 hover:bg-transparent">
                  <TableHead>{copy.specSection.columns.platform}</TableHead>
                  <TableHead>{copy.specSection.columns.duration}</TableHead>
                  <TableHead>{copy.specSection.columns.delivery}</TableHead>
                  <TableHead>{copy.specSection.columns.scopes}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {copy.platformSpecs.map((row) => (
                  <TableRow
                    key={row.platform}
                    className="border-b border-rule hover:bg-paper-2"
                  >
                    <TableCell className="font-medium text-ink whitespace-nowrap">
                      {row.platform}
                    </TableCell>
                    <TableCell className="tabular-num font-mono text-xs text-ink whitespace-nowrap">
                      {row.duration}
                    </TableCell>
                    <TableCell className="text-sm text-ink-2">
                      {row.delivery}
                    </TableCell>
                    <TableCell className="font-mono text-xs text-muted-ink">
                      {row.scopes}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </section>

        <Separator />

        <section
          aria-labelledby="security-heading"
          className="grid gap-10 py-14 md:grid-cols-2"
        >
          <div className="space-y-4">
            <h2
              id="security-heading"
              className="font-display text-[clamp(1.75rem,3vw,2.4rem)] font-normal text-ink"
            >
              {page.securityHeading}
            </h2>
            <ul className="space-y-3 border-t border-rule pt-4 text-base text-ink-2">
              {page.securityPoints.map((point) => (
                <li
                  key={point}
                  className="border-b border-rule pb-3 last:border-b-0"
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 border-t border-rule pt-6 md:border-t-0 md:border-l md:pl-8 md:pt-0">
            <h2 className="font-display text-[clamp(1.75rem,3vw,2.4rem)] font-normal text-ink">
              {page.legalHeading}
            </h2>
            <p className="text-base text-ink-2 max-w-[46ch]">
              {page.legalIntro}
            </p>
            <div className="flex flex-col gap-3 pt-2 text-sm">
              <Link
                href={termsHref}
                className="editorial-link inline-flex items-center gap-1 self-start font-medium whitespace-nowrap"
              >
                <span>{copy.specSection.termsLabel}</span>
                <ArrowUpRight className="size-3.5" aria-hidden="true" />
              </Link>
              <Link
                href={privacyHref}
                className="editorial-link inline-flex items-center gap-1 self-start font-medium whitespace-nowrap"
              >
                <span>{copy.specSection.privacyLabel}</span>
                <ArrowUpRight className="size-3.5" aria-hidden="true" />
              </Link>
              <a
                href={`mailto:${SITE_META.email}`}
                className="editorial-link inline-flex items-center gap-1 self-start font-medium whitespace-nowrap"
              >
                <span>{SITE_META.email}</span>
                <ArrowUpRight className="size-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter locale={locale} />
    </div>
  );
}
