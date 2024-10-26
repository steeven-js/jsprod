import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';

import { layoutClasses } from 'src/layouts/classes';

// ----------------------------------------------------------------------

export function Main({ sx, children, layoutQuery, ...other }) {
  const theme = useTheme();

  return (
    <Container
      component="main"
      className={layoutClasses.main}
      sx={{
        pt: 3,
        pb: 10,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        [theme.breakpoints.up(layoutQuery)]: {
          pt: 5,
          pb: 5,
          gap: 10,
        },
        ...sx,
      }}
      {...other}
    >
      {children}
    </Container>
  );
}

// ----------------------------------------------------------------------

export function Content({ sx, children, layoutQuery, ...other }) {
  const theme = useTheme();

  return (
    <Box
      className={layoutClasses.content}
      sx={{
        py: 5,
        width: 1,
        borderRadius: 2,
        px: { xs: 3, sm: 5 },
        bgcolor: 'background.paper',
        boxShadow: theme.customShadows.z24,
        maxWidth: 'var(--layout-auth-content-width)',
        ...sx,
      }}
      {...other}
    >
      {children}
    </Box>
  );
}
