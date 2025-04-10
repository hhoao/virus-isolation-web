import { AppRouteModule } from '/@/router/types';

// const article: AppRouteModule = {
//   path: '/article',
//   name: 'Article',
//   component: LAYOUT,
//   meta: { title: '文章', icon: 'article' },
//   children: [
//     {
//       path: '/article/:id',
//       name: 'ArticleIndex',
//       component: () => import('/@/views/article/index.vue'),
//       props: true,
//       meta: { props: true },
//     },
//   ],
// };
const article: AppRouteModule[] = [
  {
    path: '/article/:id',
    name: 'Article',
    component: () => import('/@/views/article/index.vue'),
    meta: { title: '文章', icon: 'article' },
    props: true,
  },
  {
    path: '/articles',
    name: 'ArticleDetails',
    component: () => import('/@/views/article/details/index.vue'),
    meta: { title: '文章详细' },
    props: true,
  },
];

export default article;
