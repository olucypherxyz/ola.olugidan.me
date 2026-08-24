import AboutView from '@/components/pages/AboutView';
import { aboutPage } from '@/config/pages';
import { pageMetadata } from '@/lib/page-metadata';

export const metadata = pageMetadata({
  path: '/about',
  title: aboutPage.title,
  description: `${aboutPage.opening.split('.')[0]}.`,
});

export default function AboutPage() {
  return <AboutView />;
}
