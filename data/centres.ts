// data/centres.ts
// Data-driven centre (department) records. A centre is an institutional home for
// a cluster of related guides, with its own patient pathway, Nigerian context
// and institutional-services angle. Pages are generated from this data — adding
// a centre is a data change, not a code change.

export interface PatientPathwayStep {
  title: string;
  description: string;
  /** Optional link to a relevant guide or section. */
  href?: string;
}

export interface Centre {
  slug: string;
  title: string;
  /** Short uppercase category label shown above the title. */
  categoryLabel: string;
  description: string;
  /** Icon key resolved in CentreHub (heart | droplet | maternal | kidney | brain | shield). */
  iconSlug: string;
  /** Slugs of guides to feature (3–5, or more for a fully-developed centre). */
  featuredGuideSlugs: string[];
  /** Common symptoms patients in this area should understand. */
  symptoms: string[];
  /** Red-flag warning signs that warrant prompt or urgent care. */
  warningSigns: string[];
  /** Tests and checks commonly used in this area. */
  tests: string[];
  patientPathway: {
    intro?: string;
    /** "steps" renders a numbered sequence; "cards" renders entry-point cards. */
    variant?: "steps" | "cards";
    steps: PatientPathwayStep[];
  };
  nigerianContext: string[];
  /** Slugs of related centres. */
  relatedCentres: string[];
  /** How the Institute supports hospitals/clinics in this area (paragraph). */
  institutionalAngle: string;
  /** Optional concrete list of institutional services for this centre. */
  institutionalServices?: string[];
  /** Optional emergency-guidance link surfaced in the hero. */
  emergencyGuide?: { label: string; href: string };
}

