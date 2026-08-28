import { i as __toESM } from "../_runtime.mjs";
import { b as require_jsx_runtime, v as Link, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as headlineFacts, c as watchItems, i as deskStatus, l as cn, n as checkIn, o as keyFacts, r as desk, s as talkingPoints } from "./router-XdJlhW9X.mjs";
import { a as CardTitle, i as CardHeader, n as CardContent, o as CopyValue, r as CardDescription, s as PageHeader, t as Card } from "./page-header-JsxPbmIy.mjs";
import { t as FactTable } from "./fact-table-DK3jYE4M.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DfDJH4Wh.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function StatusPill({ status }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("rounded-full px-2.5 py-1 text-xs font-medium", status === "Ready" ? "bg-primary-soft text-primary" : status === "Watch" ? "bg-surface-2 text-foreground" : "bg-surface-2 text-muted"),
		children: status
	});
}
var KEY = "steinman-internal-notes";
function TeamNotes() {
	const [value, setValue] = (0, import_react.useState)("");
	const [saved, setSaved] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		try {
			setValue(localStorage.getItem(KEY) ?? "");
		} catch {}
	}, []);
	(0, import_react.useEffect)(() => {
		const t = window.setTimeout(() => {
			try {
				localStorage.setItem(KEY, value);
				setSaved(true);
			} catch {}
		}, 400);
		return () => window.clearTimeout(t);
	}, [value]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Working-session notes" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Stays on this browser only — not a shared database. Use for check-in reactions, not confidential client files." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		value,
		onChange: (e) => {
			setSaved(false);
			setValue(e.target.value);
		},
		rows: 6,
		placeholder: "What should we flag for the next check-in?",
		className: "w-full resize-y rounded-lg border border-border bg-bg px-3 py-2 text-sm leading-relaxed text-foreground outline-none ring-ring focus:ring-2"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mt-2 text-xs text-muted",
		children: saved ? "Saved on this device" : "Saving…"
	})] })] });
}
function TeamDesk() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			kicker: "Internal team desk",
			title: "The numbers, in one place",
			description: "Built for staff to scan before a meeting. Headline figures first, then a searchable table. Source is the published 2025 Statement of Impact — not a live finance feed."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mb-6 text-sm text-muted",
			children: [
				desk.refreshed,
				" · ",
				desk.source
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "grid gap-3 sm:grid-cols-2 xl:grid-cols-4",
			children: headlineFacts.map((fact) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl border border-border bg-surface p-5 shadow-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium uppercase tracking-[0.14em] text-muted",
							children: fact.metric
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyValue, { text: `${fact.metric}: ${fact.value}` })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-display text-3xl font-medium tracking-tight tabular-nums sm:text-4xl",
						children: fact.value
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted text-pretty",
						children: fact.note
					})
				]
			}, fact.metric))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mt-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FactTable, { facts: keyFacts })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
			children: deskStatus.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: item.to,
				className: "rounded-xl border border-border bg-surface p-5 shadow-sm transition-colors duration-[var(--motion-quick)] hover:bg-surface-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-lg font-medium tracking-tight",
						children: item.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusPill, { status: item.status })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: item.note
				})]
			}, item.to))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-6 grid gap-4 lg:grid-cols-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "lg:col-span-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Say this in ten minutes" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Owners are functional, not job titles. Copy from the table if you need the exact figure." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
					className: "grid gap-3",
					children: talkingPoints.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-3 rounded-lg border border-border p-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-0.5 w-24 shrink-0 text-xs font-medium uppercase tracking-wider text-primary",
							children: row.owner
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-pretty",
							children: row.point
						})]
					}, row.point))
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "lg:col-span-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Check-in agenda" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "First working session, then less often." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "grid gap-3",
					children: checkIn.map((q, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-3 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-muted tabular-nums",
							children: i + 1
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-pretty",
							children: q
						})]
					}, q))
				}) })]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-3 font-display text-xl font-medium tracking-tight",
				children: "Watch list"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid gap-3",
				children: watchItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-xl border border-border bg-surface p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("rounded-full px-2.5 py-1 text-xs font-medium", item.severity === "gap" && "bg-surface-2 text-foreground", item.severity === "watch" && "bg-primary-soft text-primary", item.severity === "next" && "bg-surface-2 text-muted"),
								children: item.severity === "gap" ? "Data gap" : item.severity === "watch" ? "Watch" : "Next phase"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs uppercase tracking-wider text-muted",
								children: item.owner
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-medium",
							children: item.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted text-pretty",
							children: item.detail
						})
					]
				}, item.title))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TeamNotes, {})
		})
	] });
}
//#endregion
export { TeamDesk as component };
