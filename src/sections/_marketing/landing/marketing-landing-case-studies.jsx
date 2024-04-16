import { m } from 'framer-motion';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { useResponsive } from 'src/hooks/use-responsive';

import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import TextMaxLine from 'src/components/text-max-line';
import { varHover, varTranHover } from 'src/components/animate';

// ----------------------------------------------------------------------

export default function MarketingLandingCaseStudies({ caseStudies }) {
  const mdUp = useResponsive('up', 'md');

  const newTable = caseStudies.map((caseStudy, index) => {
    const id = index;
    const { title } = caseStudy;
    const categoryName = caseStudy.category.name;
    const { description } = caseStudy;
    const { coverUrl } = caseStudy;

    return { id, title, categoryName, description, coverUrl };
  });

  return (
    <Container
      sx={{
        overflow: 'hidden',
        pt: { xs: 5, md: 10 },
        pb: 10,
      }}
    >
      <Stack
        spacing={3}
        sx={{
          textAlign: { xs: 'center', md: 'unset' },
        }}
      >
        <Typography variant="overline" sx={{ color: 'text.disabled' }}>
          Our Work
        </Typography>

        <Typography variant="h2">Case Studies</Typography>
      </Stack>

      <Grid
        spacing={3}
        container
        alignItems="center"
        sx={{
          py: { xs: 8, md: 10 },
        }}
      >
        <Grid xs={6} md={2}>
          {newTable.length > 0 ? <SmallItem caseStudy={newTable[0]} /> : 'No data'}
        </Grid>

        {!mdUp && (
          <Grid xs={6} md={2}>
            {newTable.length > 0 ? <SmallItem caseStudy={newTable[5]} /> : 'No data'}
          </Grid>
        )}

        <Grid container xs={12} sm={12} md={8}>
          <Grid xs={6} md={9}>
            {newTable.length > 0 && (
              mdUp ? (
                <LargeItem caseStudy={newTable[1]} />
              ) : (
                <SmallItem caseStudy={newTable[1]} square />
              )
            )}
          </Grid>

          <Grid xs={6} md={3}>
            <Stack justifyContent={{ md: 'flex-end' }} sx={{ height: { md: 1 } }}>
              {newTable.length > 0 ? <SmallItem caseStudy={newTable[2]} square /> : 'No data'}
            </Stack>
          </Grid>

          <Grid xs={6} md={3}>
            {newTable.length > 0 ? <SmallItem caseStudy={newTable[3]} square /> : 'No data'}
          </Grid>

          <Grid xs={6} md={9}>
            {newTable.length > 0 && (
              mdUp ? (
                <LargeItem caseStudy={newTable[4]} />
              ) : (
                <SmallItem caseStudy={newTable[4]} square />
              )
            )}
          </Grid>
        </Grid>

        {mdUp && (
          <Grid xs={6} md={2}>
            {newTable.length > 0 ? <SmallItem caseStudy={newTable[5]} square /> : 'No data'}
          </Grid>
        )}
      </Grid>

      <Stack alignItems={{ xs: 'center', md: 'flex-end' }}>
        <Button
          component={RouterLink}
          href={paths.marketing.caseStudies}
          size="large"
          color="inherit"
          endIcon={<Iconify icon="carbon:chevron-right" />}
        >
          View all
        </Button>
      </Stack>
    </Container>
  );
}

MarketingLandingCaseStudies.propTypes = {
  caseStudies: PropTypes.array,
};

// ----------------------------------------------------------------------

function LargeItem({ caseStudy }) {
  return (
    <Paper
      sx={{
        display: 'grid',
        borderRadius: 2,
        boxShadow: (theme) => theme.customShadows.z24,
        gridTemplateColumns: {
          xs: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',
        },
      }}
    >
      <Box sx={{ p: 0.75 }}>
        <Image alt="cover" src={caseStudy.coverUrl || '/assets/images/marketing/marketing_6.jpg'} ratio="3/4" sx={{ borderRadius: 2 }} />
      </Box>

      <Stack alignItems="flex-end" justifyContent="space-between" sx={{ p: 3, pt: 5, height: 1 }}>
        <div>
          <Typography variant="overline" sx={{ color: 'primary.main' }}>
            {caseStudy.categoryName}
          </Typography>

          <Typography variant="h4" sx={{ mt: 1, mb: 2 }}>
            {caseStudy.title}
          </Typography>

          <TextMaxLine variant="body2" sx={{ color: 'text.secondary' }}>
            {caseStudy.description}
          </TextMaxLine>
        </div>

        <Button
          component={RouterLink}
          href={paths.marketing.caseStudy}
          size="small"
          color="inherit"
          endIcon={<Iconify icon="carbon:chevron-right" />}
        >
          Learn more
        </Button>
      </Stack>
    </Paper>
  );
}

LargeItem.propTypes = {
  caseStudy: PropTypes.shape({
    categoryName: PropTypes.string,
    coverUrl: PropTypes.string,
    description: PropTypes.string,
    title: PropTypes.string,
  }),
};

// ----------------------------------------------------------------------

function SmallItem({ caseStudy, square }) {
  const theme = useTheme();

  const mdUp = useResponsive('up', 'md');

  return (
    <Link component={RouterLink} href={paths.marketing.caseStudy}>
      <Paper
        component={m.div}
        whileHover="hover"
        sx={{
          position: 'relative',
          cursor: 'pointer',
          borderRadius: 2,
          overflow: 'hidden',
        }}
      >
        <Stack
          spacing={1}
          alignItems="center"
          justifyContent="center"
          sx={{
            width: 1,
            height: 1,
            zIndex: 9,
            position: 'absolute',
            color: 'common.white',
            textAlign: 'center',
          }}
        >
          <Typography variant="overline" sx={{ opacity: 0.48 }}>
            {caseStudy.categoryName}
          </Typography>
          <Typography variant="h6">{caseStudy.title}</Typography>
        </Stack>

        <m.div variants={varHover(1.25)} transition={varTranHover()}>
          <Image
            alt="cover"
            src={caseStudy.coverUrl || '/assets/images/marketing/marketing_6.jpg'}
            ratio={(square && '1/1') || (mdUp && '3/4') || '1/1'}
            overlay={alpha(theme.palette.grey[900], 0.48)}
          />
        </m.div>
      </Paper>
    </Link>
  );
}

SmallItem.propTypes = {
  caseStudy: PropTypes.shape({
    categoryName: PropTypes.string,
    coverUrl: PropTypes.string,
    title: PropTypes.string,
  }),
  square: PropTypes.bool,
};
