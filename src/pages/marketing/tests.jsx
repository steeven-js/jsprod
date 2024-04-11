import { Helmet } from 'react-helmet-async';

import MarketingTestView from 'src/sections/_marketing/view/marketing-test-view';

const tests = () => (
  <>
    <Helmet>
      <title> Tests </title>
    </Helmet>

    <MarketingTestView />
  </>
)

export default tests
