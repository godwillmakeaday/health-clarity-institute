// lib/site.ts
// Site-wide structured data and lightweight library indexes.

import type { NavCard, SpecialistCentre } from "./types";

export const site = {
  name: "Health Clarity Institute Nigeria",
  shortName: "Health Clarity Institute",
  initials: "HCI",
  tagline: "Clear medical knowledge for Nigerian patients and institutions.",
  description:
    "A Nigerian health education, patient clarity and specialist-care intelligence platform. Evidence-informed guides, patient navigation and Nigerian-context medical education.",
  url: "https://healthclarity.ng",
  email: "hello@healthclarity.ng",
  emergencyNote:
    "In an emergency, go to the nearest hospital immediately. This platform is for education and does not replace urgent medical care.",
};

export const primaryNav: { label: string; href: string }[] = [
  { label: "Health Library", href: "/health-library" },
  { label: "Conditions A–Z", href: "/conditions" },
  { label: "Symptoms A–Z", href: "/symptoms" },
  { label: "Specialist Centres", href: "/centres" },
  { label: "Patient Rights", href: "/medical-law-patient-rights" },
  { label: "Nigerian Context", href: "/nigerian-health-context" },
];

// Section 3 — core navigation cards
export const coreNavCards: NavCard[] = [
  { title: "Conditions A–Z", description: "Plain-language guides to diseases and long-term conditions.", href: "/conditions" },
  { title: "Symptoms A–Z", description: "Understand what a symptom may mean and when to act.", href: "/symptoms" },
  { title: "Tests & Procedures", description: "What common tests check, how they are done and what results mean.", href: "/tests-procedures" },
  { title: "Medicines & Treatment Guides", description: "How treatments work, used safely and as prescribed.", href: "/medicines" },
  { title: "Prevention Guides", description: "Screening, vaccines and habits that lower your risk.", href: "/prevention" },
  { title: "Emergency Warning Signs", description: "Signs that mean you should seek urgent care now.", href: "/conditions/stroke" },
  { title: "Nigerian Health Context", description: "Cost, access, late diagnosis and decisions families face.", href: "/nigerian-health-context" },
  { title: "Medical Law & Patient Rights", description: "Consent, records, dignity, billing and hospital-dispute clarity.", href: "/medical-law-patient-rights" },
  { title: "Specialist Centres", description: "Curated knowledge organised by area of care.", href: "/specialist-centres" },
];

// Section 4 / 5 — specialist centres
export const specialistCentres: SpecialistCentre[] = [
  {
    slug: "heart-blood-pressure",
    name: "Heart & Blood Pressure Centre",
    focus: "Cardiovascular health",
    description: "Blood pressure, heart disease and stroke prevention and care.",
    conditionSlugs: ["hypertension", "stroke"],
  },
  {
    slug: "diabetes-metabolic",
    name: "Diabetes & Metabolic Health Centre",
    focus: "Blood sugar & metabolism",
    description: "Diabetes, blood sugar control and related metabolic conditions.",
    conditionSlugs: ["diabetes"],
  },
  {
    slug: "maternal-health",
    name: "Maternal Health Centre",
    focus: "Pregnancy & newborn care",
    description: "Safe pregnancy, danger signs, antenatal and postnatal care.",
    conditionSlugs: ["pregnancy-danger-signs"],
  },
  {
    slug: "kidney-health",
    name: "Kidney Health Centre",
    focus: "Renal care",
    description: "Kidney disease, prevention and protecting kidney function.",
    conditionSlugs: ["kidney-disease"],
  },
  {
    slug: "mental-behavioural",
    name: "Mental & Behavioural Health Centre",
    focus: "Mind & wellbeing",
    description: "Mental health understanding, support pathways and stigma-free care.",
    conditionSlugs: [],
  },
  {
    slug: "preventive-health",
    name: "Preventive Health Centre",
    focus: "Screening & protection",
    description: "Screening, vaccines, malaria prevention and healthy habits.",
    conditionSlugs: ["malaria"],
  },
];

export function getCentreBySlug(slug: string) {
  return specialistCentres.find((c) => c.slug === slug);
}

