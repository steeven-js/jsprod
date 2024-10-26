import { Helmet } from 'react-helmet-async';

import { HomeView } from 'src/sections/_home/view/home-view';

// ----------------------------------------------------------------------

const metadata = {
  title: 'Steeven Jacques - Concepteur d&apos;application',
  description: 'Concepteur d&apos;application',
  keywords: 'Steeven Jacques, Concepteur d&apos;application',
};

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <HomeView />
    </>
  );
}
