import { cn } from "@/lib/utils";

export function StatusPill({ status }: { status: string }) {
  const tone =
    status === "Ready"
      ? "bg-primary-soft text-primary"
      : status === "Watch"
        ? "bg-surface-2 text-foreground"
        : "bg-surface-2 text-muted";
  return (
    <span className={cn("rounded-full px-2.5 py-1 text-xs font-medium", tone)}>{status}</span>
  );
}