// Section 6 — featured guides on the homepage
export const featuredGuideSlugs = [
  "hypertension",
  "diabetes",
  "malaria",
  "stroke",
  "kidney-disease",
  "pregnancy-danger-signs",
];

// Section 7 — patient navigation ("Start Here")
export const patientNavigation: { title: string; description: string; href: string }[] = [
  { title: "I have symptoms", description: "Start from what you are feeling and learn what it may mean.", href: "/symptoms" },
  { title: "I want to understand a diagnosis", description: "Clear guides to conditions, in plain language.", href: "/conditions" },
  { title: "I want to prepare for a hospital visit", description: "Questions to ask and what to bring.", href: "/conditions/hypertension#questions" },
  { title: "I want to know when it is urgent", description: "Recognise emergency warning signs early.", href: "/conditions/stroke#urgent" },
  { title: "I want prevention guidance", description: "Find out what to screen for and how often.", href: "/prevention" },
  { title: "I have a patient-rights concern", description: "Understand consent, records, documentation and complaint pathways.", href: "/medical-law-patient-rights" },
  { title: "I represent a hospital or institution", description: "See how we support health institutions and clinics.", href: "/for-hospitals-institutions" },
];

// "What Health Clarity Institute Nigeria Does" — institutional mission cards
export const whatWeDo: { title: string; description: string; iconSlug: string }[] = [
  { title: "Medical Education", description: "Clear, reviewed guides that help people understand conditions, tests, medicines and prevention.", iconSlug: "book" },
  { title: "Patient Navigation", description: "Practical guidance on what to do, what to ask, and when a situation has become urgent.", iconSlug: "pulse" },
  { title: "Nigerian Health Context", description: "Information written for the realities of cost, access and care-seeking in Nigeria.", iconSlug: "map" },
  { title: "Specialist Intelligence", description: "Knowledge organised by area of care, drawing on specialist insight and current guidance.", iconSlug: "stethoscope" },
  { title: "Hospital & Institutional Support", description: "Digital and editorial infrastructure for hospitals, clinics and health organisations.", iconSlug: "hospital" },
  { title: "Preventive Health Campaigns", description: "Screening and awareness campaigns built on accurate, responsible information.", iconSlug: "shield" },
];

// "Built for Nigerian Realities" — explained points
export const builtForRealities: { title: string; body: string }[] = [
  { title: "Late diagnosis", body: "Many conditions are found late. We explain the early signs worth acting on, so problems are caught while they are easier to treat." },
  { title: "Cost and access barriers", body: "Care is often paid out of pocket and a facility may be far. We are honest about what testing and treatment involve so families can plan." },
  { title: "Self-medication risks", body: "Medicines are widely bought without a prescription. We explain when this is dangerous and when a diagnosis must come first." },
  { title: "Family decision-making", body: "Health decisions are often made by a family, not one person. Our guidance is written to be shared and understood together." },
  { title: "Rural and urban differences", body: "The same condition is navigated differently in a city hospital and a rural community. We acknowledge both and flag when referral is needed." },
  { title: "Clearer patient communication", body: "Too much health information is either too technical or too vague. We aim for the middle: accurate, plain, and usable under stress." },
];

// Section 8 — institutional services
export const institutionalServices: { title: string; description: string }[] = [
  { title: "Premium hospital websites", description: "Credible, fast, well-structured sites that reflect the standard of your care." },
  { title: "Patient education libraries", description: "Branded, reviewed health content libraries for your patients and community." },
  { title: "Doctor profile systems", description: "Structured, searchable profiles for your clinicians and specialties." },
  { title: "Appointment & intake pages", description: "Clear pathways for patients to reach and prepare for your services." },
  { title: "Preventive health campaigns", description: "Screening and awareness campaigns built on accurate information." },
  { title: "Medical content strategy", description: "Editorial planning and review workflows for trustworthy health content." },
  { title: "Health documentation systems", description: "Policies, patient materials and knowledge bases, properly structured." },
  { title: "Specialist clinic microsites", description: "Focused, credible sites for a single specialty, clinic or campaign." },
];

