/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
  let arr = num.toString().split('')
  
  arr = arr.map(value => parseInt(value))
  arr.sort()

  let new1 = [arr[0], arr[3]]
  let new2 = [arr[1], arr[2]]

  new1 = parseInt(new1.join(''))
  new2 = parseInt(new2.join(''))

  return new1 + new2
};