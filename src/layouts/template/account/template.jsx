import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';

import { NavAccountDesktop } from './nav';
import { navData } from '../../config-nav-account';

// ----------------------------------------------------------------------

export function AccountTemplate({ children, sx, ...other }) {
  return (
    <Container sx={sx} {...other}>
      <Stack
        alignItems={{ md: 'flex-start' }}
        direction={{ xs: 'column', md: 'row' }}
        sx={{ mt: { xs: 5, md: 10 }, mb: 10 }}
      >
        <NavAccountDesktop data={navData} />

        <Box
          sx={{
            flexGrow: 1,
            pl: { md: 8 },
            width: { md: `calc(100% - ${280}px)` },
          }}
        >
          {children}
        </Box>
      </Stack>
    </Container>
  );
}
