import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

import { paths } from 'src/routes/paths';
import { usePathname } from 'src/routes/hooks';

import { useBoolean } from 'src/hooks/use-boolean';

import { varAlpha } from 'src/theme/styles';

import { Logo } from 'src/components/logo';
import { Iconify } from 'src/components/iconify';
import { AnimateBorder } from 'src/components/animate';

import { Main } from './main';
import { Footer } from './footer';
// import { langs } from '../config-langs';
import { NavMobile } from './nav/mobile';
import { HomeFooter } from './home-footer';
import { NavDesktop } from './nav/desktop';
import { navData } from '../config-nav-main';
// import { Searchbar } from '../components/searchbar';
import { MenuButton } from '../components/menu-button';
import { LayoutSection } from '../core/layout-section';
import { HeaderSection } from '../core/header-section';
import { SettingsButton } from '../components/settings-button';
// import { LanguagePopover } from '../components/language-popover';

// ----------------------------------------------------------------------

export function MainLayout({ sx, children, header }) {
  const theme = useTheme();

  const pathname = usePathname();

  const openMobileNav = useBoolean();

  const homePage = pathname === '/';

  const layoutQuery = 'md';

  return (
    <LayoutSection
      /** **************************************
       * Header
       *************************************** */
      headerSection={
        <HeaderSection
          layoutQuery={layoutQuery}
          sx={header?.sx}
          slots={{
            topArea: (
              <Alert severity="info" sx={{ display: 'none', borderRadius: 0 }}>
                This is an info Alert.
              </Alert>
            ),
            leftArea: (
              <>
                {/* -- Menu button -- */}
                <MenuButton
                  onClick={openMobileNav.onTrue}
                  sx={{
                    mr: 1,
                    ml: -1,
                    [theme.breakpoints.up(layoutQuery)]: { display: 'none' },
                  }}
                />
                <NavMobile
                  data={navData}
                  open={openMobileNav.value}
                  onClose={openMobileNav.onFalse}
                />
                {/* -- Logo -- */}
                <Logo />
              </>
            ),
            centerArea: (
              <NavDesktop
                data={navData}
                sx={{
                  display: 'none',
                  [theme.breakpoints.up(layoutQuery)]: { display: 'flex' },
                }}
              />
            ),
            rightArea: (
              <Box gap={{ [layoutQuery]: 1 }} display="flex" alignItems="center">
                {/* -- Searchbar -- */}
                {/* <Searchbar /> */}
                {/* -- Language popover -- */}
                {/* <LanguagePopover data={langs} /> */}
                {/* -- Settings button -- */}
                <SettingsButton />
                {/* -- Purchase button -- */}
                <Box
                  sx={{
                    borderRadius: 1,
                    position: 'relative',
                    bgcolor: 'text.primary',
                    color: 'background.paper',
                    display: { xs: 'none', [layoutQuery]: 'inline-flex' },
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
            ),
          }}
        />
      }
      /** **************************************
       * Footer
       *************************************** */
      footerSection={homePage ? <HomeFooter /> : <Footer layoutQuery={layoutQuery} />}
      /** **************************************
       * Style
       *************************************** */
      sx={sx}
    >
      <Main>{children}</Main>
    </LayoutSection>
  );
}
