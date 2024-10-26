import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/config-global';
import { textGradient } from 'src/theme/styles';

import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

function AnimatedDiv({ children }) {
  const variants = varFade({ distance: 24 }).inUp;
  return <m.div variants={variants}>{children}</m.div>;
}

// ----------------------------------------------------------------------

export function HomeNewStart({ sx, ...other }) {
  return (
    <Box
      component="section"
      sx={{
        pt: { xs: 10, md: 15 },
        pb: { xs: 5, md: 10 },
        ...sx,
      }}
      {...other}
    >
      <Container component={MotionViewport}>
        <Box
          gap={3}
          display="flex"
          alignItems="center"
          flexDirection="column"
          sx={{
            px: 3,
            pb: 10,
            borderRadius: 3,
            textAlign: 'center',
            bgcolor: 'background.neutral',
          }}
        >
          <AnimatedDiv>
            <Box
              component="img"
              loading="lazy"
              alt="Cover"
              src={`${CONFIG.assetsDir}/assets/images/home/desktop-mouse-keyboard.webp`}
              sx={{ width: 720 }}
            />
          </AnimatedDiv>

          <AnimatedDiv>
            <Typography variant="overline" sx={{ color: 'text.disabled' }}>
              new start
            </Typography>
          </AnimatedDiv>

          <AnimatedDiv>
            <Typography variant="h2">
              The
              <Box
                component="span"
                sx={(theme) => ({
                  ...textGradient(
                    `90deg, ${theme.vars.palette.primary.main} 20%, ${theme.vars.palette.secondary.main} 100%`
                  ),
                })}
              >
                {` ZONE `}
              </Box>
              UI Kit
            </Typography>
          </AnimatedDiv>

          <AnimatedDiv>
            <Typography sx={{ color: 'text.secondary', maxWidth: 480 }}>
              Modern ui kit to save your time, boost your creativity. Neat and super stylish layout
              ready to help with your projects
            </Typography>
          </AnimatedDiv>
        </Box>
      </Container>
    </Box>
  );
}
