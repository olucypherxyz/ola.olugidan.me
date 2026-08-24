import React from 'react';
import Section from '@/components/ui/Section';
import { homepage } from '@/config/homepage';

export default function CareerJourney() {
  const { journey } = homepage;

  return (
    <Section
      id="journey"
      className="career-journey"
      eyebrow={journey.eyebrow}
      title={journey.title}
    >
      <ol className="journey-list">
        {journey.stages.map((stage) => (
          <li key={stage} className="journey-stage">
            {stage}
          </li>
        ))}
      </ol>
    </Section>
  );
}
