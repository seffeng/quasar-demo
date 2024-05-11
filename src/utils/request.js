import axios from 'axios'
import { getToken, removeToken } from 'src/utils/auth'
import { debug } from 'src/utils'
import { Notify, Dialog } from 'quasar'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 10000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent

    if (getToken()) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      config.headers.Authorization = 'Bearer ' + getToken()
    }
    return config
  },
  error => {
    // do something with request error
    debug(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data

    // if the custom code is not success, it is judged as an error.
    if (res.status !== 'success') {
      // 401: 未登录;
      if (res.code === 401) {
        // to re-login
        Dialog.create({
          persistent: true,
          title: '登录超时',
          message: '您的登录已超时，请重新登录？',
          ok: {
            color: 'primary',
            label: '重新登录'
          },
          cancel: '取消'
        }).onOk(() => {
          removeToken()
          location.reload()
        })
      } else {
        debug(res.message)
        Notify.create({
          message: res.message || 'Has Error',
          color: 'negative',
          icon: 'error'
        })
      }
      return res
    } else {
      return res
    }
  },
  error => {
    let message = '接口不存在或服务器错误！'
    if (error.message.includes('timeout')) {
      message = '网络超时！'
    } else if (error.response.status === 419) {
      message = '数据验证错误！'
    }
    debug(message)
    Notify.create({
      message: message || 'Has Error',
      color: 'negative',
      icon: 'error'
    })
    return Promise.reject(error)
  }
)

export default service
