import { i as __toESM } from "../_runtime.mjs";
import { b as require_jsx_runtime, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as cn, o as keyFacts } from "./router-XdJlhW9X.mjs";
import { a as CardTitle, i as CardHeader, n as CardContent, r as CardDescription, s as PageHeader, t as Card } from "./page-header-JsxPbmIy.mjs";
import { h as mentalHealthMetrics, o as environmentalSites, t as KpiCard, u as housingMetrics } from "./kpi-card-CaTxYSfO.mjs";
import { t as FactTable } from "./fact-table-DK3jYE4M.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/environment-DsBsAjRB.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CountyMap() {
	const [active, setActive] = (0, import_react.useState)(environmentalSites[0].id);
	const site = environmentalSites.find((s) => s.id === active) ?? environmentalSites[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4 lg:grid-cols-[1.2fr_0.8fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative overflow-hidden rounded-lg bg-primary-soft/40",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 100 100",
				className: "h-auto w-full",
				role: "img",
				"aria-label": "Lancaster County project map",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M28 18 C36 10, 52 8, 64 12 C76 16, 86 22, 88 34 C91 48, 86 62, 80 72 C72 86, 58 92, 44 90 C30 88, 18 78, 16 64 C14 50, 18 28, 28 18 Z",
						className: "fill-primary/25 stroke-primary/50",
						strokeWidth: "0.8"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M30 52 C38 48, 46 54, 52 50 C58 46, 50 42, 44 44",
						className: "fill-none stroke-accent",
						strokeWidth: "1.4",
						strokeLinecap: "round"
					}),
					environmentalSites.map((pin) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
						className: "cursor-pointer",
						onClick: () => setActive(pin.id),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: pin.x,
							cy: pin.y,
							r: active === pin.id ? 3.2 : 2.2,
							className: cn(active === pin.id ? "fill-primary" : "fill-accent")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: pin.x,
							cy: pin.y,
							r: "5",
							className: "fill-transparent"
						})]
					}, pin.id))
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "absolute bottom-3 left-3 text-xs text-muted",
				children: "Lancaster County · select a site"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-2",
			children: [environmentalSites.map((pin) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => setActive(pin.id),
				className: cn("rounded-lg border px-4 py-3 text-left transition-colors duration-[var(--motion-quick)]", active === pin.id ? "border-primary bg-primary-soft/50" : "border-border bg-surface hover:bg-surface-2"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-medium",
					children: pin.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-wider text-muted",
					children: pin.kind
				})]
			}, pin.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted text-pretty",
				children: site.detail
			})]
		})]
	});
}
function EnvironmentPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			kicker: "Internal · environmental",
			title: "Land, housing, and care as one county system",
			description: "The Statement of Impact treats environmental restoration as community infrastructure: a 3.5-mile greenway, restored wetlands, farmland, and the human systems — housing and mental health — that determine whether people can actually use those places."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "grid gap-3 sm:grid-cols-2 xl:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
					label: "Blue Green Connector",
					value: "3.5 mi",
					hint: "ADA-accessible greenway along the Little Conestoga Creek"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
					label: "Tenfold served",
					value: "134",
					hint: "56 transitioned to permanent housing in 2025"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
					label: "Crisis Walk-In visits",
					value: "1,718",
					hint: "90% did not require transfer to the Emergency Department"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
					label: "ECHOS individuals",
					value: "322",
					hint: "Bilingual, low-barrier housing case management"
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mt-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FactTable, {
				facts: keyFacts.filter((f) => f.href === "/environment"),
				title: "Environment, housing, and health figures",
				description: "Use these in a site visit or board packet. The map below is schematic, not GIS."
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "mt-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "County map of stewardship sites" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Schematic Lancaster County outline with 2025 sites from the impact statement. Select a pin for the published description." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountyMap, {}) })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-6 grid gap-4 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Housing accessibility" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Tenfold TLC, Barshinger Financial Empowerment Center, and ECHOS Enrichment Center." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
				className: "grid grid-cols-2 gap-3",
				children: housingMetrics.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg bg-surface-2/80 p-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-xl tabular-nums",
						children: m.value
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs text-muted",
						children: m.label
					})]
				}, m.label))
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Mental health access" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Touchstone MHAA, Clinical Supervision Collaborative, and LGH Crisis Walk-In Center." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
				className: "grid grid-cols-2 gap-3",
				children: mentalHealthMetrics.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg bg-surface-2/80 p-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-xl tabular-nums",
						children: m.value
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs text-muted",
						children: m.label
					})]
				}, m.label))
			})] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "mt-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Blue Green Connector" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "One of Lancaster County’s largest environmental initiatives — restoration, recreation, education, art, and research in a single corridor." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
				className: "grid gap-4 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
					className: "border-l-2 border-primary pl-4 text-sm text-pretty",
					children: ["“This project will be accessible for all community and non-community members to enjoy. The Blue Green Connector is a pathway to nature and learning in a natural, non-simulated, real time environment.”", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
						className: "mt-2 text-muted",
						children: "Louise D. Ulrich, East Hempfield Township"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted text-pretty",
					children: "Restored wetlands along the Little Conestoga Creek in Lancaster Township sit inside a corridor that links neighborhoods, schools, parks, workplaces, and healthcare destinations. Related 2025 stewardship also includes Lancaster Farmland Trust and civic-history work (Witness Stones, Parish Resource Center)."
				})]
			})]
		})
	] });
}
//#endregion
export { EnvironmentPage as component };
