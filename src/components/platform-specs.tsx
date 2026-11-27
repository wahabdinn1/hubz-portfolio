"use client";

import { Camera, Music2, Play, Share2 } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useI18n } from "@/lib/i18n";

const PLATFORM_ICON_STYLE: Record<
  string,
  { Icon: typeof Play; bg: string }
> = {
  "YouTube Shorts": { Icon: Play, bg: "bg-coral" },
  "Facebook Reels": { Icon: Share2, bg: "bg-main" },
  "Instagram Reels": { Icon: Camera, bg: "bg-violet" },
  TikTok: { Icon: Music2, bg: "bg-mint" },
};

function PlatformBadge({ platform }: { platform: string }) {
  const entry = PLATFORM_ICON_STYLE[platform] ?? { Icon: Play, bg: "bg-main" };
  const Icon = entry.Icon;
  return (
    <span className="inline-flex items-center gap-2.5">
      <span
        aria-hidden="true"
        className={`grid size-8 shrink-0 place-items-center rounded-[6px] border-2 border-border ${entry.bg}`}
      >
        <Icon className="size-4" strokeWidth={2.5} />
      </span>
      <span>{platform}</span>
    </span>
  );
}

function ScopeChips({
  scopes,
  optionalScopes,
  optionalLabel,
}: {
  scopes: string;
  optionalScopes?: string;
  optionalLabel: string;
}) {
  const split = (value?: string) => (value ? value.split(", ") : []);
  return (
    <div className="flex flex-wrap items-center gap-1.5">
      {split(scopes).map((scope) => (
        <code
          key={scope}
          className="rounded-[6px] border-2 border-border bg-mint px-1.5 py-0.5 font-mono text-xs break-all"
        >
          {scope}
        </code>
      ))}
      {optionalScopes && (
        <>
          <span className="text-xs font-bold">{optionalLabel}:</span>
          {split(optionalScopes).map((scope) => (
            <code
              key={scope}
              className="rounded-[6px] border-2 border-dashed border-border bg-secondary-background px-1.5 py-0.5 font-mono text-xs break-all"
            >
              {scope}
            </code>
          ))}
        </>
      )}
    </div>
  );
}

/** Platform envelope: bordered table on lg+, one card per platform below. */
export function PlatformSpecs() {
  const { site: copy } = useI18n();
  const { columns, optionalLabel } = copy.specSection;

  return (
    <>
      <div className="hidden overflow-hidden rounded-base border-3 border-border shadow-shadow lg:block">
        <Table>
          <TableHeader>
            <TableRow className="bg-foreground text-secondary-background">
              <TableHead className="text-secondary-background">{columns.platform}</TableHead>
              <TableHead className="text-secondary-background">{columns.duration}</TableHead>
              <TableHead className="text-secondary-background">{columns.delivery}</TableHead>
              <TableHead className="text-secondary-background">{columns.scopes}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {copy.platformSpecs.map((row) => (
              <TableRow key={row.platform}>
                <TableCell className="align-top font-heading font-extrabold whitespace-nowrap">
                  <PlatformBadge platform={row.platform} />
                </TableCell>
                <TableCell className="align-top whitespace-nowrap tabular-nums">
                  {row.duration}
                </TableCell>
                <TableCell className="align-top">{row.delivery}</TableCell>
                <TableCell className="align-top">
                  <ScopeChips
                    scopes={row.scopes}
                    optionalScopes={row.optionalScopes}
                    optionalLabel={optionalLabel}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <ul className="grid gap-4 sm:grid-cols-2 lg:hidden">
        {copy.platformSpecs.map((row) => (
          <li
            key={row.platform}
            className="min-w-0 space-y-3 rounded-base border-3 border-border bg-secondary-background p-5 shadow-shadow"
          >
            <h3 className="text-xl">
              <PlatformBadge platform={row.platform} />
            </h3>
            <dl className="space-y-2 text-sm">
              <div>
                <dt className="font-bold">{columns.duration}</dt>
                <dd className="tabular-nums">{row.duration}</dd>
              </div>
              <div>
                <dt className="font-bold">{columns.delivery}</dt>
                <dd>{row.delivery}</dd>
              </div>
              <div className="space-y-1">
                <dt className="font-bold">{columns.scopes}</dt>
                <dd>
                  <ScopeChips
                    scopes={row.scopes}
                    optionalScopes={row.optionalScopes}
                    optionalLabel={optionalLabel}
                  />
                </dd>
              </div>
            </dl>
          </li>
        ))}
      </ul>
    </>
  );
}
