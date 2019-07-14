// Import React library
import React, { Component } from "react";
// Import Jsx templates
import SquareJsx from "./Square";

export default class Square extends Component {
    render() {
        return (
            <SquareJsx
                value={this.props.value}
                onClick={this.props.onClick}
            />
        );
    }
}