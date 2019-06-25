import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

/**
 *
 *
 * @class BoardState
 */
class BoardState {
    /**
     * Creates an instance of BoardState.
     * @param {Array} [squares=Array(9).fill("")]
     * @memberof BoardState
     */
    constructor(squares = Array(9).fill(""), xIsNext = true, winner = "") {
        this.squares = squares;
        this.xIsNext = xIsNext;
        this.winner = winner;
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
     * Creates an instance of Board.
     * @param {Object} p
     * @memberof Board
     */
    constructor(p){
        super(p);
        this.state = new BoardState();
        this.marks = ["X", "O"];
    }

    /**
     *
     *
     * @param {Boolean} xIsNext
     * @returns {String}
     * @memberof Board
     */
    getNextMark(xIsNext){
        return xIsNext ? this.marks[0] : this.marks[1];
    }

    /**
     * Handle click on square component
     *
     * @param {Number} i
     * @memberof Board
     */
    handleClick(i) {
        let squares;
        let winner;
        if ((this.state.squares.filter(e => e === "").length > 0) && (this.state.winner === "")){
            squares = this.state.squares.map((e, j) => e = (e !== "") ? e : ((i === j) ? this.getNextMark(this.state.xIsNext) : ""));
            winner = calculateWinner(squares);
            this.setState(new BoardState(squares, !this.state.xIsNext, winner), () => console.log("State updated:", this.state));
        }
    }

    /**
     * Return render square component
     *
     * @param {Number} i
     * @returns {ReactDOM} <square></square>
     * @memberof Board
     */
    renderSquare(i) {
        return (
            <Square
                value={this.state.squares[i]}
                onClick={() => this.handleClick(i)}
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
        const status = ((this.state.squares.filter(e => e === "").length === 0) && (this.state.winner === "")) ? "Draw" : ((this.state.winner !== "") ? ('Winner: ' + this.state.winner) : ('Next player: ' + this.getNextMark(this.state.xIsNext)));
        return (
            <div>
                <div className="status">
                    {status}
                </div>
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

/**
 * Root react component
 *
 * @class Game
 * @extends {React.Component}
 */
class Game extends React.Component {
    /**
     *
     * @returns
     * @memberof Game
     */
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board/>
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
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
function calculateWinner(squares) {
    return [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ].filter(e => {
        let map = e.map(a => squares[a]);
        let notNull = (map.indexOf("") === -1);
        let equals = map.every((e, i, a) => e === a[0]);
        return (notNull && equals);
    }).map(e => e.map(a => squares[a]).reduce(e => e))[0] || "";
}