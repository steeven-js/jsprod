import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/config-global';
import { _LandingHero } from 'src/assets/data/landing';
import { varAlpha, bgGradient, textGradient } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { MotionViewport } from 'src/components/animate';
import { RouterLink } from 'src/routes/components';
import { paths } from 'src/routes/paths';

// ----------------------------------------------------------------------

export function HomeHero({ sx, ...other }) {
  const theme = useTheme();

  const renderContent = (
    <Stack
      alignItems={{ xs: 'center', md: 'flex-start' }}
      sx={{ textAlign: { xs: 'center', md: 'left' } }}
    >
      <Typography
        variant="overline"
        sx={{
          ...textGradient(
            `90deg, ${theme.vars.palette.primary.main} 20%, ${theme.vars.palette.secondary.main} 100%`
          ),
        }}
      >
        {_LandingHero[0].label}
      </Typography>

      <Typography variant="h1" sx={{ my: 3 }}>
        {_LandingHero[1].label}
      </Typography>

      <Typography sx={{ mb: 5, color: 'text.secondary', maxWidth: 420 }}>
        {_LandingHero[2].label}
      </Typography>

      <Box
        gap={2.5}
        display="flex"
        flexWrap="wrap"
        alignItems="center"
        justifyContent={{ xs: 'center', md: 'unset' }}
      >
        <Button
          variant="contained"
          color="inherit"
          size="large"
          component={RouterLink}
          href={paths.services.root}
        >
          {_LandingHero[3].label}
        </Button>

        <Box
          gap={1.5}
          display="flex"
          alignItems="center"
          sx={{
            typography: 'h6',
            textDecoration: 'none',
            color: 'text.primary',
            '&:hover': {
              textDecoration: 'none',
            },
          }}
          component={RouterLink}
          href={paths.projets.root}
        >
          <Fab size="medium">
            <Iconify width={22} icon="solar:play-outline" />
          </Fab>
          <Box
            component="span"
            sx={{
              typography: 'h6',
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'none',
              },
            }}
          >
            {_LandingHero[4].label}
          </Box>
        </Box>
      </Box>

      <Box
        gap={2.5}
        display="flex"
        flexWrap="wrap"
        alignItems="center"
        justifyContent={{ xs: 'center', md: 'unset' }}
        sx={{ mt: 5 }}
      >
        <Button
          component={RouterLink}
          href={paths.github}
          color="inherit"
          size="large"
          variant="contained"
          target="_blank"
          rel="noopener"
          startIcon={<Iconify width={24} icon="mdi:github" />}
        >
          Github
        </Button>

        <Button
          color="inherit"
          size="large"
          variant="outlined"
          href={CONFIG.cv.url}
          target="_blank"
          rel="noopener"
          startIcon={<Iconify width={24} icon="pepicons-pop:cv" />}
          sx={{ borderColor: 'text.primary' }}
        >
          Téléchargez mon CV
        </Button>
      </Box>
    </Stack>
  );

  const renderImage = (
    <Box
      component="img"
      alt="Marketing market"
      src={`${CONFIG.assetsDir}/assets/illustrations/illustration-marketing-market.svg`}
      sx={{ width: 720 }}
    />
  );

  return (
    <Box
      component="section"
      sx={{
        ...bgGradient({
          color: `to bottom, ${varAlpha(theme.vars.palette.background.defaultChannel, 0.9)}, ${varAlpha(theme.vars.palette.background.defaultChannel, 0.9)}`,
          imgUrl: `${CONFIG.assetsDir}/assets/background/overlay-1.webp`,
        }),
        py: 10,
        overflow: 'hidden',
        position: 'relative',
        [theme.breakpoints.up('md')]: {
          py: 15,
          minHeight: 760,
          height: '100vh',
          maxHeight: 1440,
          display: 'flex',
          alignItems: 'center',
        },
        ...sx,
      }}
      {...other}
    >
      <Container component={MotionViewport}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid xs={12} md={6} lg={5}>
            {renderContent}
          </Grid>

          <Grid xs={12} md={6} lg={6} sx={{ display: { xs: 'none', md: 'block' } }}>
            {renderImage}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
