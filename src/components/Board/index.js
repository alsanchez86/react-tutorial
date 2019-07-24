// Import React library
import React, { Component } from "react";
// Import Jsx template
import BoardJsx from "./templates/Board";

/**
 *
 *
 * @export
 * @class Board
 * @extends {Component}
 */
export default class Board extends Component {
    /**
     * Return an array with "from" and "to" values in ASC order
     *
     * @param {number} [from=0]
     * @param {number} [to=0]
     * @returns
     * @memberof Board
     */
    // getRowArray(from = 0, to = 0){
    //     return Array.from(Array(((to - from) + 1)), (e, i) => (from + i));
    // }

    /**
     *
     *
     * @returns
     * @memberof Board
     */
    render() {
        return (
            <BoardJsx
                disabled={this.props.disabled}
                squares={this.props.squares}
                dimensions={[3, 3]}
                // rows={[
                //     this.getRowArray(0, 2),
                //     this.getRowArray(3, 5),
                //     this.getRowArray(6, 8)
                // ]}
            />
        );
    }
}