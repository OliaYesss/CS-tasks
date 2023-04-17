/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  x = x.toString()
  
  if (x.includes('-')) {
      return false
  }
  
  let a = x.substring(0, Math.floor(x.length/2))
  const b = x.substring(Math.round(x.length/2))
  
  if (x.length % 2 === 0){
      a = [...a].reverse().join('')
      return a === b
  } else {
      return a === b
  }
  
};