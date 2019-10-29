// Import types
import {
    BoardState,
    Action
} from "./types";

/**
 * Generate state
 *
 * @export
 * @param {BoardState} [state={
 *         cells: Array(3).fill(Array(3).fill("")),
 *         winner: [],
 *         history: [],
 *         draw: false,
 *         step: 0,
 *         xIsNext: false
 *     }]
 * @returns {BoardState}
 */
export function generateState(
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
 *
 * @export
 * @param {string[][]} cells
 * @returns {number[]}
 */
export function checkWinnerCombination(
    cells: string[][]
): number[] {
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
    ].filter((e: number[]) => {
        let map = e.map(a => concatCells[a]);
        let notNull = (map.indexOf("") === -1);
        let equals = map.every((e, i, a) => e === a[0]);
        return (notNull && equals);
    }).shift() || [];
}

/**
 * Check if draw on current board state
 *
 * @export
 * @param {string[][]} cells
 * @returns {boolean}
 */
export function checkDraw(
    cells: string[][]
): boolean {
    return (cells.filter(row => row.filter(square => square !== "").length === row.length).length === cells.length);
}

/**
 * Check if a square is empty (=== "")
 *
 * @export
 * @param {BoardState} state
 * @param {Action} action
 * @returns {boolean}
 */
export function emptySquare(
    state: BoardState,
    action: Action
): boolean {
    return (((state.cells.filter((e, i) => (action.value.row === i)).shift() || []).filter((e, i) => (action.value.column === i)).shift()) === "");
}