import React from 'react';
import Section from '@/components/ui/Section';
import EditorialFigure from '@/components/home/EditorialFigure';
import { homepage } from '@/config/homepage';
import { imagery } from '@/config/imagery';

export default function WhoIsOla() {
  return (
    <Section id="recognise" className="who-is-ola home-statement" title={homepage.home.who} as="h2">
      <EditorialFigure
        src={imagery.homeWorkspace.src}
        alt={imagery.homeWorkspace.alt}
        width={imagery.homeWorkspace.width}
        height={imagery.homeWorkspace.height}
        className="editorial-figure-home"
      />
    </Section>
  );
}
