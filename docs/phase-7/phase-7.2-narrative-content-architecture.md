# Phase 7.2 — Narrative and content architecture audit

**Status:** COMPLETE — awaiting review (no implementation)  
**Date:** 2026-08-21  
**Phase 6:** closed  
**Phase 7.1:** treated as PASS (source of truth recovered; this brief supplies confirmed identity, journey, programme, Homeschool Core, 6P Path, philosophy, voice)  
**Code / copy / IA / assets changed:** none

This file is the audit. It is **not** website copy. It is **not** a Cursor implementation brief.

Sources used, in order:

1. `docs/phase-7/personal-site-source-of-truth.md` (7.0 recovery)
2. This Phase 7.2 instruction (user-confirmed hierarchy, journey, transformation audience, Homeschool Core architecture, philosophy quote, voice)
3. Current implementation: `src/config/homepage.ts`, `pages.ts`, `specialists.ts`, `portfolio.ts`, and the page views under `src/components/`

---

## Provenance used in this audit

| Tag | Use here |
| --- | --- |
| **Told** | Confirmed identity, journey, programme stage, Homeschool Core story, 6P Path, philosophy quote, family boundaries |
| **Evidence** | VIIX titles/dates, named public work, contact, portrait, unpublished LDR |
| **Locked architecture** | Rooms, nav, specialist routes, not-list, empty Thinking until articles exist |
| **Recommended** | “I see a need…” connective line — **strategic finding only**, not Ola’s approved sentence |
| **Unknown** | Named church/initiatives for public use; CREATE meaning; article list — **not inferred** |

---

## A. Narrative architecture

### The story this website should tell

Ola Olugidan is a **technology and business leader** who builds and leads real work (chiefly through **VIIX Solutions**), and whose life also includes **transformation coaching**, **founding Homeschool Core**, **education**, **family**, and **faith/community service**.

The reader should leave knowing:

> This is one woman. Technology and business are central. They are not the whole of her.

The relationship that must hold everywhere:

```text
Ola  →  leads / builds  →  VIIX
Ola  →  coaches         →  transformation practice (early)
Ola  →  founded         →  Homeschool Core
```

Never:

```text
VIIX            defines Ola
Homeschool Core defines Ola
the programme   defines Ola
```

### Six questions → existing IA (not six new sections)

| Question the site should answer | Primary home | Support |
| --- | --- | --- |
| **Who I am** | Home hero + About opening | Portrait; identity line refined later |
| **What I am capable of** | About (journey + how she works) | Work only as *expressions*, not a skills grid |
| **What I am building** | Work (VIIX + selected making) | `/transformation`, `/homeschool-core` |
| **How I think** | About (short) + Thinking | Education philosophy on Homeschool Core / About |
| **Where I am going** | Home close + About (light, honest unfinishedness) | Transformation and Homeschool Core “being built” notes |
| **What kind of person I am** | About + Connect | Faith/service as depth, not a ministry CV |

Locked homepage acts still work as a **sequence**, once copy exists:

```text
ACT I    Meet Ola          → who I am (tech/business leader, more rooms)
ACT II   Understand Ola    → person, not a job title
ACT III  Discover rooms    → weight follows hierarchy, not five equal doors
ACT IV   What shaped her   → journey as growth in scope
ACT V    What she builds   → VIIX, Homeschool Core, early transformation
ACT VI   How she thinks    → philosophy + Thinking (or honest empty)
ACT VII  Talk to her       → Connect
```

### Connective thread (strategic, not a slogan)

**Finding (Recommended, not approved copy):**

> I see a need, I try to understand it, and I look for a practical way to help.

This **does** connect naturally to: technology (real-world systems), business (VIIX), transformation (stuck professionals), education/Homeschool Core (parents starting in Nigeria, 2023), leadership, service.

It **does not** need to be printed on every page. Use it once, if at all, as an About or Home recognition line after Ola approves wording. Do **not** put it in hero + About + Work + Homeschool + Transformation + footer.

It should **not** be forced onto faith as a branding device. Faith/service can share the *attitude* (using what she knows to help) without quoting the line.

---

## B. Current-site identity audit

Inspected against the live personal-site routes (not the unused recruiter `src/sections`).

