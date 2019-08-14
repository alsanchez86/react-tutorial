import { BoardState } from "./types";

/**
 * Get initial reducer state
 *
 * @param {Array} [cells=Array(3).fill(Array(3).fill(""))] [["", "", ""], ["", "", ""], ["", "", ""]]
 * @param {Array} [winner=[]] winner combination
 * @param {Array} [history=[]] Cells states pushed on history array
 * @param {Boolean} [draw=false] true when game end on draw *
 * @param {Number} [step=0] Current step of the game. Max 9
 */
export const initialState = (cells: String[][] = Array(3).fill(Array(3).fill("")), winner: String[] = [], history: String[][][] = [], draw: Boolean = false, step: Number = 0): BoardState => ({
    cells: cells,
    winner: winner,
    history: history,
    draw: draw,
    step: step
});

/**
 * Calculate if there is a winner combination on current board state
 * Returns the symbol of the winner or a empty string
 */
export function checkWinnerCombination(cells: String[][] = []): Number[] {
    const concatCells = cells.reduce((ant, act) => ant.concat(act));
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
        let map = e.map(a => concatCells[a]);
        let notNull = (map.indexOf("") === -1);
        let equals = map.every((e, i, a) => e === a[0]);
        return (notNull && equals);
    }).shift() || [];
}

/**
 * Check if draw on current board state
 */
export function checkDraw(cells: String[][] = []): Boolean {
    return (cells.filter(row => row.filter(square => square !== "").length === row.length).length === cells.length);
}