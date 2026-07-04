# Health Clarity Institute — Resources & Partner Brief Update

This update adds the institutional resources and partner brief layer for Health Clarity Institute.

## Routes added

- `/resources`
- `/partner-brief`

The route files are mirrored in both `app/` and `src/app/` to avoid route-folder confusion.

## Files included

- `app/resources/page.tsx`
- `app/partner-brief/page.tsx`
- `src/app/resources/page.tsx`
- `src/app/partner-brief/page.tsx`
- `components/ResourcesPartnerBriefSection.tsx`
- `src/components/ResourcesPartnerBriefSection.tsx`
- `scripts/health-clarity-resources-route-audit.mjs`

## Install in Termux

```bash
cd ~/projects/health-clarity-institute
unzip -o /sdcard/Download/health-clarity-resources-partner-brief-update.zip
node scripts/health-clarity-resources-route-audit.mjs
```

## Commit and push

```bash
git status
git add app src/app components src/components scripts/health-clarity-resources-route-audit.mjs README-HEALTH-CLARITY-RESOURCES-PARTNER-BRIEF.md
git commit -m "Add Resources and Partner Brief desk"
git pull --rebase origin main
git push origin main
```

After Vercel shows Ready, test the random deployment URL first, then promote it if needed:

```bash
vercel promote https://YOUR-WORKING-RANDOM-DEPLOYMENT-URL.vercel.app --yes
```

## Test production routes

- `https://health-clarity-institute.vercel.app/resources`
- `https://health-clarity-institute.vercel.app/partner-brief`
- `https://health-clarity-institute.vercel.app/public-health-literacy`
- `https://health-clarity-institute.vercel.app/concept-brief`
- `https://health-clarity-institute.vercel.app/for-partners`
- `https://health-clarity-institute.vercel.app/clarity-centres`
- `https://health-clarity-institute.vercel.app/roadmap`
- `https://health-clarity-institute.vercel.app/disclaimer`

## Notes

This update does not create a real PDF yet. It creates the web structure and placeholders for downloadable PDFs.
