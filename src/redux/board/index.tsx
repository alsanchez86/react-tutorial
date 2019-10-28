// Import types
import { BoardState, Action } from "./types";
// Import utils
import { generateState, checkWinnerCombination, checkDraw, checkIfEmptySquare } from "./utils";

/**
 * Export reducer function
 * @param {object} state
 * @param {object} action
*/
// export default (state = new State(), {type, value}) => {
export default (state: BoardState = generateState(), action: Action): BoardState => {
    switch(action.type){
        // Mark a square and return the new state
        case "MARK_SQUARE":
            const actionRow: number = action.value.row;
            const actionColumn: number = action.value.column;
            const actionMark: string = action.value.mark;
            const isEmpty: boolean = checkIfEmptySquare(state.cells, actionRow, actionColumn);

            if (!isEmpty){
                // Square is not empty. Return the same state
                return generateState({
                    cells: state.cells,
                    winner: state.winner,
                    history: state.history,
                    draw: state.draw,
                    step: state.step,
                    xIsNext: state.xIsNext
                });
            }

            let cells: string[][] = state.cells.map((row: string[], i: number) => row.map((square: string, o: number) => square = (square !== "") ? square : (((actionRow === i) && (actionColumn === o)) ? actionMark : "")));
            let winner: number[] = checkWinnerCombination(cells);
            let draw: boolean = (checkDraw(cells) && (winner.length === 0));
            let history: string[][][] = state.history;
            let step: number = +state.step + 1;
            let xIsNext: boolean = (actionMark === "O");

            history.push([...cells]);

            return generateState({
                cells: cells,
                winner: winner,
                history: history,
                draw: draw,
                step: step,
                xIsNext: xIsNext
            });

        // Jump to another cells state saved on history array
        case "JUMP":
            return generateState({
                cells: state.history[action.value.index],
                winner: state.winner,
                history: state.history,
                draw: state.draw,
                step: action.value.index,
                xIsNext: state.xIsNext
            });

        // Restart state
        case "RESTART_BOARD":
            return generateState();

        // Default
        default:
            return state;
    }
}
