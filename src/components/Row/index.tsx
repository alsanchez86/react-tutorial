// Import React library
import React, { Component } from "react";
// Import Jsx templates
import RowJsx from "./templates/Row";

/**
 *
 *
 * @export
 * @class Row
 * @extends {Component}
 */
export default class Row extends Component {
    /**
     * @returns {jsx}
     * @memberof Row
     */
    render() {
        return (
            <RowJsx
                index={this.props.index}
                row={this.props.row}
            />
        );
    }
}