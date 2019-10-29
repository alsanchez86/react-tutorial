// BoardState types interface
export type cells = string[][];
export type winner = number[];
export type history = string[][][];
export type draw = boolean;
export type step = number;
export type xIsNext = boolean;

export interface BoardState {
    cells: cells;
    winner: winner;
    history: history;
    draw: draw;
    step: step;
    xIsNext: xIsNext;
}

// Action types interface
export type type = string;
export type value = any;

export interface Action {
    type: type;
    value: value;
}