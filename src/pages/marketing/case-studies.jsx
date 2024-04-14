import { Helmet } from 'react-helmet-async';

import useFetchStudies from 'src/hooks/use-fetchStudies';

import MarketingCaseStudiesView from 'src/sections/_marketing/view/marketing-case-studies-view';

// ----------------------------------------------------------------------

export default function MarketingCaseStudiesPage() {

  const { studies, categories, studyCoverUrls } = useFetchStudies();

  return (
    <>
      <Helmet>
        <title> Marketing: Case Studies</title>
      </Helmet>

      <MarketingCaseStudiesView studies={studies} categories={categories} studyCoverUrls={studyCoverUrls} />
    </>
  );
}
