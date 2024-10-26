import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { AboutLandingView } from 'src/sections/_about/view/about-landing-view';

// ----------------------------------------------------------------------

const metadata = { title: `Home | Marketing - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <AboutLandingView />
    </>
  );
}
