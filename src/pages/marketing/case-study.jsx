import { Helmet } from 'react-helmet-async';

import { useParams } from 'src/routes/hooks';

import { _caseStudies } from 'src/_mock';
import { CONFIG } from 'src/config-global';

import { MarketingCaseStudyView } from 'src/sections/_marketing/view/marketing-case-study-view';

// ----------------------------------------------------------------------

function fetchCaseStudy(paramId) {
  return _caseStudies.find((caseStudy) => caseStudy.id === paramId);
}

// ----------------------------------------------------------------------

export default function Page() {
  const { id = '' } = useParams();

  const data = fetchCaseStudy(id);

  return (
    <>
      <Helmet>
        <title>{`${data?.title} | Marketing - ${CONFIG.appName}`}</title>
      </Helmet>

      <MarketingCaseStudyView caseStudy={data} relatedCaseStudies={_caseStudies.slice(0, 3)} />
    </>
  );
}
