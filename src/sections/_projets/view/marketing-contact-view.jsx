import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { MarketingNewsletter } from '../marketing-newsletter';
import { MarketingContactForm } from '../contact/marketing-contact-form';
import { MarketingContactInfo } from '../contact/marketing-contact-info';
import { MarketingLandingFreeSEO } from '../landing/marketing-landing-free-seo';

// ----------------------------------------------------------------------

export function MarketingContactView() {
  return (
    <>
      <Box
        component="section"
        sx={{
          pt: { xs: 3, md: 10 },
          pb: { xs: 10, md: 15 },
        }}
      >
        <Container>
          <Grid
            container
            disableEqualOverflow
            spacing={{ xs: 5, md: 3 }}
            justifyContent={{ md: 'space-between' }}
            direction={{ xs: 'column-reverse', md: 'row' }}
          >
            <Grid xs={12} md={6} lg={5}>
              <MarketingContactInfo />
            </Grid>

            <Grid xs={12} md={6} lg={6}>
              <Typography variant="h3" sx={{ mb: 5 }}>
                Ready to get started?
              </Typography>

              <MarketingContactForm />
            </Grid>
          </Grid>
        </Container>
      </Box>

      <MarketingLandingFreeSEO />

      <MarketingNewsletter />
    </>
  );
}
