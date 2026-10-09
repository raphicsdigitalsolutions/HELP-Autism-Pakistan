# HELP Autism Pakistan — Photo Gallery Acceptance Audit

**Audit date:** 2026-10-09  
**Gallery page:** `photos-library.html`  
**Gallery data source:** `scripts/gallery_data.mjs`  
**Expected gallery entries:** 46

## Inventory

| Category key | Entries |
|---|---:|
| therapy | 10 |
| learning | 5 |
| training | 12 |
| vocational | 3 |
| events | 3 |
| sports | 8 |
| facilities | 3 |
| team | 2 |
| **Total** | **46** |

## Code-level checks

- The gallery data source contains 46 photo entries with IDs, category labels, image paths, captions, alt text, source-platform fields and source URLs.
- The production build runs the generator and the release verifier checks that gallery image paths exist in source and built output.
- Category filter and lightbox code is part of the shared frontend interaction script.
- Latest GitHub commit `092af832df6ea2387a4bdb7c6b3c6668f4a19c23` is deployed to Vercel with status **READY**. This confirms the build finished; it does not independently prove every image renders correctly in every browser.
- The source manifest distinguishes individual YouTube URLs from generic organisational homepage references.
- This inventory does not claim that guardian consent or legal image reuse permission has been independently proven.

## Required human sign-off before production domain cutover

1. Review all 46 images in the deployed gallery, especially identifiable children and therapy sessions.
2. Confirm the organisation has authority to publish each image and any required guardian consent is on record.
3. Replace generic homepage source references with original post/archive references where available.
4. Remove or replace any photo whose source or publication approval cannot be confirmed.
5. Manually test category filters and lightbox on mobile and desktop.

**Current disposition:** Source and asset paths are inventoried and build-checked. Individual photo provenance and guardian-consent approval still require organisational confirmation; these cannot be truthfully marked complete from source code alone.
