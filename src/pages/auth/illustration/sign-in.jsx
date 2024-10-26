import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { SignInIllustrationView } from 'src/sections/auth/sign-in-illustration-view';

// ----------------------------------------------------------------------

const metadata = { title: `Sign in | Layout illustration - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <SignInIllustrationView />
    </>
  );
}
