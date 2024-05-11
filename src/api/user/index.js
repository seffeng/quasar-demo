import request from 'src/utils/request'

export function apiLogin (data) {
  return request({
    url: '/login',
    method: 'post',
    data
  })
}

export function apiLogout () {
  return request({
    url: '/logout',
    method: 'post'
  })
}

export function apiGetInfo () {
  return request({
    url: '/auth',
    method: 'get'
  })
}
