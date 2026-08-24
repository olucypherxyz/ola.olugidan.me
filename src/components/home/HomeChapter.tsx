import React from 'react';
import Section from '@/components/ui/Section';
import TextLink from '@/components/ui/TextLink';

type HomeChapterCta = {
  label: string;
  href: string;
  external?: boolean;
};

export default function HomeChapter({
  id,
  eyebrow,
  paragraphs,
  cta,
}: {
  id: string;
  eyebrow: string;
  paragraphs: readonly string[];
  cta: HomeChapterCta;
}) {
  const [title, intro] = paragraphs;

  return (
    <Section id={id} className="home-chapter" eyebrow={eyebrow} title={title} intro={intro}>
      <TextLink href={cta.href} external={cta.external}>
        {cta.label}
      </TextLink>
    </Section>
  );
}
