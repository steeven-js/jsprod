import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { MarketingAboutView } from 'src/sections/_marketing/view/marketing-about-view';

// ----------------------------------------------------------------------

const metadata = { title: `About us | Marketing - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <MarketingAboutView />
    </>
  );
}
