import { Map } from "immutable";

/**
 * [
 *   [0, 1, 2],
 *   [3, 4, 5],
 *   [6, 7, 8]
 * ]
 * @param {string} [cells=Array(3).fill(Array(3).fill(""))] Current state of cells on board
 * @param {array} [winner=[]] winner combination
 * @param {boolean} [draw=false] true when game end on draw
 * @param {array} [history=[]] Cells states pushed on history array
 * @param {number} [step=0] Current step of the game. Max 9
 */
function State(cells = Array(3).fill(Array(3).fill("")), winner = [], draw = false, history = [], step = 0){
    this.cells = cells;
    this.winner = winner;
    this.draw = draw;
    this.step = step;
    this.history = history;
}

/**
 * Calculate if there is a winner combination on current board state
 * Returns the symbol of the winner or a empty string
 * TODO: Retornar, además del símbolo del ganador, la fila ganadora para poder iluminarla en la UI
 * @returns {string}
 */
function checkWinnerCombination(cells = []){
    const concatCells = cells.reduce((ant, act) => ant.concat(act));
    return [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ].filter(e => {
        let map = e.map(a => concatCells[a]);
        let notNull = (map.indexOf("") === -1);
        let equals = map.every((e, i, a) => e === a[0]);
        return (notNull && equals);
    }).shift() || [];
}

/**
 * Check if draw on current board state
 * @returns {boolean}
 */
function checkDraw(cells = []){
    return (cells.filter(row => row.filter(square => square !== "").length === row.length).length === cells.length);
}

/**
 * Export reducer function
 * @param {Immutable.Map} state
 * @param {object} action
*/
export default (state = Map(new State()), {type, value}) => {
    switch(type){
        // Mark a square and return the new state
        case "MARK_SQUARE":
            const cells = state.get("cells").map((row, i) => row.map((square, o) => square = (square !== "") ? square : (((value.row === i) && (value.column === o)) ? value.mark : "")));
            const winner = checkWinnerCombination(cells);
            const draw = (checkDraw(cells) && (winner.length === 0));
            return state
                .update("cells", () => cells)
                .update("winner", () => winner)
                .update("draw", () => draw)
                .update("step", step => ++step)
                .update("history", history => {
                    history.push([...cells]);
                    return history;
                });

        // Jump to another cells state saved on history array
        case "JUMP":
            return state
                .update("cells", () => state.get("history")[value.index])
                .update("step", () => value.index);

        // Restart state
        case "RESTART_BOARD":
            return Map(new State());

        // Default
        default:
            return state;
    }
}