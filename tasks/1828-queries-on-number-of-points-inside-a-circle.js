/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
const isValidPoint = ([x1, y1, d], [x2, y2]) => {
  let distance = Math.sqrt((x2 - x1)**2 + (y2 - y1)**2)

  // console.log('x1:', x1, 'y1:', y1, 'x2:', x2, 'y2:', y2, 'd:', distance)

  return distance <= d ? true : false
}

var countPoints = function(points, queries) {
  let answer = []

  for (let i = 0; i < queries.length; i++) {
      answer[i] = 0
      for (let j = 0; j < points.length; j++) {
          if (isValidPoint(queries[i], points[j])) {
              answer[i] += 1
          }
      }
  }

  return answer
};