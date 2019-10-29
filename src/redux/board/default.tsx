// Interface: BoardState
export const boardStateCells: string[][] = Array(3).fill(Array(3).fill(""));
export const boardStateWinner: number[] = [];
export const boardStateHistory: string[][][] = [];
export const boardStateDraw: boolean = false;
export const boardStateStep: number = 0;
export const boardStateXIsNext: boolean = false;
// Interface: Action
export const actionType: string = "";
export const actionValue: object = {};