/**
 * @param {number} n
 * @return {number}
 */

const getProduct = (nArr) => {
  let product = nArr[0]

  for (i = 1; i < nArr.length; i++) {
      product *= nArr[i] 
  }

  return product
}

const getSum = (nArr) => {
  let sum = nArr[0]

  for (let i = 1; i < nArr.length; i++) {
      sum += nArr[i]
  }

  return sum
}

var subtractProductAndSum = function(n) {
  let nArr = n.toString().split('')
  nArr = nArr.map(value => parseInt(value))

  return getProduct(nArr) - getSum(nArr)
};