/**
 * @param {number[][]} score
 * @param {number} k
 * @return {number[][]}
 */
var sortTheStudents = function(score, k) {
  let eArr = []
  const map = new Map()

  for (let i = 0; i < score.length; i++) {
      eArr.push(score[i][k])
      map.set(score[i][k], score[i])
  }

  eArr.sort((a, b) => (a > b ? -1 : 1))

  // console.log(map)
  // console.log(eArr)

  for (let i = 0; i < eArr.length; i++) {
      score[i] = map.get(eArr[i])
  }

  return score
};