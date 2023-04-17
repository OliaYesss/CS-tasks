/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) { 
  // const triangle = []
    let last = []
  
    for (let i = 0; i <= rowIndex; i++) {
      let cur = [1]
  
      for (let j = 0; j < last.length - 1; j++) {
        cur.push(last[j] + last[j + 1])
      }
  
      if (i > 0) {
        cur.push(1)
      }
  
      last = cur
      // triangle.push(last)
    }
  
    return last
  };