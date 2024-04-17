import { _brandsColor } from 'src/_mock';

import MarketingAbout from '../about/marketing-about';
import MarketingAboutStory from '../about/marketing-about-story';
import MarketingLandingFaqs from '../landing/marketing-landing-faqs';
import MarketingAboutOurClients from '../marketing-about-our-clients';
import MarketingAboutOurVision from '../about/marketing-about-our-vision';
import MarketingAboutCoreValues from '../about/marketing-about-core-values';

// ----------------------------------------------------------------------

export default function MarketingAboutView() {
  return (
    <>
      <MarketingAbout />

      <MarketingAboutOurVision />

      <MarketingAboutCoreValues />

      <MarketingAboutStory />

      {/* <MarketingTeamAbout members={_members} /> */}

      <MarketingAboutOurClients brands={_brandsColor} />

      {/* <MarketingTestimonial testimonials={_testimonials} /> */}

      <MarketingLandingFaqs />

      {/* <MarketingLandingFreeSEO /> */}

      {/* <MarketingNewsletter /> */}
    </>
  );
}
