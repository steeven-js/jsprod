import PropTypes from 'prop-types';

import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import useFetchPosts from 'src/hooks/use-fetchPosts';

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
          <Typography variant="h2">Our Case Studies</Typography>

          <Typography sx={{ color: 'text.secondary' }}>
            Nullam tincidunt adipiscing enim.
            <br /> Mauris sollicitudin fermentum libero.
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
