"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { SITE_CONTENT, SITE_META } from "@/content/site";
import { getAlternateLocalePath, localizePath, type Locale } from "@/lib/locale";

export function SiteHeader({
  locale,
  pathname,
}: {
  locale: Locale;
  pathname: string;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const copy = SITE_CONTENT[locale];
  const enHref = getAlternateLocalePath(pathname, "en");
  const idHref = getAlternateLocalePath(pathname, "id");

  const homeHref = localizePath("/", locale);
  const workHref = `${homeHref}#work`;
  const productHref = localizePath("/apps/hubz-publisher", locale);
  const termsHref = localizePath("/terms", locale);
  const privacyHref = localizePath("/privacy", locale);

  const navItems = [
    { label: copy.nav.work, href: workHref },
    { label: copy.nav.product, href: productHref },
    { label: copy.nav.terms, href: termsHref },
    { label: copy.nav.privacy, href: privacyHref },
  ];

  return (
    <header className="sticky top-0 z-30 border-b border-rule bg-paper">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:border focus:border-ink focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-paper"
      >
        {copy.nav.skipToContent}
      </a>

      <div className="mx-auto flex min-h-16 w-full max-w-[1120px] items-center justify-between gap-2 sm:gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href={homeHref}
          className="min-w-0 truncate font-display text-base sm:text-xl font-normal tracking-tight text-ink whitespace-nowrap hover:text-signal transition-colors"
        >
          {SITE_META.name}
        </Link>

        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-6"
        >
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={
                  active
                    ? "text-sm font-medium text-ink underline decoration-signal decoration-2 underline-offset-4 whitespace-nowrap"
                    : "text-sm font-medium text-ink-2 hover:text-signal transition-colors whitespace-nowrap"
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <div
            role="group"
            aria-label="Language"
            className="inline-flex border border-ink bg-paper"
          >
            <Link
              href={enHref}
              hrefLang="en"
              aria-current={locale === "en" ? "true" : undefined}
              className={
                locale === "en"
                  ? "min-h-9 inline-flex items-center border-b-2 border-ink bg-paper-2 px-2.5 sm:px-3 text-xs font-medium text-ink whitespace-nowrap"
                  : "min-h-9 inline-flex items-center px-2.5 sm:px-3 text-xs font-medium text-muted-ink hover:text-ink transition-colors whitespace-nowrap"
              }
            >
              EN
            </Link>
            <Link
              href={idHref}
              hrefLang="id"
              aria-current={locale === "id" ? "true" : undefined}
              className={
                locale === "id"
                  ? "min-h-9 inline-flex items-center border-l border-ink border-b-2 bg-paper-2 px-2.5 sm:px-3 text-xs font-medium text-ink whitespace-nowrap"
                  : "min-h-9 inline-flex items-center border-l border-ink px-2.5 sm:px-3 text-xs font-medium text-muted-ink hover:text-ink transition-colors whitespace-nowrap"
              }
            >
              ID
            </Link>
          </div>

          <a
            href={`mailto:${SITE_META.email}`}
            className="hidden sm:inline-flex min-h-9 items-center border border-ink bg-ink px-4 text-xs font-medium text-paper hover:bg-ink-2 transition-colors whitespace-nowrap"
          >
            {copy.nav.emailAction}
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? copy.nav.menuClose : copy.nav.menuOpen}
            className="inline-flex size-10 cursor-pointer items-center justify-center border border-ink bg-paper text-ink hover:bg-paper-2 md:hidden"
          >
            {mobileOpen ? (
              <X className="size-4" aria-hidden="true" />
            ) : (
              <Menu className="size-4" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav
          aria-label="Mobile navigation"
          className="border-t border-rule bg-paper-2 px-4 py-4 md:hidden"
        >
          <div className="mx-auto flex max-w-[1120px] flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="min-h-10 inline-flex items-center border-b border-rule pb-2 text-sm font-medium text-ink whitespace-nowrap"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={`mailto:${SITE_META.email}`}
              className="min-h-10 inline-flex items-center text-sm font-medium text-signal underline underline-offset-4 whitespace-nowrap"
            >
              {SITE_META.email}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
