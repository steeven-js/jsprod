import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';

import { CONFIG } from 'src/config-global';
import { varAlpha, bgGradient } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export function SupportHero({ sx, ...other }) {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        ...bgGradient({
          color: `to bottom, ${varAlpha(theme.vars.palette.common.blackChannel, 0.8)}, ${varAlpha(theme.vars.palette.common.blackChannel, 0.8)}`,
          imgUrl: `${CONFIG.assetsDir}/assets/background/overlay-2.webp`,
        }),
        px: 2.5,
        display: 'flex',
        alignItems: 'center',
        py: { xs: 10, md: 15 },
        flexDirection: 'column',
        ...sx,
      }}
      {...other}
    >
      <Typography variant="h2" sx={{ textAlign: 'center', color: 'common.white', mb: 5 }}>
        Welcome to <br />
        <Box component="span" sx={{ color: 'primary.main' }}>
          {`ZONE `}
        </Box>
        support
      </Typography>

      <TextField
        fullWidth
        hiddenLabel
        placeholder="Search..."
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Iconify width={24} icon="carbon:search" sx={{ color: 'text.disabled' }} />
            </InputAdornment>
          ),
          sx: {
            color: 'common.white',
            bgcolor: varAlpha(theme.vars.palette.grey['500Channel'], 0.16),
          },
        }}
        sx={{ maxWidth: 360 }}
      />
    </Box>
  );
}
