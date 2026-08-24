import React from 'react';
import Section from '@/components/ui/Section';
import TextLink from '@/components/ui/TextLink';
import { connectPage } from '@/config/pages';
import Reveal from '@/components/Reveal';

export default function ConnectView() {
  return (
    <div className="connect-page">
      <Section id="connect" className="page-intro connect-intro" title={connectPage.title} as="h1">
        <p className="connect-opening">{connectPage.opening}</p>
      </Section>

      <Reveal>
        <Section id="connect-channels" className="connect-channels-section">
          <ul className="connect-channels">
            {connectPage.channels.map((channel) => (
              <li
                key={channel.label}
                className={
                  'primary' in channel && channel.primary
                    ? 'connect-channel connect-channel-primary'
                    : 'connect-channel'
                }
              >
                <span className="connect-channel-label type-metadata">{channel.label}</span>
                <TextLink href={channel.href} external={channel.external}>
                  {channel.detail}
                </TextLink>
              </li>
            ))}
          </ul>
          <p className="section-lede connect-guidance">{connectPage.guidance}</p>
        </Section>
      </Reveal>

      <Reveal>
        <Section id="connect-viix" className="connect-viix" intro={connectPage.viix.body}>
          <TextLink href={connectPage.viix.cta.href} external>
            {connectPage.viix.cta.label}
          </TextLink>
        </Section>
      </Reveal>
    </div>
  );
}
