'use client';

import React, { useCallback, useSyncExternalStore } from 'react';

type Theme = 'light' | 'dark';

function currentTheme(): Theme {
  return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
}

function applyTheme(theme: Theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) {
    meta.setAttribute('content', theme === 'dark' ? '#111014' : '#F7F5F2');
  }
}

function subscribe(onStoreChange: () => void) {
  window.addEventListener('ola-theme-change', onStoreChange);
  return () => window.removeEventListener('ola-theme-change', onStoreChange);
}

export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, currentTheme, () => 'light' as Theme);
  const isDark = theme === 'dark';

  const toggle = useCallback(() => {
    const next: Theme = currentTheme() === 'dark' ? 'light' : 'dark';
    window.localStorage.setItem('ola-theme', next);
    applyTheme(next);
    window.dispatchEvent(new Event('ola-theme-change'));
  }, []);

  return (
    <button
      type="button"
      className="theme-toggle"
      aria-label={isDark ? 'Switch to light colour theme' : 'Switch to dark colour theme'}
      aria-pressed={isDark}
      onClick={toggle}
    >
      <span className="theme-toggle-to-dark">
        <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
          <path
            fill="currentColor"
            d="M7.2 1.1a.6.6 0 0 1 .72.1c1.9 1.7 2.7 4.2 2.1 6.6-.6 2.3-2.5 4.1-4.9 4.6-2.3.5-4.6-.3-6-2.1a.6.6 0 0 1 .62-.95 5.2 5.2 0 0 0 6.7-6.1.6.6 0 0 1 .76-.25Z"
          />
        </svg>
        <span className="visually-hidden">Dark</span>
      </span>
      <span className="theme-toggle-to-light">
        <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
          <circle cx="8" cy="8" r="3" fill="currentColor" />
          <path
            fill="currentColor"
            d="M7.4 1h1.2v2H7.4zM7.4 13h1.2v2H7.4zM1 7.4h2v1.2H1zM13 7.4h2v1.2h-2zM3.05 3.05l1.13 1.13-.85.85-1.13-1.13zM12.67 11.82l1.13 1.13-.85.85-1.13-1.13zM3.05 12.95l.85-.85 1.13 1.13-.85.85zM11.82 3.33l.85-.85 1.13 1.13-.85.85z"
          />
        </svg>
        <span className="visually-hidden">Light</span>
      </span>
    </button>
  );
}
