# Phase 6.2 — Existing asset audit

**Status:** COMPLETE  
**Scope:** Local repository `ola.olugidan.me` only (not GitHub’s single-commit snapshot).  
**Visual changes:** none.  
**Portrait file:** `public/assets/images/ola_portfolio_img.png` was **not** modified.  
**Production domain:** ignored as requested.

---

## 1. Verdict

**PASS — asset inventory is complete enough to proceed to Phase 6.3 (placement decisions).**

The local tree already matches the Phase 6.1 model:

> **Personal → editorial atmosphere → work evidence → mostly typography**

The main problems are **reference hygiene**, **declared-size mismatches**, and **stale/unused portrait files** — not a missing image system.

---

## 2. Inventory by folder

| Path | Files | Role |
| --- | --- | --- |
| `public/assets/images/` | 1 | Intended homepage personal portrait |
| `public/assets/about/` | 1 | About / legacy personal portrait |
| `public/assets/home/` | 2 | Stale homepage portrait attempts |
| `public/assets/editorial/` | 3 | Licensed editorial atmosphere |
| `public/assets/work/` | 5 | Work evidence screenshots |
| `public/assets/brand/` | 1 | O mark |
| `public/assets/favicon/` | 6 | Icons + webmanifest |

**Total:** 19 files under `public/assets/`.

No `resume/`, no `no_image.png`, no `app_logo.png` in this local tree.

---

## 3. File-by-file technical sheet

### Personal / portrait

| File | Ext claims | Actual format | Size | Dimensions | Alpha | Corner | Referenced? |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `images/ola_portfolio_img.png` | png | png | 3.2 MB | **2000×2000** | **yes** | transparent | **YES — homepage hero** |
| `about/ola-olugidan.png` | png | **jpeg** | 131 KB | **833×1024** | no | grey studio | **YES — About + legacy portfolio** |
| `home/ola-olugidan-cutout.png` | png | png | 903 KB | 794×1000 | yes | transparent | **NO (orphaned)** |
| `home/ola-olugidan-portrait.jpg` | jpg | jpeg | 109 KB | 1024×1024 | no | **solid black** | **NO (orphaned)** |

### Editorial

| File | Declared in `imagery.ts` | Actual | Aspect | License metadata |
| --- | --- | --- | --- | --- |
| `editorial/workspace-hands.jpg` | 1600×1067 | **1600×2400** | 2:3 portrait | Pexels (in config) |
| `editorial/notebook-desk.jpg` | 1600×1067 | **1800×1200** | 3:2 landscape | Unsplash (in config) |
| `editorial/learning-books.jpg` | 1600×1067 | **1600×2400** | 2:3 portrait | Pexels (in config) |

### Work evidence

| File | Ext claims | Actual format | Dimensions | Referenced |
| --- | --- | --- | --- | --- |
| `work/posflyt.png` | png | **jpeg** | 1024×462 | imagery + portfolio |
| `work/vessa.png` | png | **jpeg** | 1024×460 | imagery + portfolio |
| `work/viix-solutions.png` | png | **jpeg** | 1024×450 | imagery + portfolio |
| `work/cdr-technical.png` | png | **jpeg** | 1024×454 | imagery + portfolio |
| `work/sisonke-africa.png` | png | **jpeg** | 1024×461 | imagery + portfolio |

### Brand / favicon

| File | Notes |
| --- | --- |
| `brand/o-mark.svg` | Live (layout icons + wordmark) |
| `favicon/*` | Live via `layout.tsx` / webmanifest |

---

## 4. Live reference map (config → consumer)

| Asset | Config key / path | Used by |
| --- | --- | --- |
| `images/ola_portfolio_img.png` | `homepage.hero.portraitSrc` | `PersonalHero` → `PortraitComposition`; OG/JSON-LD via homepage |
| `about/ola-olugidan.png` | `aboutPage.portrait.src` | `AboutView` → `PortraitBlock` |
| `about/ola-olugidan.png` | `person.portraitSrc` (`portfolio.ts`) | Legacy `sections/Hero`, `sections/About` (**not mounted by current App Router pages**) |
| `editorial/workspace-hands.jpg` | `imagery.homeWorkspace` | `WhoIsOla` |
| `editorial/notebook-desk.jpg` | `imagery.aboutWorkspace` | `AboutView` journey |
| `editorial/learning-books.jpg` | `imagery.homeschoolMaterials` | `HomeschoolCoreView` |
| `work/*.png` | `workEvidenceVisuals` + `portfolio.projects[].imageSrc` | Work page / WorkProof / legacy SelectedWork |

**Not referenced by any `src/` string found:**

- `home/ola-olugidan-cutout.png`
- `home/ola-olugidan-portrait.jpg`

---

## 5. Portrait reference resolution (without touching the PNG)

### Intended baseline (local, post Phase 6.1 / user decision)

| Role | Intended file | Status |
| --- | --- | --- |
| Homepage hero | `images/ola_portfolio_img.png` | **Correct in local `homepage.ts`** |
| About personal portrait | TBD in Phase 6.3 | Currently still `about/ola-olugidan.png` (studio rectangular) |
| GitHub remote | still may show cutout path | Local ahead of remote |

### Concrete issues to fix later (config only)

