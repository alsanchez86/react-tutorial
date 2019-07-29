// Import React library
import React, { Component } from "react";
// Import react redux
import { connect } from "react-redux";
// Import redux actions
import { restartBoard } from "../../redux/actions/restartBoard";
// import { toggleDisabled } from "../../redux/actions/toggleDisabled";
// Import classes used on Game component
// import StateClass from "./class/StateClass";
// import GameHistoryClass from "./class/GameHistoryClass";
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
     * Set a StateClass existing on history private array
     *
     * @param {string} [id=""]
     * @memberof Game
     */
    jumpTo(id = "") {
        // this.disabled = (this.history.getLastHistoryId() !== id);
        // this.setState(this.history.get().filter(e => id === e.id)[0].state);
    }

    /**
     * Restart game (all private neccesary properties)
     *
     * @memberof Game
     */
    restart() {
        // this.disabled = false;
        // this.history.clean();
        // this.setState(new StateClass());
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
                // jumpTo={(id) => this.jumpTo(id)}
                // disableClick={() => this.props.disableGame()}
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
        restart: () => dispatch(restartBoard())
        // disableGame: () => dispatch(toggleDisabled())
    })
)(Game);