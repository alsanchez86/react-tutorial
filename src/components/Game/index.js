// Import React library
import React, { Component } from "react";
// Import react redux
import { connect } from "react-redux";
// Import redux actions
import { restartBoard } from "../../redux/actions/restartBoard";
import { jump } from "../../redux/actions/jump";
// Import Jsx template
import GameJsx from "./templates/Game";

/**
 * Root React App Component
 *
 * @export
 * @class Game
 * @extends {Component}
 */
class Game extends Component {
    /**
     * Get the next player mark
     *
     * @param {boolean} xIsNext
     * @returns {string}
     * @memberof Game
     */
    getNextMark(xIsNext = false) {
        return xIsNext ? "X" : "O";
    }

    /**
     *
     *
     * @param {number} [i=0]
     * @returns {string}
     * @memberof Game
     */
    getButtonColor(i = "") {
        return ((this.props.history.length - 1) === i) ? "success" : "secondary";
    }

    /**
     *
     *
     * @returns
     * @memberof Game
     */
    checkDraw(){
        return (this.props.cells.filter(row => row.filter(square => square !== "").length === row.length).length === this.props.cells.length);
    }

    /**
     *
     *
     * @returns
     * @memberof Game
     */
    render() {
        const won = (this.props.winner !== "");
        const draw = this.checkDraw() && !won;
        const status = draw ? "Draw" : (won ? ('Winner: ' + this.props.winner) : ('Next player: ' + this.getNextMark(this.props.xIsNext)));

        return (
            <GameJsx
                draw={draw}
                won={won}
                status={status}
                restartClick={() => this.props.restart()}
                history={this.props.history}
                getButtonColor={(i) => this.getButtonColor(i)}
                jump={(i) => this.props.jump(i)}
            />
        );
    }
}

export default connect(
    // mapStateToProps
    state => ({
        cells: state.board.cells,
        winner: state.board.winner,
        history: state.board.history,
        xIsNext: state.xIsNext
    }),
    // mapDispatchToProps
    dispatch => ({
        restart: () => dispatch(restartBoard()),
        jump: (i) => dispatch(jump(i))
    })
)(Game);