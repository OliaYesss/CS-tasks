/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  const seen = new Set()

  while (!seen.has(n)) {  
    seen.add(n)
    n = sumOfSquares(n)
  }

  return n === 1
};

const sumOfSquares = (n) => {
  let sum = 0

  while (n > 0) {
    const remainder = (n % 10)

    n = Math.floor((n / 10))

    sum += remainder ** 2
  }

  return sum
}