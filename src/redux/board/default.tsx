// Import types
import {
    cells,
    winner,
    history,
    draw,
    step,
    xIsNext,
    type,
    value
} from "./types";

// Interface: BoardState
export const boardStateCells: cells = Array(3).fill(Array(3).fill(""));
export const boardStateWinner: winner = [];
export const boardStateHistory: history = [];
export const boardStateDraw: draw = false;
export const boardStateStep: step = 0;
export const boardStateXIsNext: xIsNext = false;
// Interface: Action
export const actionType: type = "";
export const actionValue: value = {};