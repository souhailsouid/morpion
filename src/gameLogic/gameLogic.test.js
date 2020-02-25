import { Game, GameStatus } from './gameLogic'
import { Cells } from './boardLogic'

describe('Rules', () => {
  let game
  beforeEach(() => {
    game = new Game()
  })

  it('first player is X', () => {
    const player = game.getCurrentPlayer()
    expect(player).toBe(Cells.X)
  })

  it('second player is O', () => {
    game.addPawn(0, 0)
    const player = game.getCurrentPlayer()
    expect(player).toBe(Cells.O)
  })

  it('alternates players', () => {
    game.addPawn(1, 0)
    game.addPawn(2, 0)
    const player = game.getCurrentPlayer()
    expect(player).toBe(Cells.X)
  })

  it('adds a pawn that matches the current player', () => {
    game.addPawn(0, 0)
    const cell = game.getCell(0, 0)
    expect(cell).toBe(Cells.X)
  })

  it('adds a second pawn that matches the current player', () => {
    game.addPawn(0, 0)
    game.addPawn(1, 0)
    const cell = game.getCell(1, 0)
    expect(cell).toBe(Cells.O)
  })

  it('game is not over ', () => {
    const status = game.getStatus()
    expect(status).toBe(GameStatus.PLAYING)
  })

  it('game is not over when we add 1 pawn', () => {
    game.addPawn(1, 0)
    const status = game.getStatus()
    expect(status).toBe(GameStatus.PLAYING)
  })

  describe('game is over when 3 equal pawns are aligned', () => {


    it('player X wins horizontaly on the first line', () => {
      game.addPawn(0, 0)
      game.addPawn(1, 1)
      game.addPawn(0, 1)
      game.addPawn(1, 0)
      game.addPawn(0, 2)
      const status = game.getStatus()
      expect(status).toBe(GameStatus.XVICTORY)
    })

    it('player X wins horizontaly on the second line', () => {
      game.addPawn(1, 0)
      game.addPawn(0, 1)
      game.addPawn(1, 1)
      game.addPawn(0, 0)
      game.addPawn(1, 2)
      const status = game.getStatus()
      expect(status).toBe(GameStatus.XVICTORY)
    })

    it('player X wins horizontaly on the third line', () => {
      game.addPawn(2, 0)
      game.addPawn(0, 1)
      game.addPawn(2, 1)
      game.addPawn(0, 0)
      game.addPawn(2, 2)
      const status = game.getStatus()
      expect(status).toBe(GameStatus.XVICTORY)
    })

    it('player O wins horizontaly on the first line', () => {
      game.addPawn(1, 0)
      game.addPawn(2, 0)
      game.addPawn(0, 1)
      game.addPawn(2, 1)
      game.addPawn(0, 0)
      game.addPawn(2, 2)
      const status = game.getStatus()
      expect(status).toBe(GameStatus.OVICTORY)
    })

    it('player X wins vertically on the first line', () => {
      game.addPawn(0, 0)
      game.addPawn(1, 1)
      game.addPawn(1, 0)
      game.addPawn(1, 2)
      game.addPawn(2, 0)
      const status = game.getStatus()
      expect(status).toBe(GameStatus.XVICTORY)
    })

    it('player X wins diagonaly', () => {
      game.addPawn(0, 0)
      game.addPawn(0, 1)
      game.addPawn(1, 1)
      game.addPawn(0, 2)
      game.addPawn(2, 2)
      const status = game.getStatus()
      expect(status).toBe(GameStatus.XVICTORY)
    })

    it('player X wins second diagonaly', () => {
      game.addPawn(0, 2)
      game.addPawn(0, 1)
      game.addPawn(1, 1)
      game.addPawn(0, 2)
      game.addPawn(2, 0)
      const status = game.getStatus()
      expect(status).toBe(GameStatus.XVICTORY)
    })
  })

  describe('game is not over when 3 different pawns are aligned', () => {

    it('horizontaly', () => {
      game.addPawn(1, 0)
      game.addPawn(1, 1)
      game.addPawn(0, 1)
      game.addPawn(0, 0)
      game.addPawn(1, 2)
      const status = game.getStatus()
      expect(status).toBe(GameStatus.PLAYING)
    })
    it('game is not over if we add a pawn ', () => {
      game.addPawn(2,2)
      const status = game.getStatus()
      expect(status).toBe(GameStatus.PLAYING)
    })
  })
  describe('game over with a draw when the board is full', () => {
    it('', () => {
      game.addPawn(0, 0)
      game.addPawn(0, 1)
      game.addPawn(0, 2)
      game.addPawn(1, 0)
      game.addPawn(1, 1)
      game.addPawn(2, 2)
      game.addPawn(1, 2)
      game.addPawn(2, 0)
      game.addPawn(2, 1)
      const status = game.getStatus()
      expect(status).toBe(GameStatus.DRAW)
    } )

  })
})
