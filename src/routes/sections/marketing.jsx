import { lazy } from 'react';
import { Outlet } from 'react-router-dom';

import MainLayout from 'src/layouts/main';

// ----------------------------------------------------------------------

const BlogPage = lazy(() => import('src/pages/marketing/posts'));
const PostPage = lazy(() => import('src/pages/marketing/post/[id]'));
const AboutPage = lazy(() => import('src/pages/marketing/about'));
const ContactPage = lazy(() => import('src/pages/marketing/contact'));
const LandingPage = lazy(() => import('src/pages/marketing/landing'));
const ServicesPage = lazy(() => import('src/pages/marketing/services'));
const CaseStudyPage = lazy(() => import('src/pages/marketing/study/[id]'));
const CaseStudiesPage = lazy(() => import('src/pages/marketing/case-studies'));

// ----------------------------------------------------------------------

export const marketingRoutes = [
  {
    path: 'marketing',
    children: [
      {
        element: (
          <MainLayout disabledSpacing>
            <LandingPage />
          </MainLayout>
        ),
        index: true,
      },
      {
        element: (
          <MainLayout>
            <Outlet />
          </MainLayout>
        ),
        children: [
          { path: 'services', element: <ServicesPage /> },
          { path: 'case-studies', element: <CaseStudiesPage /> },
          { path: 'case-study/:id', element: <CaseStudyPage /> },
          { path: 'posts', element: <BlogPage /> },
          { path: 'post/:id', element: <PostPage /> },
          { path: 'about', element: <AboutPage /> },
          { path: 'contact', element: <ContactPage /> },
        ],
      },
    ],
  },
];
