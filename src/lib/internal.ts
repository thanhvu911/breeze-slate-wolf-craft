export const desk = {
  classification: "Internal review",
  audience: "Staff, board prep, and working-session use only",
  source: "2025 Annual Statement of Impact (digital, Mar 2026)",
  asOf: "2025 program year",
  refreshed: "Concept build from published figures",
};

export type FactArea = "Money" | "County" | "Workforce" | "Early learning" | "Housing" | "Health" | "Journalism" | "Stewardship";

export type KeyFact = {
  area: FactArea;
  metric: string;
  value: string;
  note: string;
  href: "/" | "/reach" | "/environment" | "/grants" | "/journalism" | "/overview";
};

export const headlineFacts: KeyFact[] = [
  {
    area: "Money",
    metric: "Allocated in 2025",
    value: "$5,313,374",
    note: "Lead with this. Countywide total, not a single program.",
    href: "/grants",
  },
  {
    area: "Money",
    metric: "Lifetime philanthropy",
    value: "Over $130M",
    note: "Since 1951. Use for history, not the 2025 spend story.",
    href: "/overview",
  },
  {
    area: "Workforce",
    metric: "People & partners reached",
    value: "24,364",
    note: "LCSA / workforce. Pair with the 73% access figure.",
    href: "/reach",
  },
  {
    area: "Health",
    metric: "Crisis Walk-In visits",
    value: "1,718",
    note: "90% did not transfer to the ED.",
    href: "/environment",
  },
];

export const keyFacts: KeyFact[] = [
  ...headlineFacts,
  {
    area: "Money",
    metric: "Economic & workforce funds activated",
    value: "$1,924,320",
    note: "Published 2025 line. LCSA, Inspire, library STEM, live-experience ed.",
    href: "/grants",
  },
  {
    area: "Money",
    metric: "Community stewardship grants",
    value: "$1,329,005",
    note: "Published 2025 line. Foundation + donor-advised fund.",
    href: "/grants",
  },
  {
    area: "Money",
    metric: "Remainder of 2025 total",
    value: "$2,060,049",
    note: "Not line-itemed in the statement. Do not present as a named program.",
    href: "/grants",
  },
  {
    area: "Money",
    metric: "College endowments (lifetime)",
    value: "Over $2.5M",
    note: "Faculty and student support at colleges and universities.",
    href: "/grants",
  },
  {
    area: "Money",
    metric: "John F. Steinman Fellowships (2025)",
    value: "$80,000",
    note: "Psychiatry, psychology, social work. 10 graduates in 2025.",
    href: "/grants",
  },
  {
    area: "Money",
    metric: "James Hale Steinman Scholarship",
    value: "Up to $30,000 / student",
    note: "Paid over four years. Children of Steinman Communications / LNP staff.",
    href: "/grants",
  },
  {
    area: "County",
    metric: "Residents",
    value: "558,000",
    note: "Context, not an outcome.",
    href: "/overview",
  },
  {
    area: "County",
    metric: "10-year population growth",
    value: "+5.9%",
    note: "County is growing; talent and housing pressure follow.",
    href: "/reach",
  },
  {
    area: "County",
    metric: "Growth in 55+ population",
    value: "+9.7%",
    note: "Aging county — workforce pipeline and care both matter.",
    href: "/reach",
  },
  {
    area: "County",
    metric: "Unemployment (2025)",
    value: "2.9%",
    note: "Historically low. Employers need pipeline, not just jobs.",
    href: "/reach",
  },
  {
    area: "Workforce",
    metric: "Would not have had access without LCSA",
    value: "73%",
    note: "Strongest ‘why the grant mattered’ line in the statement.",
    href: "/reach",
  },
  {
    area: "Workforce",
    metric: "STEM pathway students",
    value: "5,280",
    note: "LCSA learning pathways.",
    href: "/reach",
  },
  {
    area: "Workforce",
    metric: "Partner touchpoints",
    value: "1,015",
    note: "Education, industry, community.",
    href: "/reach",
  },
  {
    area: "Workforce",
    metric: "Workforce 2030 Summit leaders",
    value: "117",
    note: "County and business leaders in the room.",
    href: "/reach",
  },
  {
    area: "Workforce",
    metric: "Inspire Lancaster businesses",
    value: "97",
    note: "Registered employers on the platform.",
    href: "/reach",
  },
  {
    area: "Workforce",
    metric: "Inspire Lancaster student users",
    value: "308",
    note: "Work-based learning (apprenticeships, internships, mentoring).",
    href: "/reach",
  },
  {
    area: "Workforce",
    metric: "Library STEM participants",
    value: "1,390",
    note: "Steinman-funded programming; 100 On-The-Go van events.",
    href: "/reach",
  },
  {
    area: "Early learning",
    metric: "Early Learning Network growth",
    value: "360%",
    note: "Organizations 5 → 23 in 2025. First 10 / CAP.",
    href: "/reach",
  },
  {
    area: "Early learning",
    metric: "Educators in training",
    value: "62+",
    note: "Training and leadership development.",
    href: "/reach",
  },
  {
    area: "Early learning",
    metric: "Science Factory visitors",
    value: "84,000+",
    note: "Largest single attendance figure in the statement. Not unique people.",
    href: "/reach",
  },
  {
    area: "Early learning",
    metric: "Children under 3 engaged",
    value: "3,365",
    note: "Science Factory.",
    href: "/reach",
  },
  {
    area: "Early learning",
    metric: "Pre-K exhibit space",
    value: "4×",
    note: "250 to 1,000+ sq ft.",
    href: "/reach",
  },
  {
    area: "Early learning",
    metric: "Pre-K STEM Explorers",
    value: "221",
    note: "Plus 55 new Pre-K member families; 98 in summer programs.",
    href: "/reach",
  },
  {
    area: "Housing",
    metric: "Tenfold individuals served",
    value: "134",
    note: "Transitional Living Center.",
    href: "/environment",
  },
  {
    area: "Housing",
    metric: "Tenfold to permanent housing",
    value: "56",
    note: "2025 transitions.",
    href: "/environment",
  },
  {
    area: "Housing",
    metric: "Positive housing exits",
    value: "79%",
    note: "Tenfold. 78% still stable two years post-exit.",
    href: "/environment",
  },
  {
    area: "Housing",
    metric: "HUD one-on-one counseling",
    value: "481",
    note: "Barshinger Financial Empowerment Center.",
    href: "/environment",
  },
  {
    area: "Housing",
    metric: "ECHOS individuals supported",
    value: "322",
    note: "Bilingual, low-barrier case management.",
    href: "/environment",
  },
  {
    area: "Health",
    metric: "Walk-ins not sent to ED",
    value: "90%",
    note: "Pair with 1,718 visits and 14% fewer BH patients in the ED.",
    href: "/environment",
  },
  {
    area: "Health",
    metric: "MHAA sessions supported",
    value: "684",
    note: "81 individuals enrolled; 26 county providers.",
    href: "/environment",
  },
  {
    area: "Health",
    metric: "Clinical supervision fellows",
    value: "29",
    note: "Toward licensure at 12 local agencies. 54 fellows since 2022.",
    href: "/environment",
  },
  {
    area: "Journalism",
    metric: "Information Ecosystem Map",
    value: "Launched 2025",
    note: "First Central PA map of news-access gaps.",
    href: "/journalism",
  },
  {
    area: "Journalism",
    metric: "Louder Than Guns public events",
    value: "2",
    note: "Countywide convenings; youth voice and mental health.",
    href: "/journalism",
  },
  {
    area: "Stewardship",
    metric: "Blue Green Connector",
    value: "3.5 miles",
    note: "ADA greenway. Schematic map only — not GIS.",
    href: "/environment",
  },
  {
    area: "Stewardship",
    metric: "PIAC households (first 5 weeks)",
    value: "80",
    note: "After loss of legal status and work authorization.",
    href: "/journalism",
  },
  {
    area: "Stewardship",
    metric: "Witness Stones — local honorees",
    value: "75",
    note: "400+ acknowledged regionally. More installations planned 2026.",
    href: "/journalism",
  },
];

