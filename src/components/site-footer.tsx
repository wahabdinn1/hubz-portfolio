"use client";

import Link from "next/link";
import {
  ArrowUp,
  FolderGit2,
  Mail,
  Scale,
  Send,
  ShieldCheck,
} from "lucide-react";
import { SITE_META } from "@/content/site";
import { useI18n } from "@/lib/i18n";

const FOOTER_LINK =
  "inline-flex min-h-10 items-center gap-1.5 whitespace-nowrap rounded-base border-2 border-secondary-background px-3 text-xs font-bold transition-colors hover:border-main hover:bg-main hover:text-foreground sm:text-sm";

export function SiteFooter() {
  const { site: copy } = useI18n();

  return (
    <footer className="mt-20 border-t-3 border-border bg-foreground text-secondary-background">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-8 px-4 py-12 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:gap-6 lg:px-8">
        <div className="min-w-0 space-y-2.5">
          <p className="font-heading text-2xl font-extrabold sm:text-3xl">
            {SITE_META.name}
          </p>
          <p className="text-sm text-secondary-background/85">
            {copy.footer.operatorNote}
          </p>
          <a
            href={`mailto:${SITE_META.email}`}
            className="inline-flex items-center gap-2 break-all font-heading text-base font-extrabold text-main underline decoration-2 underline-offset-4 sm:text-lg"
          >
            <Mail className="size-4 shrink-0" strokeWidth={2.5} aria-hidden="true" />
            <span>{SITE_META.email}</span>
          </a>
        </div>

        <nav aria-label="Footer navigation" className="shrink-0">
          <ul className="flex flex-wrap items-center gap-2.5 lg:flex-nowrap">
            <li>
              <Link href="/apps/hubz-publisher" className={FOOTER_LINK}>
                <Send className="size-3.5 shrink-0" strokeWidth={2.5} aria-hidden="true" />
                <span>{SITE_META.appName}</span>
              </Link>
            </li>
            <li>
              <Link href="/terms" className={FOOTER_LINK}>
                <Scale className="size-3.5 shrink-0" strokeWidth={2.5} aria-hidden="true" />
                <span>{copy.footer.termsLabel}</span>
              </Link>
            </li>
            <li>
              <Link href="/privacy" className={FOOTER_LINK}>
                <ShieldCheck className="size-3.5 shrink-0" strokeWidth={2.5} aria-hidden="true" />
                <span>{copy.footer.privacyLabel}</span>
              </Link>
            </li>
            <li>
              <a
                href={SITE_META.githubUrl}
                target="_blank"
                rel="noreferrer"
                className={FOOTER_LINK}
              >
                <FolderGit2 className="size-3.5 shrink-0" strokeWidth={2.5} aria-hidden="true" />
                <span>{copy.footer.githubLabel}</span>
              </a>
            </li>
            <li>
              <a
                href="#top"
                className="inline-flex min-h-10 items-center gap-1.5 whitespace-nowrap rounded-base border-2 border-main bg-main px-3 text-xs font-bold text-foreground transition-colors hover:bg-secondary-background hover:border-secondary-background sm:text-sm"
              >
                <ArrowUp className="size-3.5 shrink-0" strokeWidth={2.5} aria-hidden="true" />
                <span>{copy.footer.backToTop}</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
