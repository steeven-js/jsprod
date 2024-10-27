import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { UpdatePasswordView } from 'src/sections/auth/update-password-view';

// ----------------------------------------------------------------------

const metadata = { title: `Update password - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <UpdatePasswordView />
    </>
  );
}