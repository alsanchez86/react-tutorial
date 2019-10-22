// Import types
import { BoardState, Action } from "./types";
// Import utils
import { generateState, checkWinnerCombination, checkDraw } from "./utils";

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
            let cells = state.cells.map((row, i) => row.map((square: String, o: Number) => square = (square !== "") ? square : (((action.value.row === i) && (action.value.column === o)) ? action.value.mark : "")));
            let winner = checkWinnerCombination(cells);
            let draw = (checkDraw(cells) && (winner.length === 0));
            let history = state.history;
            let step = +state.step + 1;

            history.push([...cells]);
            return generateState({
                cells: cells,
                winner: winner,
                history: history,
                draw: draw,
                step: step
            });

        // Jump to another cells state saved on history array
        case "JUMP":
            return generateState({
                cells: state.history[action.value.index],
                winner: state.winner,
                history: state.history,
                draw: state.draw,
                step: action.value.index
            });

        // Restart state
        case "RESTART_BOARD":
            return generateState();

        // Default
        default:
            return state;
    }
}