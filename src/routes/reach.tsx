import { createFileRoute } from "@tanstack/react-router";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { ClientChart } from "@/components/client-chart";
import { KpiCard } from "@/components/kpi-card";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FactTable } from "@/components/fact-table";
import { county, earlyLearning, employerClusters, reachChannels } from "@/lib/data";
import { keyFacts } from "@/lib/internal";
import { formatNum } from "@/lib/utils";

export const Route = createFileRoute("/reach")({ component: ReachPage });

function ReachPage() {
  const topReach = [...reachChannels].sort((a, b) => b.value - a.value).slice(0, 8);

  return (
    <div>
      <PageHeader
        kicker="Internal · reach & impact"
        title="Is the foundation’s reach growing — and why?"
        description="2025 program engagements, stacked against a county that is growing older and still running a 2.9% unemployment rate. The ‘why’ is not a campaign slogan: it is STEM access, workforce pathways, and services people could not otherwise get."
      />

      <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <KpiCard label="Workforce people & partners" value={formatNum(24364)} hint="LCSA, Inspire Lancaster, and employer partnerships" />
        <KpiCard label="Would not have had access" value="73%" hint="Share of LCSA event & program participants without grant support" />
        <KpiCard label="Science Factory visitors" value="84,000+" hint="Early STEM access, including 3,365 children under age 3" />
        <KpiCard
          label="County backdrop"
          value={`+${county.popGrowth10yr}%`}
          hint={`10-year population growth · +${county.growth55plus}% in residents 55+`}
        />
      </section>

      <section className="mt-6">
        <FactTable
          facts={keyFacts.filter((f) => f.href === "/reach")}
          title="Reach figures for this page"
          description="Workforce, early learning, and county context. Copy a row for a slide."
        />
      </section>

      <section className="mt-6 grid gap-4 lg:grid-cols-5">
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>2025 program engagements</CardTitle>
            <CardDescription>
              Counts as published — some people appear in more than one program. This is reach of work, not a unique-person census.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ClientChart height={320}>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={topReach} layout="vertical" margin={{ left: 8, right: 12 }}>
                    <CartesianGrid stroke="var(--color-border)" horizontal={false} />
                    <XAxis type="number" tick={{ fill: "var(--color-muted)", fontSize: 12 }} />
                    <YAxis type="category" dataKey="name" width={128} tick={{ fill: "var(--color-foreground)", fontSize: 11 }} />
                    <Tooltip
                      formatter={(v: number) => formatNum(v)}
                      contentStyle={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: 8 }}
                    />
                    <Bar dataKey="value" fill="var(--color-primary)" radius={[0, 6, 6, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </ClientChart>
          </CardContent>
        </Card>
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Why reach moved in 2025</CardTitle>
            <CardDescription>Drivers named in the Statement of Impact — not modeled estimates.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            {reachChannels.slice(0, 5).map((row) => (
              <div key={row.name}>
                <p className="text-sm font-medium">{row.name}</p>
                <p className="text-sm text-muted text-pretty">{row.why}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      <section className="mt-6 grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Inspire Lancaster · employer career clusters</CardTitle>
            <CardDescription>97 local businesses registered · 308 student users on the work-based learning platform.</CardDescription>
          </CardHeader>
          <CardContent>
            <ClientChart height={280}>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={employerClusters} margin={{ bottom: 48, left: 0, right: 8 }}>
                    <CartesianGrid stroke="var(--color-border)" vertical={false} />
                    <XAxis dataKey="name" interval={0} angle={-35} textAnchor="end" height={70} tick={{ fill: "var(--color-muted)", fontSize: 10 }} />
                    <YAxis tick={{ fill: "var(--color-muted)", fontSize: 12 }} unit="%" />
                    <Tooltip
                      formatter={(v: number) => `${v}%`}
                      contentStyle={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: 8 }}
                    />
                    <Bar dataKey="value" fill="var(--color-accent)" radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </ClientChart>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Early childhood — the pipeline behind the pipeline</CardTitle>
            <CardDescription>Pennsylvania: 56% of children 3–5 enrolled in school; average childcare cost $14,483.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            {earlyLearning.map((row) => (
              <div key={row.label} className="flex items-start justify-between gap-4 border-b border-border pb-3 last:border-0">
                <div>
                  <p className="text-sm font-medium">{row.label}</p>
                  <p className="text-sm text-muted">{row.detail}</p>
                </div>
                <p className="font-display text-2xl tabular-nums">{row.value}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>STEM & live-experience education</CardTitle>
          <CardDescription>5,280 students in STEM pathways · 1,015 partner touchpoints · 117 leaders at Workforce 2030 · 1,390 library STEM participants · 100 LPL On-The-Go van events.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted text-pretty">
            Lancaster County’s live events industry employs 1,750 professionals across Rock Lititz campus companies. Foundation support for PCAD, Rock Lititz, and the Academy of Live Technology expands creative-tech career pathways with DEI-focused recruitment and an employer-aligned curriculum.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
