import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

// ----------------------------------------------------------------------

export function MarketingAboutOurClients({ brands, sx, ...other }) {
  return (
    <Box
      component="section"
      sx={{
        textAlign: 'center',
        pb: { xs: 10, md: 15 },
        ...sx,
      }}
      {...other}
    >
      <Container>
        <Typography variant="h2" sx={{ mb: { xs: 5, md: 10 } }}>
          Our clients
        </Typography>

        <Box
          rowGap={5}
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          columnGap={{ xs: 4, md: 8 }}
          sx={{ mx: 'auto', maxWidth: 680 }}
        >
          {brands.map((brand) => (
            <Box
              key={brand.id}
              component="img"
              loading="lazy"
              alt={brand.name}
              src={brand.image.replace('.svg', '-original.svg')}
              sx={{ width: 106, height: 32 }}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
}
