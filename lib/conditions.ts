// lib/conditions.ts
// Sample clinical content. In production these records would be served from a
// CMS or database; the rendering layer never changes — only the data grows.
//
// NOTE: Reviewer names and review dates below are PLACEHOLDERS for demonstration.
// Real publication requires sign-off under the Institute's Medical Review Policy.

import type { HealthArticle } from "./types";

export const conditions: HealthArticle[] = [
  // ─────────────────────────────────────────────────────────── HYPERTENSION
  {
    slug: "hypertension",
    title: "Hypertension (High Blood Pressure)",
    category: "condition",
    specialtyCentre: "heart-blood-pressure",
    summary:
      "Persistently raised blood pressure. Usually silent, and a leading cause of stroke, heart failure and kidney disease in Nigeria.",
    metaDescription:
      "Plain-language guide to hypertension (high blood pressure) for Nigerian patients: symptoms, diagnosis, treatment, prevention and when care is urgent.",
    readingTimeMinutes: 9,
    urgency: "see-doctor",
    overview: [
      "Hypertension means the pressure of blood against the walls of your arteries stays high over time. Blood pressure is written as two numbers — the higher (systolic) over the lower (diastolic), measured in mmHg. Most guidelines describe a reading of 140/90 mmHg or above, confirmed on more than one occasion, as raised.",
      "It is often called a “silent” condition because most people feel completely well for years while the pressure quietly strains the heart, brain, kidneys and eyes. This is why it is frequently discovered late — sometimes only after a stroke or heart problem has already occurred.",
      "Hypertension is common and very treatable. With accurate measurement, lifestyle change and, where needed, medication taken consistently, the risk of serious complications falls substantially.",
    ],
    symptoms: {
      common: [
        "Usually no symptoms at all — most people feel normal",
        "Occasional headaches, especially at the back of the head in the morning",
        "Dizziness or a feeling of unsteadiness",
        "Tiredness or difficulty concentrating",
      ],
      warning: [
        "Severe headache with blurred or disturbed vision",
        "Chest pain, breathlessness or palpitations",
        "Weakness or numbness on one side of the body, or difficulty speaking",
        "Nosebleeds that are heavy or repeated alongside a very high reading",
      ],
    },
    causes: [
      "In most people there is no single cause; this is called primary (essential) hypertension and develops gradually with age and lifestyle.",
      "Secondary hypertension is caused by another condition — for example kidney disease, hormonal disorders, or certain medications — and may be reversible if the cause is treated.",
      "High salt intake, excess weight, low physical activity, heavy alcohol use and chronic stress all raise the risk.",
    ],
    riskFactors: [
      "Family history of high blood pressure",
      "Age above 40 (risk rises with age)",
      "Diets high in salt and processed or packaged foods",
      "Overweight and obesity",
      "Physical inactivity",
      "Excess alcohol and tobacco use",
      "Diabetes and chronic kidney disease",
    ],
    diagnosis: [
      "Hypertension is diagnosed by measuring blood pressure correctly on at least two separate occasions, not from a single reading.",
      "Your clinician may recommend home or 24-hour monitoring to rule out anxiety-related (“white coat”) readings.",
      "Further tests — urine analysis, blood sugar, kidney function, cholesterol and an ECG — check for causes and for early organ damage.",
    ],
    treatment: {
      lifestyle: [
        "Reduce salt: cook with less, avoid adding salt at the table, and limit seasoning cubes, dried fish and processed meats",
        "Reach and keep a healthy weight",
        "Be active most days — brisk walking counts",
        "Limit alcohol and stop smoking",
        "Eat more vegetables, fruit, beans and whole grains",
      ],
      medical: [
        "Several safe, affordable medicine groups are used — often a water tablet (diuretic), a calcium-channel blocker, or an ACE inhibitor/ARB.",
        "Many people need more than one medicine to reach target; this is normal and not a sign of failure.",
        "Medication usually continues long term. Blood pressure returns when tablets are stopped, so they should not be stopped without medical advice — even when you feel well.",
      ],
    },
    prevention: [
      "Have your blood pressure checked at least yearly from age 18, and more often if you have risk factors",
      "Keep salt intake low and maintain a healthy weight",
      "Stay physically active and manage stress",
      "Limit alcohol and avoid tobacco",
    ],
    complications: [
      "Stroke and transient ischaemic attack",
      "Heart failure and heart attack",
      "Chronic kidney disease and kidney failure",
      "Damage to the eyes and loss of vision",
    ],
    urgentCare: [
      "A blood pressure reading at or above 180/120 mmHg with chest pain, breathlessness, severe headache, vision change, confusion, or weakness on one side of the body is a medical emergency — seek care immediately.",
      "Sudden face drooping, arm weakness or slurred speech may be a stroke — act without delay (see the Stroke guide).",
    ],
    nigerianContext: [
      "Hypertension is widespread in Nigeria but often diagnosed late, because many people only check their blood pressure when they already feel unwell.",
      "Treatment is sometimes stopped once a person “feels fine” or when money is tight, which allows pressure and risk to return silently. Consistency matters more than any single reading.",
      "Self-medication and unverified herbal “blood pressure cures” are common and can be harmful. Use medicines prescribed and monitored by a qualified professional.",
      "Affordable, validated home blood pressure monitors and generic medicines are increasingly available; ask your pharmacist or clinic for guidance on reliable options.",
    ],
    questionsForDoctor: [
      "What is my target blood pressure, and what were my last readings?",
      "Do my results suggest any damage to my heart, kidneys or eyes?",
      "Which lifestyle change would make the biggest difference for me?",
      "What are the names and timings of my medicines, and what side effects should I watch for?",
      "How often should I check my blood pressure at home?",
    ],
    faqs: [
      {
        question: "Can hypertension be cured?",
        answer:
          "Primary hypertension is usually controlled rather than cured. With consistent treatment and lifestyle change it can be kept in a safe range for life. Some secondary causes can be corrected.",
      },
      {
        question: "If I feel fine, can I stop my tablets?",
        answer:
          "No. Feeling well does not mean your blood pressure is normal — that is exactly why it is dangerous. Speak to your clinician before changing any medication.",
      },
      {
        question: "Is high blood pressure caused by stress alone?",
        answer:
          "Stress can raise blood pressure temporarily and contribute over time, but it is rarely the only cause. Genetics, diet, weight and age usually play a larger role.",
      },
    ],
    sources: [
      { label: "Hypertension fact sheet", publisher: "World Health Organization", year: 2023, url: "https://www.who.int/news-room/fact-sheets/detail/hypertension" },
      { label: "Global guidelines on the management of hypertension", publisher: "International Society of Hypertension", year: 2020 },
      { label: "National guidelines on non-communicable disease prevention and control", publisher: "Federal Ministry of Health, Nigeria" },
    ],
    quickFacts: [
      "Often called the “silent killer” — usually no symptoms for years",
      "Diagnosed as readings of 140/90 mmHg or higher on more than one occasion",
      "A leading cause of stroke, heart failure and kidney disease in Nigeria",
      "Controllable with consistent lifestyle change and, where needed, medication",
      "Treatment is usually lifelong — pressure returns if medicines are stopped",
    ],
    whatToDoNext: {
      mild: "If you feel well but have one raised reading, do not panic. Have it rechecked properly on another day and book a clinic review rather than reacting to a single number.",
      worsening: "If readings keep climbing, or you develop morning headaches, breathlessness or chest discomfort, see a clinician promptly rather than waiting for a scheduled visit.",
      higherRisk: "If you are pregnant, elderly, diabetic, or have kidney or heart disease, raised blood pressure needs closer attention — arrange a review sooner.",
      atClinic: "Ask for your exact numbers and target, whether there is any organ damage, and the names, doses and timings of any medicines.",
      doNotDelay: "Do not delay care for a reading of 180/120 mmHg or above, or any chest pain, severe headache, vision change, confusion or one-sided weakness — treat these as an emergency.",
    },
    reviewer: { name: "Dr. A. Okonkwo (placeholder)", credentials: "MBBS, FWACP", specialty: "Internal Medicine / Cardiology" },
    lastReviewed: "2026-04-12",
    nextReview: "2027-04-12",
  },

  // ───────────────────────────────────────────────────────────────── DIABETES
  {
    slug: "diabetes",
    title: "Diabetes (Type 2)",
    category: "condition",
    specialtyCentre: "diabetes-metabolic",
    summary:
      "A long-term condition where blood sugar stays too high. Manageable with the right care, but a serious cause of complications when left unchecked.",
    metaDescription:
      "Nigerian patient guide to type 2 diabetes: symptoms, causes, diagnosis, treatment, prevention, complications and when to seek urgent care.",
    readingTimeMinutes: 10,
    urgency: "see-doctor",
    overview: [
      "Diabetes is a condition where the level of sugar (glucose) in the blood is too high. In type 2 diabetes — the most common form — the body either does not respond well to insulin or does not make enough of it. Insulin is the hormone that moves sugar from the blood into the cells for energy.",
      "Type 1 diabetes, in which the body makes little or no insulin, usually begins earlier in life and always requires insulin. Diabetes that appears in pregnancy is called gestational diabetes. This guide focuses on type 2.",
      "High blood sugar over many years damages blood vessels and nerves. The good news is that with monitoring, healthy habits and, where needed, medication, most people with type 2 diabetes live full and active lives.",
    ],
    symptoms: {
      common: [
        "Passing urine more often, especially at night",
        "Feeling very thirsty",
        "Tiredness and low energy",
        "Unexplained weight loss",
        "Slow-healing cuts, or repeated infections such as boils or thrush",
        "Blurred vision",
      ],
      warning: [
        "Very high thirst with drowsiness, confusion or rapid breathing",
        "Severe weakness, vomiting and abdominal pain",
        "Fruity-smelling breath (a sign of a dangerous complication)",
      ],
    },
    causes: [
      "Type 2 diabetes develops when the body becomes resistant to insulin and the pancreas cannot keep up. Genetics, weight and lifestyle all contribute.",
      "It usually develops gradually, often over years, which is why many people have it before they are diagnosed.",
    ],
    riskFactors: [
      "Family history of diabetes",
      "Overweight and abdominal (belly) fat",
      "Physical inactivity",
      "Diets high in sugar, refined starches and sweetened drinks",
      "Age above 40",
      "High blood pressure or raised cholesterol",
      "A history of gestational diabetes or a large baby at birth",
    ],
    diagnosis: [
      "Diabetes is diagnosed with blood tests — fasting blood glucose, a glucose tolerance test, or HbA1c (which reflects average sugar over about three months).",
      "Because early diabetes is often silent, screening is recommended for people with risk factors even when they feel well.",
      "At diagnosis your clinician also checks blood pressure, cholesterol, kidneys, eyes and feet to find or prevent early complications.",
    ],
    treatment: {
      lifestyle: [
        "Eat regular, balanced meals; reduce sugary drinks, refined starch and large portions",
        "Choose more vegetables, beans, whole grains and fruit in moderation",
        "Be active most days — even regular brisk walking improves blood sugar",
        "Reach and keep a healthier weight",
        "Stop smoking and limit alcohol",
      ],
      medical: [
        "Metformin is usually the first medicine and is affordable and widely available.",
        "Other tablets or injectables may be added depending on blood sugar and other conditions.",
        "Some people eventually need insulin — this is a normal part of treatment, not a personal failure.",
        "Regular monitoring of blood sugar, HbA1c, blood pressure, eyes, kidneys and feet is essential.",
      ],
    },
    prevention: [
      "Maintain a healthy weight and stay active",
      "Limit sugary drinks, sweets and refined starches",
      "Get screened if you have a family history or other risk factors",
      "Treat high blood pressure and cholesterol",
    ],
    complications: [
      "Damage to the eyes, which can lead to blindness if untreated",
      "Kidney disease and kidney failure",
      "Nerve damage and foot ulcers, which can lead to amputation",
      "Heart disease and stroke",
    ],
    urgentCare: [
      "Confusion, drowsiness, rapid breathing, persistent vomiting or fruity-smelling breath may signal a dangerous rise in blood sugar (diabetic ketoacidosis or hyperosmolar state) — seek emergency care now.",
      "Shakiness, sweating, confusion or fainting may signal low blood sugar (hypoglycaemia). If the person can swallow, give sugar or a sweet drink and seek help; if they cannot, get emergency care immediately.",
    ],
    nigerianContext: [
      "Diabetes is rising quickly in Nigeria, driven partly by changing diets and urban lifestyles. Many cases are found late, after complications have begun.",
      "The day-to-day cost of test strips, medicines and clinic visits can be a barrier. Ask your clinic about affordable generics, structured monitoring schedules and whether group or facility programmes are available.",
      "Sweetened drinks, large servings of refined starch and frequent snacking on sugary foods are common dietary patterns worth reviewing with a professional.",
      "Be cautious of herbal “sugar cures” and stopping prescribed medicines based on a single good reading. Foot care is especially important where walking barefoot is common.",
    ],
    questionsForDoctor: [
      "What were my blood sugar and HbA1c results, and what is my target?",
      "Which foods should I reduce first, and is there a realistic plan for me?",
      "How and when should I check my blood sugar at home?",
      "What are the signs of high and low blood sugar I should act on?",
      "How often will my eyes, kidneys and feet be checked?",
    ],
    faqs: [
      {
        question: "Is type 2 diabetes reversible?",
        answer:
          "In some people, especially early on, significant weight loss and lifestyle change can bring blood sugar back into the normal range (remission). This is not guaranteed and should be managed with your clinician — never by stopping medicines on your own.",
      },
      {
        question: "Can I eat any fruit?",
        answer:
          "Most fruits are fine in moderate portions. Very sweet fruits and fruit juices raise blood sugar quickly, so whole fruit in measured amounts is preferred.",
      },
      {
        question: "Does diabetes always need insulin?",
        answer:
          "No. Many people with type 2 diabetes manage with lifestyle and tablets. Insulin is used when these are not enough, and it is a safe, effective treatment.",
      },
    ],
    sources: [
      { label: "Diabetes fact sheet", publisher: "World Health Organization", year: 2023, url: "https://www.who.int/news-room/fact-sheets/detail/diabetes" },
      { label: "IDF Diabetes Atlas", publisher: "International Diabetes Federation", year: 2021 },
      { label: "National guidelines for the management of diabetes", publisher: "Federal Ministry of Health, Nigeria" },
    ],
    quickFacts: [
      "Raised blood sugar caused by problems making or using insulin",
      "Type 2 is most common and often develops silently over years",
      "Diagnosed with fasting glucose or HbA1c blood tests",
      "Good control greatly lowers the risk of long-term complications",
      "Can affect the eyes, kidneys, nerves, heart and feet if uncontrolled",
    ],
    whatToDoNext: {
      mild: "If you have mild symptoms or a borderline result, arrange a proper blood test and clinic review rather than self-treating or ignoring it.",
      worsening: "If you have increasing thirst, frequent urination, weight loss, blurred vision or recurring infections, see a clinician promptly.",
      higherRisk: "If you are pregnant, elderly, or already have heart, kidney or eye problems, blood sugar needs closer monitoring — seek review sooner.",
      atClinic: "Ask about your HbA1c and target, how to monitor at home, your foot and eye checks, and the names and timing of any medicines.",
      doNotDelay: "Do not delay care for drowsiness, confusion, very deep or rapid breathing, fruity-smelling breath, or persistent vomiting — these can signal a dangerous emergency.",
    },
    reviewer: { name: "Dr. C. Bello (placeholder)", credentials: "MBBS, FMCP", specialty: "Endocrinology" },
    lastReviewed: "2026-03-28",
    nextReview: "2027-03-28",
  },

  // ───────────────────────────────────────────────────────────────── MALARIA
  {
    slug: "malaria",
    title: "Malaria",
    category: "condition",
    specialtyCentre: "preventive-health",
    summary:
      "A common, treatable but potentially severe infection spread by mosquitoes. Fast diagnosis and the right treatment prevent serious illness.",
    metaDescription:
      "Nigerian guide to malaria: symptoms, how it is diagnosed and treated, prevention, danger signs of severe malaria, and when to seek urgent care.",
    readingTimeMinutes: 8,
    urgency: "see-doctor",
    overview: [
      "Malaria is an infection caused by Plasmodium parasites, spread to people through the bite of an infected female Anopheles mosquito. In Nigeria the most dangerous type, Plasmodium falciparum, is the most common.",
      "Most malaria is uncomplicated and treats well when caught early. But it can progress to severe, life-threatening illness — particularly in young children, pregnant women and people with weakened immunity — sometimes within a day or two.",
      "Because fever has many causes, malaria should be confirmed by a test before treatment wherever possible, rather than treated on guesswork.",
    ],
    symptoms: {
      common: [
        "Fever, sometimes with chills and sweating",
        "Headache and body or joint aches",
        "Tiredness and weakness",
        "Loss of appetite, nausea or vomiting",
        "Sometimes diarrhoea or abdominal discomfort",
      ],
      warning: [
        "Drowsiness, confusion, or difficulty waking (especially in children)",
        "Repeated vomiting and inability to keep fluids down",
        "Difficulty breathing or very fast breathing",
        "Convulsions (fits)",
        "Very dark or reduced urine, or yellowing of the eyes",
      ],
    },
    causes: [
      "Malaria is caused by Plasmodium parasites transmitted through mosquito bites, most often between dusk and dawn.",
      "It is not spread from person to person by ordinary contact.",
    ],
    riskFactors: [
      "Living in or travelling to areas with high mosquito transmission",
      "Not sleeping under an insecticide-treated net",
      "Pregnancy (greater risk of severe illness)",
      "Young age (children under five are especially vulnerable)",
      "Weakened immunity",
    ],
    diagnosis: [
      "Malaria is confirmed with a rapid diagnostic test (RDT) or by examining blood under a microscope.",
      "Testing matters because treating every fever as malaria delays the correct diagnosis of other illnesses such as typhoid, urinary infection or, in some cases, more serious conditions.",
    ],
    treatment: {
      lifestyle: [
        "Rest and drink fluids to stay hydrated",
        "Use paracetamol for fever and aches as advised",
        "Return for review if you do not improve within 48 hours",
      ],
      medical: [
        "Uncomplicated malaria is treated with artemisinin-based combination therapy (ACT). Complete the full course even after you feel better.",
        "Severe malaria requires injectable treatment and admission to hospital without delay.",
        "Use medicines from registered pharmacies; avoid incomplete or substandard courses, which fuel drug resistance.",
      ],
    },
    prevention: [
      "Sleep under an insecticide-treated mosquito net every night",
      "Use repellents and wear covering clothing in the evening",
      "Reduce mosquito breeding by clearing stagnant water around the home",
      "Pregnant women should attend antenatal care for preventive treatment (IPTp) as recommended",
      "Consider indoor residual spraying where available",
    ],
    complications: [
      "Severe anaemia, especially in children",
      "Cerebral malaria (affecting the brain), with confusion or coma",
      "Breathing and kidney complications",
      "Low blood sugar, particularly in children and pregnancy",
      "Miscarriage, low birth weight or stillbirth in pregnancy",
    ],
    urgentCare: [
      "Seek emergency care immediately for any danger sign: drowsiness or confusion, convulsions, repeated vomiting, difficulty breathing, very dark urine, or a child who is unusually weak or will not feed.",
      "Fever in a pregnant woman or a child under five should always be assessed promptly — do not wait.",
    ],
    nigerianContext: [
      "Nigeria carries one of the highest malaria burdens in the world, and the illness is a leading reason for clinic visits and childhood deaths.",
      "Self-diagnosing and buying antimalarials over the counter for any fever is extremely common. This can mask other serious illnesses and contributes to drug resistance — a test first is safer.",
      "Pharmacy and patent-medicine shops are often the first and only stop. They have a role, but a confirmed test and a complete, genuine course matter more than a quick sale.",
      "Late care-seeking is a major cause of severe malaria and death: families often wait, try home remedies, or change shops before reaching a clinic. With danger signs, hours count.",
      "Incomplete treatment courses, taken until symptoms ease and then stopped, are a frequent problem. Always finish the full course.",
      "Mosquito exposure is highest around dusk and through the night, and around stagnant water. Nightly net use and clearing breeding sites protect the whole household.",
      "Children under five and pregnant women are most at risk of severe illness and need prompt, in-person assessment for any fever — not home treatment.",
      "Free or subsidised insecticide-treated nets are distributed through many clinics and campaigns; ask at your nearest facility.",
    ],
    questionsForDoctor: [
      "Was my malaria confirmed by a test, and which type?",
      "What is the exact medicine, dose and number of days?",
      "What danger signs should bring me back urgently?",
      "How can I best protect my household and, if pregnant, my baby?",
    ],
    faqs: [
      {
        question: "Is every fever malaria?",
        answer:
          "No. Many illnesses cause fever. Treating all fevers as malaria can delay the right diagnosis. A simple test confirms whether malaria is present.",
      },
      {
        question: "Can I stop the medicine once I feel better?",
        answer:
          "No. Stopping early can leave parasites in the body, cause the illness to return and encourage resistance. Always complete the full course.",
      },
      {
        question: "Do mosquito nets really help?",
        answer:
          "Yes. Sleeping under an insecticide-treated net every night is one of the most effective and affordable ways to prevent malaria.",
      },
    ],
    sources: [
      { label: "Malaria fact sheet", publisher: "World Health Organization", year: 2023, url: "https://www.who.int/news-room/fact-sheets/detail/malaria" },
      { label: "National guidelines for diagnosis and treatment of malaria", publisher: "National Malaria Elimination Programme, Nigeria" },
      { label: "World Malaria Report", publisher: "World Health Organization", year: 2023 },
    ],
    quickFacts: [
      "Caused by Plasmodium parasites spread by night-biting mosquitoes",
      "Confirm with a rapid test (RDT) or blood film before treating where possible",
      "Treated with a full course of ACT — never stop early, even when you feel better",
      "Children under five and pregnant women are at highest risk of severe illness",
      "Most fevers are not malaria — testing avoids missing other illnesses",
      "Prevented effectively by sleeping under an insecticide-treated net nightly",
    ],
    whatToDoNext: {
      mild: "For a mild fever, get a malaria test before buying antimalarials. If it is positive, take the full ACT course exactly as prescribed, and rest with plenty of fluids.",
      worsening: "If fever persists beyond 48 hours of treatment, or new symptoms appear, return for review — do not simply buy another course over the counter.",
      higherRisk: "Fever in a child under five, a pregnant woman, an elderly person, or anyone with another illness should be assessed in person the same day, not managed at home.",
      atClinic: "Ask whether malaria was confirmed by a test, the exact medicine and number of days, the danger signs to return for, and how to protect your household.",
      doNotDelay: "Do not delay for any danger sign — drowsiness, confusion, convulsions, repeated vomiting, difficulty breathing or very dark urine mean severe malaria and need emergency care.",
    },
    reviewer: { name: "Dr. F. Adeyemi (placeholder)", credentials: "MBBS, MPH", specialty: "Public Health / Infectious Disease" },
    lastReviewed: "2026-05-02",
    nextReview: "2027-05-02",
  },

  // ─────────────────────────────────────────────────────────────────── STROKE
  {
    slug: "stroke",
    title: "Stroke",
    category: "condition",
    specialtyCentre: "heart-blood-pressure",
    summary:
      "A medical emergency where blood flow to part of the brain is cut off. Every minute counts — recognising it fast saves lives and abilities.",
    metaDescription:
      "Recognise stroke fast using FACE-ARM-SPEECH-TIME. Nigerian guide to stroke symptoms, causes, urgent action, treatment, recovery and prevention.",
    readingTimeMinutes: 8,
    urgency: "emergency",
    overview: [
      "A stroke happens when the blood supply to part of the brain is interrupted, so brain cells are starved of oxygen and begin to die. It is a medical emergency.",
      "Most strokes are ischaemic, caused by a clot blocking a blood vessel. Others are haemorrhagic, caused by bleeding in or around the brain. A brief, warning-type episode with symptoms that resolve is a transient ischaemic attack (TIA) — it must still be treated as an emergency.",
      "The single most important message is speed. The faster a person reaches hospital, the more brain can be saved and the better the chance of recovery.",
    ],
    symptoms: {
      common: [
        "Sudden weakness or numbness of the face, arm or leg — usually on one side",
        "Sudden difficulty speaking or understanding speech",
        "Sudden confusion",
        "Sudden trouble seeing in one or both eyes",
        "Sudden severe headache with no known cause",
        "Sudden difficulty walking, dizziness or loss of balance",
      ],
      warning: [
        "Face drooping on one side",
        "Arm or leg weakness on one side",
        "Slurred or jumbled speech",
        "Any of the above appearing suddenly — even briefly",
      ],
    },
    causes: [
      "Ischaemic stroke is caused by a clot blocking blood flow to the brain.",
      "Haemorrhagic stroke is caused by a blood vessel bursting and bleeding into or around the brain, often linked to very high blood pressure.",
      "Uncontrolled high blood pressure is the leading risk factor for both.",
    ],
    riskFactors: [
      "High blood pressure (the most important risk factor)",
      "Diabetes",
      "Smoking and heavy alcohol use",
      "Irregular heartbeat (atrial fibrillation)",
      "High cholesterol and heart disease",
      "Previous stroke or TIA",
      "Sickle cell disease",
    ],
    diagnosis: [
      "Stroke is diagnosed urgently in hospital using a brain scan (usually a CT scan) to tell whether it is a clot or a bleed — because the treatments are very different.",
      "Blood tests, blood pressure, heart rhythm checks and other scans help find the cause.",
    ],
    treatment: {
      lifestyle: [
        "After a stroke, rehabilitation — physiotherapy, speech and occupational therapy — supports recovery",
        "Controlling blood pressure, diabetes and other risks prevents another stroke",
      ],
      medical: [
        "Clot-type (ischaemic) strokes may be treated with clot-busting medicine or clot-removal procedures — but only within a limited time window, which is why arriving early is critical.",
        "Bleeding (haemorrhagic) strokes need different management, sometimes surgery.",
        "Long-term treatment usually includes medicines to lower the risk of another stroke.",
      ],
    },
    prevention: [
      "Control blood pressure — this is the most powerful prevention",
      "Manage diabetes and cholesterol",
      "Stop smoking and limit alcohol",
      "Stay active and maintain a healthy weight",
      "Take prescribed medicines for heart rhythm problems or previous stroke",
    ],
    complications: [
      "Weakness or paralysis, often on one side",
      "Difficulty with speech, swallowing or vision",
      "Memory, thinking and emotional changes",
      "Disability requiring ongoing support and rehabilitation",
    ],
    urgentCare: [
      "Use FAST. FACE — has it drooped on one side? ARM — can both arms be raised and held? SPEECH — is it slurred or jumbled? TIME — if you see any of these signs, it is time to get to hospital immediately.",
      "Do not wait to see if symptoms pass, do not give food or drink, and do not treat at home. Go to the nearest hospital with emergency and scanning capacity straight away.",
    ],
    nigerianContext: [
      "Stroke is a major cause of death and long-term disability in Nigeria, strongly linked to undiagnosed and poorly controlled high blood pressure.",
      "Many people reach hospital too late for the most effective treatments, sometimes after first seeking care from non-medical sources. Knowing FAST and acting at once changes outcomes.",
      "Access to brain scans and stroke-ready hospitals varies by location. Knowing in advance which nearby facility can handle emergencies and scanning is valuable for every family.",
      "Controlling blood pressure is the most effective and affordable way to prevent stroke — check it regularly and treat it consistently.",
    ],
    questionsForDoctor: [
      "Was my stroke caused by a clot or a bleed?",
      "What is my blood pressure target, and which medicines prevent another stroke?",
      "What rehabilitation is available to me, and how do I access it?",
      "What warning signs mean I should call for emergency help again?",
    ],
    faqs: [
      {
        question: "What does FAST mean?",
        answer:
          "Face drooping, Arm weakness, Speech difficulty, Time to get to hospital. It is a simple way to recognise a stroke and act fast.",
      },
      {
        question: "The symptoms went away — is it still serious?",
        answer:
          "Yes. Symptoms that resolve may be a transient ischaemic attack, a strong warning of a future stroke. It needs urgent medical assessment.",
      },
      {
        question: "Can young people have a stroke?",
        answer:
          "Yes. Although risk rises with age, stroke can occur at any age, including in people with sickle cell disease, very high blood pressure or heart conditions.",
      },
    ],
    sources: [
      { label: "Stroke / cardiovascular disease information", publisher: "World Health Organization", year: 2023, url: "https://www.who.int/health-topics/cardiovascular-diseases" },
      { label: "World Stroke Organization public guidance", publisher: "World Stroke Organization" },
      { label: "National guidelines on non-communicable disease control", publisher: "Federal Ministry of Health, Nigeria" },
    ],
    quickFacts: [
      "Happens when blood flow to part of the brain is suddenly cut off",
      "A medical emergency — every minute of delay costs brain tissue",
      "Remember F.A.S.T.: Face, Arms, Speech, Time to call for help",
      "Often follows years of untreated high blood pressure",
      "Fast treatment can save life and reduce lasting disability",
    ],
    whatToDoNext: {
      mild: "Even if symptoms are mild or pass within minutes, a “mini-stroke” (TIA) is a serious warning — seek urgent assessment the same day to prevent a major stroke.",
      worsening: "Sudden weakness, facial drooping, speech difficulty, or a severe unexplained headache is never something to watch at home — act immediately.",
      higherRisk: "If the person is elderly, or has high blood pressure, diabetes or a previous stroke, the threshold for calling for emergency help should be even lower.",
      atClinic: "Ask what caused the stroke, how to prevent another, which medicines are needed, and what rehabilitation and follow-up are planned.",
      doNotDelay: "Do not delay for any sign of stroke — get the person to hospital immediately. Time lost is brain lost.",
    },
    reviewer: { name: "Dr. I. Musa (placeholder)", credentials: "MBBS, FMCP", specialty: "Neurology" },
    lastReviewed: "2026-04-20",
    nextReview: "2027-04-20",
  },

  // ───────────────────────────────────────────────────────── KIDNEY DISEASE
  {
    slug: "kidney-disease",
    title: "Chronic Kidney Disease",
    category: "condition",
    specialtyCentre: "kidney-health",
    summary:
      "Gradual loss of kidney function, often silent for years. Linked closely to high blood pressure and diabetes, and preventable when caught early.",
    metaDescription:
      "Nigerian patient guide to chronic kidney disease: causes, symptoms, diagnosis, treatment, prevention, complications and when care is urgent.",
    readingTimeMinutes: 9,
    urgency: "see-doctor",
    overview: [
      "The kidneys filter waste and excess fluid from the blood, balance salts, support healthy blood pressure and help produce red blood cells. Chronic kidney disease (CKD) means the kidneys are gradually losing this ability over months or years.",
      "Early CKD usually causes no symptoms, so it is often discovered through routine tests or while managing another condition such as diabetes or high blood pressure. Detected early, its progression can often be slowed.",
      "When kidney function falls very low (kidney failure), treatment such as dialysis or a transplant may become necessary — which is why prevention and early detection matter so much.",
    ],
    symptoms: {
      common: [
        "Often none in the early stages",
        "Tiredness and reduced energy",
        "Swelling of the legs, ankles or face",
        "Changes in urination — more at night, foamy urine, or less than usual",
        "Poor appetite, nausea or difficulty sleeping",
        "Itchy skin",
      ],
      warning: [
        "Very little or no urine",
        "Severe breathlessness from fluid build-up",
        "Confusion or drowsiness",
        "Chest pain",
      ],
    },
    causes: [
      "Diabetes and high blood pressure are the two most common causes worldwide and in Nigeria.",
      "Other causes include certain kidney inflammations, repeated infections, obstruction (such as stones or an enlarged prostate), and inherited conditions.",
      "Long-term, unsupervised use of some painkillers and unverified herbal remedies can also harm the kidneys.",
    ],
    riskFactors: [
      "Diabetes",
      "High blood pressure",
      "Family history of kidney disease",
      "Older age",
      "Recurrent urinary infections or kidney stones",
      "Frequent use of certain painkillers or unverified herbal products",
      "Sickle cell disease",
    ],
    diagnosis: [
      "CKD is detected with simple tests: a blood test for creatinine (used to estimate filtration, the eGFR) and a urine test for protein or blood.",
      "Blood pressure, blood sugar and an ultrasound scan of the kidneys help find the cause and stage.",
      "Because early disease is silent, people with diabetes or high blood pressure should have their kidneys checked regularly.",
    ],
    treatment: {
      lifestyle: [
        "Control blood pressure and blood sugar tightly",
        "Reduce salt and follow any dietary advice from your clinician or dietitian",
        "Stay well hydrated unless told otherwise, and avoid unnecessary painkillers and unverified herbal products",
        "Stop smoking and maintain a healthy weight",
      ],
      medical: [
        "Treating the underlying cause — especially blood pressure and diabetes — is central to slowing CKD.",
        "Specific medicines can protect the kidneys and manage complications such as anaemia and bone changes.",
        "In advanced kidney failure, dialysis or kidney transplant replaces lost function. Early planning gives the best options.",
      ],
    },
    prevention: [
      "Keep blood pressure and blood sugar well controlled",
      "Have kidney function checked if you have diabetes, hypertension or a family history",
      "Avoid long-term, unsupervised use of painkillers and unverified herbal remedies",
      "Treat urinary infections promptly and stay hydrated",
    ],
    complications: [
      "High blood pressure that is harder to control",
      "Anaemia and weak bones",
      "Fluid overload and heart disease",
      "Kidney failure requiring dialysis or transplant",
    ],
    urgentCare: [
      "Seek emergency care for severe breathlessness, chest pain, confusion, passing very little or no urine, or severe swelling — these may signal dangerous fluid or waste build-up.",
      "Sudden, sharp falls in urine output with vomiting or drowsiness need prompt assessment.",
    ],
    nigerianContext: [
      "Kidney disease is increasingly common in Nigeria and is often found late, when function is already severely reduced.",
      "Dialysis is expensive and not evenly available, and transplant access is limited. This makes early detection and control of blood pressure and diabetes especially important — prevention is far more achievable than late treatment.",
      "Long-term use of over-the-counter painkillers and unregulated herbal mixtures is a recognised and avoidable cause of kidney harm. Use medicines under professional guidance.",
      "If you live with diabetes or high blood pressure, ask specifically for a kidney check (creatinine/eGFR and a urine test) — it is simple and may not be done unless requested.",
    ],
    questionsForDoctor: [
      "What is my eGFR and urine protein result, and what stage is my kidney function?",
      "What is the cause in my case, and how can we slow it down?",
      "Which medicines or substances should I avoid to protect my kidneys?",
      "What blood pressure and blood sugar targets should I aim for?",
      "What are the signs that my condition is worsening?",
    ],
    faqs: [
      {
        question: "Can kidney disease be reversed?",
        answer:
          "Established chronic kidney disease usually cannot be fully reversed, but its progression can often be slowed significantly — sometimes for many years — by controlling the cause and protecting the kidneys.",
      },
      {
        question: "Will I definitely need dialysis?",
        answer:
          "No. Many people with CKD never reach that stage, especially when it is found early and managed well. Dialysis is for advanced kidney failure.",
      },
      {
        question: "Are herbal remedies safe for the kidneys?",
        answer:
          "Many unverified herbal products can harm the kidneys, particularly with long-term use. Discuss anything you take with a qualified professional.",
      },
    ],
    sources: [
      { label: "Chronic kidney disease information", publisher: "World Health Organization", year: 2023 },
      { label: "KDIGO clinical practice guidance", publisher: "Kidney Disease: Improving Global Outcomes" },
      { label: "National guidelines on non-communicable disease control", publisher: "Federal Ministry of Health, Nigeria" },
    ],
    quickFacts: [
      "The kidneys filter waste and balance fluid, salts and blood pressure",
      "Chronic kidney disease often develops silently over years",
      "Most commonly driven by diabetes and high blood pressure",
      "Detected with simple blood (creatinine/eGFR) and urine tests",
      "Early detection can slow or prevent progression to kidney failure",
    ],
    whatToDoNext: {
      mild: "If a test shows early changes, do not ignore it — controlling blood pressure and blood sugar now is what protects your kidneys. Book a review.",
      worsening: "If you notice swelling, breathlessness, much less urine than usual, or persistent nausea, seek prompt medical review.",
      higherRisk: "If you have diabetes, high blood pressure, or a family history of kidney disease, ask to be screened regularly even when you feel completely well.",
      atClinic: "Ask about your eGFR and what stage it suggests, which medicines protect the kidneys, which to avoid, and how often to be retested.",
      doNotDelay: "Do not delay for breathlessness at rest, confusion, very little or no urine, or chest pain — these can signal dangerous kidney failure and need emergency care.",
    },
    reviewer: { name: "Dr. O. Eze (placeholder)", credentials: "MBBS, FWACP", specialty: "Nephrology" },
    lastReviewed: "2026-03-15",
    nextReview: "2027-03-15",
  },

  // ──────────────────────────────────────────────────── PREGNANCY DANGER SIGNS
  {
    slug: "pregnancy-danger-signs",
    title: "Pregnancy Danger Signs",
    category: "condition",
    specialtyCentre: "maternal-health",
    summary:
      "Warning signs in pregnancy that need urgent care. Knowing them — and acting fast — protects both mother and baby.",
    metaDescription:
      "Nigerian guide to pregnancy danger signs: bleeding, severe headache, convulsions, fever, reduced baby movement and more — and when to seek urgent care.",
    readingTimeMinutes: 7,
    urgency: "emergency",
    overview: [
      "Most pregnancies progress safely, but certain warning signs mean something may be seriously wrong and need urgent medical attention — sometimes within hours. Recognising them early can be the difference between a good outcome and a tragedy.",
      "This guide is for awareness and quick action. It does not replace antenatal care, where a midwife or doctor monitors the pregnancy, checks blood pressure, treats anaemia, and prepares for a safe birth.",
      "If you are unsure whether a symptom is serious, treat it as urgent and seek care. It is always better to be checked and reassured.",
    ],
    symptoms: {
      common: [
        "Some discomfort, mild swelling of the feet and tiredness can be normal in pregnancy",
        "Antenatal visits are the time to raise anything that worries you",
      ],
      warning: [
        "Vaginal bleeding at any stage of pregnancy",
        "Severe headache, or blurred or disturbed vision",
        "Convulsions (fits)",
        "Fever",
        "Severe abdominal (tummy) pain",
        "Reduced or absent baby movements",
        "Swelling of the face and hands",
        "Fluid leaking from the vagina before labour, or a foul-smelling discharge",
        "Difficulty breathing, fast heartbeat, or severe weakness",
      ],
    },
    causes: [
      "Danger signs can arise from conditions such as pre-eclampsia and eclampsia (linked to high blood pressure in pregnancy), bleeding from the placenta, infection, anaemia, or problems with the baby.",
      "Some develop suddenly even in a pregnancy that seemed to be going well, which is why awareness matters for everyone.",
    ],
    riskFactors: [
      "High blood pressure or diabetes before or during pregnancy",
      "Anaemia",
      "First pregnancy or pregnancy at an older age",
      "Previous pregnancy complications",
      "Carrying twins or more",
      "Infections, including untreated malaria",
    ],
    diagnosis: [
      "Danger signs are assessed urgently by a midwife or doctor, who checks blood pressure, the baby, and runs tests such as urine, blood and ultrasound as needed.",
      "Regular antenatal visits screen for many of these problems early — for example raised blood pressure or anaemia — before they become emergencies.",
    ],
    treatment: {
      lifestyle: [
        "Attend all antenatal appointments and take recommended supplements and malaria prevention",
        "Have a birth plan, including how and where you will get to a facility quickly",
        "Know the danger signs and share them with whoever supports you",
      ],
      medical: [
        "Treatment depends on the cause and is provided urgently in a health facility — for example managing high blood pressure, controlling bleeding, treating infection or delivering the baby when necessary.",
        "Pre-eclampsia, eclampsia and heavy bleeding are medical emergencies treated by skilled birth attendants.",
      ],
    },
    prevention: [
      "Attend antenatal care early and regularly",
      "Treat anaemia, high blood pressure and infections during pregnancy",
      "Use malaria prevention as advised in pregnancy",
      "Plan for a skilled birth attendant and rapid transport to a facility",
    ],
    complications: [
      "Eclampsia (seizures) and organ damage from severe pre-eclampsia",
      "Severe blood loss",
      "Serious infection",
      "Harm to the baby, including stillbirth, if danger signs are not acted on quickly",
    ],
    urgentCare: [
      "Go to a health facility immediately for any of these: vaginal bleeding, severe or persistent headache, blurred vision, convulsions, fever, severe abdominal pain, reduced or absent baby movements, swelling of the face and hands, or fluid/foul discharge leaking from the vagina.",
      "Do not wait for the next antenatal visit and do not rely on home remedies for these signs. If a woman is convulsing or bleeding heavily, this is a life-threatening emergency — get skilled help without delay.",
    ],
    nigerianContext: [
      "Nigeria has one of the highest rates of maternal death in the world, and many of these deaths are preventable with early recognition of danger signs and timely skilled care.",
      "Delays cost lives — delay in recognising a problem, delay in deciding to seek care, and delay in reaching a facility. Knowing the danger signs and planning transport in advance addresses the first two.",
      "Decisions in pregnancy are often shared across the family. It helps when partners, mothers and in-laws also know the danger signs, so care is not delayed by waiting for permission.",
      "Skilled antenatal and delivery care, insecticide-treated nets, and treatment of anaemia are widely promoted through clinics; attending early and regularly makes emergencies less likely.",
    ],
    questionsForDoctor: [
      "What are my blood pressure and blood count, and are they safe?",
      "Which specific danger signs should make me come in immediately?",
      "Where should I plan to deliver, and what is my transport plan in an emergency?",
      "Do I need malaria prevention, iron or other supplements?",
    ],
    faqs: [
      {
        question: "Is some swelling in pregnancy normal?",
        answer:
          "Mild swelling of the feet and ankles is common. Sudden swelling of the face and hands, especially with headache or vision changes, can signal pre-eclampsia and needs urgent assessment.",
      },
      {
        question: "What if I am not sure a symptom is serious?",
        answer:
          "Treat it as urgent and get checked. With danger signs in pregnancy, acting early is always safer than waiting.",
      },
      {
        question: "Does attending antenatal care really make a difference?",
        answer:
          "Yes. Regular antenatal care finds and treats many problems early and prepares for a safe birth, which significantly reduces risk to mother and baby.",
      },
    ],
    sources: [
      { label: "Maternal health and danger signs in pregnancy", publisher: "World Health Organization", year: 2023, url: "https://www.who.int/health-topics/maternal-health" },
      { label: "Maternal mortality fact sheet", publisher: "World Health Organization", year: 2023 },
      { label: "National guidelines for maternal and newborn care", publisher: "Federal Ministry of Health, Nigeria" },
    ],
    quickFacts: [
      "Pregnancy is usually safe, but certain signs need urgent attention",
      "Most serious complications can be managed well if caught early",
      "Antenatal care is the main way risks are spotted in time",
      "Danger signs can appear in pregnancy, during labour, or after birth",
      "When in doubt, it is always safer to be checked",
    ],
    whatToDoNext: {
      mild: "For mild, expected discomforts, keep your antenatal appointments and raise any concern there — but never dismiss a sign you are unsure about.",
      worsening: "If a symptom is worsening — increasing swelling, a persistent headache, or reduced baby movements — contact your midwife or clinic the same day.",
      higherRisk: "If you have high blood pressure, diabetes, a previous complication, or live far from a facility, plan ahead with your clinic for faster access to care.",
      atClinic: "Ask which danger signs apply to you, where to go after hours, your blood pressure and blood count, and your plan for a safe delivery.",
      doNotDelay: "Do not delay for heavy bleeding, severe headache with vision changes, convulsions, high fever, severe abdominal pain, or reduced baby movements — go to hospital immediately.",
    },
    reviewer: { name: "Dr. H. Yakubu (placeholder)", credentials: "MBBS, FWACS", specialty: "Obstetrics & Gynaecology" },
    lastReviewed: "2026-05-10",
    nextReview: "2027-05-10",
  },
  {
    slug: "blood-pressure-check",
    title: "Blood Pressure Check",
    category: "test",
    summary:
      "A quick, painless measurement that can reveal a silent risk. What the numbers mean and what to do next.",
    metaDescription:
      "What a blood pressure check measures, what the two numbers mean, when a reading is urgent, and how to act on a high reading — for Nigerian patients.",
    specialtyCentre: "heart-blood-pressure",
    readingTimeMinutes: 6,
    urgency: "routine",
    quickFacts: [
      "A blood pressure check is quick, painless and one of the most useful checks in medicine.",
      "It gives two numbers: systolic (the higher) over diastolic (the lower), measured in mmHg.",
      "Around 120/80 mmHg or below is often considered a healthy range for many adults.",
      "High blood pressure usually has no symptoms, so checking is the only way to know.",
      "A single reading is only a snapshot — diagnosis is based on several readings, interpreted by a clinician.",
      "A reading at or above 180/120 mmHg, especially with symptoms, may be an emergency.",
    ],
    overview: [
      "A blood pressure check measures the force of blood against the walls of your arteries as the heart pumps. It is quick, painless, and can be done at a clinic, pharmacy or with a home monitor.",
      "Because raised blood pressure usually causes no symptoms, a check is often the only way to know your status. Knowing your numbers early gives you and your clinician the chance to act before pressure causes harm to the heart, brain or kidneys.",
      "This guide explains what the numbers mean and how to respond to them. It is educational and does not diagnose or treat — a diagnosis of high or low blood pressure is made by a qualified clinician using several readings and your wider health.",
    ],
    diagnosis: [
      "A reading is written as two numbers, for example 120/80 mmHg. The top (systolic) number is the pressure when the heart beats; the bottom (diastolic) number is the pressure when the heart rests between beats.",
      "As a general guide many sources treat around 120/80 mmHg or below as a healthy range, and readings persistently at or above 140/90 mmHg in clinic as raised. Thresholds vary between guidelines, and your clinician interprets your numbers alongside your age, health and other readings.",
      "One high reading does not by itself mean you have high blood pressure. Pressure naturally varies through the day and can rise with stress, pain, caffeine or a recent rush. Diagnosis is based on several readings on different occasions.",
      "For an accurate check: rest quietly for about five minutes first, sit with your back supported and feet flat, keep the arm supported at heart level, and avoid talking during the measurement. Caffeine and exercise shortly before can raise the reading.",
      "Home monitors can be very useful when used correctly, and the readings you record can help your clinician — bring them to your visit.",
    ],
    treatment: {
      lifestyle: [
        "If a reading is high but you feel well, the usual next step is simple: have it rechecked rather than acting on one number alone.",
        "Habits that support healthy blood pressure include reducing added salt, staying physically active, maintaining a healthy weight, limiting alcohol, and not smoking.",
        "If you already use a home monitor, keep a simple record of date, time and reading to share with your clinician.",
      ],
      medical: [
        "If readings are repeatedly raised, a clinician may confirm the pattern, look for causes and contributing risks, and discuss whether treatment is needed.",
        "Any decision to start, change or stop blood pressure medicine should be made with a qualified clinician — not based on a single reading or on advice from non-professionals.",
        "Where a reading is very high or comes with symptoms, the priority is prompt medical assessment rather than waiting.",
      ],
    },
    prevention: [
      "Have your blood pressure checked at sensible intervals even when you feel well — many adults benefit from at least a yearly check, and more often if you have risk factors.",
      "Keep up the everyday habits that protect pressure: less added salt, regular activity, a healthy weight, and avoiding tobacco.",
      "If you have diabetes, kidney disease or a family history of high blood pressure, ask your clinician how often you should be checked.",
    ],
    urgentCare: [
      "A blood pressure reading at or above 180/120 mmHg, especially with symptoms, may be a medical emergency — seek urgent care.",
      "Severe headache, chest pain, shortness of breath, vision changes, or weakness or numbness on one side of the body with a high reading: go to the nearest hospital now.",
      "If you feel very unwell, do not wait to recheck the number at home — seek medical help.",
    ],
    nigerianContext: [
      "Many Nigerians do not know their blood pressure, because it is often checked only when they are already unwell. A quick check at a clinic or pharmacy can change that.",
      "Pharmacies and patent medicine shops sometimes offer readings; a one-off reading is a useful prompt, but diagnosis and any treatment should be confirmed by a qualified clinician.",
      "Acting on a single high reading by buying medicine over the counter can be risky. A recheck and proper assessment come first.",
      "Where follow-up is hard because of cost or distance, a home monitor and a written record can help you get more value from each clinic visit.",
    ],
    whatToDoNext: {
      mild: "If a single reading is mildly high but you feel well, rest and have it rechecked on another occasion rather than acting on one number.",
      worsening: "If repeated readings are raised, book a clinic visit to have the pattern confirmed and discussed — do not start medicine on your own.",
      higherRisk: "If you are pregnant, elderly, or have diabetes, kidney disease or heart disease, raised readings should be assessed sooner — speak to your clinician.",
      atClinic: "Ask what your numbers mean for you, whether they need rechecking or monitoring, and what target is right for your situation.",
      doNotDelay: "Do not delay for a very high reading (180/120 mmHg or above) with severe headache, chest pain, breathlessness, vision change, or one-sided weakness — seek urgent care.",
    },
    questionsForDoctor: [
      "What do my numbers mean for someone my age and health?",
      "Do I need more readings before anything is decided?",
      "How often should I have my blood pressure checked?",
      "Would a home monitor help, and how should I use it?",
      "What blood pressure target is right for me?",
    ],
    faqs: [
      {
        question: "Does a high reading mean I have high blood pressure?",
        answer:
          "Not on its own. Blood pressure varies through the day, and a diagnosis is based on several readings on different occasions, interpreted by a clinician. One high number is a prompt to recheck, not a diagnosis.",
      },
      {
        question: "Can I check my blood pressure at home?",
        answer:
          "Yes — a validated home monitor, used correctly, can be very helpful. Rest first, sit properly with your arm supported at heart level, and record your readings to share with your clinician.",
      },
      {
        question: "I feel fine. Do I still need a check?",
        answer:
          "Yes. High blood pressure usually causes no symptoms, which is exactly why regular checks matter. Feeling well does not confirm that your pressure is normal.",
      },
      {
        question: "My reading was very high. What should I do?",
        answer:
          "If it is at or above 180/120 mmHg, particularly with symptoms such as severe headache, chest pain or weakness on one side, treat it as urgent and seek care now. Otherwise, rest and recheck, and arrange a clinic assessment.",
      },
    ],
    sources: [
      { label: "Hypertension and blood pressure measurement guidance", publisher: "World Health Organization", year: 2023 },
      { label: "High blood pressure — diagnosis and management", publisher: "National Institute for Health and Care Excellence (NICE)", year: 2023 },
      { label: "Measuring your blood pressure", publisher: "Centers for Disease Control and Prevention", year: 2024 },
    ],
    reviewer: { name: "Reviewer name (placeholder)", credentials: "MBBS, FWACP", specialty: "Internal Medicine / Cardiology" },
    lastReviewed: "2026-05-20",
    nextReview: "2027-05-20",
  },
  {
    slug: "low-blood-sugar",
    title: "Low Blood Sugar",
    category: "condition",
    summary:
      "Recognising and treating a sudden drop in blood sugar — an important skill for anyone on diabetes medication.",
    metaDescription:
      "Low blood sugar (hypoglycaemia): symptoms, how to treat it quickly, when it is an emergency, and the Nigerian context — educational guidance.",
    specialtyCentre: "diabetes-metabolic-health",
    readingTimeMinutes: 7,
    urgency: "urgent",
    quickFacts: [
      "Low blood sugar (hypoglycaemia) means the blood sugar has dropped too low, often below about 4 mmol/L.",
      "It mainly affects people taking certain diabetes medicines, especially insulin or sulfonylureas.",
      "Early signs include shakiness, sweating, hunger, a fast heartbeat and difficulty concentrating.",
      "Mild lows are usually treated quickly with a sugary drink or glucose, followed by a snack.",
      "Severe low blood sugar — confusion, fits or unconsciousness — is an emergency.",
    ],
    overview: [
      "Low blood sugar happens when the level of glucose in the blood falls too low to meet the body’s needs. It is most common in people who take insulin or certain other diabetes medicines, and can be brought on by a missed meal, extra activity, alcohol, or too much medication.",
      "Most episodes are mild and can be treated quickly at home once you know the signs. The aim of this guide is to help you recognise low blood sugar early, treat it correctly, and know when it has become an emergency.",
      "This is educational information and does not replace your own clinician’s advice about your medicines and targets.",
    ],
    symptoms: {
      common: [
        "Shakiness or trembling",
        "Sweating and a fast or pounding heartbeat",
        "Hunger, anxiety or irritability",
        "Difficulty concentrating, dizziness or blurred vision",
      ],
      warning: [
        "Confusion or slurred speech",
        "Unusual behaviour or drowsiness",
        "Seizures (fits)",
        "Loss of consciousness",
      ],
    },
    causes: [
      "Taking too much insulin or certain diabetes tablets relative to food",
      "A missed, delayed or smaller-than-usual meal",
      "More physical activity than usual without adjusting food or medication",
      "Drinking alcohol, particularly without food",
    ],
    riskFactors: [
      "Using insulin or sulfonylurea medicines",
      "Irregular meals or fasting",
      "Kidney problems, which can change how medicines are cleared",
      "A previous severe low, which can blunt the early warning signs",
    ],
    diagnosis: [
      "Where possible, confirm a low with a blood sugar meter — but if you have clear symptoms and no meter to hand, treat first.",
      "A reading below about 4 mmol/L is generally treated as low; your clinician may set a target specific to you.",
      "Repeated lows should be reviewed with a clinician, who may adjust your medicines or routine.",
    ],
    treatment: {
      lifestyle: [
        "For a mild low: take about 15–20 g of fast-acting sugar — for example a glass of fruit juice or a sugary (non-diet) soft drink, or glucose tablets.",
        "Wait about 15 minutes and recheck if you can; if still low, repeat the sugar.",
        "Once recovered, eat a snack or your next meal with some longer-acting carbohydrate to prevent another drop.",
      ],
      medical: [
        "If a person is confused, unable to swallow safely, having a fit, or unconscious, do not give food or drink by mouth — seek emergency help immediately.",
        "Frequent or severe lows should be assessed by a clinician, who may adjust the treatment plan. Do not change prescribed medicines on your own.",
      ],
    },
    prevention: [
      "Eat regular meals and avoid skipping food when on medicines that can cause lows.",
      "Adjust food or medication around extra activity, with your clinician’s guidance.",
      "Be cautious with alcohol, and avoid drinking on an empty stomach.",
      "If you have repeated lows, review your routine and medicines with your clinician.",
    ],
    urgentCare: [
      "Confusion, slurred speech, a fit, or loss of consciousness in someone with diabetes is a medical emergency — seek urgent help now.",
      "If a person cannot safely swallow, do not put food or drink in their mouth; get emergency care.",
      "If a low does not improve after treating it twice, seek medical help.",
    ],
    nigerianContext: [
      "Lows are more likely when meals are irregular or skipped — for example during long working hours, travel, or religious fasting. Plan medicines and food together with your clinician.",
      "Always carrying a small source of fast sugar is a simple, low-cost safeguard.",
      "Family members and close colleagues benefit from knowing the signs of a severe low and what to do, since the person affected may be unable to act.",
    ],
    whatToDoNext: {
      mild: "If you feel shaky, sweaty or suddenly hungry, treat it: take fast-acting sugar, wait about 15 minutes, and recheck if you can.",
      worsening: "If lows keep happening, review your meals, activity and medicines with your clinician — do not adjust prescribed doses yourself.",
      higherRisk: "If you are elderly, have kidney problems, or have lost your early warning signs, ask your clinician about safer targets.",
      atClinic: "Ask why your lows are happening, whether your medicines need adjusting, and how to prevent them.",
      doNotDelay: "Do not delay for confusion, a fit, or loss of consciousness — this is an emergency; seek urgent care immediately.",
    },
    questionsForDoctor: [
      "Why am I getting low blood sugar?",
      "Do my medicines or doses need adjusting?",
      "What is a safe blood sugar target for me?",
      "How should I handle activity, fasting or skipped meals?",
      "What should my family do if I have a severe low?",
    ],
    faqs: [
      {
        question: "What should I use to treat a low quickly?",
        answer:
          "About 15–20 g of fast-acting sugar works well — a glass of fruit juice or a regular (non-diet) soft drink, or glucose tablets. Recheck after about 15 minutes and follow with a snack or meal.",
      },
      {
        question: "Can people who are not on diabetes medicine get low blood sugar?",
        answer:
          "It is much less common. Most significant lows occur in people on insulin or certain diabetes tablets. Persistent symptoms in others should be assessed by a clinician.",
      },
      {
        question: "Is a low dangerous?",
        answer:
          "Mild lows are usually easy to treat. A severe low — with confusion, a fit, or loss of consciousness — is an emergency and needs urgent help.",
      },
    ],
    sources: [
      { label: "Hypoglycaemia in diabetes — patient guidance", publisher: "World Health Organization", year: 2023 },
      { label: "Type 2 diabetes management", publisher: "National Institute for Health and Care Excellence (NICE)", year: 2022 },
    ],
    reviewer: { name: "Reviewer name (placeholder)", credentials: "MBBS, FWACP", specialty: "Internal Medicine / Endocrinology" },
    lastReviewed: "2026-05-22",
    nextReview: "2027-05-22",
  },
  {
    slug: "hba1c-test",
    title: "HbA1c Test",
    category: "test",
    summary:
      "The blood test that reflects average blood sugar over months, and what the result means for your care.",
    metaDescription:
      "What the HbA1c test measures, how it is used to diagnose and monitor diabetes, and what the result means — educational guidance for Nigerian patients.",
    specialtyCentre: "diabetes-metabolic-health",
    readingTimeMinutes: 6,
    urgency: "routine",
    quickFacts: [
      "HbA1c reflects your average blood sugar over roughly the past two to three months.",
      "It does not need fasting and is taken from a simple blood sample.",
      "It is used both to help diagnose diabetes and to monitor control over time.",
      "Results are often reported as a percentage or in mmol/mol; your clinician interprets them.",
      "A single value is part of the picture — your clinician considers it alongside your symptoms and other tests.",
    ],
    overview: [
      "HbA1c (glycated haemoglobin) measures how much sugar has attached to the haemoglobin in your red blood cells. Because red cells live for around three months, the test gives an average picture of blood sugar over that period — not just the level on the day.",
      "It is widely used to help diagnose diabetes and, once diagnosed, to track how well blood sugar is controlled. Unlike a finger-prick reading, it is not affected by a single meal, so it does not require fasting.",
      "This guide explains what the test shows and how it is used. It is educational; your clinician interprets your result in the context of your health.",
    ],
    diagnosis: [
      "The test is taken from a blood sample and can be done at any time of day, without fasting.",
      "Results are commonly reported as a percentage (for example 6.5%) or in mmol/mol. Higher values reflect higher average blood sugar.",
      "Thresholds for diagnosis and for treatment targets vary between guidelines and individuals; your clinician will tell you what your number means for you.",
      "Some conditions — such as anaemia, certain haemoglobin variants, or recent blood loss — can affect HbA1c, so it is interpreted alongside other information.",
    ],
    treatment: {
      lifestyle: [
        "If your HbA1c is higher than your target, the usual first steps focus on eating patterns, activity, weight and consistency — guided by your clinician.",
        "Keeping a simple record of your readings and questions helps you get more from each review.",
      ],
      medical: [
        "Your clinician may use the result to decide whether to start, continue or adjust treatment, and how often to recheck.",
        "Any change to medicines should be made with a clinician — not based on a single HbA1c value alone.",
      ],
    },
    prevention: [
      "If you are at risk of diabetes, an HbA1c check can detect a problem early, when habits can make the biggest difference.",
      "For people living with diabetes, regular HbA1c checks — often every few months — help keep control on track.",
    ],
    urgentCare: [
      "HbA1c itself is not an emergency test, but symptoms of very high or very low blood sugar are.",
      "Drowsiness, deep rapid breathing, a fruity breath smell, or confusion with known diabetes needs urgent care.",
    ],
    nigerianContext: [
      "HbA1c is not available everywhere or may carry a cost; where it is hard to access, clinicians may rely more on blood sugar readings.",
      "Because it needs no fasting, HbA1c can be more convenient than tests that require an empty stomach.",
      "Knowing your number and bringing previous results to appointments helps your clinician track your progress over time.",
    ],
    whatToDoNext: {
      mild: "If your result is near your target, keep up your routine and attend your next scheduled review.",
      worsening: "If your HbA1c is rising, discuss your eating, activity and medicines with your clinician rather than changing treatment yourself.",
      higherRisk: "If you have other conditions such as kidney disease or are pregnant, ask how your target and testing should change.",
      atClinic: "Ask what your result means for you, what your target is, and how often you should be retested.",
      doNotDelay: "Do not delay for symptoms of very high or very low blood sugar — these need prompt care regardless of your last HbA1c.",
    },
    questionsForDoctor: [
      "What does my HbA1c mean for me?",
      "What is my target, and how was it chosen?",
      "How often should I have this test?",
      "Could anything be affecting the accuracy of my result?",
      "What can I do to improve it safely?",
    ],
    faqs: [
      {
        question: "Do I need to fast for an HbA1c test?",
        answer:
          "No. Because it reflects an average over months rather than the level on the day, HbA1c does not require fasting and can be taken at any time.",
      },
      {
        question: "How often should HbA1c be checked?",
        answer:
          "It varies. Many people with stable diabetes are checked every few months, and more often when treatment changes. Your clinician will advise what is right for you.",
      },
    ],
    sources: [
      { label: "Use of HbA1c in the diagnosis of diabetes", publisher: "World Health Organization", year: 2021 },
      { label: "Type 2 diabetes: HbA1c monitoring", publisher: "National Institute for Health and Care Excellence (NICE)", year: 2022 },
    ],
    reviewer: { name: "Reviewer name (placeholder)", credentials: "MBBS, FWACP", specialty: "Internal Medicine / Endocrinology" },
    lastReviewed: "2026-05-22",
    nextReview: "2027-05-22",
  },
  {
    slug: "antenatal-care",
    title: "Antenatal Care",
    category: "prevention",
    summary:
      "What antenatal visits are for, what to expect, and why early and regular care matters for a healthy pregnancy.",
    metaDescription:
      "Antenatal care explained: what happens at visits, why early and regular attendance matters, and the Nigerian context — educational guidance.",
    specialtyCentre: "maternal-health",
    readingTimeMinutes: 7,
    urgency: "routine",
    quickFacts: [
      "Antenatal care is the regular check-up and support a woman receives during pregnancy.",
      "Starting early and attending regularly helps catch problems before they become serious.",
      "Visits typically check blood pressure, urine, weight, and the baby’s growth and movements.",
      "Antenatal care also covers malaria prevention, nutrition, vaccines and danger-sign awareness.",
      "It complements — and does not replace — urgent care if danger signs appear.",
    ],
    overview: [
      "Antenatal care is the package of check-ups, tests and advice that supports a woman and her baby through pregnancy. Its purpose is to keep both well, to find and manage problems early, and to prepare for a safe birth.",
      "Care is most effective when it begins early in pregnancy and continues regularly. Even a woman who feels completely well benefits, because some important problems — such as raised blood pressure or anaemia — can develop without obvious symptoms.",
      "This guide explains what antenatal care involves. It is educational and supports, but does not replace, the advice of your own antenatal team.",
    ],
    diagnosis: [
      "At visits, the team commonly checks blood pressure, tests urine, records weight, and assesses the baby’s growth and heartbeat.",
      "Blood tests may check for anaemia, blood group, and infections that can affect pregnancy.",
      "Ultrasound scans may be arranged to check the baby’s development and position.",
      "Malaria prevention and, where appropriate, vaccines are part of routine antenatal care.",
    ],
    treatment: {
      lifestyle: [
        "Attend every scheduled visit, and keep your antenatal records safe and with you.",
        "Eat a balanced diet, take recommended supplements such as iron and folic acid, and rest when you can.",
        "Use malaria prevention measures advised by your clinic, including treated nets.",
      ],
      medical: [
        "Your team will manage conditions found in pregnancy — such as anaemia or raised blood pressure — and refer you onward if needed.",
        "Any medicine in pregnancy should be taken on the advice of a qualified clinician.",
      ],
    },
    prevention: [
      "Begin antenatal care as early as possible, ideally in the first months of pregnancy.",
      "Attend all visits, even when you feel well, so silent problems can be caught.",
      "Learn the pregnancy danger signs so you know when to seek urgent care between visits.",
    ],
    urgentCare: [
      "Between visits, seek urgent care for heavy bleeding, severe headache with vision changes, fits, high fever, severe abdominal pain, or reduced baby movements.",
      "Do not wait for the next appointment if a danger sign appears.",
    ],
    nigerianContext: [
      "Distance, cost and family decision-making can delay the start of antenatal care; beginning early and planning ahead helps overcome these barriers.",
      "Malaria in pregnancy is a serious, preventable risk; antenatal preventive treatment and treated nets are important.",
      "Agreeing a delivery plan — where to go, how to get there, who decides — before labour saves crucial time in an emergency.",
      "Keeping your own antenatal records and bringing them to each visit supports continuity of care.",
    ],
    whatToDoNext: {
      mild: "If you have confirmed a pregnancy, book your first antenatal visit early rather than waiting for symptoms.",
      worsening: "If you have a new symptom that worries you between visits, contact your clinic for advice.",
      higherRisk: "If you have high blood pressure, diabetes or a previous pregnancy complication, tell your team early so care can be tailored.",
      atClinic: "Ask what each check is for, what your blood pressure and blood count are, and what danger signs to watch for.",
      doNotDelay: "Do not delay for bleeding, severe headache, fits, high fever, severe abdominal pain, or reduced baby movements — seek urgent care.",
    },
    questionsForDoctor: [
      "When should I start and how often should I come?",
      "What do my blood pressure and blood count show?",
      "Which danger signs should I act on, and where should I go?",
      "What malaria prevention and supplements do you recommend?",
      "What is my plan for a safe delivery?",
    ],
    faqs: [
      {
        question: "When should antenatal care start?",
        answer:
          "As early as possible — ideally in the first months of pregnancy. Early care catches problems like anaemia and raised blood pressure before they become serious.",
      },
      {
        question: "I feel well. Do I still need to attend?",
        answer:
          "Yes. Some important problems in pregnancy cause no symptoms at first. Regular visits let your team find and manage them early.",
      },
    ],
    sources: [
      { label: "Recommendations on antenatal care for a positive pregnancy experience", publisher: "World Health Organization", year: 2016 },
      { label: "Antenatal care guidance", publisher: "National Institute for Health and Care Excellence (NICE)", year: 2021 },
    ],
    reviewer: { name: "Reviewer name (placeholder)", credentials: "MBBS, FWACS", specialty: "Obstetrics & Gynaecology" },
    lastReviewed: "2026-05-18",
    nextReview: "2027-05-18",
  },
  {
    slug: "high-blood-pressure-in-pregnancy",
    title: "High Blood Pressure in Pregnancy",
    category: "condition",
    summary:
      "Raised blood pressure in pregnancy can be serious. Why antenatal checks catch it, and the signs that need urgent care.",
    metaDescription:
      "High blood pressure in pregnancy: why it matters, warning signs of pre-eclampsia, what care involves, and the Nigerian context — educational guidance.",
    specialtyCentre: "maternal-health",
    readingTimeMinutes: 7,
    urgency: "urgent",
    quickFacts: [
      "Raised blood pressure in pregnancy is common and often managed well when found early.",
      "Sometimes it is part of pre-eclampsia, a more serious condition affecting mother and baby.",
      "It frequently causes no symptoms, which is why routine antenatal checks matter.",
      "Warning signs include severe headache, vision changes, upper-abdominal pain and sudden swelling.",
      "Severe symptoms, or a fit, are an emergency.",
    ],
    overview: [
      "Blood pressure can rise during pregnancy. In many cases it is mild and carefully monitored, but in some it signals pre-eclampsia — a condition where raised pressure is accompanied by signs that the pregnancy is placing strain on the mother’s organs and the baby.",
      "Because raised pressure often causes no symptoms early on, it is usually picked up at routine antenatal visits. This is one of the key reasons antenatal blood pressure and urine checks matter so much.",
      "This guide is educational. Any concern about blood pressure in pregnancy should be assessed by a qualified clinician.",
    ],
    symptoms: {
      common: [
        "Often there are no symptoms, and it is found at an antenatal check",
        "Mild swelling of the feet and ankles, which is also common in normal pregnancy",
      ],
      warning: [
        "A severe or persistent headache",
        "Blurred vision, flashing lights or other vision changes",
        "Pain just below the ribs, usually on the right",
        "Sudden swelling of the face, hands or feet",
        "A fit (seizure) — this is an emergency",
      ],
    },
    causes: [
      "Pregnancy itself can raise blood pressure through changes in the body and placenta",
      "Some women have high blood pressure before pregnancy that continues during it",
    ],
    riskFactors: [
      "A first pregnancy, or a new partner since a previous pregnancy",
      "High blood pressure, diabetes or kidney disease before pregnancy",
      "A previous pregnancy affected by pre-eclampsia",
      "Carrying more than one baby",
    ],
    diagnosis: [
      "Blood pressure is measured at antenatal visits; a raised reading is rechecked and monitored.",
      "Urine is tested for protein, which can be a sign of pre-eclampsia.",
      "Blood tests and checks on the baby’s growth and wellbeing may be arranged.",
    ],
    treatment: {
      lifestyle: [
        "Attend all antenatal visits so blood pressure and urine can be monitored closely.",
        "Report warning signs promptly rather than waiting for the next appointment.",
      ],
      medical: [
        "A clinician may prescribe medicine to lower blood pressure that is safe in pregnancy, and monitor mother and baby more closely.",
        "If pre-eclampsia becomes severe, the safest treatment is timely delivery, decided by the maternity team. These decisions belong with qualified clinicians.",
      ],
    },
    prevention: [
      "Early and regular antenatal care is the most important step, because it catches rising pressure before symptoms appear.",
      "Women at higher risk may be offered specific preventive measures by their clinician.",
      "Knowing the warning signs means you can act quickly if they appear.",
    ],
    urgentCare: [
      "Seek urgent care for a severe headache, vision changes, upper-abdominal pain, or sudden swelling in pregnancy.",
      "A fit (seizure) in pregnancy is an emergency — go to the nearest facility immediately.",
      "If you are told your blood pressure is very high, follow your team’s advice without delay.",
    ],
    nigerianContext: [
      "High blood pressure and pre-eclampsia are important causes of harm in pregnancy in Nigeria, and many cases can be managed when caught early.",
      "Because the condition is often silent, missing antenatal visits removes the main chance to detect it — attending regularly is protective.",
      "Planning in advance where to go for urgent care, and how to get there, can save vital time if warning signs appear.",
    ],
    whatToDoNext: {
      mild: "If your blood pressure is mildly raised and you feel well, keep all antenatal appointments so it can be watched closely.",
      worsening: "If readings are climbing, follow your team’s advice on monitoring and medication — do not stop or start medicines on your own.",
      higherRisk: "If you had pre-eclampsia before, or have diabetes or kidney disease, tell your team early so your care can be tailored.",
      atClinic: "Ask what your readings mean, what warning signs to watch for, and where to go urgently if they appear.",
      doNotDelay: "Do not delay for severe headache, vision changes, upper-abdominal pain, sudden swelling, or a fit — seek urgent care immediately.",
    },
    questionsForDoctor: [
      "What do my blood pressure and urine results mean?",
      "What warning signs should make me seek urgent care?",
      "Is any medicine needed, and is it safe in pregnancy?",
      "How closely will my baby and I be monitored?",
      "Where should I go urgently, and how will I get there?",
    ],
    faqs: [
      {
        question: "Will high blood pressure harm my baby?",
        answer:
          "It can, especially if it becomes severe or develops into pre-eclampsia, which is why close monitoring matters. Many pregnancies with well-managed blood pressure go on to a safe delivery.",
      },
      {
        question: "I feel fine — why do I need so many checks?",
        answer:
          "High blood pressure in pregnancy often causes no symptoms early on. Routine checks are the main way it is found before it becomes dangerous.",
      },
    ],
    sources: [
      { label: "WHO recommendations on prevention and treatment of pre-eclampsia and eclampsia", publisher: "World Health Organization", year: 2011 },
      { label: "Hypertension in pregnancy: diagnosis and management", publisher: "National Institute for Health and Care Excellence (NICE)", year: 2019 },
    ],
    reviewer: { name: "Reviewer name (placeholder)", credentials: "MBBS, FWACS", specialty: "Obstetrics & Gynaecology" },
    lastReviewed: "2026-05-18",
    nextReview: "2027-05-18",
  },
  {
    slug: "kidney-function-test",
    title: "Kidney Function Test",
    category: "test",
    summary:
      "The blood and urine tests that show how the kidneys are working, and what the results can mean.",
    metaDescription:
      "Kidney function tests explained: creatinine, eGFR and urine tests, what the results can mean, and the Nigerian context — educational guidance.",
    specialtyCentre: "kidney-health",
    readingTimeMinutes: 6,
    urgency: "routine",
    quickFacts: [
      "Kidney function is checked mainly with a blood test (creatinine, used to estimate eGFR) and urine tests.",
      "eGFR estimates how well the kidneys are filtering; lower values suggest reduced function.",
      "Urine can be checked for protein and blood, which are early signs of kidney strain.",
      "A single result is a snapshot; trends over time are often more informative.",
      "Results are interpreted by a clinician alongside your blood pressure, blood sugar and history.",
    ],
    overview: [
      "Kidney function tests show how well the kidneys are filtering waste from the blood and whether they are leaking substances they should keep, such as protein. They are simple — usually a blood sample and a urine sample.",
      "Because kidney disease is often silent in its early stages, these tests are one of the few ways to detect a problem before symptoms appear — particularly important for people with high blood pressure or diabetes.",
      "This guide explains what the tests look at. It is educational; your clinician interprets your results in the context of your overall health.",
    ],
    diagnosis: [
      "A blood test measures creatinine, a waste product; this is used to calculate an estimated glomerular filtration rate (eGFR), a measure of filtering ability.",
      "A urine test can detect protein or blood, which may indicate kidney strain even when eGFR is near normal.",
      "Results vary with age, muscle mass and hydration, so they are interpreted by a clinician rather than read in isolation.",
      "Because a single reading can be affected by short-term factors, tests are often repeated to look at the trend.",
    ],
    treatment: {
      lifestyle: [
        "If results suggest early strain, the focus is usually on controlling blood pressure and blood sugar, staying hydrated, and avoiding kidney-harming habits.",
        "Keeping a record of your results helps you and your clinician track any change over time.",
      ],
      medical: [
        "A clinician may repeat the tests, look for a cause, adjust medicines, or refer you to a specialist depending on the results.",
        "Some medicines need dose adjustment when kidney function is reduced — another reason to share your results with any clinician treating you.",
      ],
    },
    prevention: [
      "If you have high blood pressure or diabetes, regular kidney checks help catch problems early.",
      "Controlling blood pressure and blood sugar is the most effective way to protect kidney function.",
      "Avoid frequent, unguided use of painkillers and unverified remedies that can harm the kidneys.",
    ],
    urgentCare: [
      "The test itself is routine, but some kidney symptoms are not.",
      "Passing very little or no urine, severe side or back pain with fever, or breathlessness with widespread swelling needs prompt assessment.",
    ],
    nigerianContext: [
      "Kidney disease is often found late in Nigeria; simple tests during routine care can detect it earlier, when more can be done.",
      "Because high blood pressure and diabetes are the main drivers, checking kidney function in people with these conditions is especially valuable.",
      "Sharing previous results with any clinician you see supports safe prescribing and continuity of care.",
    ],
    whatToDoNext: {
      mild: "If your results are near normal, keep up routine checks, especially if you have blood pressure or sugar problems.",
      worsening: "If results are changing, ask your clinician what is driving it and what can be done — do not rely on remedies that are not professionally advised.",
      higherRisk: "If you have diabetes, high blood pressure, or take medicines cleared by the kidneys, ask how often you should be tested.",
      atClinic: "Ask what your eGFR and urine results mean, whether they need repeating, and what you can do to protect your kidneys.",
      doNotDelay: "Do not delay for very little or no urine, severe pain with fever, or breathlessness with swelling — seek urgent care.",
    },
    questionsForDoctor: [
      "What do my creatinine, eGFR and urine results mean?",
      "Do the tests need to be repeated?",
      "What is driving any change in my kidney function?",
      "Do any of my medicines need adjusting?",
      "What can I do to protect my kidneys?",
    ],
    faqs: [
      {
        question: "What is eGFR?",
        answer:
          "It is an estimate of how well your kidneys are filtering, calculated from a blood creatinine result along with factors such as age. Lower values suggest reduced function, but it is interpreted by a clinician.",
      },
      {
        question: "Can kidney problems exist with a normal blood test?",
        answer:
          "Yes. Sometimes the blood eGFR is near normal while the urine shows protein, an early sign of strain. That is why both blood and urine tests are useful.",
      },
    ],
    sources: [
      { label: "Chronic kidney disease — assessment and detection", publisher: "National Institute for Health and Care Excellence (NICE)", year: 2021 },
      { label: "Kidney health and testing guidance", publisher: "World Health Organization", year: 2023 },
    ],
    reviewer: { name: "Reviewer name (placeholder)", credentials: "MBBS, FWACP", specialty: "Internal Medicine / Nephrology" },
    lastReviewed: "2026-05-24",
    nextReview: "2027-05-24",
  },
  {
    slug: "painkiller-misuse-kidney",
    title: "Painkiller Misuse and Kidney Risk",
    category: "prevention",
    summary:
      "Why frequent, unguided use of some painkillers can harm the kidneys, and how to use them more safely.",
    metaDescription:
      "How frequent, unguided use of some painkillers can affect the kidneys, safer use, and the Nigerian context — educational guidance.",
    specialtyCentre: "kidney-health",
    readingTimeMinutes: 6,
    urgency: "see-doctor",
    quickFacts: [
      "Some common painkillers, used frequently or in high doses without guidance, can strain the kidneys.",
      "This particularly applies to a group called NSAIDs (for example ibuprofen and diclofenac).",
      "Risk is higher in people who are dehydrated, older, or who already have kidney or heart problems.",
      "Used occasionally and as directed, these medicines are appropriate for many people.",
      "If you take painkillers often, a clinician or pharmacist can advise on safer options.",
    ],
    overview: [
      "Painkillers are among the most commonly bought medicines, and for short-term pain they are often appropriate. But some — particularly the group known as non-steroidal anti-inflammatory drugs (NSAIDs), such as ibuprofen and diclofenac — can affect the kidneys when used frequently, in high doses, or by people already at risk.",
      "The aim of this guide is not to frighten anyone away from appropriate pain relief, but to explain how to use these medicines more safely, and when to seek advice. It is educational and does not replace guidance from a clinician or pharmacist who knows your situation.",
    ],
    riskFactors: [
      "Frequent or long-term use, or doses higher than recommended",
      "Existing kidney disease, heart failure or liver disease",
      "Older age",
      "Dehydration, including during hot weather or illness with vomiting or diarrhoea",
      "Taking several medicines that affect the kidneys at once",
    ],
    diagnosis: [
      "Kidney strain from painkillers often has no symptoms early on and may be found on a blood or urine test.",
      "If you use these medicines regularly, a clinician may check your kidney function.",
    ],
    treatment: {
      lifestyle: [
        "Use the lowest effective dose for the shortest time needed, and follow the directions on the packet.",
        "Stay well hydrated, and avoid these painkillers when you are dehydrated or unwell with vomiting or diarrhoea.",
        "If you need pain relief often, ask a pharmacist or clinician about safer options for you.",
      ],
      medical: [
        "A clinician can advise which painkillers are safer given your health, and may check your kidney function if you use them regularly.",
        "Do not combine multiple kidney-affecting medicines without professional advice.",
      ],
    },
    prevention: [
      "Treat regular painkiller use as something to discuss with a clinician, not a long-term habit to manage alone.",
      "Keep hydrated, and pause NSAIDs during illnesses that cause dehydration unless advised otherwise.",
      "If you have kidney disease, high blood pressure, heart failure or diabetes, ask which painkillers are safe for you.",
    ],
    urgentCare: [
      "Seek prompt care if you notice passing much less urine, widespread swelling, or breathlessness after regular painkiller use.",
      "Severe symptoms — very little or no urine, confusion, or severe pain — need urgent assessment.",
    ],
    nigerianContext: [
      "Painkillers are widely available without prescription, so frequent, unguided use is common — and easy to underestimate as a risk.",
      "Buying stronger or combination painkillers over the counter for ongoing pain can quietly add to kidney strain; a clinician can suggest safer approaches.",
      "Unverified herbal remedies taken alongside painkillers may add further risk; discuss everything you take with a clinician.",
      "Hot weather and dehydration are common and can increase the kidney risk from these medicines.",
    ],
    whatToDoNext: {
      mild: "If you use painkillers only occasionally and as directed, that is generally appropriate — stay hydrated and follow the packet.",
      worsening: "If you find yourself needing painkillers often, ask a pharmacist or clinician about the cause of the pain and safer options.",
      higherRisk: "If you have kidney, heart or liver problems, diabetes or high blood pressure, check which painkillers are safe before regular use.",
      atClinic: "Ask which painkillers suit your health, whether your kidney function should be checked, and what to avoid combining.",
      doNotDelay: "Do not delay for much-reduced urine, widespread swelling, breathlessness, or confusion — seek urgent care.",
    },
    questionsForDoctor: [
      "Which painkillers are safe for me to use, and how often?",
      "Should my kidney function be checked?",
      "What should I avoid taking together?",
      "What is causing my ongoing pain?",
      "What are safer alternatives for managing it?",
    ],
    faqs: [
      {
        question: "Are all painkillers risky for the kidneys?",
        answer:
          "No. The concern mainly applies to NSAIDs (such as ibuprofen and diclofenac) used frequently, in high doses, or by people already at risk. Used occasionally and as directed, they are appropriate for many people. A pharmacist or clinician can advise.",
      },
      {
        question: "I take a painkiller most days for pain — what should I do?",
        answer:
          "Regular use is worth discussing with a clinician, both to find safer pain relief and to address the underlying cause. They may also check your kidney function.",
      },
    ],
    sources: [
      { label: "NSAIDs and kidney safety guidance", publisher: "National Institute for Health and Care Excellence (NICE)", year: 2021 },
      { label: "Safe use of medicines and kidney health", publisher: "World Health Organization", year: 2023 },
    ],
    reviewer: { name: "Reviewer name (placeholder)", credentials: "MBBS, FWACP", specialty: "Internal Medicine / Nephrology" },
    lastReviewed: "2026-05-24",
    nextReview: "2027-05-24",
  },
  {
    slug: "anxiety",
    title: "Anxiety",
    category: "condition",
    summary:
      "When worry becomes persistent and hard to control. What anxiety is, and the support and strategies that help.",
    metaDescription:
      "Anxiety explained calmly: common signs, what can help, when to seek support, and the Nigerian context — educational, stigma-free guidance.",
    specialtyCentre: "mental-behavioural-health",
    readingTimeMinutes: 7,
    urgency: "see-doctor",
    quickFacts: [
      "Anxiety is a common and treatable condition, not a personal weakness.",
      "It can involve persistent worry, restlessness, and physical feelings such as a racing heart.",
      "Many people improve with support, practical strategies, and sometimes professional treatment.",
      "Talking to a trusted person or a clinician is a good and brave first step.",
      "If you ever feel unsafe, you deserve support now — reach out to a professional or trusted person.",
    ],
    overview: [
      "Anxiety is the mind and body’s response to perceived threat. In small amounts it is normal and even useful. It becomes a health concern when worry is persistent, feels hard to control, and starts to affect sleep, relationships, work or daily life.",
      "Anxiety is common, and importantly it is treatable. Understanding it is often the first step toward feeling better — and reaching out for support is a sign of strength, not weakness.",
      "This guide is calm, educational information. It is not a diagnosis and does not replace the care of a qualified health professional, who can offer assessment and support tailored to you.",
    ],
    symptoms: {
      common: [
        "Persistent or excessive worry that is hard to control",
        "Restlessness, feeling on edge, or difficulty relaxing",
        "Difficulty concentrating or sleeping",
        "Physical feelings such as a racing heart, tense muscles or a churning stomach",
      ],
      warning: [
        "Anxiety that severely limits your ability to work, study or care for yourself",
        "Panic that feels overwhelming or recurs often",
        "Anxiety alongside persistent low mood or hopelessness",
        "Any thoughts of harming yourself — please reach out for support",
      ],
    },
    causes: [
      "A mix of factors usually contributes, rather than a single cause",
      "Stressful life circumstances, pressure or difficult experiences",
      "Physical health problems, and some substances such as excessive caffeine or alcohol",
      "Individual differences, including family history and temperament",
    ],
    diagnosis: [
      "There is no single test; a clinician understands anxiety through a supportive, confidential conversation.",
      "Simple, validated questionnaires are sometimes used to understand the pattern and severity.",
      "A clinician may also check for physical causes that can affect mood and energy.",
    ],
    treatment: {
      lifestyle: [
        "Practical steps can help: regular routines, sleep, physical activity, and reducing caffeine.",
        "Slow breathing and grounding techniques can ease moments of acute anxiety.",
        "Staying connected to trusted people, rather than withdrawing, often helps.",
      ],
      medical: [
        "Talking therapies — structured support from a trained professional — are effective for many people.",
        "Sometimes medication is offered; whether it is right for you is a decision to make with a qualified clinician.",
      ],
    },
    prevention: [
      "Looking after sleep, activity and connection builds resilience over time.",
      "Reaching out early, before distress builds, often makes support more effective.",
      "Reducing stimulants such as excess caffeine can lessen physical anxiety symptoms.",
    ],
    urgentCare: [
      "If you ever have thoughts of harming yourself, or feel unable to keep yourself safe, please reach out now — contact a qualified health professional or a trusted person, or go to the nearest health facility.",
      "You deserve support, and you do not have to manage these feelings alone.",
    ],
    nigerianContext: [
      "Stigma can make people hesitant to talk about anxiety; naming it calmly and without judgement helps people seek support sooner.",
      "Primary-care clinicians and general hospitals are often a practical first point of contact where specialist services are limited.",
      "Faith, family and community can be valuable sources of support, working best alongside — not instead of — qualified care.",
    ],
    whatToDoNext: {
      mild: "If anxiety is mild, simple steps — routine, sleep, activity, less caffeine, and talking to someone you trust — can help.",
      worsening: "If anxiety is persistent or affecting daily life, consider speaking to a clinician; effective support is available.",
      higherRisk: "If anxiety comes with low mood, panic, or thoughts of self-harm, reach out to a professional or trusted person sooner rather than later.",
      atClinic: "Ask what might be contributing, what support or therapy is available, and what steps could help you feel better.",
      doNotDelay: "Do not delay reaching out if you feel unsafe or unable to cope — support is available now, and you deserve it.",
    },
    questionsForDoctor: [
      "What might be contributing to how I feel?",
      "What kinds of support or therapy could help me?",
      "Are there practical strategies you would recommend first?",
      "If medication is an option, what are the benefits and trade-offs?",
      "Where can I find ongoing support?",
    ],
    faqs: [
      {
        question: "Is anxiety a sign of weakness?",
        answer:
          "No. Anxiety is a common health condition that affects people from all walks of life. Seeking support is a sign of strength, and many people improve with the right help.",
      },
      {
        question: "Can anxiety get better?",
        answer:
          "Yes. With support, practical strategies and sometimes professional treatment, many people feel significantly better. Reaching out early often helps.",
      },
    ],
    sources: [
      { label: "Mental health and anxiety — public information", publisher: "World Health Organization", year: 2023 },
      { label: "Generalised anxiety disorder — management", publisher: "National Institute for Health and Care Excellence (NICE)", year: 2020 },
    ],
    reviewer: { name: "Reviewer name (placeholder)", credentials: "MBBS, FWACPsych", specialty: "Psychiatry / Mental Health" },
    lastReviewed: "2026-05-26",
    nextReview: "2027-05-26",
  },
  {
    slug: "depression",
    title: "Depression",
    category: "condition",
    summary:
      "More than ordinary sadness — a common, treatable condition. Understanding it is the first step to getting support.",
    metaDescription:
      "Depression explained calmly: common signs, what helps, when to seek support, and the Nigerian context — educational, stigma-free guidance.",
    specialtyCentre: "mental-behavioural-health",
    readingTimeMinutes: 7,
    urgency: "see-doctor",
    quickFacts: [
      "Depression is a common, treatable health condition — not a character flaw or weakness.",
      "It can involve persistent low mood, loss of interest, and changes in sleep, appetite and energy.",
      "Many people recover or improve with support, talking therapy, and sometimes medication.",
      "Reaching out to a trusted person or clinician is an important and brave step.",
      "If you ever feel unsafe or that life is not worth living, please reach out for support now.",
    ],
    overview: [
      "Depression is more than feeling sad for a while. It is a persistent low mood, often with a loss of interest or pleasure in things, that lasts for weeks and affects daily life. It can also bring changes in sleep, appetite, energy and concentration.",
      "Depression is common across all communities, and it is treatable. Understanding it — and knowing that it is not a personal failing — is often the first step toward getting support and feeling better.",
      "This is calm, educational information, not a diagnosis. A qualified health professional can offer assessment and support suited to your situation.",
    ],
    symptoms: {
      common: [
        "Persistent low mood or sadness most of the day",
        "Loss of interest or pleasure in usual activities",
        "Changes in sleep and appetite",
        "Low energy, poor concentration, or feelings of guilt or worthlessness",
      ],
      warning: [
        "Symptoms that severely affect your ability to function day to day",
        "Feeling hopeless about the future for a sustained period",
        "Withdrawing from people and support",
        "Any thoughts that life is not worth living — please reach out for support",
      ],
    },
    causes: [
      "Usually a combination of factors rather than one cause",
      "Difficult life events, loss, or ongoing stress",
      "Physical illness, and some medicines or substances",
      "Individual factors, including family history",
    ],
    diagnosis: [
      "There is no single test; a clinician understands depression through a supportive, confidential conversation.",
      "Validated questionnaires may be used to understand severity and track progress.",
      "A clinician may check for physical causes that can affect mood and energy.",
    ],
    treatment: {
      lifestyle: [
        "Small, regular steps help: routine, sleep, activity, and staying connected to people you trust.",
        "Being gentle with yourself and setting small, achievable goals can ease the weight of low mood.",
      ],
      medical: [
        "Talking therapies are effective for many people and are often a first option.",
        "Medication can help, particularly for moderate or severe depression; whether it is right for you is a decision to make with a qualified clinician.",
      ],
    },
    prevention: [
      "Maintaining sleep, activity and supportive relationships builds resilience.",
      "Reaching out early, when low mood first becomes persistent, often makes support more effective.",
      "Staying connected rather than withdrawing can protect against worsening.",
    ],
    urgentCare: [
      "If you have thoughts of harming yourself, or feel that life is not worth living, please reach out now — contact a qualified health professional or a trusted person, or go to the nearest health facility.",
      "You deserve support, and you do not have to face these feelings alone.",
    ],
    nigerianContext: [
      "Stigma can make depression hard to talk about; calm, clear information helps people recognise it and seek support without shame.",
      "Where specialist services are limited, primary-care clinicians and general hospitals are often a practical first point of contact.",
      "Family, faith and community can be powerful sources of support, working best alongside qualified professional care.",
    ],
    whatToDoNext: {
      mild: "If low mood is mild, gentle routines, activity, and talking to someone you trust can help — and so can reaching out early.",
      worsening: "If low mood persists for weeks or affects daily life, speaking to a clinician can open the door to effective support.",
      higherRisk: "If you feel hopeless, are withdrawing, or have any thoughts of self-harm, please reach out to a professional or trusted person now.",
      atClinic: "Ask what support and therapy are available, what might help first, and how to stay supported over time.",
      doNotDelay: "Do not delay reaching out if you feel unsafe or that life is not worth living — support is available now, and you deserve it.",
    },
    questionsForDoctor: [
      "What support or therapy could help me?",
      "What might be contributing to how I feel?",
      "Are there steps I can take that would help first?",
      "If medication is an option, what should I know about it?",
      "Where can I find ongoing support?",
    ],
    faqs: [
      {
        question: "Is depression just sadness?",
        answer:
          "No. Depression is a persistent low mood, often with loss of interest and changes in sleep, appetite and energy, that lasts for weeks and affects daily life. It is a health condition, and it is treatable.",
      },
      {
        question: "Can depression be treated?",
        answer:
          "Yes. Many people recover or improve with support, talking therapy and sometimes medication. Reaching out — to a trusted person or a clinician — is an important first step.",
      },
    ],
    sources: [
      { label: "Depression — public information", publisher: "World Health Organization", year: 2023 },
      { label: "Depression in adults — treatment and management", publisher: "National Institute for Health and Care Excellence (NICE)", year: 2022 },
    ],
    reviewer: { name: "Reviewer name (placeholder)", credentials: "MBBS, FWACPsych", specialty: "Psychiatry / Mental Health" },
    lastReviewed: "2026-05-26",
    nextReview: "2027-05-26",
  },
  {
    slug: "when-to-seek-mental-health-support",
    title: "When to Seek Mental Health Support",
    category: "prevention",
    summary:
      "Reaching out is a strength. How to recognise when support would help, and the steps to find it.",
    metaDescription:
      "How to recognise when to seek mental health support, gentle first steps, and the Nigerian context — calm, stigma-free, educational guidance.",
    specialtyCentre: "mental-behavioural-health",
    readingTimeMinutes: 6,
    urgency: "see-doctor",
    quickFacts: [
      "You do not need to be in crisis to deserve support — earlier is often easier.",
      "Consider reaching out if difficult feelings persist for weeks or affect daily life.",
      "A trusted person, a primary-care clinician, or a counsellor can all be good starting points.",
      "Seeking help is a sign of strength and self-respect, not weakness.",
      "If you ever feel unsafe, please reach out now — you do not have to manage it alone.",
    ],
    overview: [
      "Many people wonder whether what they are feeling is “enough” to seek help. A useful guide is this: if difficult feelings are persistent, distressing, or affecting your sleep, relationships, work or daily life, support can help — and you do not need to wait until things feel unbearable.",
      "Reaching out early often makes support more effective, and it is a sign of strength. This guide offers calm pointers on when and how to find support. It is educational and does not replace the care of a qualified professional.",
    ],
    diagnosis: [
      "There is no test for whether you ‘qualify’ for support — what matters is how you are feeling and coping.",
      "A clinician or counsellor can help you understand what is going on through a supportive, confidential conversation.",
    ],
    treatment: {
      lifestyle: [
        "Start by talking to someone you trust — a friend, family member, or community or faith leader.",
        "Look after the basics where you can: sleep, food, activity and connection.",
        "Consider writing down what you are experiencing, which can make it easier to explain to a clinician.",
      ],
      medical: [
        "A primary-care clinician is a practical first point of contact and can advise on next steps or refer you.",
        "Counsellors, psychologists and psychiatrists offer different kinds of support; a clinician can help you find what fits.",
      ],
    },
    prevention: [
      "Checking in with yourself regularly, and acting early when something feels off, helps prevent small struggles from growing.",
      "Building and keeping supportive relationships is protective over time.",
    ],
    urgentCare: [
      "If you feel unsafe, are thinking of harming yourself, or feel unable to keep yourself safe, please reach out now — contact a qualified health professional or a trusted person, or go to the nearest health facility.",
      "You deserve support, and reaching out is a strong and caring thing to do for yourself.",
    ],
    nigerianContext: [
      "Stigma can make people delay seeking support; understanding that mental health is health helps people reach out sooner.",
      "Where specialist services are limited, a primary-care clinician or general hospital is a reasonable and practical first step.",
      "Faith, family and community remain important sources of support, and work best alongside qualified care.",
    ],
    whatToDoNext: {
      mild: "If something feels off but manageable, talk to someone you trust and keep an eye on how you are doing.",
      worsening: "If difficult feelings persist for weeks or affect daily life, consider speaking to a clinician or counsellor.",
      higherRisk: "If you feel hopeless, are withdrawing, or have thoughts of self-harm, please reach out to a professional or trusted person now.",
      atClinic: "Ask what support is available, what might help first, and how to access ongoing care.",
      doNotDelay: "Do not delay reaching out if you feel unsafe — support is available now, and you do not have to face this alone.",
    },
    questionsForDoctor: [
      "I have been feeling this way — what support is available?",
      "What might help me first?",
      "Where can I access counselling or further care?",
      "How do I support myself in the meantime?",
      "Who can I contact if things feel worse?",
    ],
    faqs: [
      {
        question: "How do I know if I should seek help?",
        answer:
          "A good guide is whether difficult feelings are persistent, distressing, or affecting your daily life. You do not need to be in crisis to deserve support — reaching out earlier is often easier and more effective.",
      },
      {
        question: "Where do I start?",
        answer:
          "Talking to someone you trust is a good first step, as is contacting a primary-care clinician, who can advise or refer you. If you ever feel unsafe, reach out for support straight away.",
      },
    ],
    sources: [
      { label: "Mental health — when and how to seek help", publisher: "World Health Organization", year: 2023 },
      { label: "Common mental health problems — access to support", publisher: "National Institute for Health and Care Excellence (NICE)", year: 2021 },
    ],
    reviewer: { name: "Reviewer name (placeholder)", credentials: "MBBS, FWACPsych", specialty: "Psychiatry / Mental Health" },
    lastReviewed: "2026-05-26",
    nextReview: "2027-05-26",
  },
  {
    slug: "malaria-prevention",
    title: "Malaria Prevention",
    category: "prevention",
    summary:
      "The simple, effective measures that lower malaria risk — nets, environment and protecting young children and pregnancy.",
    metaDescription:
      "Practical malaria prevention: treated nets, reducing mosquito breeding, protecting children and pregnancy, and the Nigerian context — educational guidance.",
    specialtyCentre: "preventive-health",
    readingTimeMinutes: 6,
    urgency: "routine",
    quickFacts: [
      "Malaria spreads through the bite of an infected mosquito, mainly at night.",
      "Sleeping under a treated mosquito net is one of the most effective, low-cost protections.",
      "Reducing standing water around the home lowers mosquito breeding.",
      "Young children and pregnant women are at higher risk and need particular protection.",
      "Preventive measures reduce risk but do not remove it — prompt testing and treatment still matter.",
    ],
    overview: [
      "Malaria is a common and potentially serious infection spread by mosquitoes, which mostly bite at night. The good news is that much malaria is preventable with simple, affordable measures used consistently.",
      "Prevention is especially important for young children and pregnant women, who are at higher risk of severe illness. This guide explains practical steps to lower risk. It is educational and complements, not replaces, the advice of your clinic.",
    ],
    prevention: [
      "Sleep under a long-lasting insecticidal net every night, and make sure children sleep under one too.",
      "Reduce mosquito breeding by emptying or covering containers of standing water around the home.",
      "Use screens on windows and doors where possible, and consider repellents in the evening.",
      "In pregnancy, attend antenatal care, which includes recommended malaria prevention.",
      "For young children, follow the prevention and any seasonal measures advised by your health facility.",
    ],
    diagnosis: [
      "Prevention does not remove all risk, so a fever should still be tested for malaria rather than assumed.",
      "Testing before treatment ensures the right illness is treated and avoids unnecessary medication.",
    ],
    urgentCare: [
      "Seek urgent care for a high or persistent fever, especially in a young child or pregnant woman.",
      "Danger signs — drowsiness, confusion, fits, difficulty breathing, or inability to drink or feed — need emergency care.",
    ],
    nigerianContext: [
      "Malaria is one of Nigeria’s heaviest health burdens, and consistent use of treated nets is among the most effective protections.",
      "Treated nets are often available free or subsidised through clinics and campaigns — ask at your nearest facility.",
      "Self-treating every fever as malaria without testing can mask other illnesses; test before treatment where possible.",
      "Protecting children under five and pregnant women deserves particular attention, as they are most at risk of severe disease.",
    ],
    whatToDoNext: {
      mild: "Use a treated net nightly, reduce standing water, and keep up the prevention measures advised by your clinic.",
      worsening: "If a fever develops, get tested for malaria rather than assuming — and follow the full treatment if confirmed.",
      higherRisk: "If you are pregnant or caring for a young child, follow the specific prevention your health facility recommends.",
      atClinic: "Ask about treated nets, seasonal measures, and the right prevention for pregnancy and young children.",
      doNotDelay: "Do not delay for a high fever with drowsiness, confusion, fits, fast breathing, or inability to feed — seek emergency care.",
    },
    questionsForDoctor: [
      "How can my household best protect against malaria?",
      "Where can I get treated mosquito nets?",
      "What prevention is right during pregnancy?",
      "How should I protect my young children?",
      "When should a fever be tested and treated?",
    ],
    faqs: [
      {
        question: "Do mosquito nets really make a difference?",
        answer:
          "Yes. Sleeping under a long-lasting insecticidal net every night is one of the most effective and affordable ways to lower malaria risk, especially for children and pregnant women.",
      },
      {
        question: "If I take prevention seriously, can I still get malaria?",
        answer:
          "Prevention greatly lowers risk but does not remove it entirely. That is why a fever should still be tested for malaria, and treated promptly if confirmed.",
      },
    ],
    sources: [
      { label: "World Malaria Report and prevention guidance", publisher: "World Health Organization", year: 2023 },
      { label: "Malaria prevention in endemic settings", publisher: "Centers for Disease Control and Prevention", year: 2024 },
    ],
    reviewer: { name: "Reviewer name (placeholder)", credentials: "MBBS, FMCPH", specialty: "Public Health / Infectious Disease" },
    lastReviewed: "2026-05-28",
    nextReview: "2027-05-28",
  },
  {
    slug: "annual-health-check",
    title: "Annual Health Check Guide",
    category: "prevention",
    summary:
      "A practical guide to a yearly check — the numbers worth knowing and the questions worth asking.",
    metaDescription:
      "What a yearly health check can include, the numbers worth knowing, and the Nigerian context — educational guidance for staying ahead of problems.",
    specialtyCentre: "preventive-health",
    readingTimeMinutes: 6,
    urgency: "routine",
    quickFacts: [
      "A yearly check helps catch common problems early, often before symptoms appear.",
      "Useful numbers to know include blood pressure, blood sugar, weight and, where advised, cholesterol.",
      "Checks should be matched to your age, sex and risk factors, guided by a clinician.",
      "A check is a chance to ask questions and update prevention, not only to run tests.",
      "It complements, and does not replace, seeking care promptly when you feel unwell.",
    ],
    overview: [
      "An annual health check is a planned opportunity to review your health when you are well, rather than waiting for a problem. For many adults it focuses on a small number of common, important risks that are easy to measure and often silent — such as raised blood pressure or blood sugar.",
      "A good check is matched to you: your age, sex, family history and risk factors shape which tests are worthwhile. This guide explains what a check can include and how to make the most of it. It is educational and does not replace personalised advice from a clinician.",
    ],
    diagnosis: [
      "Common checks include blood pressure, blood sugar, weight or body mass index, and — where advised — cholesterol.",
      "Depending on your age and risk, a clinician may discuss other screening, such as for certain cancers, or review your vaccines.",
      "Results are interpreted together by a clinician, who considers your overall picture rather than any single number.",
    ],
    prevention: [
      "Know your numbers and how they change over time; trends are often more useful than a single reading.",
      "Use the check to update everyday habits — eating, activity, sleep, alcohol and tobacco.",
      "Keep your vaccinations and any recommended screening up to date.",
    ],
    urgentCare: [
      "A routine check is not for urgent problems.",
      "If you have a new, severe or one-sided symptom, or any danger sign, seek care promptly rather than waiting for a scheduled check.",
    ],
    nigerianContext: [
      "Many people see a clinician only when already unwell; a planned yearly check helps catch silent problems like high blood pressure earlier.",
      "Where cost is a concern, focusing first on a few high-value checks — blood pressure and blood sugar — gives a lot of benefit for little.",
      "Free or subsidised screening is offered through some clinics and campaigns; ask at your nearest facility.",
      "Bringing previous results to each check helps a clinician see how your numbers are changing over time.",
    ],
    whatToDoNext: {
      mild: "If you are well, book a simple check of your key numbers and review your habits — start with blood pressure and blood sugar.",
      worsening: "If a check finds a raised number, follow your clinician’s advice on rechecking and next steps rather than acting alone.",
      higherRisk: "If you have a family history or existing conditions, ask which extra checks are worthwhile for you and how often.",
      atClinic: "Ask what your numbers mean, what to recheck and when, and which screening or vaccines apply to you.",
      doNotDelay: "Do not delay for a new severe or one-sided symptom, or any danger sign — seek care promptly rather than waiting for a routine check.",
    },
    questionsForDoctor: [
      "Which checks are worthwhile for someone my age and history?",
      "What do my numbers mean, and what should I recheck?",
      "Which screening or vaccines apply to me?",
      "What habits would make the biggest difference for me?",
      "How often should I have a check?",
    ],
    faqs: [
      {
        question: "Does everyone need the same yearly tests?",
        answer:
          "No. A useful check is matched to your age, sex, family history and risk factors. A clinician can advise which checks are worthwhile for you, rather than running every test for everyone.",
      },
      {
        question: "I feel well — is a check still worth it?",
        answer:
          "Yes. Several important problems, such as high blood pressure, often cause no symptoms at first. A simple check of your key numbers can catch them early.",
      },
    ],
    sources: [
      { label: "Preventive health checks and screening guidance", publisher: "World Health Organization", year: 2023 },
      { label: "NHS Health Check — what it involves", publisher: "National Health Service (UK)", year: 2023 },
    ],
    reviewer: { name: "Reviewer name (placeholder)", credentials: "MBBS, FMCPH", specialty: "Public Health / Family Medicine" },
    lastReviewed: "2026-05-28",
    nextReview: "2027-05-28",
  },
];

// ────────────────────────────────────────────────────────────── query helpers

export function getAllConditions(): HealthArticle[] {
  return conditions;
}

export function getConditionSlugs(): string[] {
  return conditions.map((c) => c.slug);
}

export function getConditionBySlug(slug: string): HealthArticle | undefined {
  return conditions.find((c) => c.slug === slug);
}

export function getConditionsByCentre(centreSlug: string): HealthArticle[] {
  return conditions.filter((c) => c.specialtyCentre === centreSlug);
}
