import Layout from 'src/layouts/MainLayout.vue'

export default [
  {
    path: '/',
    component: Layout,
    meta: {
      title: '首页',
      caption: '访问首页',
      icon: 'home',
      breadcrumb: false
    },
    children: [
      {
        path: '',
        name: 'HomePage',
        component: () => import('src/pages/site/IndexPage.vue'),
        meta: {
          title: '首页',
          caption: '首页-1',
          icon: 'home'
        }
      }
    ]
  },
  {
    path: '/icons',
    component: Layout,
    meta: {
      title: '图标',
      breadcrumb: false
    },
    children: [
      {
        path: '',
        name: 'IconsPage',
        component: () => import('src/pages/site/IconPage.vue'),
        meta: {
          title: '图标',
          caption: '图标-1',
          icon: 'sick'
        }
      }
    ]
  },
  {
    path: '/login',
    name: 'LoginPage',
    meta: { title: '登录', caption: 'Login', icon: 'lock' },
    component: () => import('src/pages/site/LoginPage.vue')
  }
]
