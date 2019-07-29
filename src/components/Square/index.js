// Import React library
import React, { Component } from "react";
// Import react redux
import { connect } from "react-redux";
// Import redux actions
import { markSquare } from "../../redux/actions/markSquare";
// Import Jsx template
import SquareJsx from "./templates/Square";

/**
 *
 *
 * @export
 * @class Square
 * @extends {Component}
 */
class Square extends Component {
    onClick(y = 0, x = 0){
        const mark = this.props.xIsNext ? "X" : "O";
        if (!this.props.disabled){
            this.props.onClick(y, x, mark);
        }
    }

    /**
     *
     *
     * @returns
     * @memberof Square
     */
    render() {
        return (
            <SquareJsx
                y={this.props.y}
                x={this.props.x}
                value={this.props.value}
                disabled={this.props.disabled}
                onClick={(y, x) => this.onClick(y, x)}
            />
        );
    }
}

export default connect(
    // mapStateToProps
    state => ({
        xIsNext: state.get("xIsNext"),
        disabled: (state.get("board").draw || (state.get("board").winner !== "") || (state.get("board").step < (state.get("board").history.length - 1)))
    }),
    // mapDispatchToProps
    dispatch => ({
        onClick: (y, x, mark) => dispatch(markSquare(y, x, mark))
    })
)(Square);