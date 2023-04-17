/**
 * @param {character[][]} board
 * @return {boolean}
 */

const getRow = (board, row, i) => {
  for (let j = 0; j < 9; j++) {
    row.push(Number(board[i][j]) ? Number(board[i][j]): 0)
  }
}

const getColumn = (board, column, j) => {
  for (let i = 0; i < 9; i++) {
    column.push(Number(board[i][j]) ? Number(board[i][j]): 0)
  }
}

const getSubBox = (board, subBox, iShift, jShift) => {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      subBox.push(Number(board[i + iShift][j + jShift]) ? Number(board[i + iShift][j + jShift]): 0)
    }
  }
}

const isValid = (subGrid) => {
  let set = new Set()
  for (let i = 0; i < subGrid.length; i++) {
    if (subGrid[i] === 0) {
      continue
    }

    if (set.has(subGrid[i]) || subGrid[i] < 1 || subGrid[i] > 9) {
      return false
    } else {
      set.add(subGrid[i])
    }
  }
  return true
}

var isValidSudoku = function(board) {

  for (let i = 0; i < 9; i++) {
    let row = []
    getRow(board, row, i)
    if (!isValid(row)) {
      return false
    }
  }

  for (let j = 0; j < 9; j++) {
    let column = []
    getColumn(board, column, j)
    if (!isValid(column)) {
      return false
    }
    // console.log(column)
  }

  for (let i = 0; i < 9; i+=3) {
    for (let j = 0; j < 9; j+=3) {
      let subBox = []
      getSubBox(board, subBox, i, j)
      if (!isValid(subBox)) {
        return false
      }
      // console.log(subBox)
    }
  }

  return true
  
};