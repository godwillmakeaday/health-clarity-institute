# Health Clarity Public Health Literacy & Partnership Desk Update

This ZIP adds a public-facing institutional partnership layer for Health Clarity Institute.

## New routes

- `/public-health-literacy`
- `/concept-brief`
- `/government-health-partnerships`
- `/hospital-partnerships`
- `/community-health-programmes`

The route files are mirrored in both `app/` and `src/app/` because this project has previously had both route trees present during deployment.

## Included component

- `components/PublicHealthPartnershipDeskSection.tsx`
- `src/components/PublicHealthPartnershipDeskSection.tsx`

This component can be manually imported into the homepage later if desired.

## Termux install

```bash
cd ~/projects/health-clarity-institute
unzip -o /sdcard/Download/health-clarity-partnership-desk-update.zip
node scripts/health-clarity-partnership-route-audit.mjs

git status
git add app src/app components src/components scripts/health-clarity-partnership-route-audit.mjs README-HEALTH-CLARITY-PARTNERSHIP-DESK.md
git commit -m "Add Public Health Literacy and Partnership Desk"
git pull --rebase origin main
git push origin main
```

After Vercel is Ready, test the working deployment URL first, then promote if needed:

```bash
vercel promote https://YOUR-WORKING-RANDOM-DEPLOYMENT-URL.vercel.app --yes
```

## Test routes

- https://health-clarity-institute.vercel.app/public-health-literacy
- https://health-clarity-institute.vercel.app/concept-brief
- https://health-clarity-institute.vercel.app/government-health-partnerships
- https://health-clarity-institute.vercel.app/hospital-partnerships
- https://health-clarity-institute.vercel.app/community-health-programmes

## Notes

- No backend added.
- No external APIs added.
- No environment variables added.
- No fake partners, fake doctors, fake ministries, or fake endorsements included.
- This update uses public-interest, educational, institutional language.