| Area | Status | What the site actually says now |
| --- | --- | --- |
| Who Ola is | **Underrepresented** | Name, portrait, four domains, one repeated real-world-technology sentence. No wife/mother/leader sentence. |
| Professional identity | **Misrepresented** (by leftover About) | About chapters still read as web/front-end practitioner. Recruiter file still holds that copy. |
| Technology leadership | **Missing** on personal pages | CTO/MD exists in `portfolio.ts` evidence, not in homepage/About/Work identity. |
| Business leadership | **Missing** | “Business Building” is a journey label only. Managing Director is unpublished on personal pages. |
| VIIX | **Underrepresented / misweighted** | A company-website row in BUILD plus “specialist commercial layer” note. Leadership of VIIX is not the story. |
| Transformation | **Misrepresented** as empty room | Mood + “not a programme” + reused journey labels + VIIX pointer. Contradicts recovered *active/early* practice. |
| Coaching | **Missing** | No audience, no programme name, no early-stage honesty. |
| Founder / creator | **Underrepresented** | Homeschool Core door + “It started with a need.” CREATE room has no meaning. |
| Homeschool Core | **Underrepresented** | Date + one line + privacy. No Nigeria, no purpose, no @homeschool.core, no exists-vs-building split. |
| Education | **Underrepresented** | “I don’t think everyone learns in exactly the same way.” — not the confirmed four-corners philosophy. |
| Homeschooling | **Underrepresented** | Implied by date/need; not told as a story. |
| Motherhood | **Intentionally reserved** (too far) | Privacy rule present; wife/mother/homeschool mom **not even named**. May be named without family content. |
| Faith / service | **Intentionally reserved** | Correct as ministry-not-site; too empty to give depth. Themes allowed; named orgs **Should not appear** until explicit approval. |
| Professional journey | **Underrepresented / slightly misaligned** | Nine undated labels; includes English Language; omits CompTIA A+, client-relationships, coaching, continued growth. |
| Thinking | **Intentionally reserved** | Empty state is still the right launch posture until articles exist. |
| Future direction | **Missing as narrative** | Unfinishedness is implied by pending notes, not told as “still becoming.” |
| S-Auto | **Should not appear** | Confirmed: keep off this site. |
| Recruiter grid / metrics / testimonials | **Should not appear** | Do not restore. |

CREATE: **Intentionally reserved** until Ola defines it. Do not invent a studio/art practice.

---

## C. Narrative hierarchy (eight identities)

These are **weights**, not eight equal blocks.

| Identity | Site weight | Where it should live | Where it must not dominate |
| --- | --- | --- | --- |
| 1. Technology leader / CTO | **Primary** | Home hero, About, Work (VIIX) | Not a stack wall |
| 2. Business leader | **Primary** (paired with 1) | Same as VIIX leadership | Not a corporate bio |
| 3. Transformation practitioner / coach | **Secondary** | `/transformation`; short Home room | Not a sales page |
| 4. Founder / creator | **Secondary** | Homeschool Core; light Home | Not an education-business homepage |
| 5. Educator | **Tertiary** | Homeschool Core + one About beat | Not a school brand |
| 6. Homeschool mom | **Tertiary** (human) | About + Homeschool origin | Not family content |
| 7. Wife / mother | **Quiet presence** | One About sentence if approved | No family details/photos |
| 8. Faith / community servant | **Quiet depth** | `/faith-community`; light Home SERVE | Not a ministry portfolio |

**Home room list** should stop treating BUILD / TRANSFORM / CREATE / NURTURE / SERVE as five equal products. BUILD (VIIX leadership) is the current centre of gravity. Others are true rooms with less copy.

---

## D. Professional story

**Told journey (7.2), growth in scope:**

```text
Digital marketing
→ IT support
→ CompTIA A+
→ Web development
→ Client relationships + leadership
→ SEO optimisation
→ Technology leadership
→ Business leadership
→ Digital transformation coaching
→ Continued growth
```

**Current site journey (homepage + About, duplicated):**

English Language → Technology → Digital Marketing → IT Support → Web Development → SEO → Technology Leadership → Business Building → Transformation

| Decision | Recommendation |
| --- | --- |
| Where it belongs | **About**, as a short progression — not Home and About and Transformation |
| Home | At most a one-line “how I got here” or omit; Home’s job is who she is now |
| Transformation page | **Remove** the reused nine-stage list; it makes coaching look like a career timeline |
| Dedicated `/journey` page | **No** — that becomes a CV |
| How to show growth | Few sentences of increasing scope (support → building → leading → coaching), then the stage list *or* prose, not both at length |
| CompTIA A+ | May appear as a real step (**Told**); do not build a credentials wall |
| English Language | **Unknown** relative to the 7.2 list — do not keep it unless Ola still wants it |
| Dates/employers | VIIX + 69 Resources remain **Evidence**; do not invent a dated CV around every arrow |

