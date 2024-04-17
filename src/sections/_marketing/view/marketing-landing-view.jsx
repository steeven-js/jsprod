
import useFetchStudies from 'src/hooks/use-fetchStudies';

import {
  _brands,
  _marketingPosts,
} from 'src/_mock';

import { SplashScreen } from 'src/components/loading-screen';

import MarketingOurClients from '../marketing-our-clients';
import MarketingLandingHero from '../landing/marketing-landing-hero';
import MarketingLandingFaqs from '../landing/marketing-landing-faqs';
import MarketingLandingAbout from '../landing/marketing-landing-about';
import MarketingLandingProcess from '../landing/marketing-landing-process';
import MarketingLandingServices from '../landing/marketing-landing-services';
import BlogMarketingLatestPosts from '../../blog/marketing/marketing-latest-posts';
import MarketingLandingCaseStudies from '../landing/marketing-landing-case-studies';

// ----------------------------------------------------------------------

export default function MarketingLandingView() {

  const { studies, isStudiesLoading } = useFetchStudies();

  if (isStudiesLoading) {
    return <SplashScreen />;
  }

  return (
    <>
      <MarketingLandingHero />

      <MarketingOurClients brands={_brands} />

      <MarketingLandingAbout />

      <MarketingLandingServices />

      <MarketingLandingProcess />

      <MarketingLandingCaseStudies caseStudies={studies.slice(-6)} />

      {/* <MarketingTeam members={_members} /> */}

      {/* <PricingMarketing plans={_pricingMarketing} /> */}

      <MarketingLandingFaqs />

      {/* <MarketingTestimonial testimonials={_testimonials} /> */}

      <BlogMarketingLatestPosts posts={_marketingPosts.slice(0, 4)} />

      {/* <MarketingLandingFreeSEO /> */}

      {/* <MarketingNewsletter /> */}
    </>
  );
}
