import { Helmet } from 'react-helmet-async';

import { HomeView } from 'src/sections/_home/view/home-view';

// ----------------------------------------------------------------------

const metadata = {
  title: "Steeven Jacques - Concepteur d'application",
  description: "Concepteur d'application",
  keywords: "Steeven Jacques, Concepteur d'application",
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
