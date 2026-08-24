# Phase 6.2-B — Global shell

## A. Status

```text
PHASE 6.2-B — PASS
```

The personal-site shell is the active architecture. The old recruiter homepage composition still renders at `/` as a **deprecated** placeholder until 6.2-C. It is no longer the navigation model.

---

## B. Implemented

| Piece | Location |
| --- | --- |
| Header | `src/components/SiteHeader.tsx` — wordmark, primary nav, theme, mobile menu |
| Navigation | Home · About · Work · Thinking · Connect (`src/config/site.ts`) |
| Mobile menu | Dialog, `aria-expanded` / `aria-controls`, Escape, focus cycle, body scroll lock |
| Theme switch | Quiet sun/moon control; existing `ola-theme` persistence + FOUC script |
| Container | `src/components/ui/Container.tsx` → `.container-site` (1280px + gutters) |
| Link primitive | `src/components/ui/TextLink.tsx` — internal `→`, external `↗` |
| Button primitive | `src/components/ui/Button.tsx` — primary / secondary / ghost (+ onDark for deprecated homepage only) |
| Section primitive | `src/components/ui/Section.tsx` — optional eyebrow / title / intro |
| Footer | Quiet surface footer; locked domain line; verified Email / LinkedIn / GitHub |
| Route shell | Root layout: skip link → header → `<main id="content">` → footer |
| Accessibility | Skip link, landmarks, 44px controls, focus-visible, reduced-motion header blur off |

Routes: `/` `/about` `/work` `/thinking` `/connect`. `/home` redirects to `/`. No specialist routes.

---

## C. Preserved (6.2-A)

Colour tokens, type families, 1280px container, gutters, grid utilities, spacing/radius/motion/easing tokens, skip link, focus ring, reduced-motion duration collapse, theme FOUC + persistence, portrait assets, verified social URLs.

---

## D. Refactored

- `SiteHeader` / `SiteFooter` / `ThemeToggle` / `Button` / `TextLink`
- Root `layout.tsx` (shell + name-only metadata; JSON-LD Person without recruiter `jobTitle`)
- `next.config.mjs` redirect `/home` → `/`
- 404 tone (no “portfolio”)
- Deprecated homepage CTAs now point at `/work` and `/connect` instead of hash/resume

---

## E. Removed (from production behaviour)

- Recruiter nav (Experience / Contact as primary labels)
- Resume CTAs (Hero/Contact/Footer)
- Foreign résumé (already removed in 6.2-A; no restore)
- Section rail from the live homepage
- JSON-LD `jobTitle: Web Developer`
- Giant dark footer identity

Not deleted from disk (still unused or still imported by deprecated homepage): `SectionRail.tsx`, OrganicEclipse, Capabilities, stack, `portfolio.ts`.

---

## F. Deferred

- New homepage (6.2-C)
- Carousel / rooms
- Specialist pages
- Thinking articles / approved empty-state copy beyond “content pending”
- Connect form
- Phase 4 content integration
- Additional photography
- Page transitions (documented only; no theatrical CSS)
- Full SEO pass

---

## G. QA

| Check | Result |
| --- | --- |
| `npm run type-check` | PASS |
| `npm run lint` | PASS |
| `npm run build` | PASS — `/` `/about` `/work` `/thinking` `/connect` `/home` `/robots.txt` `/_not-found` |
| Chrome `/about` | PASS — header, pending copy, footer domains, external `↗`, theme control present |
| Keyboard | Implemented (skip, nav, menu trap, theme). **Not fully walked in a dedicated pass.** |
| Focus | `:focus-visible` retained. **Not fully walked.** |
| Reduced motion | Header blur disabled in CSS. **Not visually confirmed in OS setting.** |
| Light / dark | Tokens intact; Chrome session rendered dark via system preference. Light not separately captured. |
| Desktop | PASS on the captured `/about` view |
| Mobile (375–430) | **Not captured.** Desktop nav hidden below 1024px; Menu button is the intended path. |

---

## H. Known issues

1. `/` still shows the **deprecated recruiter homepage body** so the app stays runnable. That composition is not the design reference.
2. Exhaustive keyboard, reduced-motion, and 1440→375 viewport matrix were **not** fully executed this stage.
3. `SectionRail.tsx` and other portfolio sections remain in the tree until 6.2-C removes the old homepage.
4. Route transitions were **not** implemented (left for the later motion pass).

No unsupported personal claims were added. Pending pages state that copy is blocked, not invented.

---

## Stop

Do not start 6.2-C until this shell report is accepted.
