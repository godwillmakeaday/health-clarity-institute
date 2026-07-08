# Codex Prompt: Deepen Conditions A–Z and Specialist Centres

You are working on the existing Health Clarity Institute website.

Do not rebuild the site.
Do not replace the homepage.
Do not change the core design system.
Do not remove existing routes, pages, health library content, navigation, footer links, components, data files, or institutional sections.

The site is already deployed and working. Preserve the existing Health Clarity Institute identity, design language, routing structure, and ethical medical boundaries.

## Current strategic direction

Health Clarity Institute should move from being only a health library / A–Z directory into a deeper authority-first healthcare knowledge institution.

Core doctrine:

**Health Clarity must move from listing health terms to organizing health journeys.**

A condition should not feel like only a dictionary entry. Important conditions should become deep “Clarity Guides” that help patients, families, schools, churches, employers, and communities understand symptoms, warning signs, hospital preparation, tests, questions to ask licensed professionals, records to keep, prevention, Nigerian context, and when to seek urgent care.

## Important existing architecture to preserve

Preserve and keep working:

- Home
- Health Library
- Conditions A–Z
- Symptoms A–Z
- Specialist Centres
- Patient Rights
- Nigerian Context
- Access Infrastructure Desk
- Health Clarity Watch
- Footer and menu navigation

## Before editing

Inspect the existing project structure, especially:

- app/
- app/conditions/
- app/conditions/[slug] if it exists
- app/centres/
- app/centres/[slug] if it exists
- lib/
- data/
- components/
- existing condition data files
- existing centre data files
- existing reusable UI components

## Main objective

Deepen the Conditions A–Z and Specialist Centres architecture without replacing the website.

Do this as a focused architectural upgrade:

1. Improve the condition guide model/template.
2. Add richer content for selected anchor conditions.
3. Connect condition pages to relevant centres, access infrastructure, patient-rights resources, records-awareness themes, and Health Watch where appropriate.
4. Preserve existing pages and links.

Do not manually create hundreds of static pages if the site already supports data-driven dynamic routes. Prefer improving the existing condition data structure and rendering template.

If the project has dynamic routes such as:

- app/conditions/[slug]/page.tsx
- or data-driven condition rendering

use that existing pattern.

If the project currently has simpler condition pages, upgrade the template carefully so each major condition page can display richer fields.

## Add or support these fields for deep condition pages where appropriate

- title
- slug
- summary
- plainLanguageOverview
- whyItMatters
- commonSymptoms
- warningSigns
- whenToSeekUrgentCare
- hospitalVisitPreparation
- questionsToAskLicensedProfessional
- testsAndInvestigationsToUnderstand
- recordsToKeep
- preventionAndSelfCareEducation
- familyAndCommunityContext
- nigerianContext
- relatedSymptoms
- relatedTests
- relatedCentres
- relatedHealthWatch
- relatedAccessInfrastructure
- educationalDisclaimer

## Medical and ethical restrictions

Do not make clinical promises.
Do not say Health Clarity diagnoses, treats, prescribes, or replaces licensed professionals.
Do not create appointment booking.
Do not create login.
Do not collect patient data.
Do not create fake doctors or fake medical reviewers.
Do not create emergency-response functionality.

Every condition guide should clearly say:

> This guide is for health education and hospital-visit preparation only. It is not a diagnosis, prescription, treatment plan, emergency service, or substitute for care from a qualified health professional.

## Anchor guides to deepen first

Create or upgrade deep guide content for these 12 priority topics, using existing slugs where possible:

1. Malaria
2. Hypertension
3. Diabetes
4. Asthma
5. Typhoid fever
6. Pneumonia
7. Peptic ulcer disease / ulcer awareness
8. Pregnancy and antenatal care
9. Child fever
10. Stroke warning signs
11. Kidney disease awareness
12. Mental health distress awareness

If some of these already exist, improve them instead of duplicating them.
If the site uses different slugs, preserve existing slugs and naming conventions.
If adding new slugs, use clean lowercase kebab-case slugs.

