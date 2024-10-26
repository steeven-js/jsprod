import AutoScroll from 'embla-carousel-auto-scroll';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { SvgColor } from 'src/components/svg-color';
import { Carousel, useCarousel } from 'src/components/carousel';

// ----------------------------------------------------------------------

export function MarketingOurClients({ brands, sx, ...other }) {
  const carousel = useCarousel(
    {
      loop: true,
      slidesToShow: 'auto',
      slideSpacing: '80px',
    },
    [AutoScroll({ playOnInit: true, speed: 0.5 })]
  );

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 5, md: 10 },
        ...sx,
      }}
      {...other}
    >
      <Container>
        <Carousel carousel={carousel}>
          {brands.map((brand) => (
            <SvgColor
              key={brand.id}
              src={brand.image}
              width={106}
              height={32}
              sx={{ color: 'text.disabled' }}
            />
          ))}
        </Carousel>
      </Container>
    </Box>
  );
}
