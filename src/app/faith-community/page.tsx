import FaithCommunityView from '@/components/pages/FaithCommunityView';
import { faithCommunityPage } from '@/config/pages';
import { pageMetadata } from '@/lib/page-metadata';

export const metadata = pageMetadata({
  path: '/faith-community',
  title: faithCommunityPage.title,
  description: faithCommunityPage.service.heading,
});

export default function FaithCommunityPage() {
  return <FaithCommunityView />;
}
