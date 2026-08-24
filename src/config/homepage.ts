import { site } from '@/config/site';

export const homepage = {
  hero: {
    name: site.name,
    identity: 'Technology · Transformation · Education · Service',
    activeRoom: 'BUILD',
    rooms: ['BUILD', 'TRANSFORM', 'CREATE', 'NURTURE', 'SERVE'] as const,
    /** Verified: existing About copy in src/config/portfolio.ts */
    support:
      "I've always been interested in what happens when technology has to work in the real world.",
    portraitSrc: '/assets/home/ola-olugidan-cutout.png',
    portraitAlt: 'Portrait of Ola Olugidan',
    portraitWidth: 800,
    portraitHeight: 1000,
    primaryCta: { label: 'Read my story', href: '/about' },
    secondaryCta: { label: 'Explore the work', href: '/work' },
  },
  recognise: {
    eyebrow: 'So, who is Ola?',
    /** Verified: same sentence as hero support; longer biography is content-pending */
    statement:
      "I've always been interested in what happens when technology has to work in the real world.",
    cta: { label: 'Read my story', href: '/about' },
  },
  contributions: {
    eyebrow: 'The ways I show up',
    intro: 'One woman. Several rooms.',
    items: [
      {
        number: '01',
        label: 'BUILD',
        title: 'Technology, business and systems',
        href: '/work',
      },
      {
        number: '02',
        label: 'TRANSFORM',
        title: 'Professional growth and transformation',
        href: '/transformation',
      },
      {
        number: '03',
        label: 'CREATE',
        title: 'Ideas and things taking shape',
      },
      {
        number: '04',
        label: 'NURTURE',
        title: 'Homeschool Core, learning and education',
        href: '/homeschool-core',
      },
      {
        number: '05',
        label: 'SERVE',
        title: 'Faith, community and service',
        href: '/faith-community',
      },
    ],
  },
  /**
   * Phase 7.4 locked Home editorial. Other pages must keep using the keys
   * above (recognise, homeschool, education, journey, serve, thinking, connect).
   */
  home: {
    heroStatement: 'I tend to start with the problem before the technology.',
    who: 'I am Ola Olugidan. I lead technology and business work, and I am currently CTO and Managing Director at VIIX Solutions.',
    widening:
      'Over time, my work has grown beyond technology. I still build systems and solve technology problems, but I also work with professionals who want to grow in their careers.',
    viix: {
      eyebrow: 'BUILD',
      paragraphs: [
        'A large part of my work happens through VIIX Solutions, where technology, business and the practical work of building a company come together.',
        'A lot of my time goes into solving problems, making things work, and figuring out what needs to happen next.',
      ],
      cta: {
        label: 'There is more about VIIX on the company site.',
        href: 'https://www.viix.solutions/',
        external: true,
      },
    },
    transform: {
      eyebrow: 'TRANSFORM',
      paragraphs: [
        'I also coach professionals who feel stuck or know they are ready for something more, but are not quite sure what needs to change.',
        'The one-to-one coaching is already underway, and I am shaping the broader programme from there.',
      ],
      cta: { label: 'Transformation', href: '/transformation' },
    },
    nurture: {
      eyebrow: 'NURTURE',
      paragraphs: [
        'I started homeschooling in Nigeria in January 2023. That experience led me to start Homeschool Core — a place for the practical guidance, community and resources I wished I had when I began.',
      ],
      cta: { label: 'Explore Homeschool Core', href: '/homeschool-core' },
    },
    serve: {
      eyebrow: 'SERVE',
      paragraphs: [
        'Service is an important part of my life.',
        'My faith and the communities I am part of have given me many opportunities to contribute, learn from others and serve where I can.',
      ],
      cta: { label: 'Faith and community', href: '/faith-community' },
    },
    closing: {
      title: 'I am still evolving.',
      statement:
        "If something here is relevant to what you're working on, I'd be glad to hear from you.",
      cta: { label: "Let's talk", href: '/connect' },
    },
  },
  homeschool: {
    eyebrow: 'Homeschool Core',
    /** Locked brief visual concept */
    date: 'January 2023',
    title: 'It started with a need.',
    note: 'The longer founder story is pending. The specialist page is reserved — nothing invented here.',
    href: '/homeschool-core',
  },
  education: {
    eyebrow: 'Learning',
    /** Locked brief statement */
    statement: 'I don’t think everyone learns in exactly the same way.',
  },
  journey: {
    eyebrow: 'Journey',
    title: 'One experience became the foundation for the next.',
    /** Locked conceptual arc. No dates or employers invented. */
    stages: [
      'English Language',
      'Technology',
      'Digital Marketing',
      'IT Support',
      'Web Development',
      'SEO',
      'Technology Leadership',
      'Business Building',
      'Transformation',
    ],
  },
  serve: {
    eyebrow: 'Serve',
    title: 'Leadership and service',
    note: 'This section is reserved. Approved copy and imagery are not in the repository yet.',
    href: '/faith-community',
  },
  thinking: {
    eyebrow: 'Thinking',
    title: 'I’m building this section slowly.',
    body: 'When I have something worth saying, I’ll put it here.',
    href: '/thinking',
    cta: 'Thinking',
  },
  connect: {
    statement: 'If something here resonated with you, I’d love to hear from you.',
    cta: { label: "Let's talk", href: '/connect' },
  },
} as const;
