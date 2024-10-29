import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';

import { paths } from 'src/routes/paths';

import { Markdown } from 'src/components/markdown';
import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { MarketingCaseStudyDetailsGallery } from '../details/marketing-case-study-details-gallery';
import { MarketingCaseStudyDetailsSummary } from '../details/marketing-case-study-details-summary';

// ----------------------------------------------------------------------

export function MarketingCaseStudyView({ caseStudy, relatedCaseStudies, sx, ...other }) {
  return (
    <>
      <Box
        component="section"
        sx={{
          pt: { xs: 3, md: 5 },
          pb: { xs: 10, md: 15 },
          ...sx,
        }}
        {...other}
      >
        <Container>
          <Box
            component="img"
            alt="Hero cover"
            src={caseStudy?.coverUrl}
            sx={{
              width: 1,
              borderRadius: 2,
              objectFit: 'cover',
              aspectRatio: '16/9',
            }}
          />

          <CustomBreadcrumbs
            sx={{ my: 5 }}
            links={[
              { name: 'Accueil', href: '/' },
              { name: 'Projets', href: paths.projets.root },
              { name: caseStudy?.title },
            ]}
          />

          <Grid
            container
            disableEqualOverflow
            spacing={{ xs: 5, md: 8 }}
            direction={{ md: 'row-reverse' }}
          >
            <Grid xs={12} md={4}>
              <MarketingCaseStudyDetailsSummary
                title={caseStudy?.title || ''}
                website={caseStudy?.website || ''}
                category={caseStudy?.metaKeywords || ''}
                createdAt={caseStudy?.createdAt || ''}
                description={caseStudy?.description || ''}
              />
            </Grid>

            <Grid xs={12} md={8}>
              <Markdown content={caseStudy?.content || ''} />
              {caseStudy?.postImages && caseStudy.postImages.length > 0 && (
                <MarketingCaseStudyDetailsGallery images={caseStudy.postImages} />
              )}
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* {!!relatedCaseStudies?.length && (
        <MarketingCaseStudyListSimilar caseStudies={relatedCaseStudies} />
      )} */}
    </>
  );
}
