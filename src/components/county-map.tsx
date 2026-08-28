import { useState } from "react";
import { environmentalSites } from "@/lib/data";
import { cn } from "@/lib/utils";

export function CountyMap() {
  const [active, setActive] = useState(environmentalSites[0].id);
  const site = environmentalSites.find((s) => s.id === active) ?? environmentalSites[0];

  return (
    <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="relative overflow-hidden rounded-lg bg-primary-soft/40">
        <svg viewBox="0 0 100 100" className="h-auto w-full" role="img" aria-label="Lancaster County project map">
          <path
            d="M28 18 C36 10, 52 8, 64 12 C76 16, 86 22, 88 34 C91 48, 86 62, 80 72 C72 86, 58 92, 44 90 C30 88, 18 78, 16 64 C14 50, 18 28, 28 18 Z"
            className="fill-primary/25 stroke-primary/50"
            strokeWidth="0.8"
          />
          <path
            d="M30 52 C38 48, 46 54, 52 50 C58 46, 50 42, 44 44"
            className="fill-none stroke-accent"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          {environmentalSites.map((pin) => (
            <g key={pin.id} className="cursor-pointer" onClick={() => setActive(pin.id)}>
              <circle
                cx={pin.x}
                cy={pin.y}
                r={active === pin.id ? 3.2 : 2.2}
                className={cn(active === pin.id ? "fill-primary" : "fill-accent")}
              />
              <circle cx={pin.x} cy={pin.y} r="5" className="fill-transparent" />
            </g>
          ))}
        </svg>
        <p className="absolute bottom-3 left-3 text-xs text-muted">Lancaster County · select a site</p>
      </div>
      <div className="flex flex-col gap-2">
        {environmentalSites.map((pin) => (
          <button
            key={pin.id}
            type="button"
            onClick={() => setActive(pin.id)}
            className={cn(
              "rounded-lg border px-4 py-3 text-left transition-colors duration-[var(--motion-quick)]",
              active === pin.id ? "border-primary bg-primary-soft/50" : "border-border bg-surface hover:bg-surface-2",
            )}
          >
            <p className="text-sm font-medium">{pin.name}</p>
            <p className="text-xs uppercase tracking-wider text-muted">{pin.kind}</p>
          </button>
        ))}
        <p className="mt-1 text-sm text-muted text-pretty">{site.detail}</p>
      </div>
    </div>
  );
}
