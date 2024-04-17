import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';

import useFetchTags from 'src/hooks/use-fetchTags';
import useFetchPosts from 'src/hooks/use-fetchPosts';

import { _mock, _categories } from 'src/_mock';

import PostSidebar from '../../blog/common/post-sidebar';
import PostSearchMobile from '../../blog/common/post-search-mobile';
import BlogMarketingPosts from '../../blog/marketing/marketing-posts';
import BlogMarketingFeaturedPosts from '../../blog/marketing/marketing-featured-posts';

// ----------------------------------------------------------------------

export default function MarketingPostsView() {
  const { posts } = useFetchPosts();
  const { tags } = useFetchTags();

  return (
    <>
      <PostSearchMobile />

      <BlogMarketingFeaturedPosts posts={posts.slice(0, 5)} />

      <Container
        sx={{
          mt: 10,
        }}
      >
        <Grid container columnSpacing={{ xs: 0, md: 8 }}>
          <Grid xs={12} md={8}>
            <BlogMarketingPosts />
          </Grid>

          <Grid xs={12} md={4}>
            <PostSidebar
              popularTags={tags}
              categories={_categories}
              recentPosts={{ list: posts.slice(0, 5) }}
              advertisement={{
                title: 'Advertisement',
                description: 'Duis leo. Donec orci lectus, aliquam ut, faucibus non',
                imageUrl: _mock.image.marketing(9),
                path: '',
              }}
            />
          </Grid>
        </Grid>
      </Container>
      {/* <MarketingLandingFreeSEO /> */}

      {/* <MarketingNewsletter /> */}
    </>
  );
}
