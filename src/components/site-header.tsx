"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE_META } from "@/content/site";
import { useI18n } from "@/lib/i18n";
import type { Locale } from "@/lib/locale";

export function SiteHeader({ pathname }: { pathname: string }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { locale, setLocale, site: copy } = useI18n();

  const navItems = [
    { label: copy.nav.work, href: "/#work" },
    { label: copy.nav.product, href: "/apps/hubz-publisher" },
    { label: copy.nav.terms, href: "/terms" },
    { label: copy.nav.privacy, href: "/privacy" },
  ];

  const langButton = (target: Locale, label: string) => {
    const active = locale === target;
    return (
      <button
        type="button"
        onClick={() => setLocale(target)}
        aria-pressed={active}
        className={`inline-flex min-h-10 cursor-pointer items-center px-3 text-xs font-bold ${
          active
            ? "bg-foreground text-secondary-background"
            : "bg-secondary-background hover:bg-main"
        }`}
      >
        {label}
      </button>
    );
  };

  return (
    <header className="sticky top-0 z-30 border-b-3 border-border bg-secondary-background">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-base focus:border-2 focus:border-border focus:bg-main focus:px-4 focus:py-2 focus:text-sm focus:font-bold"
      >
        {copy.nav.skipToContent}
      </a>

      <div className="mx-auto flex min-h-[72px] w-full max-w-[1200px] items-center justify-between gap-2 px-4 sm:gap-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          onClick={() => setMobileOpen(false)}
          className="group flex min-w-0 items-center gap-3"
        >
          <span
            aria-hidden="true"
            className="grid size-10 shrink-0 place-items-center rounded-base border-2 border-border bg-main font-heading text-base font-extrabold shadow-sm transition-transform group-hover:-rotate-6"
          >
            WS
          </span>
          <span className="min-w-0 truncate font-heading font-extrabold text-base sm:text-xl">
            {SITE_META.name}
          </span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`inline-flex min-h-10 items-center whitespace-nowrap rounded-base border-2 px-3 text-sm font-bold ${
                  active
                    ? "border-border bg-main shadow-sm"
                    : "border-transparent hover:border-border hover:bg-main"
                }`}
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
            className="inline-flex overflow-hidden rounded-base border-2 border-border [&>button+button]:border-l-2 [&>button+button]:border-border"
          >
            {langButton("en", "EN")}
            {langButton("id", "ID")}
          </div>

          <Button
            size="sm"
            nativeButton={false}
            render={<a href={`mailto:${SITE_META.email}`} />}
            className="hidden sm:inline-flex"
          >
            <Mail strokeWidth={2.5} aria-hidden="true" />
            <span>{copy.nav.emailAction}</span>
          </Button>

          <Button
            variant="neutral"
            size="icon"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileOpen ? copy.nav.menuClose : copy.nav.menuOpen}
            className="lg:hidden"
          >
            {mobileOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </Button>
        </div>
      </div>

      {mobileOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="border-t-3 border-border bg-background px-4 py-4 sm:px-6 lg:hidden"
        >
          <ul className="mx-auto flex max-w-[1200px] flex-col gap-3">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setMobileOpen(false)}
                    className={`flex min-h-12 items-center rounded-base border-2 border-border px-4 font-bold shadow-sm ${
                      active ? "bg-main" : "bg-secondary-background"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li>
              <a
                href={`mailto:${SITE_META.email}`}
                className="flex min-h-12 items-center gap-2 break-all rounded-base border-2 border-border bg-foreground px-4 font-bold text-secondary-background shadow-sm"
              >
                <Mail className="size-4 shrink-0 text-main" strokeWidth={2.5} aria-hidden="true" />
                <span>{SITE_META.email}</span>
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
