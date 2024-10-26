import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { _CORE_VALUES, _AboutCoreValues } from 'src/assets/data';

import { SvgColor } from 'src/components/svg-color';

// ----------------------------------------------------------------------

export function AboutCoreValues({ sx, ...other }) {
  return (
    <Box
      component="section"
      sx={{
        textAlign: 'center',
        py: { xs: 10, md: 15 },
        ...sx,
      }}
      {...other}
    >
      <Container>
        <Typography variant="h2" sx={{ mb: { xs: 5, md: 10 } }}>
          {_AboutCoreValues[0].label}
        </Typography>

        <Box
          display="grid"
          gap={{ xs: 5, md: 8 }}
          gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          }}
        >
          {_CORE_VALUES.map((value) => (
            <div key={value.title}>
              <SvgColor
                src={value.icon}
                width={64}
                sx={{
                  background: (theme) =>
                    `linear-gradient(to bottom, ${theme.vars.palette.primary.light}, ${theme.vars.palette.primary.main})`,
                }}
              />

              <Typography component="h6" variant="h5" sx={{ mt: 3, mb: 1 }}>
                {value.title}
              </Typography>

              <Typography sx={{ color: 'text.secondary' }}> {value.description} </Typography>
            </div>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
