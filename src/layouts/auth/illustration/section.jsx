import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

import { CONFIG } from 'src/config-global';

// ----------------------------------------------------------------------

export function Section({ sx, layoutQuery }) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'none',
        flex: '1 1 auto',
        [theme.breakpoints.up(layoutQuery)]: {
          display: 'block',
        },
        ...sx,
      }}
    >
      <Box
        component="img"
        alt="Sign in"
        src={`${CONFIG.assetsDir}/assets/illustrations/illustration-sign-in.svg`}
        sx={{ width: 1 }}
      />
    </Box>
  );
}
