import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/config-global';
import { varAlpha, stylesMode } from 'src/theme/styles';

import { Label } from 'src/components/label';
import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export function MarketingPricing({ plans, sx, ...other }) {
  return (
    <Box
      component="section"
      sx={{
        pt: 10,
        pb: { xs: 5, md: 10 },
        ...sx,
      }}
      {...other}
    >
      <Container>
        <Stack
          spacing={5}
          direction={{ xs: 'column', md: 'row' }}
          justifyContent={{ md: 'space-between' }}
          alignItems={{ xs: 'center', md: 'flex-end' }}
          sx={{ mb: { xs: 5, md: 10 } }}
        >
          <Stack
            spacing={3}
            sx={{
              maxWidth: 480,
              mx: { xs: 'auto', md: 'unset' },
              textAlign: { xs: 'center', md: 'unset' },
            }}
          >
            <Typography variant="overline" sx={{ color: 'text.disabled' }}>
              Pricing
            </Typography>

            <Typography variant="h2"> Our pricing</Typography>

            <Typography sx={{ color: 'text.secondary' }}>
              Choose your plan and make modern online conversation magic.
            </Typography>
          </Stack>

          <Box display="flex" alignItems="center" sx={{ typography: 'overline' }}>
            MONTHLY
            <Switch
              defaultChecked
              inputProps={{ id: 'plan-checkbox', 'aria-label': 'Plan checkbox' }}
            />
            YEARLY (save 10%)
          </Box>
        </Stack>

        <Box
          gap={4}
          display="grid"
          gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            md: 'repeat(3, 1fr)',
          }}
          sx={{ alignItems: 'center' }}
        >
          {plans.map((plan) => (
            <PricingCard key={plan.license} plan={plan} />
          ))}
        </Box>
      </Container>
    </Box>
  );
}

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
        pt: 8,
        borderRadius: 2,
        position: 'relative',
        bgcolor: 'transparent',
        boxShadow: theme.customShadows.card,
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
        <Label color="info" sx={{ position: 'absolute', top: 24, left: 32 }}>
          POPULAR
        </Label>
      )}

      <Box display="flex">
        <Box flexGrow={1}>
          <Typography component="h6" variant="h5" sx={{ color: 'primary.main', mb: 2 }}>
            {plan.license}
          </Typography>
          <Box gap={0.5} display="flex" alignItems="center">
            <Typography component="span" variant="h3">{`$${plan.price}`}</Typography>
            <Typography component="span" variant="h5" sx={{ color: 'text.disabled' }}>
              /mo
            </Typography>
          </Box>
        </Box>

        <Box
          component="img"
          loading="lazy"
          alt={plan.license}
          src={
            (isBasicLicense && iconPath('ic-plan-rocket-basic.svg')) ||
            (isStarterLicense && iconPath('ic-plan-rocket-starter.svg')) ||
            iconPath('ic-plan-rocket-premium.svg')
          }
          sx={{ width: 64, height: 64 }}
        />
      </Box>

      <Typography variant="body2" sx={{ color: 'text.secondary', mt: 3 }}>
        {plan.caption}
      </Typography>

      <Stack spacing={2} sx={{ my: 5, typography: 'body2' }}>
        {plan.options.map((option) => (
          <Box key={option} gap={1.5} display="flex" alignItems="center">
            <Iconify icon="eva:checkmark-fill" sx={{ color: 'primary.main' }} /> {option}
          </Box>
        ))}
      </Stack>

      <Button
        fullWidth
        size="large"
        color={(isPremiumLicense && 'primary') || 'inherit'}
        variant={(isBasicLicense && 'outlined') || 'contained'}
      >
        Choose package
      </Button>
    </Paper>
  );
}
