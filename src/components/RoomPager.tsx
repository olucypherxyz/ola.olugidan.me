'use client';

import React from 'react';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import { getRoomAdjacency, type RoomStop } from '@/config/rooms';
import { setRoomNavDirection } from '@/lib/room-nav';

function stopLabel(stop: RoomStop, kind: 'previous' | 'next') {
  if (stop.href === '/') return `${kind === 'previous' ? 'Previous' : 'Next'}: Home`;
  return `${kind === 'previous' ? 'Previous' : 'Next'}: ${stop.room} — ${stop.name}`;
}

function RoomStopLink({ stop, kind }: { stop: RoomStop; kind: 'previous' | 'next' }) {
  return (
    <Link
      href={stop.href}
      className={`room-pager-link room-pager-${kind === 'previous' ? 'prev' : 'next'}`}
      aria-label={stopLabel(stop, kind)}
      onClick={() => setRoomNavDirection(kind)}
    >
      <span className="eyebrow">{kind === 'previous' ? 'Previous' : 'Next'}</span>
      {stop.href === '/' ? (
        <span className="room-pager-name">{stop.name}</span>
      ) : (
        <>
          <span className="room-pager-room">{stop.room}</span>
          <span className="room-pager-name">{stop.name}</span>
        </>
      )}
    </Link>
  );
}

export default function RoomPager({ pathname }: { pathname: string }) {
  const adjacent = getRoomAdjacency(pathname);
  if (!adjacent) return null;

  return (
    <nav className="room-pager" aria-label="Related rooms">
      <Container className="room-pager-inner">
        {adjacent.previous ? <RoomStopLink stop={adjacent.previous} kind="previous" /> : null}
        {adjacent.next ? <RoomStopLink stop={adjacent.next} kind="next" /> : null}
      </Container>
    </nav>
  );
}
