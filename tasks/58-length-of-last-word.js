/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let count = 0
  let lastWordIndx = 0
  
    for (let i = s.length - 1; i >= 0; i--) {
      if (s[i] !== " ") {
        lastWordIndx = i
        break
      }
    }
    for (let i = lastWordIndx; i >= 0 && s[i] !== " "; i--) {
      count++
    }
    return count
  };