// Section 9 — trust system
export const trustPoints: { label: string; detail: string }[] = [
  { label: "Written for education", detail: "Plain-language guides to help you understand, not to replace your clinician." },
  { label: "Reviewed by professionals", detail: "Content is checked by qualified reviewers before publication." },
  { label: "Sources listed", detail: "Each guide cites the references it is based on." },
  { label: "Last reviewed dates", detail: "Every guide shows when it was last checked and when it is due again." },
  { label: "Not a substitute for advice", detail: "Always seek diagnosis and treatment from a qualified professional." },
  { label: "Emergency guidance included", detail: "Guides flag clearly when a situation needs urgent care." },
];

// ─────────────────────────── lightweight library indexes (placeholder data) ──
// These power the Symptoms / Tests / Medicines / Prevention A–Z pages until full
// articles are authored. Each is intentionally minimal — the same data shape can
// later be promoted to a full HealthArticle.

export interface LibraryEntry {
  slug: string;
  title: string;
  blurb: string;
}

export const symptoms: LibraryEntry[] = [
  { slug: "chest-pain", title: "Chest pain", blurb: "Causes range from minor to emergency — learn the warning signs." },
  { slug: "fever", title: "Fever", blurb: "When a raised temperature needs testing and when it needs urgent care." },
  { slug: "headache", title: "Headache", blurb: "Common types and the features that signal something serious." },
  { slug: "shortness-of-breath", title: "Shortness of breath", blurb: "Understanding breathlessness and when to seek help." },
  { slug: "abdominal-pain", title: "Abdominal pain", blurb: "What different kinds of tummy pain may indicate." },
  { slug: "dizziness", title: "Dizziness", blurb: "Feeling faint or unsteady — possible causes and red flags." },
  { slug: "swelling-legs", title: "Swelling in the legs", blurb: "Fluid build-up and what it can mean." },
  { slug: "fatigue", title: "Persistent tiredness", blurb: "When ongoing fatigue is worth investigating." },
];

export const tests: LibraryEntry[] = [
  { slug: "blood-pressure-check", title: "Blood pressure check", blurb: "How it is measured and what the numbers mean." },
  { slug: "blood-sugar-test", title: "Blood sugar test", blurb: "Fasting glucose and HbA1c explained." },
  { slug: "malaria-rdt", title: "Malaria rapid test (RDT)", blurb: "How malaria is confirmed before treatment." },
  { slug: "kidney-function-test", title: "Kidney function test", blurb: "Creatinine, eGFR and urine tests for the kidneys." },
  { slug: "full-blood-count", title: "Full blood count", blurb: "What this common blood test checks." },
  { slug: "ultrasound-scan", title: "Ultrasound scan", blurb: "How and why ultrasound is used, including in pregnancy." },
];

export const medicines: LibraryEntry[] = [
  { slug: "antihypertensives", title: "Blood pressure medicines", blurb: "Main groups, how they work and using them safely." },
  { slug: "metformin", title: "Metformin", blurb: "A first-line medicine for type 2 diabetes." },
  { slug: "act-antimalarials", title: "Antimalarials (ACTs)", blurb: "Recommended malaria treatment and completing the course." },
  { slug: "paracetamol", title: "Paracetamol", blurb: "Safe use for fever and pain, and avoiding overdose." },
  { slug: "iron-folate", title: "Iron & folate supplements", blurb: "Used in pregnancy and to treat anaemia." },
  { slug: "antibiotics-safe-use", title: "Antibiotics — safe use", blurb: "Why they are not for every illness, and resistance." },
];

export const preventionGuides: LibraryEntry[] = [
  { slug: "blood-pressure-screening", title: "Blood pressure screening", blurb: "Who should check, and how often." },
  { slug: "diabetes-screening", title: "Diabetes screening", blurb: "Spotting raised blood sugar before symptoms." },
  { slug: "malaria-prevention", title: "Malaria prevention", blurb: "Nets, environment and protection in pregnancy." },
  { slug: "antenatal-care", title: "Antenatal care schedule", blurb: "Why and when to attend during pregnancy." },
  { slug: "healthy-eating", title: "Healthy eating basics", blurb: "Practical food choices for lower risk." },
  { slug: "physical-activity", title: "Physical activity", blurb: "Simple, affordable ways to stay active." },
];
