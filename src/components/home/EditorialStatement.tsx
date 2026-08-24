import React from 'react';
import Section from '@/components/ui/Section';
import { homepage } from '@/config/homepage';

export default function EditorialStatement() {
  const { education } = homepage;

  return (
    <Section
      id="learning"
      className="editorial-statement"
      eyebrow={education.eyebrow}
      title={education.statement}
    />
  );
}
