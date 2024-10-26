import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { CONFIG } from 'src/config-global';
import { varAlpha, stylesMode } from 'src/theme/styles';
import { _LandingServices, _SERVICESLANDING } from 'src/assets/data/landing';

import { Iconify } from 'src/components/iconify';
import { SvgColor } from 'src/components/svg-color';

// ----------------------------------------------------------------------

const COLORS = ['primary', 'secondary', 'success', 'warning'];

// ----------------------------------------------------------------------

export function HomeServices({ sx, ...other }) {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 5, md: 10 },
        ...sx,
      }}
      {...other}
    >
      <Container>
        <Stack
          spacing={3}
          sx={{
            mb: 5,
            maxWidth: 480,
            mx: { xs: 'auto', md: 'unset' },
            textAlign: { xs: 'center', md: 'unset' },
          }}
        >
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>
            {_LandingServices[0].label}
          </Typography>

          <Typography variant="h2">{_LandingServices[1].label}</Typography>

          <Typography sx={{ color: 'text.secondary' }}>{_LandingServices[2].label}</Typography>
        </Stack>

        <Box
          gap={4}
          display="grid"
          gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          }}
          sx={{ alignItems: 'center' }}
        >
          {_SERVICESLANDING.map((item, index) => (
            <ServiceItem key={item.name} item={item} index={index} />
          ))}
        </Box>
      </Container>
    </Box>
  );
}

function ServiceItem({ item, index }) {
  const iconPath = (name) => `${CONFIG.assetsDir}/assets/icons/services/${name}`;

  return (
    <Paper
      variant="outlined"
      sx={(theme) => ({
        px: 4,
        py: 5,
        borderRadius: 2,
        textAlign: 'center',
        bgcolor: 'transparent',
        boxShadow: theme.customShadows.card,
        [theme.breakpoints.up('md')]: {
          boxShadow: 'none',
          ...(index === 1 && { py: 8 }),
          ...(index === 2 && { py: 10 }),
          ...([2, 3].includes(index) && {
            boxShadow: `-24px 24px 72px -8px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.24)}`,
            [stylesMode.dark]: {
              boxShadow: `-24px 24px 72px -8px ${varAlpha(theme.vars.palette.common.blackChannel, 0.24)}`,
            },
          }),
        },
      })}
    >
      <SvgColor
        src={iconPath(item.icon)}
        width={88}
        sx={{
          background: (theme) =>
            `linear-gradient(to bottom, ${theme.vars.palette[COLORS[index]].light}, ${theme.vars.palette[COLORS[index]].main})`,
        }}
      />

      <Box sx={{ my: 5 }}>
        <Typography variant="h6" sx={{ mb: 1 }}>
          {item.name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {item.content}
        </Typography>
      </Box>

      <IconButton
        component={RouterLink}
        href={item.path}
        color={
          (index === 0 && 'primary') ||
          (index === 1 && 'secondary') ||
          (index === 2 && 'success') ||
          'warning'
        }
      >
        <Iconify icon="carbon:direction-straight-right" />
      </IconButton>
    </Paper>
  );
}
