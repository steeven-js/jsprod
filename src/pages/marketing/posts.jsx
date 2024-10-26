import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { MarketingPostsView } from 'src/sections/_marketing/view/marketing-posts-view';

// ----------------------------------------------------------------------

const metadata = { title: `Post list | Marketing - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <MarketingPostsView />
    </>
  );
}
