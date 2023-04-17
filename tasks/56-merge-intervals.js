/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  const sortedIntervals =  intervals.sort((a,b) => a[0] - b[0])
  const output = []
  let curInterval = intervals[0]

  for (let i = 1; i < sortedIntervals.length; i++) {
      if (curInterval[1] < sortedIntervals[i][1] && curInterval[1] >= sortedIntervals[i][0]) {
          curInterval = [curInterval[0], sortedIntervals[i][1]]

      } else if (curInterval[1] >= sortedIntervals[i][1] && curInterval[1] >= sortedIntervals[i][0]) {
          continue

      } else {
          output.push(curInterval)
          curInterval = sortedIntervals[i]
      }
  }

  output.push(curInterval)
  
  return output
};