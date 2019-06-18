import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

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
 * @class BoardState
 */
class BoardState {
    /**
     * Creates an instance of BoardState.
     * @param {Array} [squares=Array(9).fill(null)]
     * @memberof BoardState
     */
    constructor(squares = Array(9).fill(null), xIsNext = true) {
        this.squares = squares;
        this.xIsNext = xIsNext;
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
        this.marks = ["X","O"];
    }

    /**
     * Handle click on square component
     *
     * @param {Number} i
     * @memberof Board
     */
    handleClick(i) {
        const mark = this.state.xIsNext ? this.marks[0] : this.marks[1];
        this.setState(new BoardState(this.state.squares.map((e, j) => e = ((j === i) || (e !== null)) ? mark : null), !this.state.xIsNext));
        // this.setState(new BoardState(this.state.squares.map((e, j) => e = ((j === i) || (this.marks.filter(e => e === mark).length > 0)) ? mark : null), !this.state.xIsNext));
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
        const status = 'Next player: X';
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
 *
 *
 * @class Game
 * @extends {React.Component}
 */
class Game extends React.Component {
    /**
     *
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
ReactDOM.render(<Game/>, document.getElementById('root'));
