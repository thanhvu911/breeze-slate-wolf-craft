import { i as __toESM } from "../_runtime.mjs";
import { b as require_jsx_runtime, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as formatUsd, o as keyFacts } from "./router-XdJlhW9X.mjs";
import { a as CardTitle, i as CardHeader, n as CardContent, r as CardDescription, s as PageHeader, t as Card } from "./page-header-JsxPbmIy.mjs";
import { _ as stewardshipOrgs, i as educationCapital, l as grantsKnown, s as foundation, t as KpiCard } from "./kpi-card-CaTxYSfO.mjs";
import { t as FactTable } from "./fact-table-DK3jYE4M.mjs";
import { t as ClientChart } from "./client-chart-Dcw6nPE9.mjs";
import { a as CartesianGrid, i as XAxis, l as ResponsiveContainer, n as BarChart, o as Bar, r as YAxis, u as Tooltip } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/grants-LuPrb7Lp.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function GrantsPage() {
	const [orgQ, setOrgQ] = (0, import_react.useState)("");
	const chartData = grantsKnown.map((g) => ({
		name: g.name.replace(" Development", "").replace(" Grant Program", ""),
		amount: g.amount
	}));
	const orgs = (0, import_react.useMemo)(() => {
		const n = orgQ.trim().toLowerCase();
		return stewardshipOrgs.filter((o) => o.toLowerCase().includes(n));
	}, [orgQ]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			kicker: "Internal · grants",
			title: "Where 2025 grant money went",
			description: "Clear dollars first. The Statement of Impact publishes a countywide total plus two named program totals. Everything else is shown as the remaining 2025 allocation and as longer-horizon education capital."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "grid gap-3 sm:grid-cols-2 xl:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
					label: "2025 allocated",
					value: formatUsd(foundation.totalAllocated2025),
					hint: "Total funding to support Lancaster County"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
					label: "Economic & workforce",
					value: formatUsd(1924320),
					hint: "Activated toward economic and workforce development"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
					label: "Community stewardship",
					value: formatUsd(1329005),
					hint: "Grant program plus donor-advised fund partners"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
					label: "Endowments (lifetime)",
					value: "Over $2.5M",
					hint: "At colleges and universities for faculty and students"
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mt-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FactTable, {
				facts: keyFacts.filter((f) => f.href === "/grants"),
				title: "Money figures",
				description: "Only two 2025 program totals are published. The remainder is grouped until finance splits it."
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "mt-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "2025 allocation mix" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Economic & Workforce and Community Stewardship are published line items. The third bar is the remainder of the $5.31M 2025 total (journalism, early childhood, fellowships, and other focus work)." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClientChart, {
				height: 280,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-72",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
						width: "100%",
						height: "100%",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
							data: chartData,
							margin: {
								left: 8,
								right: 12,
								bottom: 24
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
									stroke: "var(--color-border)",
									vertical: false
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
									dataKey: "name",
									tick: {
										fill: "var(--color-muted)",
										fontSize: 12
									},
									interval: 0
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
									tickFormatter: (v) => `$${Math.round(v / 1e6)}M`,
									tick: {
										fill: "var(--color-muted)",
										fontSize: 12
									}
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
									formatter: (v) => formatUsd(v),
									contentStyle: {
										background: "var(--color-surface)",
										border: "1px solid var(--color-border)",
										borderRadius: 8
									}
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
									dataKey: "amount",
									fill: "var(--color-primary)",
									radius: [
										8,
										8,
										0,
										0
									]
								})
							]
						})
					})
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 grid gap-3 md:grid-cols-3",
				children: grantsKnown.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-lg bg-surface-2/80 p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-2xl tabular-nums",
							children: formatUsd(g.amount)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm font-medium",
							children: g.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-muted text-pretty",
							children: g.note
						})
					]
				}, g.name))
			})] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mt-6 grid gap-4 lg:grid-cols-3",
			children: educationCapital.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-[0.14em] text-muted",
						children: row.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-display text-3xl tabular-nums",
						children: formatUsd(row.amount, true)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted text-pretty",
						children: row.note
					})
				]
			}, row.name))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "mt-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Community Stewardship partners, 2025" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Organizations funded through The Steinman Foundation and its donor-advised fund. Filter by name." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: orgQ,
					onChange: (e) => setOrgQ(e.target.value),
					placeholder: "Find a partner…",
					className: "mb-3 h-11 w-full max-w-sm rounded-md border border-border bg-bg px-3 text-sm outline-none ring-ring focus:ring-2"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "grid gap-2 sm:grid-cols-2 lg:grid-cols-3",
					children: orgs.map((org) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "rounded-md border border-border px-3 py-2 text-sm",
						children: org
					}, org))
				}),
				orgs.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "py-6 text-sm text-muted",
					children: "No partner matches that name."
				}) : null
			] })]
		})
	] });
}
//#endregion
export { GrantsPage as component };
