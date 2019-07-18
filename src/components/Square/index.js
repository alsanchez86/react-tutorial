// Import React library
import React, { Component } from "react";
// Import react redux
import { connect } from "react-redux";
// Import redux actions
import { markSquare } from "../../redux/actions/markSquare";
// Import Jsx template
import SquareJsx from "./templates/Square";

/**
 *
 *
 * @export
 * @class Square
 * @extends {Component}
 */
class Square extends Component {
    /**
     * Handle click on square component
     *
     * @param {number} [i=0]
     * @memberof Square
     */
    // TODO: esto va al reducer
    // onClick(i = 0) {
    //     const notWinnerYet = (this.props.squares.filter(e => e === "").length > 0) && (this.state.winner === "");
    //     const notOcupped = (this.props.squares[i] === "");
    //     const notDisabled = !this.props.disabled;
    //     let squares;
    //     let winner;
    //     let state;

    //     if (notDisabled && notOcupped && notWinnerYet) {
    //         squares = this.state.squares.map((e, j) => e = (e !== "") ? e : ((i === j) ? this.getNextMark(this.state.xIsNext) : ""));
    //         winner = this.calculateWinner(squares);
    //         state = new StateClass(squares, !this.state.xIsNext, winner);
    //         if (this.history.get().length === 0) {
    //             this.history.add();
    //         }
    //         this.setState(state);
    //         this.history.add(state);
    //     }
    // }

    /**
     *
     *
     * @returns
     * @memberof Square
     */
    render() {
        return (
            <SquareJsx
                index={this.props.index}
                value={this.props.value}
                onClick={(i) => this.props.onClick(i)}
            />
        );
    }
}

export default connect(
    // mapStateToProps
    state => ({
    //     squares: state.squares,
    //     xIsNext: state.xIsNext,
    //     winner: state.winner,
    //     disabled: state.disabled
    }),
    // mapDispatchToProps
    dispatch => ({
        onClick: (i) => dispatch(markSquare(i))
    })
)(Square);