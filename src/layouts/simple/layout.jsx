import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Alert from '@mui/material/Alert';
import { useTheme } from '@mui/material/styles';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { useBoolean } from 'src/hooks/use-boolean';

import { Logo } from 'src/components/logo';

import { langs } from '../config-langs';
import { navData } from '../config-nav-main';
import { Main, CompactContent } from './main';
import { NavMobile } from '../main/nav/mobile';
import { LayoutSection } from '../core/layout-section';
import { HeaderSection } from '../core/header-section';
import { MenuButton } from '../components/menu-button';
import { SettingsButton } from '../components/settings-button';
import { LanguagePopover } from '../components/language-popover';

// ----------------------------------------------------------------------

export function SimpleLayout({ sx, children, content, header }) {
  const theme = useTheme();

  const openMobileNav = useBoolean();

  const layoutQuery = 'md';

  return (
    <LayoutSection
      /** **************************************
       * Header
       *************************************** */
      headerSection={
        <HeaderSection
          layoutQuery={layoutQuery}
          slotProps={{ container: { maxWidth: false } }}
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
            rightArea: (
              <Box gap={1} display="flex" alignItems="center">
                {/* -- Help link -- */}
                <Link
                  href={paths.support}
                  component={RouterLink}
                  color="inherit"
                  variant="subtitle2"
                >
                  Need help?
                </Link>
                {/* -- Language popover -- */}
                <LanguagePopover data={langs} />
                {/* -- Settings button -- */}
                <SettingsButton />
              </Box>
            ),
          }}
        />
      }
      /** **************************************
       * Footer
       *************************************** */
      footerSection={null}
      /** **************************************
       * Style
       *************************************** */
      cssVars={{
        '--layout-simple-content-compact-width': '448px',
      }}
      sx={sx}
    >
      <Main>
        {content?.compact ? (
          <CompactContent layoutQuery={layoutQuery}>{children}</CompactContent>
        ) : (
          children
        )}
      </Main>
    </LayoutSection>
  );
}
