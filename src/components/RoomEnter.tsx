'use client';

import React, { useLayoutEffect, useRef } from 'react';
import { clearRoomNavDirection, readRoomNavDirection } from '@/lib/room-nav';

export default function RoomEnter({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const dir = readRoomNavDirection();
    const enterClass =
      dir === 'next'
        ? 'room-enter-forward'
        : dir === 'previous'
          ? 'room-enter-back'
          : 'room-enter-direct';
    el.classList.remove('room-enter-forward', 'room-enter-back', 'room-enter-direct');
    el.classList.add(enterClass);

    if (dir) {
      document.getElementById('content')?.focus({ preventScroll: true });
    }

    const timer = window.setTimeout(() => {
      clearRoomNavDirection();
    }, 50);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div ref={rootRef} className={className}>
      {children}
    </div>
  );
}
