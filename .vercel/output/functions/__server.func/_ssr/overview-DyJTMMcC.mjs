import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as formatUsd, u as formatNum } from "./router-XdJlhW9X.mjs";
import { a as CardTitle, i as CardHeader, n as CardContent, r as CardDescription, s as PageHeader, t as Card } from "./page-header-JsxPbmIy.mjs";
import { c as fundingByArea, d as insights, n as county, s as foundation, t as KpiCard } from "./kpi-card-CaTxYSfO.mjs";
import { t as ClientChart } from "./client-chart-Dcw6nPE9.mjs";
import { c as Cell, l as ResponsiveContainer, s as Pie, t as PieChart, u as Tooltip } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/overview-DyJTMMcC.js
var import_jsx_runtime = require_jsx_runtime();
var pieColors = [
	"var(--color-primary)",
	"var(--color-accent)",
	"var(--color-chart-3)"
];
function OverviewPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			kicker: "Public snapshot · 2025",
			title: "How the foundation showed up for Lancaster County",
			description: `${foundation.mission} Ten-second board read: dollars deployed, people reached, and where the work concentrated.`
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "grid gap-3 sm:grid-cols-2 xl:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
					label: "Allocated in 2025",
					value: formatUsd(foundation.totalAllocated2025),
					hint: "Total funding to support the Lancaster County community"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
					label: "Lifetime philanthropy",
					value: "Over $130M",
					hint: `Since ${foundation.founded}, from a family enterprise rooted in Lancaster`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
					label: "County residents",
					value: formatNum(county.residents),
					hint: `+${county.popGrowth10yr}% population over 10 years · ${county.unemployment}% unemployment`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
					label: "Overall posture",
					value: "Growing",
					hint: "County demand is up; 2025 investments followed talent, early learning, housing, and trusted news."
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-6 grid gap-4 lg:grid-cols-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "lg:col-span-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Where 2025 dollars went" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Published totals for Economic & Workforce and Community Stewardship; remaining 2025 allocations grouped as journalism, early learning, and education." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
					className: "grid gap-4 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClientChart, {
						height: 240,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-60",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
								width: "100%",
								height: "100%",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PieChart, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pie, {
									data: [...fundingByArea],
									dataKey: "amount",
									nameKey: "name",
									innerRadius: 58,
									outerRadius: 88,
									paddingAngle: 2,
									children: fundingByArea.map((entry, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, {
										fill: pieColors[i],
										stroke: "var(--color-surface)"
									}, entry.key))
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
									formatter: (v) => formatUsd(v),
									contentStyle: {
										background: "var(--color-surface)",
										border: "1px solid var(--color-border)",
										borderRadius: 8
									}
								})] })
							})
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "flex flex-col justify-center gap-3",
						children: fundingByArea.map((row, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 size-2.5 shrink-0 rounded-full",
								style: { background: pieColors[i] }
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-sm font-medium",
								children: row.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-sm tabular-nums text-muted",
								children: formatUsd(row.amount)
							})] })]
						}, row.key))
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "lg:col-span-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Lancaster County context" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "The numbers the foundation is investing against." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
					className: "grid gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatRow, {
							label: "Residents",
							value: formatNum(county.residents)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatRow, {
							label: "10-year population growth",
							value: `+${county.popGrowth10yr}%`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatRow, {
							label: "Growth in 55+ population",
							value: `+${county.growth55plus}%`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatRow, {
							label: "Unemployment (2025)",
							value: `${county.unemployment}%`
						})
					]
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mt-6 grid gap-3 md:grid-cols-2",
			children: insights.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-lg font-medium tracking-tight",
					children: item.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted text-pretty",
					children: item.body
				})]
			}, item.title))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-6 text-sm text-muted",
			children: [
				"For flags, owners, and check-in questions, use the",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "text-primary underline-offset-2 hover:underline",
					children: "team desk"
				}),
				"."
			]
		})
	] });
}
function StatRow({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-baseline justify-between gap-3 border-b border-border pb-3 last:border-0 last:pb-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-sm text-muted",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-display text-xl tabular-nums",
			children: value
		})]
	});
}
//#endregion
export { OverviewPage as component };
