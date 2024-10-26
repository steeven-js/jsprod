import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';

import { _mock, _tags, _marketingPosts } from 'src/_mock';

import { Advertisement } from 'src/sections/advertisement';

import { PostSidebar } from '../post/post-sidebar';
import { MarketingPosts } from '../marketing-posts';
import { PostSearchMobile } from '../post/post-search-mobile';
import { MarketingFeaturedPosts } from '../marketing-featured-posts';

// ----------------------------------------------------------------------

const posts = _marketingPosts.slice(0, 8);
const recentPosts = _marketingPosts.slice(-4);
const featuredPosts = _marketingPosts.slice(0, 5);

// ----------------------------------------------------------------------

export function MarketingPostsView() {
  console.log('featuredPosts:', featuredPosts);
  return (
    <>
      <PostSearchMobile />

      <MarketingFeaturedPosts posts={featuredPosts} />

      <Container component="section" sx={{ mt: 10 }}>
        <Grid disableEqualOverflow container spacing={{ md: 8 }}>
          <Grid xs={12} md={8}>
            <MarketingPosts posts={posts} />
          </Grid>

          <Grid xs={12} md={4}>
            <PostSidebar
              tags={_tags}
              categories={[
                { label: 'Marketing', path: '' },
                { label: 'Community', path: '' },
                { label: 'Tutorials', path: '' },
                { label: 'Business', path: '' },
                { label: 'Management', path: '' },
              ]}
              recentPosts={recentPosts}
              slots={{
                bottomNode: (
                  <Advertisement
                    title="Advertisement"
                    description="Duis leo. Donec orci lectus, aliquam ut, faucibus non"
                    imageUrl={_mock.image.marketing(9)}
                    action={
                      <Button variant="contained" color="primary">
                        Go now
                      </Button>
                    }
                  />
                ),
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
