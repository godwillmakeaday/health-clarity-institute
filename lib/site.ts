import type { FilterDef } from "./types";

export const site = {
  name: "The Verified Income Desk",
  shortName: "Verified Income Desk",
  tagline: "Proof-based internet income literacy",
  description:
    "A sober guide to reliable internet income methods, tested systems, smartphone-first work models, and realistic digital opportunity — without fake promises, rented lifestyles, or miracle claims.",
  url: "https://verifiedincomedesk.org",
  email: "desk@verifiedincomedesk.org",
};

export const primaryNav: { href: string; label: string }[] = [
  { href: "/income-models", label: "Income Models" },
  { href: "/smartphone-economy", label: "Smartphone Economy" },
  { href: "/anti-scam-guide", label: "Anti-Scam Guide" },
  { href: "/field-experiments", label: "Field Experiments" },
  { href: "/briefings", label: "Briefings" },
  { href: "/start-here", label: "Start Here" },
  { href: "/about", label: "About" },
];

export const footerLinks: { href: string; label: string }[] = [
  { href: "/methodology", label: "Methodology" },
  { href: "/disclaimer", label: "Disclaimer" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
];

export const filterDefs: FilterDef[] = [
  { tag: "smartphone-friendly", label: "Smartphone-friendly" },
  { tag: "beginner-friendly", label: "Beginner-friendly" },
  { tag: "requires-writing", label: "Requires writing" },
  { tag: "requires-selling", label: "Requires selling" },
  { tag: "requires-audience", label: "Requires audience" },
  { tag: "requires-technical-skill", label: "Requires technical skill" },
  { tag: "low-capital", label: "Low capital" },
  { tag: "long-term-asset", label: "Long-term asset" },
  { tag: "fastest-to-test", label: "Fastest to test" },
  { tag: "highest-trust-requirement", label: "Highest trust requirement" },
];

export const disclaimerShort =
  "Educational information only. No guaranteed income, no financial advice, no promised results. Every income model involves risk, effort, skill-building and uncertainty.";