export const centres: Centre[] = [
  // ── Heart & Blood Pressure ────────────────────────────────────────────────
  {
    slug: "heart-blood-pressure",
    title: "Heart & Blood Pressure Centre",
    categoryLabel: "Cardiovascular Health",
    description:
      "Blood pressure, heart disease, stroke prevention, and cardiovascular care for Nigerian patients, families, and institutions.",
    iconSlug: "heart",
    emergencyGuide: {
      label: "Recognise a cardiovascular emergency",
      href: "/conditions/stroke#urgent",
    },
    featuredGuideSlugs: [
      "hypertension",
      "stroke",
      "chest-pain",
      "heart-failure",
      "palpitations",
      "high-cholesterol",
      "blood-pressure-check",
      "ecg",
      "home-bp-monitoring",
      "questions-after-high-bp",
    ],
    symptoms: [
      "Palpitations — a racing, pounding or fluttering heartbeat",
      "Shortness of breath on exertion, or when lying flat",
      "Swelling of the legs, ankles or feet",
      "Tiredness or reduced ability to do usual activity",
      "Occasional dizziness or light-headedness",
    ],
    warningSigns: [
      "Chest pain or tightness, especially spreading to the arm, neck or jaw",
      "Sudden weakness, numbness or drooping on one side of the body",
      "A severe or sudden headache, particularly with vision changes",
      "Sudden severe shortness of breath",
      "A very high blood pressure reading together with symptoms",
    ],
    tests: [
      "Blood pressure check (on more than one occasion)",
      "ECG (electrocardiogram) to look at heart rhythm",
      "Cholesterol (lipid) blood test",
      "Blood sugar test, as diabetes raises cardiovascular risk",
      "Kidney function test, since blood pressure affects the kidneys",
      "Urine protein test, which can signal pressure-related strain",
    ],
    patientPathway: {
      variant: "cards",
      intro:
        "Choose the situation closest to yours. These are starting points for understanding and action — not a diagnosis.",
      steps: [
        {
          title: "I have a high blood pressure reading",
          description:
            "One high reading is a prompt, not a diagnosis. Learn what the numbers mean and what should be confirmed by a clinician.",
          href: "/conditions/blood-pressure-check",
        },
        {
          title: "I have chest pain",
          description:
            "Chest pain can be minor or serious. Crushing pain, or pain spreading to the arm or jaw, should be treated as an emergency — go to hospital now.",
          href: "/conditions/stroke#urgent",
        },
        {
          title: "I am worried about stroke signs",
          description:
            "Sudden one-sided weakness, facial drooping or slurred speech are emergencies. Acting fast protects the brain.",
          href: "/conditions/stroke",
        },
        {
          title: "I want to prepare for a clinic visit",
          description:
            "Knowing your readings and your questions makes a visit more useful. Bring any home measurements you have.",
          href: "/conditions/hypertension#questions",
        },
        {
          title: "I want to understand my test results",
          description:
            "Blood pressure, ECG and blood tests are interpreted together by a qualified clinician. Learn what each one looks at.",
          href: "/conditions/blood-pressure-check",
        },
        {
          title: "I want prevention guidance",
          description:
            "Much cardiovascular risk can be lowered with steady habits and regular checks. Start with the basics that matter most.",
          href: "/conditions/hypertension#prevention",
        },
      ],
    },
    nigerianContext: [
      "Many people do not know their blood pressure status, because it is rarely checked until they are already unwell. A simple, regular check changes that.",
      "Hypertension is often silent — it can cause no symptoms for years while quietly raising the risk of stroke, heart failure and kidney disease.",
      "Seeking care late, after symptoms appear, increases the risk of serious harm. Earlier checks and earlier questions are safer and usually cheaper.",
      "Self-medication and unverified herbal “blood pressure cures” are common and can delay proper assessment. Medicines should be guided by a qualified clinician.",
      "Cost and distance can make follow-up hard, so treatment is sometimes stopped once a person feels well — but the risk returns silently.",
      "Family support makes a real difference in long-term care: reminders, shared costs and encouragement all help people stay on track.",
      "Blood pressure control is about continuity, not a one-time treatment. Steady, monitored care over time is what protects the heart and brain.",
    ],
    relatedCentres: ["diabetes-metabolic-health", "kidney-health", "preventive-health"],
    institutionalAngle:
      "The Heart & Blood Pressure Centre is built as a model department — and the same structure can support real institutions delivering cardiovascular care across Nigeria.",
    institutionalServices: [
      "Blood pressure screening campaigns",
      "Corporate health checks",
      "Patient education pages",
      "Specialist clinic microsites",
      "Doctor profile systems",
      "Preventive health communication",
      "Community health outreach",
    ],
  },

  // ── Diabetes & Metabolic Health ───────────────────────────────────────────
  {
    slug: "diabetes-metabolic-health",
    title: "Diabetes & Metabolic Health Centre",
    categoryLabel: "Blood Sugar & Metabolism",
    description:
      "Diabetes, blood sugar control, metabolic conditions, complications, and long-term care.",
    iconSlug: "droplet",
    emergencyGuide: {
      label: "Recognise a blood-sugar emergency",
      href: "/conditions/low-blood-sugar#urgent",
    },
    featuredGuideSlugs: [
      "type-2-diabetes",
      "high-blood-sugar",
      "low-blood-sugar",
      "hba1c-test",
      "fasting-blood-sugar",
      "diabetic-foot-care",
      "diabetes-eye-health",
      "diabetes-kidney-health",
      "diet-diabetes-nigeria",
      "questions-after-diabetes-diagnosis",
    ],
    symptoms: [
      "Passing urine often, especially at night",
      "Unusual thirst or a dry mouth",
      "Tiredness and unexplained weight change",
      "Blurred vision that comes and goes",
      "Slow-healing wounds or frequent infections",
    ],
    warningSigns: [
      "Confusion, shakiness or sweating that eases after eating (possible low blood sugar)",
      "Drowsiness, deep rapid breathing or a fruity smell on the breath",
      "A foot wound that is spreading, discoloured or not healing",
      "Persistent vomiting with very high or very low sugar readings",
    ],
    tests: [
      "Fasting blood sugar and random blood sugar tests",
      "HbA1c, which reflects average blood sugar over months",
      "Blood pressure and cholesterol checks",
      "Yearly eye, foot and kidney checks for people with diabetes",
      "Urine test for protein, an early sign of kidney strain",
    ],
    patientPathway: {
      variant: "cards",
      intro:
        "Choose the situation closest to yours. These are starting points for understanding and action — not a diagnosis.",
      steps: [
        {
          title: "I was just diagnosed with diabetes",
          description:
            "Learn what type 2 diabetes is and the first steps that make the biggest difference to long-term health.",
          href: "/conditions/diabetes",
        },
        {
          title: "I feel shaky, sweaty or confused",
          description:
            "These can be signs of low blood sugar. Learn to recognise and treat it — and when it becomes urgent.",
          href: "/conditions/low-blood-sugar",
        },
        {
          title: "I want to understand my HbA1c",
          description:
            "The HbA1c test reflects your average blood sugar over months. Learn what the result means for your care.",
          href: "/conditions/hba1c-test",
        },
        {
          title: "I want to protect my feet, eyes and kidneys",
          description:
            "Diabetes can affect these over time. Regular checks and good control help prevent complications.",
          href: "/centres/diabetes-metabolic-health",
        },
        {
          title: "I want to eat well with Nigerian foods",
          description:
            "Managing blood sugar does not mean giving up familiar meals. Practical, culturally-rooted guidance is in preparation.",
          href: "/centres/diabetes-metabolic-health",
        },
        {
          title: "I want prevention guidance",
          description:
            "If you are at risk, steady habits and timely checks can delay or prevent diabetes. Start with the basics.",
          href: "/conditions/diabetes#prevention",
        },
      ],
    },
    nigerianContext: [
      "Diabetes is rising in Nigerian cities and is often diagnosed late, after complications have begun. Testing when risk factors are present helps catch it early.",
      "The cost of monitoring and medicines can lead people to ration supplies. Speak openly with your clinician — there are often affordable, effective options.",
      "Familiar staples can be part of a healthy diet with the right portions and balance; managing diabetes does not mean abandoning Nigerian food.",
      "Foot problems are a common and preventable cause of serious harm. Simple daily checks and good footwear matter a great deal.",
      "Long-term control depends on continuity — regular review and steady habits — not a single course of treatment.",
    ],
    relatedCentres: ["heart-blood-pressure", "kidney-health", "preventive-health"],
    institutionalAngle:
      "The Diabetes & Metabolic Health Centre can support endocrine services, diagnostic centres and primary care delivering lifelong diabetes care across Nigeria.",
    institutionalServices: [
      "Diabetes education libraries",
      "Screening and early-detection campaigns",
      "Specialist clinic microsites",
      "Patient education pages",
      "Doctor profile systems",
      "Corporate and community health checks",
      "Preventive health communication",
    ],
  },

  // ── Maternal Health ───────────────────────────────────────────────────────
  {
    slug: "maternal-health",
    title: "Maternal Health Centre",
    categoryLabel: "Pregnancy & Newborn Care",
    description:
      "Safe pregnancy, danger signs, antenatal care, postnatal care, and newborn health.",
    iconSlug: "maternal",
    emergencyGuide: {
      label: "Recognise a pregnancy emergency",
      href: "/conditions/pregnancy-danger-signs#urgent",
    },
    featuredGuideSlugs: [
      "pregnancy-danger-signs",
      "antenatal-care",
      "high-bp-pregnancy",
      "bleeding-in-pregnancy",
      "severe-headache-pregnancy",
      "swollen-feet-pregnancy",
      "labour-warning-signs",
      "postnatal-warning-signs",
      "newborn-danger-signs",
      "questions-antenatal-clinic",
    ],
    symptoms: [
      "Normal pregnancy changes such as nausea, tiredness and mild swelling",
      "Common discomforts that antenatal visits can help with",
      "Changes in the baby’s movement pattern as pregnancy progresses",
    ],
    warningSigns: [
      "Severe headache, blurred vision or upper-abdominal pain",
      "Heavy bleeding, or fluid leaking from the vagina",
      "Reduced or absent baby movements",
      "Fever, fits, or swelling of the face and hands",
      "In a newborn: poor feeding, fast or difficult breathing, or fever",
    ],
    tests: [
      "Routine antenatal checks: blood pressure, urine and weight",
      "Blood tests for anaemia, blood group and infections",
      "Ultrasound scans as advised by your clinician",
      "Malaria prevention and screening in pregnancy",
    ],
    patientPathway: {
      variant: "cards",
      intro:
        "Choose what fits your situation. These are starting points, used alongside your antenatal team — not a diagnosis.",
      steps: [
        {
          title: "I just found out I am pregnant",
          description:
            "Begin antenatal care early. Learn what the visits are for and why early care protects you and your baby.",
          href: "/conditions/antenatal-care",
        },
        {
          title: "I want to know the danger signs",
          description:
            "Some signs in pregnancy need urgent care. Learn them so you can act quickly if they appear.",
          href: "/conditions/pregnancy-danger-signs",
        },
        {
          title: "My blood pressure is high in pregnancy",
          description:
            "Raised blood pressure in pregnancy can be serious. Learn why antenatal checks matter and when to seek care.",
          href: "/conditions/high-blood-pressure-in-pregnancy",
        },
        {
          title: "I have bleeding or severe headache",
          description:
            "Bleeding, or a severe headache with vision changes, should be assessed without delay. Treat these as urgent.",
          href: "/conditions/pregnancy-danger-signs#urgent",
        },
        {
          title: "I want to prepare for antenatal clinic",
          description:
            "Knowing what to ask helps you get the most from each visit. A question guide is being prepared for review.",
          href: "/centres/maternal-health",
        },
        {
          title: "I want prevention guidance",
          description:
            "Early, regular antenatal care, malaria prevention and good nutrition all protect a pregnancy.",
          href: "/conditions/antenatal-care#prevention",
        },
      ],
    },
    nigerianContext: [
      "Nigeria carries a high burden of maternal complications, many of which are preventable with early, regular antenatal care.",
      "Distance, cost and the decision-making of the wider family can delay care. Planning where to deliver in advance saves crucial time.",
      "Malaria in pregnancy is a serious risk; antenatal preventive treatment and treated nets are important and often available through clinics.",
      "Knowing the danger signs — and agreeing a plan with family before they are needed — helps a household act fast in an emergency.",
      "Newborn danger signs are easy to miss; learning them helps families seek care for a baby in time.",
    ],
    relatedCentres: ["heart-blood-pressure", "preventive-health", "mental-behavioural-health"],
    institutionalAngle:
      "The Maternal Health Centre can support maternity units, primary health centres and NGOs working to make pregnancy and birth safer in their communities.",
    institutionalServices: [
      "Antenatal education libraries",
      "Danger-sign awareness campaigns",
      "Delivery-planning resources",
      "Patient education pages",
      "Specialist clinic microsites",
      "Community health outreach",
      "Preventive health communication",
    ],
  },

  // ── Kidney Health ─────────────────────────────────────────────────────────
  {
    slug: "kidney-health",
    title: "Kidney Health Centre",
    categoryLabel: "Renal Care",
    description:
      "Kidney disease, kidney function, prevention, and protecting kidney health.",
    iconSlug: "kidney",
    emergencyGuide: {
      label: "When kidney symptoms are urgent",
      href: "/conditions/kidney-disease#urgent",
    },
    featuredGuideSlugs: [
      "chronic-kidney-disease",
      "kidney-function-test",
      "protein-in-urine",
      "swollen-legs",
      "reduced-urine",
      "hypertension-kidney-disease",
      "diabetes-kidney-disease",
      "painkiller-misuse-kidney",
      "when-to-see-kidney-specialist",
      "questions-kidney-test-results",
    ],
    symptoms: [
      "Swelling of the legs, ankles or around the eyes",
      "Passing urine more or less often than usual",
      "Foamy or bloody urine",
      "Tiredness, poor appetite or difficulty concentrating",
    ],
    warningSigns: [
      "Passing very little or no urine",
      "Severe pain in the side or lower back, especially with fever",
      "Breathlessness with widespread swelling",
      "Confusion or drowsiness in someone with known kidney disease",
    ],
    tests: [
      "Blood test for kidney function (creatinine / eGFR)",
      "Urine tests for protein, blood and infection",
      "Blood pressure measurement",
      "Blood sugar test, as diabetes affects the kidneys",
      "Ultrasound of the kidneys where indicated",
    ],
    patientPathway: {
      variant: "cards",
      intro:
        "Choose the situation closest to yours. These are starting points for understanding and action — not a diagnosis.",
      steps: [
        {
          title: "I want to understand kidney disease",
          description:
            "Chronic kidney disease is often silent. Learn what it is and how early detection protects the kidneys.",
          href: "/conditions/kidney-disease",
        },
        {
          title: "I want to understand my kidney test",
          description:
            "Blood and urine tests show how the kidneys are working. Learn what the results can mean.",
          href: "/conditions/kidney-function-test",
        },
        {
          title: "I use painkillers often",
          description:
            "Frequent, unguided use of some painkillers can harm the kidneys. Learn how to use them more safely.",
          href: "/conditions/painkiller-misuse-kidney",
        },
        {
          title: "I have diabetes or high blood pressure",
          description:
            "These are the leading causes of kidney damage. Keeping them controlled, with yearly checks, is the best protection.",
          href: "/centres/kidney-health",
        },
        {
          title: "I am passing little or no urine",
          description:
            "A sudden drop in urine, severe pain, or breathlessness with swelling needs urgent assessment.",
          href: "/conditions/kidney-disease#urgent",
        },
        {
          title: "I want prevention guidance",
          description:
            "Controlling blood pressure and blood sugar, staying hydrated and avoiding kidney-harming habits all help.",
          href: "/conditions/kidney-disease#prevention",
        },
      ],
    },
    nigerianContext: [
      "Kidney disease is frequently diagnosed late in Nigeria, when treatment options are fewer and dialysis is costly and hard to access.",
      "Because high blood pressure and diabetes drive most kidney damage, controlling them is the most affordable kidney protection available.",
      "Frequent, unguided use of some over-the-counter painkillers can harm the kidneys — use medicines under professional guidance.",
      "Unverified herbal remedies are sometimes taken for kidney symptoms and can cause harm; a proper assessment should come first.",
    ],
    relatedCentres: ["heart-blood-pressure", "diabetes-metabolic-health", "preventive-health"],
    institutionalAngle:
      "The Kidney Health Centre can support renal services, diagnostic centres and primary care explaining kidney testing, prevention and referral clearly.",
    institutionalServices: [
      "Kidney-health education libraries",
      "Early-detection and screening campaigns",
      "Specialist clinic microsites",
      "Patient education pages",
      "Doctor profile systems",
      "Referral information resources",
      "Preventive health communication",
    ],
  },

  // ── Mental & Behavioural Health ───────────────────────────────────────────
  {
    slug: "mental-behavioural-health",
    title: "Mental & Behavioural Health Centre",
    categoryLabel: "Mind & Wellbeing",
    description:
      "Mental health understanding, support pathways, family education, and stigma-free care.",
    iconSlug: "brain",
    emergencyGuide: {
      label: "If you feel unsafe, find support now",
      href: "/conditions/when-to-seek-mental-health-support#urgent",
    },
    featuredGuideSlugs: [
      "anxiety",
      "depression",
      "stress-burnout",
      "sleep-problems",
      "panic-symptoms",
      "grief",
      "substance-misuse-support",
      "when-to-seek-mental-health-support",
      "how-families-can-support",
      "questions-mental-health-professional",
    ],
    symptoms: [
      "Persistent low mood, loss of interest, or hopelessness",
      "Ongoing worry, restlessness or difficulty relaxing",
      "Changes in sleep, appetite or energy",
      "Difficulty concentrating or coping with daily life",
    ],
    warningSigns: [
      "Thoughts of harming yourself, or feeling that life is not worth living",
      "Being unable to care for yourself or carry out daily life",
      "A sudden, marked change in behaviour or a loss of touch with reality",
      "Distress that feels overwhelming or unsafe",
    ],
    tests: [
      "A supportive, confidential conversation with a clinician about how you feel",
      "Simple, validated questionnaires used to understand symptoms",
      "Checks for physical causes that can affect mood and energy",
    ],
    patientPathway: {
      variant: "cards",
      intro:
        "Reaching out is a strength. These are gentle starting points — they complement, and never replace, professional or trusted support.",
      steps: [
        {
          title: "I have been feeling low or hopeless",
          description:
            "Low mood that lasts can be depression — common and treatable. Learn what it is and how support helps.",
          href: "/conditions/depression",
        },
        {
          title: "I feel anxious or worried a lot",
          description:
            "Persistent worry or restlessness may be anxiety. Learn what helps, and where to find support.",
          href: "/conditions/anxiety",
        },
        {
          title: "I am not sure if I need support",
          description:
            "If you are wondering whether to reach out, this guide can help you decide and find a first step.",
          href: "/conditions/when-to-seek-mental-health-support",
        },
        {
          title: "I want to support a loved one",
          description:
            "Families make a real difference. Compassionate, practical guidance for supporting someone is in preparation.",
          href: "/centres/mental-behavioural-health",
        },
        {
          title: "I want to prepare to see a professional",
          description:
            "Knowing what to ask can make a first appointment feel easier. A question guide is being prepared for review.",
          href: "/centres/mental-behavioural-health",
        },
        {
          title: "I feel unsafe right now",
          description:
            "If you feel unsafe or in crisis, you deserve support now. Reach out to a professional or trusted person, or go to the nearest facility.",
          href: "/conditions/when-to-seek-mental-health-support#urgent",
        },
      ],
    },
    nigerianContext: [
      "Stigma still surrounds mental health in many communities, which can delay people seeking help. Clear, calm information is part of changing that.",
      "Access to mental health services is uneven across the country; primary-care clinicians and general hospitals are often a practical first point of contact.",
      "Faith, family and community are important sources of support, and work best alongside — not instead of — qualified professional care.",
      "Talking about mental health openly and without judgement helps people reach support sooner, and reminds them they are not alone.",
    ],
    relatedCentres: ["maternal-health", "preventive-health", "diabetes-metabolic-health"],
    institutionalAngle:
      "The Mental & Behavioural Health Centre can help clinics, schools and NGOs present mental-health information calmly and without stigma, encouraging people toward qualified care.",
    institutionalServices: [
      "Stigma-free mental health education",
      "Support-pathway information resources",
      "Family-education materials",
      "Awareness campaign pages",
      "Clinic and counselling microsites",
      "Community outreach communication",
      "Workplace wellbeing resources",
    ],
  },

  // ── Preventive Health ─────────────────────────────────────────────────────
  {
    slug: "preventive-health",
    title: "Preventive Health Centre",
    categoryLabel: "Screening & Protection",
    description:
      "Screening, vaccines, malaria prevention, healthy habits, and early detection.",
    iconSlug: "shield",
    emergencyGuide: {
      label: "When a fever or symptom is urgent",
      href: "/conditions/malaria#urgent",
    },
    featuredGuideSlugs: [
      "malaria",
      "malaria-prevention",
      "blood-pressure-screening",
      "diabetes-screening",
      "cancer-screening-basics",
      "immunisation",
      "healthy-weight",
      "nutrition-basics",
      "exercise-heart-health",
      "annual-health-check",
    ],
    symptoms: [
      "Prevention is about acting before symptoms appear",
      "Knowing your numbers: blood pressure, blood sugar and weight",
      "Recognising early changes that are worth checking with a clinician",
    ],
    warningSigns: [
      "A new symptom that persists or worsens despite simple measures",
      "Fever that is high, prolonged, or with danger signs (see Malaria)",
      "Any sudden, severe or one-sided symptom — seek urgent care",
    ],
    tests: [
      "Blood pressure screening",
      "Blood sugar and cholesterol checks",
      "Malaria testing before treatment",
      "Age- and risk-appropriate cancer screening as advised by a clinician",
      "Immunisation review across the lifespan",
    ],
    patientPathway: {
      variant: "cards",
      intro:
        "Prevention works best as a habit. Choose where to start — these are everyday steps, not a diagnosis.",
      steps: [
        {
          title: "I want to prevent malaria",
          description:
            "Simple measures — treated nets, environment and protecting children and pregnancy — lower malaria risk.",
          href: "/conditions/malaria-prevention",
        },
        {
          title: "I want a yearly health check",
          description:
            "A practical guide to the numbers worth knowing and the questions worth asking at an annual check.",
          href: "/conditions/annual-health-check",
        },
        {
          title: "I want my blood pressure screened",
          description:
            "A quick, painless check can reveal a silent risk. Learn what the numbers mean and what to do next.",
          href: "/conditions/blood-pressure-check",
        },
        {
          title: "I want to know about screening",
          description:
            "Screening looks for problems before symptoms appear. Learn which checks are commonly offered and why.",
          href: "/centres/preventive-health",
        },
        {
          title: "I want healthier everyday habits",
          description:
            "Balanced eating, regular movement and a healthy weight lower risk across many conditions.",
          href: "/centres/preventive-health",
        },
        {
          title: "I have a fever or new symptom",
          description:
            "Test before treating where possible. A high or prolonged fever with danger signs needs urgent care.",
          href: "/conditions/malaria#urgent",
        },
      ],
    },
    nigerianContext: [
      "Malaria remains one of Nigeria’s heaviest health burdens; testing before treatment and sleeping under treated nets are simple, effective measures.",
      "Self-medication and buying drugs over the counter for any symptom are common, and can mask serious illness or fuel resistance. A test first is safer.",
      "Free or subsidised screening, nets and vaccines are offered through many clinics and campaigns — ask at your nearest facility.",
      "Building simple checks into ordinary life — knowing your numbers — catches problems early, when they are cheaper and easier to treat.",
    ],
    relatedCentres: ["heart-blood-pressure", "diabetes-metabolic-health", "maternal-health"],
    institutionalAngle:
      "The Preventive Health Centre can design screening and prevention campaigns for hospitals, NGOs, schools and companies — accurate, responsible, and built to reach communities clearly.",
    institutionalServices: [
      "Screening and early-detection campaigns",
      "Malaria prevention communication",
      "Immunisation awareness pages",
      "Corporate and school health programmes",
      "Patient education libraries",
      "Community health outreach",
      "Preventive health strategy",
    ],
  },
];

// ── Helpers ──────────────────────────────────────────────────────────────────

export function getCentreBySlug(slug: string): Centre | undefined {
  return centres.find((c) => c.slug === slug);
}

export function getCentreSlugs(): string[] {
  return centres.map((c) => c.slug);
}

export function getRelatedCentres(slugs: string[]): Centre[] {
  return slugs
    .map((s) => getCentreBySlug(s))
    .filter((c): c is Centre => Boolean(c));
}
