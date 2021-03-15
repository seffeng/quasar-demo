
import { setToken, removeToken } from 'src/utils/auth'
import { apiLogin, apiLogout, apiGetInfo } from 'src/api/user'

export function login({ commit }, userInfo) {
  const { username, password } = userInfo
  return new Promise((resolve, reject) => {
    apiLogin({ username: username.trim(), password: password }).then(response => {
      if (response.status === 'success') {
        // 此处代码可能需要修改！根据接口结构自行确定！
        const { data } = response
        commit('setName', data.admin.name || '登录用户')
        commit('setId', data.admin.id || 0)
        setToken(data.token.token)
        resolve()
      } else {
        removeToken()
        reject(response.message)
      }
    }).catch(error => {
      reject(error)
    })
  })
}

export function resetToken({ commit }) {
  return new Promise(resolve => {
    commit('setId', 0)
    commit('setName', '')
    removeToken()
    resolve()
  })
}

export function logout({ commit }) {
  return new Promise((resolve, reject) => {
    apiLogout().then(() => {
      commit('setId', 0)
      commit('setName', '')
      removeToken()
      resolve()
    }).catch(error => {
      reject(error)
    })
  })
}

export function getInfo({ commit }) {
  return new Promise((resolve, reject) => {
    apiGetInfo().then(response => {
      // 此处代码可能需要修改！根据接口结构自行确定！
      const { data } = response
      if (!data) {
        reject('数据获取失败，请重新登录！')
      }

      const { id, username } = data
      commit('setId', id)
      commit('setName', username)
      // commit('setAvatar', avatar)
      resolve(data)
    }).catch(error => {
      reject(error)
    })
  })
}
