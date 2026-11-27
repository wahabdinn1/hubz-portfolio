import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <PageShell pathname="/404">
      <div className="flex flex-1 flex-col items-start justify-center gap-8 py-16 sm:py-24">
        <p
          aria-hidden="true"
          className="-rotate-3 rounded-base border-3 border-border bg-coral px-8 py-3 font-heading text-7xl font-extrabold shadow-shadow sm:text-8xl"
        >
          404
        </p>
        <div className="max-w-[46ch] space-y-4">
          <h1 className="text-4xl sm:text-5xl">Page not found</h1>
          <p className="text-lg">
            The requested URL does not exist on wahabdinn.my.id. Go back to the
            overview or open the legal pages.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Button
            variant="dark"
            size="lg"
            nativeButton={false}
            render={<Link href="/" />}
          >
            Back to overview
          </Button>
          <Button
            variant="neutral"
            size="lg"
            nativeButton={false}
            render={<Link href="/terms" />}
          >
            Terms of Service
          </Button>
        </div>
      </div>
    </PageShell>
  );
}
