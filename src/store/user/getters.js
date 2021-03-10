import { LocalStorage } from 'quasar'

export function userId(state) {
  return state.userId || LocalStorage.getItem('user.userId')
}

export function name(state) {
  return state.name || LocalStorage.getItem('user.name')
}

export function username(state) {
  return state.username || LocalStorage.getItem('user.username')
}

export function avatar(state) {
  return state.avatar || LocalStorage.getItem('user.avatar')
}
