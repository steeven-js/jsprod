import { Helmet } from 'react-helmet-async';

import { Box } from '@mui/system';
import { Alert, CircularProgress } from '@mui/material';

import { useParams } from 'src/routes/hooks';

import { useUserById } from 'src/hooks/use-users';
import { useFetchPostById } from 'src/hooks/use-post';

import { CONFIG } from 'src/config-global';

import { MarketingPostView } from 'src/sections/_posts/view/marketing-post-view';

// import { MarketingCaseStudyView } from 'src/sections/_posts/view/marketing-case-study-view';

// ----------------------------------------------------------------------

export default function Page() {
  const { id = '' } = useParams();

  const { post, loading, error } = useFetchPostById(id);

  const { userProfile } = useUserById(post?.authorId);

  // console.log('userProfile:', userProfile);

  if (loading) {
    return (
      <Box
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return <Alert severity="error">Une erreur est survenue: {error.message}</Alert>;
  }

  return (
    <>
      <Helmet>
        <title>{`${post?.title} | Marketing - ${CONFIG.appName}`}</title>
      </Helmet>

      <MarketingPostView post={post} userProfile={userProfile} />
    </>
  );
}
