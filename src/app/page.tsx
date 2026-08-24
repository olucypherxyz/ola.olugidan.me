import React from 'react';
import PersonalHero from '@/components/home/PersonalHero';
import WhoIsOla from '@/components/home/WhoIsOla';
import HomeWidening from '@/components/home/HomeWidening';
import HomeChapter from '@/components/home/HomeChapter';
import ClosingCTA from '@/components/home/ClosingCTA';
import Reveal from '@/components/Reveal';
import { homepage } from '@/config/homepage';
import { pageMetadata } from '@/lib/page-metadata';

export const metadata = pageMetadata({
  path: '/',
  description: homepage.home.who,
});

export default function HomePage() {
  const { viix, transform, nurture, serve } = homepage.home;

  return (
    <>
      <PersonalHero />
      <Reveal className="reveal-sequence">
        <WhoIsOla />
      </Reveal>
      <Reveal>
        <HomeWidening />
      </Reveal>
      <Reveal>
        <HomeChapter
          id="build"
          eyebrow={viix.eyebrow}
          paragraphs={viix.paragraphs}
          cta={viix.cta}
        />
      </Reveal>
      <Reveal>
        <HomeChapter
          id="transform"
          eyebrow={transform.eyebrow}
          paragraphs={transform.paragraphs}
          cta={transform.cta}
        />
      </Reveal>
      <Reveal>
        <HomeChapter
          id="homeschool"
          eyebrow={nurture.eyebrow}
          paragraphs={nurture.paragraphs}
          cta={nurture.cta}
        />
      </Reveal>
      <Reveal>
        <HomeChapter
          id="serve"
          eyebrow={serve.eyebrow}
          paragraphs={serve.paragraphs}
          cta={serve.cta}
        />
      </Reveal>
      <Reveal>
        <ClosingCTA />
      </Reveal>
    </>
  );
}
