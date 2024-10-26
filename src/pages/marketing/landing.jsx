import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { MarketingLandingView } from 'src/sections/_marketing/view/marketing-landing-view';

// ----------------------------------------------------------------------

const metadata = { title: `Home | Marketing - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <MarketingLandingView />
    </>
  );
}
