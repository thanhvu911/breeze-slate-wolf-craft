import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { ClientChart } from "@/components/client-chart";
import { FactTable } from "@/components/fact-table";
import { KpiCard } from "@/components/kpi-card";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { educationCapital, foundation, grantsKnown, stewardshipOrgs } from "@/lib/data";
import { keyFacts } from "@/lib/internal";
import { formatUsd } from "@/lib/utils";

export const Route = createFileRoute("/grants")({ component: GrantsPage });

function GrantsPage() {
  const [orgQ, setOrgQ] = useState("");
  const chartData = grantsKnown.map((g) => ({
    name: g.name.replace(" Development", "").replace(" Grant Program", ""),
    amount: g.amount,
  }));
  const orgs = useMemo(() => {
    const n = orgQ.trim().toLowerCase();
    return stewardshipOrgs.filter((o) => o.toLowerCase().includes(n));
  }, [orgQ]);

  return (
    <div>
      <PageHeader
        kicker="Internal · grants"
        title="Where 2025 grant money went"
        description="Clear dollars first. The Statement of Impact publishes a countywide total plus two named program totals. Everything else is shown as the remaining 2025 allocation and as longer-horizon education capital."
      />

      <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <KpiCard label="2025 allocated" value={formatUsd(foundation.totalAllocated2025)} hint="Total funding to support Lancaster County" />
        <KpiCard label="Economic & workforce" value={formatUsd(1_924_320)} hint="Activated toward economic and workforce development" />
        <KpiCard label="Community stewardship" value={formatUsd(1_329_005)} hint="Grant program plus donor-advised fund partners" />
        <KpiCard label="Endowments (lifetime)" value="Over $2.5M" hint="At colleges and universities for faculty and students" />
      </section>

      <section className="mt-6">
        <FactTable
          facts={keyFacts.filter((f) => f.href === "/grants")}
          title="Money figures"
          description="Only two 2025 program totals are published. The remainder is grouped until finance splits it."
        />
      </section>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>2025 allocation mix</CardTitle>
          <CardDescription>
            Economic & Workforce and Community Stewardship are published line items. The third bar is the remainder of the $5.31M 2025 total (journalism, early childhood, fellowships, and other focus work).
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ClientChart height={280}>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} margin={{ left: 8, right: 12, bottom: 24 }}>
                  <CartesianGrid stroke="var(--color-border)" vertical={false} />
                  <XAxis dataKey="name" tick={{ fill: "var(--color-muted)", fontSize: 12 }} interval={0} />
                  <YAxis tickFormatter={(v) => `$${Math.round(v / 1_000_000)}M`} tick={{ fill: "var(--color-muted)", fontSize: 12 }} />
                  <Tooltip
                    formatter={(v: number) => formatUsd(v)}
                    contentStyle={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: 8 }}
                  />
                  <Bar dataKey="amount" fill="var(--color-primary)" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </ClientChart>
          <ul className="mt-4 grid gap-3 md:grid-cols-3">
            {grantsKnown.map((g) => (
              <li key={g.name} className="rounded-lg bg-surface-2/80 p-4">
                <p className="font-display text-2xl tabular-nums">{formatUsd(g.amount)}</p>
                <p className="mt-1 text-sm font-medium">{g.name}</p>
                <p className="mt-1 text-xs text-muted text-pretty">{g.note}</p>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <section className="mt-6 grid gap-4 lg:grid-cols-3">
        {educationCapital.map((row) => (
          <Card key={row.name} className="p-5">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted">{row.name}</p>
            <p className="mt-2 font-display text-3xl tabular-nums">{formatUsd(row.amount, true)}</p>
            <p className="mt-2 text-sm text-muted text-pretty">{row.note}</p>
          </Card>
        ))}
      </section>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Community Stewardship partners, 2025</CardTitle>
          <CardDescription>Organizations funded through The Steinman Foundation and its donor-advised fund. Filter by name.</CardDescription>
        </CardHeader>
        <CardContent>
          <input
            value={orgQ}
            onChange={(e) => setOrgQ(e.target.value)}
            placeholder="Find a partner…"
            className="mb-3 h-11 w-full max-w-sm rounded-md border border-border bg-bg px-3 text-sm outline-none ring-ring focus:ring-2"
          />
          <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {orgs.map((org) => (
              <li key={org} className="rounded-md border border-border px-3 py-2 text-sm">
                {org}
              </li>
            ))}
          </ul>
          {orgs.length === 0 ? <p className="py-6 text-sm text-muted">No partner matches that name.</p> : null}
        </CardContent>
      </Card>
    </div>
  );
}
