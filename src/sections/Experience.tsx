import React from 'react';
import SectionHeader from '@/components/SectionHeader';
import ExperienceGroup from '@/components/ExperienceGroup';
import { experience } from '@/config/portfolio';

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-block chapter-experience"
      aria-labelledby="experience-heading"
    >
      <div className="container-site">
        <SectionHeader eyebrow="Experience" title="Experience" as="h2" id="experience-heading" />
        {experience.map((group, index) => (
          <ExperienceGroup key={group.company} group={group} emphasizeFirst={index === 0} />
        ))}
      </div>
    </section>
  );
}
