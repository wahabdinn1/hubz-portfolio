export function SectionHeading({
  id,
  title,
  intro,
}: {
  id: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="grid gap-3 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:items-end">
      <h2 id={id} className="text-[clamp(2rem,4.5vw,3.5rem)]">
        {title}
      </h2>
      {intro && <p className="max-w-[48ch] text-lg">{intro}</p>}
    </div>
  );
}
