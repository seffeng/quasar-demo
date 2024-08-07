/**
 * 随机字符生成
 * @param {number} len
 */
export function randomString (len) {
  len = len || 12
  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  const charsLen = chars.length
  let str = ''
  for (let i = 0; i < len; i++) {
    str += chars.charAt(Math.floor(Math.random() * charsLen))
  }
  return str
}

/**
 * 随机字符生成
 * @param {number} len
 */
export function randomStringNumber (len) {
  let str = randomString(len)
  const numbers = /[0-9]+/
  const strings = /[A-Za-z]+/
  let tryCount = 5
  while (tryCount > 0) {
    if (numbers.test(str) && strings.test(str)) {
      break
    }
    str = randomString(len)
    tryCount--
  }
  return str
}

/**
 * 调试输出
 * @param  {...any} str
 */
export function debug (...str) {
  if (process.env.VUE_APP_DEBUG === 'true') {
    console.log(...str)
  }
}
