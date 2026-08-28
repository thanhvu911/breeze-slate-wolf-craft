import { createFileRoute } from "@tanstack/react-router";
import { CountyMap } from "@/components/county-map";
import { FactTable } from "@/components/fact-table";
import { KpiCard } from "@/components/kpi-card";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { housingMetrics, mentalHealthMetrics } from "@/lib/data";
import { keyFacts } from "@/lib/internal";

export const Route = createFileRoute("/environment")({ component: EnvironmentPage });

function EnvironmentPage() {
  return (
    <div>
      <PageHeader
        kicker="Internal · environmental"
        title="Land, housing, and care as one county system"
        description="The Statement of Impact treats environmental restoration as community infrastructure: a 3.5-mile greenway, restored wetlands, farmland, and the human systems — housing and mental health — that determine whether people can actually use those places."
      />

      <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <KpiCard label="Blue Green Connector" value="3.5 mi" hint="ADA-accessible greenway along the Little Conestoga Creek" />
        <KpiCard label="Tenfold served" value="134" hint="56 transitioned to permanent housing in 2025" />
        <KpiCard label="Crisis Walk-In visits" value="1,718" hint="90% did not require transfer to the Emergency Department" />
        <KpiCard label="ECHOS individuals" value="322" hint="Bilingual, low-barrier housing case management" />
      </section>

      <section className="mt-6">
        <FactTable
          facts={keyFacts.filter((f) => f.href === "/environment")}
          title="Environment, housing, and health figures"
          description="Use these in a site visit or board packet. The map below is schematic, not GIS."
        />
      </section>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>County map of stewardship sites</CardTitle>
          <CardDescription>
            Schematic Lancaster County outline with 2025 sites from the impact statement. Select a pin for the published description.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CountyMap />
        </CardContent>
      </Card>

      <section className="mt-6 grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Housing accessibility</CardTitle>
            <CardDescription>Tenfold TLC, Barshinger Financial Empowerment Center, and ECHOS Enrichment Center.</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-3">
            {housingMetrics.map((m) => (
              <div key={m.label} className="rounded-lg bg-surface-2/80 p-3">
                <p className="font-display text-xl tabular-nums">{m.value}</p>
                <p className="mt-1 text-xs text-muted">{m.label}</p>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Mental health access</CardTitle>
            <CardDescription>Touchstone MHAA, Clinical Supervision Collaborative, and LGH Crisis Walk-In Center.</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-3">
            {mentalHealthMetrics.map((m) => (
              <div key={m.label} className="rounded-lg bg-surface-2/80 p-3">
                <p className="font-display text-xl tabular-nums">{m.value}</p>
                <p className="mt-1 text-xs text-muted">{m.label}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Blue Green Connector</CardTitle>
          <CardDescription>One of Lancaster County’s largest environmental initiatives — restoration, recreation, education, art, and research in a single corridor.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-2">
          <blockquote className="border-l-2 border-primary pl-4 text-sm text-pretty">
            “This project will be accessible for all community and non-community members to enjoy. The Blue Green Connector is a pathway to nature and learning in a natural, non-simulated, real time environment.”
            <footer className="mt-2 text-muted">Louise D. Ulrich, East Hempfield Township</footer>
          </blockquote>
          <p className="text-sm text-muted text-pretty">
            Restored wetlands along the Little Conestoga Creek in Lancaster Township sit inside a corridor that links neighborhoods, schools, parks, workplaces, and healthcare destinations. Related 2025 stewardship also includes Lancaster Farmland Trust and civic-history work (Witness Stones, Parish Resource Center).
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
