import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';

import { Label } from 'src/components/label';
import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export function PaymentSummary({ sx, ...other }) {
  return (
    <Box
      sx={{
        p: 5,
        borderRadius: 2,
        bgcolor: 'background.neutral',
        ...sx,
      }}
      {...other}
    >
      <Typography component="h6" variant="h5" sx={{ mb: { xs: 3, md: 5 } }}>
        Summary
      </Typography>

      <Stack spacing={2.5}>
        <Box display="flex" alignItems="center">
          <Typography variant="body2" sx={{ flexGrow: 1, color: 'text.secondary' }}>
            Subscription
          </Typography>
          <Label color="error">PREMIUM</Label>
        </Box>

        <Box display="flex" alignItems="center">
          <Typography variant="body2" sx={{ flexGrow: 1, color: 'text.secondary' }}>
            Billed monthly
          </Typography>
          <Switch defaultChecked inputProps={{ id: 'plan-switch', 'aria-label': 'Plan switch' }} />
        </Box>

        <Box gap={1} display="flex" justifyContent="flex-end">
          <Box component="span" sx={{ typography: 'h5' }}>
            $
          </Box>
          <Box component="span" sx={{ typography: 'h2' }}>
            9.99
          </Box>
          <Typography component="span" sx={{ mb: 1, alignSelf: 'center', color: 'text.secondary' }}>
            /mo
          </Typography>
        </Box>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Box display="flex" alignItems="center" sx={{ typography: 'h6' }}>
          <Box component="span" sx={{ flexGrow: 1 }}>
            Total billed
          </Box>
          <Box component="span">$9.99*</Box>
        </Box>

        <Divider sx={{ borderStyle: 'dashed' }} />
      </Stack>

      <Typography
        variant="caption"
        sx={{ mt: 2, display: 'block', textAlign: 'right', color: 'text.secondary' }}
      >
        * Plus applicable taxes
      </Typography>

      <LoadingButton
        fullWidth
        size="large"
        color="inherit"
        type="submit"
        variant="contained"
        sx={{ my: 3 }}
      >
        Upgrade my plan
      </LoadingButton>

      <Stack alignItems="center" spacing={1}>
        <Box gap={1} display="flex" alignItems="center">
          <Iconify icon="solar:shield-check-outline" sx={{ color: 'success.main' }} />
          <Typography variant="subtitle2">Secure credit card payment</Typography>
        </Box>
        <Typography variant="caption" sx={{ textAlign: 'center', color: 'text.disabled' }}>
          This is a secure 128-bit SSL encrypted payment
        </Typography>
      </Stack>
    </Box>
  );
}
