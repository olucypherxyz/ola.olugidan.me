import React from 'react';
import Image from 'next/image';
import TextLink from '@/components/ui/TextLink';
import type { Project } from '@/config/portfolio';

export default function WorkEvidence({ project }: { project: Project }) {
  return (
    <article className="work-evidence">
      <div className="work-evidence-copy">
        <h3 className="work-evidence-name">{project.name}</h3>
        {project.subtitle ? <p className="work-evidence-sub">{project.subtitle}</p> : null}
        {project.role ? <p className="work-evidence-role">{project.role}</p> : null}
        <p className="work-evidence-desc">{project.description}</p>
        <div className="work-evidence-links">
          <TextLink href={project.liveUrl} external ariaLabel={`${project.name} live site`}>
            Live
          </TextLink>
          {project.githubUrl ? (
            <TextLink href={project.githubUrl} external ariaLabel={`${project.name} on GitHub`}>
              GitHub
            </TextLink>
          ) : null}
        </div>
      </div>
      {project.imageSrc ? (
        <figure className="work-evidence-media">
          <Image
            src={project.imageSrc}
            alt={project.imageAlt || ''}
            width={1600}
            height={1000}
            sizes="(min-width: 1024px) 36vw, 100vw"
            className="work-evidence-img"
          />
        </figure>
      ) : null}
    </article>
  );
}
