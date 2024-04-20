import { useParams } from 'react-router';
import { Helmet } from 'react-helmet-async';

import useFetchStudy from 'src/hooks/use-fetchStudy';

import { SplashScreen } from 'src/components/loading-screen';

import MarketingCaseStudyView from 'src/sections/_marketing/view/marketing-case-study-view';

// ----------------------------------------------------------------------

export default function MarketingCaseStudyPage() {
  const { id } = useParams();
  const { study, isStudyLoading } = useFetchStudy(id);

  return (
    <>
      <Helmet>
        <title> Marketing: {study.title ?? 'Case Study'}</title>
      </Helmet>

      {isStudyLoading ? <SplashScreen/> : <MarketingCaseStudyView study={study} /> }
    </>
  );
}
