import Layout from 'src/layouts/MainLayout.vue'

export default [
  {
    path: '/',
    name: 'ErrorPage',
    meta: { title: '错误' },
    component: Layout,
    children: [
      {
        path: 'not-auth',
        name: 'NotAuthPage',
        component: () => import('src/pages/error/NotAuthPage.vue'),
        meta: {
          title: '无权限',
          requiresAuth: false,
          hidden: true
        }
      },
      {
        path: '/:catchAll(.*)*',
        name: 'NotFoundPage',
        component: () => import('src/pages/error/NotFoundPage.vue'),
        meta: {
          title: '页面不存在',
          requiresAuth: false,
          hidden: true
        }
      }
    ]
  }
]
