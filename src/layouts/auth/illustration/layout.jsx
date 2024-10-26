import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Alert from '@mui/material/Alert';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { Logo } from 'src/components/logo';

import { Section } from './section';
import { Main, Content } from './main';
import { langs } from '../../config-langs';
import { LayoutSection } from '../../core/layout-section';
import { HeaderSection } from '../../core/header-section';
import { SettingsButton } from '../../components/settings-button';
import { LanguagePopover } from '../../components/language-popover';

// ----------------------------------------------------------------------

export function AuthIllustrationLayout({ sx, children, header }) {
  const layoutQuery = 'md';

  return (
    <LayoutSection
      headerSection={
        /** **************************************
         * Header
         *************************************** */
        <HeaderSection
          disableElevation
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
      sx={sx}
      cssVars={{
        '--layout-auth-content-width': '380px',
      }}
    >
      <Main layoutQuery={layoutQuery}>
        <Section layoutQuery={layoutQuery} />
        <Content layoutQuery={layoutQuery}>{children}</Content>
      </Main>
    </LayoutSection>
  );
}
