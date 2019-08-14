export interface BoardState {
    cells: String[][];
    winner: String[];
    history: String[][][];
    draw: Boolean;
    step: Number;
}

interface Action {
    type: String;
    value: Object;
}

export interface JumpAction extends Action {

}

export interface MarkSquareAction extends Action {

}

export interface RestartBoardAction extends Action {

}
