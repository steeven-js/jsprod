import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { ServiceLandingView } from 'src/sections/_services/view/service-landing-view';

// ----------------------------------------------------------------------

const metadata = { title: `Home | Marketing - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <ServiceLandingView />
    </>
  );
}
