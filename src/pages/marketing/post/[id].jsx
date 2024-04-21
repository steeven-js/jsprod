import { useParams } from 'react-router';
import { Helmet } from 'react-helmet-async';

import useFetchPost from 'src/hooks/use-fetchPost';

import { SplashScreen } from 'src/components/loading-screen';

import MarketingPostView from 'src/sections/_marketing/view/marketing-post-view';

// ----------------------------------------------------------------------

export default function MarketingPostPage() {
  const { id } = useParams();

  const { isPostLoading } = useFetchPost(id);

  return (
    <>
      <Helmet>
        <title> Marketing: Blog Post</title>
      </Helmet>

      {isPostLoading ? <SplashScreen /> : <MarketingPostView />}

    </>
  );
}
