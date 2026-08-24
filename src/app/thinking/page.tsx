import ThinkingView from '@/components/pages/ThinkingView';
import { thinkingPage } from '@/config/pages';
import { pageMetadata } from '@/lib/page-metadata';

export const metadata = pageMetadata({
  path: '/thinking',
  title: thinkingPage.title,
  description: thinkingPage.display,
});

export default function ThinkingPage() {
  return <ThinkingView />;
}
