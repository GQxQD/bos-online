import RouteEnums from '@/enums/route.enums';

const setupRoutes = [
  {
    path: '/',
    component: () => import('@/views/pages/system-setup'),
    redirect: '/launch',
    children: [
      {
        path: '/launch',
        name: RouteEnums.SETUP_LAUNCH,
        component: () => import('@/views/pages/system-setup/launch-screen'),
      },
      {
        path: '/language',
        name: RouteEnums.SETUP_LANGUAGE,
        component: () => import('@/views/pages/system-setup/language-settings'),
      },
    ],
  },
];

export default setupRoutes;
