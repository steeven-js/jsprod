import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { VerifyView } from 'src/sections/auth/verify-view';

// ----------------------------------------------------------------------

const metadata = { title: `Verify - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <VerifyView />
    </>
  );
}
