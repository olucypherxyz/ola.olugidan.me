import TransformationView from '@/components/pages/TransformationView';
import { transformationPage } from '@/config/pages';
import { pageMetadata } from '@/lib/page-metadata';

export const metadata = pageMetadata({
  path: '/transformation',
  title: transformationPage.title,
  description: transformationPage.display,
});

export default function TransformationPage() {
  return <TransformationView />;
}
