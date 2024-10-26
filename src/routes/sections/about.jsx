import { lazy } from 'react';

import { MainLayout } from 'src/layouts/main';

// ----------------------------------------------------------------------

const LandingPage = lazy(() => import('src/pages/about/landing'));

// ----------------------------------------------------------------------

export const aboutRoutes = [
  {
    path: 'about',
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
      // {
      //   element: (
      //     <MainLayout>
      //       <Outlet />
      //     </MainLayout>
      //   ),
      //   children: [
      //     { path: 'services', element: <ServicesPage /> },
      //     { path: 'about', element: <AboutPage /> },
      //     { path: 'contact', element: <ContactPage /> },
      //     {
      //       path: 'case-studies',
      //       children: [
      //         { index: true, element: <CaseStudiesPage /> },
      //         { path: ':id', element: <CaseStudyPage /> },
      //       ],
      //     },
      //     {
      //       path: 'posts',
      //       children: [
      //         { index: true, element: <PostsPage /> },
      //         { path: 'details', element: <PostPage /> },
      //       ],
      //     },
      //   ],
      // },
    ],
  },
];
