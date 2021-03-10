import Layout from 'layouts/main.vue'

export default [
  {
    path: '/',
    name: 'SiteIndex',
    component: Layout,
    meta: {
      title: 'Home',
      subTitle: 'sub-title',
      icon: 'home'
    },
    redirect: 'site',
    children: [
      {
        path: 'site',
        name: 'HomeIndex',
        component: () => import('pages/site/index'),
        meta: {
          title: '首页',
          icon: 'home',
          requiresAuth: false,
          allow: true
        }
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    hidden: true,
    meta: {
      title: '登录',
      requiresAuth: false
    },
    component: () => import('pages/site/login')
  }
]
