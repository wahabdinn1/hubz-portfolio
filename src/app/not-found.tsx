import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";

export default function NotFoundPage() {
  return (
    <div id="top" className="flex min-h-dvh flex-col bg-paper text-ink">
      <SiteHeader locale="en" pathname="/" />
      <main
        id="main-content"
        className="mx-auto flex w-full max-w-[1120px] flex-1 flex-col justify-center px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="max-w-[46ch] space-y-6">
          <p className="tabular-num font-mono text-sm text-muted-ink">404</p>
          <h1 className="font-display text-5xl font-normal text-ink">
            Page not found
          </h1>
          <p className="text-base text-ink-2">
            The requested URL does not exist on wahabdinn.my.id. Return to the
            portfolio overview or inspect the legal pages below.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button
              variant="default"
              nativeButton={false}
              render={<Link href="/" />}
            >
              Back to overview
            </Button>
            <Button
              variant="outline"
              nativeButton={false}
              render={<Link href="/terms" />}
            >
              Terms of Service
            </Button>
          </div>
        </div>
      </main>
      <SiteFooter locale="en" />
    </div>
  );
}
