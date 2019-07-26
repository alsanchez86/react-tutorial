// Import React library
import React, { Component } from "react";
// Import react redux
import { connect } from "react-redux";
// Import Jsx template
import BoardJsx from "./templates/Board";

/**
 *
 *
 * @export
 * @class Board
 * @extends {Component}
 */
class Board extends Component {
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
            />
        );
    }
}

export default connect(
    // mapStateToProps
    state => ({
        disabled: state.disabled,
        squares: state.squares
    })
)(Board);