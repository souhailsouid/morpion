import { Board, Cells } from './boardLogic'

describe('Game logic', () => {
  let board
  beforeEach(() => {
    board = new Board()
  })

  describe('at the beginning', () => {
    it('at least 1 cell is empty', () => {
      const cell = board.getCell(0, 0)
      expect(cell).toBe(Cells.EMPTY)
    })
  })

  describe('when a pawn is added', () => {
    it(' we add a X the cell should contain a X', () => {
      board.addPawn(0, 0, Cells.X)
      const cell = board.getCell(0, 0)
      expect(cell).toBe(Cells.X)
    })

    it('when I can add a pawn board.addPawn() returns true', () => {
      expect(board.addPawn(0, 0, Cells.X)).toBe(true)
    })

    it('when I add two pawns on the first row', () => {
      board.addPawn(0, 1, Cells.X)
      board.addPawn(0, 2, Cells.O)
      expect(board.getCell(0, 1)).toBe(Cells.X)
      expect(board.getCell(0, 2)).toBe(Cells.O)
    })

    it('when I add two pawns on the first column', () => {
      board.addPawn(1, 0, Cells.X)
      board.addPawn(2, 0, Cells.O)
      expect(board.getCell(1, 0)).toBe(Cells.X)
      expect(board.getCell(2, 0)).toBe(Cells.O)
    })

    it('we add a O the cell should contain a O', () => {
      board.addPawn(0, 0, Cells.O)
      const cell = board.getCell(0, 0)
      expect(cell).toBe(Cells.O)
    })

    it('we cannot add a pawn in a cell that already contains a pawn', () => {
      board.addPawn(0, 0, Cells.O)
      expect(board.addPawn(0, 0, Cells.X)).toBe(false)
    })

    it(' we cannot add an empty pawn in a cell', () => {
      expect(board.addPawn(0, 0, Cells.EMPTY)).toBe(false)
    })

    it(' when I cannot add a pawn the cell remains unchanged', () => {
      board.addPawn(0, 0, Cells.O)
      board.addPawn(0, 0, Cells.X)
      expect(board.getCell(0, 0)).toBe(Cells.O)
    })

    describe('Cannot add a pawn outside the board', () => {
      it('Below the board', () => {
        expect(board.addPawn(3, 2, Cells.X)).toBe(false)
      })

      it('On top of the board', () => {
        expect(board.addPawn(-1, 2, Cells.X)).toBe(false)
      })

      it('On the right side of the board', () => {
        expect(board.addPawn(2, 3, Cells.X)).toBe(false)
      })

      it('On the left side of the board', () => {
        expect(board.addPawn(2, -1, Cells.X)).toBe(false)
      })
    })
  })
})
