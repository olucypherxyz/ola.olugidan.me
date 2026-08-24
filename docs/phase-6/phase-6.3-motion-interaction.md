# Phase 6.3 — Motion + interaction

## A. Status

```text
PHASE 6.3 — PASS
```

Motion is a restrained CSS layer over the completed static product. No information architecture, content, tokens, or routes were reopened. No animation library was added.

Dedicated viewport photography and full 6.4 / 6.5 matrices remain the next phases. This gate covers implementation, reduced-motion CSS, keyboard equivalents in code, and production build.

---

## B. Motion inventory

Pre-existing (mostly leftover portfolio, unused by the personal-site homepage):

| Area | Notes |
| --- | --- |
| `--duration-*` / `--ease-*` | 6.2-A tokens — reused |
| Header scroll class | Kept; height compression **removed** (layout shift) |
| Nav underline width | Kept (150ms) |
| Body theme colours | Kept (320ms, colour only) |
| Old `hero-in` / OrganicEclipse / `--dx` | Unused by current hero; reduced-motion still disables them |
| `Reveal` | Was only on retired `ProjectRow` — now canonical |

Added / refined:

| Area | Interaction | Duration | Mechanism | Reduced motion |
| --- | --- | --- | --- | --- |
| Hero name | Immediate (no entrance hide) | — | Static | Immediate |
| Hero identity / room / CTAs / room list | Entrance stagger | 750ms + 60ms steps (~990ms) | CSS `@keyframes editorialEnter` | Immediate |
| Portrait | Desktop hover scale 1.012 | 320ms | CSS transform | Static |
| Hero rooms | Hover/focus `translateX(8px)` + colour | 150ms | CSS; links to existing routes | Static |
| Contribution rows | Hover/focus `translateX(8px)` | 150ms | CSS | Static |
| Section reveals | Opacity + `translateY(12px)` | 550ms | One `Reveal` + IntersectionObserver | Immediate visible |
| Work evidence image | Hover/focus scale 1.015 | 150ms | CSS | Static |
| External ↗ | Hover/focus `translate(2px, -2px)` | 150ms | CSS | Static |
| Connect channels | Hover/focus `translateX(6px)` | 150ms | CSS | Static |
| Buttons | `:active` scale 0.98 | 150ms | CSS | No scale |
| Header scroll | Background / border / blur | 320ms | CSS + rAF boolean | Instant; no blur |
| Mobile menu | Opacity + 12px sheet | 320ms | CSS; panel stays mounted | Immediate show/hide |
| Theme | Background / text | 320ms | Existing body transition | Off |
| Footer | None | — | — | — |

New token: `--duration-stagger: 60ms` (documented stagger only).

---

## C. Dependencies

```text
No new animation dependencies.
```

Not installed: Framer Motion, GSAP, Lenis, locomotive-scroll, three.js.

---

## D. Accessibility

| Check | Implementation |
| --- | --- |
| Keyboard rooms | Hero rooms with destinations are links; CREATE stays non-interactive (pending) |
| Contribution / work / connect | `:focus-within` matches hover |
| Mobile menu | Escape, focus trap, focus return, `inert` when closed |
| Theme | Existing button |
| Reduced motion | Durations → 1ms; transforms/animations cancelled; `.reveal` forced visible via CSS |
| Semantics | Reveal does not duplicate content; room links use existing routes |
| Focus | Existing `:focus-visible` outline unchanged |

Hover-only portrait scale is gated to `(hover: hover) and (pointer: fine)` so touch is not a fake hover language.

---

## E. Performance

| Check | Result |
| --- | --- |
| Scroll | Passive listener + rAF; state updates only when scrolled boolean changes |
| Parallax JS | **Not implemented** |
| `will-change` | Not added globally |
| Animated properties | Transform / opacity (header uses background/border/blur, not height) |
| Console / type-check / lint / build | See §F |

---

## F. QA

| Check | Result |
| --- | --- |
| `npm run type-check` | PASS |
| `npm run lint` | PASS |
| `npm run build` | PASS |

Responsive CSS already includes 768px (contribution grid) and 1024px (hero grid / desktop nav). Full 375–1440 visual photography is **6.4**.

---

## G. Deferred

- Route transitions (would need an App Router client template; not required for this language)
- Portrait scroll parallax (cost vs 4–10px benefit)
- Ambient loops
- Magnetic / custom cursor
- Header height compression (rejected to avoid layout shift)
- Per-paragraph / journey-dot / fake-article animation
- Animation libraries

---

## H. Known issues

1. CREATE in the hero room list has no destination, so it has no hover/focus motion. That matches the pending room.
2. Old portfolio CSS (`hero-in`, eclipse, `project-row`) is still in the stylesheet but unused by the personal-site pages.
3. Full device/OS reduced-motion photography is scheduled for 6.5; the CSS gate is in place.
