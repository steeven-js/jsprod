import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { MarketingServicesView } from 'src/sections/_marketing/view/marketing-services-view';

// ----------------------------------------------------------------------

const metadata = { title: `Services | Marketing - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <MarketingServicesView />
    </>
  );
}
