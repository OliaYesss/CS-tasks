/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
  if (s1.length > s2.length) {
    return false
  }

  let hashMapS1 = new Map()

  for (let i = 0; i < s1.length; i++) {
    if (hashMapS1.has(s1[i])) {
      hashMapS1.set(s1[i], hashMapS1.get(s1[i]) + 1)
    } else {
      hashMapS1.set(s1[i], 1)
    }
  }
//   console.log(hashMapS1)


  for (let l = 0; l < s2.length - s1.length + 1; l++) {
    // console.log(l, hashMapS1)
    const currMap = new Map(hashMapS1)
    let count = 0

    for (let r = l; r < s1.length + l; r++) {
      if (currMap.has(s2[r]) && currMap.get(s2[r])!== 0) {
        count += 1
        currMap.set(s2[r], currMap.get(s2[r]) - 1)
      } else {
        break
      }
    }
    if (count === s1.length) {
      return true
    }
  }

  return false
};