import { DefaultLayout } from './layout/DefaultLayout';
import { Checkout } from './pages/Checkout';
import { Delivery } from './pages/Delivery';
import { Home } from './pages/Home';

export const pages = [
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/delivery',
        element: <Delivery />,
      },
      {
        path: '/checkout',
        element: <Checkout />,
      },
    ],
  },
];
