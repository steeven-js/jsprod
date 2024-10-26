import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { MarketingPostView } from 'src/sections/_marketing/view/marketing-post-view';

// ----------------------------------------------------------------------

const metadata = { title: `Post details | Marketing - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <MarketingPostView />
    </>
  );
}
