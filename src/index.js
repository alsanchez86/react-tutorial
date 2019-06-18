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

class Symbol {
    constructor(s = "", next = true){
        this.s = s;
        this.next = next;
    }
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
        this.symbols = Array(2).fill(new Symbol("X"), new Symbol("O", false));
    }

    /**
     * Handle click on square component
     *
     * @param {Number} i
     * @memberof Board
     */
    handleClick(i) {
        const next = this.symbols.filter(e => e.next === this.state.xIsNext);
        this.setState(new BoardState(this.state.squares.map((e, j) => e = ((j === i) || (e === next)) ? next : null), !this.state.xIsNext));
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
