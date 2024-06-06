/**
 *
 * @param {string} path
 */
export function isExternal (path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 *
 * @param {string|object} obj
 */
export function isEmpty (obj) {
  return isNull(obj) || (typeof (obj) === 'string' && obj.trim() === '') || (typeof (obj) === 'object' && Object.keys(obj).length < 1)
}

/**
 *
 * @param {*} val
 */
export function isNull (val) {
  return val === undefined || val === null
}

/**
 *
 * @param {object} obj
 * @param {*} attr
 */
export function hasProperty (obj, attr) {
  // eslint-disable-next-line no-prototype-builtins
  return typeof obj === 'object' && obj.hasOwnProperty(attr)
}

/**
 *
 * @param {string} str
 */
export function validPhone (str) {
  return (/^1\d{10}$/).test(str)
}

/**
 *
 * @param {string} str
 * @param {string} comstr
 */
export function compareStr (str, comstr) {
  return str === comstr
}
