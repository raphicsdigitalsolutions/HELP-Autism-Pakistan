# HELP Autism Pakistan — Photo Gallery Acceptance Audit

**Audit date:** 2026-10-09  
**Gallery page:** `photos-library.html`  
**Gallery data source:** `scripts/gallery_data.mjs`  
**Expected gallery entries:** 46

## Inventory

| Category key | Entries |
|---|---:|
|  | 46 |
| **Total** | **46** |

## Code-level checks

- Gallery entries have IDs, category labels, image paths, captions, alt text, source-platform fields, and source URLs in the data source.
- The production build runs the generator and the release verifier checks that all referenced gallery image paths exist in both source and built output.
- Category filter and lightbox code is part of the shared frontend interaction script.
- This inventory does not claim that guardian consent or legal image reuse permission has been independently proven.

## Required human sign-off before production domain cutover

1. Review all 46 images in the actual deployed gallery, especially identifiable children and therapy sessions.
2. Confirm the organisation has authority to publish each image and any required guardian consent is on record.
3. Confirm generic homepage source references against original social posts/clinical archive records; add direct post links where available.
4. Remove or replace any photo whose source or publication approval cannot be confirmed.
5. Test category filters and lightbox at mobile and desktop widths after the Vercel deployment is ready.

**Current disposition:** Repository metadata is inventoried. Individual image consent and provenance require organisational confirmation; this cannot be truthfully marked complete from source code alone.
