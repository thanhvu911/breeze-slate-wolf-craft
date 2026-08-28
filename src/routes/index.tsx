import { createFileRoute, Link } from "@tanstack/react-router";
import { CopyValue } from "@/components/copy-value";
import { FactTable } from "@/components/fact-table";
import { PageHeader } from "@/components/page-header";
import { StatusPill } from "@/components/status-pill";
import { TeamNotes } from "@/components/team-notes";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { checkIn, desk, deskStatus, headlineFacts, keyFacts, talkingPoints, watchItems } from "@/lib/internal";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({ component: TeamDesk });

function TeamDesk() {
  return (
    <div>
      <PageHeader
        kicker="Internal team desk"
        title="The numbers, in one place"
        description="Built for staff to scan before a meeting. Headline figures first, then a searchable table. Source is the published 2025 Statement of Impact — not a live finance feed."
      />

      <p className="mb-6 text-sm text-muted">
        {desk.refreshed} · {desk.source}
      </p>

      <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {headlineFacts.map((fact) => (
          <div key={fact.metric} className="rounded-xl border border-border bg-surface p-5 shadow-sm">
            <div className="flex items-start justify-between gap-2">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted">{fact.metric}</p>
              <CopyValue text={`${fact.metric}: ${fact.value}`} />
            </div>
            <p className="mt-2 font-display text-3xl font-medium tracking-tight tabular-nums sm:text-4xl">{fact.value}</p>
            <p className="mt-2 text-sm text-muted text-pretty">{fact.note}</p>
          </div>
        ))}
      </section>

      <section className="mt-6">
        <FactTable facts={keyFacts} />
      </section>

      <section className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {deskStatus.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="rounded-xl border border-border bg-surface p-5 shadow-sm transition-colors duration-[var(--motion-quick)] hover:bg-surface-2"
          >
            <div className="flex items-center justify-between gap-2">
              <p className="font-display text-lg font-medium tracking-tight">{item.title}</p>
              <StatusPill status={item.status} />
            </div>
            <p className="mt-2 text-sm text-muted">{item.note}</p>
          </Link>
        ))}
      </section>

      <section className="mt-6 grid gap-4 lg:grid-cols-5">
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Say this in ten minutes</CardTitle>
            <CardDescription>Owners are functional, not job titles. Copy from the table if you need the exact figure.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3">
            {talkingPoints.map((row) => (
              <div key={row.point} className="flex gap-3 rounded-lg border border-border p-3">
                <span className="mt-0.5 w-24 shrink-0 text-xs font-medium uppercase tracking-wider text-primary">{row.owner}</span>
                <p className="text-sm text-pretty">{row.point}</p>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Check-in agenda</CardTitle>
            <CardDescription>First working session, then less often.</CardDescription>
          </CardHeader>
          <CardContent>
            <ol className="grid gap-3">
              {checkIn.map((q, i) => (
                <li key={q} className="flex gap-3 text-sm">
                  <span className="font-display text-muted tabular-nums">{i + 1}</span>
                  <span className="text-pretty">{q}</span>
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>
      </section>

      <section className="mt-6">
        <h2 className="mb-3 font-display text-xl font-medium tracking-tight">Watch list</h2>
        <ul className="grid gap-3">
          {watchItems.map((item) => (
            <li key={item.title} className="rounded-xl border border-border bg-surface p-5">
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className={cn(
                    "rounded-full px-2.5 py-1 text-xs font-medium",
                    item.severity === "gap" && "bg-surface-2 text-foreground",
                    item.severity === "watch" && "bg-primary-soft text-primary",
                    item.severity === "next" && "bg-surface-2 text-muted",
                  )}
                >
                  {item.severity === "gap" ? "Data gap" : item.severity === "watch" ? "Watch" : "Next phase"}
                </span>
                <span className="text-xs uppercase tracking-wider text-muted">{item.owner}</span>
              </div>
              <p className="mt-2 font-medium">{item.title}</p>
              <p className="mt-1 text-sm text-muted text-pretty">{item.detail}</p>
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-6">
        <TeamNotes />
      </div>
    </div>
  );
}
