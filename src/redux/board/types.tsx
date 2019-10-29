// BoardState interface
export interface BoardState {
    cells: string[][];
    winner: number[];
    history: string[][][];
    draw: boolean;
    step: number;
    xIsNext: boolean;
}

// Action interface
export interface Action {
    type: string;
    value: any;
}