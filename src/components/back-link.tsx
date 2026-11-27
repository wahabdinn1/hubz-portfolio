import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function BackLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 self-start rounded-base border-2 border-border bg-secondary-background px-3 py-1.5 text-sm font-bold shadow-sm hover:bg-main"
    >
      <ArrowLeft className="size-4" aria-hidden="true" />
      <span>{label}</span>
    </Link>
  );
}
