export function PageHeader({
  kicker,
  title,
  description,
}: {
  kicker: string;
  title: string;
  description: string;
}) {
  return (
    <header className="mb-8 max-w-3xl">
      <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">{kicker}</p>
      <h1 className="mt-2 font-display text-3xl font-medium tracking-tight text-balance sm:text-4xl">{title}</h1>
      <p className="mt-3 text-base text-muted text-pretty">{description}</p>
    </header>
  );
}
