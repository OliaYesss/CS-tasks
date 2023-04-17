/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
  let sum = 0

  for (let i = 0; i < num; i++) {
      if (num % i === 0) {
          sum += i 
      }
  }

  return sum === num ? true : false
};