import React from 'react';
import type { ExperienceGroup as ExperienceGroupType } from '@/config/portfolio';

export default function ExperienceGroup({
  group,
  emphasizeFirst = false,
}: {
  group: ExperienceGroupType;
  emphasizeFirst?: boolean;
}) {
  const headingId = `${group.company.replace(/\s+/g, '-')}-heading`;

  return (
    <section className="experience-group" aria-labelledby={headingId}>
      <h3 id={headingId} className="experience-company">
        {group.company}
      </h3>
      {group.summary ? <p className="experience-summary">{group.summary}</p> : null}
      <hr className="experience-rule" />
      {group.roles.map((role, index) => (
        <div
          key={role.title}
          className={`experience-role ${emphasizeFirst && index === 0 ? 'is-current' : ''}`}
        >
          <span className="experience-o" aria-hidden="true" />
          <p className="experience-title">{role.title}</p>
          <p className="experience-dates">{role.dates}</p>
        </div>
      ))}
    </section>
  );
}
