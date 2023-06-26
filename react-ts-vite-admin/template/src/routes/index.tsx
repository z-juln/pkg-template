import React from 'react';
import { Navigate, RouteObject } from 'react-router-dom';
import type { Route as RouterType } from '@ant-design/pro-layout/lib/typings';
import { Icon } from '@/components';
import BasicLayout from '@/layouts/basic-layout';

const Home = React.lazy(() => import('@/pages/home'));
const Submenu = React.lazy(() => import('@/pages/menu/submenu'));

const routes: Array<RouteObject & RouterType> = [
  {
    path: '/',
    element: <BasicLayout />,
    children: [
      {
        path: '/',
        element: <Navigate to="/home" />,
      },
      {
        name: '首页',
        path: 'home',
        icon: <Icon type="icon-setting" />,
        element: <Home />,
      },
      {
        name: '菜单',
        path: 'menu',
        icon: <Icon type="icon-setting" />,
        children: [
          {
            name: '子菜单',
            path: 'submenu',
            element: <Submenu />,
          },
        ],
      },
    ],
  },
];

export default routes;
