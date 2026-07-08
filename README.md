# Health Clarity Institute — Authority-First Healthcare Platform

A premium, static Next.js website positioning Health Clarity Institute as a public health clarity, patient-navigation education, medical-record awareness, healthcare-literacy, and future institution platform for Nigeria and Africa.

## Strategic Positioning

Health Clarity Institute is not a hospital, clinic, telemedicine provider, doctor-booking platform, emergency service, or treatment centre. It is an education-first authority platform building the knowledge, trust, records-awareness, and patient-navigation foundation from which future licensed healthcare layers may grow.

Core doctrine:

> Build authority first. Build the institution later.

## Included Routes

- `/` — Home
- `/about` — About
- `/health-guides` — Health Guides / Knowledge Hubs
- `/hospital-navigation` — Hospital Navigation Desk
- `/medical-records-awareness` — Medical Records Awareness
- `/patient-rights` — Patient Rights and Medical Law Awareness
- `/nhia-guide` — Health Insurance and NHIA Guide
- `/authority-first-healthcare-model` — Authority-First Healthcare Model
- `/future-institution-roadmap` — Future Institution Roadmap
- `/editorial-policy` — Editorial Policy
- `/medical-disclaimer` — Medical Disclaimer
- `/privacy-policy` — Privacy Policy
- `/source-policy` — Source Policy
- `/correction-policy` — Correction Policy
- `/professional-collaboration-policy` — Professional Collaboration Policy
- `/contact` — Contact / Partnership
- `/clarity-institution-model` — Legacy doctrine route pointing to the new model
- `/for-partners` — Legacy partner route pointing to Contact / Partnership

## Deployment Through GitHub and Vercel

```bash
npm install
npm run build
```

The build script uses Webpack:

```json
"build": "next build --webpack"
```

This is intentional because Turbopack may fail on Android/Termux.

Then push to GitHub:

```bash
git init
git add .
git commit -m "Upgrade Health Clarity Institute authority platform"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/health-clarity-institute.git
git push -u origin main
```

Then import the GitHub repository in Vercel.

## Before Launch

Replace the placeholder email address:

```txt
hello@healthclarityinstitute.org
```

Review source links, policies, and medical disclaimer language before public launch.
