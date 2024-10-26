import Fade from 'embla-carousel-fade';
import Autoplay from 'embla-carousel-autoplay';

import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { varAlpha, textGradient } from 'src/theme/styles';

import { Carousel, useCarousel, CarouselDotButtons } from 'src/components/carousel';

// ----------------------------------------------------------------------

export function Section({ title, images, layoutQuery, sx, ...other }) {
  const theme = useTheme();

  const carousel = useCarousel(
    {
      loop: true,
      duration: 80,
    },
    [Autoplay({ delay: 5000 }), Fade()]
  );

  return (
    <Box
      sx={{
        display: 'none',
        flex: '1 1 auto',
        position: 'relative',
        bgcolor: 'common.black',
        '&::before': {
          top: 0,
          left: 0,
          width: 1,
          height: 1,
          zIndex: 8,
          content: "''",
          position: 'absolute',
          backgroundImage: `linear-gradient(to bottom, ${varAlpha(theme.vars.palette.common.blackChannel, 0)} 0%, ${
            theme.vars.palette.common.black
          } 75%)`,
        },
        [theme.breakpoints.up(layoutQuery)]: {
          display: 'flex',
        },
        ...sx,
      }}
      {...other}
    >
      <Carousel
        carousel={carousel}
        sx={{
          top: 0,
          left: 0,
          width: 1,
          height: 1,
          zIndex: 7,
          position: 'absolute',
        }}
      >
        {images.map((img) => (
          <Box
            key={img}
            component="img"
            alt={img}
            src={img}
            sx={{ width: 1, height: '100vh', objectFit: 'cover' }}
          />
        ))}
      </Carousel>

      <Box
        gap={10}
        display="flex"
        alignItems="center"
        flexDirection="column"
        sx={{
          zIndex: 9,
          bottom: 80,
          left: '50%',
          position: 'absolute',
          transform: 'translateX(-50%)',
        }}
      >
        <Typography
          variant="h2"
          sx={{
            ...textGradient(
              `90deg, ${theme.vars.palette.primary.main} 20%, ${theme.vars.palette.secondary.main} 100%`
            ),
            whiteSpace: 'pre-line',
          }}
        >
          {title}
        </Typography>

        <CarouselDotButtons
          variant="rounded"
          scrollSnaps={carousel.dots.scrollSnaps}
          selectedIndex={carousel.dots.selectedIndex}
          onClickDot={carousel.dots.onClickDot}
          sx={{ color: 'primary.main' }}
        />
      </Box>
    </Box>
  );
}
