/**
 * @param {number[][]} grid
 * @return {number}
 */
const findDifference = (rowMax, columnMax, value) => {
  const top = Math.min(rowMax, columnMax)
  const difference = top - value

  return difference
}

const findMaxMin = (grid) => {
  const gridLength = grid.length
  let [rows, columns] = [[], []]
  const [rowsMax, columnsMax] = [[], []]

  for (let i = 0; i < gridLength; i++) {
      rows.push(grid[i])
      columns.push([])

      for (let j = 0; j < gridLength; j++) {
          columns[i].push(grid[j][i])
      }
  }

  for (let i = 0; i < rows.length; i++) {
      rowsMax.push(Math.max(...rows[i]))
      columnsMax.push(Math.max(...columns[i]))
  }

  return [rowsMax, columnsMax]
}

var maxIncreaseKeepingSkyline = function(grid) {
  let output = 0
  const gridLength = grid.length

  let [rowsMax, columnsMax] = findMaxMin(grid)

  for (let i = 0; i < gridLength; i++) {
      for (let j = 0; j < gridLength; j++) {
          output += findDifference(rowsMax[i], columnsMax[j], grid[i][j])
      }
  }

  return output 
};