// Import types
import {
    BoardState,
    Action
} from "./types";
// Import defaults
import {
    actionType,
    actionValue,
    boardStateCells
} from "./default";
// Import board utils
import {
    generateState,
    checkWinnerCombination,
    checkDraw,
    emptySquare
} from "./utils";
// Import utils
import {
    get
} from "../../utils";

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
function markSquare(
    action: Action = {type: actionType, value: actionValue},
    state: BoardState = generateState()
): BoardState {

    return (emptySquare(action, state)) ? markEmptySquare(action, state) : generateState({
        cells: get(state, "cells"),
        winner: get(state, "winner"),
        history: get(state, "history"),
        draw: get(state, "draw"),
        step: get(state, "step"),
        xIsNext: get(state, "xIsNext")
    });
}

/**
 *
 *
 * @param {BoardState} [state=generateState()]
 * @param {number} [actionRow=0]
 * @param {number} [actionColumn=0]
 * @param {string} [actionMark="X"]
 * @param {string[][]} [cells=boardStateCells]
 * @returns {BoardState}
 */
function markEmptySquare(
    action: Action = {type: actionType, value: actionValue},
    state: BoardState = generateState()
): BoardState {

    let actionRow: number = get(action, "value.row");
    let actionColumn: number = get(action, "value.column");
    let actionMark: string = get(action, "value.mark");
    let cells: string[][] = get(state, "cells", [[]]).map((row: string[], i: number) => row.map((square: string, o: number) => square = (square !== "") ? square : (((actionRow === i) && (actionColumn === o)) ? actionMark : "")));
    let winner: number[] = checkWinnerCombination(cells);
    let draw: boolean = (checkDraw(cells) && (get(winner, "length") === 0));
    let history: string[][][] = get(state, "history", [
        [
            []
        ]
    ]);
    let step: number = +get(state, "step") + 1;
    let xIsNext: boolean = (actionMark === "O");

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
    action: Action = {type: actionType, value: actionValue},
    state: BoardState = generateState()
): BoardState {

    return generateState({
        cells: get(state, "history[" + get(action, "value.index", 0) + "]", Array(3).fill(Array(3).fill(""))),
        winner: get(state, "winner"),
        history: get(state, "history"),
        draw: get(state, "draw"),
        step: get(action, "value.index"),
        xIsNext: get(state, "xIsNext")
    });
}