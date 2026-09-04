# Phase 6.8 — Colour system, asset hygiene & safe performance cleanup

**Status:** COMPLETE  
**Date:** 2026-09-05  
**Upstream:** Phase 6.7 imagery QA closed  
**Governing rule:** Prove before removal. When uncertain, retain and report. Do not reopen approved imagery, layout, routes, copy, or theme behaviour.

---

## Final verdict

# **PASS WITH RETAINED ITEMS**

No unsafe cleanup was forced. Colour tokens were **not** consolidated (aliases remain intentional). Proven orphan public assets were **identified as SAFE TO REMOVE** but **not deleted in this pass** (await explicit go-ahead for irreversible file removal). Repository hygiene for `node_modules/` and `.next/` is already correct. Production build validation passed.

---

## 1. Final complete colour inventory

All semantic tokens are defined as space-separated RGB channels in `src/styles/tailwind.css` for `rgb(var(--token) / α)` usage. Hex values below are the encoded equivalents.

### Core brand / surface / text (light)

| Token | Light hex | Purpose | Kind |
| --- | --- | --- | --- |
| `--color-background` | `#F7F5F2` | Page field | Core brand |
| `--color-surface` | `#FFFFFF` | Raised panels | Core brand |
| `--color-surface-soft` | `#EFEBE6` | Soft wash / subtle fills | Core brand |
| `--color-text` | `#18171A` | Primary body text | Core brand |
| `--color-text-secondary` | `#5F5B63` | Supporting copy | Core brand |
| `--color-text-muted` | `#88838C` | Decorative / large type only (~3.4:1) | Core brand |
| `--color-text-muted-aa` | `#5F5B63` | AA-safe muted labels | Alias (intentional) |
| `--color-border` | `#DDD8D2` | Default rules | Core brand |
| `--color-accent` | `#B79CED` | **Primary lavender** | Core brand |
| `--color-accent-soft` | `#E8DFF8` | Soft lavender tint | Core brand |
| `--color-accent-strong` | `#795FAF` | Readable lavender (text/focus) | Core brand |

### Core brand / surface / text (dark)

| Token | Dark hex | Purpose |
| --- | --- | --- |
| `--color-background` | `#111014` | Page field |
| `--color-surface` | `#1A181D` | Panels |
| `--color-surface-soft` | `#242128` | Soft wash |
| `--color-text` | `#F5F2F7` | Primary text |
| `--color-text-secondary` | `#C4BEC9` | Supporting |
| `--color-text-muted` | `#918A96` | Decorative muted |
| `--color-text-muted-aa` | `#C4BEC9` | AA-safe muted |
| `--color-border` | `#353039` | Borders |
| `--color-accent` | `#B79CED` | Identity lavender (unchanged) |
| `--color-accent-soft` | `#26222E` | Very subtle tint |
| `--color-accent-strong` | `#C8B6FF` | Accessible companion |

### Accent interaction aliases

| Token | Light | Dark | Notes |
| --- | --- | --- | --- |
| `--color-accent-light` | `#B79CED` | `#C8B6FF` | Alias of accent / strong — **defined, unused in CSS rules** |
| `--color-accent-readable` | `#B79CED` | `#C8B6FF` | Alias — **defined, unused in CSS rules** |
| `--color-accent-hover` | `#795FAF` | `#C8B6FF` | **Used** (buttons) |
| `--color-accent-active` | `#795FAF` | `#C8B6FF` | Alias of hover — **defined, unused in CSS rules** |
| `--color-accent-muted` | `#E8DFF8` | `#26222E` | Alias of soft — **defined, unused in CSS rules** |
| `--hero-eclipse` | `#E8DFF8` | `#363142` | Legacy OrganicEclipse field — **defined, unused after hero change** |
| `--hero-eclipse-accent` | `#B79CED` | `#B79CED` | Legacy — **defined, unused** |

### Compatibility aliases (legacy component names)

| Token | Light | Dark | Same as | Used? |
| --- | --- | --- | --- | --- |
| `--color-bg` | `#F7F5F2` | `#111014` | background | **Yes** |
| `--color-bg-subtle` | `#EFEBE6` | `#242128` | surface-soft | **Yes** |
| `--color-surface-raised` | `#FFFFFF` | `#242128` | surface / soft | Defined only |
| `--color-surface-accent` | `#E8DFF8` | `#26222E` | accent-soft | Defined only |
| `--color-text-primary` | `#18171A` | `#F5F2F7` | text | **Yes** |
| `--color-text-tertiary` | `#5F5B63` | `#918A96` | secondary / muted | **Yes** |
| `--color-border-subtle` | `#EFEBE6` | `#242128` | surface-soft | Defined only |
| `--color-border-strong` | `#C4BCB2` | `#443C4B` | Distinct | Defined; verify via full CSS if needed |
| `--color-on-accent` | `#18171A` | `#18171A` | Text on accent fills | **Yes** |

### Status / sage / contact

