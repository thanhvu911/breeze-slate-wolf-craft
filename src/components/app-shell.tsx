import { Link, useRouterState } from "@tanstack/react-router";
import { ClipboardList, Leaf, Newspaper, PieChart, Radio, Sprout } from "lucide-react";
import { cn } from "@/lib/utils";
import { desk } from "@/lib/internal";

const nav = [
  { to: "/", label: "Team desk", icon: ClipboardList },
  { to: "/reach", label: "Reach", icon: Radio },
  { to: "/environment", label: "Environment", icon: Leaf },
  { to: "/grants", label: "Grants", icon: Sprout },
  { to: "/journalism", label: "Journalism", icon: Newspaper },
  { to: "/overview", label: "Board snapshot", icon: PieChart },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="min-h-dvh bg-bg text-foreground">
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-1.5 text-xs sm:px-6">
          <p className="font-medium tracking-wide uppercase">{desk.classification}</p>
          <p className="text-primary-foreground/80">{desk.audience}</p>
        </div>
      </div>
      <header className="sticky top-0 z-30 border-b border-border bg-bg/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 sm:px-6">
          <Link to="/" className="flex min-w-0 shrink-0 items-center gap-3">
            <span className="flex size-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <Sprout className="size-4" />
            </span>
            <span className="min-w-0">
              <span className="block font-display text-base leading-tight tracking-tight">Steinman internal desk</span>
              <span className="block text-xs text-muted">2025 figures · staff review</span>
            </span>
          </Link>
        </div>
        <nav className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-4 pb-3 sm:px-6">
          {nav.map((item) => {
            const active = pathname === item.to;
            const Icon = item.icon;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "inline-flex h-10 shrink-0 items-center gap-2 rounded-md px-3 text-sm font-medium text-muted transition-colors duration-[var(--motion-quick)] hover:bg-surface-2 hover:text-foreground",
                  active && "bg-surface-2 text-foreground",
                )}
              >
                <Icon className="size-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </header>
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8">{children}</main>
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            {desk.source} · {desk.asOf}
          </p>
          <p>Internal concept · do not circulate as audited financials</p>
        </div>
      </footer>
    </div>
  );
}
