import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { CONFIG } from 'src/config-global';
import { varAlpha, bgGradient } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { MegaMenuMobile, MegaMenuHorizontal } from 'src/components/mega-menu';

import { data } from '../../config-nav-ecommerce';
import { NavAccountPopover } from '../account/nav';
import { navData } from '../../config-nav-account';

// ----------------------------------------------------------------------

export function Header() {
  const theme = useTheme();

  const renderActions = (
    <Box gap={3} display="flex" alignItems="center">
      <Badge badgeContent={2} color="info">
        <IconButton
          disableRipple
          component={RouterLink}
          href={paths.eCommerce.wishlist}
          color="inherit"
          sx={{ p: 0 }}
        >
          <Iconify width={22} icon="solar:heart-outline" />
        </IconButton>
      </Badge>

      <Badge badgeContent={4} color="error">
        <IconButton
          disableRipple
          component={RouterLink}
          href={paths.eCommerce.cart}
          color="inherit"
          sx={{ p: 0 }}
        >
          <Iconify width={22} icon="solar:cart-3-outline" />
        </IconButton>
      </Badge>

      <NavAccountPopover data={navData} />
    </Box>
  );

  const renderNavDesktop = (
    <MegaMenuHorizontal data={data} sx={{ display: { xs: 'none', md: 'flex' } }} />
  );

  const renderNavMobile = (
    <MegaMenuMobile
      data={data}
      slots={{
        button: (
          <Button
            color="inherit"
            startIcon={<Iconify icon="carbon:menu" />}
            sx={{ display: { md: 'none' }, fontWeight: 'fontWeightMedium' }}
          >
            Categories
          </Button>
        ),
      }}
    />
  );

  return (
    <Box
      component="section"
      sx={{
        ...bgGradient({
          color: `to bottom, ${varAlpha(theme.vars.palette.background.defaultChannel, 0.9)}, ${varAlpha(theme.vars.palette.background.defaultChannel, 0.9)}`,
          imgUrl: `${CONFIG.assetsDir}/assets/background/overlay-1.webp`,
        }),
      }}
    >
      <Container sx={{ height: 64, display: 'flex', alignItems: 'center' }}>
        {renderNavDesktop}

        {renderNavMobile}

        <Box flexGrow={1} />

        {renderActions}
      </Container>
    </Box>
  );
}
