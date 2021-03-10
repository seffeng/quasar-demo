import request from 'src/utils/request'

export function apiLogin(data) {
  return request({
    url: '/login',
    method: 'post',
    data
  })
}

export function apiLogout() {
  return request({
    url: '/logout',
    method: 'delete'
  })
}

export function apiGetInfo(token) {
  return request({
    url: '/auth',
    method: 'get'
  })
}
