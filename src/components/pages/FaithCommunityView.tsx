import React from 'react';
import Section from '@/components/ui/Section';
import Reveal from '@/components/Reveal';
import EditorialFigure from '@/components/home/EditorialFigure';
import RoomEnter from '@/components/RoomEnter';
import RoomPager from '@/components/RoomPager';
import { faithCommunityPage as page } from '@/config/pages';
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

export default function FaithCommunityView() {
  return (
    <RoomEnter className="specialist specialist-faith">
      <Section
        id="faith-intro"
        className="page-intro faith-intro"
        eyebrow={page.label}
        title={page.title}
        as="h1"
      />

      <RoomPager pathname="/faith-community" />

      <Reveal>
        <Section id="faith-service" className="chapter-text" title={page.service.heading}>
          <Narrative paragraphs={page.service.paragraphs} />
        </Section>
      </Reveal>

      <Reveal className="reveal-sequence">
        <Section id="faith-community" className="chapter-text" title={page.community.heading}>
          <Narrative paragraphs={page.community.paragraphs} />
          <EditorialFigure
            src={imagery.faithConversation.src}
            alt={imagery.faithConversation.alt}
            width={imagery.faithConversation.width}
            height={imagery.faithConversation.height}
            sizes={imagery.faithConversation.sizes}
            objectPosition={imagery.faithConversation.objectPosition}
            layoutRole={imagery.faithConversation.layoutRole}
            priority={imagery.faithConversation.priority}
            className="editorial-figure-faith"
          />
        </Section>
      </Reveal>

      <Reveal>
        <Section id="faith-tncod" className="chapter-text" title={page.tncod.heading}>
          <Narrative paragraphs={page.tncod.paragraphs} />
        </Section>
      </Reveal>

      <Reveal>
        <Section id="faith-people" className="chapter-text" title={page.people.heading}>
          <Narrative paragraphs={page.people.paragraphs} />
        </Section>
      </Reveal>

      <Reveal>
        <Section id="faith-teaching" className="chapter-text" title={page.teaching.heading}>
          <Narrative paragraphs={page.teaching.paragraphs} />
        </Section>
      </Reveal>

      <Reveal>
        <Section id="faith-belief" className="chapter-text faith-close" title={page.faith.heading}>
          <Narrative paragraphs={page.faith.paragraphs} />
          <p className="section-lede faith-closing-statement">
            <strong>{page.faith.statement}</strong>
          </p>
        </Section>
      </Reveal>
    </RoomEnter>
  );
}
