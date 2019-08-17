// Import React library
import React, { Component } from "react";
// Import react redux
import { connect } from "react-redux";
// Import redux actions
import { markSquare } from "../../redux/board/actions";
// Import Jsx template
import Template from "./templates/";

const onClick = Symbol();
const getSeatWeight = Symbol();
const isSuccess = Symbol();

/**
 *
 *
 * @class Square
 * @extends {Component}
 */
class Square extends Component<any> {
    /**
     *
     *
     * @param {number} [y=0]
     * @param {number} [x=0]
     * @memberof Square
     */
    [onClick] = (y: number = 0, x: number = 0): void => {
        const mark: string = this.props.xIsNext ? "X" : "O";
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
    [getSeatWeight] = (): number => ((this.props.y * 3) + this.props.x);

    /**
     *
     *
     * @returns
     * @memberof Square
     */
    [isSuccess] = (): boolean => (this.props.winner.filter((e: number) => (e === this[getSeatWeight]())).length > 0);

    /**
     *
     * @returns {any}
     * @memberof Square
     */
    render(): object {
        return (
            <Template
                y={this.props.y}
                x={this.props.x}
                value={this.props.value}
                disabled={this.props.disabled}
                success={this[isSuccess]()}
                onClick={(y: number, x: number) => this[onClick](y, x)}
            />
        );
    }
}

export default connect(
    // mapStateToProps
    (state: any): object => ({
        xIsNext: state.xIsNext,
        winner: state.board.winner,
        disabled: state.board.draw || (state.board.winner.length > 0) || (state.board.step < (state.board.history.length - 1))
    }),
    // mapDispatchToProps
    (dispatch: Function): any => ({
        onClick: (y: number, x: number, mark: string) => dispatch(markSquare(y, x, mark))
    })
)(Square);