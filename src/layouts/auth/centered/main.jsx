import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

import { layoutClasses } from 'src/layouts/classes';

// ----------------------------------------------------------------------

export function Main({ sx, children, layoutQuery, ...other }) {
  const theme = useTheme();

  const renderContent = (
    <Box
      sx={{
        py: 5,
        width: 1,
        borderRadius: 2,
        display: 'flex',
        px: { xs: 3, sm: 5 },
        flexDirection: 'column',
        bgcolor: 'background.default',
        boxShadow: theme.customShadows.z24,
        maxWidth: 'var(--layout-auth-content-width)',
      }}
    >
      {children}
    </Box>
  );

  return (
    <Box
      component="main"
      className={layoutClasses.main}
      sx={{
        zIndex: 9,
        display: 'flex',
        flex: '1 1 auto',
        alignItems: 'center',
        flexDirection: 'column',
        p: theme.spacing(3, 2, 10, 2),
        [theme.breakpoints.up(layoutQuery)]: {
          justifyContent: 'center',
          p: theme.spacing(10, 0, 10, 0),
        },
        ...sx,
      }}
      {...other}
    >
      {renderContent}
    </Box>
  );
}
