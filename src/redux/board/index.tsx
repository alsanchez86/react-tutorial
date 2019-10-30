// Import types
import { BoardState, Action } from "./types";
// Import board utils
import { generateState, checkWinnerCombination, checkDraw, emptySquare } from "./utils";

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
            return markSquare(state, action);

        case "JUMP":
            return jump(state, action);

        case "RESTART_BOARD":
            return generateState();

        case "LOAD_GAME":
            return loadGame(action);

        default:
            return state;
    }
}

/**
 * Mark a square and return the new state
 *
 * @param {BoardState} state
 * @param {Action} action
 * @returns {BoardState}
 */
function markSquare(
    state: BoardState,
    action: Action
): BoardState {
    return emptySquare(state, action) ? markEmptySquare(state, action) : generateState({
        cells: state.cells,
        winner: state.winner,
        history: state.history,
        draw: state.draw,
        step: state.step,
        xIsNext: state.xIsNext
    });
}

/**
 *
 *
 * @param {BoardState} state
 * @param {Action} action
 * @returns {BoardState}
 */
function markEmptySquare(
    state: BoardState,
    action: Action
): BoardState {
    let actionRow = action.value.row;
    let actionColumn = action.value.column;
    let actionMark = action.value.mark;
    let cells = state.cells.map((row, i) => row.map((square, o) => square = (square !== "") ? square : (((actionRow === i) && (actionColumn === o)) ? actionMark : "")));
    let winner = checkWinnerCombination(cells);
    let draw = (checkDraw(cells) && winner.length === 0);
    let history = state.history;
    let step = +state.step + 1;
    let xIsNext = (actionMark === "O");

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
}

/**
 * Jump to another cells state saved on history array
 *
 * @param {BoardState} state
 * @param {Action} action
 * @returns {BoardState}
 */
function jump(
    state: BoardState,
    action: Action
): BoardState {
    return generateState({
        cells: state.history[action.value.index],
        winner: state.winner,
        history: state.history,
        draw: state.draw,
        step: action.value.index,
        xIsNext: state.xIsNext
    });
}

function loadGame(
    action: Action
): BoardState {
    return generateState({
        cells: action.value.cells,
        winner: action.value.winner,
        history: action.value.history,
        draw: action.value.draw,
        step: action.value.step,
        xIsNext: action.value.xIsNext
    });
}