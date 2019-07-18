// Import React library
import React, { Component } from "react";
// Import react redux
import { connect } from "react-redux";
// Import redux actions
import { setDisabled } from "../../redux/actions/setDisabled"
// Import classes used on Game component
import StateClass from "./class/StateClass";
import GameHistoryClass from "./class/GameHistoryClass";
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
     * Creates an instance of Game
     *
     * @param {object} p
     * @memberof Game
     */
    constructor(p) {
        super(p);
        this.state = new StateClass();
        this.history = new GameHistoryClass();
        this.disabled = false;
    }

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
     * Handle click on square component
     * TODO: Ver si este método nos lo podemos llevar al componente Square para no tener que ir propagándolo componente a componente en la jerarquía.
     *
     * @param {number} i
     * @memberof Game
     */
    squareClick(i = 0) {
        const notWinnerYet = (this.state.squares.filter(e => e === "").length > 0) && (this.state.winner === "");
        const notOcupped = (this.state.squares[i] === "");
        const notDisabled = !this.disabled;
        let squares;
        let winner;
        let state;

        if (notDisabled && notOcupped && notWinnerYet) {
            squares = this.state.squares.map((e, j) => e = (e !== "") ? e : ((i === j) ? this.getNextMark(this.state.xIsNext) : ""));
            winner = this.calculateWinner(squares);
            state = new StateClass(squares, !this.state.xIsNext, winner);
            if (this.history.get().length === 0) {
                this.history.add();
            }
            this.setState(state);
            this.history.add(state);
        }
    }

    /**
     * Set a StateClass existing on history private array
     *
     * @param {string} [id=""]
     * @memberof Game
     */
    jumpTo(id = "") {
        this.disabled = (this.history.getLastHistoryId() !== id);
        this.setState(this.history.get().filter(e => id === e.id)[0].state);
    }

    /**
     * Restart game (all private neccesary properties)
     *
     * @memberof Game
     */
    restart() {
        this.disabled = false;
        this.history.clean();
        this.setState(new StateClass());
    }

    /**
     *
     *
     * @param {number} [i=0]
     * @returns {string}
     * @memberof Game
     */
    getButtonColor(id = "") {
        return (this.history.getLastHistoryId() === id) ? "success" : "secondary";
    }

    /**
     * Calculate if there is a winner combination on current squares state
     *
     * @param {Array} squares
     * @returns {String | Null}
     */
    calculateWinner(squares = []) {
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
            let map = e.map(a => squares[a]);
            let notNull = (map.indexOf("") === -1);
            let equals = map.every((e, i, a) => e === a[0]);
            return (notNull && equals);
        }).map(e => e.map(a => squares[a]).reduce(e => e))[0] || "";
    }

    /**
     *
     *
     * @returns
     * @memberof Game
     */
    render() {
        const draw = (this.state.squares.filter(e => e === "").length === 0) && (this.state.winner === "");
        const won = (this.state.winner !== "");
        const status = draw ? "Draw" : (won ? ('Winner: ' + this.state.winner) : ('Next player: ' + this.getNextMark(this.state.xIsNext)));

        return (
            <GameJsx
                draw={draw}
                won={won}
                status={status}
                squares={this.state.squares}
                disabled={this.props.disabled}
                squareClick={(i) => this.squareClick(i)}
                resetButtonClick={() => this.restart()}
                history={this.history.get()}
                getButtonColor={(id) => this.getButtonColor(id)}
                jumpTo={(id) => this.jumpTo(id)}
                onPruebaClick={() => this.props.onPruebaClick()}
            />
        );
    }
}

export default connect(
    // mapStateToProps
    state => ({
        disabled: state.disabled
    }),
    // mapDispatchToProps
    dispatch => ({
        onPruebaClick: () => dispatch(setDisabled(true))
    })
)(Game);