import { AppRouteModule } from '/@/router/types';

const home: AppRouteModule = {
  path: '/home',
  name: 'Home',
  component: () => import('/@/views/home/index.vue'),
  meta: {},
};
export default home;
