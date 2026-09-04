# Phase 6.6 — QA screenshots

**Captured:** 2026-09-04  
**Method:** Playwright (Edge) against `http://localhost:4028`  
**Script:** `scripts/capture-imagery-qa.mjs`  
**Themes:** light (primary) + Transformation dark samples  

Re-run:

```bash
node scripts/capture-imagery-qa.mjs
```

## Viewport set

| ID | Size |
| --- | --- |
| desktop | 1440 × 900 |
| tablet | 768 × 1024 |
| mobile | 390 × 844 |

## Matrix files

| Slot | Desktop | Tablet | Mobile | Dark sample |
| --- | --- | --- | --- | --- |
| Home hero portrait | `desktop-home-hero.png` | `tablet-home-hero.png` | `mobile-home-hero.png` | — |
| Home workspace | `desktop-home-workspace.png` | `tablet-home-workspace.png` | `mobile-home-workspace.png` | — |
| About portrait | `desktop-about-portrait.png` | `tablet-about-portrait.png` | `mobile-about-portrait.png` | — |
| About journey | `desktop-about-journey.png` | `tablet-about-journey.png` | `mobile-about-journey.png` | — |
| Homeschool | `desktop-homeschool.png` | `tablet-homeschool.png` | `mobile-homeschool.png` | — |
| Transformation | `desktop-transformation.png` | `tablet-transformation.png` | `mobile-transformation.png` | `*-transformation-dark.png` |
| Faith | `desktop-faith.png` | `tablet-faith.png` | `mobile-faith.png` | — |

## Inspector verdicts (fill in)

Use only: **PASS** · **ADJUST** · **FAIL**

| Page | Desktop | Tablet | Mobile | Crop | Scale | Focal | Dark |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Home workspace | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |
| About portrait | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |
| About journey | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |
| Homeschool | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |
| Transformation | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |
| Faith | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |

**FAIL** alone reopens sourcing.
