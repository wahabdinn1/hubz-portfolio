const SEPARATOR = "✦";

export default function Marquee({
  items,
  label,
}: {
  items: string[];
  label: string;
}) {
  const row = (hidden: boolean, className: string) => (
    <div
      aria-hidden={hidden || undefined}
      className={`${className} flex shrink-0 items-center whitespace-nowrap py-4 motion-reduce:animate-none`}
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
      className="relative flex w-full overflow-x-hidden border-y-3 border-border bg-main text-main-foreground"
    >
      {row(false, "animate-marquee")}
      {row(true, "absolute top-0 animate-marquee2 motion-reduce:hidden")}
    </section>
  );
}
