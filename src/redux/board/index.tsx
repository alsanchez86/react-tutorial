// Import types
import {
    BoardState,
    Action
} from "./types";
// Import board utils
import {
    generateState,
    checkWinnerCombination,
    checkDraw,
    emptySquare
} from "./utils";
// Import utils
import { get } from "../../utils";

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
    let actionRow: number = get(action, "value.row");
    let actionColumn: number = get(action, "value.column");
    let actionMark: string = get(action, "value.mark");
    let cells: string[][] = get(state, "cells", [[]]);
    let winner: number[];
    let draw: boolean;
    let history: string[][][];
    let step: number;
    let xIsNext: boolean;

    if (emptySquare(cells, actionRow, actionColumn)) {
        cells = cells.map((row: string[], i: number) => row.map((square: string, o: number) => square = (square !== "") ? square : (((actionRow === i) && (actionColumn === o)) ? actionMark : "")));
        winner = checkWinnerCombination(cells);
        draw = (checkDraw(cells) && (get(winner, "length") === 0));
        history = get(state, "history", [[[]]]);
        step = +get(state, "step") + 1;
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
            cells: get(state, "cells"),
            winner: get(state, "winner"),
            history: get(state, "history"),
            draw: get(state, "draw"),
            step: get(state, "step"),
            xIsNext: get(state, "xIsNext")
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
        cells: get(state, "history[" + get(action, "value.index", 0) + "]", Array(3).fill(Array(3).fill(""))),
        winner: get(state, "winner"),
        history: get(state, "history"),
        draw: get(state, "draw"),
        step: get(action, "value.index"),
        xIsNext: get(state, "xIsNext")
    });
}