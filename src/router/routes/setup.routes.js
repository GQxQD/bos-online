import RouteEnums from '@/enums/route.enums';

const setupRoutes = [
  {
    path: '/',
    name: RouteEnums.SETUP,
    component: () => import('@/views/pages/system-setup'),
  },
];

export default setupRoutes;
