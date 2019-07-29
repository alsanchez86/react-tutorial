/**
 * [
 *   [0, 1, 2],
 *   [3, 4, 5],
 *   [6, 7, 8]
 * ]
 *
 * @param {string} [cells=Array(3).fill(Array(3).fill(""))]
 * @param {string} [winner=""]
 */
function State(cells = Array(3).fill(Array(3).fill("")), winner = "", draw = false, history = [], step = 0){
    this.cells = cells;
    this.winner = winner;
    this.draw = draw;
    this.history = history;
    this.step = step;
}

/**
 * Calculate if there is a winner combination on current squares state
 *
 * @returns {string}
 */
function checkWinner(cells = []){
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
    }).map(e => e.map(a => concatCells[a]).reduce(e => e))[0] || "";
}

/**
 *
 *
 * @returns
 * @memberof Game
 */
function checkDraw(cells = []){
    return (cells.filter(row => row.filter(square => square !== "").length === row.length).length === cells.length);
}

export default (state = new State(), {type, value}) => {
    switch(type){
        case "MARK_SQUARE":
            const cells = state.cells.map((row, i) => row.map((square, o) => square = (square !== "") ? square : (((value.row === i) && (value.column === o)) ? value.mark : "")));
            const winner = checkWinner(cells);
            const draw = (checkDraw(cells) && (winner === ""));
            state.history.push([...cells]);
            return new State(cells, winner, draw, state.history, state.history.length);

        case "JUMP":
            return new State(state.history[value.index], state.winner, state.draw, state.history, value.index);

        case "RESTART_BOARD":
                return new State();

        default:
            return state;
    }
}