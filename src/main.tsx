import { StrictMode, Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

const HomePage = lazy(() => import('./pages/home/HomePage'));
const Landing2Page = lazy(() => import('./pages/landing2/Landing2Page'));
const Landing3Page = lazy(() => import('./pages/landing3/Landing3Page'));
const Landing4Page = lazy(() => import('./pages/landing4/Landing4Page'));

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense>
        <HomePage />
      </Suspense>
    ),
  },
  {
    path: '/landing2',
    element: (
      <Suspense>
        <Landing2Page />
      </Suspense>
    ),
  },
  {
    path: '/landing3',
    element: (
      <Suspense>
        <Landing3Page />
      </Suspense>
    ),
  },
  {
    path: '/landing4',
    element: (
      <Suspense>
        <Landing4Page />
      </Suspense>
    ),
  },
], {
  basename: (import.meta as any).env?.VITE_BASE_PATH || '/',
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
