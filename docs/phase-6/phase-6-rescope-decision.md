# Phase 6.1C — Formal Re-scope Decision

**Status:** AUTHORISED / RECORDED  
**Date:** 2026-08-20  
**Repository:** `C:\Users\O\Devs\olaolugidan\ola.olugidan.me`  
**Git:** No repository history to preserve; archival is file-based only.

This is the formal transition record. The codebase remains. The **product** does not.

---

## OLD PRODUCT

Recruiter-facing developer portfolio.

Positioning: Web Developer · Front-End Developer. Open to remote Web Development and Front-End opportunities.

## OLD STRUCTURE

- Single page (`/` → `/home`)
- Developer-oriented navigation: Work · Experience · About · Contact
- OrganicEclipse hero + studio cutout
- Selected work (POSflyt, VESSA, VIIX, CDR, Sisonke)
- Experience (VIIX, 69 Resources)
- Capabilities (six-item practice grid)
- Technical stack
- About (short professional copy)
- Code and profiles
- Contact (mailto + LinkedIn + GitHub)

## NEW PRODUCT

Personal website: **ola.olugidan.me**

The context layer connecting technology, transformation, education, and service. Not a CV, recruiter portfolio, freelancer site, VIIX marketing site, coaching sales page, ministry site, or Homeschool Core product site.

## NEW EXPERIENCE MODEL

```text
ARRIVE → DISCOVER → RECOGNISE → EXPLORE → REFLECT → CONNECT
```

Homepage narrative (when copy is available):

```text
ACT I   Meet Ola
ACT II  Understand Ola
ACT III Discover the rooms
ACT IV  Understand what shaped her
ACT V   See what she contributes
ACT VI  Hear how she thinks
ACT VII Talk to her
```

## NEW CORE METAPHOR

One woman. Several rooms.

```text
BUILD
TRANSFORM
CREATE
NURTURE
SERVE
```

Primary navigation (locked):

```text
Home · About · Work · Thinking · Connect
```

Specialist destinations remain separate layers: VIIX (commercial/technical), Homeschool Core (education), Faith & Community (personal contribution). The personal site invites; it does not duplicate those sites.

---

## What is superseded

The following are **no longer the target**:

- old portfolio information architecture
- old recruiter-facing positioning
- old homepage composition (hero → selected work → experience → capabilities → stack → about → proof → contact)
- old portfolio content model (`src/config/portfolio.ts` as the product schema)
- old navigation model (Work · Experience · About · Contact)

Useful **technical** infrastructure may be retained.

Verified **evidence** may be retained only where it fits the new IA and remains truthful (for example VIIX employment and named work as a subset of BUILD/Work — not as the whole identity).

---

## Implementation inventory

### PRESERVE (technical foundation)

| Item | Why |
| --- | --- |
| Next.js App Router, React 19, TypeScript | Sound stack |
| Tailwind 3.4.6 + `src/styles/tailwind.css` custom-property architecture | Token layer will be remapped, not replaced blindly |
| `next/font`: Instrument Serif, Manrope, IBM Plex Mono | Locked type pairing |
| Theme FOUC script, `data-theme`, `ola-theme` localStorage, `ThemeToggle` | Compatible; values will follow new tokens |
| Skip link, `:focus-visible`, reduced-motion CSS + Reveal once-only observer | Accessibility baseline |
| `.container-site`, `.btn` variants, `Button`, `TextLink` primitives | Refactor visually later; keep engineering |
| `next/image` usage, robots.ts, 404 shell | Infrastructure |
| `@netlify/plugin-nextjs` | Deploy hint (still no `netlify.toml`) |
| Portrait `ola-olugidan.png` + cutout | Approved existing photography; reuse if composition fits; no face distortion |
| `o-mark.svg` | Brand mark |
| Evidence records: named projects, VIIX roles, 69 Resources, unpublished LDR note | Truthful; migrate only where IA allows |
| Email, LinkedIn, GitHub | Real contact paths |

### REFACTOR (product architecture)

