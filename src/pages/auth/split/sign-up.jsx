import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { SignUpSplitView } from 'src/sections/auth/sign-up-split-view';

// ----------------------------------------------------------------------

const metadata = { title: `Sign up | Layout split - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <SignUpSplitView />
    </>
  );
}
