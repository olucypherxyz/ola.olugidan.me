# Phase 6.2-A — Foundation report

**Status:** PASS (with documented contrast variant)  
**Date:** 2026-08-20  
**Scope:** Design tokens and layout primitives only. No homepage redesign, no new routes, no invented copy, no carousel, no form.

---

## What changed

| File | Change |
| --- | --- |
| `docs/phase-6/phase-6-rescope-decision.md` | Formal re-scope record |
| `docs/phase-6/archive/portfolio/README.md` | Archive policy |
| `src/styles/tailwind.css` | Locked colour, type, space, radius, motion, gutter, grid, type classes |
| `tailwind.config.js` | Semantic colour / radius / motion / named spacing tokens (numeric Tailwind spacing **not** overridden) |
| `src/app/layout.tsx` | Light `themeColor` `#F7F5F2` |
| `src/components/ThemeToggle.tsx` | Matching theme-color write |
| `public/assets/favicon/site.webmanifest` | theme/background `#F7F5F2` |
| `public/assets/resume/resume.pdf` | **Removed from production tree** (foreign CV) |

Existing portfolio sections still render. They now sit on the warm paper palette. That is token application, not IA replacement.

---

## Tokens implemented

### Colour (locked)

Light: background `#F7F5F2`, surface `#FFFFFF`, surface-soft `#EFEBE6`, text `#18171A`, text-secondary `#5F5B63`, text-muted `#88838C`, border `#DDD8D2`, accent `#B79CED`, accent-soft `#E8DFF8`, accent-strong `#795FAF`.

Dark: background `#111014`, surface `#1A181D`, surface-soft `#242128`, text `#F5F2F7`, text-secondary `#C4BEC9`, text-muted `#918A96`, border `#353039`, accent `#B79CED`, accent-soft `#302A3A`, accent-light `#D6C6F5`.

Compatibility aliases (`--color-bg`, `--color-text-primary`, etc.) keep current components working.

### Contrast

Locked light **text-muted `#88838C` on `#F7F5F2` is ~3.4:1** — fails WCAG AA for small text.

**Semantic variant:** `--color-text-muted-aa` / `--color-text-tertiary` (light) use `#5F5B63` (~5.8:1). Small labels (eyebrows) use the AA variant. Locked muted remains available for large/decorative use only.

Do not use accent as small body text on paper without a separate AA check.

### Typography

Semantic classes: `.type-display`, `.type-heading-xl`, `.type-heading-lg`, `.type-heading-md`, `.type-heading-sm`, `.type-body-lg`, `.type-body`, `.type-body-sm`, `.type-label`, `.type-metadata`.

Families unchanged: Instrument Serif, Manrope, IBM Plex Mono.

Existing `.hero-name` / `.section-heading` sizes **not** rewritten (page composition is 6.2-C).

### Layout

- Container `1280px` (within 1200–1320)
- Mobile gutter `24px`; from 768px `clamp(24px, 5vw, 80px)`
- Conceptual grids: `.grid-4` / `.grid-8` / `.grid-12`
- Spacing CSS vars: 4–160

### Radius / motion

Radius 4 / 8 / 16 / 24.

Durations: fast 150ms, normal 320ms, slow 550ms, narrative 750ms, atmospheric 1300ms.

Easing: standard `cubic-bezier(.2,.8,.2,1)`, smooth `cubic-bezier(.16,1,.3,1)`.

`prefers-reduced-motion: reduce` collapses duration tokens; existing hero/reveal kill-switch remains.

---

## What was not done (correctly deferred)

- Header/nav/footer IA (6.2-B)
- Homepage acts, rooms, carousel (6.2-C / 6.2-G)
- Routes `/about` `/work` `/thinking` `/connect` (6.2-D)
- Invented Phase 4 copy
- New photography
- Contact form
- Thinking articles
- Deleting OrganicEclipse / Capabilities / stack (still imported by `/home`)
- Wiring a résumé

---

## Checks

| Check | Result |
| --- | --- |
| Re-scope inventory complete before app edits | PASS |
| Foreign PDF unlinked and removed from `public/` | PASS |
| No fabricated narrative copy | PASS |
| No new animation libraries | PASS |
| Existing components still resolve CSS variables | PASS (aliases) |
| Automated contrast lab / browser matrix | **Not performed** — calculated light muted failure; variant added |
| `npm run type-check` | PASS |
| `next build` / full browser QA | **Not performed** in this stage |

---

## Gate

```text
FOUNDATION PASS
```

**CONTENT BLOCKED** remains for Phase 1–4 narrative. Foundation does not depend on that copy.

**Stop.** Do not automatically start 6.2-B in this stage.
