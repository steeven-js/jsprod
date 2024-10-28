import { useEffect } from 'react';
import { useTheme } from '@emotion/react';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';

import { paths } from 'src/routes/paths';
import { usePathname } from 'src/routes/hooks';

import { varAlpha } from 'src/theme/styles';

import { Logo } from 'src/components/logo';
import { Iconify } from 'src/components/iconify';
import { NavUl } from 'src/components/nav-section';
import { Scrollbar } from 'src/components/scrollbar';
import { AnimateBorder } from 'src/components/animate';

import { NavList } from './nav-mobile-list';

// ----------------------------------------------------------------------

export function NavMobile({ data, open, onClose, slots, sx }) {
  const theme = useTheme();

  const pathname = usePathname();

  const layoutQuery = 'md';

  useEffect(() => {
    if (open) {
      onClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <Drawer
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          display: 'flex',
          flexDirection: 'column',
          width: 'var(--layout-nav-mobile-width)',
          ...sx,
        },
      }}
    >
      {slots?.topArea ?? (
        <Box display="flex" sx={{ pt: 3, pb: 2, pl: 2.5 }}>
          <Logo />
        </Box>
      )}

      <Scrollbar fillContent>
        <Box component="nav" display="flex" flexDirection="column" flex="1 1 auto" sx={{ pb: 3 }}>
          <NavUl>
            {data.map((list) => (
              <NavList key={list.title} data={list} />
            ))}
          </NavUl>
        </Box>
      </Scrollbar>

      {slots?.bottomArea ?? (
        <Box gap={1.5} display="flex" sx={{ px: 2.5, py: 3 }}>
          <Box
            sx={{
              borderRadius: 1,
              position: 'relative',
              bgcolor: 'text.primary',
              color: 'background.paper',
              width: '100%',
            }}
          >
            <AnimateBorder
              animate={{
                duration: 12,
                distance: 40,
                color: [theme.vars.palette.primary.main, theme.vars.palette.warning.main],
                outline: `135deg, ${varAlpha(theme.vars.palette.primary.mainChannel, 0.04)}, ${varAlpha(theme.vars.palette.primary.mainChannel, 0.04)}`,
              }}
              sx={{ width: 1, height: 1, minHeight: 'auto', position: 'absolute' }}
            />

            <Button
              fullWidth
              size="large"
              variant="text"
              rel="noopener"
              target="_blank"
              href={paths.linkedin}
              startIcon={<Iconify icon="mdi:linkedin" />}
            >
              Linkedin
            </Button>
          </Box>
        </Box>
      )}
    </Drawer>
  );
}