| Token | Light | Dark | Kind | Used in active CSS? |
| --- | --- | --- | --- | --- |
| `--color-success` | `#3F7D5A` | `#78C99A` | Semantic UI | Reserved (defined) |
| `--color-warning` | `#9A6B20` | `#E3B96B` | Semantic UI | Reserved |
| `--color-error` | `#B34D5A` | `#E58B95` | Semantic UI | Reserved |
| `--color-info` | `#4D6FA8` | `#91B1E5` | Semantic UI | Reserved |
| `--color-sage` | `#A8BFAF` | `#718D7B` | Brand secondary | **Yes** |
| `--color-sage-dark` | `#718D7B` | `#A8BFAF` | Brand secondary | Reserved |
| `--color-sage-soft` | `#EDF3EE` | `#302A3A` | Brand secondary | Reserved |
| `--color-contact-bg` | `#111014` | `#1A181D` | Contact / chrome | **Yes** |
| `--color-contact-text` | `#F5F2F7` | `#F5F2F7` | Contact / chrome | **Yes** |

**No token consolidation performed.** Shared values preserve semantic meaning (e.g. muted-aa vs secondary). Unused reserved tokens remain for design-system completeness and future UI — removing them is optional and not required for performance.

---

## 2–5. Palette summaries

### Core brand palette

- Paper / dark field: `#F7F5F2` ↔ `#111014`
- Surfaces: `#FFFFFF` / `#EFEBE6` ↔ `#1A181D` / `#242128`
- Text: `#18171A` / `#5F5B63` ↔ `#F5F2F7` / `#C4BEC9`
- **Lavender identity:** `#B79CED` (both themes)
- Readable lavender: `#795FAF` (light) / `#C8B6FF` (dark)
- Soft lavender: `#E8DFF8` (light) / `#26222E` (dark)
- Sage: `#A8BFAF` / `#718D7B`

### Light-mode palette

As listed in the user brief — confirmed against `:root` in `tailwind.css`. Primary background is **`#F7F5F2`**, not the older proposed `#F6F3EC`.

### Dark-mode palette

Confirmed against `html[data-theme='dark']` — matches the user brief including `#363142` hero-eclipse token (legacy / unused in rules).

### Semantic and status colours

Success / warning / error / info are defined for both themes and currently **reserved** (no active CSS class consumers found). Sage is actively used. Contact tokens power skip-link, footer contact band, and related chrome.

---

## 6. Intentional aliases and why they remain

| Alias pair | Why keep |
| --- | --- |
| `background` ↔ `bg` | Compatibility with older class names / Tailwind `bg` colour key |
| `text` ↔ `text-primary` | Semantic clarity in components vs shorthand |
| `text-secondary` ↔ `text-muted-aa` (light) | Accessibility: decorative muted fails AA; labels need AA variant |
| `accent` ↔ `accent-light` / `accent-readable` | Reserved semantic slots for fills vs readable text |
| `accent-soft` ↔ `accent-muted` / `surface-accent` | Soft tint family |
| Status colours | Design-system completeness even if unused today |

---

## 7. Hard-coded colour exceptions

| Location | Value | Assessment |
| --- | --- | --- |
| `src/app/layout.tsx` `themeColor` | `#F7F5F2` / `#111014` | **Required** — viewport meta; matches tokens |
| `ThemeToggle.tsx` theme-color meta | `#111014` / `#F7F5F2` | **Required** — runtime theme sync |
| `site.webmanifest` | `#F7F5F2` | **Required** — PWA chrome |
| `tailwind.css` mobile panel backdrop | `rgb(17 16 20 / 0.4)` | Isolated implementation; equals contact-bg with alpha. **Retain** (cosmetic refactor only; no perf gain) |
| SVG `fill="currentColor"` | inherits | Correct — not hard-coded brand |

No Tailwind arbitrary colour utilities (`bg-[#…]`) found in active components.

---

## 8. Files safely removed

**None in this pass.**

Irreversible deletion of proven orphans was deferred pending explicit approval (safety gate on auto-delete). Candidates are listed in §9 as **SAFE TO REMOVE**.

---

## 9. Files reviewed but retained

### SAFE TO REMOVE (await go-ahead)

| Path | Size | Proof |
| --- | --- | --- |
| `public/assets/home/ola-olugidan-portrait.jpg` | ~112 KB | Untracked; **zero** refs in `src/`, config, metadata, manifests |
| `public/assets/home/ola-olugidan-cutout.png` | ~903 KB | Tracked; **zero** runtime refs; only historical docs + stale `orsettings.json` inventory |

Active portraits remain: `/assets/images/ola_portfolio_img.png` (Home) and `/assets/about/ola-olugidan.png` (About).

### POSSIBLY UNUSED — MANUAL REVIEW REQUIRED

