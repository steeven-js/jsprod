import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { PricingColumnsView } from 'src/sections/pricing/view/pricing-columns-view';

// ----------------------------------------------------------------------

const metadata = { title: `Pricing columns - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <PricingColumnsView />
    </>
  );
}
