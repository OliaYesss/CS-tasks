/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
  let hashMap = new Map()

  let l = 0
  let res = 0

  for (let r = 0; r < s.length; r++) {
    if (hashMap.has(s[r])) {
      hashMap.set(s[r], hashMap.get(s[r]) + 1)
    } else {
      hashMap.set(s[r], 1)
    }

    while ((r - l + 1) - (Math.max(...hashMap.values())) > k) {
      hashMap.set(s[l], hashMap.get(s[l]) - 1)
      l += 1
    }

    res = Math.max(res, r - l + 1)
  }

  // console.log(hashMap)
  // console.log(res)

  return res
};