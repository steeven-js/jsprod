import { Helmet } from 'react-helmet-async';

import { useParams } from 'src/routes/hooks';

import { useFetchPostById } from 'src/hooks/use-post';

import { CONFIG } from 'src/config-global';

// import { MarketingCaseStudyView } from 'src/sections/_posts/view/marketing-case-study-view';

// ----------------------------------------------------------------------

export default function Page() {
  const { id = '' } = useParams();

  const { postById } = useFetchPostById(id);

  console.log('postById:', postById);

  return (
    <>
      <Helmet>
        <title>{`${postById?.title} | Marketing - ${CONFIG.appName}`}</title>
      </Helmet>

      {/* <MarketingCaseStudyView caseStudy={postById} relatedCaseStudies={_caseStudies.slice(0, 3)} /> */}
    </>
  );
}
