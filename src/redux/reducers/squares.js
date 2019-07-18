export default (state = Array(9).fill(""), {type, value}) => {
    switch(type){
        case "MARK_SQUARE":
            return state.map((e, j) => e = (e !== "") ? e : ((value.index === j) ? value.mark : ""));
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