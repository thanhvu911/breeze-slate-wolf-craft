import { i as __toESM } from "../_runtime.mjs";
import { b as require_jsx_runtime, v as Link, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as cn } from "./router-XdJlhW9X.mjs";
import { a as CardTitle, i as CardHeader, n as CardContent, o as CopyValue, r as CardDescription, t as Card } from "./page-header-JsxPbmIy.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/fact-table-DK3jYE4M.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var areas = [
	"All",
	"Money",
	"County",
	"Workforce",
	"Early learning",
	"Housing",
	"Health",
	"Journalism",
	"Stewardship"
];
function FactTable({ facts, title = "Numbers to use", description = "Search or filter. Copy the figure for a slide or email. Notes are for internal use — say them only if asked." }) {
	const [q, setQ] = (0, import_react.useState)("");
	const [area, setArea] = (0, import_react.useState)("All");
	const rows = (0, import_react.useMemo)(() => {
		const needle = q.trim().toLowerCase();
		return facts.filter((f) => {
			if (area !== "All" && f.area !== area) return false;
			if (!needle) return true;
			return `${f.metric} ${f.value} ${f.note} ${f.area}`.toLowerCase().includes(needle);
		});
	}, [
		facts,
		q,
		area
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: description })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-3 sm:flex-row sm:items-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "sr-only",
					htmlFor: "fact-search",
					children: "Search figures"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: "fact-search",
					value: q,
					onChange: (e) => setQ(e.target.value),
					placeholder: "Search a number, program, or word…",
					className: "h-11 w-full rounded-md border border-border bg-bg px-3 text-sm outline-none ring-ring focus:ring-2 sm:max-w-sm"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs text-muted tabular-nums",
					children: [rows.length, " figures"]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-3 flex gap-2 overflow-x-auto pb-1",
			children: areas.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setArea(a),
				className: cn("h-9 shrink-0 rounded-full px-3 text-xs font-medium", area === a ? "bg-primary text-primary-foreground" : "bg-surface-2 text-muted hover:text-foreground"),
				children: a
			}, a))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 overflow-x-auto",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "w-full min-w-[640px] text-left text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "border-b border-border text-xs uppercase tracking-wider text-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "py-2 pr-3 font-medium",
							children: "Area"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "py-2 pr-3 font-medium",
							children: "Metric"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "py-2 pr-3 font-medium",
							children: "Figure"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "py-2 pr-3 font-medium",
							children: "If asked"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "py-2 font-medium",
							children: " "
						})
					]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "border-b border-border/70 align-top",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "py-3 pr-3 text-xs text-muted",
							children: row.area
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "py-3 pr-3 font-medium",
							children: row.metric
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "py-3 pr-3 font-display text-base tabular-nums",
							children: row.value
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "py-3 pr-3 text-muted text-pretty",
							children: row.note
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "py-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-end gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyValue, { text: `${row.metric}: ${row.value}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: row.href,
									className: "px-2 text-xs text-primary hover:underline",
									children: "View"
								})]
							})
						})
					]
				}, `${row.area}-${row.metric}`)) })]
			}), rows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "py-8 text-center text-sm text-muted",
				children: "No figures match that search."
			}) : null]
		})
	] })] });
}
//#endregion
export { FactTable as t };
