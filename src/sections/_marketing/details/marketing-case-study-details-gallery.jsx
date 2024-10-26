import { useEffect } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { Image } from 'src/components/image';
import { Lightbox, useLightBox } from 'src/components/lightbox';
import { Carousel, useCarousel, CarouselArrowBasicButtons } from 'src/components/carousel';

// ----------------------------------------------------------------------

export function MarketingCaseStudyDetailsGallery({ images, sx, ...other }) {
  const slides = images.map((slide) => ({
    src: slide,
  }));

  const lightbox = useLightBox(slides);

  const carousel = useCarousel({
    slidesToShow: { xs: 1, sm: 2, md: 3 },
    slideSpacing: '16px',
  });

  useEffect(() => {
    if (lightbox.open) {
      carousel.mainApi?.scrollTo(lightbox.selected, true);
    }
  }, [carousel.mainApi, lightbox.open, lightbox.selected]);

  return (
    <>
      <Box sx={{ mt: 3, ...sx }} {...other}>
        <Box display="flex" alignItems="center" sx={{ mb: 5 }}>
          <Typography variant="h4" sx={{ flexGrow: 1 }}>
            Gallery
          </Typography>
          <CarouselArrowBasicButtons
            {...carousel.arrows}
            options={carousel.options}
            sx={{ gap: 1 }}
          />
        </Box>

        <Carousel carousel={carousel}>
          {slides.map((slide) => (
            <Image
              key={slide.src}
              alt={slide.src}
              src={slide.src}
              ratio="4/3"
              onClick={() => lightbox.onOpen(slide.src)}
              sx={{ borderRadius: 2, cursor: 'pointer' }}
            />
          ))}
        </Carousel>
      </Box>

      <Lightbox
        index={lightbox.selected}
        slides={slides}
        open={lightbox.open}
        close={lightbox.onClose}
        onGetCurrentIndex={(index) => lightbox.setSelected(index)}
      />
    </>
  );
}
