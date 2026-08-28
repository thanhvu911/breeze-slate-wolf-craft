import { Card } from "@/components/ui/card";
import { CopyValue } from "@/components/copy-value";
import { cn } from "@/lib/utils";

export function KpiCard({
  label,
  value,
  hint,
  className,
}: {
  label: string;
  value: string;
  hint?: string;
  className?: string;
}) {
  return (
    <Card className={cn("p-5", className)}>
      <div className="flex items-start justify-between gap-2">
        <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted">{label}</p>
        <CopyValue text={`${label}: ${value}`} />
      </div>
      <p className="mt-2 font-display text-3xl font-medium tracking-tight tabular-nums sm:text-4xl">{value}</p>
      {hint ? <p className="mt-2 text-sm text-muted text-pretty">{hint}</p> : null}
    </Card>
  );
}
