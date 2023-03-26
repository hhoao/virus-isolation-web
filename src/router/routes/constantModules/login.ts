import { AppRouteModule } from '/@/router/types';

const login: AppRouteModule = {
  path: '/login',
  name: 'Login',
  component: import('/@/views/login/index.vue'),
  meta: { title: '登陆', icon: 'login' },
};
export default login;
