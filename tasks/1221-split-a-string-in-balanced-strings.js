/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
  let output = 0
  let count = 0

  for (let i = 0; i < s.length; i++) {
      s[i] === 'L' ? count-- : count++

      if (count === 0) {
          output++
      }
  }

  return output
};