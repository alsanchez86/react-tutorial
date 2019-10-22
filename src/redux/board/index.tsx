// Import types
import { BoardState, JumpAction, MarkSquareAction, RestartBoardAction } from "./types";
// Import utils
import { generateState } from "./utils";

/**
 * Export reducer function
 * @param {object} state
 * @param {object} action
*/
// export default (state = new State(), {type, value}) => {
export default (state: BoardState = generateState(), action: JumpAction | MarkSquareAction | RestartBoardAction): BoardState => {
    switch(action.type){
        // Mark a square and return the new state
        // case "MARK_SQUARE":
            // const cells = state.cells.map((row, i) => row.map((square: String, o: Number) => square = (square !== "") ? square : (((action.value.row === i) && (action.value.column === o)) ? action.value.mark : "")));
            // const winner = checkWinnerCombination(cells);
            // const draw = (checkDraw(cells) && (winner.length === 0));
            // state.history.push([...cells]);
            // return initialState(cells, winner, state.history, draw, ++state.step);
            // break;

        // Jump to another cells state saved on history array
        // case "JUMP":
            // return initialState(state.history[action.value.index], state.winner, state.history, state.draw, action.value.index);
            // break;

        // Restart state
        case "RESTART_BOARD":
            return generateState();

        // Default
        default:
            return state;
    }
}