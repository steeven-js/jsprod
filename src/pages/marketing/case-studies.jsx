import { Helmet } from 'react-helmet-async';

import useFetchStudies from 'src/hooks/use-fetchStudies';
import useFetchStudiesCategories from 'src/hooks/use-fetchStudiesCategories';

import MarketingCaseStudiesView from 'src/sections/_marketing/view/marketing-case-studies-view';

// ----------------------------------------------------------------------

export default function MarketingCaseStudiesPage() {

  const { studiesCategories } = useFetchStudiesCategories();
  const { studies } = useFetchStudies();

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
