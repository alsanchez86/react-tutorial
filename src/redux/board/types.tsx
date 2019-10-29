/**
 *
 *
 * @export
 * @interface BoardState
 */
export interface BoardState {
    cells: string[][]; // const boardStateCells
    winner: number[]; // const boardStateWinner
    history: string[][][]; // const boardStateHistory
    draw: boolean; // const boardStateDraw
    step: number; // const boardStateStep
    xIsNext: boolean; // const boardStateXIsNext
}

/**
 *
 *
 * @export
 * @interface Action
 */
export interface Action {
    type: string; // const actionType
    value: any; // const actionValue
}