## Each anchor guide should include

### A. Overview
Explain the topic in plain language.

### B. Why it matters
Explain why families should understand it.

### C. Common symptoms
List common symptoms carefully without suggesting self-diagnosis.

### D. Warning signs
List signs that should prompt urgent professional attention.

### E. Hospital visit preparation
Explain what to write down or carry before going to hospital:

- symptom timeline
- medicines already taken
- previous test results
- allergy history
- current prescriptions
- previous diagnosis notes where available
- pregnancy status where relevant
- child age and weight where relevant

### F. Questions to ask a licensed professional
Create practical questions patients or families can ask doctors, nurses, pharmacists, or other licensed health professionals.

### G. Tests and investigations to understand
Explain common tests in educational terms only.
Do not tell users to demand tests or self-interpret results.

### H. Records to keep
Mention relevant records such as:

- test results
- prescriptions
- discharge summaries
- referral letters
- scan reports
- chronic disease logs
- blood pressure records
- blood sugar records
- antenatal cards
- immunization records

### I. Prevention and care education
Give cautious general education around prevention, adherence, follow-up, and family awareness.

### J. Nigerian/African context
Explain the practical realities of healthcare access in Nigeria and Africa:

- delays
- cost concerns
- pharmacy-first behaviour
- lost records
- referrals
- diagnostics confusion
- family decision-making
- rural and urban access differences

Keep it respectful and not alarmist.

### K. Related pathways
Link the guide to relevant existing pages such as:

- Specialist Centres
- Access Infrastructure Desk
- Health Clarity Watch
- Patient Rights
- Nigerian Health Context
- Medical Records or records-awareness pages if they exist

## Specialist Centres upgrade

Where possible, make Centres act like parent hubs.

Examples:

- Infectious Disease / Fever-related centre should connect to malaria, typhoid, pneumonia, fever guides.
- Heart & Blood Pressure centre should connect to hypertension and stroke warning signs.
- Diabetes & Metabolic Health centre should connect to diabetes and kidney disease awareness.
- Maternal Health centre should connect to pregnancy and antenatal care.
- Child Health centre should connect to child fever.
- Respiratory Health centre should connect to asthma and pneumonia.
- Mental Health centre should connect to mental health distress awareness.

If these centres already exist, add related guide links to them.
If some centres do not exist, do not create too many new centres at once. Only add what is necessary and consistent with the current architecture.

## Homepage

Do not replace the homepage.

If appropriate and easy, add a small section titled:

**Featured Clarity Guides**

Include cards or links for:

- Malaria
- Hypertension
- Diabetes
- Asthma
- Child Fever
- Pregnancy and Antenatal Care

The section should feel institutional and calm, not like a startup feature grid.

If homepage structure is complex or risky, skip homepage changes and focus on condition pages/data.

## Navigation

Do not overcrowd the main menu.
Keep existing navigation working.
Do not remove:

- Home
- Health Library
- Conditions A–Z
- Symptoms A–Z
- Specialist Centres
- Patient Rights
- Nigerian Context
- Access Infrastructure
- Health Watch

## Design

Use the existing Health Clarity Institute design system.
Use existing typography, cards, spacing, colors, container components, and page layout patterns.
Do not introduce a new visual identity.

## Technical requirements

- Preserve current framework.
- Preserve current styling approach.
- Use existing components where possible.
- Keep the change focused.
- Avoid massive rewrites.
- Avoid unnecessary dependencies.
- Ensure TypeScript passes.
- Ensure the build passes.
- No backend.
- No database.
- No forms collecting sensitive health data.
- No login.
- No appointment booking.

## Final result

The site should begin to feel like a true healthcare knowledge institution, where major conditions are not only listed but organized into practical patient-understanding journeys.

The Conditions A–Z should remain the index.
The deep condition pages should become the authority layer.
The Specialist Centres should become parent hubs.
Access Infrastructure should support preparation, navigation, and records-awareness.
Health Watch should support updates and system observations.

Make the smallest safe set of changes needed to achieve this direction.
