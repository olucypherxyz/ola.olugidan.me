# Phase 6.3 — Image Architecture & Placement Decisions

**Status:** LOCKED  
**Date locked:** 2026-09-04  
**Upstream:** Phase 6.1 visual audit · Phase 6.2 existing asset audit  
**Downstream:** Phase 6.4 — Art Direction (not started)

### Explicitly out of scope for this phase

- No sourcing  
- No image generation  
- No image editing  
- No deletion  
- No config cleanup  

---

## Core visual principle

> **Images are visual punctuation, not wallpaper.**

Hierarchy:

**Human presence → editorial context → actual work evidence → typography/space.**

### Two portraits, distinct jobs

| Portrait | Job |
| --- | --- |
| **Home** (`ola_portfolio_img.png`) | Immediate, recognizable personal introduction — “This is Ola.” |
| **About** (`about/ola-olugidan.png`) | Editorial, grounded, reflective — “This is Ola in context.” |

**Not interchangeable.**

---

## 1. Global image density

| Page | Visual strategy | Density |
| --- | --- | --- |
| Home | Personal portrait + one atmospheric editorial + evidence | Low |
| About | Editorial portrait + one environmental moment | Low |
| Work | Actual product/work evidence | High where evidence exists |
| Transformation | One conceptual/editorial visual | Very low |
| Homeschool Core | One observational image | Low |
| Faith & Community | One carefully contextual human/community image | Low |
| Thinking | Reading-first; imagery only when meaningful | Very low |
| Connect | Typography + space | None |

Low density is intentional.

---

## 2. Locked placement matrix

| Page | Section | Decision | Visual role | Priority |
| --- | --- | --- | --- | --- |
| Home | Hero portrait | **KEEP** | Personal identity | P0 |
| Home | Who is Ola | **REPLACE** | Editorial/environmental | P1 |
| Home | Widening | **NONE** | — | — |
| Home | BUILD | **EVIDENCE/NONE** | Work proof | P0 |
| Home | TRANSFORM | **NONE** | — | — |
| Home | NURTURE | **NONE** | — | — |
| Home | SERVE | **NONE** | — | — |
| Home | Closing | **NONE** | — | — |
| About | Portrait | **KEEP** | Grounded/editorial identity | P0 |
| About | Journey | **REPLACE** | Editorial/environmental | P1 |
| About | Remaining narrative | **NONE** | — | — |
| Work | Product evidence | **KEEP** | Actual proof | P0 |
| Work | Digital experience evidence | **KEEP** | Actual proof | P0 |
| Transformation | Intro/body | **NEW** | Conceptual/editorial | P2 |
| Homeschool | Learning | **REPLACE** | Observational/editorial | P1 |
| Homeschool | Systems/reflection | **NONE** | — | — |
| Faith | Service/community | **NEW** | Human/contextual | P2 |
| Faith | Other sections | **NONE** | — | — |
| Thinking | Index | **NEW DESIGN** | Reading/editorial | P2 |
| Thinking | Individual posts | **OPTIONAL** | Article-specific | P2 |
| Connect | Entire page | **NONE** | — | — |

---

## 3. KEEP — current assets

### Personal (P0)

- Home: `public/assets/images/ola_portfolio_img.png`  
- About: `public/assets/about/ola-olugidan.png`  

### Evidence (P0)

- POSflyt, VESSA, VIIX Solutions, CDR Technical, Sisonke Africa under `public/assets/work/`  
- Treat as **proof artifacts**, not decorative images  
- Extension/format mismatch from Phase 6.2 is **not** a creative problem — do not alter for cosmetic consistency  

---

## 4. REPLACE — slots (role valid; file not distinctive enough)

| Slot | Current file | Priority | Direction summary |
| --- | --- | --- | --- |
| Home · Who is Ola | `editorial/workspace-hands.jpg` | P1 | Environmental punctuation; landscape ~3:2; tactile workspace; not corporate stock |
| About · Journey | `editorial/notebook-desk.jpg` | P1 | Life + work + reflection; landscape ~3:2; not office productivity cliché |
| Homeschool · Learning | `editorial/learning-books.jpg` | P1 | Observed life; landscape ~3:2; **not** fabricated as Ola’s actual environment if stock |

---

## 5. NEW — acquisition targets (Phase 6.4 briefs first)

| Slot | Priority | Constraint |
| --- | --- | --- |
| Transformation · one conceptual editorial | P2 | No coaching/handshake/leadership stock |
| Faith & Community · one contextual human image | P2 | Must not imply Ola’s actual church/TNCOD/events |
| Thinking index visual system | P2 | Design decision before assets; **not** blog thumbnails |

---

## 6. NONE — deliberately empty

Home: Widening, TRANSFORM, NURTURE, SERVE, Closing CTA  
About: Technology, VIIX, Transformation, Learning, Homeschool, Service, Thread  
Homeschool: Systems, Reflection  
Faith: Intro, TNCOD detail (unless placement after community), Teaching, Belief  
Connect: entire page  

---

## 7. Four-layer image system (locked)

1. **HUMAN** — two real portraits (Home immediate / About grounded)  
2. **EDITORIAL** — small number of atmospheric/contextual images  
3. **EVIDENCE** — screenshots and artifacts  
4. **SPACE** — large portions with **no** imagery  

Layer 4 is as important as layers 1–3.

---

## 8. Approximate library target (post art direction + acquisition)

| Action | Count (approx.) |
| --- | --- |
| KEEP | 2 portraits + 5 evidence |
| REPLACE | 3 editorial |
| NEW | Transformation + Faith (+ Thinking system TBD) |

Initial acquisition ≈ **5–6 carefully selected visuals**, not a stock library.

---

## 9. Hard constraints carried forward

- Do not invent personal documentation (homeschool / faith / community).  
- Do not substitute photographs for real work evidence.  
- Do not put images on Connect.  
- Do not auto-thumbnail Thinking posts.  
- Do not put an image in every HomeChapter.  
- Do not make specialist pages share one identical photo layout.  

---

## 10. Next phase

**Phase 6.4 — Art Direction**

Turn each P1/P2 decision into a specific visual brief:

- subject  
- lighting  
- cultural/contextual cues  
- composition  
- crop / focal point  
- colour relationship to `#B79CED`  
- acceptable vs forbidden stock characteristics  
- acquisition strategy  

No looking for or creating assets until those briefs exist.

---

## Phase 6.3 gate

| Gate | Result |
| --- | --- |
| Placement architecture | **LOCKED** |
| Asset acquisition | **BLOCKED until 6.4** |
| Config cleanup | **DEFERRED** |
| Portrait file edits | **FORBIDDEN** |
