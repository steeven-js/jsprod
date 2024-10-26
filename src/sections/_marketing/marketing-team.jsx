import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import { _socials } from 'src/_mock';
import { CONFIG } from 'src/config-global';
import { varAlpha, bgGradient, textGradient } from 'src/theme/styles';

import { SvgColor } from 'src/components/svg-color';
import {
  Carousel,
  useCarousel,
  CarouselDotButtons,
  CarouselArrowBasicButtons,
} from 'src/components/carousel';

// ----------------------------------------------------------------------

export function MarketingTeam({ members, sx, ...other }) {
  const theme = useTheme();

  const carousel = useCarousel({
    slideSpacing: '32px',
    slidesToShow: { xs: 1, sm: 2, lg: 3, xl: 4 },
  });

  return (
    <Box
      component="section"
      sx={{
        ...bgGradient({
          color: `to bottom, ${varAlpha(theme.vars.palette.common.blackChannel, 0.8)}, ${varAlpha(theme.vars.palette.common.blackChannel, 0.8)}`,
          imgUrl: `${CONFIG.assetsDir}/assets/background/overlay-2.webp`,
        }),
        overflow: 'hidden',
        position: 'relative',
        py: { xs: 10, md: 20 },
        ...sx,
      }}
      {...other}
    >
      <Container>
        <Grid container spacing={{ xs: 5, md: 3 }} justifyContent={{ md: 'space-between' }}>
          <Grid xs={12} md={4}>
            <Stack
              spacing={3}
              alignItems={{ xs: 'center', md: 'flex-start' }}
              sx={{
                height: { md: 1 },
                textAlign: { xs: 'center', md: 'unset' },
              }}
            >
              <Typography variant="overline" sx={{ color: 'grey.600' }}>
                Team
              </Typography>

              <Typography
                variant="h2"
                sx={{
                  ...textGradient(
                    `90deg, ${theme.vars.palette.primary.main} 20%, ${theme.vars.palette.secondary.main} 100%`
                  ),
                }}
              >
                Meet our team
              </Typography>

              <Typography sx={{ color: 'common.white' }}>
                Since wire-frame renderings are relatively simple and fast to calculate, they are
                often used in cases
              </Typography>

              <Box flexGrow={1} />

              <CarouselArrowBasicButtons
                {...carousel.arrows}
                options={carousel.options}
                sx={{
                  gap: 1,
                  color: 'primary.main',
                  display: { xs: 'none', md: 'flex' },
                }}
              />
            </Stack>
          </Grid>

          <Grid xs={12} md={7}>
            <Box sx={{ width: { md: 'calc(50vw + 120px)' } }}>
              <Carousel carousel={carousel}>
                {members.map((item) => (
                  <MemberItem key={item.id} item={item} sx={{ color: 'common.white' }} />
                ))}
              </Carousel>
            </Box>
          </Grid>
        </Grid>

        <CarouselDotButtons
          scrollSnaps={carousel.dots.scrollSnaps}
          selectedIndex={carousel.dots.selectedIndex}
          onClickDot={carousel.dots.onClickDot}
          sx={{
            mt: 5,
            color: 'primary.main',
            justifyContent: 'center',
            display: { xs: 'flex', md: 'none' },
          }}
        />
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

export function MemberItem({ item, sx, ...other }) {
  const renderSocials = _socials.map((social) => (
    <IconButton key={social.value} color="inherit">
      {(social.value === 'twitter' && (
        <SvgColor
          width={20}
          src={`${CONFIG.assetsDir}/assets/icons/socials/ic-${social.value}.svg`}
        />
      )) || (
        <Box
          component="img"
          loading="lazy"
          alt={social.label}
          src={`${CONFIG.assetsDir}/assets/icons/socials/ic-${social.value}.svg`}
          sx={{ width: 20, height: 20 }}
        />
      )}
    </IconButton>
  ));

  const transition = (theme) =>
    theme.transitions.create(['opacity', 'transform'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.short,
    });

  return (
    <Box sx={sx} {...other}>
      <Box
        sx={{
          borderRadius: 2,
          overflow: 'hidden',
          position: 'relative',
          '& img': { transition },
          '&::before': {
            top: 0,
            left: 0,
            width: 1,
            height: 1,
            zIndex: 8,
            opacity: 0,
            transition,
            content: "''",
            position: 'absolute',
            backgroundImage: (theme) =>
              `linear-gradient(to bottom, ${varAlpha(theme.vars.palette.common.blackChannel, 0)} 0%, ${
                theme.vars.palette.common.black
              } 75%)`,
          },
          '&:hover': {
            '&::before': { opacity: 1 },
            '& .socials': { opacity: 1 },
            '& img': { transform: 'scale(1.06)' },
          },
        }}
      >
        <Box
          className="socials"
          display="flex"
          justifyContent="center"
          sx={{
            py: 3,
            left: 0,
            width: 1,
            zIndex: 9,
            bottom: 0,
            opacity: 0,
            transition,
            position: 'absolute',
            color: 'common.white',
          }}
        >
          {renderSocials}
        </Box>

        <Box
          component="img"
          loading="lazy"
          alt={item.name}
          src={item.photoUrl}
          sx={{ aspectRatio: '3/4', objectFit: 'cover' }}
        />
      </Box>

      <Typography variant="h6" sx={{ mt: 2.5, mb: 0.5, textAlign: 'center' }}>
        {item.name}
      </Typography>

      <Typography variant="body2" sx={{ color: 'text.disabled', textAlign: 'center' }}>
        {item.role}
      </Typography>
    </Box>
  );
}
