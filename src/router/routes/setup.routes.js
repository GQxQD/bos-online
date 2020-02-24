import RouteEnums from '@/enums/route.enums';

const setupRoutes = [
  {
    path: '/',
    name: RouteEnums.SETUP,
    component: () => import('@/views/pages/system-setup'),
    children: [
      {
        path: '/boot',
        name: RouteEnums.SETUP_BOOT,
        component: () => import('@/views/pages/system-setup/boot-screen'),
      },
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
      {
        path: '/start-install',
        name: RouteEnums.SETUP_INSTALL,
        component: () => import('@/views/pages/system-setup/start-install'),
      },
    ],
  },
];

export default setupRoutes;
