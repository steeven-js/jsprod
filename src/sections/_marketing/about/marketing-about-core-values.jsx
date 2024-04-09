import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const CORE_VALUES = [
  {
    title: 'Satisfaction client',
    description: 'Votre satisfaction est notre priorité.',
    icon: '/assets/icons/ic_agreement.svg',
  },
  {
    title: 'Transparence',
    description: 'Nous valorisons la transparence dans tout ce que nous faisons.',
    icon: '/assets/icons/ic_transparency.svg',
  },
  {
    title: 'Réputation',
    description: 'Notre réputation parle d\'elle-même.',
    icon: '/assets/icons/ic_reputation.svg',
  },
  {
    title: 'Coopération',
    description: 'Ensemble, nous atteignons plus.',
    icon: '/assets/icons/ic_popularity.svg',
  },
];

// ----------------------------------------------------------------------

export default function MarketingAboutCoreValues() {
  return (
    <Container
      sx={{
        textAlign: 'center',
        pt: { xs: 5, md: 10 },
        pb: { xs: 5, md: 15 },
      }}
    >
      <Typography variant="h2" sx={{ mb: { xs: 8, md: 10 } }}>
        Ce qui nous guide
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gap: 8,
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          },
        }}
      >
        {CORE_VALUES.map((value) => (
          <Box key={value.title}>
            <SvgColor
              src={value.icon}
              sx={{
                width: 64,
                height: 64,
                mx: 'auto',
                color: 'primary.main',
              }}
            />

            <Typography variant="h5" sx={{ mt: 5, mb: 2 }}>
              {value.title}
            </Typography>

            <Typography sx={{ color: 'text.secondary' }}> {value.description} </Typography>
          </Box>
        ))}
      </Box>
    </Container>
  );
}
