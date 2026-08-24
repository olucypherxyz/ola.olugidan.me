import HomeschoolCoreView from '@/components/pages/HomeschoolCoreView';
import { homeschoolCorePage } from '@/config/pages';
import { pageMetadata } from '@/lib/page-metadata';

export const metadata = pageMetadata({
  path: '/homeschool-core',
  title: homeschoolCorePage.title,
  description: homeschoolCorePage.opening[0],
});

export default function HomeschoolCorePage() {
  return <HomeschoolCoreView />;
}
