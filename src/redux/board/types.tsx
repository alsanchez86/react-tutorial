export interface BoardState {
    cells: String[][];
    winner: Number[];
    history: String[][][];
    draw: Boolean;
    step: Number;
    xIsNext: Boolean;
}

export interface Action {
    type: String;
    value: any;
}