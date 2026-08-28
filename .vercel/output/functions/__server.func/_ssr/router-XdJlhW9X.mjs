import { i as __toESM } from "../_runtime.mjs";
import { _ as createRootRoute, b as require_jsx_runtime, d as useRouterState, g as createFileRoute, h as lazyRouteComponent, l as Scripts, m as Outlet, p as createRouter, u as HeadContent, v as Link, y as useRouter, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Leaf, i as Newspaper, l as ChartPie, n as Sprout, r as Radio, s as ClipboardList, t as TriangleAlert } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-XdJlhW9X.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: error.message || "An unexpected error occurred. Try reloading the page."
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	if (typeof window === "undefined") return () => {};
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	const parentOrigin = resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		if (envelope.data.type === "hello") {
			if (!HelloSchema.safeParse(event.data).success) return;
			announce();
			return;
		}
		if (envelope.data.type === "navigate") {
			const parsed = NavigateSchema.safeParse(event.data);
			if (!parsed.success) return;
			navigate(parsed.data.path);
			queueMicrotask(reportLocation);
			return;
		}
		if (envelope.data.type === "history") {
			const parsed = HistorySchema.safeParse(event.data);
			if (!parsed.success) return;
			if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
			window.history.go(parsed.data.delta);
		}
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function formatUsd(n, compact = false) {
	if (compact && Math.abs(n) >= 1e6) return `$${(n / 1e6).toFixed(n >= 1e7 ? 0 : 2).replace(/\.00$/, "")}M`;
	if (compact && Math.abs(n) >= 1e3) return `$${(n / 1e3).toFixed(n >= 1e4 ? 0 : 1).replace(/\.0$/, "")}K`;
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
		maximumFractionDigits: 0
	}).format(n);
}
function formatNum(n) {
	return new Intl.NumberFormat("en-US").format(n);
}
var desk = {
	classification: "Internal review",
	audience: "Staff, board prep, and working-session use only",
	source: "2025 Annual Statement of Impact (digital, Mar 2026)",
	asOf: "2025 program year",
	refreshed: "Concept build from published figures"
};
var headlineFacts = [
	{
		area: "Money",
		metric: "Allocated in 2025",
		value: "$5,313,374",
		note: "Lead with this. Countywide total, not a single program.",
		href: "/grants"
	},
	{
		area: "Money",
		metric: "Lifetime philanthropy",
		value: "Over $130M",
		note: "Since 1951. Use for history, not the 2025 spend story.",
		href: "/overview"
	},
	{
		area: "Workforce",
		metric: "People & partners reached",
		value: "24,364",
		note: "LCSA / workforce. Pair with the 73% access figure.",
		href: "/reach"
	},
	{
		area: "Health",
		metric: "Crisis Walk-In visits",
		value: "1,718",
		note: "90% did not transfer to the ED.",
		href: "/environment"
	}
];
var keyFacts = [
	...headlineFacts,
	{
		area: "Money",
		metric: "Economic & workforce funds activated",
		value: "$1,924,320",
		note: "Published 2025 line. LCSA, Inspire, library STEM, live-experience ed.",
		href: "/grants"
	},
	{
		area: "Money",
		metric: "Community stewardship grants",
		value: "$1,329,005",
		note: "Published 2025 line. Foundation + donor-advised fund.",
		href: "/grants"
	},
	{
		area: "Money",
		metric: "Remainder of 2025 total",
		value: "$2,060,049",
		note: "Not line-itemed in the statement. Do not present as a named program.",
		href: "/grants"
	},
	{
		area: "Money",
		metric: "College endowments (lifetime)",
		value: "Over $2.5M",
		note: "Faculty and student support at colleges and universities.",
		href: "/grants"
	},
	{
		area: "Money",
		metric: "John F. Steinman Fellowships (2025)",
		value: "$80,000",
		note: "Psychiatry, psychology, social work. 10 graduates in 2025.",
		href: "/grants"
	},
	{
		area: "Money",
		metric: "James Hale Steinman Scholarship",
		value: "Up to $30,000 / student",
		note: "Paid over four years. Children of Steinman Communications / LNP staff.",
		href: "/grants"
	},
	{
		area: "County",
		metric: "Residents",
		value: "558,000",
		note: "Context, not an outcome.",
		href: "/overview"
	},
	{
		area: "County",
		metric: "10-year population growth",
		value: "+5.9%",
		note: "County is growing; talent and housing pressure follow.",
		href: "/reach"
	},
	{
		area: "County",
		metric: "Growth in 55+ population",
		value: "+9.7%",
		note: "Aging county — workforce pipeline and care both matter.",
		href: "/reach"
	},
	{
		area: "County",
		metric: "Unemployment (2025)",
		value: "2.9%",
		note: "Historically low. Employers need pipeline, not just jobs.",
		href: "/reach"
	},
	{
		area: "Workforce",
		metric: "Would not have had access without LCSA",
		value: "73%",
		note: "Strongest ‘why the grant mattered’ line in the statement.",
		href: "/reach"
	},
	{
		area: "Workforce",
		metric: "STEM pathway students",
		value: "5,280",
		note: "LCSA learning pathways.",
		href: "/reach"
	},
	{
		area: "Workforce",
		metric: "Partner touchpoints",
		value: "1,015",
		note: "Education, industry, community.",
		href: "/reach"
	},
	{
		area: "Workforce",
		metric: "Workforce 2030 Summit leaders",
		value: "117",
		note: "County and business leaders in the room.",
		href: "/reach"
	},
	{
		area: "Workforce",
		metric: "Inspire Lancaster businesses",
		value: "97",
		note: "Registered employers on the platform.",
		href: "/reach"
	},
	{
		area: "Workforce",
		metric: "Inspire Lancaster student users",
		value: "308",
		note: "Work-based learning (apprenticeships, internships, mentoring).",
		href: "/reach"
	},
	{
		area: "Workforce",
		metric: "Library STEM participants",
		value: "1,390",
		note: "Steinman-funded programming; 100 On-The-Go van events.",
		href: "/reach"
	},
	{
		area: "Early learning",
		metric: "Early Learning Network growth",
		value: "360%",
		note: "Organizations 5 → 23 in 2025. First 10 / CAP.",
		href: "/reach"
	},
	{
		area: "Early learning",
		metric: "Educators in training",
		value: "62+",
		note: "Training and leadership development.",
		href: "/reach"
	},
	{
		area: "Early learning",
		metric: "Science Factory visitors",
		value: "84,000+",
		note: "Largest single attendance figure in the statement. Not unique people.",
		href: "/reach"
	},
	{
		area: "Early learning",
		metric: "Children under 3 engaged",
		value: "3,365",
		note: "Science Factory.",
		href: "/reach"
	},
	{
		area: "Early learning",
		metric: "Pre-K exhibit space",
		value: "4×",
		note: "250 to 1,000+ sq ft.",
		href: "/reach"
	},
	{
		area: "Early learning",
		metric: "Pre-K STEM Explorers",
		value: "221",
		note: "Plus 55 new Pre-K member families; 98 in summer programs.",
		href: "/reach"
	},
	{
		area: "Housing",
		metric: "Tenfold individuals served",
		value: "134",
		note: "Transitional Living Center.",
		href: "/environment"
	},
	{
		area: "Housing",
		metric: "Tenfold to permanent housing",
		value: "56",
		note: "2025 transitions.",
		href: "/environment"
	},
	{
		area: "Housing",
		metric: "Positive housing exits",
		value: "79%",
		note: "Tenfold. 78% still stable two years post-exit.",
		href: "/environment"
	},
	{
		area: "Housing",
		metric: "HUD one-on-one counseling",
		value: "481",
		note: "Barshinger Financial Empowerment Center.",
		href: "/environment"
	},
	{
		area: "Housing",
		metric: "ECHOS individuals supported",
		value: "322",
		note: "Bilingual, low-barrier case management.",
		href: "/environment"
	},
	{
		area: "Health",
		metric: "Walk-ins not sent to ED",
		value: "90%",
		note: "Pair with 1,718 visits and 14% fewer BH patients in the ED.",
		href: "/environment"
	},
	{
		area: "Health",
		metric: "MHAA sessions supported",
		value: "684",
		note: "81 individuals enrolled; 26 county providers.",
		href: "/environment"
	},
	{
		area: "Health",
		metric: "Clinical supervision fellows",
		value: "29",
		note: "Toward licensure at 12 local agencies. 54 fellows since 2022.",
		href: "/environment"
	},
	{
		area: "Journalism",
		metric: "Information Ecosystem Map",
		value: "Launched 2025",
		note: "First Central PA map of news-access gaps.",
		href: "/journalism"
	},
	{
		area: "Journalism",
		metric: "Louder Than Guns public events",
		value: "2",
		note: "Countywide convenings; youth voice and mental health.",
		href: "/journalism"
	},
	{
		area: "Stewardship",
		metric: "Blue Green Connector",
		value: "3.5 miles",
		note: "ADA greenway. Schematic map only — not GIS.",
		href: "/environment"
	},
	{
		area: "Stewardship",
		metric: "PIAC households (first 5 weeks)",
		value: "80",
		note: "After loss of legal status and work authorization.",
		href: "/journalism"
	},
	{
		area: "Stewardship",
		metric: "Witness Stones — local honorees",
		value: "75",
		note: "400+ acknowledged regionally. More installations planned 2026.",
		href: "/journalism"
	}
];
var talkingPoints = [
	{
		owner: "Board",
		point: "$5.31M allocated in 2025; lifetime philanthropy now over $130M since 1951."
	},
	{
		owner: "Workforce",
		point: "24,364 people and partners reached; 73% of LCSA participants would not have had access without grant support."
	},
	{
		owner: "Health",
		point: "1,718 Crisis Walk-In visits; 90% did not transfer to the ED; 14% fewer BH patients in the ED."
	},
	{
		owner: "Journalism",
		point: "First Central PA Information Ecosystem Map launched; Local Journalism Fund unifying with the civic institute."
	},
	{
		owner: "Early learning",
		point: "Early Learning Network grew 360% (5 → 23 orgs); Science Factory Pre-K space quadrupled."
	}
];
var watchItems = [
	{
		severity: "gap",
		title: "Remainder of 2025 dollars is not line-itemed",
		detail: "$1.92M workforce and $1.33M stewardship are published. The remaining $2.06M is grouped here as journalism, early learning, and education until finance provides a split.",
		owner: "Finance"
	},
	{
		severity: "gap",
		title: "No multi-year reach series in the statement",
		detail: "Do not chart a fake 2021–2025 engagement trend. County 10-year growth and 2025 program counts are the honest ‘over time’ story until CRM/annuals are wired.",
		owner: "Comms / data"
	},
	{
		severity: "watch",
		title: "Map is schematic, not GIS",
		detail: "Environmental pins are placed for briefing, not survey-grade. Swap in Blue Green Connector GIS and partner addresses before any public or board GIS claim.",
		owner: "Environment"
	},
	{
		severity: "watch",
		title: "Assumption tracker is inferred",
		detail: "Journalism ‘holding / in progress’ labels are read from 2025 milestones, not a scored evaluation. Confirm with the Local Journalism Fund before board use.",
		owner: "Journalism"
	},
	{
		severity: "next",
		title: "Phase 3 needs the enterprise account",
		detail: "This desk is Phase 2 concept using published Steinman figures. Real client data should not land in a personal AI account.",
		owner: "Manager"
	}
];
var deskStatus = [
	{
		to: "/reach",
		title: "Reach & impact",
		status: "Ready",
		note: "2025 counts + why the grant mattered"
	},
	{
		to: "/environment",
		title: "Environmental",
		status: "Ready",
		note: "Sites, housing, mental health"
	},
	{
		to: "/grants",
		title: "Grants",
		status: "Watch",
		note: "Remainder still grouped"
	},
	{
		to: "/journalism",
		title: "Journalism",
		status: "Watch",
		note: "Assumptions need Fund confirm"
	}
];
var checkIn = [
	"Does the overview answer the board in ten seconds?",
	"Are we honest about data we do not have (remainder, multi-year reach)?",
	"Is the environmental map useful as a briefing device, or do we wait for GIS?",
	"Which three talking points survive a skeptical board question?",
	"What must be true before this leaves internal review?"
];
var nav = [
	{
		to: "/",
		label: "Team desk",
		icon: ClipboardList
	},
	{
		to: "/reach",
		label: "Reach",
		icon: Radio
	},
	{
		to: "/environment",
		label: "Environment",
		icon: Leaf
	},
	{
		to: "/grants",
		label: "Grants",
		icon: Sprout
	},
	{
		to: "/journalism",
		label: "Journalism",
		icon: Newspaper
	},
	{
		to: "/overview",
		label: "Board snapshot",
		icon: ChartPie
	}
];
function AppShell({ children }) {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-bg text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "bg-primary text-primary-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-1.5 text-xs sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-medium tracking-wide uppercase",
						children: desk.classification
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-primary-foreground/80",
						children: desk.audience
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-30 border-b border-border bg-bg/95 backdrop-blur-md",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 sm:px-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "flex min-w-0 shrink-0 items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex size-9 items-center justify-center rounded-md bg-primary text-primary-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sprout, { className: "size-4" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block font-display text-base leading-tight tracking-tight",
								children: "Steinman internal desk"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-xs text-muted",
								children: "2025 figures · staff review"
							})]
						})]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "mx-auto flex max-w-7xl gap-1 overflow-x-auto px-4 pb-3 sm:px-6",
					children: nav.map((item) => {
						const active = pathname === item.to;
						const Icon = item.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: item.to,
							className: cn("inline-flex h-10 shrink-0 items-center gap-2 rounded-md px-3 text-sm font-medium text-muted transition-colors duration-[var(--motion-quick)] hover:bg-surface-2 hover:text-foreground", active && "bg-surface-2 text-foreground"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" }), item.label]
						}, item.to);
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-7xl flex-col gap-1 px-4 py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						desk.source,
						" · ",
						desk.asOf
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Internal concept · do not circulate as audited financials" })]
				})
			})
		]
	});
}
var styles_default = "/assets/styles-Bo1GldZM.css";
var APP_NAME = "Steinman Internal Desk";
var Route$6 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "description",
				content: "Internal 2025 impact desk for The Steinman Foundation team."
			},
			{
				name: "theme-color",
				content: "#1f5c45"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Source+Sans+3:wght@400;500;600&display=swap"
			}
		]
	}),
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	})
});
var $$splitComponentImporter$5 = () => import("./routes-DfDJH4Wh.mjs");
var Route$5 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./environment-DsBsAjRB.mjs");
var Route$4 = createFileRoute("/environment")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./grants-LuPrb7Lp.mjs");
var Route$3 = createFileRoute("/grants")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./journalism-C_hmLLAA.mjs");
var Route$2 = createFileRoute("/journalism")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./overview-DyJTMMcC.mjs");
var Route$1 = createFileRoute("/overview")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./reach-B3uOYbi5.mjs");
var Route = createFileRoute("/reach")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var rootRouteChildren = {
	IndexRoute: Route$5.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$6
	}),
	EnvironmentRoute: Route$4.update({
		id: "/environment",
		path: "/environment",
		getParentRoute: () => Route$6
	}),
	GrantsRoute: Route$3.update({
		id: "/grants",
		path: "/grants",
		getParentRoute: () => Route$6
	}),
	JournalismRoute: Route$2.update({
		id: "/journalism",
		path: "/journalism",
		getParentRoute: () => Route$6
	}),
	OverviewRoute: Route$1.update({
		id: "/overview",
		path: "/overview",
		getParentRoute: () => Route$6
	}),
	ReachRoute: Route.update({
		id: "/reach",
		path: "/reach",
		getParentRoute: () => Route$6
	})
};
var routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { headlineFacts as a, watchItems as c, formatUsd as d, deskStatus as i, cn as l, checkIn as n, keyFacts as o, desk as r, talkingPoints as s, router_exports as t, formatNum as u };
