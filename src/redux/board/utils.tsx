// Import types
import { BoardState } from "./types";
// Import default values
import { defaultCells, defaultWinner, defaultHistory, defaultDraw, defaultStep, defaultXIsNext } from "./default";
// Import utils
import { get } from "../../utils";

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
export function generateState (
    state: BoardState = {
        cells: defaultCells,
        winner: defaultWinner,
        history: defaultHistory,
        draw: defaultDraw,
        step: defaultStep,
        xIsNext: defaultXIsNext
    }
): BoardState {
    return {
        cells: get(state, "cells", defaultCells),
        winner: get(state, "winner", defaultWinner),
        history: get(state, "history", defaultHistory),
        draw: get(state, "draw", defaultDraw),
        step: get(state, "step", defaultStep),
        xIsNext: get(state, "xIsNext", defaultXIsNext)
    }
};

/**
 * Calculate if there is a winner combination on current board state
 * Returns the symbol of the winner or a empty string
 *
 * @export
 * @param {string[][]} [cells=[]]
 * @returns {number[]}
 */
export function checkWinnerCombination(cells: string[][] = defaultCells): number[] {
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
 * @param {string[][]} [cells=[]]
 * @returns {boolean}
 */
export function checkDraw(cells: string[][] = defaultCells): boolean {
    return (cells.filter((row: string[]) => row.filter((square: string) => square !== "").length === row.length).length === cells.length);
}

/**
 * Check if a square is empty (=== "")
 *
 * @export
 * @param {string[][]} [cells=defaultCells]
 * @param {number} [row=0]
 * @param {number} [column=0]
 * @returns {boolean}
 */
export function emptySquare(cells: string[][] = defaultCells, row: number = 0, column: number = 0): boolean{
    return (((cells
        .filter((e: string[], i: number) => (row === i))
        .shift() || [])
        .filter((e: string, i: number) => (column === i))
        .shift()) === "");
}