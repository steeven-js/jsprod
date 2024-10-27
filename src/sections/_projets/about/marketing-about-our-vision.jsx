import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/config-global';
import { varAlpha } from 'src/theme/styles';

import { Image } from 'src/components/image';
import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export function MarketingAboutOurVision({ sx, ...other }) {
  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        textAlign: 'center',
        ...sx,
      }}
      {...other}
    >
      <Container>
        <Typography
          variant="h2"
          sx={(theme) => ({
            mb: 5,
            mx: 'auto',
            [theme.breakpoints.up('md')]: {
              top: 80,
              zIndex: 9,
              left: '50%',
              position: 'absolute',
              color: 'common.white',
              transform: 'translateX(-50%)',
            },
          })}
        >
          Our vision
        </Typography>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ borderRadius: 2, overflow: 'hidden', position: 'relative' }}
        >
          <Fab color="primary" sx={{ zIndex: 9, position: 'absolute' }}>
            <Iconify width={22} icon="solar:play-outline" />
          </Fab>

          <Image
            alt="Hero"
            src={`${CONFIG.assetsDir}/assets/images/marketing/marketing-large-2.webp`}
            ratio="16/9"
            slotProps={{
              overlay: {
                backgroundImage: (theme) =>
                  `linear-gradient(to bottom, ${varAlpha(theme.vars.palette.common.blackChannel, 0)}, ${
                    theme.vars.palette.common.black
                  })`,
              },
            }}
          />
        </Box>

        <Typography
          variant="h5"
          component="p"
          sx={(theme) => ({
            mt: 5,
            mx: 'auto',
            maxWidth: 564,
            [theme.breakpoints.up('md')]: {
              zIndex: 9,
              bottom: 80,
              left: '50%',
              opacity: 0.72,
              position: 'absolute',
              transform: 'translateX(-50%)',
              color: theme.vars.palette.common.white,
            },
          })}
        >
          Our vision offering the best product nulla vehicula tortor scelerisque ultrices malesuada.
        </Typography>
      </Container>
    </Box>
  );
}
