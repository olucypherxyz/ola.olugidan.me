# Phase 6.2-E — Specialist pages

## A. Status

```text
PHASE 6.2-E — PASS
```

Locked specialist destinations now exist as static, evidence-gated routes. Unavailable copy stays reserved. No motion. No invented room descriptions, outcomes, dates, credentials, metrics, or biography.

6.2-D remains PASS. 6.2-F (Thinking + Connect depth) is next. 6.3 Motion is still deferred.

---

## B. Routes implemented

| Route | Specialist | Visual emphasis | Content |
| --- | --- | --- | --- |
| `/transformation` | Transformation | Structured list + professional spacing | Locked journey arc labels; pending transformation copy; VIIX remains an external commercial layer |
| `/homeschool-core` | Homeschool Core | Editorial / tactile (date, dashed image slot) | Locked January 2023 + “It started with a need.” + learning statement; story and imagery pending; no child/stock photos |
| `/faith-community` | Faith and community | Quiet, extra space, smaller heading measure | Locked serve title + reserved note only |

Not created (unsupported by locked IA + no evidence):

- `/services`, `/coaching`, `/faith`, `/homeschool`
- `/work/[slug]` case-study pages (BUILD destinations remain verified Live / GitHub / VIIX URLs)
- CREATE specialist (room still pending; no locked destination)

---

## C. Information hierarchy after 6.2-E

```text
Home
├── About
├── Work
│   ├── BUILD → verified project destinations (external)
│   ├── TRANSFORM → /transformation
│   ├── CREATE → pending
│   └── SERVE → /faith-community
├── Thinking
└── Connect

Specialist layers (context, not replacement)
├── /transformation
├── /homeschool-core
└── /faith-community
```

Primary nav is unchanged (Home · About · Work · Thinking · Connect). Specialists are reached from rooms, not dumped into the footer.

---

## D. Content sources

| Block | Source |
| --- | --- |
| Transformation mood | Locked brief: structured + professional + human |
| Journey stages | Locked conceptual arc already on Home / About |
| VIIX URL + boundary | Verified + locked commercial-layer rule |
| Homeschool date / title | Locked brief |
| Learning statement | Locked brief |
| Child-image rule | Locked privacy constraint |
| Faith mood | Locked brief: quiet + documentary + grounded |
| Serve title | Locked homepage serve heading |
| Everything else | Explicitly pending / reserved |

---

## E. Preserved

- 6.2-A tokens
- Global shell
- No carousel, parallax, scroll choreography, or transition libraries

---

## F. Deferred

- 6.2-F Thinking + Connect depth (only if approved copy exists)
- 6.3 Motion + interaction
- Full transformation / homeschool / faith copy and photography
- CREATE specialist
- 6.4 / 6.5 viewport and keyboard QA

---

## G. QA

| Check | Result |
| --- | --- |
| `npm run type-check` | PASS |
| `npm run lint` | PASS |
| `npm run build` | PASS — static routes include `/transformation`, `/homeschool-core`, `/faith-community` |

---

## H. Known issues

1. Specialist pages are structurally complete and visually distinct, but most body copy is still reserved.
2. TRANSFORM and SERVE on `/work` remain pending rooms that now link to specialist pages — they are destinations, not filled rooms.
