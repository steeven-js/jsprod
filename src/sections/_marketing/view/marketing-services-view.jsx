
import MarketingServices from '../services/marketing-services';
import MarketingServicesInclude from '../services/marketing-services-include';
import MarketingServicesBenefits from '../services/marketing-services-benefits';
import BlogMarketingLatestPosts from '../../blog/marketing/marketing-latest-posts';
import MarketingServicesHowItWork from '../services/marketing-services-how-it-work';

// ----------------------------------------------------------------------

export default function MarketingServicesView() {
  return (
    <>
      {/* <MarketingServicesHero /> */}

      <MarketingServices />

      <MarketingServicesInclude />

      <MarketingServicesBenefits />

      <MarketingServicesHowItWork />

      {/* <MarketingTestimonial testimonials={_testimonials} /> */}

      <BlogMarketingLatestPosts />

      {/* <MarketingLandingFreeSEO /> */}

      {/* <MarketingNewsletter /> */}
    </>
  );
}
