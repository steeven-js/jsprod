import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';

import { CONFIG } from 'src/config-global';

import { SvgColor } from 'src/components/svg-color';

// ----------------------------------------------------------------------

export function MarketingNewsletter({ sx, ...other }) {
  return (
    <Box component="section" sx={{ py: 10, bgcolor: 'background.neutral', ...sx }} {...other}>
      <Container>
        <Stack
          spacing={3}
          alignItems="center"
          justifyContent="space-between"
          direction={{ xs: 'column', md: 'row' }}
        >
          <Stack
            spacing={3}
            alignItems="center"
            direction={{ xs: 'column', md: 'row' }}
            sx={{ textAlign: { xs: 'center', md: 'left' } }}
          >
            <SvgColor
              width={80}
              src={`${CONFIG.assetsDir}/assets/icons/duotone/ic-newsletter.svg`}
              sx={{
                background: (theme) =>
                  `linear-gradient(to bottom, ${theme.vars.palette.primary.light}, ${theme.vars.palette.primary.main})`,
              }}
            />

            <div>
              <Typography variant="h4" component="h6">
                Sign up for newsletter
              </Typography>
              <Typography variant="body2" sx={{ mt: 1, color: 'text.secondary' }}>
                Receive 50% discount on first project
              </Typography>
            </div>
          </Stack>

          <TextField
            fullWidth
            hiddenLabel
            placeholder="Enter your email"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Button size="large" color="inherit" variant="contained">
                    Sign up
                  </Button>
                </InputAdornment>
              ),
              sx: { pr: '4px' },
            }}
            sx={{ maxWidth: 466 }}
          />
        </Stack>
      </Container>
    </Box>
  );
}
