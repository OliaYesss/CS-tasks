/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  let paTriangle = []
  
  for (let i = 0; i < numRows; i++) {
      paTriangle[i] = []
      paTriangle[i][0] = 1
      for (let j = 1; j < i; j++) {
          paTriangle[i][j] = paTriangle[i - 1][j - 1] + paTriangle[i - 1][j]
      }
      paTriangle[i][i] = 1
  }
return paTriangle
};