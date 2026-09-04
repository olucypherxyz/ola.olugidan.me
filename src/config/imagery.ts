export type ImageLayoutRole =
  | 'hero'
  | 'feature'
  | 'supporting'
  | 'detail'
  | 'evidence'
  | 'background';

export type EditorialImage = {
  /** Phase 6 acquisition ID */
  id: 'IMG-01' | 'IMG-02' | 'IMG-03' | 'IMG-04' | 'IMG-05';
  /** Locked narrative slot */
  role: string;
  /** Engineering display role (Stage 6.6) */
  layoutRole: ImageLayoutRole;
  family: 'Detail/Human' | 'Detail/Place' | 'Human/Place' | 'Abstract';
  src: string;
  alt: string;
  /** Intrinsic pixel size of the production file */
  width: number;
  height: number;
  /** next/image `sizes` — describes rendered layout, not intrinsic width */
  sizes: string;
  /** CSS object-position for default / desktop crop */
  objectPosition: string;
  /** Above-the-fold only */
  priority: boolean;
  source: string;
  license: string;
  decision: string;
  notes: string;
};

/**
 * Approved Phase 6.5 editorial imagery + Stage 6.6 layout contracts.
 * Intrinsic size ≠ display size. Work evidence stays in `workEvidenceVisuals`.
 */
export const imagery = {
  homeWorkspace: {
    id: 'IMG-01',
    role: 'Home / Who is Ola — workspace atmosphere',
    layoutRole: 'supporting',
    family: 'Detail/Human',
    src: '/assets/editorial/home-workspace.jpg',
    alt: 'Overhead view of a Black woman writing in a planner at a bright desk, with a keyboard and tablet nearby.',
    width: 2400,
    height: 1600,
    sizes: '(max-width: 767px) 92vw, (max-width: 1023px) 70vw, 36rem',
    objectPosition: '48% 40%',
    priority: false,
    source:
      'https://www.pexels.com/photo/black-woman-with-pen-taking-notes-in-planner-7191994/',
    license:
      'Pexels License — free for commercial use; people and brands require care',
    decision:
      'APPROVE — PROVISIONAL (QC gate passed; do not reopen sourcing unless crop fails)',
    notes:
      'Editorial context only. Not a portrait of Ola. Keep writing/hands focal; tech secondary. No full-bleed.',
  },
  aboutWorkspace: {
    id: 'IMG-02',
    role: 'About / Journey — reflective place/detail',
    layoutRole: 'supporting',
    family: 'Detail/Place',
    src: '/assets/editorial/about-journey.jpg',
    alt: 'Open notebook with a pen in strong natural light and window-blind shadows.',
    width: 2400,
    height: 1760,
    sizes: '(max-width: 767px) 92vw, (max-width: 1023px) 70vw, 34rem',
    objectPosition: '52% 58%',
    priority: false,
    source:
      'https://www.pexels.com/photo/open-notebook-with-pen-in-natural-light-36598331/',
    license:
      'Pexels License — free for commercial use; people and brands require care',
    decision: 'APPROVE',
    notes:
      'Supporting narrative punctuation. Bias crop toward pen/shadows so “Memorise” header does not dominate.',
  },
  homeschoolMaterials: {
    id: 'IMG-03',
    role: 'Homeschool Core / Learning — observational',
    layoutRole: 'supporting',
    family: 'Detail/Human',
    src: '/assets/editorial/homeschool-learning.jpg',
    alt: 'A Black child concentrating on writing in a notebook at a wooden desk.',
    width: 1600,
    height: 2400,
    sizes: '(max-width: 767px) 92vw, (max-width: 1023px) 50vw, 28rem',
    objectPosition: '50% 55%',
    priority: false,
    source:
      'https://www.pexels.com/photo/crop-african-american-schoolgirl-writing-in-diary-at-desk-5200789/',
    license:
      'Pexels License — free for commercial use; people and brands require care',
    decision:
      'APPROVE — replacement after FAIL of Pexels 6986428 (representation mismatch)',
    notes:
      'Contextual learning only — not Ola’s child or homeschool. Prefer Black/African representation when hands/people are visible. Not looking at camera.',
  },
  transformationEditorial: {
    id: 'IMG-04',
    role: 'Transformation — conceptual abstract',
    layoutRole: 'feature',
    family: 'Abstract',
    src: '/assets/editorial/transformation-editorial.jpg',
    alt: 'Abstract architectural forms in warm light and shadow, suggesting structure and transition.',
    width: 1536,
    height: 1024,
    sizes: '(max-width: 767px) 92vw, (max-width: 1023px) 72vw, 40rem',
    objectPosition: '48% 50%',
    priority: false,
    source: 'Purpose-created editorial abstract (Phase 6.5.1)',
    license: 'Created for ola.olugidan.me — portfolio editorial use',
    decision: 'APPROVE — CREATED',
    notes:
      'Feature editorial pause after intro. Preserve light/shadow relationship. Do not upsize to full-bleed.',
  },
  faithConversation: {
    id: 'IMG-05',
    role: 'Faith & Community — contextual human warmth',
    layoutRole: 'supporting',
    family: 'Human/Place',
    src: '/assets/editorial/faith-conversation.jpg',
    alt: 'Two African women in conversation on a sofa in a quiet indoor setting.',
    width: 2400,
    height: 1600,
    sizes: '(max-width: 767px) 92vw, (max-width: 1023px) 70vw, 40rem',
    objectPosition: '50% 32%',
    priority: false,
    source:
      'https://www.pexels.com/photo/african-women-engaging-in-conversation-indoors-30690397/',
    license:
      'Pexels License — free for commercial use; people and brands require care',
    decision: 'APPROVE WITH CONSTRAINTS',
    notes:
      'Under Community context only. Preserve both subjects in conversation. Never imply TNCOD.',
  },
} as const satisfies Record<string, EditorialImage>;

export const workEvidenceVisuals = {
  POSflyt: {
    src: '/assets/work/posflyt.png',
    alt: 'POSflyt product interface.',
  },
  VESSA: {
    src: '/assets/work/vessa.png',
    alt: 'VESSA product modules interface.',
  },
  'VIIX Solutions': {
    src: '/assets/work/viix-solutions.png',
    alt: 'VIIX Solutions website.',
  },
  'CDR Technical': {
    src: '/assets/work/cdr-technical.png',
    alt: 'CDR Technical website.',
  },
  'Sisonke Africa': {
    src: '/assets/work/sisonke-africa.png',
    alt: 'Sisonke Africa website.',
  },
} as const;
