import { Helmet } from 'react-helmet-async';

import { Box } from '@mui/system';
import { Alert, CircularProgress } from '@mui/material';

import { usePosts, useLatestPosts } from 'src/hooks/use-post';

import { CONFIG } from 'src/config-global';

import { MarketingPostsView } from 'src/sections/_posts/view/marketing-posts-view';

// ----------------------------------------------------------------------

const metadata = { title: `Post list | Marketing - ${CONFIG.appName}` };

export default function Page() {
  const { posts, loading: projetsLoading, error } = usePosts();
  const { latestPosts, latestPostsLoading, latestPostsError } = useLatestPosts();

  if (projetsLoading && latestPostsLoading) {
    return (
      <Box
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error && latestPostsError) {
    return <Alert severity="error">Une erreur est survenue: {error.message}</Alert>;
  }

  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <MarketingPostsView posts={posts} recentPosts={latestPosts} />
    </>
  );
}
