import { homepage } from '@/config/homepage';

export const specialists = {
  transformation: {
    path: '/transformation',
    title: 'Transformation',
    mood: 'Structured, professional, human.',
    statement: homepage.journey.title,
    note: 'This is a context page, not a programme or consulting offer. Approved transformation copy is not in the repository yet.',
    stages: homepage.journey.stages,
    viix: {
      label: 'VIIX Solutions',
      href: 'https://www.viix.solutions/',
      note: 'VIIX remains the specialist commercial layer. This site only points there.',
    },
  },
  homeschool: {
    path: '/homeschool-core',
    title: 'Homeschool Core',
    mood: 'Founder story. Tactile. Editorial.',
    date: homepage.homeschool.date,
    statement: homepage.homeschool.title,
    education: homepage.education.statement,
    note: 'The longer founder story and approved imagery are not in the repository yet. This page will not use stock photographs or pictures of children.',
    privacy:
      'Family privacy comes first. Identifiable images of children will not be published here.',
  },
  faith: {
    path: '/faith-community',
    title: 'Faith and community',
    mood: 'Quiet. Documentary. Grounded.',
    statement: homepage.serve.title,
    note: 'This is a personal contribution dimension, not a ministry website. Approved copy and documentary imagery are not in the repository yet.',
  },
} as const;
