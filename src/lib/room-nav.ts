const NAV_KEY = 'ola-room-nav';

let pending: 'previous' | 'next' | null = null;

export function setRoomNavDirection(kind: 'previous' | 'next') {
  pending = kind;
  try {
    sessionStorage.setItem(NAV_KEY, kind);
  } catch {
    /* directional cue is optional */
  }
}

export function readRoomNavDirection(): 'previous' | 'next' | null {
  if (pending === 'previous' || pending === 'next') return pending;
  try {
    const stored = sessionStorage.getItem(NAV_KEY);
    if (stored === 'previous' || stored === 'next') return stored;
  } catch {
    return null;
  }
  return null;
}

export function clearRoomNavDirection() {
  pending = null;
  try {
    sessionStorage.removeItem(NAV_KEY);
  } catch {
    /* ignore */
  }
}
