import Layout from 'layouts/main.vue'

export default [
  {
    path: '/',
    component: Layout,
    name: 'ErrorIndex',
    children: [
      {
        path: 'not-auth',
        name: 'NotAuth',
        hidden: true,
        component: () => import('pages/error/not-auth'),
        meta: {
          title: '无权限',
          icon: 'menu',
          requiresAuth: false,
          separator: true,
          allow: true
        }
      },
      {
        path: 'not-found',
        name: 'NotFound',
        hidden: true,
        component: () => import('pages/error/not-found'),
        meta: {
          title: '页面不存在',
          tag: 'ErrorIndex',
          requiresAuth: false,
          allow: true
        }
      },
      {
        path: '*',
        name: 'NotMatch',
        hidden: true,
        component: () => import('pages/error/not-found'),
        meta: {
          title: '页面不存在',
          icon: 'menu',
          requiresAuth: false,
          allow: true
        }
      }
    ]
  }
]
