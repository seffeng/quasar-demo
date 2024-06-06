import { Cookies } from 'quasar'

const TokenName = process.env.VUE_APP_TOKEN_NAME || 'Vue-Web-Token'

const options = { path: '/' }

export function getToken () {
  return Cookies.get(TokenName)
}

export function setToken (token) {
  return Cookies.set(TokenName, token, options)
}

export function removeToken () {
  return Cookies.remove(TokenName, options)
}
