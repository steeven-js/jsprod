import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/config-global';
import { varAlpha, bgGradient, textGradient } from 'src/theme/styles';

import { varFade, AnimateBorder, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

function AnimatedDiv({ children }) {
  const variants = varFade({ distance: 24 }).inUp;
  return <m.div variants={variants}>{children}</m.div>;
}

// ----------------------------------------------------------------------

export function HomeAdvertisement({ sx, ...other }) {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        ...bgGradient({
          color: `to bottom, ${varAlpha(theme.vars.palette.common.blackChannel, 0.72)}, ${varAlpha(theme.vars.palette.common.blackChannel, 0.72)}`,
          imgUrl: `${CONFIG.assetsDir}/assets/images/home/multiple-screens.webp`,
        }),
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center',
        color: 'common.white',
        flexDirection: 'column',
        justifyContent: 'center',
        py: { xs: 10, md: 35 },
        ...sx,
      }}
      {...other}
    >
      <MotionViewport>
        <AnimatedDiv>
          <Typography variant="h1" component="h2" sx={{ mb: 5 }}>
            <Box
              component="span"
              sx={{
                ...textGradient(
                  `90deg, ${theme.vars.palette.primary.main} 20%, ${theme.vars.palette.secondary.main} 100%`
                ),
              }}
            >
              Start now
            </Box>
            <br />
            create your
            <br />
            website today
          </Typography>
        </AnimatedDiv>

        <AnimatedDiv>
          <Box
            sx={{
              borderRadius: 1.25,
              position: 'relative',
              display: 'inline-flex',
              bgcolor: varAlpha(theme.vars.palette.common.blackChannel, 0.4),
            }}
          >
            <AnimateBorder
              animate={{
                duration: 12,
                distance: 40,
                color: [theme.vars.palette.primary.main, theme.vars.palette.warning.main],
                outline: `135deg, ${varAlpha(theme.vars.palette.primary.mainChannel, 0.04)}, ${varAlpha(theme.vars.palette.primary.mainChannel, 0.04)}`,
              }}
              sx={{ width: 1, height: 1, position: 'absolute' }}
            />

            <Button
              size="large"
              variant="text"
              target="_blank"
              rel="noopener"
              href={paths.zoneStore}
              sx={{ px: 2 }}
            >
              Purchase now
            </Button>
          </Box>
        </AnimatedDiv>
      </MotionViewport>
    </Box>
  );
}
