import React from 'react';
import { about, person } from '@/config/portfolio';
import PortraitComposition from '@/components/PortraitComposition';

export default function About() {
  return (
    <section id="about" className="section-block chapter-about" aria-labelledby="about-heading">
      <div className="container-site about-grid">
        <div>
          <p className="eyebrow mb-3">About</p>
          <h2 id="about-heading" className="section-heading">
            {about.heading}
          </h2>
          {person.portraitSrc ? (
            <PortraitComposition src={person.portraitSrc} alt="" size="about" />
          ) : (
            <div className="about-portrait-slot" aria-hidden="true" />
          )}
        </div>
        <div className="about-copy">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p className="about-meta">{about.meta}</p>
        </div>
      </div>
    </section>
  );
}
