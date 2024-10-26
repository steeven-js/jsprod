import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/config-global';
import { varAlpha, stylesMode } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

function AnimatedDiv({ children }) {
  const variants = varFade({ distance: 24 }).inDown;
  return <m.div variants={variants}>{children}</m.div>;
}

// ----------------------------------------------------------------------

export function HomeMinimalUI({ sx, ...other }) {
  const renderContent = (
    <Box
      sx={{
        p: { md: 10 },
        textAlign: { xs: 'center', md: 'left' },
      }}
    >
      <AnimatedDiv>
        <Typography variant="overline" sx={{ color: 'text.disabled' }}>
          Looking For a
        </Typography>
      </AnimatedDiv>

      <AnimatedDiv>
        <Typography variant="h3" sx={{ my: 3 }}>
          Dashboard template?
        </Typography>
      </AnimatedDiv>

      <AnimatedDiv>
        <Typography
          sx={{
            maxWidth: 360,
            color: 'text.secondary',
            mx: { xs: 'auto', md: 'unset' },
          }}
        >
          Minimal UI Kit is a professional dashboard used by many of our clients.
        </Typography>
      </AnimatedDiv>

      <AnimatedDiv>
        <Button
          size="large"
          color="inherit"
          variant="outlined"
          target="_blank"
          rel="noopener"
          href={paths.minimalStore}
          endIcon={<Iconify width={16} icon="solar:alt-arrow-right-outline" />}
          sx={{ mt: 5, mb: { xs: 5, md: 0 } }}
        >
          Visit Minimal UI
        </Button>
      </AnimatedDiv>
    </Box>
  );

  const renderImage = (
    <m.div variants={varFade().in}>
      <Box
        component="img"
        loading="lazy"
        alt="Minimal dashboard"
        src={`${CONFIG.assetsDir}/assets/images/home/minimal-dashboard.webp`}
        sx={(theme) => ({
          width: 480,
          borderRadius: 2,
          filter: `drop-shadow(0px 48px 80px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.24)})`,
          [stylesMode.dark]: {
            filter: `drop-shadow(0px 48px 80px ${varAlpha(theme.vars.palette.common.blackChannel, 0.48)})`,
          },
          [theme.breakpoints.up('md')]: {
            top: 0,
            left: 0,
            bottom: 0,
            my: 'auto',
            width: '108%',
            maxWidth: 'unset',
            position: 'absolute',
          },
        })}
      />
    </m.div>
  );

  return (
    <Box
      component="section"
      sx={{
        pt: { xs: 5, md: 10 },
        pb: { xs: 10, md: 15 },
        overflow: 'hidden',
        ...sx,
      }}
      {...other}
    >
      <Container component={MotionViewport}>
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          sx={(theme) => ({
            borderRadius: 3,
            backgroundImage: {
              md: `linear-gradient(90deg, ${varAlpha(theme.vars.palette.grey['500Channel'], 0)} 25%, ${varAlpha(theme.vars.palette.grey['500Channel'], 0.16)} 100%)`,
            },
          })}
        >
          <Grid xs={12} md={6} lg={5}>
            {renderContent}
          </Grid>

          <Grid
            xs={12}
            md={6}
            lg={6}
            sx={{
              position: 'relative',
              textAlign: { xs: 'center', md: 'unset' },
            }}
          >
            {renderImage}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
