import Layout from 'src/layouts/MainLayout.vue'

export default [
  {
    path: '/',
    name: 'Level-1',
    component: Layout,
    meta: {
      title: '一级导航-1',
      caption: '父菜单-子标题',
      icon: 'menu',
      opened: true
    },
    redirect: 'level-1-1',
    children: [
      {
        path: 'level-1-1',
        name: 'Level-1-1',
        meta: {
          title: '二级导航-1-1',
          caption: '二级导航-子标题',
          icon: 'home',
          requiresAuth: false,
          opened: true
        },
        component: () => import('pages/test/MainPage.vue'),
        redirect: 'level-1-1-1',
        children: [
          {
            path: 'level-1-1-1',
            name: 'Level-1-1-1',
            meta: {
              title: '三级导航-1-1-1',
              separator: true,
              icon: 'map',
              requiresAuth: false
            },
            component: () => import('pages/test/Level-3.vue')
          },
          {
            path: 'level-1-1-2',
            name: 'Level-1-1-2',
            meta: {
              title: '三级导航-1-1-2',
              icon: 'map',
              requiresAuth: false,
              separator: false,
              caption: '三级导航-1-1-2'
            },
            component: () => import('pages/test/Level-3.vue')
          },
          {
            path: 'https://www.wuhuawu.com',
            name: 'Level-1-1-3',
            meta: {
              title: '三级导航-1-1-3-外链'
            }
          }
        ]
      },
      {
        path: 'level-1-2',
        name: 'Level-1-2',
        meta: {
          title: '二级导航-1-2',
          requiresAuth: false,
          separator: true
        },
        component: () => import('pages/test/MainPage.vue'),
        children: [
          {
            path: 'level-1-2-1',
            name: 'Level-1-2-1',
            meta: {
              title: '三级导航-1-2-1',
              requiresAuth: false,
              icon: 'menu'
            },
            component: () => import('pages/test/Level-3.vue')
          },
          {
            path: 'https://www.wuhuawu.com',
            name: 'Level-1-2-2',
            meta: {
              title: '三级导航-1-2-2-外链',
              icon: 'trending_up',
              caption: '外链aaaaaaaaaaa外链aaaaaaa外链aaaaaaaaaaaaa外链aaaaaaaaaaa外链aaaaaaa外链aaaaaaaaaaaaa'
            }
          }
        ]
      },
      {
        path: 'level-1-3',
        name: 'Level-1-3',
        meta: {
          title: '二级导航-1-3',
          icon: 'map',
          separator: true,
          requiresAuth: false
        },
        component: () => import('pages/test/Level-2.vue')
      },
      {
        path: 'https://www.wuhuawu.com',
        name: 'Level-1-4',
        meta: {
          title: '二级导航-1-4-外链',
          icon: 'trending_up',
          caption: '外链aaaaaaaaaaa外链aaaaaaa外链aaaaaaaaaaaaa外链aaaaaaaaaaa外链aaaaaaa外链aaaaaaaaaaaaa',
          requiresAuth: false
        }
      }
    ]
  },
  {
    path: '/',
    component: Layout,
    meta: {
      title: '一级导航-2',
      icon: 'map',
      separator: true,
      requiresAuth: false
    },
    children: [
      {
        path: 'level-2-1',
        name: 'Level-2-1',
        meta: {
          title: '二级导航-2-1',
          separator: true,
          caption: '无图标',
          requiresAuth: false
        },
        component: () => import('pages/test/Level-2.vue')
      }
    ]
  },
  {
    path: '/',
    component: Layout,
    meta: {
      title: '一级导航-3'
    },
    name: 'Level-3',
    children: [
      {
        path: 'level-3-1',
        name: 'Level-3-1',
        meta: {
          title: '二级导航-3-1',
          separator: true,
          icon: 'assignment',
          requiresAuth: false
        },
        component: () => import('pages/test/Level-2.vue')
      },
      {
        path: 'level-3-2',
        name: 'Level-3-2',
        meta: {
          title: '二级导航-3-2',
          icon: 'assignment',
          requiresAuth: false
        },
        component: () => import('pages/test/Level-2.vue')
      },
      {
        path: 'https://www.wuhuawu.com',
        name: 'Level-3-3',
        meta: {
          title: '二级导航-3-3-外链',
          icon: 'assignment',
          requiresAuth: false
        }
      }
    ]
  },
  {
    path: '/',
    name: 'Level-4',
    meta: {
      title: '一级导航-4'
    },
    children: [
      {
        path: 'http://www.wuhuawu.com',
        name: 'Level-4-1',
        meta: {
          title: '二级导航-4-1-外链',
          icon: 'mediation',
          caption: '外链aaaaaaaaaaa外链aaaaaaa外链aaaaaaaaaaaaa外链aaaaaaaaaaa外链aaaaaaa外链aaaaaaaaaaaaa',
          requiresAuth: false,
          separator: true
        }
      }
    ]
  },
  {
    path: '/',
    name: 'Level-5',
    meta: {
      title: '一级导航-5'
    },
    component: Layout,
    children: [
      {
        path: 'level-5-1',
        name: 'Level-5-1',
        meta: {
          title: '二级导航-5-1',
          icon: 'assignment',
          separator: true,
          requiresAuth: false
        },
        component: () => import('pages/test/Level-2.vue')
      }
    ]
  }
]