1. **About dimension mismatch (bug):**  
   `aboutPage.portrait` uses `src: '/assets/about/ola-olugidan.png'` but  
   `width` / `height` are copied from `homepage.hero` → **2000×2000**.  
   Actual file is **833×1024**. This harms layout aspect reservation.

2. **Two personal likenesses in production paths:**  
   - Circular designed PNG (homepage)  
   - Studio rectangular JPEG-in-.png (About)  
   Phase 6.3 must decide: unify to one likeness, or keep two treatments deliberately.

3. **Orphaned homepage experiments** under `public/assets/home/` should be deleted or archived after Phase 6.3 confirms the intended portrait — **do not delete yet without approval**.

4. **Legacy `portfolio.ts` portrait** still points at About studio file; safe while `sections/*` are unused by App Router, but it is debt.

---

## 6. Declared vs actual dimensions (EditorialFigure)

`imagery.ts` claims **1600×1067** for all three editorial assets.

| Key | Declared | Actual | Risk |
| --- | --- | --- | --- |
| `homeWorkspace` | 1600×1067 landscape | 1600×2400 portrait | Wrong aspect reservation / crop |
| `aboutWorkspace` | 1600×1067 | 1800×1200 | Mild mismatch |
| `homeschoolMaterials` | 1600×1067 landscape | 1600×2400 portrait | Wrong aspect reservation / crop |

**Recommendation for a later config-only fix:** set `width`/`height` to actual pixel dimensions (or true display aspect). Do not re-encode files in Phase 6.2.

---

## 7. Format / naming hygiene

| Issue | Detail | Severity |
| --- | --- | --- |
| Misleading extension | `about/ola-olugidan.png` and all `work/*.png` are **JPEG payloads** | P2 |
| Large hero PNG | `ola_portfolio_img.png` ≈ 3.2 MB | P2 performance (Phase 6.6 / imagery QA) — **do not recompress in this phase without approval** |
| Black-background JPG leftover | `home/ola-olugidan-portrait.jpg` | P3 unused |
| Old cutout leftover | `home/ola-olugidan-cutout.png` | P3 unused |

---

## 8. Role classification (for Phase 6.3)

### PERSONAL — keep / decide

| Asset | Role | Phase 6.2 note |
| --- | --- | --- |
| `ola_portfolio_img.png` | Homepage hero likeness | Anchor; transparent PNG; leave untouched |
| `about/ola-olugidan.png` | About portrait | Studio; different crop/treatment; decide unify vs dual |

### EDITORIAL — review quality in 6.3

| Asset | Slot | Note |
| --- | --- | --- |
| `workspace-hands.jpg` | Home “Who is Ola” | Stock / atmospheric; role valid; quality REVIEW |
| `notebook-desk.jpg` | About journey | Stock; role valid; quality REVIEW |
| `learning-books.jpg` | Homeschool learning | Stock; role valid; quality REVIEW |

### EVIDENCE — refine, do not replace with lifestyle photos

| Asset | Project |
| --- | --- |
| `posflyt.png` | POSflyt |
| `vessa.png` | VESSA |
| `viix-solutions.png` | VIIX |
| `cdr-technical.png` | CDR |
| `sisonke-africa.png` | Sisonke |

### NONE / no asset needed yet

Transformation, Faith, Thinking, Connect — no dedicated files (matches Phase 6.1).

---

## 9. What Phase 6.2 is **not** doing

- No new photography sourced  
- No stock replacement  
- No redesign of page layouts  
- No edits to `ola_portfolio_img.png`  
- No deletion of orphaned files yet (flagged only)  
- No domain / SEO / OG image production  

---

## 10. Recommended Phase 6.3 decisions (placement)

Carry forward from Phase 6.1 + this audit:

1. Confirm **homepage hero** remains `ola_portfolio_img.png`.  
2. Decide **About portrait**: keep studio, switch to same circular PNG, or a third approved likeness.  
3. For each existing editorial slot: **KEEP / REPLACE / REMOVE** (role first, file second).  
4. For work evidence: **KEEP / REPLACE screenshot / ADD secondary evidence** — never invent lifestyle stand-ins.  
5. Decide whether Transformation / Faith get **zero or one** new editorial insertion.  
6. Thinking / Connect: remain image-free unless a post-level optional field is designed later.  
7. Config cleanup batch (after decisions): correct About width/height; sync or retire legacy `portfolio.ts` portrait; delete `home/` orphans; correct editorial declared sizes; optionally rename mislabeled JPEG-as-PNG files.

---

## 11. Checklist for Phase 6.3 kickoff

- [x] `public/assets/` inventoried locally  
- [x] Live vs orphaned assets mapped  
- [x] Portrait path discrepancy documented (local homepage correct)  
- [x] Editorial + evidence systems confirmed  
- [x] Dimension / format mismatches listed  
- [ ] Creative KEEP/REPLACE/NONE matrix (Phase 6.3)  
- [ ] Config-only cleanup PR after decisions  

---

## 12. Phase 6.2 status

| Gate | Result |
| --- | --- |
| Existing asset audit | **PASS** |
| Portrait file integrity | **UNTOUCHED** (`ola_portfolio_img.png`) |
| Ready for Phase 6.3 placement architecture | **YES** |
