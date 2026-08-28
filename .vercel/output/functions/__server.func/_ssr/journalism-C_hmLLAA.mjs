import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as cn, o as keyFacts } from "./router-XdJlhW9X.mjs";
import { a as CardTitle, i as CardHeader, n as CardContent, r as CardDescription, s as PageHeader, t as Card } from "./page-header-JsxPbmIy.mjs";
import { f as journalismAssumptions, m as journalismProjects, p as journalismMilestones, t as KpiCard } from "./kpi-card-CaTxYSfO.mjs";
import { t as FactTable } from "./fact-table-DK3jYE4M.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/journalism-C_hmLLAA.js
var import_jsx_runtime = require_jsx_runtime();
var statusLabel = {
	holding: "Holding true",
	"in-progress": "In progress"
};
function JournalismPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			kicker: "Internal · journalism",
			title: "Which civic-information projects are funded — and which assumptions still hold",
			description: "Strong communities depend on trusted information. 2025 work centered the Lancaster County Local Journalism Fund, a regional information-ecosystem map, and civic convenings — including Louder Than Guns."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "grid gap-3 sm:grid-cols-2 xl:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
					label: "Local Journalism Fund",
					value: "Active",
					hint: "Unified structure initiated with the Steinman Institute for Civic Engagement"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
					label: "Ecosystem map",
					value: "Launched",
					hint: "First Central PA Information Ecosystem Map — news-access gaps and collaboration"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
					label: "Messaging framework",
					value: "Complete",
					hint: "Research-backed public support for local news with Press Forward Central PA"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
					label: "Louder Than Guns",
					value: "2 events",
					hint: "Countywide convenings on gun violence, youth voice, and mental health"
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mt-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FactTable, {
				facts: keyFacts.filter((f) => f.href === "/journalism"),
				title: "Journalism & civic figures",
				description: "Confirm assumption labels with the Local Journalism Fund before board use."
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-6 grid gap-4 lg:grid-cols-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "lg:col-span-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Assumption tracker" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "The questions the organization is effectively testing. Status is inferred from 2025 published milestones — not a scored evaluation." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
					className: "grid gap-4",
					children: journalismAssumptions.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-lg border border-border p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "max-w-xl font-display text-lg font-medium tracking-tight text-pretty",
								children: row.question
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("rounded-full px-3 py-1 text-xs font-medium", row.status === "holding" ? "bg-primary-soft text-primary" : "bg-surface-2 text-muted"),
								children: statusLabel[row.status]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted text-pretty",
							children: row.evidence
						})]
					}, row.question))
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "lg:col-span-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "2025 milestones" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "From the Local Journalism & Media Literacy chapter." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
					className: "grid gap-4",
					children: journalismMilestones.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium",
						children: m.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted text-pretty",
						children: m.detail
					})] }, m.title))
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "mt-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Funded and convened projects" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Portfolio view of journalism, civic information, and related major convenings." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid gap-3 md:grid-cols-2",
				children: journalismProjects.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-start justify-between gap-3 rounded-lg border border-border p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-medium",
						children: p.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: p.focus
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "shrink-0 rounded-full bg-primary-soft px-2.5 py-1 text-xs font-medium text-primary",
						children: p.status
					})]
				}, p.name))
			}) })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "mt-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Related civic history & belonging" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Adjacent 2025 grants that sit with journalism’s civic mandate." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
				className: "grid gap-4 md:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-3xl tabular-nums",
						children: "80"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: "Households served in PIAC’s first five weeks after losing legal status and work authorization."
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-3xl tabular-nums",
						children: "400+"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: "Enslaved men, women, and children acknowledged regionally by the Witness Stones Project."
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-3xl tabular-nums",
						children: "75"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: "Individuals honored locally in Lancaster County; additional installations planned for 2026."
					})] })
				]
			})]
		})
	] });
}
//#endregion
export { JournalismPage as component };
