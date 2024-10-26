import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { MarketingContactView } from 'src/sections/_marketing/view/marketing-contact-view';

// ----------------------------------------------------------------------

const metadata = { title: `Contact us | Marketing - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <MarketingContactView />
    </>
  );
}
