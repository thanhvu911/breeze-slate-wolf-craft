import { createFileRoute, Link } from "@tanstack/react-router";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { ClientChart } from "@/components/client-chart";
import { KpiCard } from "@/components/kpi-card";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { county, foundation, fundingByArea, insights } from "@/lib/data";
import { formatNum, formatUsd } from "@/lib/utils";

export const Route = createFileRoute("/overview")({ component: OverviewPage });

const pieColors = ["var(--color-primary)", "var(--color-accent)", "var(--color-chart-3)"];

function OverviewPage() {
  return (
    <div>
      <PageHeader
        kicker="Public snapshot · 2025"
        title="How the foundation showed up for Lancaster County"
        description={`${foundation.mission} Ten-second board read: dollars deployed, people reached, and where the work concentrated.`}
      />

      <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <KpiCard
          label="Allocated in 2025"
          value={formatUsd(foundation.totalAllocated2025)}
          hint="Total funding to support the Lancaster County community"
        />
        <KpiCard
          label="Lifetime philanthropy"
          value="Over $130M"
          hint={`Since ${foundation.founded}, from a family enterprise rooted in Lancaster`}
        />
        <KpiCard
          label="County residents"
          value={formatNum(county.residents)}
          hint={`+${county.popGrowth10yr}% population over 10 years · ${county.unemployment}% unemployment`}
        />
        <KpiCard
          label="Overall posture"
          value="Growing"
          hint="County demand is up; 2025 investments followed talent, early learning, housing, and trusted news."
        />
      </section>

      <section className="mt-6 grid gap-4 lg:grid-cols-5">
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Where 2025 dollars went</CardTitle>
            <CardDescription>
              Published totals for Economic & Workforce and Community Stewardship; remaining 2025 allocations grouped as journalism, early learning, and education.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 sm:grid-cols-2">
            <ClientChart height={240}>
              <div className="h-60">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={[...fundingByArea]} dataKey="amount" nameKey="name" innerRadius={58} outerRadius={88} paddingAngle={2}>
                      {fundingByArea.map((entry, i) => (
                        <Cell key={entry.key} fill={pieColors[i]} stroke="var(--color-surface)" />
                      ))}
                    </Pie>
                    <Tooltip
                      formatter={(v: number) => formatUsd(v)}
                      contentStyle={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: 8 }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </ClientChart>
            <ul className="flex flex-col justify-center gap-3">
              {fundingByArea.map((row, i) => (
                <li key={row.key} className="flex items-start gap-3">
                  <span className="mt-1 size-2.5 shrink-0 rounded-full" style={{ background: pieColors[i] }} />
                  <span>
                    <span className="block text-sm font-medium">{row.name}</span>
                    <span className="block text-sm tabular-nums text-muted">{formatUsd(row.amount)}</span>
                  </span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Lancaster County context</CardTitle>
            <CardDescription>The numbers the foundation is investing against.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <StatRow label="Residents" value={formatNum(county.residents)} />
            <StatRow label="10-year population growth" value={`+${county.popGrowth10yr}%`} />
            <StatRow label="Growth in 55+ population" value={`+${county.growth55plus}%`} />
            <StatRow label="Unemployment (2025)" value={`${county.unemployment}%`} />
          </CardContent>
        </Card>
      </section>

      <section className="mt-6 grid gap-3 md:grid-cols-2">
        {insights.map((item) => (
          <Card key={item.title} className="p-5">
            <p className="font-display text-lg font-medium tracking-tight">{item.title}</p>
            <p className="mt-2 text-sm text-muted text-pretty">{item.body}</p>
          </Card>
        ))}
      </section>

      <p className="mt-6 text-sm text-muted">
        For flags, owners, and check-in questions, use the{" "}
        <Link to="/" className="text-primary underline-offset-2 hover:underline">
          team desk
        </Link>
        .
      </p>
    </div>
  );
}

function StatRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-3 border-b border-border pb-3 last:border-0 last:pb-0">
      <span className="text-sm text-muted">{label}</span>
      <span className="font-display text-xl tabular-nums">{value}</span>
    </div>
  );
}
