import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/config-global';

import { Label } from 'src/components/label';

const iconPath = (name) => `${CONFIG.assetsDir}/assets/icons/plans/${name}`;

// ----------------------------------------------------------------------

export function PricingColumnHeader({ plan, sx }) {
  const isStartLicense = plan.license === 'Start';
  const isProLicense = plan.license === 'Pro';

  return (
    <Stack
      spacing={2}
      alignItems={{ xs: 'flex-start', md: 'center' }}
      sx={{
        px: 3,
        py: 5,
        position: 'relative',
        ...(isProLicense && {
          borderRadius: '16px 16px 0 0',
          bgcolor: { md: 'background.neutral' },
        }),
        ...sx,
      }}
    >
      {isProLicense && (
        <Label color="info" sx={{ position: 'absolute', top: 16, right: 16 }}>
          POPULAR
        </Label>
      )}

      <Typography variant="overline" sx={{ color: 'text.secondary' }}>
        {plan.license}
      </Typography>

      <Box
        gap={0.5}
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{
          ...(isProLicense && {
            color: { md: 'primary.main' },
          }),
        }}
      >
        {!isStartLicense && (
          <Typography component="span" variant="h4">
            $
          </Typography>
        )}

        <Typography component="span" variant="h3">
          {plan.price}
        </Typography>

        {!isStartLicense && (
          <Typography component="span" variant="subtitle2">
            /mo
          </Typography>
        )}
      </Box>

      <Box
        component="img"
        alt={plan.license}
        src={
          (isStartLicense && iconPath('ic-plan-box-basic.svg')) ||
          (isProLicense && iconPath('ic-plan-box-starter.svg')) ||
          iconPath('ic-plan-box-premium.svg')
        }
        sx={{ width: 80, height: 80 }}
      />

      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {plan.caption}
      </Typography>
    </Stack>
  );
}
