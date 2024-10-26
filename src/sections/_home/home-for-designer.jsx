import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/config-global';
import { varAlpha, textGradient } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, AnimateBorder, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

function AnimatedDiv({ children }) {
  const variants = varFade({ distance: 24 }).inUp;
  return <m.div variants={variants}>{children}</m.div>;
}

// ----------------------------------------------------------------------

export function HomeForDesigner({ sx, ...other }) {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        backgroundImage: `radial-gradient(50% 160% at 50% 50%, ${varAlpha(theme.vars.palette.common.blackChannel, 0.4)} 0%, ${theme.vars.palette.common.black} 100%), url(${CONFIG.assetsDir}/assets/images/home/for-designer.webp)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        display: 'flex',
        textAlign: 'center',
        bgcolor: 'grey.700',
        color: 'common.white',
        justifyContent: 'center',
        py: { xs: 10, md: 15 },
        ...sx,
      }}
    >
      <MotionViewport>
        <AnimatedDiv>
          <Typography variant="overline" sx={{ opacity: 0.48 }}>
            Professional Kit
          </Typography>
        </AnimatedDiv>

        <AnimatedDiv>
          <Typography
            variant="h2"
            sx={{
              ...textGradient(
                `90deg, ${theme.vars.palette.primary.main} 20%, ${theme.vars.palette.secondary.main} 100%`
              ),
              mt: 2,
              mb: 5,
            }}
          >
            For designer
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
              endIcon={<Iconify width={16} icon="carbon:launch" />}
              href={paths.figmaUrl}
              sx={{ px: 2 }}
            >
              Checkout workspace
            </Button>
          </Box>
        </AnimatedDiv>
      </MotionViewport>
    </Box>
  );
}
