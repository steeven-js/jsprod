import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { Error500View } from 'src/sections/error/500-view';

// ----------------------------------------------------------------------

const metadata = { title: `500 Internal server error! | Error - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <Error500View />
    </>
  );
}
