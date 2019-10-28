// Import types
import {
    BoardState,
    Action
} from "./types";
// Import utils
import {
    generateState,
    checkWinnerCombination,
    checkDraw,
    emptySquare
} from "./utils";

/**
 * Export reducer function
 *
 * @param {BoardState} state
 * @param {Action} action
 * @returns {BoardState}
 */
export default (state: BoardState = generateState(), action: Action): BoardState => {
    switch (action.type) {
        case "MARK_SQUARE":
            return markSquare(action, state);

        case "JUMP":
            return jump(action, state);

        case "RESTART_BOARD":
            return generateState();

        default:
            return state;
    }
}

/**
 * Mark a square and return the new state
 *
 * @param {Action} action
 * @param {BoardState} state
 * @returns {BoardState}
 */
function markSquare(action: Action, state: BoardState): BoardState {
    let actionRow: number = action.value.row;
    let actionColumn: number = action.value.column;
    let actionMark: string;
    let cells: string[][];
    let winner: number[];
    let draw: boolean;
    let history: string[][][];
    let step: number;
    let xIsNext: boolean;

    if (emptySquare(state.cells, actionRow, actionColumn)) {
        actionMark = action.value.mark;
        cells = state.cells.map((row: string[], i: number) => row.map((square: string, o: number) => square = (square !== "") ? square : (((actionRow === i) && (actionColumn === o)) ? actionMark : "")));
        winner = checkWinnerCombination(cells);
        draw = (checkDraw(cells) && (winner.length === 0));
        history = state.history;
        step = +state.step + 1;
        xIsNext = (actionMark === "O");
        // Update history on new state
        history.push([...cells]);
        // Return new state after mark square
        return generateState({
            cells: cells,
            winner: winner,
            history: history,
            draw: draw,
            step: step,
            xIsNext: xIsNext
        });
    } else {
        // Square is not empty. Return the same state
        return generateState({
            cells: state.cells,
            winner: state.winner,
            history: state.history,
            draw: state.draw,
            step: state.step,
            xIsNext: state.xIsNext
        });
    }
}

/**
 * Jump to another cells state saved on history array
 *
 * @param {Action} action
 * @param {BoardState} state
 * @returns {BoardState}
 */
function jump(action: Action, state: BoardState): BoardState {
    return generateState({
        cells: state.history[action.value.index],
        winner: state.winner,
        history: state.history,
        draw: state.draw,
        step: action.value.index,
        xIsNext: state.xIsNext
    });
}