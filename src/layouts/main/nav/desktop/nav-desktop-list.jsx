import { useRef, useMemo, useState, useEffect, useCallback } from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Fade from '@mui/material/Fade';
import Portal from '@mui/material/Portal';
import Typography from '@mui/material/Typography';

import { usePathname } from 'src/routes/hooks';
import { RouterLink } from 'src/routes/components';
import { useActiveLink } from 'src/routes/hooks/use-active-link';
import { isExternalLink, removeLastSlash } from 'src/routes/utils';

import { NavLi, NavUl } from 'src/components/nav-section';

import { NavItem } from './nav-desktop-item';

// ----------------------------------------------------------------------

export function NavList({ data }) {
  const pathname = usePathname();

  const navItemRef = useRef(null);

  const clientRect = useClientRect(navItemRef);

  const [openMenu, setOpenMenu] = useState(false);

  const active = useActiveLink(data.path, !!data.children);

  const mainList = data?.children?.filter((list) => list.subheader !== 'Common');
  const commonList = data?.children?.find((list) => list.subheader === 'Common');

  useEffect(() => {
    if (openMenu) {
      setOpenMenu(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleOpenMenu = useCallback(() => {
    setOpenMenu(!!data.children);
  }, [data.children]);

  const handleCloseMenu = useCallback(() => {
    setOpenMenu(false);
  }, []);

  const renderNavItem = useMemo(
    () => (
      <NavItem
        ref={navItemRef}
        // slots
        path={data.path}
        title={data.title}
        // state
        active={active}
        hasChild={!!data.children}
        open={data.children && !!openMenu}
        externalLink={isExternalLink(data.path)}
        // action
        onMouseEnter={handleOpenMenu}
        onMouseLeave={handleCloseMenu}
      />
    ),
    [navItemRef, data, active, openMenu, handleOpenMenu, handleCloseMenu]
  );

  if (data.children) {
    return (
      <NavLi sx={{ height: 1 }}>
        {renderNavItem}

        {openMenu && (
          <Portal>
            <Fade in>
              <Box
                onMouseEnter={handleOpenMenu}
                onMouseLeave={handleCloseMenu}
                sx={{
                  pl: 5,
                  left: 0,
                  width: 1,
                  position: 'fixed',
                  bgcolor: 'background.neutral',
                  zIndex: (theme) => theme.zIndex.modal,
                  boxShadow: (theme) => theme.customShadows.dropdown,
                  top: Math.round(clientRect.top + clientRect.height),
                }}
              >
                <Box component="nav">
                  <NavUl sx={{ width: 1, gap: 5, flexDirection: 'row' }}>
                    {mainList?.map((list) => (
                      <NavSubList
                        key={list.subheader}
                        subheader={list.subheader}
                        coverUrl={list.coverUrl}
                        items={list.items}
                      />
                    ))}

                    {commonList && (
                      <NavSubList subheader={commonList.subheader} items={commonList.items} />
                    )}
                  </NavUl>
                </Box>
              </Box>
            </Fade>
          </Portal>
        )}
      </NavLi>
    );
  }

  return <NavLi sx={{ height: 1 }}>{renderNavItem}</NavLi>;
}

// ----------------------------------------------------------------------

function NavSubList({ subheader, coverUrl, items }) {
  const pathname = usePathname();

  return (
    <NavLi
      sx={{
        py: 5,
        width: 1 / 6,
        ...(subheader === 'Common' && {
          px: 5,
          width: 'calc(100% / 6 + 80px)',
          bgcolor: 'background.default',
        }),
      }}
    >
      <Typography variant="h6" sx={{ mb: 2 }}>
        {subheader}
      </Typography>

      <NavUl sx={{ gap: 1.25 }}>
        {coverUrl && (
          <NavLi sx={{ mb: 1.5 }}>
            <Link component={RouterLink} href={items[0].path ?? ''}>
              <Box
                component="img"
                alt={coverUrl}
                src={coverUrl}
                sx={{
                  borderRadius: 1,
                  cursor: 'pointer',
                  objectFit: 'cover',
                  aspectRatio: '16/10',
                  transition: (theme) => theme.transitions.create('all'),
                  '&:hover': {
                    opacity: 0.8,
                    boxShadow: (theme) => theme.customShadows.z24,
                  },
                }}
              />
            </Link>
          </NavLi>
        )}

        {items.map((item) => (
          <NavLi key={item.title}>
            <NavItem
              path={item.path}
              title={item.title}
              active={item.path === removeLastSlash(pathname)}
              subItem
            />
          </NavLi>
        ))}
      </NavUl>
    </NavLi>
  );
}

// ----------------------------------------------------------------------

const useClientRect = (ref) => {
  const [clientRect, setClientRect] = useState({
    top: 0,
    height: 0,
  });

  const handleGetClientRect = useCallback(() => {
    const element = ref.current;

    if (element) {
      const rect = element.getBoundingClientRect();
      setClientRect({ top: rect.top, height: rect.height });
    }
  }, [ref]);

  useEffect(() => {
    handleGetClientRect();

    window.addEventListener('scroll', handleGetClientRect);
    return () => window.removeEventListener('scroll', handleGetClientRect);
  }, [handleGetClientRect]);

  return clientRect;
};
