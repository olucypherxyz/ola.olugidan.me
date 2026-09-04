import React from 'react';
import Section from '@/components/ui/Section';
import Reveal from '@/components/Reveal';
import EditorialFigure from '@/components/home/EditorialFigure';
import RoomEnter from '@/components/RoomEnter';
import RoomPager from '@/components/RoomPager';
import { homeschoolCorePage as page } from '@/config/pages';
import { imagery } from '@/config/imagery';

function editorialNodes(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);

  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }

    if (part.startsWith('*') && part.endsWith('*')) {
      return <em key={index}>{part.slice(1, -1)}</em>;
    }

    return part;
  });
}

function Narrative({ paragraphs }: { paragraphs: readonly string[] }) {
  return (
    <>
      {paragraphs.map((paragraph) => (
        <p key={paragraph} className="section-lede">
          {editorialNodes(paragraph)}
        </p>
      ))}
    </>
  );
}

export default function HomeschoolCoreView() {
  return (
    <RoomEnter className="specialist specialist-homeschool">
      <Section
        id="homeschool-intro"
        className="page-intro homeschool-intro"
        eyebrow={page.label}
        title={page.title}
        as="h1"
      >
        <p className="type-metadata homeschool-date">{page.date}</p>
        <p className="homeschool-display">{page.display}</p>
        <Narrative paragraphs={page.opening} />
      </Section>

      <RoomPager pathname="/homeschool-core" />

      <Reveal className="reveal-sequence">
        <Section id="homeschool-learning" className="chapter-text" title={page.learning.heading}>
          <Narrative paragraphs={page.learning.paragraphs} />
          <EditorialFigure
            src={imagery.homeschoolMaterials.src}
            alt={imagery.homeschoolMaterials.alt}
            width={imagery.homeschoolMaterials.width}
            height={imagery.homeschoolMaterials.height}
            sizes={imagery.homeschoolMaterials.sizes}
            objectPosition={imagery.homeschoolMaterials.objectPosition}
            layoutRole={imagery.homeschoolMaterials.layoutRole}
            priority={imagery.homeschoolMaterials.priority}
            className="editorial-figure-homeschool"
          />
        </Section>
      </Reveal>

      <Reveal>
        <Section id="homeschool-systems" className="chapter-text" title={page.systems.heading}>
          <Narrative paragraphs={page.systems.paragraphs} />
        </Section>
      </Reveal>

      <Reveal>
        <Section
          id="homeschool-reflection"
          className="chapter-text homeschool-close"
          title={page.reflection.heading}
        >
          <Narrative paragraphs={page.reflection.paragraphs} />
        </Section>
      </Reveal>
    </RoomEnter>
  );
}
