/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
  const length = boxes.length
  let output = []

  for (let i = 0; i < length; i++) {
      let count = 0

      for (let j = 0; j < length; j++) {
          if (boxes[j] === '1') {
              let abs = Math.abs(i - j)
              count += abs
          }
      }
      output.push(count)
  }

  return output
};