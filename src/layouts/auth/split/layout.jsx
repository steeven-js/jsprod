import { CONFIG } from 'src/config-global';

import { Section } from './section';
import { Main, Content } from './main';
import { LayoutSection } from '../../core/layout-section';

// ----------------------------------------------------------------------

export function AuthSplitLayout({ sx, section, children }) {
  const layoutQuery = 'md';

  return (
    <LayoutSection
      /** **************************************
       * Footer
       *************************************** */
      footerSection={null}
      /** **************************************
       * Style
       *************************************** */
      sx={sx}
      cssVars={{
        '--layout-auth-content-width': '480px',
      }}
    >
      <Main layoutQuery={layoutQuery}>
        <Content layoutQuery={layoutQuery}>{children}</Content>
        <Section
          layoutQuery={layoutQuery}
          title={section?.title ?? 'Hi, Welcome Back'}
          images={
            section?.images ?? [
              `${CONFIG.assetsDir}/assets/images/auth/auth-1.webp`,
              `${CONFIG.assetsDir}/assets/images/auth/auth-2.webp`,
              `${CONFIG.assetsDir}/assets/images/auth/auth-3.webp`,
            ]
          }
        />
      </Main>
    </LayoutSection>
  );
}
