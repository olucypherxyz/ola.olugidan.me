import React from 'react';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import PortraitComposition from '@/components/PortraitComposition';
import { homepage } from '@/config/homepage';

function roomHref(label: string) {
  const item = homepage.contributions.items.find((entry) => entry.label === label);
  if (item && 'href' in item && item.href) return item.href;
  return undefined;
}

export default function PersonalHero() {
  const { hero, home } = homepage;

  return (
    <section className="personal-hero" aria-labelledby="hero-name">
      <Container className="personal-hero-grid">
        <div className="personal-hero-copy">
          <h1 id="hero-name" className="personal-hero-name hero-enter">
            {hero.name}
          </h1>
        </div>

        <PortraitComposition
          src={hero.portraitSrc}
          alt={hero.portraitAlt}
          size="hero"
          priority
          width={hero.portraitWidth}
          height={hero.portraitHeight}
          className="personal-hero-photo"
        />

        <div className="personal-hero-context">
          <p className="eyebrow personal-hero-room hero-enter hero-enter-3">{hero.activeRoom}</p>
          <p className="personal-hero-support hero-enter hero-enter-3">{home.heroStatement}</p>
          <ol className="personal-hero-rooms hero-enter hero-enter-5" aria-label="Rooms">
            {hero.rooms.map((room) => {
              const href = roomHref(room);
              const current = room === hero.activeRoom;

              return (
                <li key={room} className={current ? 'is-current' : undefined}>
                  {href ? (
                    <Link href={href} className="hero-room-link">
                      {room}
                    </Link>
                  ) : (
                    <span className="hero-room-static">{room}</span>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </Container>
    </section>
  );
}
