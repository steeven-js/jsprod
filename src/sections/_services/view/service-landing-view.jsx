import { Box } from '@mui/system';
import { Alert, CircularProgress } from '@mui/material';

import { useLatestPosts } from 'src/hooks/use-post';

import { MarketingLatestPosts } from 'src/sections/_posts/marketing-latest-posts';

import Services from '../services';
import ServicesInclude from '../services-include';
import ServicesBenefits from '../services-benefits';
import ServicesHowItWork from '../services-how-it-work';

// ----------------------------------------------------------------------

export function ServiceLandingView() {
  const { latestPosts, latestPostsLoading, latestPostsError } = useLatestPosts();

  if (latestPostsLoading) {
    return (
      <Box
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (latestPostsError) {
    return <Alert severity="error">Une erreur est survenue: {latestPostsError.message}</Alert>;
  }
  return (
    <>
      <Services />

      <ServicesInclude />

      <ServicesBenefits />

      <ServicesHowItWork />

      <MarketingLatestPosts posts={latestPosts} />
    </>
  );
}
