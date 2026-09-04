import React from 'react';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import TextLink from '@/components/ui/TextLink';
import Reveal from '@/components/Reveal';
import EditorialFigure from '@/components/home/EditorialFigure';
import RoomEnter from '@/components/RoomEnter';
import RoomPager from '@/components/RoomPager';
import { transformationPage as page } from '@/config/pages';
import { imagery } from '@/config/imagery';

export default function TransformationView() {
  const [meaningFirst, meaningSecond] = page.meaning.paragraphs;

  return (
    <RoomEnter className="specialist specialist-transformation">
      <Section
        id="transformation-intro"
        className="page-intro transformation-intro"
        eyebrow={page.label}
        title={page.title}
        as="h1"
      >
        <p className="transformation-display">{page.display}</p>
        <p className="section-lede">{page.opening}</p>
      </Section>

      <RoomPager pathname="/transformation" />

      <Reveal className="reveal-sequence">
        <Container>
          <EditorialFigure
            src={imagery.transformationEditorial.src}
            alt={imagery.transformationEditorial.alt}
            width={imagery.transformationEditorial.width}
            height={imagery.transformationEditorial.height}
            sizes={imagery.transformationEditorial.sizes}
            objectPosition={imagery.transformationEditorial.objectPosition}
            layoutRole={imagery.transformationEditorial.layoutRole}
            priority={imagery.transformationEditorial.priority}
            className="editorial-figure-transformation"
          />
        </Container>
      </Reveal>

      <Reveal>
        <Section
          id="transformation-from"
          className="chapter-text"
          title={page.fromTechnology.heading}
          intro={page.fromTechnology.body}
        />
      </Reveal>

      <Reveal>
        <Section
          id="transformation-meaning"
          className="chapter-text"
          title={page.meaning.heading}
          intro={meaningFirst}
        >
          <p className="section-lede">{meaningSecond}</p>
        </Section>
      </Reveal>

      <Reveal>
        <Section
          id="transformation-coaching"
          className="chapter-text"
          title={page.coaching.heading}
          intro={page.coaching.body}
        />
      </Reveal>

      <Reveal>
        <Section
          id="transformation-viix"
          className="chapter-text"
          title={page.viix.heading}
          intro={page.viix.body}
        >
          <TextLink href={page.viix.cta.href} external>
            {page.viix.cta.label}
          </TextLink>
        </Section>
      </Reveal>

      <Reveal>
        <Section id="transformation-close" className="transformation-close" intro={page.closing}>
          <TextLink href={page.connect.href}>{page.connect.label}</TextLink>
        </Section>
      </Reveal>
    </RoomEnter>
  );
}
