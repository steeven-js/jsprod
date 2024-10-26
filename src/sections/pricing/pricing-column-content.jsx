import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';

import { useBoolean } from 'src/hooks/use-boolean';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export function PricingColumnContentMobile({ plan, sx }) {
  const openContent = useBoolean();

  const isStartLicense = plan.license === 'Start';
  const isProLicense = plan.license === 'Pro';
  const isBusinessLicense = plan.license === 'Business';

  return (
    <Stack spacing={5} sx={{ px: 3, pb: 5, ...sx }}>
      <div>
        <Link
          variant="subtitle2"
          color={openContent.value ? 'primary' : 'inherit'}
          onClick={openContent.onToggle}
          sx={{ gap: 1, display: 'flex', cursor: 'pointer', alignItems: 'center' }}
        >
          {openContent.value ? 'Hide' : 'Show'} all feature
          <Iconify
            icon={openContent.value ? 'solar:alt-arrow-up-outline' : 'solar:alt-arrow-down-outline'}
          />
        </Link>

        <Collapse in={openContent.value}>
          <Stack spacing={2} sx={{ pt: 3 }}>
            {plan.options.map((option) => (
              <Box
                key={option.title}
                gap={1.5}
                display="flex"
                alignItems="center"
                sx={{
                  typography: 'body2',
                  ...(option.disabled && { color: 'text.disabled' }),
                }}
              >
                <Iconify
                  width={20}
                  icon={option.disabled ? 'eva:close-outline' : 'eva:checkmark-fill'}
                  sx={{ color: option.disabled ? 'inherit' : 'primary.main' }}
                />
                {option.title}
              </Box>
            ))}
          </Stack>
        </Collapse>
      </div>

      <Button
        fullWidth
        size="large"
        color="inherit"
        variant={isProLicense ? 'contained' : 'outlined'}
      >
        {isStartLicense && 'Start free trial'}
        {isProLicense && 'Choose pro'}
        {isBusinessLicense && 'Contact sale'}
      </Button>
    </Stack>
  );
}

// ----------------------------------------------------------------------

export function PricingColumnContentDesktop({ plan, sx }) {
  const isStartLicense = plan.license === 'Start';
  const isProLicense = plan.license === 'Pro';
  const isBusinessLicense = plan.license === 'Business';

  return (
    <Box sx={sx}>
      {plan.options.map((item) => (
        <Stack
          key={item.title}
          alignItems="center"
          justifyContent="center"
          sx={{
            color: 'text.secondary',
            height: 'var(--row-height)',
            borderBottom: (theme) => `solid 1px ${theme.vars.palette.divider}`,
            ...(isProLicense && {
              bgcolor: 'background.neutral',
            }),
          }}
        >
          {item.disabled ? (
            '-'
          ) : (
            <Iconify width={24} icon="eva:checkmark-fill" sx={{ color: 'primary.main' }} />
          )}
        </Stack>
      ))}

      <Stack
        alignItems="center"
        sx={{
          py: 5,
          ...(isProLicense && {
            bgcolor: 'background.neutral',
            borderRadius: '0 0 16px 16px',
          }),
        }}
      >
        <Button size="large" variant={isProLicense ? 'contained' : 'outlined'} color="inherit">
          {isStartLicense && 'Start free trial'}
          {isProLicense && 'Choose pro'}
          {isBusinessLicense && 'Contact sale'}
        </Button>
      </Stack>
    </Box>
  );
}
