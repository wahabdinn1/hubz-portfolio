"use client";

import Link from "next/link";
import { ArrowUpRight, Clapperboard, Send } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { ProjectEntry } from "@/content/site";

const PROJECT_STYLES = [
  { strip: "bg-coral", Icon: Send },
  { strip: "bg-violet", Icon: Clapperboard },
];

export function ProjectCards({ projects }: { projects: ProjectEntry[] }) {
  return (
    <ul className="grid gap-6 md:grid-cols-2">
      {projects.map((project, index) => {
        const { strip, Icon } = PROJECT_STYLES[index % PROJECT_STYLES.length];
        return (
          <li key={project.name} className="min-w-0">
            <Card className="h-full gap-0 overflow-hidden border-3 bg-secondary-background py-0">
              <CardHeader
                className={`flex flex-row items-center justify-between gap-4 border-b-3 border-border px-6 py-5 ${strip}`}
              >
                <CardTitle>
                  <h3 className="text-[clamp(1.75rem,3vw,2.25rem)]">{project.name}</h3>
                </CardTitle>
                <span
                  aria-hidden="true"
                  className="grid size-11 shrink-0 place-items-center rounded-base border-2 border-border bg-secondary-background shadow-sm"
                >
                  <Icon className="size-5" strokeWidth={2.5} />
                </span>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col gap-6 p-6">
                <p>{project.summary}</p>
                <ul aria-label="Stack" className="flex flex-wrap gap-2">
                  {project.stack.split(", ").map((tool) => (
                    <li key={tool}>
                      <Badge variant="neutral" className="font-bold">
                        {tool}
                      </Badge>
                    </li>
                  ))}
                </ul>
                {project.href && project.linkLabel && (
                  <div className="mt-auto pt-2">
                    <Button nativeButton={false} render={<Link href={project.href} />}>
                      <span>{project.linkLabel}</span>
                      <ArrowUpRight strokeWidth={2.5} aria-hidden="true" />
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </li>
        );
      })}
    </ul>
  );
}
