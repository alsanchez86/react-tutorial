import { JumpAction, MarkSquareAction, RestartBoardAction } from "./types";

/**
 * Action to change state to another saved on history (board reducer)
 * @param {number} index
 * @return {object}
 */
export const jump = (index: Number = 0): JumpAction => ({
    type: "JUMP",
    value: {
        index
    }
});

/**
 * Action to change state to another saved on history (board reducer)
 * @param {number} row
 * @param {number} column
 * @param {string} mark
 * @return {object}
 */
export const markSquare = (row: Number = 0, column: Number = 0, mark: String = "X"): MarkSquareAction => ({
    type: "MARK_SQUARE",
    value: {
        row,
        column,
        mark
    }
});

/**
 * Action for reset board state
 * @return {object}
 */
export const restartBoard = (): RestartBoardAction => ({
    type: "RESTART_BOARD",
    value: {}
});