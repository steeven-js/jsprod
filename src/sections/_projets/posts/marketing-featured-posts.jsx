import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { fDate } from 'src/utils/format-time';

import { maxLine, varAlpha, stylesMode } from 'src/theme/styles';

import { Image } from 'src/components/image';
import {
  Carousel,
  useCarousel,
  CarouselDotButtons,
  CarouselArrowFloatButtons,
} from 'src/components/carousel';

import { PostTime } from '../../blog/post-time';

// ----------------------------------------------------------------------

export function MarketingFeaturedPosts({ posts, sx, ...other }) {
  const carousel = useCarousel();

  return (
    <Box
      component="section"
      sx={{
        pb: 10,
        position: 'relative',
        pt: { xs: 10, md: 15 },

        ...sx,
      }}
      {...other}
    >
      <Container>
        <Box sx={{ position: 'relative' }}>
          <CarouselArrowFloatButtons
            {...carousel.arrows}
            options={carousel.options}
            sx={{
              borderRadius: '50%',
              bgcolor: 'primary.main',
              color: 'primary.contrastText',
              display: { xs: 'none', md: 'flex' },
              [stylesMode.dark]: { color: 'primary.contrastText' },
            }}
          />
          <Carousel carousel={carousel} sx={{ borderRadius: 2, bgcolor: 'background.default' }}>
            {posts.map((post) => (
              <PostItem key={post.id} post={post} />
            ))}
          </Carousel>
        </Box>

        <CarouselDotButtons
          variant="rounded"
          scrollSnaps={carousel.dots.scrollSnaps}
          selectedIndex={carousel.dots.selectedIndex}
          onClickDot={carousel.dots.onClickDot}
          sx={{
            mt: 5,
            width: 1,
            color: 'primary.main',
            justifyContent: 'center',
          }}
        />
      </Container>

      {posts.map(
        (post, index) =>
          index === carousel.dots.selectedIndex && (
            <Image
              key={post.id}
              alt="Post cover"
              src={post.coverUrl}
              slotProps={{
                overlay: {
                  backgroundImage: (theme) =>
                    `linear-gradient(to bottom, ${varAlpha(theme.vars.palette.common.blackChannel, 0)} 0%, ${
                      theme.vars.palette.common.black
                    } 75%)`,
                },
              }}
              sx={{ top: 0, width: 1, height: 1, zIndex: -1, position: 'absolute' }}
            />
          )
      )}
    </Box>
  );
}

// ----------------------------------------------------------------------

export function PostItem({ post }) {
  return (
    <Grid container>
      <Grid xs={12} md={8}>
        <Box
          component="img"
          alt={post.title}
          src={post.coverUrl}
          sx={{
            width: 1,
            objectFit: 'cover',
            aspectRatio: '4/3',
          }}
        />
      </Grid>

      <Grid
        xs={12}
        md={4}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          p: { xs: 3, md: 5 },
        }}
      >
        <Box gap={1} display="flex" flexDirection="column" flexGrow={1}>
          <PostTime createdAt={fDate(post.createdAt)} duration={post.duration} />

          <Link
            component={RouterLink}
            href={paths.marketing.post}
            color="inherit"
            variant="h4"
            sx={{
              ...maxLine({ line: 3 }),
            }}
          >
            {post.title}
          </Link>

          <Typography
            variant="body2"
            sx={(theme) => ({
              ...maxLine({ line: 3, persistent: theme.typography.body2 }),
              color: 'text.secondary',
            })}
          >
            {post.description}
          </Typography>
        </Box>

        <Box gap={1.5} display="flex" alignItems="center" sx={{ pt: 2, typography: 'body2' }}>
          <Avatar src={post.author.avatarUrl} />
          {post.author.name}
        </Box>
      </Grid>
    </Grid>
  );
}