| Item | Why |
| --- | --- |
| Header / nav / footer | New IA and labels |
| `src/app/home/page.tsx` and section order | New seven-act homepage |
| `src/config/portfolio.ts` | Wrong product schema; split later into personal-site content modules |
| Colour / spacing / radius / motion tokens | Phase 5 locked values (6.2-A) |
| Metadata, JSON-LD `jobTitle: Web Developer` | Recruiter identity |
| Hero (`Hero.tsx`, `PortraitComposition` OrganicEclipse) | Photo-dominant rooms, not portfolio eclipse-as-product |
| Work presentation (`SelectedWork`, `ProjectRow`) | Rooms, not selected-work list |
| Contact | Conversational Connect; no fake form |
| 404 copy (“Return to the portfolio.”) | Personal-site tone |
| `/` → `/home` redirect | Prefer `/` as Home once routes exist (6.2-D) |

### ARCHIVE (do not treat as live product)

| Item | Decision |
| --- | --- |
| Recruiter copy in `portfolio.ts` | Keep in place until a replacement content module exists; snapshot conceptually in this record. No Git history. Do not duplicate large binaries. |
| Phase 6.1 / 6.1B audits | Remain in `docs/phase-6/` as historical verification |
| Work screenshots | Keep in `public/assets/work/` until Work rooms decide usage; not homepage visual language |
| OrganicEclipse | Keep code until static hero in 6.2-C proves it is incompatible; then remove |

Archive folder created: `docs/phase-6/archive/portfolio/` (this decision + foreign-CV note). No binary duplication.

### DELETE (only after dependency check; not in 6.2-A except integrity)

| Item | Decision |
| --- | --- |
| `public/assets/resume/resume.pdf` | **Remove from production tree in 6.2-A** — another person’s CV. Never link, rename, or quote. `resumeUrl` stays empty. |
| `app_logo.png`, `no_image.png` | Template leftovers; eligible after confirm unused |
| `.env.example` Peer Signal comments | Leftover; not required |
| Recruiter-only sections (Capabilities, TechnicalStack, TechnicalProof, SectionRail) | Eligible in later 6.2 stages after homepage no longer imports them |

**6.2-A does not mass-delete components.**

### UNKNOWN / NEEDS SOURCE (CONTENT BLOCKED)

Locked Phase 1–4 documents are still **not in the workspace**. Therefore:

| Area | Status |
| --- | --- |
| Hero room slides / identity lines / CTAs | **CONTENT BLOCKED** |
| “So, who is Ola?” copy | **CONTENT BLOCKED** |
| Ways I show up blurbs | **CONTENT BLOCKED** |
| BUILD / TRANSFORM / CREATE / NURTURE / SERVE copy | **CONTENT BLOCKED** |
| Homeschool Core, education statement, Faith & Community | **CONTENT BLOCKED** |
| Career timeline dates/employers beyond verified portfolio employment | **CONTENT BLOCKED** — do not invent the nine-stage list as dated fact |
| Thinking articles | **CONTENT BLOCKED** — empty state only if using the instruction’s approved placeholder direction (see below) |
| Connect conversation categories + form backend | **CONTENT BLOCKED** / **INFRASTRUCTURE BLOCKED** |
| Additional photography | **ASSET BLOCKED** — do not generate or stock-fill |
| Ola résumé | **MISSING** — do not invent |

**Thinking empty-state copy** in the 6.2 master instruction is explicitly provided as preferred direction if articles are unavailable. That may be used later as **instruction-supplied** empty state, not as invented articles. Do not add fake titles or reading times.

**Connect:** mailto already exists as a real mechanism. A form must not claim success without an endpoint. Temporary mechanism = existing mailto until a provider is approved.

---

## Foreign résumé

`public/assets/resume/resume.pdf` is **not** Ola’s CV.

It must not be linked, referenced, surfaced, indexed, copied, used as evidence, or renamed.

`person.resumeUrl` remains `''`.

---

## What 6.2 may do without Phase 1–4 docs

Per the stop condition:

- **May:** token system, generic shell, locked route names as scaffolding
- **Must not:** fabricate narrative copy, photography, articles, claims, or a fake contact success state

Populate missing sections with **CONTENT BLOCKED** placeholders only where a route/shell requires a honest empty slot — not marketing filler.

---

## Stage gate after 6.1C

Re-scope record: **PASS** (decision recorded).

Application implementation in 6.1C: **none** (inventory first).

Next authorised stage: **6.2-A Foundation only.**
