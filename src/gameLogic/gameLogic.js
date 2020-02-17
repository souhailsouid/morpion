import { Cells, Board } from './boardLogic'

export class Game {
  constructor () {
    this.player = Cells.X
    this.board = new Board()
  }

  getCurrentPlayer () {
    return this.player
  }

  addPawn () {
    this.player = this.player === Cells.O ? Cells.X : Cells.O
  }

  getCell () {
    return Cells.X
  }
}
