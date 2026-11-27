import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CopyEmailButton } from "@/components/copy-email-button";
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

export function PortfolioHome({ locale }: { locale: Locale }) {
  const copy = SITE_CONTENT[locale];
  const pathname = localizePath("/", locale);
  const productHref = localizePath("/apps/hubz-publisher", locale);
  const termsHref = localizePath("/terms", locale);
  const privacyHref = localizePath("/privacy", locale);

  return (
    <div id="top" className="flex min-h-dvh flex-col bg-paper text-ink">
      <SiteHeader locale={locale} pathname={pathname} />

      <main
        id="main-content"
        className="mx-auto w-full max-w-[1120px] flex-1 px-4 sm:px-6 lg:px-8"
      >
        {/* Stage Hero */}
        <section
          aria-labelledby="hero-heading"
          className="py-16 sm:py-20 lg:py-24"
        >
          <div className="space-y-8">
            <div className="specimen-guide pb-4">
              <h1
                id="hero-heading"
                className="font-display text-[clamp(3rem,7.2vw,5.75rem)] font-normal leading-[1.02] tracking-[-0.02em] text-ink max-w-[16ch]"
              >
                {SITE_META.name}
              </h1>
            </div>

            <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:items-start">
              <p className="text-base font-medium text-ink-2 max-w-[40ch]">
                {copy.hero.roles}
              </p>

              <div className="space-y-6">
                <p className="text-base text-ink max-w-[48ch]">
                  {copy.hero.statement}
                </p>

                <div className="flex flex-wrap items-center gap-3">
                  <Button
                    variant="default"
                    nativeButton={false}
                    render={<Link href={productHref} />}
                  >
                    <span>{copy.hero.primaryCta}</span>
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </Button>

                  <CopyEmailButton
                    email={SITE_META.email}
                    label={copy.hero.copyEmailLabel}
                    copiedLabel={copy.hero.copiedLabel}
                    variant="outline"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <Separator />

        {/* Selected Work (Ruled Index) */}
        <section
          id="work"
          aria-labelledby="work-heading"
          className="py-16 sm:py-20 space-y-10"
        >
          <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:items-end">
            <h2
              id="work-heading"
              className="font-display text-[clamp(2rem,4vw,3.25rem)] font-normal text-ink"
            >
              {copy.workSection.heading}
            </h2>
            <p className="text-base text-muted-ink max-w-[44ch]">
              {copy.workSection.intro}
            </p>
          </div>

          <ol className="divide-y divide-rule border-y border-rule">
            {copy.projects.map((project) => (
              <li
                key={project.index}
                className="grid gap-4 py-8 md:grid-cols-[72px_minmax(0,0.9fr)_minmax(0,1.4fr)] md:items-start"
              >
                <span className="tabular-num font-mono text-sm text-muted-ink">
                  {project.index}
                </span>

                <div className="min-w-0 space-y-2">
                  <h3 className="font-display text-2xl font-normal text-ink">
                    {project.name}
                  </h3>
                  {project.href && project.linkLabel && (
                    <div>
                      <Link
                        href={project.href}
                        className="editorial-link inline-flex items-center gap-1 text-sm font-medium whitespace-nowrap"
                      >
                        <span>{project.linkLabel}</span>
                        <ArrowUpRight className="size-3.5" aria-hidden="true" />
                      </Link>
                    </div>
                  )}
                </div>

                <div className="min-w-0 space-y-3">
                  <p className="text-base text-ink max-w-[58ch]">
                    {project.summary}
                  </p>
                  <p className="text-sm text-muted-ink">{project.stack}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Hubz Publisher Platform Specification Table (Signature under 3px double rule) */}
        <section
          aria-labelledby="spec-heading"
          className="py-12 sm:py-16 space-y-6"
        >
          <Separator variant="double" />

          <div className="grid gap-4 pt-4 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:items-end">
            <h2
              id="spec-heading"
              className="font-display text-[clamp(1.85rem,3.6vw,2.75rem)] font-normal text-ink"
            >
              {copy.specSection.heading}
            </h2>
            <p className="text-base text-muted-ink max-w-[48ch]">
              {copy.specSection.intro}
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

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-ink">
            <span>{copy.specSection.legalNotePrefix}</span>
            <Link href={termsHref} className="editorial-link whitespace-nowrap">
              {copy.specSection.termsLabel}
            </Link>
            <Link href={privacyHref} className="editorial-link whitespace-nowrap">
              {copy.specSection.privacyLabel}
            </Link>
          </div>
        </section>

        <Separator />

        {/* Practice & Stack */}
        <section
          aria-labelledby="practice-heading"
          className="py-16 sm:py-20 space-y-10"
        >
          <h2
            id="practice-heading"
            className="font-display text-[clamp(2rem,4vw,3.25rem)] font-normal text-ink"
          >
            {copy.practiceSection.heading}
          </h2>

          <div className="grid gap-10 md:grid-cols-2">
            <div className="space-y-3 border-t border-rule pt-6">
              <h3 className="font-display text-2xl font-normal text-ink">
                {copy.practiceSection.leftHeading}
              </h3>
              <p className="text-base text-ink-2 max-w-[52ch]">
                {copy.practiceSection.leftBody}
              </p>
            </div>

            <div className="space-y-4 border-t border-rule pt-6">
              <h3 className="font-display text-2xl font-normal text-ink">
                {copy.practiceSection.rightHeading}
              </h3>
              <p className="text-base text-ink-2 max-w-[52ch]">
                {copy.practiceSection.rightBody}
              </p>
              <div className="space-y-1 pt-2">
                <p className="text-sm font-medium text-muted-ink">
                  {copy.practiceSection.stackLabel}
                </p>
                <p className="text-sm text-ink">{copy.practiceSection.stackList}</p>
              </div>
              <div className="pt-2">
                <a
                  href={SITE_META.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="editorial-link inline-flex items-center gap-1 text-sm font-medium whitespace-nowrap"
                >
                  <span>{copy.practiceSection.githubCta}</span>
                  <ArrowUpRight className="size-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter locale={locale} />
    </div>
  );
}
