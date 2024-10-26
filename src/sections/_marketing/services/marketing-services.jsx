import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { CONFIG } from 'src/config-global';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export function MarketingServices({ sx, ...other }) {
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
      <Container>
        <Grid
          container
          disableEqualOverflow
          spacing={{ xs: 5, md: 3 }}
          alignItems="center"
          justifyContent="space-between"
        >
          <Grid xs={12} md={6} lg={5}>
            <Box
              component="img"
              alt="Services"
              src={`${CONFIG.assetsDir}/assets/illustrations/illustration-services.svg`}
              sx={{ width: 480 }}
            />
          </Grid>

          <Grid xs={12} md={6} lg={6}>
            <Typography variant="h2">Offline SEO</Typography>

            <Typography sx={{ my: 3, color: 'text.secondary' }}>
              Aenean commodo ligula eget dolor. Sed hendrerit. Vestibulum ante ipsum primis in
              faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer
              lacinia.
            </Typography>

            <Stack component="ul" spacing={1.5} sx={{ mb: 5 }}>
              {[
                'First class flights',
                '5 Star accommodations',
                'Inclusive packages',
                'Latest model vehicles',
              ].map((text) => (
                <Box component="li" key={text} gap={2} display="flex" alignItems="center">
                  <Box
                    component="span"
                    sx={{
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      bgcolor: 'primary.main',
                    }}
                  />
                  {text}
                </Box>
              ))}
            </Stack>

            <Button
              component={RouterLink}
              href={paths.marketing.caseStudies}
              size="large"
              color="inherit"
              variant="outlined"
              endIcon={<Iconify icon="solar:alt-arrow-right-outline" />}
            >
              Check our work
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
