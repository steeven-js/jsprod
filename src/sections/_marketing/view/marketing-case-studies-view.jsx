import PropTypes from 'prop-types';

import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import useFetchPosts from 'src/hooks/use-fetchPosts';

import { _MarketingCaseStudiesView } from 'src/assets/data/stydies';

import MarketingCaseStudyList from '../list/marketing-case-study-list';
import BlogMarketingLatestPosts from '../../blog/marketing/marketing-latest-posts';

// ----------------------------------------------------------------------

export default function MarketingCaseStudiesView({ studies, categories }) {

  const { posts, postCoverUrls } = useFetchPosts();

  return (
    <>
      <Container>
        <Stack
          spacing={3}
          sx={{
            py: 5,
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Typography variant="h2">{_MarketingCaseStudiesView[0].label}</Typography>

          <Typography sx={{ color: 'text.secondary' }}>
            {_MarketingCaseStudiesView[1].label}
            <br /> {_MarketingCaseStudiesView[2].label}
          </Typography>
        </Stack>

        <MarketingCaseStudyList studies={studies} categories={categories} />
      </Container>

      {/* <MarketingTestimonial testimonials={_testimonials} /> */}

      {posts.length > 6 ? <BlogMarketingLatestPosts posts={posts} postCoverUrls={postCoverUrls} /> : null}

      {/* <MarketingLandingFreeSEO />

      <MarketingNewsletter /> */}
    </>
  );
}

MarketingCaseStudiesView.propTypes = {
  studies: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
};
