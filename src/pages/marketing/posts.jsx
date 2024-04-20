import { Helmet } from 'react-helmet-async';

import useFetchTags from 'src/hooks/use-fetchTags';
import useFetchPosts from 'src/hooks/use-fetchPosts';

import { SplashScreen } from 'src/components/loading-screen';

import MarketingPostsView from 'src/sections/_marketing/view/marketing-posts-view';

// ----------------------------------------------------------------------

export default function MarketingPostsPage() {
  const { posts, isPostsLoading } = useFetchPosts();
  const { tags } = useFetchTags();

  return (
    <>
      <Helmet>
        <title> Marketing: Blog</title>
      </Helmet>

      {isPostsLoading ? <SplashScreen/> : <MarketingPostsView posts={posts} tags={tags} />}

    </>
  );
}
