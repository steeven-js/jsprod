import { About } from '../about';
import { AboutOurVision } from '../about-our-vision';
import { AboutCoreValues } from '../about-core-values';

// ----------------------------------------------------------------------

export function AboutLandingView() {
  return (
    <>
      <About />

      <AboutOurVision />

      <AboutCoreValues />

      {/* <LandingFaqs /> */}
    </>
  );
}
