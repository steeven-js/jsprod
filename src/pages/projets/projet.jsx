import { Helmet } from 'react-helmet-async';

import { useParams } from 'src/routes/hooks';

import { _caseStudies } from 'src/_mock';
import { CONFIG } from 'src/config-global';

import { useFetchProjetsPostById } from 'src/hooks/use-projet';
import { MarketingCaseStudyView } from 'src/sections/_projets/view/marketing-case-study-view';

// ----------------------------------------------------------------------

export default function Page() {
  const { id = '' } = useParams();

  const { postById } = useFetchProjetsPostById(id);

  console.log('postById:', postById);

  return (
    <>
      <Helmet>
        <title>{`${postById?.title} | Marketing - ${CONFIG.appName}`}</title>
      </Helmet>

      <MarketingCaseStudyView caseStudy={postById} relatedCaseStudies={_caseStudies.slice(0, 3)} />
    </>
  );
}
