import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Alert from '@mui/material/Alert';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { CONFIG } from 'src/config-global';
import { stylesMode } from 'src/theme/styles';

import { Logo } from 'src/components/logo';

import { Main } from './main';
import { langs } from '../../config-langs';
import { HeaderSection } from '../../core/header-section';
import { LayoutSection } from '../../core/layout-section';
import { SettingsButton } from '../../components/settings-button';
import { LanguagePopover } from '../../components/language-popover';

// ----------------------------------------------------------------------

export function AuthCenteredLayout({ sx, children, header }) {
  const layoutQuery = 'md';

  return (
    <LayoutSection
      /** **************************************
       * Header
       *************************************** */
      headerSection={
        <HeaderSection
          disableElevation
          layoutQuery={layoutQuery}
          slotProps={{ container: { maxWidth: false } }}
          sx={{ position: { [layoutQuery]: 'fixed' }, ...header?.sx }}
          slots={{
            topArea: (
              <Alert severity="info" sx={{ display: 'none', borderRadius: 0 }}>
                This is an info Alert.
              </Alert>
            ),
            leftArea: (
              <>
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
        '--layout-auth-content-width': '420px',
      }}
      sx={{
        '&::before': {
          width: 1,
          height: 1,
          zIndex: 1,
          content: "''",
          opacity: 0.12,
          position: 'fixed',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundImage: `url(${CONFIG.assetsDir}/assets/background/overlay-1.webp)`,
          [stylesMode.dark]: { opacity: 0.08 },
        },
        ...sx,
      }}
    >
      <Main layoutQuery={layoutQuery}>{children}</Main>
    </LayoutSection>
  );
}
