import { _marketingPosts } from 'src/_mock';

import { MarketingLatestPosts } from 'src/sections/_marketing/posts/marketing-latest-posts';

import Services from '../services';
import ServicesInclude from '../services-include';
import ServicesBenefits from '../services-benefits';
import ServicesHowItWork from '../services-how-it-work';

// ----------------------------------------------------------------------

const latestPosts = _marketingPosts.slice(0, 4);

// ----------------------------------------------------------------------

export function ServiceLandingView() {
  return (
    <>
      <Services />

      <ServicesInclude />

      <ServicesBenefits />

      <ServicesHowItWork />

      <MarketingLatestPosts posts={latestPosts} />
    </>
  );
}
