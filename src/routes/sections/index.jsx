import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import { MainLayout } from 'src/layouts/main';
import { SimpleLayout } from 'src/layouts/simple';

import { SplashScreen } from 'src/components/loading-screen';

import { aboutRoutes } from './about';
import { postsRoutes } from './posts';
import { projetsRoutes } from './projets';
import { serviceRoutes } from './services';
import { marketingRoutes } from './marketing';

// ----------------------------------------------------------------------

const HomePage = lazy(() => import('src/pages/home'));
const Page404 = lazy(() => import('src/pages/error/404'));
const Page500 = lazy(() => import('src/pages/error/500'));
const SupportPage = lazy(() => import('src/pages/support'));
const PaymentPage = lazy(() => import('src/pages/payment'));
const ComingSoonPage = lazy(() => import('src/pages/coming-soon'));
const MaintenancePage = lazy(() => import('src/pages/maintenance'));
const PricingCardsPage = lazy(() => import('src/pages/pricing/cards'));
const PricingColumnsPage = lazy(() => import('src/pages/pricing/columns'));

// ----------------------------------------------------------------------

export function Router() {
  return useRoutes([
    {
      element: (
        <Suspense fallback={<SplashScreen />}>
          <Outlet />
        </Suspense>
      ),
      children: [
        {
          index: true,
          element: (
            <MainLayout header={{ sx: { position: { md: 'fixed' } } }}>
              <HomePage />
            </MainLayout>
          ),
        },

        // Services
        ...serviceRoutes,

        // About
        ...aboutRoutes,

        // Projets
        ...projetsRoutes,

        // Posts
        ...postsRoutes,

        // Marketing
        ...marketingRoutes,

        // Error (404, 500...)
        { path: 'error', element: <Page500 /> },
        { path: '404', element: <Page404 /> },

        // Common
        {
          path: 'support',
          element: (
            <MainLayout>
              <SupportPage />
            </MainLayout>
          ),
        },
        {
          element: (
            <SimpleLayout>
              <Outlet />
            </SimpleLayout>
          ),
          children: [
            { path: 'payment', element: <PaymentPage /> },
            { path: 'pricing-cards', element: <PricingCardsPage /> },
            { path: 'pricing-columns', element: <PricingColumnsPage /> },
          ],
        },
        {
          element: (
            <SimpleLayout content={{ compact: true }}>
              <Outlet />
            </SimpleLayout>
          ),
          children: [
            { path: 'coming-soon', element: <ComingSoonPage /> },
            { path: 'maintenance', element: <MaintenancePage /> },
          ],
        },
        { path: '*', element: <Navigate to="/404" replace /> },
      ],
    },
  ]);
}
