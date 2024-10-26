import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

const HIGHLIGHT_FEATURES = [
  { label: '5 Prebuilt websites', icon: 'solar:clapperboard-text-outline' },
  { label: '60+ Demo page', icon: 'solar:slider-vertical-outline' },
  { label: 'Easy to customize', icon: 'carbon:settings-adjust' },
  { label: 'Color presets', icon: 'carbon:color-switch' },
  { label: 'Dark mode', icon: 'carbon:asleep' },
  { label: 'Awesome animation', icon: 'carbon:boolean' },
  { label: 'Google fonts', icon: 'carbon:text-font' },
  { label: 'Figma design', icon: 'ph:figma-logo' },
  { label: 'Fully responsive', icon: 'solar:monitor-smartphone-outline' },
  { label: 'Mega menu', icon: 'carbon:list-dropdown' },
  { label: 'Clean markup', icon: 'solar:code-file-outline' },
  { label: 'Free updates', icon: 'carbon:update-now' },
  { label: 'Fast support', icon: 'carbon:headset' },
  { label: 'Well documented', icon: 'solar:documents-minimalistic-outline' },
];

// ----------------------------------------------------------------------

function AnimatedDiv({ children }) {
  const variants = varFade({ distance: 24 }).inUp;
  return <m.div variants={variants}>{children}</m.div>;
}

// ----------------------------------------------------------------------

export function HomeFeatureHighlights({ sx, ...other }) {
  return (
    <Box
      component="section"
      sx={{
        pt: { xs: 5, md: 10 },
        pb: { xs: 10, md: 15 },
        ...sx,
      }}
      {...other}
    >
      <Container component={MotionViewport}>
        <Grid
          container
          disableEqualOverflow
          spacing={{ xs: 5, md: 3 }}
          justifyContent={{ md: 'space-between' }}
        >
          <Grid xs={12} md={4} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <AnimatedDiv>
              <Typography variant="overline" sx={{ color: 'text.disabled' }}>
                Feature highlights
              </Typography>
            </AnimatedDiv>

            <AnimatedDiv>
              <Typography variant="h2" sx={{ my: 3 }}>
                Have everything you need
              </Typography>
            </AnimatedDiv>

            <AnimatedDiv>
              <Typography sx={{ color: 'text.secondary' }}>
                {`Let's see what makes our theme super powerful and user-friendly!`}
              </Typography>
            </AnimatedDiv>
          </Grid>

          <Grid xs={12} md={7}>
            <Box
              rowGap={5}
              columnGap={3}
              display="grid"
              gridTemplateColumns={{
                xs: 'repeat(2, 1fr)',
                sm: 'repeat(3, 1fr)',
              }}
            >
              {HIGHLIGHT_FEATURES.map((feature) => (
                <AnimatedDiv key={feature.label}>
                  <Box
                    sx={{
                      gap: 2,
                      display: 'flex',
                      textAlign: 'center',
                      alignItems: 'center',
                      typography: 'subtitle2',
                      flexDirection: 'column',
                    }}
                  >
                    <Iconify icon={feature.icon} width={32} />
                    {feature.label}
                  </Box>
                </AnimatedDiv>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
