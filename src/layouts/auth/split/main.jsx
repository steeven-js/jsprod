import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

import { layoutClasses } from 'src/layouts/classes';

// ----------------------------------------------------------------------

export function Main({ sx, children, layoutQuery, ...other }) {
  const theme = useTheme();

  return (
    <Box
      component="main"
      className={layoutClasses.main}
      sx={{
        display: 'flex',
        flex: '1 1 auto',
        flexDirection: 'column',
        [theme.breakpoints.up(layoutQuery)]: {
          flexDirection: 'row',
        },
        ...sx,
      }}
      {...other}
    >
      {children}
    </Box>
  );
}

// ----------------------------------------------------------------------

export function Content({ sx, children, layoutQuery, ...other }) {
  const theme = useTheme();

  return (
    <Box
      className={layoutClasses.content}
      sx={{
        px: 2,
        py: 5,
        width: 1,
        mx: 'auto',
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 'var(--layout-auth-content-width)',
        [theme.breakpoints.up(layoutQuery)]: {
          py: 8,
          px: 8,
        },
        ...sx,
      }}
      {...other}
    >
      {children}
    </Box>
  );
}
