import { LocalStorage } from 'quasar'

/**
 *
 * @param {*} state
 * @param {*} userId
 */
export function setId(state, userId) {
  state.userId = userId
  LocalStorage.set('user.userId', state.userId)
}

/**
 *
 * @param {*} state
 * @param {*} username
 */
export function setUsername(state, username) {
  state.username = username
  LocalStorage.set('user.username', state.username)
}

/**
 *
 * @param {*} state
 * @param {*} name
 */
export function setName(state, name) {
  state.name = name
  LocalStorage.set('user.name', state.name)
}

/**
 *
 * @param {*} state
 * @param {*} avatar
 */
export function setAvatar(state, avatar) {
  state.avatar = avatar
  LocalStorage.set('user.avatar', state.avatar)
}
