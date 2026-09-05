# Phase 7.0 — Post-launch typography & homepage refinement

**Date:** 2026-09-05  
**Scope:** Paragraph spacing audit + homepage BUILD introduction only. No Phase 6 reopen. No general redesign.

---

## Paragraph-spacing issue identified

**Verdict: concentrated, not a single global slash.**

1. **Stacking bug (primary)** — `.section-lede` used `margin-bottom: 1.5rem` and `.section-intro` used `margin-bottom: 32px`. Where a body paragraph lived inside the intro header and another followed as a sibling (e.g. Transformation meaning), gaps stacked to ~56px between related paragraphs.
2. **Generous lede rhythm** — Standalone consecutive `.section-lede` blocks used 1.5rem (24px) between paragraphs; tightened to `var(--space-16)` (16px) for a denser editorial read without harming readability (`body` line-height remains 1.7).
3. **About passages** — Each About body paragraph sits in its own `.section-block`, so full section padding (`5.5rem` / `clamp(5rem–9rem)`) ran between consecutive prose blocks. That looked like “paragraph spacing” but was section padding. Tightened only `.about-passage` padding.

Not changed globally: `--space-section`, hero grid, contribution rows, work evidence gaps.

---

## Implementation approach

| Change | Why |
|--------|-----|
| `.section-lede` bottom → `var(--space-16)` | Tighter consecutive paragraph rhythm |
| `.section-intro > .section-lede:last-child { margin-bottom: 0 }` + slightly reduced intro margin / `:has()` override | Stop intro+lede stack |
| `.section-heading + .section-lede { margin-top: var(--space-12) }` | Keep heading→body intentional, not flush or airy |
| `.about-passage.section-block` padding → 32px / 48px | About-only; leave other sections alone |
| Hero: `heroSupport` + two-paragraph markup | Expand BUILD intro without redesigning hero |
| Hero spacing: intro group `space-24` before rooms; 12px between lead and support | Absorb extra copy without blowing vertical rhythm |

---

## Affected files

- `src/styles/tailwind.css` — spacing fixes
- `src/config/homepage.ts` — `home.heroSupport` copy
- `src/components/home/PersonalHero.tsx` — render lead + support
- `docs/phase-7/phase-7.0-post-launch-typography-homepage-refinement.md` — this report

---

## Before / after reasoning

**Before:** Single hero sentence under BUILD; paragraph gaps inflated where intro margin stacked with lede margin; About chapters felt like isolated slabs.

**After:** BUILD opens with problem-first lead plus context on technology / business / people → problem, context, useful outcome; paragraph rhythm tighter where the audit found stacking or About-specific section padding; hero still name → portrait → BUILD → statement → rooms → WhoIsOla.

---

## Final homepage copy (BUILD opening)

**BUILD**

> I tend to start with the problem before the technology.
>
> My work often sits at the intersection of technology, business and people. Before choosing a platform or building a solution, I start by understanding the problem, the context around it, and what a useful outcome should actually look like.

Flows into WhoIsOla (identity / VIIX) and later BUILD chapter (VIIX practical work). No new unsupported claims.

---

## Responsive validation

| Viewport | Check |
|----------|--------|
| Mobile | Longer support wraps within `max-width: 32rem`; rooms still below intro; no hero redesign |
| Tablet | Same single-column hero stack; intro→rooms gap reduced vs prior `space-32` under one line |
| Desktop | Two-column grid unchanged (`copy` / `context` / `photo`); extra paragraph stays in context column |

Light/dark: spacing and copy only; tokens unchanged.

---

## Validation results

| Step | Result |
|------|--------|
| `npm run type-check` | PASS (`tsc --noEmit`) |
| `npm run build` | PASS (Next.js 16.3.1; all routes static) |
| Commit / push `main` | See deployment section below |
| Production `https://ola-olugidan-me.vercel.app/` | Verified after GitHub → Vercel deploy |

---

## Out of scope (not touched)

Phase 6 imagery, colour tokens, IA, specialist page copy (except inherited spacing from shared `.section-lede` / `.section-intro`), custom domain.
