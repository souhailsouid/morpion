import { Grid, Cells } from './gameLogic';


describe('Game logic', () => {

    let grid
    beforeEach(() => {
        grid = new Grid();
    })

    describe('at the beginning', () => {
        it('at least 1 cell is empty', () => {
            const cell = grid.getCell(0, 0);
            expect(cell).toBe(Cells.EMPTY);
        });
    })

    describe('when a pawn is added', () => {

        it(' we add a X the cell should contain a X', () => {
            grid.addPawn(0, 0, Cells.X)
            const cell = grid.getCell(0, 0);
            expect(cell).toBe(Cells.X);
        });

        it(' when i can add a pawn grid.addPawn() returns true', () => {
            expect(grid.addPawn(0, 0, Cells.X)).toBe(true);
        });

        it(' we add a O the cell should contain a O', () => {
            grid.addPawn(0, 0, Cells.O);
            const cell = grid.getCell(0, 0);
            expect(cell).toBe(Cells.O);
        });

        it(' we cannot add a pawn in a cell that already contains a pawn', () => {
            grid.addPawn(0, 0, Cells.O);
            expect(grid.addPawn(0, 0, Cells.X)).toBe(false);
        });

        it(' we cannot add an empty pawn in a cell', () => {
            expect(grid.addPawn(0, 0, Cells.EMPTY)).toBe(false);
        });

        it(' when i cannot add a pawn the cell remains unchanged', () => {
            grid.addPawn(0, 0, Cells.O);
            grid.addPawn(0, 0, Cells.X);
            expect(grid.getCell(0, 0)).toBe(Cells.O);
        });

        it(' Cannot add a pawn outside the grid ', () => {
            expect(grid.addPawn(3, 2, Cells.X)).toBe(false);
        });

    })

});

// Quand on pose un pion la case est remplie
// On peut mettre soit des croix soit des ronds
// On peut pas mettre deux pions dans la même case
// On peut pas mettre de pion en dehors de la grille
