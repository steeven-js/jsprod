import { Helmet } from 'react-helmet-async';

import { Box } from '@mui/system';
import { Alert, CircularProgress } from '@mui/material';

import { useProjetsPosts, useProjectCategories } from 'src/hooks/use-projet';

import { CONFIG } from 'src/config-global';

import { ProjetsLandingView } from 'src/sections/_projets/view/projets-landing-view';

// ----------------------------------------------------------------------

const metadata = { title: `Case studies | Marketing - ${CONFIG.appName}` };

export default function Page() {
  const { categories, loading, error } = useProjectCategories();
  const { posts, loading: projetsLoading, error: projetError } = useProjetsPosts();

  if (loading && projetsLoading) {
    return (
      <Box
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error && projetError) {
    return <Alert severity="error">Une erreur est survenue: {error.message}</Alert>;
  }
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <ProjetsLandingView categories={categories} posts={posts} />
    </>
  );
}
