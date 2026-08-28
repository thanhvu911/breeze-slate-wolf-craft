import { createFileRoute } from "@tanstack/react-router";
import { FactTable } from "@/components/fact-table";
import { KpiCard } from "@/components/kpi-card";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { journalismAssumptions, journalismMilestones, journalismProjects } from "@/lib/data";
import { keyFacts } from "@/lib/internal";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/journalism")({ component: JournalismPage });

const statusLabel = {
  holding: "Holding true",
  "in-progress": "In progress",
} as const;

function JournalismPage() {
  return (
    <div>
      <PageHeader
        kicker="Internal · journalism"
        title="Which civic-information projects are funded — and which assumptions still hold"
        description="Strong communities depend on trusted information. 2025 work centered the Lancaster County Local Journalism Fund, a regional information-ecosystem map, and civic convenings — including Louder Than Guns."
      />

      <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <KpiCard label="Local Journalism Fund" value="Active" hint="Unified structure initiated with the Steinman Institute for Civic Engagement" />
        <KpiCard label="Ecosystem map" value="Launched" hint="First Central PA Information Ecosystem Map — news-access gaps and collaboration" />
        <KpiCard label="Messaging framework" value="Complete" hint="Research-backed public support for local news with Press Forward Central PA" />
        <KpiCard label="Louder Than Guns" value="2 events" hint="Countywide convenings on gun violence, youth voice, and mental health" />
      </section>

      <section className="mt-6">
        <FactTable
          facts={keyFacts.filter((f) => f.href === "/journalism")}
          title="Journalism & civic figures"
          description="Confirm assumption labels with the Local Journalism Fund before board use."
        />
      </section>

      <section className="mt-6 grid gap-4 lg:grid-cols-5">
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Assumption tracker</CardTitle>
            <CardDescription>
              The questions the organization is effectively testing. Status is inferred from 2025 published milestones — not a scored evaluation.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            {journalismAssumptions.map((row) => (
              <article key={row.question} className="rounded-lg border border-border p-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="max-w-xl font-display text-lg font-medium tracking-tight text-pretty">{row.question}</h3>
                  <span
                    className={cn(
                      "rounded-full px-3 py-1 text-xs font-medium",
                      row.status === "holding" ? "bg-primary-soft text-primary" : "bg-surface-2 text-muted",
                    )}
                  >
                    {statusLabel[row.status]}
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted text-pretty">{row.evidence}</p>
              </article>
            ))}
          </CardContent>
        </Card>
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>2025 milestones</CardTitle>
            <CardDescription>From the Local Journalism & Media Literacy chapter.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            {journalismMilestones.map((m) => (
              <div key={m.title}>
                <p className="text-sm font-medium">{m.title}</p>
                <p className="text-sm text-muted text-pretty">{m.detail}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Funded and convened projects</CardTitle>
          <CardDescription>Portfolio view of journalism, civic information, and related major convenings.</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="grid gap-3 md:grid-cols-2">
            {journalismProjects.map((p) => (
              <li key={p.name} className="flex items-start justify-between gap-3 rounded-lg border border-border p-4">
                <div>
                  <p className="font-medium">{p.name}</p>
                  <p className="text-sm text-muted">{p.focus}</p>
                </div>
                <span className="shrink-0 rounded-full bg-primary-soft px-2.5 py-1 text-xs font-medium text-primary">{p.status}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Related civic history & belonging</CardTitle>
          <CardDescription>Adjacent 2025 grants that sit with journalism’s civic mandate.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-3">
          <div>
            <p className="font-display text-3xl tabular-nums">80</p>
            <p className="mt-1 text-sm text-muted">Households served in PIAC’s first five weeks after losing legal status and work authorization.</p>
          </div>
          <div>
            <p className="font-display text-3xl tabular-nums">400+</p>
            <p className="mt-1 text-sm text-muted">Enslaved men, women, and children acknowledged regionally by the Witness Stones Project.</p>
          </div>
          <div>
            <p className="font-display text-3xl tabular-nums">75</p>
            <p className="mt-1 text-sm text-muted">Individuals honored locally in Lancaster County; additional installations planned for 2026.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
