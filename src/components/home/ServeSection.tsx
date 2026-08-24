import React from 'react';
import Section from '@/components/ui/Section';
import TextLink from '@/components/ui/TextLink';
import { homepage } from '@/config/homepage';

export default function ServeSection() {
  const { serve } = homepage;

  return (
    <Section
      id="serve"
      className="serve-section"
      eyebrow={serve.eyebrow}
      title={serve.title}
      intro={serve.note}
    >
      <TextLink href={serve.href}>Faith and community</TextLink>
    </Section>
  );
}
