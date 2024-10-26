import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { SupportView } from 'src/sections/support/view/support-view';

// ----------------------------------------------------------------------

const metadata = { title: `Support - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <SupportView />
    </>
  );
}
