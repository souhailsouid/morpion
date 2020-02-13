export const Cells = {
    EMPTY: Symbol('empty'),
    X: Symbol('x'),
    O: Symbol('o')
}
Object.freeze(Cells)

export class Grid {
    constructor() {
        this.cell = Cells.EMPTY
    }

    getCell(row, column) {
        return this.cell
    }

    addPawn(row, column, pawn) {
        if (row > 2) return false;
        if (this.cell === Cells.EMPTY && pawn !== Cells.EMPTY) {
            this.cell = pawn
            return true
        }
        return false
    }
}

