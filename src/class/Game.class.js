// React
import React, { Component } from 'react';
// Class
import State from "./State.class";
import GameHistory from "./GameHistory.class";
// Component
import Board from "./Board.class";

/**
 * Root react component
 *
 * @class Game
 * @extends {Component}
 */
export default class Game extends Component {
    /**
     * Creates an instance of Game
     *
     * @param {Object} p
     * @memberof Game
     */
    constructor(p){
        super(p);
        this.state = new State();
        this.history = new GameHistory();
        this.disabled = false;
    }

    /**
     * Get the next player mark
     *
     * @param {Boolean} xIsNext
     * @returns {String}
     * @memberof Game
     */
    getNextMark(xIsNext = false){
        return xIsNext ? "X" : "O";
    }

    /**
     * Handle click on square component
     *
     * @param {Number} i
     * @memberof Game
     */
    handleClick(i = 0) {
        const notWinnerYet = (this.state.squares.filter(e => e === "").length > 0) && (this.state.winner === "");
        const notOcupped = (this.state.squares[i] === "");
        const notDisabled = !this.disabled;
        let squares;
        let winner;
        let state;

        if (notDisabled && notOcupped && notWinnerYet){
            squares = this.state.squares.map((e, j) => e = (e !== "") ? e : ((i === j) ? this.getNextMark(this.state.xIsNext) : ""));
            winner = calculateWinner(squares);
            state = new State(squares, !this.state.xIsNext, winner);
            if (this.history.get().length === 0){
                this.history.add();
            }
            this.setState(state);
            this.history.add(state);
        }
    }

    /**
     * Set a State existing on history private array
     *
     * @param {string} [id=""]
     * @memberof Game
     */
    jumpTo(id = ""){
        this.disabled = (this.history.getLastHistoryId() !== id);
        this.setState(this.history.get().filter(e => id === e.id)[0].state);
    }

    /**
     * Restart game (all private neccesary properties)
     *
     * @memberof Game
     */
    restart(){
        this.disabled = false;
        this.history.clean();
        this.setState(new State());
    }

    /**
     *
     *
     * @param {number} [i=0]
     * @returns {string}
     * @memberof Game
     */
    getButtonClass(id = ""){
        return (this.history.getLastHistoryId() === id) ? "btn-success" : "btn-secondary";
    }

    /**
     *
     * @returns
     * @memberof Game
     */
    render() {
        const draw = (this.state.squares.filter(e => e === "").length === 0) && (this.state.winner === "");
        const won = (this.state.winner !== "");
        const status = draw ? "Draw" : (won ? ('Winner: ' + this.state.winner) : ('Next player: ' + this.getNextMark(this.state.xIsNext)));
        const moves = this.history.get().map(e => {
            return (
                <li key={e.id}>
                    <button
                        type="button"
                        className={`btn btn-sm ${this.getButtonClass(e.id)}`}
                        onClick={() => this.jumpTo(e.id)}>
                            {e.text}
                    </button>
                </li>
            );
        });

        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={this.state.squares}
                        disabled={this.disabled}
                        onClick={(i) => this.handleClick(i)}
                    />
                    <ResetButton
                        onClick={() => this.restart()}
                    />
                </div>
                <div className="game-info">
                    <div className="status">
                        {status}
                    </div>
                    <ol>
                        {moves}
                    </ol>
                </div>
            </div>
        );
    }
}

/**
 *
 *
 * @param {object} p
 * @returns
 */
function ResetButton(p){
    return (
        <button
            type="button"
            className="btn btn-primary btn-sm restart-button"
            onClick={p.onClick}>
                Restart
        </button>
    );
}

/**
 * Calculate if there is a winner combination on current squares state
 *
 * @param {Array} squares
 * @returns {String | Null}
 */
function calculateWinner(squares = []) {
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