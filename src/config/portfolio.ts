export const site = {
  name: 'Ola Olugidan',
  title: 'Ola Olugidan — Web Developer · Front-End Developer',
  description:
    'Web Developer and Front-End Developer. I build websites, web applications, and business systems that help people get work done. Open to remote Web Development and Front-End opportunities.',
};

export const person = {
  name: 'Ola Olugidan',
  role: 'Web Developer · Front-End Developer',
  lead: 'I build websites, web applications, and business systems that help people get work done.',
  availability: 'Open to remote Web Development and Front-End opportunities.',
  /** Empty until the approved résumé PDF is supplied. */
  resumeUrl: '',
  portraitSrc: '/assets/about/ola-olugidan.png',
  portraitAlt: 'Portrait of Ola Olugidan',
};

export const social = {
  email: 'olayinkaolugidan@gmail.com',
  linkedin: 'https://www.linkedin.com/in/olayinkaolugidan',
  github: 'https://github.com/OlaNailedIT',
};

export const nav = {
  links: [
    { label: 'Work', href: '#work' },
    { label: 'Experience', href: '#experience' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ],
};

export type ProjectType = 'personal' | 'collaborative' | 'company' | 'client';

export interface Project {
  id: string;
  number: string;
  name: string;
  type: ProjectType;
  typeLabel: string;
  subtitle?: string;
  description: string;
  detail?: string;
  scope?: string[];
  role?: string;
  liveUrl: string;
  githubUrl?: string;
  imageSrc?: string;
  imageAlt?: string;
  imageCaption?: string;
}

export const projects: Project[] = [
  {
    id: 'posflyt',
    number: '01',
    name: 'POSflyt',
    type: 'personal',
    typeLabel: 'Personal product',
    subtitle: 'Offline-first POS / ERP',
    description:
      "POSflyt started from a simple question: what should a business's POS do when the internet goes down? I built it around the day-to-day work of African SMEs — sales, inventory, expenses, credit, reporting and business data in one place.",
    detail:
      'The hard part was maintaining transaction integrity while supporting offline-first operation and synchronization. I designed and built the backend around that: transaction processing, ledger integrity, inventory and business-data management, a local copy of the data, and syncing it when the connection comes back.',
    liveUrl: 'https://posflyt.vercel.app/',
    githubUrl: 'https://github.com/OlaNailedIT/posflyt',
    imageSrc: '/assets/work/posflyt.png',
    imageAlt: 'Screenshot of the POSflyt website homepage',
    imageCaption: 'POSflyt',
  },
  {
    id: 'vessa',
    number: '02',
    name: 'VESSA',
    type: 'collaborative',
    typeLabel: 'Collaborative product',
    description:
      'VESSA is a business operating system for SMEs that brings everyday sales, inventory, expenses and customer credit into one place.',
    role: 'Worked on the VESSA POS module, QA, phase testing and feature implementation.',
    liveUrl: 'https://vessa.oryzune.app/',
    imageSrc: '/assets/work/vessa.png',
    imageAlt: 'Screenshot of the VESSA product overview',
    imageCaption: 'VESSA',
  },
  {
    id: 'viix-solutions',
    number: '03',
    name: 'VIIX Solutions',
    type: 'company',
    typeLabel: 'Company website',
    description:
      'The VIIX company website, built while working at VIIX. I worked on the visual upgrade and SEO — the public face of the company.',
    liveUrl: 'https://www.viix.solutions/',
    imageSrc: '/assets/work/viix-solutions.png',
    imageAlt: 'Screenshot of the VIIX Solutions website homepage',
    imageCaption: 'VIIX Solutions',
  },
  {
    id: 'cdr-technical',
    number: '04',
    name: 'CDR Technical',
    type: 'client',
    typeLabel: 'Client website',
    description:
      'A client website for CDR Technical. I handled the site from the beginning of the project through launch.',
    liveUrl: 'https://cdrtechnical.co.za/',
    imageSrc: '/assets/work/cdr-technical.png',
    imageAlt: 'Screenshot of the CDR Technical website homepage',
    imageCaption: 'CDR Technical',
  },
  {
    id: 'sisonke-africa',
    number: '05',
    name: 'Sisonke Africa',
    type: 'client',
    typeLabel: 'Client website',
    description:
      'A client website for Sisonke Africa Energy. I took the public site from the start of the project through launch.',
    liveUrl: 'https://www.sisonkeafrica.co.za/',
    imageSrc: '/assets/work/sisonke-africa.png',
    imageAlt: 'Screenshot of the Sisonke Africa Energy website homepage',
    imageCaption: 'Sisonke Africa',
  },
];

/**
 * Internal model only. Not listed in Selected Work.
 * LDR was not completed or deployed to production — do not claim users, revenue, or availability.
 */
export const deferredWork = {
  ldr: {
    id: 'ldr',
    name: 'LDR',
    status: 'not-completed-not-production' as const,
    framing:
      'Architected and built a substantial full-stack foundation for LDR, a multi-tenant leadership development SaaS platform, implementing authentication, RBAC, tenant isolation, organization management, competency and event tracking, subscriptions, Paystack payments, testing, security controls, and CI/CD infrastructure. The project was not completed or deployed to production.',
  },
};

export interface ExperienceRole {
  title: string;
  dates: string;
}

export interface ExperienceGroup {
  company: string;
  summary?: string;
  roles: ExperienceRole[];
}

export const experience: ExperienceGroup[] = [
  {
    company: 'VIIX Solutions',
    summary:
      "At VIIX, my work has moved from hands-on IT support and web development into leading technical delivery. I've worked on business websites, web applications, SEO, deployment, and the practical technology problems that come with running projects for real businesses.",
    roles: [
      { title: 'CTO / Managing Director', dates: 'Jan 2026 – Present' },
      { title: 'Web Developer', dates: 'Mar 2023 – Jan 2026' },
      { title: 'IT Support Specialist | Web Developer', dates: 'Feb 2022 – Mar 2023' },
    ],
  },
  {
    company: '69 Resources Nigeria Limited',
    summary: 'IT support — keeping systems running and helping people get their work done.',
    roles: [{ title: 'IT Support Specialist', dates: 'Nov 2020 – Feb 2022' }],
  },
];

export interface Capability {
  number: string;
  title: string;
  description: string;
}

export const capabilities: Capability[] = [
  {
    number: '01',
    title: 'Web Development',
    description:
      'Business websites: planning, building and maintaining them so they are useful to the organisation behind them. On this site, that includes client work such as CDR Technical and Sisonke Africa, handled from the start of the project through launch.',
  },
  {
    number: '02',
    title: 'Frontend Development',
    description:
      'The interface layer — markup, layout and interaction — so a site or product is usable across screens. This is how the work looks and behaves, not the same as owning a whole product.',
  },
  {
    number: '03',
    title: 'Web Applications',
    description:
      'Software people work in through the browser, rather than a brochure site. POSflyt is the public example: a POS/ERP built around day-to-day operations, including when connectivity is unreliable.',
  },
  {
    number: '04',
    title: 'Business Systems',
    description:
      'Sales, inventory, expenses, transactions and the records behind them. That is the shape of POSflyt, and of the POS-module work I did on VESSA.',
  },
  {
    number: '05',
    title: 'Backend Development',
    description:
      'Server-side design behind applications like POSflyt: processing, data integrity, a local copy of the data, and syncing it when the connection comes back.',
  },
  {
    number: '06',
    title: 'Technical SEO',
    description:
      'Structuring a site so search engines can crawl it and understand it. I did this kind of work on the VIIX company website.',
  },
];

export interface StackCategory {
  title: string;
  items: string[];
}

/**
 * Published stack: professional tools, not a claim that every Selected Work
 * live site demonstrates every item. VESSA’s product stack is not listed
 * as personal coding ownership.
 */
export const stackNote =
  'Tools I use in my work. Public source for product architecture is POSflyt on GitHub. Some items also come from other professional project work and are not demonstrated by the live sites in Selected Work.';

export const stackCategories: StackCategory[] = [
  {
    title: 'Frontend',
    items: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS'],
  },
  {
    title: 'Backend & APIs',
    items: ['Node.js', 'Express.js', 'REST APIs', 'JWT'],
  },
  {
    title: 'Data & architecture',
    items: ['PostgreSQL', 'Prisma', 'IndexedDB', 'Offline-first architecture', 'Synchronization'],
  },
  {
    title: 'DevOps & deployment',
    items: ['Git', 'GitHub', 'GitHub Actions', 'Vercel', 'Render', 'Netlify'],
  },
  {
    title: 'Web & SEO',
    items: ['WordPress', 'Technical SEO', 'Google Search Console', 'On-page optimization'],
  },
];

export const about = {
  heading: 'About',
  paragraphs: [
    "I've always been interested in what happens when technology has to work in the real world.",
    'I have a Computer Science background, with recent work focused on web development, IT and business technology. That path has shaped how I work: understand what needs to happen, build it properly, and keep the person using it in mind.',
    "These days I focus on web development and front-end work. I've also spent a lot of time on backend systems, technical SEO, and product work — usually because the job in front of me needed more than a website.",
    'The through-line is practical: websites and applications that people can actually use, and systems that have to keep working when conditions are imperfect.',
  ],
  meta: 'Web · Front-end · Business systems',
};

export const proof = {
  heading: 'Code and profiles',
  intro:
    'The work above is the main proof. If you want to look at source, POSflyt and the rest of my public work are on GitHub.',
  links: [
    { label: 'GitHub', href: social.github, detail: 'github.com/OlaNailedIT' },
    {
      label: 'POSflyt on GitHub',
      href: 'https://github.com/OlaNailedIT/posflyt',
      detail: 'github.com/OlaNailedIT/posflyt',
    },
  ],
};

export const contact = {
  heading: 'Contact',
  line: "I'm open to remote Web Development and Front-End opportunities, and to conversations about relevant product or project work.",
};

export const showTechnicalStack = true;
