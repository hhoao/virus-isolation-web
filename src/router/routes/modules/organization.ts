import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const markdown: AppRouteModule = {
  path: '/organization',
  name: 'Organization',
  component: LAYOUT,
  redirect: '/organization/list',
  meta: {
    orderNo: 30,
    icon: 'ion:layers-outline',
    title: t('routes.organization.moduleName'),
  },
  children: [
    {
      path: 'list',
      name: 'list',
      component: () => import('/@/views/organization/list/index.vue'),
      meta: {
        title: t('routes.organization.list'),
      },
    },
    {
      path: 'position',
      name: 'position',
      component: () => import('/@/views/organization/position/index.vue'),
      meta: {
        title: t('routes.organization.position'),
      },
    },
  ],
};

export default markdown;
