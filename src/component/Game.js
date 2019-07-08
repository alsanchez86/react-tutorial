// React
import React, { Component } from "react";
// Class
import StateClass from "./class/StateClass";
import GameHistoryClass from "./class/GameHistoryClass";
// Component
import Board from "./Board";
// JSX
import ResetButtonJsx from "./template/ResetButtonJsx";
import MoveJsx from "./template/MoveJsx";
import GameJsx from "./template/GameJsx";

/**
 * Root React App Component
 *
 * @export
 * @class GameComponent
 * @extends {Component}
 */
export default class GameComponent extends Component {
    /**
     * Creates an instance of GameComponent.
     * @param {*} p
     * @memberof GameComponent
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
     * @param {Boolean} xIsNext
     * @returns {String}
     * @memberof Game
     */
    getNextMark(xIsNext = false) {
        return xIsNext ? "X" : "O";
    }

    /**
     * Handle click on square component
     *
     * @param {Number} i
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
    getButtonClass(id = "") {
        return (this.history.getLastHistoryId() === id) ? "btn-success" : "btn-secondary";
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
     * @returns
     * @memberof Game
     */
    render() {
        const draw = (this.state.squares.filter(e => e === "").length === 0) && (this.state.winner === "");
        const won = (this.state.winner !== "");
        const status = draw ? "Draw" : (won ? ('Winner: ' + this.state.winner) : ('Next player: ' + this.getNextMark(this.state.xIsNext)));
        const board = (
            <Board
                squares={this.state.squares}
                disabled={this.disabled}
                onClick={(i) => this.squareClick(i)}
            />
        );
        const resetButton = (
            <ResetButtonJsx
                onClick={() => this.restart()}
            />
        );
        const moves = this.history.get().map(e => {
            return (
                <MoveJsx
                    key = {e.id}
                    text={e.text}
                    className={this.getButtonClass(e.id)}
                    onClick={() => this.jumpTo(e.id)}
                />
            );
        });
        return (
            <GameJsx
                board={board}
                resetButton={resetButton}
                status={status}
                moves={moves}
            />
        );
    }
}