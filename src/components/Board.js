// Import React library
import React, { Component } from "react";
// Import Jsx templates
import SquareJsx from "./templates/SquareJsx";
import BoardJsx from "./templates/BoardJsx";
import RowJsx from "./templates/RowJsx";

/**
 * Board component
 *
 * @class Board
 * @extends {Component}
 */
export default class Board extends Component {
    /**
     * Return render square component
     *
     * @param {Number} i
     * @returns {ReactDOM} <square></square>
     * @memberof Board
     */
    renderSquare(i = 0) {
        return (
            <SquareJsx
                key={i.toString()}
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
            />
        );
    }

    renderRow(from = 0, to = 0){
        const length = ((to - from) + 1);
        const squares = Array.from(Array(length), (e, i) => (from + i)).map(e => this.renderSquare(e));

        return (
            <RowJsx
                key={from.toString()}
                squares={squares}
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
        const rows = [
            this.renderRow(0, 2),
            this.renderRow(3, 5),
            this.renderRow(6, 8)
        ];
        return (
            <BoardJsx
                disabled={this.props.disabled}
                rows={rows}
            />
        );
    }
}