import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { fShortenNumber } from 'src/utils/format-number';

import { CONFIG } from 'src/config-global';
import { _ROWS, _LandingAbout } from 'src/assets/data/landing';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export function HomeAbout({ sx, ...other }) {
  return (
    <Box
      component="section"
      sx={{
        pb: { xs: 5, md: 10 },
        ...sx,
      }}
      {...other}
    >
      <Container>
        <Box
          component="img"
          alt="Landing about"
          src={`${CONFIG.assetsDir}/assets/images/marketing/marketing-large-1.webp`}
          sx={{
            borderRadius: 1.5,
            mb: { xs: 5, md: 10 },
          }}
        />

        <Grid
          container
          disableEqualOverflow
          spacing={{ xs: 5, md: 3 }}
          justifyContent="space-between"
        >
          <Grid xs={12} md={5} sx={{ textAlign: { xs: 'center', md: 'right' } }}>
            <Typography variant="overline" sx={{ color: 'text.disabled', display: 'block' }}>
              {_LandingAbout[0].label}
            </Typography>

            <Typography variant="h2" sx={{ my: 3 }}>
              {_LandingAbout[1].label}
            </Typography>

            <Typography sx={{ color: 'text.secondary' }}>{_LandingAbout[2].label}</Typography>

            <Button
              size="large"
              color="inherit"
              endIcon={<Iconify icon="solar:alt-arrow-right-outline" />}
              sx={{ my: 5 }}
            >
              {_LandingAbout[3].label}
            </Button>
          </Grid>

          <Grid xs={12} md={6}>
            <Stack spacing={5}>
              {_ROWS.map((row) => (
                <Stack
                  key={row.label}
                  direction="row"
                  alignItems="center"
                  divider={
                    <Divider
                      flexItem
                      orientation="vertical"
                      sx={{ ml: 3, mr: 5, borderStyle: 'dashed' }}
                    />
                  }
                >
                  <Stack spacing={1} sx={{ width: 1, maxWidth: 100 }}>
                    <Box gap={0.5} display="flex" sx={{ typography: 'h2' }}>
                      {fShortenNumber(row.total)}
                      <Box component="span" sx={{ typography: 'h4', color: 'primary.main' }}>
                        +
                      </Box>
                    </Box>

                    <Typography variant="overline" sx={{ color: 'text.disabled' }}>
                      {row.label}
                    </Typography>
                  </Stack>

                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {row.content}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
