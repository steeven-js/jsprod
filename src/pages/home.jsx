import { Helmet } from 'react-helmet-async';

import MarketingLandingView from 'src/sections/_marketing/view/marketing-landing-view';

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title> Steeven Jacques - Concepteur d&aposapplication</title>
      </Helmet>

      <MarketingLandingView />
    </>
  );
}
