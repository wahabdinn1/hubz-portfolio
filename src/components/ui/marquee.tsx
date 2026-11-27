"use client";

import { useState } from "react";
import { Pause, Play } from "lucide-react";

const SEPARATOR = "✦";

export default function Marquee({
  items,
  label,
  pauseLabel = "Pause scrolling ticker",
  playLabel = "Play scrolling ticker",
}: {
  items: string[];
  label: string;
  pauseLabel?: string;
  playLabel?: string;
}) {
  const [paused, setPaused] = useState(false);

  const trackState = paused
    ? "[animation-play-state:paused]"
    : "group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused]";

  const row = (hidden: boolean, className: string) => (
    <div
      aria-hidden={hidden || undefined}
      className={`${className} ${trackState} flex shrink-0 items-center whitespace-nowrap py-4 motion-reduce:animate-none`}
    >
      {items.map((item) => (
        <span key={item} className="flex items-center">
          <span className="mx-5 font-heading text-xl font-extrabold uppercase sm:text-2xl">
            {item}
          </span>
          <span aria-hidden="true" className="text-lg">
            {SEPARATOR}
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <section
      aria-label={label}
      className="group flex w-full items-stretch border-y-3 border-border bg-main text-main-foreground"
    >
      <div className="relative flex min-w-0 flex-1 overflow-x-hidden">
        {row(false, "animate-marquee")}
        {row(true, "absolute top-0 animate-marquee2 motion-reduce:hidden")}
      </div>

      <button
        type="button"
        onClick={() => setPaused((prev) => !prev)}
        aria-pressed={paused}
        aria-label={paused ? playLabel : pauseLabel}
        title={paused ? playLabel : pauseLabel}
        className="motion-reduce:hidden grid w-14 shrink-0 cursor-pointer place-items-center border-l-3 border-border bg-secondary-background text-foreground transition-colors hover:bg-foreground hover:text-secondary-background"
      >
        {paused ? (
          <Play className="size-4" strokeWidth={2.5} aria-hidden="true" />
        ) : (
          <Pause className="size-4" strokeWidth={2.5} aria-hidden="true" />
        )}
      </button>
    </section>
  );
}
