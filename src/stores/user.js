import { defineStore } from 'pinia'
import { setToken, removeToken } from 'src/utils/auth'
import { apiLogin, apiLogout } from 'src/api/user'

export const useUserStore = defineStore('user', {
  persist: {
    key: 'user-store'
  },
  state: () => ({
    userId: 0,
    username: '',
    name: '',
    avatar: ''
  }),

  getters: {
  },

  actions: {
    login (loginForm) {
      return new Promise((resolve, reject) => {
        apiLogin({ username: loginForm.username.trim(), password: loginForm.password.trim() }).then(response => {
          if (response.status === 'success') {
            // 此处代码可能需要修改！根据接口结构自行确定！
            const { data } = response
            this.userId = data.user.id
            this.username = data.user.username
            this.name = data.user.name
            setToken(data.token.token)
            resolve()
          } else {
            removeToken()
            reject(response.message)
          }
        }).catch(error => {
          removeToken()
          reject(error)
        })
      })
    },
    logout () {
      return new Promise((resolve, reject) => {
        apiLogout().then(response => {
          if (response.status === 'success') {
            this.userId = ''
            this.username = ''
            this.name = ''
            removeToken()
            resolve()
          } else {
            reject(response.message)
          }
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
})
