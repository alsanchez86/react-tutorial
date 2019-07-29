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
function State(cells = Array(3).fill(Array(3).fill("")), winner = ""){
    this.cells = cells;
    this.winner = winner;
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

export default (state = new State(), {type, value}) => {
    switch(type){
        case "MARK_SQUARE":
            const cells = state.cells.map((row, i) => row.map((square, o) => square = (square !== "") ? square : (((value.row === i) && (value.column === o)) ? value.mark : "")));
            const winner = checkWinner(cells);
            return new State(cells, winner);
        case "RESTART_BOARD":
            return new State();
        default:
            return state;
    }
};

/**
     * Handle click on square component
     * TODO: Ver si este método nos lo podemos llevar al componente Square para no tener que ir propagándolo componente a componente en la jerarquía.
     *
     * @param {number} i
     * @memberof Game
     */
    // squareClick(i = 0) {
        // const notWinnerYet = (this.props.squares.filter(e => e === "").length > 0) && (this.state.winner === "");
        // const notOcupped = (this.props.squares[i] === "");
        // const notDisabled = !this.props.disabled;
        // let squares;
        // let winner;
        // let state;

        // if (notDisabled && notOcupped && notWinnerYet) {
            // squares = this.state.squares.map((e, j) => e = (e !== "") ? e : ((i === j) ? this.getNextMark(this.state.xIsNext) : ""));
            // winner = this.calculateWinner(squares);
            // state = new StateClass(squares, !this.state.xIsNext, winner);
            // if (this.history.get().length === 0) {
            //     this.history.add();
            // }
            // this.setState(state);
            // this.history.add(state);
        // }
    // }