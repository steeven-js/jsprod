import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { ResetPasswordView } from 'src/sections/auth/reset-password-view';

// ----------------------------------------------------------------------

const metadata = { title: `Reset password - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <ResetPasswordView />
    </>
  );
}
