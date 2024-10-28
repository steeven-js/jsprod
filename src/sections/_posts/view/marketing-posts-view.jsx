import { Box } from '@mui/system';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';

import { paths } from 'src/routes/paths';

import { _mock, _tags } from 'src/_mock';

import { Advertisement } from 'src/sections/advertisement';

import { PostSidebar } from '../post/post-sidebar';
import { MarketingPosts } from '../marketing-posts';
import { PostSearchMobile } from '../post/post-search-mobile';
import { MarketingFeaturedPosts } from '../marketing-featured-posts';

// ----------------------------------------------------------------------

export function MarketingPostsView({ postCategories, posts, recentPosts }) {
  return (
    <Box sx={{ mt: 10 }}>
      <PostSearchMobile />

      <MarketingFeaturedPosts posts={recentPosts} />

      <Container component="section" sx={{ mt: 10 }}>
        <Grid disableEqualOverflow container spacing={{ md: 8 }}>
          <Grid xs={12} md={8}>
            <MarketingPosts posts={posts} />
          </Grid>

          <Grid xs={12} md={4}>
            <PostSidebar
              tags={_tags}
              categories={postCategories}
              recentPosts={recentPosts}
              slots={{
                bottomNode: (
                  <Advertisement
                    title="Mes service"
                    description="Ce que je propose"
                    imageUrl={_mock.image.marketing(9)}
                    action={
                      <Button variant="contained" color="primary" href={paths.services.root}>
                        Voir plus
                      </Button>
                    }
                  />
                ),
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
