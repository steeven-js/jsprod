import { useState, useCallback } from 'react';

import Collapse from '@mui/material/Collapse';

import { isExternalLink } from 'src/routes/utils';
import { useActiveLink } from 'src/routes/hooks/use-active-link';

import { NavLi, NavSectionVertical } from 'src/components/nav-section';

import { NavItem } from './nav-mobile-item';

// ----------------------------------------------------------------------

export function NavList({ data }) {
  const active = useActiveLink(data.path, !!data.children);

  const [openMenu, setOpenMenu] = useState(false);

  const handleToggleMenu = useCallback(() => {
    if (data.children) {
      setOpenMenu((prev) => !prev);
    }
  }, [data.children]);

  const renderNavItem = (
    <NavItem
      // slots
      path={data.path}
      icon={data.icon}
      title={data.title}
      // state
      active={active}
      hasChild={!!data.children}
      open={data.children && !!openMenu}
      externalLink={isExternalLink(data.path)}
      // actions
      onClick={handleToggleMenu}
    />
  );

  if (data.children) {
    return (
      <NavLi>
        {renderNavItem}
        <Collapse in={openMenu}>
          <NavSectionVertical
            data={data.children}
            slotProps={{
              rootItem: { sx: { minHeight: 32 } },
            }}
            sx={{
              px: 1.5,
            }}
          />
        </Collapse>
      </NavLi>
    );
  }

  return <NavLi>{renderNavItem}</NavLi>;
}
