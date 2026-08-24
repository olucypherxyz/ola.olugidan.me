import { homepage } from '@/config/homepage';
import {
  faithCommunityPage,
  homeschoolCorePage,
  transformationPage,
  workPage,
} from '@/config/pages';

export type RoomStop = {
  room: string;
  name: string;
  href: string;
};

const pageNameByHref: Record<string, string> = {
  '/work': workPage.title,
  '/transformation': transformationPage.title,
  '/homeschool-core': homeschoolCorePage.title,
  '/faith-community': faithCommunityPage.title,
};

/** Routed rooms in IA order. CREATE is identity-only and has no href. */
export const roomSequence: readonly RoomStop[] = homepage.contributions.items.flatMap((item) => {
  if (!('href' in item) || !item.href) return [];
  return [
    {
      room: item.label,
      name: pageNameByHref[item.href] ?? item.title,
      href: item.href,
    },
  ];
});

export const homeStop: RoomStop = {
  room: 'Home',
  name: homepage.hero.name,
  href: '/',
};

export function getRoomAdjacency(pathname: string) {
  const index = roomSequence.findIndex((stop) => stop.href === pathname);
  if (index === -1) return null;

  return {
    current: roomSequence[index],
    previous: index === 0 ? homeStop : roomSequence[index - 1],
    next: roomSequence[index + 1] ?? null,
  };
}
