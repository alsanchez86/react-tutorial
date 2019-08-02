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
 * @class Square
 * @extends {Component}
 */
class Square extends Component {
    /**
     *
     *
     * @param {number} [y=0]
     * @param {number} [x=0]
     * @memberof Square
     */
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
    getSeatWeight(){
        return ((this.props.y * 3) + this.props.x);
    }

    /**
     *
     *
     * @returns
     * @memberof Square
     */
    isSuccess(){
        return (this.props.winner.filter(e => (e === this.getSeatWeight())).length > 0);
    }

    /**
     *
     * @returns {jsx}
     * @memberof Square
     */
    render() {
        return (
            <SquareJsx
                y={this.props.y}
                x={this.props.x}
                value={this.props.value}
                disabled={this.props.disabled}
                success={this.isSuccess()}
                onClick={(y, x) => this.onClick(y, x)}
            />
        );
    }
}

export default connect(
    // mapStateToProps
    state => ({
        xIsNext: state.get("xIsNext"),
        winner: state.getIn(["board", "winner"]),
        disabled: (state.getIn(["board", "draw"]) || (state.getIn(["board", "winner"]).length > 0) || (state.getIn(["board", "step"]) < (state.getIn(["board", "history"]).length - 1)))
    }),
    // mapDispatchToProps
    dispatch => ({
        onClick: (y, x, mark) => dispatch(markSquare(y, x, mark))
    })
)(Square);