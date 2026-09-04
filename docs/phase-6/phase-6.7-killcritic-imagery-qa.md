# Phase 6.7 — Kill-critic visual QA

**Status:** COMPLETE (audit)  
**Date:** 2026-09-04  
**Upstream:** Phase 6.6 closed after IMG-03 representation replacement  
**Scope:** Assets · engineering · composition · credibility — no new creative sourcing

---

## Executive verdict

| Area | Result |
| --- | --- |
| Assets | **PASS** (after IMG-03 corrective) |
| Engineering | **PASS** with minor notes |
| Composition | **PASS** — one optional ADJUST remains on About journey “Memorise” crop |
| Credibility | **PASS** |

**Overall:** Ready to treat imagery stream as **QA-closed** pending optional CSS-only About journey tweak. No FAIL remaining. Strategy not reopened.

---

## 1. Assets

| Check | Result | Notes |
| --- | --- | --- |
| Every configured path resolves | **PASS** | All 5 editorial + 2 portraits + 5 work files exist on disk |
| Obsolete editorial files referenced | **PASS** | No refs to `workspace-hands`, `notebook-desk`, `learning-books`, or Pexels 6986428 |
| Production editorial folder | **PASS** | Exactly five production files; no duplicate roles |
| IMG-03 representation | **PASS** | Replaced with [Pexels 5200789](https://www.pexels.com/photo/crop-african-american-schoolgirl-writing-in-diary-at-desk-5200789/); Black child writing; not camera-facing |
| Alt text useful | **PASS** | Updated Homeschool alt; others describe editorial context without false documentary claims |
| Orphan unused assets | **NOTE** | `public/assets/home/ola-olugidan-cutout.png` and `ola-olugidan-portrait.jpg` remain on disk but are unused — housekeeping, not FAIL |

### Intrinsic dimensions vs config

| Asset | File | Config | Match |
| --- | --- | --- | --- |
| Home workspace | 2400×1600 | 2400×1600 | ✓ |
| About journey | 2400×1760 | 2400×1760 | ✓ |
| Homeschool | 1600×2400 | 1600×2400 | ✓ |
| Transformation | 1536×1024 | 1536×1024 | ✓ |
| Faith | 2400×1600 | 2400×1600 | ✓ |
| Home portrait | 2000×2000 | 2000×2000 | ✓ |
| About portrait | 833×1024 | 833×1024 | ✓ |

---

## 2. Engineering

| Check | Result | Notes |
| --- | --- | --- |
| `sizes` reflects layout | **PASS** | Per-slot `sizes` in `imagery.ts` (max-width rem / vw) |
| `priority` limited | **PASS** | Only Home hero portrait is `priority={true}`; all editorial `priority: false` |
| Responsive crop rules explicit | **PASS** | Slot CSS + `objectPosition` on `EditorialFigure` |
| No container overflow | **PASS** | `max-width` role caps; `overflow: hidden` on media |
| Dark mode filters | **PASS** | No blanket brightness/grayscale/mix-blend; saturate filter removed; dark uses border/surface only |
| Typecheck | **PASS** | `npm run type-check` |
| Production build | **PASS** | `npm run build` (Next.js 16.3.1) — all routes static |

---

## 3. Composition / roles

| Slot | Role | Result | Notes |
| --- | --- | --- | --- |
| Home portrait | Hero / identity | **PASS** | Untouched; priority |
| Home workspace | Supporting | **PASS** | Bounded 36rem · 3:2; writing focal |
| About portrait | Feature / identity | **PASS** | Real 833/1024 aspect |
| About journey | Supporting | **ADJUST (optional)** | “Memorise” still readable in some crops — CSS-only further downward bias if desired; not FAIL |
| Homeschool | Supporting | **PASS** | Replacement satisfies representation; portrait crop contract retained |
| Transformation | Feature | **PASS** | After intro; light/shadow intact in light + dark samples |
| Faith | Supporting | **PASS** | Under Community section; both subjects retained |
| Work | Evidence | **PASS** | Genuine product screenshots |

Whitespace / hierarchy: editorial figures remain bounded — not full-bleed backgrounds.

---

## 4. Credibility

| Check | Result |
| --- | --- |
| Personal portraits are Ola’s | **PASS** |
| Work evidence is real | **PASS** |
| Editorial ≠ documentary of Ola’s life | **PASS** — notes in `imagery.ts` + provenance |
| Faith ≠ TNCOD people | **PASS** — placement under Community; copy constraints locked |
| Homeschool ≠ Ola’s family | **PASS** — alt/notes explicit; observational stock |

---

## 5. Build evidence

```
✓ type-check (tsc --noEmit)
✓ next build — compiled; 13 static routes including /homeschool-core, /transformation, /faith-community
```

---

## 6. Residual actions (non-blocking)

1. Optional CSS ADJUST: About journey `object-position` further down if “Memorise” still feels dominant in page context.  
2. Optional housekeeping: delete unused `public/assets/home/*` orphans.  
3. Optional: refresh Homeschool entries in `docs/phase-6/qa-screenshots/` after replacement.

None reopen sourcing for IMG-01/02/04/05.

---

## Status lock

| Phase | Status |
| --- | --- |
| 6.5 | CLOSED |
| 6.6 | CLOSED (corrective Homeschool replacement complete) |
| 6.7 | COMPLETE — imagery stream QA-closed |

**No further image acquisition unless a new FAIL appears in live visual review.**
