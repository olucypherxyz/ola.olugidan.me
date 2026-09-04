# Phase 6.5.1 — Production-asset verification

**Status:** COMPLETE (approval board locked; assets promoted 2026-09-04)  
**Rule:** Candidate ≠ approved production asset  
**Repo:** production under `public/assets/editorial/`; QC binaries stay in `docs/phase-6/verification/` (gitignored)

---

## Licence baseline (Pexels)

Validated against [Pexels License](https://www.pexels.com/license/):

- Free for personal and commercial website use; attribution not required  
- May modify  
- **Must not** imply endorsement by depicted people or brands  
- Identifiable people must not be shown in a bad light  
- Brands / trademarks / other rights still require care  

Project rule for identifiable people (Faith, Home workspace hands): copy must treat imagery as **editorial context**, never as Ola’s real community, classroom, or workplace documentation.

---

## Measured dimensions (QC download, 2026-09-04)

| ID | File (local QC) | W × H | Aspect | Size |
| --- | --- | --- | --- | --- |
| IMG-01 | `verification/IMG-01-home-workspace.jpg` | 5770 × 3847 | 1.50 landscape | ~2.0 MB |
| IMG-02 | `verification/IMG-02-about-journey.jpg` | 3348 × 2455 | 1.36 landscape | ~0.6 MB |
| IMG-03 | `verification/IMG-03-homeschool-hands.jpg` | 4000 × 6000 | 0.67 portrait | ~2.4 MB |
| IMG-03b | `verification/IMG-03b-homeschool-backup.jpg` | 2000 × 3000 | 0.67 portrait | ~0.5 MB |
| IMG-04a | `verification/IMG-04a-transform-fallback-a.jpg` | 1944 × 3456 | 0.56 portrait | ~0.3 MB |
| IMG-04b | `verification/IMG-04b-transform-fallback-b.jpg` | 7155 × 4775 | 1.50 landscape | ~8.1 MB |
| IMG-05 | `verification/IMG-05-faith-conversation.jpg` | 3408 × 2272 | 1.50 landscape | ~0.7 MB |
| IMG-05b | `verification/IMG-05b-faith-backup.jpg` | 3353 × 4805 | 0.70 portrait | ~1.1 MB |

`EditorialFigure` currently renders intrinsic aspect (`height: auto`). Portrait assets (IMG-03) will read taller than landscape slots — acceptable; object-position tweaks belong in **6.6**, not here.

---

## Visual QC & decisions

### IMG-01 — Home / Who Is Ola

**Source:** [Pexels 7191994](https://www.pexels.com/photo/black-woman-with-pen-taking-notes-in-planner-7191994/)  
**Decision:** **APPROVE — PROVISIONAL**

| Check | Result |
| --- | --- |
| Brief fit (thinking / making / planning) | Pass — overhead writing, tech secondary |
| Representation | Pass |
| Landscape crop | Pass (1.5) |
| Negative space | Pass (white desk) |
| Stock-likeness | **Caution** — clean Magickeyboard / mouse / tablet still reads as lifestyle stock |
| Brands | Soft Apple-like product silhouettes — do not imply endorsement |
| Could be read as Ola? | No — keep contextual |

**Production note:** Strongest Home candidate we have. If a less staged observational workspace appears later, it may replace this. Ship for 6.6 unless a better find lands first.

---

### IMG-02 — About / Journey

**Source:** [Pexels 36598331](https://www.pexels.com/photo/open-notebook-with-pen-in-natural-light-36598331/) (Abuja provenance on listing)  
**Decision:** **APPROVE**

| Check | Result |
| --- | --- |
| No second human after About portrait | Pass |
| Reflection / quiet light | Pass — blind-shadow drama is the image |
| Landscape crop | Pass |
| Stock-likeness | Low–moderate; light/shadow carries it |
| Brands / text | Minor: printed header **“Memorise”** + DATE/PLACE lines on pages — ambient stationery, not a logo lockup; acceptable; avoid crops that enlarge the word as a title |

---

### IMG-03 — Homeschool

**Primary:** [Pexels 6986428](https://www.pexels.com/photo/hands-writing-on-book-6986428/) — **APPROVE**  
**Backup:** [Pexels 6929188](https://www.pexels.com/photo/student-doing-her-homework-6929188/) — **HOLD as alternate**

| Check | Primary | Backup |
| --- | --- | --- |
| Hands → paper → concentration | Pass | Pass (more curriculum props) |
| Not “Ola’s homeschool” | Pass (no faces of claimable subjects) | Pass |
| Portrait crop | Native 2:3 — good for dedicated page | Same |
| Stock-likeness | Low | Moderate–low |

**Production note:** Prefer primary. Use backup only if composition needs more spatial study-desk context.

---

### IMG-04 — Transformation

**Pexels fallbacks inspected, not promoted to production:**

| Candidate | Verdict |
| --- | --- |
| [37646622](https://www.pexels.com/photo/abstract-shadows-and-light-in-modern-architecture-37646622/) skylight blue | Strong concept; cool blue skew vs warm portfolio base — **FALLBACK only** |
| [30054925](https://www.pexels.com/photo/minimalist-architecture-abstract-with-shadow-30054925/) plaster steps | Better palette fit; still generic architectural stock — **FALLBACK only** |

**Created asset (QC):** `verification/IMG-04-transformation-editorial.png` — 1536 × 1024 PNG (~2.4 MB)

| Check | Result |
| --- | --- |
| No people / location / text | Pass |
| Warm neutrals + light/structure | Pass — plaster planes, directional shadow bands |
| Restrained cool wash (not purple theme) | Pass — faint lilac only in upper light |
| Distinct from Pexels fallbacks | Pass — more organic curve + tactile grain |
| Mistakable as documentation? | No |

**Decision:** **APPROVE — CREATED** (purpose-created). Prefer this over both Pexels fallbacks.

---

### IMG-05 — Faith & Community

**Primary:** [Pexels 30690397](https://www.pexels.com/photo/african-women-engaging-in-conversation-indoors-30690397/) (Lagos on listing) — **APPROVE WITH CONSTRAINTS**  
**Backup:** [Pexels 36505192](https://www.pexels.com/photo/candid-outdoor-conversation-in-vibrant-light-36505192/) — **REJECT for production**

| Check | Primary | Backup |
| --- | --- | --- |
| African / community warmth without village cliché | Pass | Pass (candid outdoor) |
| Church-stage cliché | Avoided | Avoided |
| Identifiable people | Yes — copy must stay contextual | Yes |
| Brands / trademarks | Clean | **Fail** — Nike + Chelsea FC crest (and other kit branding) highly visible |

**Copy constraint (locked):** Never imply these women are from TNCOD or Ola’s community.

---

### IMG-06 — Thinking

**Decision:** **DEFER** (unchanged)

---

## Cross-set relationship

| Role | Mood | Risk if set feels “all stock” |
| --- | --- | --- |
| Home | High-key planning desk | Highest stock risk — monitor in page context |
| About | Quiet notebook + shadow | Lowest; most distinctive |
| Homeschool | Intimate learning hands | Low |
| Faith | Warm indoor conversation | Human/editorial; different job from Home |
| Transformation | Created abstract | Separates conceptual page from photo set |

Five different jobs preserved. No slot duplicates another.

---

## Approval board (locked for 6.6 prep)

| ID | Slot | Status | Next file action |
| --- | --- | --- | --- |
| IMG-01 | Home workspace | **APPROVE — PROVISIONAL** | Promote after naming + provenance |
| IMG-02 | About journey | **APPROVE** | Promote |
| IMG-03 | Homeschool | **APPROVE** (primary) | Promote; keep 03b off-repo unless needed |
| IMG-04 | Transformation | **APPROVE — CREATED** | Promote generated PNG; Pexels stay fallback-only |
| IMG-05 | Faith | **APPROVE WITH CONSTRAINTS** | Promote; never use 05b |
| IMG-06 | Thinking | **DEFER** | — |
| KEEP | 2 portraits + 5 work | Unchanged | — |

---

## Explicitly still not done

- No files under `public/assets/editorial/`  
- No `imagery.ts` path swaps  
- No page implementation / crop CSS  
- No Thinking acquisition  
- No photographer-name scrape into provenance yet (fill on promote from each Pexels page)  

---

## Provenance template (fill on promote)

When promoting into `public/assets/editorial/`, record per file:

- destination path  
- Pexels photo ID + URL  
- photographer name (from Pexels page)  
- decision ID (IMG-0x)  
- licence note: Pexels License + people/brand care  
- alt text that stays contextual (no false documentary claims)  
