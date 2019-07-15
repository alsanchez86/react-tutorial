// Import React library
import React, { Component } from "react";
// Import Jsx templates
import RowJsx from "./Row";

/**
 *
 *
 * @export
 * @class Row
 * @extends {Component}
 */
export default class Row extends Component {
    /**
     *
     *
     * @returns
     * @memberof Row
     */
    render() {
        return (
            <RowJsx
                squares={this.props.squares}
                rowSquares={this.props.e}
                squareClick={(e) => this.props.squareClick(e)}
            />
        );
    }
}