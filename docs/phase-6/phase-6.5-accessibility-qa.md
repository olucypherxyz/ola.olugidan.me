# Phase 6.5 — Accessibility QA

## Status

PASS

Validation and correction only. No IA, copy, motion language, or token-system change. Existing `--color-accent-strong` is used for the focus ring because the locked accent purple fails non-text contrast on paper.

## Scope

Routes: `/`, `/about`, `/work`, `/thinking`, `/connect`, `/transformation`, `/homeschool-core`, `/faith-community`.

Checks: landmarks, headings, names/roles, images, skip link, current page, contrast (calculated), reduced motion (already gated in 6.3/6.4), keyboard semantics, touch targets (6.4).

## Findings

| Severity | Route | Issue | Action |
| --- | --- | --- | --- |
| P2 | all | `:focus-visible` used locked accent `#B79CED` on paper (~2.15:1), below 3:1 non-text contrast | Outline uses `--color-accent-strong` (~4.74:1) |
| P2 | all | Current page not exposed to AT | `aria-current="page"` on header, menu, and footer |
| P2 | all | Theme control did not expose state | Label + `aria-pressed` via `useSyncExternalStore` |
| P3 | n/a | Locked muted `#88838C` on paper is ~3.40:1 | Already not used for small UI (`--color-text-muted-aa`) |
| P3 | `/` | CREATE is not a control | Left inactive on purpose |

No P0 / P1.

## Fixes made

- Focus ring: `accent-strong`
- Skip link also matches `:focus-visible`
- `aria-current="page"` on primary and footer nav
- Menu: `aria-haspopup="dialog"`; button toggles open/closed
- Theme: “Switch to dark/light colour theme” + `aria-pressed`

## Verified (no change)

| Check | Result |
| --- | --- |
| `html lang="en"` | PASS |
| Skip link first, `href="#content"` | PASS |
| One `h1` then `h2`/`h3` | PASS (Work: rooms `h2`, projects `h3`) |
| `main#content` | PASS |
| Portrait alt | “Portrait of Ola Olugidan” |
| Work screenshots | Descriptive alts present |
| Reserved slots | `aria-hidden` |
| CREATE | Not a link |
| Live/GitHub | Named with project (`aria-label`) |
| Button on accent | ~7.64:1 |
| Body/secondary on paper | 16.4:1 / 6.10:1 |
| Dark body/secondary | 17.1:1 / 10.4:1 |
| Reduced motion | Hero/reveals immediate (6.4) |
| Menu | Escape, focus to Close, `inert` when closed (6.4 + this pass) |

## Deferred

- Full NVDA/VoiceOver session (6.6 / later AT lab)
- Automated axe CI (no new test framework in this phase)
- CDP `Tab` did not reliably move document focus in this environment; skip remains first in the accessibility tree

## Regression checks

- Type check: PASS
- Lint: PASS
- Build: PASS

## Final verdict

PASS

Next phase: **6.6 Performance + production QA**