---

## E. VIIX position

**Wanted balance**

- Personal site: **who Ola is in relation to VIIX** (CTO / Managing Director; technology + business leadership; VIIX as a major thing she leads/builds).
- VIIX site: client/technical depth.

**Work page today:** BUILD is a project grid (POSflyt, VESSA, VIIX website, CDR, Sisonke). That **recreates the recruiter portfolio inside the personal site**. VIIX the *company she leads* is a row equal to a client brochure site.

**Architecture (not copy):**

1. Work’s primary BUILD block: VIIX leadership + pointer to viix.solutions.
2. Optional, secondary “things I have made” — **short**, not the page’s identity. POSflyt can remain as personal making. VESSA only with collaborative credit. Client sites optional or dropped.
3. **Do not** bring S-Auto.
4. **Do not** list LDR as a product.
5. **Do not** delete VIIX because the site is personal.

---

## F. Transformation (responsible now)

**Told substance:** helps corporate professionals who feel stuck, ready to grow, miss promotions, lack digital-tool fluency, need stronger corporate skills / practical AI, or have handled situations poorly.

Movement: where I am → gaps → what’s missing → capability → confidence → growth.

**Programme:** Executive Digital Transformation & Career Acceleration Programme — **active/early**; first one-to-one underway; structure still developing; formats envisioned (bespoke, structured, group/prerecorded); **pricing not finalized**.

**May represent now (when writing later):**

- Who it is for (the list above, in Ola’s voice)
- That this is early, one-to-one has begun, the fuller programme is still being shaped
- The movement (need → understand → practical help) without fake methodology branding

**Must not represent now:**

- Testimonials, outcomes, stats, pricing packages, “established programme,” polished product suite
- The current line “not a programme or consulting offer” — that **misrepresents** recovered fact (there *is* a programme; it is early)

**Intentionally unpublished:** pricing, formats as if launched, named clients.

Replace the Transformation page’s duplicated career-arc list. Replace the VIIX dump at the bottom as the *explanation* of transformation (VIIX is adjacent, not the coaching offer).

---

## G. Homeschool Core and 6P Path

**Told origin:** Nigeria, January 2023; uncertainty; help parents like herself — demystify, community, resources she wished she had.

**Exists now:** Homeschool Core as guidance for new homeschoolers, resources, platform; public concepts via **@homeschool.core**.

**Being built:** community, educational ideas, workshops, frameworks, programmes — **do not present as launched**.

**Ecosystem (Told):**

```text
HOMESCHOOL CORE
 └── CONFIDENT HOMESCHOOL
      └── CONFIDENT HOMESCHOOL BLUEPRINT
           └── 6P PATH
                Purpose · Profile · Plan · Place · Pace · Partnership
```

| Layer | On personal site | Point outward | Reserve |
| --- | --- | --- | --- |
| Origin story + philosophy quote | Yes (`/homeschool-core`, light on About) | — | Child/family detail |
| What exists vs what is being built | Yes, clearly split | @homeschool.core | Future programmes as current |
| Confident Homeschool / Blueprint | Name + one honest “in development” line if true | Homeschool Core / Instagram | Full product pages |
| 6P Path (six P’s) | Optional short list **as a framework she is developing**, not a sold course | Detail on Homeschool Core channels | Workshop/pricing |

Do not make `ola.olugidan.me` look like an education business. One specialist page is enough.

**Education philosophy (Told, may be used as source):**

> Schooling is more than what is taught within the four corners of a school. It is everything that contributes to a child becoming a well-rounded adult.

**Belonging:** primary `/homeschool-core`; **one** appearance on About if it does not duplicate; **not** Home hero; Thinking only if an essay exists.

Replace the thinner published line (“I don’t think everyone learns in exactly the same way”) rather than running both unless Ola wants both.

---

## H. Motherhood and family

**May say:** wife, mother, homeschool mom; that motherhood has shaped education, responsibility, leadership, growth, learning, life/work view.

**Must not publish:** children’s names, ages, personal information, private family details, identifiable stories, family photographs, other personal family information — unless Ola later explicitly approves.

