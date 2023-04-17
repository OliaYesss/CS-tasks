/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let [one, two] = [1, 1]

  for (let i = 0; i < n - 1; i++) {
      let tmp = one
      one = one + two
      two = tmp
  }

  return one
};