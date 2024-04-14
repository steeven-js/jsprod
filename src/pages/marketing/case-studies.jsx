import { Helmet } from 'react-helmet-async';

import useFetchStudies from 'src/hooks/use-fetchStudies';

import MarketingCaseStudiesView from 'src/sections/_marketing/view/marketing-case-studies-view';

// ----------------------------------------------------------------------

export default function MarketingCaseStudiesPage() {

  const { studies, isStudiesLoading, studiesError, currentPage, totalPages, setCurrentPage, studyCoverUrls } = useFetchStudies();

  console.log('studies', studies);

  return (
    <>
      <Helmet>
        <title> Marketing: Case Studies</title>
      </Helmet>

      <MarketingCaseStudiesView />
    </>
  );
}
