import { Game } from './gameLogic'
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

  it('adds a pawn that matches the current player', () => {
    game.addPawn(0, 0)
    game.addPawn(1, 0)
    const cell = game.getCell(1, 0)
    expect(cell).toBe(Cells.O)
  })
})
