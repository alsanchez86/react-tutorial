// Import types
import { BoardState, Action } from "./types";

/**
 * Action to change state to another saved on history (board reducer)
 *
 * @param {number} index
 * @return {Action}
 */
export const jump = (index: number = 0): Action => ({
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
 * @return {Action}
 */
export const markSquare = (row: number = 0, column: number = 0, mark: string = "X"): Action => ({
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
 * @return {Action}
 */
export const restartBoard = (): Action => ({
    type: "RESTART_BOARD",
    value: {}
});

/**
 * https://github.com/reduxjs/redux-thunk
 * https://daveceddia.com/what-is-a-thunk/
 * https://redux.js.org/advanced/async-actions
 *
 * @return {Function}
 */
export const loadGame = (): Function => (
    (dispatch: Function) => {
        fetch("http://localhost:8080/saved.json")
            .then(response => response.json())
            .then(
                data => dispatch({
                    type: "LOAD_GAME",
                    value: data
                }),
                // (error) => dispatch(apologize(error)),
            )
    }
);
