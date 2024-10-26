import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import MuiTextField from '@mui/material/TextField';
import { inputBaseClasses } from '@mui/material/InputBase';
import { inputLabelClasses } from '@mui/material/InputLabel';

import { CONFIG } from 'src/config-global';
import { varAlpha, textGradient } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

const TextField = styled((props) => <MuiTextField fullWidth {...props} />)(({ theme }) => ({
  [`& .${inputBaseClasses.root}`]: {
    backgroundColor: varAlpha(theme.vars.palette.grey['500Channel'], 0.16),
  },
  [`& .${inputBaseClasses.input}`]: {
    color: theme.vars.palette.common.white,
  },
  [`& .${inputLabelClasses.root}.${inputLabelClasses.shrink}`]: {
    color: theme.vars.palette.grey[500],
    [`&.${inputLabelClasses.focused}`]: {
      color: theme.vars.palette.grey[500],
    },
  },
}));

// ----------------------------------------------------------------------

export function MarketingLandingFreeSEO({ sx, ...other }) {
  return (
    <Box
      component="section"
      sx={{
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundImage: `url(${CONFIG.assetsDir}/assets/images/marketing/get-free-seo.webp)`,
        py: { xs: 10, md: 15 },
        ...sx,
      }}
      {...other}
    >
      <Container>
        <Grid
          container
          disableEqualOverflow
          spacing={{ xs: 5, md: 3 }}
          justifyContent="space-between"
        >
          <Grid xs={12} md={5} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography
              variant="h1"
              component="h2"
              sx={(theme) => ({
                ...textGradient(
                  `90deg, ${theme.vars.palette.primary.main} 20%, ${theme.vars.palette.secondary.main} 100%`
                ),
                mb: { xs: 3, md: 5 },
                display: 'inline-flex',
              })}
            >
              Get free
              <br /> SEO analysis
            </Typography>

            <Box
              gap={1.5}
              display="flex"
              alignItems="center"
              justifyContent={{ xs: 'center', md: 'flex-start' }}
              sx={{ color: 'common.white', mb: 2 }}
            >
              <Iconify width={24} icon="carbon:email" />

              <Link color="inherit" href="mailto:hello@example.com">
                hello@example.com
              </Link>
            </Box>

            <Box
              gap={1.5}
              display="flex"
              alignItems="center"
              justifyContent={{ xs: 'center', md: 'flex-start' }}
              sx={{ color: 'common.white' }}
            >
              <Iconify width={24} icon="carbon:location" />
              508 Bridle Avenue Newnan, GA 30263
            </Box>
          </Grid>

          <Grid xs={12} md={5}>
            <Stack spacing={3} alignItems={{ xs: 'center', md: 'flex-start' }}>
              <TextField label="Name" />
              <TextField label="Email" />
              <TextField label="Phone" />
              <TextField label="Website URL" />
              <Button size="large" variant="contained" color="primary">
                Send request
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