Motherhood is part of the **story**. The family is **not the content**.

Current site fails by omission: it never names wife/mother at all.

---

## I. Faith and service

**Allowed themes:** service, contribution, leadership, learning, community, using what she knows to help.

**Do not auto-publish:** TNCOD, Professionals, Spotlight Monday, directory, BRTs, church names/roles.

**Flag for explicit approval later** if a single named example would help credibility. Until then `/faith-community` stays **thematic and reserved**, not empty-of-meaning: a few human sentences, no organisation CV.

---

## J. Thinking

**Job:** a window onto how she thinks — not a second résumé, not a requirement to manufacture posts.

**Launch now:** graceful empty state **still appropriate**. Subjects (technology, business, transformation, education, leadership, motherhood, faith) are **categories to investigate**, not a content calendar.

**Exists:** no approved articles in-repo.

**Do not:** fake titles, reading times, or “coming soon” issue lists.

---

## K. Page-by-page content architecture

### `/` Home

| | |
| --- | --- |
| **Question** | Who is she, and why do several rooms belong together? |
| **Audience** | First-time visitor |
| **After reading** | Technology/business leadership is central; life extends further; not a recruiter site |
| **Evidence** | Portrait; VIIX role (Told+Evidence); rooms as invitations |
| **Belongs here** | Who I am; light “what I am building”; Connect |
| **Weak now** | Repeated sentence; equal rooms; no VIIX leadership; CREATE hole |
| **Remove later** | Treating CREATE as a numbered product with no content; duplicating full journey |
| **Reserve** | CREATE; long Homeschool/Faith; Thinking articles |
| **Duplicate?** | Journey + Homeschool blocks duplicate About |

Visitor test after hero: **No** — you get a name and domains, not “technology and business leader.” After Home: **Partial** — rooms exist, BUILD is “current,” but VIIX leadership is absent.

### `/about`

| | |
| --- | --- |
| **Question** | How did she get here, how does she think, what kind of person is she? |
| **Audience** | People who want the human story |
| **After reading** | Progression of scope; wife/mother/homeschool mom named; philosophy; unfinishedness allowed |
| **Evidence** | Employment; CompTIA A+ (Told); philosophy quote; origin year |
| **Belongs here** | Who I am; capable of; kind of person; journey |
| **Weak now** | Recruiter web-dev chapters; no leadership; journey label mismatch |
| **Remove later** | Front-end-as-identity; duplicated Homeschool stub if the specialist page tells it |
| **Reserve** | Family stories; named church |

Visitor test: **No** — you still meet a web developer, not a CTO/MD who also coaches and homeschools.

### `/work`

| | |
| --- | --- |
| **Question** | What is she actually building and leading? |
| **Audience** | Professional / curious visitor |
| **After reading** | She leads VIIX; some personal making exists; coaching and Homeschool live elsewhere |
| **Evidence** | VIIX title; viix.solutions; POSflyt optional; VESSA collaborative only |
| **Belongs here** | What I am building (tech/business) |
| **Weak / misleading** | Project grid as identity; TRANSFORM/CREATE/SERVE as pending “work rooms” |
| **Remove later** | Recruiter-style selected-work list as the page; S-Auto (never add) |
| **Reserve** | CREATE; detailed case studies |
| **Duplicate?** | Specialist pages should carry Transform / Homeschool / Faith, not this grid |

Visitor test: **No** — you see websites she built, not a company she leads.

### `/transformation`

| | |
| --- | --- |
| **Question** | What does she actually help professionals with? |
| **Audience** | Corporate professionals considering growth |
| **After reading** | Early, real, specific audience; not VIIX delivery; not fake maturity |
| **Evidence** | Told audience + early 1:1; no outcome claims |
| **Remove later** | “Not a programme”; duplicated journey list; VIIX as the explanation |
| **Reserve** | Pricing, formats-as-launched, testimonials |

Visitor test: **No**.

### `/homeschool-core`

| | |
| --- | --- |
| **Question** | Why this exists and why it matters to her |
| **Audience** | Parents / people wanting the founder story |
| **After reading** | Nigeria 2023 origin; exists vs building; philosophy; 6P as developing framework at most |
| **Evidence** | Told story; @homeschool.core as public presence |
| **Remove later** | Mood-as-intro (“Founder story. Tactile.”) as if that were content |
| **Reserve** | Child details; unlaunched programmes as current |

