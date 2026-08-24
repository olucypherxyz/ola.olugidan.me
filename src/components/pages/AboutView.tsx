import React from 'react';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import PortraitBlock from '@/components/home/PortraitBlock';
import EditorialFigure from '@/components/home/EditorialFigure';
import Button from '@/components/ui/Button';
import TextLink from '@/components/ui/TextLink';
import Reveal from '@/components/Reveal';
import { aboutPage } from '@/config/pages';
import { imagery } from '@/config/imagery';

function AboutPassage({
  id,
  body,
  cta,
}: {
  id: string;
  body: string;
  cta?: { label: string; href: string; external?: boolean };
}) {
  return (
    <div id={id} className="section-block chapter-text about-passage">
      <Container>
        <p className="about-chapter-p">{body}</p>
        {cta ? (
          <TextLink href={cta.href} external={cta.external}>
            {cta.label}
          </TextLink>
        ) : null}
      </Container>
    </div>
  );
}

export default function AboutView() {
  const { portrait } = aboutPage;

  return (
    <div className="about-page">
      <Section
        id="about-intro"
        className="page-intro chapter-statement about-intro"
        eyebrow="About"
        title={aboutPage.title}
        intro={aboutPage.opening}
        as="h1"
      />

      <Reveal>
        <Section id="about-portrait" className="chapter-image" contained={false}>
          <Container>
            <PortraitBlock
              src={portrait.src}
              alt={portrait.alt}
              width={portrait.width}
              height={portrait.height}
              className="about-portrait"
            />
          </Container>
        </Section>
      </Reveal>

      <Reveal className="reveal-sequence">
        <AboutPassage id="about-journey" body={aboutPage.journey} />
        <Container>
          <EditorialFigure
            src={imagery.aboutWorkspace.src}
            alt={imagery.aboutWorkspace.alt}
            width={imagery.aboutWorkspace.width}
            height={imagery.aboutWorkspace.height}
            className="editorial-figure-about"
          />
        </Container>
      </Reveal>
      <Reveal>
        <AboutPassage id="about-technology" body={aboutPage.technology} />
      </Reveal>
      <Reveal>
        <AboutPassage
          id="about-viix"
          body={aboutPage.viix.body}
          cta={{ ...aboutPage.viix.cta, external: true }}
        />
      </Reveal>
      <Reveal>
        <AboutPassage id="about-transformation" body={aboutPage.transformation} />
      </Reveal>
      <Reveal>
        <AboutPassage id="about-learning" body={aboutPage.learning} />
      </Reveal>
      <Reveal>
        <AboutPassage
          id="about-homeschool"
          body={aboutPage.homeschool.body}
          cta={aboutPage.homeschool.cta}
        />
      </Reveal>
      <Reveal>
        <AboutPassage
          id="about-service"
          body={aboutPage.service.body}
          cta={aboutPage.service.cta}
        />
      </Reveal>
      <Reveal>
        <AboutPassage id="about-thread" body={aboutPage.thread} />
      </Reveal>

      <Reveal>
        <Section
          id="about-close"
          className="page-close closing-cta"
          title={aboutPage.closing.title}
          intro={aboutPage.closing.statement}
        >
          <div className="personal-hero-actions">
            <Button href={aboutPage.workCta.href}>
              {aboutPage.workCta.label} <span aria-hidden="true">→</span>
            </Button>
            <Button href={aboutPage.connectCta.href} variant="ghost">
              {aboutPage.connectCta.label} <span aria-hidden="true">→</span>
            </Button>
          </div>
        </Section>
      </Reveal>
    </div>
  );
}
