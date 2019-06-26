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
     * @param {String} [id=""]
     * @param {String} [text=""]
     * @param {Object<GameState>} [state=new GameState()]
     * @memberof History
     */
    constructor(id = "", text = "", state = new GameState()) {
        this.id = id;
        this.text = text;
        this.state = state;
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
        this.history = [];
    }

    /**
     * Add state to history
     *
     * @param {Object<GameState>} state
     * @memberof GameHistory
     */
    add(state = new GameState()){
        const id = (+new Date()).toString(36);
        const text = (this.history.length > 0) ? "Go to move #" + this.history.length : "Go to game start";
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
     * @param {number} [m=0]
     * @returns
     * @memberof GameHistory
     */
    backward(m = 0){
        return this.history.indexOf(m);
    }
}

/**
 *
 *
 * @class GameState
 */
class GameState {
    /**
     * Creates an instance of GameState.
     * @param {Array} [squares=Array(9).fill("")]
     * @memberof GameState
     */
    constructor(squares = Array(9).fill(""), xIsNext = true, winner = "") {
        this.squares = squares;
        this.xIsNext = xIsNext;
        this.winner = winner;
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
        this.state = new GameState();
        this.history = new GameHistory();
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
     *
     * @param {Number} i
     * @memberof Game
     */
    handleClick(i = 0) {
        const notWinnerYet = (this.state.squares.filter(e => e === "").length > 0) && (this.state.winner === "");
        let squares;
        let winner;

        if (notWinnerYet){
            squares = this.state.squares.map((e, j) => e = (e !== "") ? e : ((i === j) ? this.getNextMark(this.state.xIsNext) : ""));
            winner = calculateWinner(squares);
            this.setState(new GameState(squares, !this.state.xIsNext, winner), () => this.history.add(this.state));
        }
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
                    <button>
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
                        onClick={(i) => this.handleClick(i)}
                    />
                </div>
                <div className="game-info">
                    {/* status */}
                    <div className="status">
                        {status}
                    </div>
                    {/* history */}
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
            <div>
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