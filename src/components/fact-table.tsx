import { Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { CopyValue } from "@/components/copy-value";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { type FactArea, type KeyFact } from "@/lib/internal";
import { cn } from "@/lib/utils";

const areas: Array<FactArea | "All"> = [
  "All",
  "Money",
  "County",
  "Workforce",
  "Early learning",
  "Housing",
  "Health",
  "Journalism",
  "Stewardship",
];

export function FactTable({
  facts,
  title = "Numbers to use",
  description = "Search or filter. Copy the figure for a slide or email. Notes are for internal use — say them only if asked.",
}: {
  facts: KeyFact[];
  title?: string;
  description?: string;
}) {
  const [q, setQ] = useState("");
  const [area, setArea] = useState<FactArea | "All">("All");

  const rows = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return facts.filter((f) => {
      if (area !== "All" && f.area !== area) return false;
      if (!needle) return true;
      return `${f.metric} ${f.value} ${f.note} ${f.area}`.toLowerCase().includes(needle);
    });
  }, [facts, q, area]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <label className="sr-only" htmlFor="fact-search">
            Search figures
          </label>
          <input
            id="fact-search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search a number, program, or word…"
            className="h-11 w-full rounded-md border border-border bg-bg px-3 text-sm outline-none ring-ring focus:ring-2 sm:max-w-sm"
          />
          <p className="text-xs text-muted tabular-nums">{rows.length} figures</p>
        </div>
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
          {areas.map((a) => (
            <button
              key={a}
              type="button"
              onClick={() => setArea(a)}
              className={cn(
                "h-9 shrink-0 rounded-full px-3 text-xs font-medium",
                area === a ? "bg-primary text-primary-foreground" : "bg-surface-2 text-muted hover:text-foreground",
              )}
            >
              {a}
            </button>
          ))}
        </div>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="border-b border-border text-xs uppercase tracking-wider text-muted">
                <th className="py-2 pr-3 font-medium">Area</th>
                <th className="py-2 pr-3 font-medium">Metric</th>
                <th className="py-2 pr-3 font-medium">Figure</th>
                <th className="py-2 pr-3 font-medium">If asked</th>
                <th className="py-2 font-medium"> </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={`${row.area}-${row.metric}`} className="border-b border-border/70 align-top">
                  <td className="py-3 pr-3 text-xs text-muted">{row.area}</td>
                  <td className="py-3 pr-3 font-medium">{row.metric}</td>
                  <td className="py-3 pr-3 font-display text-base tabular-nums">{row.value}</td>
                  <td className="py-3 pr-3 text-muted text-pretty">{row.note}</td>
                  <td className="py-3">
                    <div className="flex items-center justify-end gap-1">
                      <CopyValue text={`${row.metric}: ${row.value}`} />
                      <Link to={row.href} className="px-2 text-xs text-primary hover:underline">
                        View
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {rows.length === 0 ? <p className="py-8 text-center text-sm text-muted">No figures match that search.</p> : null}
        </div>
      </CardContent>
    </Card>
  );
}
