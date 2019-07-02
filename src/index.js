import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

/**
 *
 *
 * @class History
 */
class History {
    /**
     * Creates an instance of History.
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
 * Uniq state app (Flux).
 * Musnt have states on childrens components.
 *
 * @class State
 */
class State {
    /**
     * Creates an instance of State.
     * @param {Array} [squares=Array(9).fill("")]
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
     * Creates an instance of GameHistory.
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
        const id = (+new Date()).toString(36);
        const text = (this.history.length > 0) ? ("Go to move #" + this.history.length) : "Go to game start";
        this.history.push(new History(id, text, state));
    }

    /**
     *
     *
     * @returns
     * @memberof GameHistory
     */
    get(){
        return this.history;
    }

    /**
     *
     *
     * @returns {string}
     * @memberof GameHistory
     */
    getLastHistoryId(){
        return this.history.slice(-1).pop().id;
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
     * Creates an instance of Game.
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
     *
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
     * TODO: Comprobar que la casilla clicada no está ya ocupada
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
            this.history.add(state);
            this.setState(state);
        }
    }

    /**
     *
     *
     * @memberof Game
     */
    jumpTo(id = ""){
        this.disabled = (this.history.getLastHistoryId() !== id);
        this.setState(this.history.get().filter(e => id === e.id)[0].state);
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
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
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