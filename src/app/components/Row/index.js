// Import React library
import React, { Component } from "react";
// Import Jsx templates
import RowJsx from "./Row";

export default class Row extends Component {
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