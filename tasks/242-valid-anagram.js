/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  let mapS = new Map()
  let mapT = new Map()

  if (s.length === t.length) {
    for (let i = 0; i < s.length; i++) {
      if (mapS.has(s[i])) {
        mapS.set(s[i], mapS.get(s[i]) + 1)
      } else {
        mapS.set(s[i], 1)
      }

      if (mapT.has(t[i])) {
        mapT.set(t[i], mapT.get(t[i]) + 1)
      } else {
        mapT.set(t[i], 1)
      }
    }

    let arrS = Array.from(mapS.keys())
    for (let i = 0; i < arrS.length; i++) {
      if (mapS.get(arrS[i]) !== mapT.get(arrS[i])) {
        return false
      }
    }
    return true
  } else {
    return false
  }
};