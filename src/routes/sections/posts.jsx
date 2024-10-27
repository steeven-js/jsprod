import { lazy } from 'react';
import { Outlet } from 'react-router-dom';

import { MainLayout } from 'src/layouts/main';

// ----------------------------------------------------------------------

const LandingPage = lazy(() => import('src/pages/posts/landing'));
const PostPage = lazy(() => import('src/pages/posts/landing'));
// const PostDetailsPage = lazy(() => import('src/pages/posts/post'));

// ----------------------------------------------------------------------

export const postsRoutes = [
  {
    path: 'blog',
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
        element: (
          <MainLayout>
            <Outlet />
          </MainLayout>
        ),
        children: [
          {
            path: 'posts',
            children: [
              { index: true, element: <PostPage /> },
              // { path: ':id', element: <CaseStudyPage /> },
            ],
          },
        ],
      },
    ],
  },
];
