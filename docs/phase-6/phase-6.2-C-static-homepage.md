# Phase 6.2-C — Static homepage

## A. Status

```text
PHASE 6.2-C — PASS
```

The recruiter homepage body is gone from `/`. The new static narrative sequence is live. Motion, carousel, and invented copy were not added.

---

## B. Implemented

| Act | Section | Component |
| --- | --- | --- |
| I Arrive | Hero — name, domains, portrait, BUILD, CTAs, static room labels | `PersonalHero` + `PortraitBlock` |
| II Recognise | So, who is Ola? | `WhoIsOla` |
| III Discover | The ways I show up | `ContributionList` |
| IV Create / learn | Homeschool Core | `StorySection` |
| V Reflect | Education statement | `EditorialStatement` |
| VI Understand | Career journey (static list) | `CareerJourney` |
| VII Serve | Leadership and service (reserved) | `ServeSection` |
| VIII Think | Thinking empty state | `ThinkingPreview` |
| IX Connect | Closing invitation | `ClosingCTA` |

Content lives in `src/config/homepage.ts`. Page: `src/app/page.tsx`.

---

## C. Content sources

| Section | Source |
| --- | --- |
| Name, portrait | Existing verified assets / `site` |
| Technology · Transformation · Education · Service | Locked brief / footer line |
| BUILD / TRANSFORM / CREATE / NURTURE / SERVE | Locked room system |
| “I've always been interested…” | Existing `portfolio.ts` About copy |
| BUILD subtitle “Technology, business and digital systems” | Locked 6.2-C structure example |
| TRANSFORM–SERVE row copy | **Pending** (labels only) |
| January 2023 / “It started with a need.” | Locked brief concept |
| Homeschool story / image | **Pending** (empty slot, no stock) |
| “I don’t think everyone learns…” | Locked brief statement |
| Journey stage names | Locked conceptual arc — **no dates or employers** |
| Serve body | **Pending** |
| Thinking empty state | Locked 6.2-C approved empty copy |
| Connect closing + Let’s talk | Locked 6.2-C concept; `/connect` already exists |
| CTAs | Internal routes only (`/about`, `/work`, `/thinking`, `/connect`) |

---

## D. Preserved

- 6.2-A tokens and 6.2-B shell
- `Button`, `TextLink`, `Section`, `Container`
- Studio portrait `public/assets/about/ola-olugidan.png` via `next/image` (optimized, `priority` on hero)
- Verified socials in footer

---

## E. Replaced

Removed from `/`: OrganicEclipse hero, Selected Work, Experience, Capabilities, stack, recruiter About, proof list, Contact band, section rail.

Old section files remain on disk (unused by the homepage) for later Work/evidence reuse — not imported.

---

## F. Deferred

- Carousel / autoplay / transitions
- Parallax, scroll motion, timeline interaction
- Room hover/expand behaviour
- Specialist pages and extra photography
- Full Connect form
- Final Phase 4 copy integration
- Second portrait in “Who is Ola?” (avoided duplicate LCP load)

---

## G. Responsive QA

| Width | Result |
| --- | --- |
| ~1440 desktop Chrome | PASS — hero name + identity + portrait + BUILD + CTAs |
| 1280 / 1024 / 768 / 430 / 390 / 375 | **Not captured in this pass.** CSS stacks copy → photo → context below 1024; contribution rows become a single column below 768. |

---

## H. Accessibility QA

| Check | Result |
| --- | --- |
| Semantics | One `h1` (name); following sections `h2`; landmarks from shell |
| Alt | Hero portrait: “Portrait of Ola Olugidan”. Homeschool slot `aria-hidden` |
| Keyboard / focus | Shell controls remain; homepage links are real `<a>`/`Link`. **Not fully walked.** |
| Contrast | Body uses text / text-secondary / muted-aa. Accent used on labels, not body text |
| Hover-only info | None — pending rooms show “Pending” in the document |
| Reduced motion | No homepage choreography to disable |

---

## I. Performance

- Hero image: `next/image`, explicit width/height, `priority`, `sizes`, CSS `aspect-ratio: 4 / 5` to limit CLS
- No below-fold photography
- No new JS libraries; homepage sections are server components except inherited shell clients
- Cutout / OrganicEclipse not used (smaller conceptual LCP than the unoptimized cutout)

---

## J. Known issues

1. Full 1440→375 matrix, dark-mode homepage capture, and dedicated keyboard pass were **not** completed.
2. Port 4028 may still serve an older process; the new build was verified on **4029**.
3. “Who is Ola?” repeats the same verified sentence as the hero — honest, not yet Phase 4-rich.
4. Four contribution rooms are structurally present with **Pending** instead of invented blurbs.
5. Unused portfolio section files are still in `src/sections/` (not on `/`).

---

## Killcritic (brief)

Identity and photograph dominate the hero. Rooms are visible without a carousel. Recruiter CTAs and capability grids are gone. Quiet pending slots were preferred over stock images and fake articles.

**Stop.** Do not start carousel, motion, About, Work, or Connect form until this gate is accepted.
