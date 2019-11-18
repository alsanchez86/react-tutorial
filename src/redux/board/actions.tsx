// Import types
import { Action } from "./types";

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
    async (dispatch: Function) => {
        const response = await fetch("http://localhost:8080/saved.json");
        const data = await response.json();
        return dispatch({
            type: "LOAD_GAME",
            value: data
        });
    }
);


/**
 * Action for save game board state on localStorage
 *
 * @return {Action}
 */
export const saveGame = (): Function => (
    async (dispatch: Function) => {
        const response = await fetch("http://localhost:8080/saved.json");
        const data = await response.json();
        return dispatch({
            type: "SAVE_GAME",
            value: data
        });
    }
);