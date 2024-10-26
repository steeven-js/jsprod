import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { MemberItem } from './marketing-team';

// ----------------------------------------------------------------------

export function MarketingTeamAbout({ members, sx, ...other }) {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 10, md: 15 },
        ...sx,
      }}
      {...other}
    >
      <Container>
        <Typography variant="h2" sx={{ textAlign: 'center' }}>
          Great team is the key
        </Typography>

        <Typography
          sx={{
            mt: 3,
            mx: 'auto',
            maxWidth: 480,
            textAlign: 'center',
            mb: { xs: 5, md: 10 },
            color: 'text.secondary',
          }}
        >
          Since wire-frame renderings are relatively simple and fast to calculate, they are often
          used in cases
        </Typography>

        <Box
          columnGap={3}
          rowGap={{ xs: 4, md: 5 }}
          display="grid"
          gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          }}
        >
          {members.map((item) => (
            <MemberItem key={item.id} item={item} />
          ))}
        </Box>
      </Container>
    </Box>
  );
}
