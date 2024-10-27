import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Accordion from '@mui/material/Accordion';
import Typography from '@mui/material/Typography';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

import { _faqs } from 'src/_mock';
import { CONFIG } from 'src/config-global';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export function MarketingLandingFaqs({ sx, ...other }) {
  const [expanded, setExpanded] = useState(false);

  const handleChangeExpanded = useCallback(
    (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    },
    []
  );

  return (
    <Box
      component="section"
      sx={{
        pt: { xs: 5, md: 10 },
        pb: { xs: 10, md: 15 },
        ...sx,
      }}
      {...other}
    >
      <Container>
        <Grid container spacing={3} alignItems="center" justifyContent="space-between">
          <Grid xs={12} md={6} lg={6}>
            <Stack
              spacing={2}
              sx={{
                mb: 5,
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              <Typography variant="overline" color="text.disabled">
                FAQS
              </Typography>

              <Typography variant="h2">Frequently asked questions</Typography>
            </Stack>

            {_faqs.map((faq) => (
              <Accordion
                key={faq.id}
                expanded={expanded === faq.question}
                onChange={handleChangeExpanded(faq.question)}
              >
                <AccordionSummary>
                  <Typography variant="h6" sx={{ pr: 1, flexGrow: 1 }}>
                    {faq.question}
                  </Typography>

                  <Iconify
                    icon={expanded === faq.question ? 'eva:minus-outline' : 'eva:plus-outline'}
                    sx={{ transform: 'translateY(4px)' }}
                  />
                </AccordionSummary>

                <AccordionDetails sx={{ color: 'text.secondary' }}>{faq.answer}</AccordionDetails>
              </Accordion>
            ))}
          </Grid>

          <Grid xs={12} md={6} lg={5} sx={{ display: { xs: 'none', md: 'block' } }}>
            <Box
              component="img"
              loading="lazy"
              alt="Faqs"
              src={`${CONFIG.assetsDir}/assets/illustrations/illustration-faqs.svg`}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
