import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { SignInSplitView } from 'src/sections/auth/sign-in-split-view';

// ----------------------------------------------------------------------

const metadata = { title: `Sign in | Layout split - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <SignInSplitView />
    </>
  );
}
