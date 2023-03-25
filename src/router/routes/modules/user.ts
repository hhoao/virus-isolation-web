import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const user: AppRouteModule = {
  path: '/user',
  name: 'System',
  component: LAYOUT,
  redirect: '/user/account',
  meta: {
    orderNo: 2000,
    icon: 'ion:settings-outline',
    title: t('routes.user.moduleName'),
  },
  children: [
    {
      path: 'account',
      name: 'AccountManagement',
      meta: {
        title: t('routes.user.account'),
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/user/account/index.vue'),
    },
    {
      path: 'account_detail/:id',
      name: 'AccountDetail',
      component: () => import('/@/views/user/account/AccountDetail.vue'),
      meta: {
        hideMenu: true,
        title: t('routes.user.account_detail'),
        ignoreKeepAlive: true,
        showMenu: false,
        currentActiveMenu: '/user/account',
      },
    },
    {
      path: 'role',
      name: 'RoleManagement',
      meta: {
        title: t('routes.user.role'),
        ignoreKeepAlive: true,
      },
      component: () => import('/@/views/user/role/index.vue'),
    },
    {
      path: 'changePassword',
      name: 'ChangePassword',
      meta: {
        title: t('routes.user.password'),
        ignoreKeepAlive: true,
      },
      component: () => import('/@/views/user/password/index.vue'),
    },
  ],
};

export default user;
