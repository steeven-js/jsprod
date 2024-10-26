import { Helmet } from 'react-helmet-async';

import { _caseStudies } from 'src/_mock';
import { CONFIG } from 'src/config-global';

import { ProjetsLandingView } from 'src/sections/_projets/view/projets-landing-view';

// ----------------------------------------------------------------------

const metadata = { title: `Case studies | Marketing - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <ProjetsLandingView caseStudies={_caseStudies} />
    </>
  );
}