Visitor test: **No** — date + one line only.

### `/faith-community`

| | |
| --- | --- |
| **Question** | How service sits in her life without becoming a ministry site |
| **Audience** | Anyone reading for the whole person |
| **After reading** | She serves and contributes; no org dump |
| **Remove later** | Nothing false; add human themes when writing, not pending boilerplate only |
| **Reserve** | Named organisations until approved |

Visitor test: **No** (too thin).

### `/thinking`

| | |
| --- | --- |
| **Question** | A sense of her mind |
| **Audience** | People who want ideas |
| **After reading** | Either a real piece of writing, or an honest wait |
| **Now** | Empty state **still correct** |
| Visitor test | **No, and that is acceptable at launch of copy later if empty is explained as choice** |

### `/connect`

| | |
| --- | --- |
| **Question** | How to reach a person, not a funnel |
| **Keep** | Email, LinkedIn, GitHub; no fake form |
| **Later** | Conversational invite in her voice; not recruiter availability |

### `/home`

Redirect only. Not a content page.

---

## L. Content gap matrix

| Content area | Current site | Source of truth | Gap | Recommended treatment | Priority |
| --- | --- | --- | --- | --- | --- |
| Technology leadership | Absent on personal pages | CTO / tech leader | Missing | Home + About + Work | P0 |
| Business leadership | Journey label only | MD / business leader | Missing | Pair with VIIX | P0 |
| VIIX | Company-site row | She leads/builds VIIX | Underdeveloped | Reweight Work; pointer for depth | P0 |
| Transformation | Empty + “not a programme” | Early coaching practice | Misrepresented | Rewrite architecture of this page | P0 |
| Coaching programme | Absent | Named, early, 1:1 started | Missing | Honest early-stage only | P0 |
| Founder identity | One Homeschool line | Homeschool Core founder | Underdeveloped | Specialist page story | P1 |
| Homeschool Core | Stub | Origin + exists/building | Underdeveloped | Story + split current/future | P1 |
| Confident Homeschool | Absent | Nested under Core | Missing | Name + reserve product depth | P2 |
| 6P Path | Absent | Six P’s defined | Missing | Short developing-framework or point out | P2 |
| Education philosophy | Different, thinner line | Confirmed four-corners quote | Underdeveloped | Homeschool Core + optional About | P1 |
| Professional journey | Old nine labels, duplicated | 7.2 growth arc | Misaligned | About only; update stages | P1 |
| Motherhood | Privacy only | Wife / mother / homeschool mom | Missing (allowed facts) | One About sentence; no family content | P1 |
| Faith/service | Reserved boilerplate | Themes; orgs unapproved | Reserved | Thematic copy; no names | P2 |
| Thinking | Honest empty | Categories, no articles | Intentionally reserved | Keep empty | P3 |
| Future direction | Pending notes | Still becoming | Missing | Light, once; no slogan spam | P2 |
| CREATE | Hole | Unknown | Intentionally reserved | Do not fill | — |
| S-Auto | Absent | Must stay absent | Prohibited | Do not add | — |

---

## M. Source-of-truth → website mapping

| Recovered item | Page / section | Do not put |
| --- | --- | --- |
| CTO / MD + VIIX | Home (who), Work (building), About (journey end) | As a case-study grid |
| Transformation audience + early programme | `/transformation` | Home as a sales card |
| Homeschool Nigeria 2023 origin | `/homeschool-core`; light About | Hero |
| @homeschool.core | `/homeschool-core` outbound | Footer spam |
| 6P Path definitions | `/homeschool-core` short, or outbound | Home |
| Four-corners philosophy | `/homeschool-core` | Every page |
| Wife / mother / homeschool mom | About | Work, Transformation |
| CompTIA A+ | About journey | Credentials wall |
| Connective “see a need…” | One About/Home beat **if approved** | Six pages |
| Faith themes | `/faith-community` | Named orgs until approved |
| POSflyt / collaborative VESSA | Work secondary | Hero |
| LDR unpublished | Nowhere public | Work |
| S-Auto | Nowhere on this site | Work |
| Thinking categories | Future articles only | Fake index |

---

## N. Copy inventory (what can be written later vs blocked)

**Can be drafted in Phase 7.3 (docs only, not the site) — Told + Evidence enough:**

