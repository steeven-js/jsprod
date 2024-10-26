import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { SignUpIllustrationView } from 'src/sections/auth/sign-up-illustration-view';

// ----------------------------------------------------------------------

const metadata = { title: `Sign up | Layout illustration - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <SignUpIllustrationView />
    </>
  );
}
