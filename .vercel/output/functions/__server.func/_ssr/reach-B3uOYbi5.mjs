import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as keyFacts, u as formatNum } from "./router-XdJlhW9X.mjs";
import { a as CardTitle, i as CardHeader, n as CardContent, r as CardDescription, s as PageHeader, t as Card } from "./page-header-JsxPbmIy.mjs";
import { a as employerClusters, g as reachChannels, n as county, r as earlyLearning, t as KpiCard } from "./kpi-card-CaTxYSfO.mjs";
import { t as FactTable } from "./fact-table-DK3jYE4M.mjs";
import { t as ClientChart } from "./client-chart-Dcw6nPE9.mjs";
import { a as CartesianGrid, i as XAxis, l as ResponsiveContainer, n as BarChart, o as Bar, r as YAxis, u as Tooltip } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/reach-B3uOYbi5.js
var import_jsx_runtime = require_jsx_runtime();
function ReachPage() {
	const topReach = [...reachChannels].sort((a, b) => b.value - a.value).slice(0, 8);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			kicker: "Internal · reach & impact",
			title: "Is the foundation’s reach growing — and why?",
			description: "2025 program engagements, stacked against a county that is growing older and still running a 2.9% unemployment rate. The ‘why’ is not a campaign slogan: it is STEM access, workforce pathways, and services people could not otherwise get."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "grid gap-3 sm:grid-cols-2 xl:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
					label: "Workforce people & partners",
					value: formatNum(24364),
					hint: "LCSA, Inspire Lancaster, and employer partnerships"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
					label: "Would not have had access",
					value: "73%",
					hint: "Share of LCSA event & program participants without grant support"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
					label: "Science Factory visitors",
					value: "84,000+",
					hint: "Early STEM access, including 3,365 children under age 3"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
					label: "County backdrop",
					value: `+${county.popGrowth10yr}%`,
					hint: `10-year population growth · +${county.growth55plus}% in residents 55+`
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mt-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FactTable, {
				facts: keyFacts.filter((f) => f.href === "/reach"),
				title: "Reach figures for this page",
				description: "Workforce, early learning, and county context. Copy a row for a slide."
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-6 grid gap-4 lg:grid-cols-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "lg:col-span-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "2025 program engagements" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Counts as published — some people appear in more than one program. This is reach of work, not a unique-person census." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClientChart, {
					height: 320,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-80",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
							width: "100%",
							height: "100%",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
								data: topReach,
								layout: "vertical",
								margin: {
									left: 8,
									right: 12
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
										stroke: "var(--color-border)",
										horizontal: false
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
										type: "number",
										tick: {
											fill: "var(--color-muted)",
											fontSize: 12
										}
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
										type: "category",
										dataKey: "name",
										width: 128,
										tick: {
											fill: "var(--color-foreground)",
											fontSize: 11
										}
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
										formatter: (v) => formatNum(v),
										contentStyle: {
											background: "var(--color-surface)",
											border: "1px solid var(--color-border)",
											borderRadius: 8
										}
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
										dataKey: "value",
										fill: "var(--color-primary)",
										radius: [
											0,
											6,
											6,
											0
										]
									})
								]
							})
						})
					})
				}) })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "lg:col-span-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Why reach moved in 2025" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Drivers named in the Statement of Impact — not modeled estimates." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
					className: "grid gap-4",
					children: reachChannels.slice(0, 5).map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium",
						children: row.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted text-pretty",
						children: row.why
					})] }, row.name))
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-6 grid gap-4 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Inspire Lancaster · employer career clusters" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "97 local businesses registered · 308 student users on the work-based learning platform." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClientChart, {
				height: 280,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-72",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
						width: "100%",
						height: "100%",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
							data: employerClusters,
							margin: {
								bottom: 48,
								left: 0,
								right: 8
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
									stroke: "var(--color-border)",
									vertical: false
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
									dataKey: "name",
									interval: 0,
									angle: -35,
									textAnchor: "end",
									height: 70,
									tick: {
										fill: "var(--color-muted)",
										fontSize: 10
									}
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
									tick: {
										fill: "var(--color-muted)",
										fontSize: 12
									},
									unit: "%"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
									formatter: (v) => `${v}%`,
									contentStyle: {
										background: "var(--color-surface)",
										border: "1px solid var(--color-border)",
										borderRadius: 8
									}
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
									dataKey: "value",
									fill: "var(--color-accent)",
									radius: [
										6,
										6,
										0,
										0
									]
								})
							]
						})
					})
				})
			}) })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Early childhood — the pipeline behind the pipeline" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Pennsylvania: 56% of children 3–5 enrolled in school; average childcare cost $14,483." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
				className: "grid gap-4",
				children: earlyLearning.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-4 border-b border-border pb-3 last:border-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium",
						children: row.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: row.detail
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-2xl tabular-nums",
						children: row.value
					})]
				}, row.label))
			})] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "mt-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "STEM & live-experience education" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "5,280 students in STEM pathways · 1,015 partner touchpoints · 117 leaders at Workforce 2030 · 1,390 library STEM participants · 100 LPL On-The-Go van events." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted text-pretty",
				children: "Lancaster County’s live events industry employs 1,750 professionals across Rock Lititz campus companies. Foundation support for PCAD, Rock Lititz, and the Academy of Live Technology expands creative-tech career pathways with DEI-focused recruitment and an employer-aligned curriculum."
			}) })]
		})
	] });
}
//#endregion
export { ReachPage as component };
