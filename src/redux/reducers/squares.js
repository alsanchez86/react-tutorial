/**
 * [
 *   [0, 1, 2],
 *   [3, 4, 5],
 *   [6, 7, 8]
 * ]
 *
 * @param {number} [rows=0]
 * @param {number} [columns=0]
 * @returns {array}
 */
function initState(rows = 0, columns = 0){
    return Array(rows).fill(Array(columns).fill(""));
}

export default (state = initState(3, 3), {type, value}) => {
    switch(type){
        case "MARK_SQUARE":
            return state.map((row, i) => row.map((square, o) => square = (square !== "") ? square : (((value.row === i) && (value.column === o)) ? value.mark : "")));
        default:
            console.log(state);
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