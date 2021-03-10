import Layout from 'layouts/main.vue'

export default [
  {
    path: '/',
    name: 'TestIndex',
    component: Layout,
    meta: {
      title: '一级导航-1',
      subTitle: '父菜单-子标题',
      icon: 'menu'
    },
    redirect: 'level-1-1',
    children: [
      {
        path: 'level-1-1',
        name: 'Level1',
        meta: {
          title: '二级导航-1',
          subTitle: '二级导航-子标题',
          icon: 'home',
          requiresAuth: false,
          allow: true
        },
        component: () => import('pages/test/main'),
        redirect: 'level-1-1-1',
        children: [
          {
            path: 'level-1-1-1',
            name: 'Level1-1-1',
            meta: {
              title: '三级导航-1',
              icon: 'map',
              requiresAuth: false,
              allow: true
            },
            component: () => import('pages/test/level-3')
          },
          {
            path: 'level-1-1-2',
            name: 'Level1-1-2',
            meta: {
              title: '三级导航-2',
              icon: 'map',
              requiresAuth: false,
              allow: true,
              separator: true
            },
            component: () => import('pages/test/level-3')
          },
          {
            path: 'https://www.wuhuawu.com',
            name: 'Level1-1-3',
            meta: {
              title: '三级导航-外链',
              icon: 'trending_up'
            }
          }
        ]
      },
      {
        path: 'level-2',
        name: 'Level2',
        meta: {
          title: '二级导航-2',
          requiresAuth: false,
          separator: true
        },
        component: () => import('pages/test/main'),
        children: [
          {
            path: 'level-2-1-1',
            name: 'Level2-1-1',
            meta: {
              title: '三级导航-3',
              requiresAuth: false,
              icon: 'menu'
            },
            component: () => import('pages/test/level-3')
          },
          {
            path: 'https://www.wuhuawu.com',
            name: 'Level2-1-2',
            meta: {
              title: '三级导航-外链',
              icon: 'trending_up'
            }
          }
        ]
      },
      {
        path: 'level-3',
        name: 'Level3',
        meta: {
          title: '二级导航-3',
          icon: 'map',
          separator: true,
          requiresAuth: false
        },
        component: () => import('pages/test/level-2')
      },
      {
        path: 'https://www.wuhuawu.com',
        name: 'Level4',
        meta: {
          title: '二级导航-4-外链',
          icon: 'trending_up',
          requiresAuth: false
        }
      }
    ]
  },
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: 'level-5',
        name: 'Level5',
        meta: {
          title: '一级导航-2',
          separator: true,
          requiresAuth: false
        },
        component: () => import('pages/test/level-1')
      }
    ]
  },
  {
    path: '/',
    component: Layout,
    meta: {
      title: '一级导航-3'
    },
    name: 'level6',
    children: [
      {
        path: 'level-6-1',
        name: 'Level6-1',
        meta: {
          title: '一级导航-3-二级-1',
          separator: true,
          icon: 'assignment',
          requiresAuth: false
        },
        component: () => import('pages/test/level-2')
      },
      {
        path: 'level-6-2',
        name: 'Level6-2',
        meta: {
          title: '一级导航-3-二级-2',
          icon: 'assignment',
          requiresAuth: false
        },
        component: () => import('pages/test/level-2')
      }
    ]
  },
  {
    path: '/',
    name: 'Level7',
    redirect: 'level-7-1',
    meta: {
      title: '一级导航-3'
    },
    children: [
      {
        path: 'https://www.wuhuawu.com',
        name: 'Level7-1',
        meta: {
          title: '一级导航三-外链',
          icon: 'mediation',
          requiresAuth: false,
          separator: true
        }
      }
    ]
  },
  {
    path: '/test-login',
    name: 'Test',
    meta: {
      title: '测试-登录',
      requiresAuth: false
    },
    component: () => import('pages/site/login')
  }
]
