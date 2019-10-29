// Import types
import {
    BoardState,
    Action
} from "./types";

// Import default values
import {
    boardStateCells,
    boardStateWinner,
    boardStateHistory,
    boardStateDraw,
    boardStateStep,
    boardStateXIsNext,
    actionType,
    actionValue
} from "./default";

/**
 * Get initial reducer state
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
        cells: boardStateCells,
        winner: boardStateWinner,
        history: boardStateHistory,
        draw: boardStateDraw,
        step: boardStateStep,
        xIsNext: boardStateXIsNext
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
 * @param {string[][]} [cells=boardStateCells]
 * @returns {number[]}
 */
export function checkWinnerCombination(
    cells: string[][] = boardStateCells
): number[] {

    const concatCells: string[] = cells.reduce((ant: string[], act: string[]) => ant.concat(act));

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
        let map: string[] = e.map((a: number) => concatCells[a]);
        let notNull: boolean = (map.indexOf("") === -1);
        let equals: boolean = map.every((e: string, i: number, a: string[]) => e === a[0]);
        return (notNull && equals);
    }).shift() || [];
}

/**
 * Check if draw on current board state
 *
 * @export
 * @param {string[][]} [cells=boardStateCells]
 * @returns {boolean}
 */
export function checkDraw(
    cells: string[][] = boardStateCells
): boolean {

    return (cells.filter((row: string[]) => row.filter((square: string) => square !== "").length === row.length).length === cells.length);
}

/**
 * Check if a square is empty (=== "")
 *
 * @export
 * @param {Action} [action={type: actionType, value: actionValue}]
 * @param {BoardState} [state=generateState()]
 * @returns {boolean}
 */
export function emptySquare(
    action: Action = {
        type: actionType,
        value: actionValue
    },
    state: BoardState = generateState()
): boolean {

    let actionRow: number = action.value.row;
    let actionColumn: number = action.value.column;
    let cells: string[][] = state.cells;

    return (((cells.filter((e: string[], i: number) => (actionRow === i)).shift() || []).filter((e: string, i: number) => (actionColumn === i)).shift()) === "");
}