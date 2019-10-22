export interface BoardState {
    cells: String[][];
    winner: Number[];
    history: String[][][];
    draw: Boolean;
    step: Number;
}

export interface JumpAction {
    type: String;
    value: any;
}

export interface MarkSquareAction {
    type: String;
    value: any;
}

export interface RestartBoardAction {
    type: String;
    value: any;
}
