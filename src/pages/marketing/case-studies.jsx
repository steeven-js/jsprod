import { Helmet } from 'react-helmet-async';

import useFetchStudies from 'src/hooks/use-fetchStudies';

import { SplashScreen } from 'src/components/loading-screen';

import MarketingCaseStudiesView from 'src/sections/_marketing/view/marketing-case-studies-view';

// ----------------------------------------------------------------------

export default function MarketingCaseStudiesPage() {

  const { studies, categories, studyCoverUrls, isStudiesLoading } = useFetchStudies();

  return (
    <>
      <Helmet>
        <title> Marketing: Case Studies</title>
      </Helmet>

      {isStudiesLoading ? <SplashScreen /> : <MarketingCaseStudiesView studies={studies} categories={categories} studyCoverUrls={studyCoverUrls} />}

    </>
  );
}
