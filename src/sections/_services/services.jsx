import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import {
  _LISTS,
  _LISTS1,
  _LISTS2,
  _LISTS3,
  _Services,
  _Services1,
  _Services2,
  _Services3,
} from 'src/assets/data';

import { Image } from 'src/components/image';
import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function Services() {
  return (
    <>
      {/* UI/UI */}
      <Container
        sx={{
          pt: { xs: 5, md: 10 },
          pb: { xs: 5, md: 10 },
        }}
      >
        <Grid container spacing={3} justifyContent="space-between" alignItems="center">
          <Grid xs={12} md={6} lg={5}>
            <Image alt="services" src="/assets/images/services/ic_service_uiux.jpg" />
          </Grid>

          <Grid xs={12} md={6} lg={6}>
            <Stack spacing={3} sx={{ mb: 5 }}>
              <Typography variant="h2">{_Services[0].label}</Typography>

              <Typography sx={{ color: 'text.secondary' }}>{_Services[1].label}</Typography>

              <Stack spacing={2}>
                {_LISTS.map((text) => (
                  <Stack key={text} direction="row" alignItems="center">
                    <Box
                      component="span"
                      sx={{
                        mr: 2,
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        bgcolor: 'primary.main',
                      }}
                    />
                    {text}
                  </Stack>
                ))}
              </Stack>
            </Stack>

            <Button
              component={RouterLink}
              href={paths.projets.root}
              size="large"
              color="inherit"
              variant="outlined"
              endIcon={<Iconify icon="carbon:chevron-right" />}
            >
              {_Services[2].label}
            </Button>
          </Grid>
        </Grid>
      </Container>

      {/* Mobile */}
      <Container
        sx={{
          pt: { xs: 10, md: 15 },
          pb: { xs: 5, md: 10 },
        }}
      >
        <Grid container spacing={3} justifyContent="space-between" alignItems="center">
          <Grid xs={12} md={6} lg={5}>
            <Image alt="services" src="/assets/images/services/ic_service_mobile.jpg" />
          </Grid>

          <Grid xs={12} md={6} lg={6}>
            <Stack spacing={3} sx={{ mb: 5 }}>
              <Typography variant="h2">{_Services1[0].label}</Typography>

              <Typography sx={{ color: 'text.secondary' }}>{_Services1[1].label}</Typography>

              <Stack spacing={2}>
                {_LISTS1.map((text) => (
                  <Stack key={text} direction="row" alignItems="center">
                    <Box
                      component="span"
                      sx={{
                        mr: 2,
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        bgcolor: 'primary.main',
                      }}
                    />
                    {text}
                  </Stack>
                ))}
              </Stack>
            </Stack>

            <Button
              component={RouterLink}
              href={paths.projets.root}
              size="large"
              color="inherit"
              variant="outlined"
              endIcon={<Iconify icon="carbon:chevron-right" />}
            >
              {_Services1[2].label}
            </Button>
          </Grid>
        </Grid>
      </Container>

      {/* Desktop */}
      <Container
        sx={{
          pt: { xs: 10, md: 15 },
          pb: { xs: 5, md: 10 },
        }}
      >
        <Grid container spacing={3} justifyContent="space-between" alignItems="center">
          <Grid xs={12} md={6} lg={5}>
            <Image alt="services" src="/assets/images/services/ic_service-desktop.jpg" />
          </Grid>

          <Grid xs={12} md={6} lg={6}>
            <Stack spacing={3} sx={{ mb: 5 }}>
              <Typography variant="h2">{_Services2[0].label}</Typography>

              <Typography sx={{ color: 'text.secondary' }}>{_Services2[1].label}</Typography>

              <Stack spacing={2}>
                {_LISTS2.map((text) => (
                  <Stack key={text} direction="row" alignItems="center">
                    <Box
                      component="span"
                      sx={{
                        mr: 2,
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        bgcolor: 'primary.main',
                      }}
                    />
                    {text}
                  </Stack>
                ))}
              </Stack>
            </Stack>

            <Button
              component={RouterLink}
              href={paths.projets.root}
              size="large"
              color="inherit"
              variant="outlined"
              endIcon={<Iconify icon="carbon:chevron-right" />}
            >
              {_Services2[2].label}
            </Button>
          </Grid>
        </Grid>
      </Container>

      {/* API */}
      <Container
        sx={{
          pt: { xs: 10, md: 15 },
          pb: { xs: 5, md: 10 },
        }}
      >
        <Grid container spacing={3} justifyContent="space-between" alignItems="center">
          <Grid xs={12} md={6} lg={5}>
            <Image alt="services" src="/assets/images/services/ic_service_api.jpg" />
          </Grid>

          <Grid xs={12} md={6} lg={6}>
            <Stack spacing={3} sx={{ mb: 5 }}>
              <Typography variant="h2">{_Services3[0].label}</Typography>

              <Typography sx={{ color: 'text.secondary' }}>{_Services3[1].label}</Typography>

              <Stack spacing={2}>
                {_LISTS3.map((text) => (
                  <Stack key={text} direction="row" alignItems="center">
                    <Box
                      component="span"
                      sx={{
                        mr: 2,
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        bgcolor: 'primary.main',
                      }}
                    />
                    {text}
                  </Stack>
                ))}
              </Stack>
            </Stack>

            <Button
              component={RouterLink}
              href={paths.projets.root}
              size="large"
              color="inherit"
              variant="outlined"
              endIcon={<Iconify icon="carbon:chevron-right" />}
            >
              {_Services3[2].label}
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
