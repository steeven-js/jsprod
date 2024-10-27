import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { maxLine, varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export function MarketingLandingCaseStudies({ caseStudies, sx, ...other }) {
  return (
    <Box
      component="section"
      sx={{
        pb: 10,
        overflow: 'hidden',
        pt: { xs: 5, md: 10 },
        ...sx,
      }}
      {...other}
    >
      <Container>
        <Stack spacing={3} sx={{ textAlign: { xs: 'center', md: 'unset' } }}>
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>
            Our work
          </Typography>

          <Typography variant="h2">Case studies</Typography>
        </Stack>

        <Grid spacing={3} container alignItems="center" sx={{ py: { xs: 5, md: 10 } }}>
          <Grid xs={6} md={2}>
            <SmallItem item={caseStudies[0]} />
          </Grid>

          <Grid xs={6} md={2} sx={{ display: { md: 'none' } }}>
            <SmallItem item={caseStudies[5]} />
          </Grid>

          <Grid container xs={12} sm={12} md={8}>
            <Grid xs={6} md={9}>
              <LargeItem item={caseStudies[1]} sx={{ display: { xs: 'none', md: 'flex' } }} />
              <SmallItem item={caseStudies[1]} isSquare sx={{ display: { md: 'none' } }} />
            </Grid>

            <Grid xs={6} md={3}>
              <Stack justifyContent={{ md: 'flex-end' }} sx={{ height: { md: 1 } }}>
                <SmallItem item={caseStudies[2]} isSquare />
              </Stack>
            </Grid>

            <Grid xs={6} md={3}>
              <SmallItem item={caseStudies[3]} isSquare />
            </Grid>

            <Grid xs={6} md={9}>
              <LargeItem item={caseStudies[4]} sx={{ display: { xs: 'none', md: 'flex' } }} />
              <SmallItem item={caseStudies[4]} isSquare sx={{ display: { md: 'none' } }} />
            </Grid>
          </Grid>

          <Grid xs={6} md={2} sx={{ display: { xs: 'none', md: 'block' } }}>
            <SmallItem item={caseStudies[5]} />
          </Grid>
        </Grid>

        <Stack alignItems={{ xs: 'center', md: 'flex-end' }}>
          <Button
            component={RouterLink}
            href={paths.marketing.caseStudies}
            size="large"
            color="inherit"
            endIcon={<Iconify icon="solar:alt-arrow-right-outline" />}
          >
            View all
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}

function LargeItem({ item, sx }) {
  return (
    <Paper
      sx={{
        p: 0.75,
        display: 'flex',
        borderRadius: 2,
        bgcolor: 'background.paper',
        boxShadow: (theme) => theme.customShadows.z24,
        img: {
          transition: (theme) =>
            theme.transitions.create(['transform'], {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.short,
            }),
        },
        '&:hover img': { transform: 'scale(1.2)' },
        ...sx,
      }}
    >
      <Box component="span" sx={{ overflow: 'hidden', borderRadius: 2, width: 0.5 }}>
        <Box
          component="img"
          loading="lazy"
          alt={item.title}
          src={item.coverUrl}
          sx={{
            aspectRatio: '3/4',
            objectFit: 'cover',
          }}
        />
      </Box>

      <Box display="flex" flexDirection="column" sx={{ p: 3, pt: 5, width: 0.5 }}>
        <Typography variant="overline" sx={{ color: 'primary.main' }}>
          {item.category}
        </Typography>

        <Typography variant="h4" component="h6" sx={{ mt: 1, mb: 2 }}>
          {item.title}
        </Typography>

        <Typography variant="body2" sx={{ ...maxLine({ line: 2 }), color: 'text.secondary' }}>
          {item.description}
        </Typography>

        <Box component="span" flexGrow={1} />

        <Button
          component={RouterLink}
          href={paths.marketing.caseStudy(item.id)}
          size="small"
          color="inherit"
          endIcon={<Iconify width={16} icon="solar:alt-arrow-right-outline" sx={{ ml: -0.5 }} />}
          sx={{ alignSelf: 'flex-end' }}
        >
          Learn more
        </Button>
      </Box>
    </Paper>
  );
}

// ----------------------------------------------------------------------

function SmallItem({ item, isSquare, sx }) {
  return (
    <Paper
      sx={{
        borderRadius: 2,
        overflow: 'hidden',
        position: 'relative',
        img: {
          transition: (theme) =>
            theme.transitions.create(['transform'], {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.shorter,
            }),
        },
        '&:hover img': { transform: 'scale(1.2)' },
        '&::before': {
          top: 0,
          left: 0,
          width: 1,
          height: 1,
          zIndex: 8,
          content: "''",
          position: 'absolute',
          bgcolor: (theme) => varAlpha(theme.vars.palette.common.blackChannel, 0.48),
        },
        ...sx,
      }}
    >
      <Box
        gap={1}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        sx={{
          px: 2,
          top: 0,
          left: 0,
          width: 1,
          height: 1,
          zIndex: 9,
          textAlign: 'center',
          position: 'absolute',
          color: 'common.white',
        }}
      >
        <Box component="span" sx={{ opacity: 0.48, typography: 'overline' }}>
          {item.category}
        </Box>
        <Link
          component={RouterLink}
          href={paths.marketing.caseStudy(item.id)}
          variant="h6"
          color="inherit"
          underline="none"
        >
          {item.title}
        </Link>
      </Box>

      <Box
        component="img"
        loading="lazy"
        alt={item.title}
        src={item.coverUrl}
        sx={{
          objectFit: 'cover',
          aspectRatio: { xs: '1/1', md: '3/4' },
          ...(isSquare && { aspectRatio: '1/1' }),
        }}
      />
    </Paper>
  );
}
