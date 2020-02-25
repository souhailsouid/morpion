import { Cells, Board } from './boardLogic'

export const GameStatus = {
  DRAW: Symbol('draw'),
  XVICTORY: Symbol('xVictory'),
  OVICTORY: Symbol('oVictory'),
  PLAYING: Symbol('playing')
}
Object.freeze(GameStatus)

export class Game {
  constructor () {
    this.player = Cells.X
    this.board = new Board()
    this.status = GameStatus.PLAYING 
    this.count=0
  }

  getCurrentPlayer () {
    return this.player
  }

  addPawn (row, column) {
    this.count++
    if(this.count>=9){
      return this.status = GameStatus.DRAW
    }
    this.board.addPawn(row,column, this.player)
    this.checkStatus()
    this.player = this.player === Cells.O ? Cells.X : Cells.O
  }

  getCell (row, column) {
    return this.board.getCell(row, column)
  }

  getStatus () {
    return this.status
  }

  checkStatus () {

    const potentialResult = this.player === Cells.X ? GameStatus.XVICTORY : GameStatus.OVICTORY
    
    for (let row = 0; row < 3; row++) {
      if(this.getCell(row,0) === this.player && this.getCell(row,1) === this.player && this.getCell(row,2) === this.player){
        this.status = potentialResult
      }
    } 

    for (let col = 0; col < 3; col++) {
      if(this.getCell(0,col) === this.player && this.getCell(1,col) === this.player && this.getCell(2,col) === this.player){
        this.status = potentialResult
      }
    } 

    if(this.getCell(0,0) === this.player && this.getCell(1,1) === this.player && this.getCell(2,2) === this.player){
      this.status = potentialResult
    }

    if(this.getCell(0,2) === this.player && this.getCell(1,1) === this.player && this.getCell(2, 0) === this.player){
      this.status = potentialResult
    }
  }
}
