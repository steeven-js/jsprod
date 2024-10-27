import { lazy } from 'react';

import { MainLayout } from 'src/layouts/main';

// ----------------------------------------------------------------------

const LandingPage = lazy(() => import('src/pages/posts/landing'));
// const PostDetailsPage = lazy(() => import('src/pages/posts/post'));

// ----------------------------------------------------------------------

export const postsRoutes = [
  {
    path: 'posts',
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
      //     { path: ':id', element: <CaseStudyPage /> },
      //   ],
      // },
    ],
  },
];
