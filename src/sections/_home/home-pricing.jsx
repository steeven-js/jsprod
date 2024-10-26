import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/config-global';
import { varAlpha, stylesMode } from 'src/theme/styles';

import { Label } from 'src/components/label';
import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

function AnimatedDiv({ children }) {
  const variants = varFade({ distance: 24 }).inUp;
  return <m.div variants={variants}>{children}</m.div>;
}

// ----------------------------------------------------------------------

export function HomePricing({ plans, sx, ...other }) {
  return (
    <Box
      component="section"
      sx={{
        pt: { xs: 10, md: 15 },
        pb: { xs: 5, md: 10 },
        ...sx,
      }}
      {...other}
    >
      <Container component={MotionViewport}>
        <Box
          sx={{
            mx: 'auto',
            maxWidth: 480,
            textAlign: 'center',
            mb: { xs: 5, md: 10 },
          }}
        >
          <AnimatedDiv>
            <Typography variant="overline" sx={{ color: 'text.disabled' }}>
              pricing plans
            </Typography>
          </AnimatedDiv>

          <AnimatedDiv>
            <Typography variant="h2" sx={{ my: 3 }}>
              Transparent pricing
            </Typography>
          </AnimatedDiv>

          <AnimatedDiv>
            <Typography sx={{ color: 'text.secondary' }}>
              Choose from flexible pricing options designed to fit your business needs and budget
              with no hidden fees.
            </Typography>
          </AnimatedDiv>
        </Box>

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
            <AnimatedDiv key={plan.license}>
              <PricingCard plan={plan} />
            </AnimatedDiv>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

const iconPath = (name) => `${CONFIG.assetsDir}/assets/icons/platforms/${name}`;

// ----------------------------------------------------------------------

export function PricingCard({ plan, sx }) {
  const theme = useTheme();

  const isStandardLicense = plan.license === 'Standard';
  const isPlusLicense = plan.license === 'Plus';
  const isExtendedLicense = plan.license === 'Extended';

  return (
    <Paper
      variant="outlined"
      sx={{
        p: 5,
        borderRadius: 2,
        position: 'relative',
        bgcolor: 'transparent',
        boxShadow: theme.customShadows.card,
        ...(isPlusLicense && { py: 10 }),
        [theme.breakpoints.up('md')]: {
          boxShadow: 'none',
          ...(isPlusLicense && {
            boxShadow: `-24px 24px 72px -8px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.24)}`,
            [stylesMode.dark]: {
              boxShadow: `-24px 24px 72px -8px ${varAlpha(theme.vars.palette.common.blackChannel, 0.24)}`,
            },
          }),
        },
        ...sx,
      }}
    >
      {isPlusLicense && (
        <Label color="info" sx={{ position: 'absolute', top: 40, left: 40 }}>
          POPULAR
        </Label>
      )}

      <Stack spacing={5}>
        <Box display="flex">
          <Box component="span" sx={{ flexGrow: 1, typography: 'h5' }}>
            {plan.license}
          </Box>

          <Box gap={0.5} display="flex">
            <Box component="span" sx={{ typography: 'h4' }}>
              $
            </Box>
            <Box component="span" sx={{ typography: 'h3' }}>
              {plan.price}
            </Box>
          </Box>
        </Box>

        <Box gap={1.5} display="flex">
          <Box
            component="img"
            loading="lazy"
            alt="JavaScript"
            src={iconPath('ic-js.svg')}
            sx={{ width: 24, height: 24 }}
          />
          {!isStandardLicense && (
            <>
              <Box
                component="img"
                loading="lazy"
                alt="TypeScript"
                src={iconPath('ic-ts.svg')}
                sx={{ width: 24, height: 24 }}
              />
              <Box
                component="img"
                loading="lazy"
                alt="Figma"
                src={iconPath('ic-figma.svg')}
                sx={{ width: 24, height: 24 }}
              />
            </>
          )}
        </Box>

        <Stack spacing={2.5}>
          {plan.commons.map((option) => (
            <Box
              key={option}
              gap={1.5}
              display="flex"
              alignItems="center"
              sx={{ typography: 'body2' }}
            >
              <Iconify width={20} icon="eva:checkmark-fill" sx={{ color: 'primary.main' }} />
              {option}
            </Box>
          ))}

          <Divider sx={{ borderStyle: 'dashed' }} />

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
                sx={{
                  color: 'primary.main',
                  ...(option.disabled && { color: 'currentColor' }),
                }}
              />
              {option.title}
            </Box>
          ))}
        </Stack>

        <Button
          size="large"
          fullWidth
          variant={isStandardLicense ? 'outlined' : 'contained'}
          color={isExtendedLicense ? 'primary' : 'inherit'}
          target="_blank"
          rel="noopener"
          href={paths.zoneStore}
        >
          Choose package
        </Button>
      </Stack>
    </Paper>
  );
}
