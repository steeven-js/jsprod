import { Helmet } from 'react-helmet-async';

import { _caseStudies } from 'src/_mock';
import { CONFIG } from 'src/config-global';

import { MarketingCaseStudiesView } from 'src/sections/_marketing/view/marketing-case-studies-view';

// ----------------------------------------------------------------------

const metadata = { title: `Case studies | Marketing - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <MarketingCaseStudiesView caseStudies={_caseStudies} />
    </>
  );
}
