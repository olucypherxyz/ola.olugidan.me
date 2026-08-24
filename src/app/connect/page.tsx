import ConnectView from '@/components/pages/ConnectView';
import { connectPage } from '@/config/pages';
import { pageMetadata } from '@/lib/page-metadata';

export const metadata = pageMetadata({
  path: '/connect',
  title: connectPage.title,
  description: connectPage.opening,
});

export default function ConnectPage() {
  return <ConnectView />;
}
