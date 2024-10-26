import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { PricingCardsView } from 'src/sections/pricing/view/pricing-cards-view';

// ----------------------------------------------------------------------

const metadata = { title: `Pricing cards - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <PricingCardsView />
    </>
  );
}
