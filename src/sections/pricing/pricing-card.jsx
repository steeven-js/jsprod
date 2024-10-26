import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/config-global';
import { varAlpha, stylesMode } from 'src/theme/styles';

import { Label } from 'src/components/label';

const iconPath = (name) => `${CONFIG.assetsDir}/assets/icons/plans/${name}`;

// ----------------------------------------------------------------------

export function PricingCard({ plan, sx }) {
  const theme = useTheme();

  const isBasicLicense = plan.license === 'Basic';
  const isStarterLicense = plan.license === 'Starter';
  const isPremiumLicense = plan.license === 'Premium';

  return (
    <Paper
      variant="outlined"
      sx={{
        p: 5,
        borderRadius: 2,
        position: 'relative',
        bgcolor: 'transparent',
        boxShadow: theme.customShadows.card,
        ...(isStarterLicense && { py: 8 }),
        [theme.breakpoints.up('md')]: {
          boxShadow: 'none',
          ...(isStarterLicense && {
            boxShadow: `-24px 24px 72px -8px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.24)}`,
            [stylesMode.dark]: {
              boxShadow: `-24px 24px 72px -8px ${varAlpha(theme.vars.palette.common.blackChannel, 0.24)}`,
            },
          }),
        },
        ...sx,
      }}
    >
      {isStarterLicense && (
        <Label color="info" sx={{ position: 'absolute', top: 16, right: 16 }}>
          POPULAR
        </Label>
      )}

      <Stack spacing={5} alignItems="center">
        <Box component="span" sx={{ color: 'text.secondary', typography: 'overline' }}>
          {plan.license}
        </Box>

        <Box
          component="img"
          alt={plan.license}
          src={
            (isBasicLicense && iconPath('ic-plan-points-basic.svg')) ||
            (isStarterLicense && iconPath('ic-plan-points-starter.svg')) ||
            iconPath('ic-plan-points-premium.svg')
          }
          sx={{ width: 80, height: 80 }}
        />

        <Box gap={0.5} display="flex" alignItems="center">
          {!isBasicLicense && (
            <Typography component="span" variant="h5">
              $
            </Typography>
          )}

          <Typography component="span" variant="h3">
            {plan.price}
          </Typography>

          {!isBasicLicense && (
            <Typography component="span" variant="subtitle2">
              /mo
            </Typography>
          )}
        </Box>

        <Stack spacing={1} sx={{ textAlign: 'center' }}>
          {plan.options.map((option) => (
            <Typography
              key={option.title}
              variant="body2"
              sx={{
                fontWeight: 'fontWeightMedium',
                ...(option.disabled && {
                  color: 'text.disabled',
                  textDecoration: 'line-through',
                }),
              }}
            >
              {option.title}
            </Typography>
          ))}
        </Stack>

        <Button
          fullWidth
          size="large"
          disabled={isBasicLicense}
          variant={isBasicLicense ? 'outlined' : 'contained'}
          color={isPremiumLicense ? 'primary' : 'inherit'}
        >
          {isBasicLicense && 'Current plan'}
          {isStarterLicense && 'Choose starter'}
          {isPremiumLicense && 'Choose premium'}
        </Button>
      </Stack>
    </Paper>
  );
}
