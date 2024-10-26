import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/config-global';

// ----------------------------------------------------------------------

const BENEFITS = [
  {
    title: 'Online Media',
    description: 'Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. ',
    iconColor: 'primary',
  },
  {
    title: 'Design',
    description: 'Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. ',
    iconColor: 'success',
  },
  {
    title: 'Marketing',
    description: 'Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. ',
    iconColor: 'secondary',
  },
  {
    title: 'HR & recruiting',
    description: 'Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. ',
    iconColor: 'secondary',
  },
  {
    title: 'Management',
    description: 'Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. ',
    iconColor: 'success',
  },
  {
    title: 'Branding',
    description: 'Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. ',
    iconColor: 'primary',
  },
];

// ----------------------------------------------------------------------

export function MarketingServicesBenefits({ sx, ...other }) {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 10, md: 15 },
        bgcolor: 'background.neutral',
        ...sx,
      }}
      {...other}
    >
      <Container>
        <Typography variant="h2" sx={{ textAlign: 'center' }}>
          Benefits achieved
        </Typography>

        <Typography
          sx={{
            mt: 3,
            mx: 'auto',
            opacity: 0.72,
            maxWidth: 480,
            textAlign: 'center',
            mb: { xs: 5, md: 10 },
          }}
        >
          Nunc nonummy metus. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis.
        </Typography>

        <Box
          display="grid"
          alignItems="center"
          gap={{ xs: 4, md: 8 }}
          gridTemplateColumns={{ xs: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}
        >
          <Stack spacing={{ xs: 4, md: 10 }}>
            {BENEFITS.slice(0, 3).map((benefit, index) => (
              <BenefitItem key={benefit.title} benefit={benefit} index={index} reverse />
            ))}
          </Stack>

          <Box
            component="img"
            loading="lazy"
            alt="Benefits"
            src={`${CONFIG.assetsDir}/assets/illustrations/illustration-benefits.svg`}
            sx={{
              width: 360,
              height: 360,
              objectFit: 'cover',
              display: { xs: 'none', md: 'block' },
            }}
          />

          <Stack spacing={{ xs: 4, md: 10 }}>
            {BENEFITS.slice(-3).map((benefit, index) => (
              <BenefitItem key={benefit.title} benefit={benefit} index={index} />
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

function BenefitItem({ benefit, reverse, index }) {
  const { title, description, iconColor } = benefit;

  return (
    <Stack
      spacing={1}
      direction={{ xs: 'row', md: reverse ? 'row-reverse' : 'row' }}
      sx={{
        ...(reverse && {
          textAlign: { md: 'right' },
        }),
        ...(index === 1 && {
          pl: { md: 6 },
          ...(reverse && {
            pl: { md: 0 },
            pr: { md: 6 },
          }),
        }),
      }}
    >
      <Box
        sx={{
          m: 1,
          width: 16,
          height: 16,
          flexShrink: 0,
          borderRadius: '50%',
          background: (theme) =>
            `linear-gradient(to bottom, ${theme.vars.palette.primary.light}, ${theme.vars.palette.primary.main})`,
          ...(iconColor === 'secondary' && {
            background: (theme) =>
              `linear-gradient(to bottom, ${theme.vars.palette.secondary.light}, ${theme.vars.palette.secondary.main})`,
          }),
          ...(iconColor === 'success' && {
            background: (theme) =>
              `linear-gradient(to bottom, ${theme.vars.palette.success.light}, ${theme.vars.palette.success.main})`,
          }),
        }}
      />

      <Stack spacing={1}>
        <Typography variant="h5">{title}</Typography>

        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {description}
        </Typography>
      </Stack>
    </Stack>
  );
}
