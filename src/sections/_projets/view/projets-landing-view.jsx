import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { _marketingPosts } from 'src/_mock';

import { MarketingCaseStudyList } from '../list/marketing-case-study-list';

// ----------------------------------------------------------------------

export function ProjetsLandingView({ categories, posts }) {
  return (
    <>
      <Box component="section" sx={{ mt: 10 }}>
        <Container>
          <Stack
            spacing={3}
            sx={{
              py: { xs: 3, md: 5 },
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            <Typography variant="h2"> Mes réalisations</Typography>

            <Typography sx={{ color: 'text.secondary' }}>
              Découvrez mes derniers projets de,
              <br /> conception et développement d&apos;application.
            </Typography>
          </Stack>

          <MarketingCaseStudyList projetsCategories={categories} posts={posts} />
        </Container>
      </Box>

      {/* <MarketingTestimonial testimonials={_testimonials} />

      <MarketingLatestPosts posts={latestPosts} />

      <MarketingNewsletter /> */}
    </>
  );
}
