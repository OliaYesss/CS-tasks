/**
 * @param {string} s
 * @return {boolean}
 */

var isLetter = function(char) {
  return char.match(/[a-zA-Z0-9]/i) !== null
}

var isPalindrome = function(s) {
s = s.toLowerCase()
let i = 0
let j = s.length - 1

while (j >= i) {
  if (!isLetter(s[i])) {
    i++
    continue
  }
  if (!isLetter(s[j])) {
    j--
    continue
  }

  if (s[i] !== s[j]) {
    return false 
  }
  i++
  j--
}
return true
};