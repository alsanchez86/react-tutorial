// Import React library
import React, { Component } from "react";
// Import react redux
import { connect } from "react-redux";
// Import redux actions
import { toggleDisabled } from "../../redux/actions/toggleDisabled";
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
     * Creates an instance of Game
     *
     * @param {object} p
     * @memberof Game
     */
    // constructor(p) {
    //     super(p);
    //     // this.state = new StateClass();
    //     // this.history = new GameHistoryClass();
    //     // this.disabled = false;
    // }

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
    getButtonColor(id = "") {
        // return (this.history.getLastHistoryId() === id) ? "success" : "secondary";
        return "secondary";
    }

    checkDraw(){
        return (this.props.board.filter(row => row.filter(square => square !== "").length === row.length).length === this.props.board.length);
    }

    /**
     * Calculate if there is a winner combination on current squares state
     *
     * @returns {string}
     */
    checkWinner(){
        const squares = this.props.board.reduce((ant, act) => ant.concat(act));
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
        const winner = this.checkWinner();
        const won = (winner !== "");
        const draw = this.checkDraw() && !won;
        const status = draw ? "Draw" : (won ? ('Winner: ' + winner) : ('Next player: ' + this.getNextMark(this.props.xIsNext)));

        return (
            <GameJsx
                draw={draw}
                won={won}
                status={status}
                // resetButtonClick={() => this.restart()}
                // history={this.history.get()}
                // getButtonColor={(id) => this.getButtonColor(id)}
                // jumpTo={(id) => this.jumpTo(id)}
                disableClick={() => this.props.disableGame()}
            />
        );
    }
}

export default connect(
    // mapStateToProps
    state => ({
        board: state.board,
        xIsNext: state.xIsNext
    }),
    // mapDispatchToProps
    dispatch => ({
        disableGame: () => dispatch(toggleDisabled())
    })
)(Game);