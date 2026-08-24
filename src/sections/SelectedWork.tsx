import React from 'react';
import SectionHeader from '@/components/SectionHeader';
import ProjectRow from '@/components/ProjectRow';
import { projects } from '@/config/portfolio';

export default function SelectedWork() {
  return (
    <section id="work" className="section-block chapter-work" aria-labelledby="work-heading">
      <div className="container-site">
        <SectionHeader eyebrow="01 — Selected work" title="Work" as="h2" id="work-heading" mark />
        <p className="section-lede">Things I&apos;ve worked on — products and business websites.</p>
        <div>
          {projects.map((project) => (
            <ProjectRow key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
