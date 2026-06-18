// lib/institutional.ts
// Content for the institutional services layer — the "For Hospitals & Institutions"
// side of Health Clarity Institute Nigeria. Kept as data so the page stays a thin
// rendering layer and the offering can grow without code changes.

export interface ProblemPoint {
  title: string;
  body: string;
}

export interface ServiceOffering {
  title: string;
  description: string;
  iconSlug: string; // resolved in the page via a small icon map
}

export interface ClinicModel {
  clinic: string;
  centreSlug: string;
  body: string;
}

export interface ServicePackage {
  name: string;
  forWhom: string;
  includes: string[];
}

export interface UseCase {
  audience: string;
  body: string;
  iconSlug: string;
}

/** The five standard ways a specialist centre can support an institution.
 *  Used both on this page and in the small per-centre "For institutions" block. */
export const institutionalSupportModes: string[] = [
  "Screening and early-detection campaigns",
  "Patient education materials",
  "Specialist clinic communication",
  "Community health outreach",
  "Hospital website structure",
];

// ── 2. The problem ───────────────────────────────────────────────────────────
export const institutionalProblems: ProblemPoint[] = [
  {
    title: "Weak digital communication",
    body: "Many hospitals and clinics have little or no clear online presence, so patients cannot find services, prepare for visits, or understand the care on offer.",
  },
  {
    title: "Patients leave consultations unclear",
    body: "Even after a good consultation, patients often go home unsure what they were told, what to do next, or when to return — and there is nothing reliable to read.",
  },
  {
    title: "Preventive education is underdeveloped",
    body: "Screening, prevention and healthy-habit information is rarely presented in an organised, trustworthy way, so opportunities to prevent illness are missed.",
  },
  {
    title: "Specialist services are not clearly presented",
    body: "Clinics and specialties are frequently buried or undescribed, making it hard for patients and referrers to understand what an institution actually does.",
  },
  {
    title: "Credible patient materials are hard to produce",
    body: "Writing accurate, plain-language, reviewable patient education takes editorial and clinical effort that most institutions are not set up to provide.",
  },
  {
    title: "Content is scattered, not structured",
    body: "Institutions need a coherent system — libraries, pathways and pages that fit together — not occasional social posts that disappear in a feed.",
  },
];

// ── 3. What we help build ────────────────────────────────────────────────────
export const institutionalOfferings: ServiceOffering[] = [
  { title: "Premium hospital websites", description: "Credible, fast, well-structured sites that reflect the standard of your care.", iconSlug: "hospital" },
  { title: "Specialist clinic microsites", description: "Focused, credible sites for a single specialty, clinic or campaign.", iconSlug: "stethoscope" },
  { title: "Patient education libraries", description: "Branded, reviewable health-content libraries for your patients and community.", iconSlug: "book" },
  { title: "Doctor profile systems", description: "Structured, searchable profiles for your clinicians and their specialties.", iconSlug: "clipboard" },
  { title: "Appointment & intake pages", description: "Clear pathways for patients to reach, prepare for and arrive ready for your services.", iconSlug: "check" },
  { title: "Preventive health campaign pages", description: "Awareness pages built on accurate information, not hype.", iconSlug: "shield" },
  { title: "Screening campaign pages", description: "Organised pages for screening drives — what, who, when and why it matters.", iconSlug: "pulse" },
  { title: "Medical content strategy", description: "Editorial planning and review workflows for trustworthy health content.", iconSlug: "book" },
  { title: "Health documentation systems", description: "Policies, patient materials and knowledge bases, properly structured and maintained.", iconSlug: "clipboard" },
  { title: "Newsletter & patient follow-up", description: "Considered follow-up and update systems that keep patients informed responsibly.", iconSlug: "check" },
  { title: "Community health education pages", description: "Accessible pages for community programmes and local health education.", iconSlug: "maternal" },
  { title: "NGO & public-health project pages", description: "Clear project sites for programmes, partners, reporting and reach.", iconSlug: "shield" },
];

