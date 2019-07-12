// Import React library
import React, { Component } from "react";
// Import Jsx templates
import BoardJsx from "./templates/BoardJsx";

/**
 * Board component
 *
 * @class Board
 * @extends {Component}
 */
export default class Board extends Component {
    getRowArray(from = 0, to = 0){
        return Array.from(Array(((to - from) + 1)), (e, i) => (from + i));

        // return (
        //     <RowJsx
        //         key={from.toString()}
        //         squares={this.props.squares}
        //         rowSquares={rowSquares}
        //         squareClick={(i) => this.props.onClick(i)}
        //     />
        // );
    }

    /**
     *
     *
     * @returns {ReactDOM}
     * @memberof Board
     */
    render() {
        return (
            <BoardJsx
                disabled={this.props.disabled}
                squares={this.props.squares}
                squareClick={(i) => this.props.onClick(i)}
                rows={[
                    this.getRowArray(0, 2),
                    this.getRowArray(3, 5),
                    this.getRowArray(6, 8)
                ]}
            />
        );
    }
}