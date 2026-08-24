import React from 'react';
import Image from 'next/image';
import type { Project } from '@/config/portfolio';
import TextLink from '@/components/ui/TextLink';
import Reveal from '@/components/Reveal';

function MediaSlot({ src, alt, caption }: { src?: string; alt?: string; caption?: string }) {
  return (
    <figure className="project-media">
      {src ? (
        <div className="project-media-frame">
          <Image
            src={src}
            alt={alt || ''}
            width={1600}
            height={1000}
            className="project-media-img"
            sizes="(min-width: 1024px) 36vw, 100vw"
          />
        </div>
      ) : (
        <div className="project-media-slot" aria-hidden="true">
          <span className="o-mark-core-slot" />
        </div>
      )}
      {src ? <figcaption className="project-media-caption">{caption}</figcaption> : null}
    </figure>
  );
}

export default function ProjectRow({ project }: { project: Project }) {
  return (
    <Reveal>
      <article className={`project-row project-${project.type}`}>
        <div className="project-meta">
          <p className="project-number">
            <span className="project-num-ring" aria-hidden="true" />
            {project.number}
          </p>
          <p className="project-type">{project.typeLabel}</p>
        </div>
        <div className="project-body">
          <h3 className="project-name">{project.name}</h3>
          {project.subtitle ? <p className="project-subtitle">{project.subtitle}</p> : null}
          {project.role ? <p className="project-role">{project.role}</p> : null}
          <p className="project-desc">{project.description}</p>
          {project.detail ? <p className="project-detail">{project.detail}</p> : null}
          {project.scope ? (
            <ul className="project-scope">
              {project.scope.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}
          <div className="project-links">
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
        <MediaSlot src={project.imageSrc} alt={project.imageAlt} caption={project.imageCaption} />
      </article>
    </Reveal>
  );
}