export const talkingPoints = [
  {
    owner: "Board",
    point: "$5.31M allocated in 2025; lifetime philanthropy now over $130M since 1951.",
  },
  {
    owner: "Workforce",
    point: "24,364 people and partners reached; 73% of LCSA participants would not have had access without grant support.",
  },
  {
    owner: "Health",
    point: "1,718 Crisis Walk-In visits; 90% did not transfer to the ED; 14% fewer BH patients in the ED.",
  },
  {
    owner: "Journalism",
    point: "First Central PA Information Ecosystem Map launched; Local Journalism Fund unifying with the civic institute.",
  },
  {
    owner: "Early learning",
    point: "Early Learning Network grew 360% (5 → 23 orgs); Science Factory Pre-K space quadrupled.",
  },
];

export const watchItems = [
  {
    severity: "gap" as const,
    title: "Remainder of 2025 dollars is not line-itemed",
    detail:
      "$1.92M workforce and $1.33M stewardship are published. The remaining $2.06M is grouped here as journalism, early learning, and education until finance provides a split.",
    owner: "Finance",
  },
  {
    severity: "gap" as const,
    title: "No multi-year reach series in the statement",
    detail:
      "Do not chart a fake 2021–2025 engagement trend. County 10-year growth and 2025 program counts are the honest ‘over time’ story until CRM/annuals are wired.",
    owner: "Comms / data",
  },
  {
    severity: "watch" as const,
    title: "Map is schematic, not GIS",
    detail:
      "Environmental pins are placed for briefing, not survey-grade. Swap in Blue Green Connector GIS and partner addresses before any public or board GIS claim.",
    owner: "Environment",
  },
  {
    severity: "watch" as const,
    title: "Assumption tracker is inferred",
    detail:
      "Journalism ‘holding / in progress’ labels are read from 2025 milestones, not a scored evaluation. Confirm with the Local Journalism Fund before board use.",
    owner: "Journalism",
  },
  {
    severity: "next" as const,
    title: "Phase 3 needs the enterprise account",
    detail:
      "This desk is Phase 2 concept using published Steinman figures. Real client data should not land in a personal AI account.",
    owner: "Manager",
  },
];

export const deskStatus = [
  { to: "/reach" as const, title: "Reach & impact", status: "Ready", note: "2025 counts + why the grant mattered" },
  { to: "/environment" as const, title: "Environmental", status: "Ready", note: "Sites, housing, mental health" },
  { to: "/grants" as const, title: "Grants", status: "Watch", note: "Remainder still grouped" },
  { to: "/journalism" as const, title: "Journalism", status: "Watch", note: "Assumptions need Fund confirm" },
];

export const checkIn = [
  "Does the overview answer the board in ten seconds?",
  "Are we honest about data we do not have (remainder, multi-year reach)?",
  "Is the environmental map useful as a briefing device, or do we wait for GIS?",
  "Which three talking points survive a skeptical board question?",
  "What must be true before this leaves internal review?",
];
