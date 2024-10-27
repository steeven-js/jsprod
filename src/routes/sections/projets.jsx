import { lazy } from 'react';

import { MainLayout } from 'src/layouts/main';

// ----------------------------------------------------------------------

const LandingPage = lazy(() => import('src/pages/projets/landing'));
const ProjetDetailsPage = lazy(() => import('src/pages/projets/projet'));

// ----------------------------------------------------------------------

export const projetsRoutes = [
  {
    path: 'projets',
    children: [
      {
        index: true,
        element: (
          <MainLayout
            header={{
              sx: { position: { md: 'fixed' } },
            }}
          >
            <LandingPage />
          </MainLayout>
        ),
      },
      {
        path: ':id',
        element: (
          <MainLayout>
            <ProjetDetailsPage />
          </MainLayout>
        ),
      },
    ],
  },
];
