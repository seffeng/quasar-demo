import { Cookies } from 'quasar'

const TokenName = process.env.VUE_APP_TOKEN_NAME || 'Vue-Web-Token'

export function getToken () {
  return Cookies.get(TokenName)
}

export function setToken (token) {
  return Cookies.set(TokenName, token)
}

export function removeToken () {
  return Cookies.remove(TokenName)
}
