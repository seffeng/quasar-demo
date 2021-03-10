import Vue from 'vue'
import VueRouter from 'vue-router'
import { LoadingBar } from 'quasar'
import { getToken } from 'src/utils/auth'
import { debug } from 'src/utils'
import { Notify } from 'quasar'

import routes from './routes'

Vue.use(VueRouter)

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default function({ store, ssrContext }) {
  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,

    // Leave these as they are and change in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  })

  Router.beforeEach(async(to, from, next) => {
    // start progress bar
    LoadingBar.start()

    const hasToken = getToken()
    if (hasToken) {
      if (to.path === '/login') {
        // if is logged in, redirect to the home page
        next({ name: 'HomeIndex' })
        LoadingBar.stop()
      } else {
        // 此处代码可能需要修改！改为是否有权限！
        const allow = to.meta.allow || store.getters['user/userId']
        if (allow) {
          next()
        } else {
          try {
            // get user info 此处代码可能需要修改！改为是否有权限！
            await store.dispatch('user/getInfo')
            const allow = store.getters['user/userId']
            if (allow) {
              next()
            } else {
              next({ name: 'NotAuth' })
              LoadingBar.stop()
            }
          } catch (error) {
            // remove token and go to login page to re-login
            await store.dispatch('user/resetToken')
            debug(error || 'Has Error')
            Notify.create({
              message: error || 'Has Error',
              color: 'negative',
              icon: 'warning'
            })

            next(`/login?redirect=${to.path}`)
            LoadingBar.stop()
          }
        }
      }
    } else {
      /* has no token*/
      if (to.meta.requiresAuth !== undefined && to.meta.requiresAuth === false) {
        // in the free login whitelist, go directly
        next()
      } else {
        // other pages that do not have permission to access are redirected to the login page.
        next(`/login?redirect=${to.path}`)
        LoadingBar.stop()
      }
    }
  })

  Router.afterEach(() => {
    // finish progress bar
    LoadingBar.stop()
  })

  return Router
}
