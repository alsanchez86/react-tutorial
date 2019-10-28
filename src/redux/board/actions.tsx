// Import types
import { Action } from "./types";

/**
 * Action to change state to another saved on history (board reducer)
 *
 * @param {number} index
 * @return {object}
 */
export const jump: Function = (index: number = 0): Action => ({
    type: "JUMP",
    value: {
        index
    }
});

/**
 * Action to change state to another saved on history (board reducer)
 *
 * @param {number} row
 * @param {number} column
 * @param {string} mark
 * @return {object}
 */
export const markSquare: Function = (row: number = 0, column: number = 0, mark: string = "X"): Action => ({
    type: "MARK_SQUARE",
    value: {
        row,
        column,
        mark
    }
});

/**
 * Action for reset board state
 *
 * @return {object}
 */
export const restartBoard: Function = (): Action => ({
    type: "RESTART_BOARD",
    value: {}
});