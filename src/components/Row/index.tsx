// Import React library
import React, { Component } from "react";
// Import Jsx templates
import Template from "./template";

type Props = {
    index: number,
    row: string[]
};

/**
 *
 *
 * @export
 * @class Row
 * @extends {Component}
 */
export default class Row extends Component<Props> {

    /**
     *
     *
     * @returns
     * @memberof Row
     */
    render() {
        return (
            <Template
                index={this.props.index}
                row={this.props.row}
            />
        );
    }
}