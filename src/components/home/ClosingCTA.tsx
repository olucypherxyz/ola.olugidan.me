import React from 'react';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { homepage } from '@/config/homepage';

export default function ClosingCTA() {
  const { closing } = homepage.home;

  return (
    <Section
      id="close"
      className="closing-cta"
      title={closing.title}
      intro={closing.statement}
      as="h2"
    >
      <Button href={closing.cta.href}>
        {closing.cta.label} <span aria-hidden="true">→</span>
      </Button>
    </Section>
  );
}
