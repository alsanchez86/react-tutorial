/**
 * TODO:
 * 1.- Separar los componentes en archivos independientes
 * 2.- Usar sass en lugar de css
 *
*/

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

/**
 * History prototype
 *
 * @class History
 */
class History {
    /**
     * Creates an instance of History
     *
     * @param {String} [id=""]
     * @param {String} [text=""]
     * @param {Object<State>} [state=new State()]
     * @memberof History
     */
    constructor(id = "", text = "", state = new State()) {
        this.id = id;
        this.text = text;
        this.state = state;
    }
}

/**
 * State prototype
 * Unique state app (Flux) on the main component (Game)
 * Musnt have states on childrens components
 *
 * @class State
 */
class State {
    /**
     * Creates an instance of State.
     *
     * @param {string} [squares=Array(9).fill("")]
     * @param {boolean} [xIsNext=true]
     * @param {string} [winner=""]
     * @memberof State
     */
    constructor(squares = Array(9).fill(""), xIsNext = true, winner = "") {
        this.squares = squares;
        this.xIsNext = xIsNext;
        this.winner = winner;
    }
}

/**
 * Class to manage the history of the game
 *
 * @class GameHistory
 */
class GameHistory {
    /**
     * Creates an instance of GameHistory
     *
     * @memberof GameHistory
     */
    constructor() {
        this.history = new Array(); // Private array of Histories
        this.add(); // Add a History on the start of the game for go back to the start
    }

    /**
     * Add state to history
     *
     * @param {Object<State>} state
     * @memberof GameHistory
     */
    add(state = new State()){
        const id = (+new Date()).toString(36); // Watched on https://stackoverflow.com/questions/8012002/create-a-unique-number-with-javascript-time/28918947
        const text = (this.history.length > 0) ? ("Go to move #" + this.history.length) : "Go to game start";
        this.history.push(new History(id, text, state));
    }

    /**
     * Get history private array
     *
     * @returns {object}
     * @memberof GameHistory
     */
    get(){
        return this.history;
    }

    /**
     * Get the id of the last history added
     *
     * @returns {string}
     * @memberof GameHistory
     */
    getLastHistoryId(){
        let sliced = this.history.slice(-1).pop();
        return sliced ? sliced.id : "";
    }

    /**
     * Reset history private array
     *
     * @memberof GameHistory
     */
    clean(){
        this.history = new Array();
        this.add();
    }
}

/**
 * Root react component
 *
 * @class Game
 * @extends {React.Component}
 */
class Game extends React.Component {
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
        return (this.history.getLastHistoryId() === id) ? "last-history" : "";
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
                        className={this.getButtonClass(e.id)}
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
 * @class Board
 * @extends {React.Component}
 */
class Board extends React.Component {
    renderRow(from = 0, to = 0){
        const length = ((to - from) + 1);
        const squares = Array.from(Array(length), (e, i) => (from + i)).map(e => this.renderSquare(e));
        return (
            <div className="board-row">
                {squares}
            </div>
        );
    }

    /**
     * Return render square component
     *
     * @param {Number} i
     * @returns {ReactDOM} <square></square>
     * @memberof Board
     */
    renderSquare(i = 0) {
        return (
            <Square
                key={i}
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
            />
        );
    }

    /**
     *
     *
     * @returns {ReactDOM}
     * @memberof Board
     */
    render() {
        return (
            <div className={"board " + (this.props.disabled ? "disabled" : "")}>
                {this.renderRow(0, 2)}
                {this.renderRow(3, 5)}
                {this.renderRow(6, 8)}
            </div>
        );
    }
}

// RENDER
ReactDOM.render(<Game/>, document.getElementById("root"));

/**
 * Componentes de función Square
 *
 * @param {Object} p
 * @returns
 */
function Square(p) {
    return (
        <button
            className="square"
            onClick={p.onClick}>
                {p.value}
        </button>
    );
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
            className="restart-button"
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