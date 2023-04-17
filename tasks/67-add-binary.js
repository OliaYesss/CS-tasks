/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let answ = ""
  let isPlusOne = false
  const maxLength = Math.max(a.length, b.length)
  const parseIntMap = { '0': 0, '1': 1  }

    for (let i = 0; i < maxLength; i++) {
      const first = parseIntMap[a[a.length - 1 - i]] || 0
      const second = parseIntMap[b[b.length - 1 - i]] || 0 

      if (first + second === 2 && isPlusOne) {
        answ = '1' + answ
        isPlusOne = true
      } else if (first + second === 2) {
        answ = '0' + answ
        isPlusOne = true
      } else if (first + second === 1 && isPlusOne) {
        answ = '0' + answ
        isPlusOne = true
      } else if (first + second === 1) {
        answ = '1' + answ
      } else if (isPlusOne){
        answ = '1' + answ
        isPlusOne = false
      } else {
        answ = '0' + answ
      }
    }

    if (isPlusOne) {
      answ = '1' + answ
    }

    return answ
};