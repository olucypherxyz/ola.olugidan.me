import React from 'react';
import Section from '@/components/ui/Section';
import TextLink from '@/components/ui/TextLink';
import { homepage } from '@/config/homepage';

export default function ThinkingPreview() {
  const { thinking } = homepage;

  return (
    <Section
      id="thinking-preview"
      className="thinking-preview"
      eyebrow={thinking.eyebrow}
      title={thinking.title}
      intro={thinking.body}
    >
      <TextLink href={thinking.href}>{thinking.cta}</TextLink>
    </Section>
  );
}
