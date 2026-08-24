export type EditorialImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  source: string;
  license: string;
};

/** Temporary licensed editorial atmosphere. Not photographs of Ola. */
export const imagery = {
  homeWorkspace: {
    src: '/assets/editorial/workspace-hands.jpg',
    alt: 'Hands writing in a notebook beside a keyboard on a bright desk.',
    width: 1600,
    height: 1067,
    source: 'https://www.pexels.com/photo/person-writing-on-a-notebook-7191981/',
    license: 'Pexels License (free to use)',
  },
  aboutWorkspace: {
    src: '/assets/editorial/notebook-desk.jpg',
    alt: 'An open blank notebook on a dark wooden table.',
    width: 1600,
    height: 1067,
    source: 'https://unsplash.com/photos/an-open-notebook-on-a-wooden-table-D6AlacFwS_Q',
    license: 'Unsplash License',
  },
  homeschoolMaterials: {
    src: '/assets/editorial/learning-books.jpg',
    alt: 'Hands taking notes beside open books on a table.',
    width: 1600,
    height: 1067,
    source: 'https://www.pexels.com/photo/a-woman-researching-and-writing-on-her-notebook-6549594/',
    license: 'Pexels License (free to use)',
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
