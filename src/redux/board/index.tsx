// Import types
import {
    cells,
    winner,
    history,
    draw,
    step,
    xIsNext,
    type,
    value,
    BoardState,
    Action
} from "./types";

// Import defaults
import {
    actionType,
    actionValue
} from "./default";

// Import board utils
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
export default (state: BoardState = generateState(), action: Action = {type: actionType, value: actionValue}): BoardState => {
    switch (action.type) {
        case "MARK_SQUARE":
            return markSquare(state, action);

        case "JUMP":
            return jump(state, action);

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
function markSquare(
    state: BoardState = generateState(),
    action: Action = {type: actionType, value: actionValue}
): BoardState {
    return (emptySquare(action, state)) ? markEmptySquare(state, action) : generateState({
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
 * @param {Action} [action={type: actionType, value: actionValue}]
 * @param {BoardState} [state=generateState()]
 * @returns {BoardState}
 */
function markEmptySquare(
    state: BoardState = generateState(),
    action: Action = {type: actionType, value: actionValue}
): BoardState {

    let actionRow: number = action.value.row;
    let actionColumn: number = action.value.column;
    let actionMark: string = action.value.mark;
    let cells: cells = state.cells.map((row: string[], i: number) => row.map((square: string, o: number) => square = (square !== "") ? square : (((actionRow === i) && (actionColumn === o)) ? actionMark : "")));
    let winner: winner = checkWinnerCombination(cells);
    let draw: draw = (checkDraw(cells) && winner.length === 0);
    let history: history = state.history;
    let step: step = +state.step + 1;
    let xIsNext: xIsNext = (actionMark === "O");

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
 * @param {Action} action
 * @param {BoardState} state
 * @returns {BoardState}
 */
function jump(
    state: BoardState = generateState(),
    action: Action = {type: actionType, value: actionValue}
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