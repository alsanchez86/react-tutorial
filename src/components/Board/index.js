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
                cells={this.props.board.cells}
                disabled={this.props.board.winner !== ""}
            />
        );
    }
}

export default connect(
    // mapStateToProps
    state => ({
        board: state.board
        // disabled: state.disabled,
    })
)(Board);