| Item | Notes |
| --- | --- |
| `src/sections/*` (legacy portfolio sections) | Not imported by any `src/app` route; `/home` only `redirect('/')`. Dead for runtime bundle if unused, but **do not delete** without confirming no planned revival |
| `SectionRail`, `CapabilityItem`, `ExperienceGroup`, several unused home components | Same — orphaned by IA, not imported from live pages |
| `scripts/PortraitCutout.cs` | Tracked utility; not part of Next runtime |
| `--hero-eclipse*` CSS vars | Unused after OrganicEclipse removal; keep until intentional palette cleanup |
| Unused accent/status token aliases | Reserved design system |
| `android-chrome-512x512.png` | Not listed in `layout.tsx` icons; keep as standard favicon set / future PWA |
| `@netlify/plugin-nextjs` | No `netlify.toml`; host may still be Netlify or Vercel — **do not uninstall** until deploy target confirmed |
| `playwright` | Used by `scripts/capture-imagery-qa.mjs` (Phase 6.6 QA) — keep as optional tooling |

### REQUIRED — KEEP

| Item | Why |
| --- | --- |
| All Phase 6.7 editorial images under `public/assets/editorial/` | Approved production imagery |
| Home + About portraits | Identity |
| Work evidence PNGs | Proof |
| Favicons, `o-mark.svg`, `favicon.ico`, webmanifest | SEO / PWA / branding |
| Colour tokens (including aliases) | Theme system |
| `node_modules/`, `.next/` locally | Dev/build — correctly gitignored |

---

## 10. Assets optimized

**None.** Approved portfolio imagery was not re-compressed or re-exported (would risk visual change).

---

## 11. Dependencies reviewed

| Package | Role | Action |
| --- | --- | --- |
| `next`, `react`, `react-dom` | Runtime | **Required** |
| `typescript`, `eslint*`, `prettier*`, `tailwindcss`, `postcss`, `autoprefixer`, `@types/*` | Tooling | **Required** |
| `@netlify/plugin-nextjs` | Deploy plugin without config | **Retain** — confirm host before removal |
| `playwright` | Imagery QA script | **Retain** as optional QA dependency |

No dependency removed.

---

## 12. Build / repository hygiene

| Check | Result |
| --- | --- |
| `.gitignore` includes `node_modules/`, `.next/`, `out/`, `build/` | **Yes** |
| `git check-ignore` confirms ignore | **Yes** |
| Tracked files under `node_modules` or `.next` | **0** |
| Phase 6 QC folder `docs/phase-6/verification/` | Gitignored correctly |
| ZIP/archive size of `node_modules` / `.next` | Local/dev only — **not served to visitors** when deploy builds from source |
| Stale `orsettings.json` inventory | Still lists superseded editorial filenames (`workspace-hands.jpg`, etc.) — inventory drift only; not runtime |

---

## 13. Performance improvements implemented

**None** (no safe zero-risk changes that would move the needle without touching approved visuals).

---

## 14. Performance recommendations not implemented (and why)

| Finding | Class | Why deferred |
| --- | --- | --- |
| Home portrait `ola_portfolio_img.png` ~**3.3 MB** with `unoptimized` on `PortraitComposition` | **B — Conditional** | Enabling Next Image optimization may change PNG alpha / edge quality; needs visual A/B before change |
| Orphan home assets ~1 MB total | **A — Safe** | Proven unused; deletion deferred for explicit approval |
| Legacy `src/sections/*` | **B — Conditional** | Not in live routes; removing is repo hygiene, not visitor LCP; confirm no revival plan |
| Mobile panel `rgb(17 16 20 / 0.4)` → token | **C — No action** | No measurable perf gain |
| Consolidate unused CSS variables | **C — No action** | Zero runtime cost; semantic reserve |
| Recompress editorial JPEGs further | **B — Conditional** | Risk to approved Phase 6.7 look |
| `docs/phase-6/qa-screenshots/` ~4.3 MB | **C — Docs** | Not shipped to visitors; optional gitignore of PNGs later |

---

## 15. Validation results

| Check | Result |
| --- | --- |
| `npm run type-check` | Pass (see build log) |
| `npm run build` | Pass — all app routes static |
| Approved imagery paths | Unchanged; still resolve |
| Colour tokens | Unchanged |
| Routes | Unchanged (`/home` remains redirect) |

*(Build log attached in session terminal; re-run if needed after any future orphan deletion.)*

---

## 16. Before / after evidence

| Area | Before | After |
| --- | --- | --- |
| Colour system | Implemented as audited | **Unchanged** (aliases retained) |
| Public orphans | Present on disk | **Still present** — classified SAFE TO REMOVE |
| Gitignore hygiene | Correct | **Confirmed** |
| Dependencies | As listed | **Unchanged** |
| Imagery | Phase 6.7 approved set | **Unchanged** |

---

## Recommended follow-up (optional, explicit approval)

1. Delete `public/assets/home/ola-olugidan-portrait.jpg` and `public/assets/home/ola-olugidan-cutout.png`, then remove empty `public/assets/home/` if empty.  
2. Visually A/B `PortraitComposition` **with** Next Image optimization (remove `unoptimized`) for LCP.  
3. Confirm deploy host → keep or remove `@netlify/plugin-nextjs`.  
4. Decide fate of legacy `src/sections/*` (archive vs delete).

---

## Status lock

| Phase | Status |
| --- | --- |
| 6.5–6.7 Imagery | CLOSED — not reopened |
| **6.8 Colour / hygiene / performance** | **PASS WITH RETAINED ITEMS** |