- Home: who she is (tech + business leader; rooms as life, not products)
- About: human story, journey as growth, motherhood named, unfinishedness
- Work: VIIX-first; optional short making list
- Transformation: audience + early-stage honesty
- Homeschool Core: origin, exists vs building, philosophy quote
- Connect: human invite (channels already real)
- Faith: thematic depth **without** org names

**Requires more / remains reserved:**

- CREATE meaning
- Named church/community evidence
- Thinking articles
- 6P as a marketed programme (vs named framework)
- Pricing, formats-as-live, testimonials
- Family stories/photos
- English Language step (confirm keep/drop)

**Prohibited:**

- S-Auto on this site
- Recruiter portfolio restore
- Project-grid-as-identity
- Fake fullness
- Metrics/testimonials/invented ventures

---

## O. Voice and tone specification (governs 7.3+)

**Locked principle:** the site must sound like Ola in conversation — a thoughtful, capable woman explaining what she does, what she is building, what she has learned, and where she is going. **Professional is already true; “sounding professional” is not the goal.**

If a sentence is impressive but she would never say it, it **fails**. If a simpler sentence is true and sounds like her, it **wins**.

### Be

Human, simple, conversational, thoughtful, warm, story-driven, clear, confident but grounded, interesting, natural (varied sentences).

### Do not sound like

AI personal brand, corporate bio, recruitment portfolio, consulting brochure, motivational speaker, polished LinkedIn, generic thought leader, agency copy.

### Prefer (patterns, not production copy)

- “I started homeschooling in 2023 and quickly realised how much I was trying to figure out on my own.”
- “I like starting with the problem before reaching for the technology.”
- “Some things are still being built. I am comfortable with that.”

### Avoid

- “Ola embarked upon a transformative journey…”
- “I leverage a problem-centric, technology-enabled approach…”
- “I am strategically developing a portfolio of emerging initiatives…”
- Strings of abstract nouns: innovation, transformation, leadership, excellence, impact, growth, strategy, empowerment — unless the word is actually needed.

### Protect imperfections

Learning as she goes, changing direction, unfinished work, experiments, growth still happening. These are **part of the narrative**, not defects to polish away.

### Connective philosophy

At most once. Never as a repeated slogan.

---

## P. What must not be added (scope lock)

Do not invent projects, case studies, metrics, testimonials, programme results, client names, articles, services, family stories, church achievements, extra credentials, ventures, or future products as current.

Do not bring S-Auto onto this site.  
Do not restore the recruiter portfolio.  
Do not recreate the technology project grid as the identity of Work.  
Do not turn empty rooms into fake evidence.

---

## Q. First-time visitor journey (as the site stands)

| Checkpoint | Answer today |
| --- | --- |
| After hero: do I know who Ola is? | **No** — name and domains, not the hierarchy |
| After Home: is technology central but not the whole story? | **Partly** — rooms exist; leadership does not |
| After Work: building and leading? | **No** — selected websites |
| After About: how she got here and how she thinks? | **No** — web-dev about-copy |
| After Homeschool Core: why it exists? | **No** |
| After Transformation: who she helps? | **No** |
| After Thinking: her mind? | **No** (acceptable if empty stays honest) |
| Before leaving: where she is going / who she is becoming? | **No** |

The IA can carry this journey. The **copy cannot**, yet.

**Whole-person test:** today a visitor can confuse her with a developer with empty side pages. They should not confuse her with VIIX, Homeschool Core, or the coaching practice **as the whole of her** — the architecture already prevents that; the copy does not yet show the *centre* (tech/business leadership).

---

## R. Recommended Phase 7.3

**Phase 7.3 — Draft copy in documents only (no site implementation).**

Write Ola-voiced draft copy in `docs/phase-7/` mapped to this architecture:

1. Home (hero, recognise, rooms with unequal weight, close)
2. About (person, journey, motherhood named, philosophy once)
3. Work (VIIX-first; secondary making)
4. Transformation (early, specific, no fake maturity)
5. Homeschool Core (origin, exists/building, philosophy; 6P restrained)
6. Faith (thematic only)
7. Thinking (keep empty state; do not draft fake essays)
8. Connect (voice only)

Still **no** code, routes, or CMS. Phase 7.4 remains approval/edit of that draft. Phase 8 remains implementation after approval.

**PASS for 7.2 (this document):** the questions in the brief are answered above. Implementation remains **stopped**.
