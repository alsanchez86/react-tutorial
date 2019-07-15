// Import React library
import React, { Component } from "react";
// Import Jsx template
import SquareJsx from "./templates/Square";

/**
 *
 *
 * @export
 * @class Square
 * @extends {Component}
 */
export default class Square extends Component {
    /**
     *
     *
     * @returns
     * @memberof Square
     */
    render() {
        return (
            <SquareJsx
                value={this.props.value}
                onClick={this.props.onClick}
            />
        );
    }
}