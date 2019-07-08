// React
import React from "react";

/**
 *
 *
 * @class Board
 * @extends {React.Component}
 */
export default class Board extends React.Component {
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