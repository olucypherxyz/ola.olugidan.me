import React from 'react';
import Button from '@/components/ui/Button';
import OMark from '@/components/OMark';
import PortraitComposition from '@/components/PortraitComposition';
import { person } from '@/config/portfolio';

export default function Hero() {
  const [first, last] = person.name.split(' ');

  return (
    <section id="intro" className="hero chapter-intro" aria-labelledby="hero-name">
      <div className="container-site hero-layout">
        <div className="hero-main">
          <p className="eyebrow hero-role hero-in hero-in-1">
            <OMark size={14} />
            {person.role}
          </p>
          <h1 id="hero-name" className="hero-name hero-in hero-in-2" aria-label={person.name}>
            <span aria-hidden="true">{first}</span>
            <span aria-hidden="true">{last}</span>
          </h1>
          <p className="hero-lead hero-in hero-in-3">{person.lead}</p>
          <p className="hero-support hero-in hero-in-3">
            <span className="availability-mark" aria-hidden="true" />
            {person.availability}
          </p>
          <div className="hero-actions hero-in hero-in-4">
            <Button href="/work">View my work →</Button>
            <Button href="/connect" variant="ghost">
              Contact →
            </Button>
          </div>
        </div>

        {person.portraitSrc ? (
          <PortraitComposition
            src={person.portraitSrc}
            alt={person.portraitAlt}
            size="hero"
            priority
          />
        ) : null}
      </div>
    </section>
  );
}
