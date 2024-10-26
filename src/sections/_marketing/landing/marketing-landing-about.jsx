import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { fShortenNumber } from 'src/utils/format-number';

import { CONFIG } from 'src/config-global';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

const ROWS = [
  {
    label: 'projects',
    total: 20,
    content: 'Praesent turpis. Praesent blandit laoreet nibh. Nunc nonummy metus.',
  },
  {
    label: 'Happy clients',
    total: 32000,
    content: 'Praesent turpis. Praesent blandit laoreet nibh. Nunc nonummy metus.',
  },
  {
    label: 'years of experience',
    total: 20,
    content: 'Praesent turpis. Praesent blandit laoreet nibh. Nunc nonummy metus.',
  },
];

// ----------------------------------------------------------------------

export function MarketingLandingAbout({ sx, ...other }) {
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
              About us
            </Typography>

            <Typography variant="h2" sx={{ my: 3 }}>
              Who we are
            </Typography>

            <Typography sx={{ color: 'text.secondary' }}>
              In hac habitasse platea dictumst. Aliquam lobortis. Lorem ipsum dolor sit amet,
              consectetuer adipiscing elit. In dui magna, posuere eget, vestibulum et, tempor
              auctor, justo. Pellentesque habitant morbi tristique senectus et netus et malesuada
              fames ac turpis egestas.
            </Typography>

            <Button
              size="large"
              color="inherit"
              endIcon={<Iconify icon="solar:alt-arrow-right-outline" />}
              sx={{ my: 5 }}
            >
              Lean more
            </Button>
          </Grid>

          <Grid xs={12} md={6}>
            <Stack spacing={5}>
              {ROWS.map((row) => (
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
