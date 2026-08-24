import WorkView from '@/components/pages/WorkView';
import { workPage } from '@/config/pages';
import { pageMetadata } from '@/lib/page-metadata';

export const metadata = pageMetadata({
  path: '/work',
  title: workPage.title,
  description: workPage.opening,
});

export default function WorkPage() {
  return <WorkView />;
}
