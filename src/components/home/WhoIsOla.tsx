import React from 'react';
import Section from '@/components/ui/Section';
import EditorialFigure from '@/components/home/EditorialFigure';
import { homepage } from '@/config/homepage';
import { imagery } from '@/config/imagery';

export default function WhoIsOla() {
  const image = imagery.homeWorkspace;

  return (
    <Section id="recognise" className="who-is-ola home-statement" title={homepage.home.who} as="h2">
      <EditorialFigure
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        sizes={image.sizes}
        objectPosition={image.objectPosition}
        layoutRole={image.layoutRole}
        priority={image.priority}
        className="editorial-figure-home"
      />
    </Section>
  );
}
