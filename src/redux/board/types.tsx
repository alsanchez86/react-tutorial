/**
 *
 *
 * @export
 * @interface BoardState
 */
export interface BoardState {
    cells: string[][];
    winner: number[];
    history: string[][][];
    draw: boolean;
    step: number;
    xIsNext: boolean;
}

/**
 *
 *
 * @export
 * @interface Action
 */
export interface Action {
    type: string;
    value: any;
}