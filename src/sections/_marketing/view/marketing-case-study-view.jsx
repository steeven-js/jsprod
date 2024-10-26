import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';

import { paths } from 'src/routes/paths';

import { _testimonials } from 'src/_mock';

import { Markdown } from 'src/components/markdown';
import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { MarketingNewsletter } from '../marketing-newsletter';
import { MarketingTestimonial } from '../marketing-testimonial';
import { MarketingLandingFreeSEO } from '../landing/marketing-landing-free-seo';
import { MarketingCaseStudyListSimilar } from '../list/marketing-case-study-list-similar';
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
            src={caseStudy?.heroUrl}
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
              { name: 'Home', href: '/' },
              { name: 'Case studies', href: paths.marketing.caseStudies },
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
                category={caseStudy?.category || ''}
                createdAt={caseStudy?.createdAt || ''}
                description={caseStudy?.description || ''}
              />
            </Grid>

            <Grid xs={12} md={8}>
              <Markdown content={caseStudy?.content || ''} />
              <MarketingCaseStudyDetailsGallery images={caseStudy?.galleryImgs || []} />
            </Grid>
          </Grid>
        </Container>
      </Box>

      <MarketingTestimonial testimonials={_testimonials} />

      {!!relatedCaseStudies?.length && (
        <MarketingCaseStudyListSimilar caseStudies={relatedCaseStudies} />
      )}

      <MarketingLandingFreeSEO />

      <MarketingNewsletter />
    </>
  );
}
