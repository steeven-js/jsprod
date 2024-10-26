import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { SignUpCenteredView } from 'src/sections/auth/sign-up-centered-view';

// ----------------------------------------------------------------------

const metadata = { title: `Sign up | Layout centered - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <SignUpCenteredView />
    </>
  );
}
