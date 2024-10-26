import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { SignInCenteredView } from 'src/sections/auth/sign-in-centered-view';

// ----------------------------------------------------------------------

const metadata = { title: `Sign in | Layout centered - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <SignInCenteredView />
    </>
  );
}
