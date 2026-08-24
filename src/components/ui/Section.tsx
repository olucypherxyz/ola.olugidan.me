import React from 'react';
import Container from '@/components/ui/Container';

interface SectionProps {
  children?: React.ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
  eyebrow?: string;
  title?: string;
  intro?: string;
  as?: 'h1' | 'h2';
  contained?: boolean;
}

export default function Section({
  children,
  id,
  className = '',
  containerClassName = '',
  eyebrow,
  title,
  intro,
  as: Heading = 'h2',
  contained = true,
}: SectionProps) {
  const headingId = id ? `${id}-heading` : undefined;
  const hasIntro = Boolean(eyebrow || title || intro);

  const inner = (
    <>
      {hasIntro ? (
        <header className="section-intro">
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          {title ? (
            <Heading id={headingId} className="section-heading">
              {title}
            </Heading>
          ) : null}
          {intro ? <p className="section-lede">{intro}</p> : null}
        </header>
      ) : null}
      {children}
    </>
  );

  return (
    <section
      id={id}
      className={`section-block ${className}`.trim()}
      aria-labelledby={title ? headingId : undefined}
    >
      {contained ? <Container className={containerClassName}>{inner}</Container> : inner}
    </section>
  );
}
