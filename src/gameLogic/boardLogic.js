export const Cells = {
  EMPTY: Symbol('empty'),
  X: Symbol('x'),
  O: Symbol('o')
}
Object.seal(Cells)
Object.freeze(Cells)

export class Board {
  constructor () {
    this.board = [
      [Cells.EMPTY, Cells.EMPTY, Cells.EMPTY],
      [Cells.EMPTY, Cells.EMPTY, Cells.EMPTY],
      [Cells.EMPTY, Cells.EMPTY, Cells.EMPTY]
    ]
  }

  getCell (row, column) {
    return this.board[row][column]
  }

  // Params pawn = Cells.value
  addPawn (row, column, pawn) {
    if (row > 2 || column > 2 || row < 0 || column < 0) return false
    if (this.board[row][column] === Cells.EMPTY && pawn !== Cells.EMPTY) {
      this.board[row][column] = pawn
      return true
    }
    return false
  }
}
