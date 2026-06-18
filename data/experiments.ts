import type { Experiment } from "@/lib/types";

export const experiments: Experiment[] = [
  {
    slug: "local-website-service-via-whatsapp",
    title: "Can a beginner sell a local business website service through WhatsApp?",
    hypothesis:
      "A beginner with no portfolio can land a paying local-business client within 30 days by offering a free pilot site and converting it through direct WhatsApp follow-up, not cold ads.",
    tools: ["A no-code site builder", "WhatsApp Business", "A smartphone camera", "A one-page proposal template"],
    cost: "Under the cost of one month of mobile data — no paid software or ads used.",
    timeRequired: "Roughly 10–12 hours across 4 weeks, mostly outreach and follow-up.",
    status: "Completed",
    whatWorked: [
      "In-person and voice-note outreach converted far better than text-only messages",
      "Showing a finished free pilot site got more attention than describing the offer",
      "Following up within 48 hours mattered more than the pitch wording itself",
    ],
    whatFailed: [
      "Cold WhatsApp messages to numbers with no prior relationship had a near-zero response rate",
      "Businesses with no existing customer-facing problem saw little urgency to act",
      "The first proposal was too long; a one-page version performed better",
    ],
    lessons: [
      "Distribution through warm or semi-warm contacts outperforms cold outreach by a wide margin at this stage",
      "A visible, finished example closes far more conversations than a description of future work",
      "Speed of follow-up is a bigger lever than polish in the early pitch",
    ],
    nextTest: "Test whether a referral-based approach (asking each client for two introductions) compounds faster than continued cold outreach.",
  },
  {
    slug: "single-article-affiliate-income",
    title: "Can one article generate affiliate income over time?",
    hypothesis:
      "A single, thorough comparison article in a narrow niche can produce a small but measurable trickle of affiliate income within 6 months purely from organic search, without any paid promotion.",
    tools: ["A free blog platform", "Google Search Console", "One affiliate program relevant to the niche"],
    cost: "No direct cost beyond time; hosting used a free tier.",
    timeRequired: "Around 14 hours to research and write the article, then a few minutes a week to monitor.",
    status: "Running",
    whatWorked: [
      "The article began appearing in search results for its target question within roughly 10 weeks",
      "A small number of consistent weekly visitors arrived without any further promotion",
      "Specificity in the title and headers mattered more for visibility than length",
    ],
    whatFailed: [
      "Clicks on the affiliate link itself remained very low relative to visitor count",
      "No measurable income had appeared by week 16 of tracking",
      "The chosen affiliate program had a stricter approval and payout threshold than expected",
    ],
    lessons: [
      "Search visibility for one article is achievable faster than commonly assumed, but visibility is not the same as income",
      "Click-through depends heavily on how naturally the recommendation sits inside the content, not just placement",
      "A single article is a visibility test, not an income test — income requires a body of content, not one piece",
    ],
    nextTest: "Publish two more articles in the same niche, internally linked, and re-measure whether a small cluster converts better than one isolated piece.",
  },
  {
    slug: "smartphone-content-system-leads",
    title: "Can a smartphone-first content system produce leads?",
    hypothesis:
      "A simple, repeatable smartphone content system, posting three short videos a week using only free apps, can generate qualified inbound leads for a service offer within 60 days.",
    tools: ["A smartphone", "CapCut", "Canva", "One social platform's native scheduler"],
    cost: "No paid tools; only time and mobile data.",
    timeRequired: "Roughly 4–6 hours per week for filming, editing, and posting.",
    status: "Completed",
    whatWorked: [
      "Short, specific how-to clips outperformed general motivational or opinion content for generating direct messages",
      "Captions that named a specific problem attracted more relevant inbound interest than broad captions",
      "A consistent posting schedule produced a slow but steady rise in profile visits",
    ],
    whatFailed: [
      "View counts grew faster than actual inbound messages, exposing a gap between attention and intent",
      "Several early videos got reasonable views but attracted the wrong audience for the offer",
      "Engagement dropped sharply on weeks with inconsistent posting",
    ],
    lessons: [
      "Views are a vanity signal; direct messages and saves were the more honest proof of lead generation",
      "Narrowing the content to one specific, recurring problem performed better than variety",
      "A content system needs at least 8–10 weeks of consistency before its lead-generation potential can be judged fairly",
    ],
    nextTest: "Test whether adding a clear, low-friction call to action in each caption increases message rate without reducing view count.",
  },
  {
    slug: "ai-research-paid-briefing-service",
    title: "Can AI-assisted research become a paid briefing service?",
    hypothesis:
      "A short, well-verified AI-assisted research brief, offered directly to a narrow professional audience, can convert into at least one paying client within 45 days.",
    tools: ["A general AI assistant", "Google Scholar and news search for verification", "Google Docs", "Direct LinkedIn outreach"],
    cost: "No direct monetary cost; the AI tool used had a usable free tier.",
    timeRequired: "Around 18 hours across the test period, including three sample briefings and outreach.",
    status: "Running",
    whatWorked: [
      "Verification caught at least one meaningful AI error per brief, confirming the verification step is not optional",
      "Professionals responded more to a specific, narrow brief topic than a general offer to \"do research for you\"",
      "Sharing a free sample brief generated more serious replies than describing the service abstractly",
    ],
    whatFailed: [
      "Several outreach messages went unanswered despite a relevant, well-targeted list",
      "Verification took noticeably longer than the AI drafting step itself, undercutting assumptions about speed",
      "Pricing conversations stalled when no prior relationship existed with the professional",
    ],
    lessons: [
      "The AI assistant accelerates drafting, not judgment — verification remains the real bottleneck and the real value",
      "Warm introductions outperformed cold professional outreach by a wide margin",
      "A free sample is a stronger conversion tool than a pitch deck or price list",
    ],
    nextTest: "Test whether warm introductions from a small existing network convert at a meaningfully higher rate than direct cold outreach to the same professional audience.",
  },
  {
    slug: "simple-digital-template-product",
    title: "Can a simple digital template become a useful product?",
    hypothesis:
      "A single, narrowly scoped digital template, distributed free first and then sold at a low price, can generate at least 10 genuine uses and a handful of paid sales within 30 days.",
    tools: ["Google Sheets", "Canva", "A simple storefront with a free tier"],
    cost: "No direct cost; storefront used a free listing tier.",
    timeRequired: "About 8 hours to build and refine the template, plus ongoing light promotion.",
    status: "Completed",
    whatWorked: [
      "Free distribution to a small, relevant group surfaced real usage and specific confusion points before any sale was attempted",
      "Revising instructions based on that confusion measurably reduced support questions later",
      "A short demo video showing the template in use outperformed a static description for generating interest",
    ],
    whatFailed: [
      "Several people who requested the free version never actually opened or used it",
      "The first price point set was too high relative to the perceived narrowness of the problem solved",
      "Discovery beyond the original small group was very limited without any existing audience",
    ],
    lessons: [
      "Requesting something for free is not the same as a buying signal — actual usage is the real proof point",
      "Pricing should reflect the size of the problem solved, not the effort spent building the file",
      "Without an existing audience, a digital product's reach is capped regardless of quality",
    ],
    nextTest: "Test whether bundling the template with a short explainer video as one offer increases both perceived value and conversion rate.",
  },
  {
    slug: "nigerian-paid-newsletter-niche",
    title: "Can a Nigerian professional build a paid newsletter around a niche?",
    hypothesis:
      "A professional with sector depth can build a free newsletter to at least 200 engaged subscribers within 90 days using only organic, network-based distribution.",
    tools: ["A free-tier email platform", "LinkedIn", "WhatsApp groups relevant to the sector"],
    cost: "No direct cost; email platform's free tier was sufficient at this subscriber count.",
    timeRequired: "Roughly 3–4 hours per week for writing, editing, and distribution.",
    status: "Running",
    whatWorked: [
      "Sector-specific WhatsApp and LinkedIn groups produced more relevant early subscribers than general social posting",
      "Subscribers who joined through a personal recommendation had noticeably higher open rates than those from public posts",
      "A consistent weekly schedule built a small compounding base faster than irregular, longer editions",
    ],
    whatFailed: [
      "Two skipped weeks early in the test visibly reduced open rates for several following editions",
      "Several public posts generated subscriber sign-ups with low long-term engagement",
      "Growth slowed noticeably after exhausting the immediate professional network",
    ],
    lessons: [
      "Subscriber quality from warm, sector-specific channels matters more than subscriber count from broad channels",
      "Consistency has a measurable, compounding effect on trust that is costly to rebuild after a lapse",
      "Sustained growth beyond an initial network requires a deliberate referral or cross-promotion mechanism, not just organic sharing",
    ],
    nextTest: "Test a structured referral incentive among the most engaged subscribers to assess whether it reopens growth beyond the original network.",
  },
  {
    slug: "legal-adjacent-information-desk",
    title: "Can a legal-adjacent information desk attract ethical professional opportunities?",
    hypothesis:
      "A focused, plain-language information resource on one regulatory or compliance topic can attract direct, unsolicited professional inquiries within 90 days, without offering legal advice.",
    tools: ["A simple website", "LinkedIn", "Public regulatory sources for citation"],
    cost: "Low — limited to basic hosting and domain costs.",
    timeRequired: "Around 6 hours per week for research, writing, and light distribution.",
    status: "Planned",
    whatWorked: [],
    whatFailed: [],
    lessons: [
      "This experiment has not yet run; design assumptions are listed here so the eventual result can be compared honestly against them.",
    ],
    nextTest: "Publish the first three plain-language explainer pieces and track unsolicited inbound inquiries against the 90-day hypothesis window.",
  },
];

export const getExperimentBySlug = (slug: string) => experiments.find((e) => e.slug === slug);