// ── 4. Specialist centre model ───────────────────────────────────────────────
export const clinicModels: ClinicModel[] = [
  {
    clinic: "Heart & Blood Pressure Clinic",
    centreSlug: "heart-blood-pressure",
    body: "Organise cardiovascular services — blood-pressure checks, heart care and stroke prevention — around one clear, navigable clinic hub.",
  },
  {
    clinic: "Diabetes Clinic",
    centreSlug: "diabetes-metabolic-health",
    body: "Bring blood-sugar control, monitoring, complications and long-term care together so patients understand lifelong management.",
  },
  {
    clinic: "Maternal Health Clinic",
    centreSlug: "maternal-health",
    body: "Present antenatal care, danger-sign awareness and newborn health as one trusted pathway for mothers and families.",
  },
  {
    clinic: "Kidney Clinic",
    centreSlug: "kidney-health",
    body: "Explain kidney testing, prevention and referral clearly, and connect them to the conditions that drive kidney disease.",
  },
  {
    clinic: "Mental Health Support Pathway",
    centreSlug: "mental-behavioural-health",
    body: "Offer calm, stigma-free information and clear routes to support — presented with care and pointing toward qualified help.",
  },
  {
    clinic: "Preventive Health Screening Desk",
    centreSlug: "preventive-health",
    body: "Anchor screening, vaccines, malaria prevention and healthy habits in one organised, action-oriented desk.",
  },
];

// ── 5. Patient education packages ────────────────────────────────────────────
export const servicePackages: ServicePackage[] = [
  {
    name: "Starter Patient Education Page",
    forWhom: "A single clinic or practice taking its first credible step online.",
    includes: [
      "One well-structured patient education page",
      "Plain-language, reviewable content",
      "Clear emergency and disclaimer framing",
    ],
  },
  {
    name: "Specialist Clinic Page",
    forWhom: "A specialty or clinic that needs to present its service clearly.",
    includes: [
      "A focused clinic microsite",
      "Service description and patient pathway",
      "Doctor profiles and contact pathway",
    ],
  },
  {
    name: "Hospital Authority Website",
    forWhom: "A hospital that wants its online presence to match its standard of care.",
    includes: [
      "Multi-service institutional website",
      "Specialties, clinics and doctor systems",
      "Patient information and intake pages",
    ],
  },
  {
    name: "Preventive Health Campaign",
    forWhom: "Any institution running a screening, awareness or prevention drive.",
    includes: [
      "Campaign and screening pages",
      "Accurate, careful health messaging",
      "Community-ready, shareable structure",
    ],
  },
  {
    name: "Institutional Health Library",
    forWhom: "An institution building a lasting, branded body of patient education.",
    includes: [
      "A structured library of guides",
      "Editorial and review workflow",
      "Centre-based organisation of content",
    ],
  },
  {
    name: "Full Digital Patient Clarity System",
    forWhom: "An institution ready to treat patient clarity as core infrastructure.",
    includes: [
      "Website, library and clinic microsites together",
      "Content strategy and review process",
      "Follow-up, documentation and maintenance",
    ],
  },
];

// ── 6. Use cases ─────────────────────────────────────────────────────────────
export const institutionalUseCases: UseCase[] = [
  { audience: "Private hospital", body: "A credible institutional website with clinics, doctors, patient information and intake pathways.", iconSlug: "hospital" },
  { audience: "Specialist clinic", body: "A focused microsite that explains one specialty clearly and helps patients arrive prepared.", iconSlug: "stethoscope" },
  { audience: "Diagnostic laboratory", body: "Clear pages on tests offered, how to prepare, and how results support clinical care.", iconSlug: "clipboard" },
  { audience: "Pharmacy group", body: "Responsible health education and service pages that support safe medicine use.", iconSlug: "pill" },
  { audience: "NGO / public-health project", body: "Project and campaign sites for programmes, partners, reach and reporting.", iconSlug: "shield" },
  { audience: "School health programme", body: "Age-appropriate health education and programme pages for students and parents.", iconSlug: "book" },
  { audience: "Church / community outreach", body: "Community health-education and screening-day pages that reach people where they are.", iconSlug: "maternal" },
  { audience: "Corporate wellness programme", body: "Staff health education, screening campaigns and preventive communication.", iconSlug: "pulse" },
];

// ── 7. Trust & compliance ────────────────────────────────────────────────────
export const institutionalCompliance: ProblemPoint[] = [
  {
    title: "Reviewed by qualified professionals",
    body: "Clinical content we produce is written to be reviewed by qualified health professionals before final publication.",
  },
  {
    title: "Careful medical claims",
    body: "We avoid exaggeration, miracle claims and unsupported treatment claims, and we describe care without acting as a prescription.",
  },
  {
    title: "Patient privacy respected",
    body: "We design with patient privacy in mind and do not turn patient education into data collection.",
  },
  {
    title: "Not a replacement for consultation",
    body: "Everything we build is framed as education and navigation — it supports, and never replaces, clinical consultation.",
  },
  {
    title: "Clear emergency guidance",
    body: "Emergency guidance is clear and conservative, telling people plainly when to seek urgent care at the nearest hospital.",
  },
];
