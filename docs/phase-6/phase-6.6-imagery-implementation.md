# Phase 6.6 — Responsive image engineering specification

**Status:** CLOSED — corrective Homeschool replacement done; visual QA in 6.7  
**Nature:** Engineering specification (not creative selection)  
**Upstream:** Phase 6.5 complete · assets in `public/assets/editorial/`  
**Exit:** asset → component → responsive crop → loading → dark mode → hierarchy  
**Screenshots:** [`docs/phase-6/qa-screenshots/`](./qa-screenshots/README.md)  
**Corrective:** [`phase-6.6-homeschool-replacement.md`](./phase-6.6-homeschool-replacement.md)  
**Kill-critic:** [`phase-6.7-killcritic-imagery-qa.md`](./phase-6.7-killcritic-imagery-qa.md)

---

## Governing distinction

> **Intrinsic size ≠ display size.**

Do not create manual 400/800/1200/1600 copies unless art direction requires it. Use `next/image` + accurate `sizes`.

No editorial photograph becomes a full-screen background merely because viewport space exists.

---

## Layout roles

| Role | Behaviour |
| --- | --- |
| Hero | Large, composition-led, viewport-constrained |
| Feature | Prominent but bounded |
| Supporting | Secondary visual, moderate footprint |
| Detail | Small editorial punctuation |
| Evidence | Legibility determines size |
| Background | Exceptional only |

### Current assignments

| Asset | Layout role | Max display (desktop) | Priority |
| --- | --- | --- | --- |
| Home portrait | Hero / identity | Hero stage (~34vw) | **yes** |
| Home workspace | Supporting | 36rem · 3:2 | no |
| About portrait | Feature / identity | 28rem · **833/1024** | no |
| About journey | Supporting | 34rem · 4:3 | no |
| Work screenshots | Evidence | 44rem | no |
| Homeschool learning | Supporting | 28rem · 2:3 (mobile 4:5) | no |
| Transformation editorial | Feature | 40rem · 3:2 | no |
| Faith conversation | Supporting | 40rem · 3:2 | no |

Config source of truth: `src/config/imagery.ts` (`layoutRole`, `sizes`, `objectPosition`, `priority`).

---

## Per-slot engineering contracts

### Home workspace (`IMG-01`)

- Landscape supporting — not competing with hero portrait  
- Focal: writing / hands; tech secondary  
- `object-position: 48% 40%` (mobile `45% 38%`)  
- No full-bleed  

### About portrait

- Intrinsic **833 × 1024** — `aspect-ratio: 833 / 1024`  
- Do not inherit Home 1:1 square assumptions  

### About journey (`IMG-02`)

- Supporting interruption, not productivity hero  
- Crop biased down (`52% 58%`) so **“Memorise”** is not dominant  

### Homeschool (`IMG-03`)

- Desktop: learning-in-use context  
- Mobile: **hands + writing + material** must remain (4:5 cover)  
- Copy context prevents documentary misread  

### Transformation (`IMG-04`)

- After intro content — visual pause  
- Feature scale; preserve light/shadow; no stock replacement for crop tweaks  

### Faith (`IMG-05`)

- Under **Community** section only  
- Both subjects in conversational relationship  
- Must not read as TNCOD documentation  

---

## Dark mode

Default: **real image → unchanged**.

Allowed: border / surface only.  
Forbidden as blanket rules: brightness/grayscale/mix-blend filters on portfolio photos.

---

## Loading

| Priority | Assets |
| --- | --- |
| High | Home identity portrait (above-fold) |
| Deferred | Journey, Homeschool, Transformation, Faith, workspace, evidence |

---

## Whitespace

Image ↔ text ↔ section padding ↔ next section is part of composition.  
First response to “too small/large” is spacing/hierarchy — not blindly widening the image.

---

## QA verdicts (inspector)

**PASS** — no change  
**ADJUST** — CSS/layout only  
**FAIL** — asset no longer satisfies role (only FAIL reopens sourcing)

Screenshots for inspection: `docs/phase-6/qa-screenshots/` (desktop + mobile).
