// data/guides.ts
// Data-driven guide records for the Centre/Department system.
//
// A "guide" is a single piece of patient-facing content that belongs to one
// centre. Published guides link to a live article; Draft / In Review guides are
// surfaced honestly as being prepared for medical review, never as dead links.

export type GuideUrgency = "Routine" | "Soon" | "Urgent" | "Emergency";
export type GuideStatus = "Published" | "In Review" | "Draft";

export interface Guide {
  /** URL-safe identifier, unique across all guides. */
  slug: string;
  title: string;
  summary: string;
  /** Slug of the centre this guide belongs to. */
  centre: string;
  /** Short editorial category label, e.g. "Condition", "Screening". */
  category: string;
  urgency: GuideUrgency;
  status: GuideStatus;
  /** Internal href. For unpublished guides this points back to the centre hub. */
  link: string;
  /** Slugs of related guides, for cross-linking. */
  relatedGuides?: string[];
}

export const guides: Guide[] = [
  // ── Heart & Blood Pressure ────────────────────────────────────────────────
  {
    slug: "hypertension",
    title: "Hypertension (High Blood Pressure)",
    summary:
      "Persistently raised blood pressure — usually silent, and a leading cause of stroke, heart failure and kidney disease in Nigeria.",
    centre: "heart-blood-pressure",
    category: "Condition",
    urgency: "Soon",
    status: "Published",
    link: "/conditions/hypertension",
    relatedGuides: ["stroke", "chronic-kidney-disease"],
  },
  {
    slug: "stroke",
    title: "Stroke",
    summary:
      "A medical emergency where blood flow to part of the brain is cut off. Recognising it fast saves lives and abilities.",
    centre: "heart-blood-pressure",
    category: "Emergency",
    urgency: "Emergency",
    status: "Published",
    link: "/conditions/stroke",
    relatedGuides: ["hypertension"],
  },
  {
    slug: "heart-failure",
    title: "Heart Failure",
    summary:
      "When the heart cannot pump as well as it should. Understanding symptoms and follow-up helps people stay stable and out of hospital.",
    centre: "heart-blood-pressure",
    category: "Condition",
    urgency: "Urgent",
    status: "In Review",
    link: "/centres/heart-blood-pressure",
    relatedGuides: ["hypertension"],
  },
  {
    slug: "high-cholesterol",
    title: "High Cholesterol",
    summary:
      "Raised blood fats that quietly add to heart and stroke risk over time, and what can be done about them.",
    centre: "heart-blood-pressure",
    category: "Condition",
    urgency: "Routine",
    status: "Draft",
    link: "/centres/heart-blood-pressure",
  },
  {
    slug: "chest-pain",
    title: "Chest Pain",
    summary:
      "Chest pain has many causes, from minor to life-threatening. Knowing which features are concerning helps you act at the right speed.",
    centre: "heart-blood-pressure",
    category: "Symptom",
    urgency: "Emergency",
    status: "In Review",
    link: "/centres/heart-blood-pressure",
    relatedGuides: ["stroke", "hypertension"],
  },
  {
    slug: "palpitations",
    title: "Palpitations",
    summary:
      "The feeling of a racing, fluttering or pounding heartbeat — often harmless, but sometimes a sign worth checking.",
    centre: "heart-blood-pressure",
    category: "Symptom",
    urgency: "Soon",
    status: "Draft",
    link: "/centres/heart-blood-pressure",
  },
  {
    slug: "blood-pressure-check",
    title: "Blood Pressure Check",
    summary:
      "A quick, painless measurement that can reveal a silent risk. What the numbers mean and what to do next.",
    centre: "heart-blood-pressure",
    category: "Test",
    urgency: "Routine",
    status: "Published",
    link: "/conditions/blood-pressure-check",
    relatedGuides: ["hypertension", "home-bp-monitoring"],
  },
  {
    slug: "ecg",
    title: "ECG (Electrocardiogram)",
    summary:
      "A simple recording of the heart’s electrical activity, used to check rhythm and look for strain or damage.",
    centre: "heart-blood-pressure",
    category: "Test",
    urgency: "Routine",
    status: "In Review",
    link: "/centres/heart-blood-pressure",
  },
  {
    slug: "home-bp-monitoring",
    title: "How to Monitor Blood Pressure at Home",
    summary:
      "Using a home monitor correctly — when to measure, how to sit, and how to record readings your clinician can trust.",
    centre: "heart-blood-pressure",
    category: "Self-care",
    urgency: "Routine",
    status: "In Review",
    link: "/centres/heart-blood-pressure",
    relatedGuides: ["blood-pressure-check"],
  },
  {
    slug: "questions-after-high-bp",
    title: "Questions to Ask After a High BP Reading",
    summary:
      "A high reading is a prompt, not a diagnosis. The questions that help you understand it and plan next steps with a clinician.",
    centre: "heart-blood-pressure",
    category: "Patient guide",
    urgency: "Soon",
    status: "Draft",
    link: "/centres/heart-blood-pressure",
    relatedGuides: ["hypertension", "blood-pressure-check"],
  },

  // ── Diabetes & Metabolic Health ───────────────────────────────────────────
  {
    slug: "type-2-diabetes",
    title: "Diabetes (Type 2)",
    summary:
      "A common long-term condition where blood sugar runs too high. Well-managed, most people live full, active lives.",
    centre: "diabetes-metabolic-health",
    category: "Condition",
    urgency: "Soon",
    status: "Published",
    link: "/conditions/diabetes",
    relatedGuides: ["low-blood-sugar", "hba1c-test"],
  },
  {
    slug: "high-blood-sugar",
    title: "High Blood Sugar",
    summary:
      "What raised blood sugar means, the symptoms to notice, and when very high sugar needs urgent care.",
    centre: "diabetes-metabolic-health",
    category: "Condition",
    urgency: "Urgent",
    status: "In Review",
    link: "/centres/diabetes-metabolic-health",
    relatedGuides: ["type-2-diabetes", "low-blood-sugar"],
  },
  {
    slug: "low-blood-sugar",
    title: "Low Blood Sugar",
    summary:
      "Recognising and treating a sudden drop in blood sugar — an important skill for anyone on diabetes medication.",
    centre: "diabetes-metabolic-health",
    category: "Condition",
    urgency: "Urgent",
    status: "Published",
    link: "/conditions/low-blood-sugar",
    relatedGuides: ["type-2-diabetes", "high-blood-sugar"],
  },
  {
    slug: "hba1c-test",
    title: "HbA1c Test",
    summary:
      "The blood test that reflects average blood sugar over months, and what the result means for your care.",
    centre: "diabetes-metabolic-health",
    category: "Test",
    urgency: "Routine",
    status: "Published",
    link: "/conditions/hba1c-test",
    relatedGuides: ["type-2-diabetes", "fasting-blood-sugar"],
  },
  {
    slug: "fasting-blood-sugar",
    title: "Fasting Blood Sugar",
    summary:
      "What a fasting blood sugar test measures, how it is done, and how clinicians use it in diagnosis.",
    centre: "diabetes-metabolic-health",
    category: "Test",
    urgency: "Routine",
    status: "In Review",
    link: "/centres/diabetes-metabolic-health",
    relatedGuides: ["hba1c-test"],
  },
  {
    slug: "diabetic-foot-care",
    title: "Diabetic Foot Care",
    summary:
      "Simple daily checks and habits that prevent serious foot problems for people living with diabetes.",
    centre: "diabetes-metabolic-health",
    category: "Self-care",
    urgency: "Soon",
    status: "In Review",
    link: "/centres/diabetes-metabolic-health",
  },
  {
    slug: "diabetes-eye-health",
    title: "Diabetes and Eye Health",
    summary:
      "Why diabetes can affect the eyes, and the regular checks that protect your sight.",
    centre: "diabetes-metabolic-health",
    category: "Condition",
    urgency: "Soon",
    status: "In Review",
    link: "/centres/diabetes-metabolic-health",
  },
  {
    slug: "diabetes-kidney-health",
    title: "Diabetes and Kidney Health",
    summary:
      "How diabetes can affect the kidneys over time, and how good control and testing protect them.",
    centre: "diabetes-metabolic-health",
    category: "Condition",
    urgency: "Soon",
    status: "In Review",
    link: "/centres/diabetes-metabolic-health",
    relatedGuides: ["hba1c-test"],
  },
  {
    slug: "diet-diabetes-nigeria",
    title: "Diet and Diabetes in Nigeria",
    summary:
      "Practical, culturally familiar ways to manage blood sugar through everyday Nigerian foods and habits.",
    centre: "diabetes-metabolic-health",
    category: "Self-care",
    urgency: "Routine",
    status: "In Review",
    link: "/centres/diabetes-metabolic-health",
  },
  {
    slug: "questions-after-diabetes-diagnosis",
    title: "Questions to Ask After a Diabetes Diagnosis",
    summary:
      "A diagnosis is a starting point. The questions that help you understand it and plan care with your clinician.",
    centre: "diabetes-metabolic-health",
    category: "Patient guide",
    urgency: "Routine",
    status: "Draft",
    link: "/centres/diabetes-metabolic-health",
    relatedGuides: ["type-2-diabetes"],
  },

  // ── Maternal Health ───────────────────────────────────────────────────────
  {
    slug: "pregnancy-danger-signs",
    title: "Pregnancy Danger Signs",
    summary:
      "The warning signs in pregnancy that should never be ignored, and when to seek care without delay.",
    centre: "maternal-health",
    category: "Emergency",
    urgency: "Emergency",
    status: "Published",
    link: "/conditions/pregnancy-danger-signs",
    relatedGuides: ["high-bp-pregnancy", "antenatal-care"],
  },
  {
    slug: "antenatal-care",
    title: "Antenatal Care",
    summary:
      "What antenatal visits are for, what to expect, and why early and regular care matters for a healthy pregnancy.",
    centre: "maternal-health",
    category: "Prevention",
    urgency: "Routine",
    status: "Published",
    link: "/conditions/antenatal-care",
    relatedGuides: ["pregnancy-danger-signs", "questions-antenatal-clinic"],
  },
  {
    slug: "high-bp-pregnancy",
    title: "High Blood Pressure in Pregnancy",
    summary:
      "Raised blood pressure in pregnancy can be serious. Why antenatal checks catch it, and the signs that need urgent care.",
    centre: "maternal-health",
    category: "Condition",
    urgency: "Urgent",
    status: "Published",
    link: "/conditions/high-blood-pressure-in-pregnancy",
    relatedGuides: ["pregnancy-danger-signs", "severe-headache-pregnancy"],
  },
  {
    slug: "bleeding-in-pregnancy",
    title: "Bleeding in Pregnancy",
    summary:
      "Bleeding at any stage of pregnancy should be assessed. What it can mean and when it is an emergency.",
    centre: "maternal-health",
    category: "Symptom",
    urgency: "Emergency",
    status: "In Review",
    link: "/centres/maternal-health",
    relatedGuides: ["pregnancy-danger-signs"],
  },
  {
    slug: "severe-headache-pregnancy",
    title: "Severe Headache in Pregnancy",
    summary:
      "A severe headache in pregnancy, especially with vision changes, can signal a serious problem and needs prompt care.",
    centre: "maternal-health",
    category: "Symptom",
    urgency: "Urgent",
    status: "In Review",
    link: "/centres/maternal-health",
    relatedGuides: ["high-bp-pregnancy"],
  },
  {
    slug: "swollen-feet-pregnancy",
    title: "Swollen Feet in Pregnancy",
    summary:
      "Mild swelling is common in pregnancy, but sudden or severe swelling should be checked. How to tell the difference.",
    centre: "maternal-health",
    category: "Symptom",
    urgency: "Soon",
    status: "Draft",
    link: "/centres/maternal-health",
    relatedGuides: ["high-bp-pregnancy"],
  },
  {
    slug: "labour-warning-signs",
    title: "Labour Warning Signs",
    summary:
      "Knowing the signs that labour is starting, and the ones that mean you should get to a facility quickly.",
    centre: "maternal-health",
    category: "Emergency",
    urgency: "Urgent",
    status: "In Review",
    link: "/centres/maternal-health",
  },
  {
    slug: "postnatal-warning-signs",
    title: "Postnatal Warning Signs",
    summary:
      "The signs after birth that need attention — for the mother’s recovery and safety in the weeks that follow.",
    centre: "maternal-health",
    category: "Emergency",
    urgency: "Urgent",
    status: "In Review",
    link: "/centres/maternal-health",
  },
  {
    slug: "newborn-danger-signs",
    title: "Newborn Danger Signs",
    summary:
      "The early warning signs in a newborn that mean a baby should be seen by a health worker without delay.",
    centre: "maternal-health",
    category: "Emergency",
    urgency: "Emergency",
    status: "In Review",
    link: "/centres/maternal-health",
  },
  {
    slug: "questions-antenatal-clinic",
    title: "Questions to Ask at Antenatal Clinic",
    summary:
      "Making the most of each antenatal visit — the questions that help you understand your care and plan ahead.",
    centre: "maternal-health",
    category: "Patient guide",
    urgency: "Routine",
    status: "Draft",
    link: "/centres/maternal-health",
    relatedGuides: ["antenatal-care"],
  },

  // ── Kidney Health ─────────────────────────────────────────────────────────
  {
    slug: "chronic-kidney-disease",
    title: "Chronic Kidney Disease",
    summary:
      "Gradual loss of kidney function, often silent for years. Early detection and blood-pressure control slow it down.",
    centre: "kidney-health",
    category: "Condition",
    urgency: "Soon",
    status: "Published",
    link: "/conditions/kidney-disease",
    relatedGuides: ["kidney-function-test", "painkiller-misuse-kidney"],
  },
  {
    slug: "kidney-function-test",
    title: "Kidney Function Test",
    summary:
      "The blood and urine tests that show how the kidneys are working, and what the results can mean.",
    centre: "kidney-health",
    category: "Test",
    urgency: "Routine",
    status: "Published",
    link: "/conditions/kidney-function-test",
    relatedGuides: ["chronic-kidney-disease", "protein-in-urine"],
  },
  {
    slug: "painkiller-misuse-kidney",
    title: "Painkiller Misuse and Kidney Risk",
    summary:
      "Why frequent, unguided use of some painkillers can harm the kidneys, and how to use them more safely.",
    centre: "kidney-health",
    category: "Prevention",
    urgency: "Soon",
    status: "Published",
    link: "/conditions/painkiller-misuse-kidney",
    relatedGuides: ["chronic-kidney-disease"],
  },
  {
    slug: "protein-in-urine",
    title: "Protein in Urine",
    summary:
      "Protein in the urine can be an early sign of kidney strain. What it means and why it should be assessed.",
    centre: "kidney-health",
    category: "Test",
    urgency: "Soon",
    status: "In Review",
    link: "/centres/kidney-health",
    relatedGuides: ["kidney-function-test"],
  },
  {
    slug: "swollen-legs",
    title: "Swollen Legs",
    summary:
      "Swelling of the legs has many causes, from minor to serious. When it points to the kidneys, heart or other problems.",
    centre: "kidney-health",
    category: "Symptom",
    urgency: "Soon",
    status: "In Review",
    link: "/centres/kidney-health",
  },
  {
    slug: "reduced-urine",
    title: "Reduced Urine",
    summary:
      "Passing much less urine than usual can be a warning sign. Why it should be assessed promptly.",
    centre: "kidney-health",
    category: "Symptom",
    urgency: "Urgent",
    status: "In Review",
    link: "/centres/kidney-health",
  },
  {
    slug: "hypertension-kidney-disease",
    title: "Hypertension and Kidney Disease",
    summary:
      "High blood pressure and kidney disease are closely linked. How controlling one protects the other.",
    centre: "kidney-health",
    category: "Condition",
    urgency: "Soon",
    status: "In Review",
    link: "/centres/kidney-health",
    relatedGuides: ["chronic-kidney-disease"],
  },
  {
    slug: "diabetes-kidney-disease",
    title: "Diabetes and Kidney Disease",
    summary:
      "Diabetes is a leading cause of kidney damage. The checks and control that help protect the kidneys.",
    centre: "kidney-health",
    category: "Condition",
    urgency: "Soon",
    status: "In Review",
    link: "/centres/kidney-health",
    relatedGuides: ["chronic-kidney-disease"],
  },
  {
    slug: "when-to-see-kidney-specialist",
    title: "When to See a Kidney Specialist",
    summary:
      "The situations where a referral to a kidney specialist is helpful, and what to expect.",
    centre: "kidney-health",
    category: "Patient guide",
    urgency: "Routine",
    status: "Draft",
    link: "/centres/kidney-health",
  },
  {
    slug: "questions-kidney-test-results",
    title: "Questions to Ask About Kidney Test Results",
    summary:
      "Understanding your kidney results — the questions that help you and your clinician plan next steps.",
    centre: "kidney-health",
    category: "Patient guide",
    urgency: "Routine",
    status: "Draft",
    link: "/centres/kidney-health",
    relatedGuides: ["kidney-function-test"],
  },

  // ── Mental & Behavioural Health ───────────────────────────────────────────
  {
    slug: "anxiety",
    title: "Anxiety",
    summary:
      "When worry becomes persistent and hard to control. What anxiety is, and the support and strategies that help.",
    centre: "mental-behavioural-health",
    category: "Condition",
    urgency: "Soon",
    status: "Published",
    link: "/conditions/anxiety",
    relatedGuides: ["depression", "when-to-seek-mental-health-support"],
  },
  {
    slug: "depression",
    title: "Depression",
    summary:
      "More than ordinary sadness — a common, treatable condition. Understanding it is the first step to getting support.",
    centre: "mental-behavioural-health",
    category: "Condition",
    urgency: "Soon",
    status: "Published",
    link: "/conditions/depression",
    relatedGuides: ["anxiety", "when-to-seek-mental-health-support"],
  },
  {
    slug: "when-to-seek-mental-health-support",
    title: "When to Seek Mental Health Support",
    summary:
      "Reaching out is a strength. How to recognise when support would help, and the steps to find it.",
    centre: "mental-behavioural-health",
    category: "Patient guide",
    urgency: "Soon",
    status: "Published",
    link: "/conditions/when-to-seek-mental-health-support",
    relatedGuides: ["anxiety", "depression", "how-families-can-support"],
  },
  {
    slug: "stress-burnout",
    title: "Stress and Burnout",
    summary:
      "When ongoing pressure starts to affect health and daily life, and the steps that help you recover balance.",
    centre: "mental-behavioural-health",
    category: "Wellbeing",
    urgency: "Routine",
    status: "In Review",
    link: "/centres/mental-behavioural-health",
  },
  {
    slug: "sleep-problems",
    title: "Sleep Problems",
    summary:
      "Why sleep matters for mental and physical health, and gentle, practical steps for resting better.",
    centre: "mental-behavioural-health",
    category: "Self-care",
    urgency: "Routine",
    status: "Draft",
    link: "/centres/mental-behavioural-health",
  },
  {
    slug: "panic-symptoms",
    title: "Panic Symptoms",
    summary:
      "Understanding panic — what the sudden, frightening symptoms are, and calm steps that can help.",
    centre: "mental-behavioural-health",
    category: "Condition",
    urgency: "Soon",
    status: "In Review",
    link: "/centres/mental-behavioural-health",
    relatedGuides: ["anxiety"],
  },
  {
    slug: "grief",
    title: "Grief",
    summary:
      "Grief is a natural response to loss. What to expect, and when extra support can help you through it.",
    centre: "mental-behavioural-health",
    category: "Wellbeing",
    urgency: "Routine",
    status: "In Review",
    link: "/centres/mental-behavioural-health",
  },
  {
    slug: "substance-misuse-support",
    title: "Substance Misuse Support Pathways",
    summary:
      "Where to find non-judgemental help for alcohol or drug concerns, for a person or their family.",
    centre: "mental-behavioural-health",
    category: "Patient guide",
    urgency: "Soon",
    status: "In Review",
    link: "/centres/mental-behavioural-health",
    relatedGuides: ["when-to-seek-mental-health-support"],
  },
  {
    slug: "how-families-can-support",
    title: "How Families Can Support Someone",
    summary:
      "Practical, compassionate ways families can support a loved one’s mental health without stigma.",
    centre: "mental-behavioural-health",
    category: "Patient guide",
    urgency: "Routine",
    status: "Draft",
    link: "/centres/mental-behavioural-health",
    relatedGuides: ["when-to-seek-mental-health-support"],
  },
  {
    slug: "questions-mental-health-professional",
    title: "Questions to Ask a Mental Health Professional",
    summary:
      "Helpful questions for a first appointment, so you feel prepared and understood.",
    centre: "mental-behavioural-health",
    category: "Patient guide",
    urgency: "Routine",
    status: "Draft",
    link: "/centres/mental-behavioural-health",
  },

  // ── Preventive Health ─────────────────────────────────────────────────────
  {
    slug: "malaria",
    title: "Malaria",
    summary:
      "A common, treatable but potentially severe infection. Fast testing and the right treatment prevent serious illness.",
    centre: "preventive-health",
    category: "Condition",
    urgency: "Soon",
    status: "Published",
    link: "/conditions/malaria",
    relatedGuides: ["malaria-prevention"],
  },
  {
    slug: "malaria-prevention",
    title: "Malaria Prevention",
    summary:
      "The simple, effective measures that lower malaria risk — nets, environment and protecting young children and pregnancy.",
    centre: "preventive-health",
    category: "Prevention",
    urgency: "Routine",
    status: "Published",
    link: "/conditions/malaria-prevention",
    relatedGuides: ["malaria"],
  },
  {
    slug: "blood-pressure-screening",
    title: "Blood Pressure Screening",
    summary:
      "Why a quick, painless check matters even when you feel well, and how often to have it done.",
    centre: "preventive-health",
    category: "Screening",
    urgency: "Routine",
    status: "Published",
    link: "/conditions/blood-pressure-check",
    relatedGuides: ["annual-health-check"],
  },
  {
    slug: "diabetes-screening",
    title: "Diabetes Screening",
    summary:
      "Who benefits from a blood sugar check, when to have one, and what the results can show.",
    centre: "preventive-health",
    category: "Screening",
    urgency: "Routine",
    status: "In Review",
    link: "/centres/preventive-health",
    relatedGuides: ["annual-health-check"],
  },
  {
    slug: "cancer-screening-basics",
    title: "Cancer Screening Basics",
    summary:
      "What screening is, which checks are commonly offered, and how early detection helps.",
    centre: "preventive-health",
    category: "Screening",
    urgency: "Routine",
    status: "In Review",
    link: "/centres/preventive-health",
  },
  {
    slug: "immunisation",
    title: "Immunisation",
    summary:
      "How vaccines protect individuals and communities, and the key immunisations across a lifetime.",
    centre: "preventive-health",
    category: "Prevention",
    urgency: "Routine",
    status: "In Review",
    link: "/centres/preventive-health",
  },
  {
    slug: "healthy-weight",
    title: "Healthy Weight",
    summary:
      "Practical, sustainable steps toward a healthier weight, and why it lowers risk across many conditions.",
    centre: "preventive-health",
    category: "Prevention",
    urgency: "Routine",
    status: "Draft",
    link: "/centres/preventive-health",
  },
  {
    slug: "nutrition-basics",
    title: "Nutrition Basics",
    summary:
      "Simple, affordable principles for balanced eating, built around familiar Nigerian foods.",
    centre: "preventive-health",
    category: "Self-care",
    urgency: "Routine",
    status: "In Review",
    link: "/centres/preventive-health",
  },
  {
    slug: "exercise-heart-health",
    title: "Exercise and Heart Health",
    summary:
      "How regular movement protects the heart and blood pressure, and how to start safely.",
    centre: "preventive-health",
    category: "Self-care",
    urgency: "Routine",
    status: "In Review",
    link: "/centres/preventive-health",
  },
  {
    slug: "annual-health-check",
    title: "Annual Health Check Guide",
    summary:
      "A practical guide to a yearly check — the numbers worth knowing and the questions worth asking.",
    centre: "preventive-health",
    category: "Screening",
    urgency: "Routine",
    status: "Published",
    link: "/conditions/annual-health-check",
    relatedGuides: ["blood-pressure-screening", "diabetes-screening"],
  },
];

// ── Helpers ──────────────────────────────────────────────────────────────────

export const isPublished = (g: Guide): boolean => g.status === "Published";

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}

export function getGuidesByCentre(centreSlug: string): Guide[] {
  return guides.filter((g) => g.centre === centreSlug);
}

/** Resolve a list of guide slugs to records, preserving order and skipping misses. */
export function getGuides(slugs: string[]): Guide[] {
  return slugs
    .map((s) => getGuideBySlug(s))
    .filter((g): g is Guide => Boolean(g));
}
