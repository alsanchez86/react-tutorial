export interface BoardState {
    cells: String[][];
    winner: Number[];
    history: String[][][];
    draw: Boolean;
    step: Number;
}

export interface Action {
    type: String;
    value: any;
}