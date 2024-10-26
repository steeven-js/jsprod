import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { Carousel, useCarousel, CarouselArrowBasicButtons } from 'src/components/carousel';

import { PostItem } from './marketing-posts';

// ----------------------------------------------------------------------

export function MarketingLatestPosts({ posts, sx, ...other }) {
  const carousel = useCarousel({
    slidesToShow: { xs: 1, sm: 2, md: 3 },
    slideSpacing: '32px',
  });

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 10, md: 15 },
        ...sx,
      }}
      {...other}
    >
      <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box display="flex" alignItems="center" sx={{ width: 1, mb: { xs: 5, md: 10 } }}>
          <Typography component="h6" variant="h3" sx={{ flexGrow: 1 }}>
            Latest posts
          </Typography>

          <CarouselArrowBasicButtons {...carousel.arrows} options={carousel.options} />
        </Box>

        <Carousel carousel={carousel}>
          {posts.map((post) => (
            <PostItem key={post.id} post={post} />
          ))}
        </Carousel>
      </Container>
    </Box>
  );
}
