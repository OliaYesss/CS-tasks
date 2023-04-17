/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function(key, message) {
  const map = new Map()
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  key = key.split(' ').join('')

  let j = 0

  let output = ''

  for (let i = 0; i < key.length; i++) {
      if (map.has(key[i])) {
          continue
      } else {
          // console.log(i, key[i], alphabet[j])
          map.set(key[i], alphabet[j])
          j += 1
      }
  }

  for (let i = 0; i < message.length; i++) {
      if (!map.has(message[i])) {
          output += ' '
      } else {
          output += map.get(message[i])
      }
  }

  return output
};