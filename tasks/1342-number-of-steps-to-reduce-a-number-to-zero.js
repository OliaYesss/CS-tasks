/**
 * @param {number} num
 * @return {number}
 */

var numberOfSteps = function(num) {
  let count = 0

  while(num > 0) {
      if (num % 2 === 0) {
          num = Math.floor(num / 2)
          count += 1
      } else {
          num = num - 1
          count += 1
      }
  }

  return count
};