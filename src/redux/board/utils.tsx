// Import types
import { BoardState } from "./types";

/**
 * Get initial reducer state
 * @param {BoardState} state
 * @return {BoardState}
 */
export function generateState (
    state: BoardState = {
        cells: Array(3).fill(Array(3).fill("")),
        winner: [],
        history: [],
        draw: false,
        step: 0,
        xIsNext: false
    }
): BoardState {
    return {
        cells: state.cells,
        winner: state.winner,
        history: state.history,
        draw: state.draw,
        step: state.step,
        xIsNext: state.xIsNext
    }
};

/**
 * Calculate if there is a winner combination on current board state
 * Returns the symbol of the winner or a empty string
 */
export function checkWinnerCombination(
    cells: string[][] = []
): number[] {
    const concatCells: string[] = cells.reduce((ant, act) => ant.concat(act));
    return [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ].filter(e => {
        let map: string[] = e.map(a => concatCells[a]);
        let notNull: boolean = (map.indexOf("") === -1);
        let equals: boolean = map.every((e, i, a) => e === a[0]);
        return (notNull && equals);
    }).shift() || [];
}

/**
 * Check if draw on current board state
 */
export function checkDraw(
    cells: string[][] = []
): boolean {
    return (cells.filter(row => row.filter(square => square !== "").length === row.length).length === cells.length);
}

/**
 * Check if a square is empty (=== "")
 *
 * @export
 * @param {string[][]} cells
 * @param {number} row
 * @param {number} column
 * @returns
 */
export function checkIfEmptySquare(cells: string[][], row: number, column: number){
    return (((cells
        .filter((e: string[], i: number) => (row === i))
        .shift() || [])
        .filter((e: string, i: number) => (column === i))
        .shift()) === "");
}