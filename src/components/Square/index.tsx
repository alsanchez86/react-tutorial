// Import React library
import React, { Component } from "react";
// Import react redux
import { connect } from "react-redux";
// Import redux actions
import { markSquare } from "../../redux/board/actions";
// Import Jsx template
import Template from "./template";

type Props = {
    disabled: boolean,
    onClick: Function,
    xIsNext: boolean,
    winner: number[],
    x: number,
    y: number,
    value: string,
};

/**
 *
 *
 * @class Square
 * @extends {Component}
 */
class Square extends Component<Props> {
    /**
     *
     *
     * @param {number} [y=0]
     * @param {number} [x=0]
     * @memberof Square
     */
    onClick(y: number, x: number): void {
        if (!this.props.disabled){
            this.props.onClick(y, x, (this.props.xIsNext ? "X" : "O"));
        }
    }

    /**
     *
     *
     * @returns
     * @memberof Square
     */
    getSeatWeight(): number {
        return ((this.props.y * 3) + this.props.x)
    };

    /**
     *
     *
     * @returns
     * @memberof Square
     */
    isSuccess(): boolean {
        return (this.props.winner.filter((e: number) => (e === this.getSeatWeight())).length > 0);
    };

    /**
     *
     *
     * @returns
     * @memberof Square
     */
    render() {
        return (
            <Template
                y={this.props.y}
                x={this.props.x}
                value={this.props.value}
                disabled={this.props.disabled}
                success={this.isSuccess()}
                onClick={(y: number, x: number) => this.onClick(y, x)}
            />
        );
    }
}

// export default Square;

export default connect(
    // mapStateToProps
    (state: any) => ((
        () => {
            let winner = state.boardReducer.winner;
            return {
                xIsNext: state.boardReducer.xIsNext,
                winner: winner,
                disabled: (state.boardReducer.draw || (winner.length > 0) || (state.boardReducer.step < state.boardReducer.history.length - 1))
            }
        }
    )()),
    // mapDispatchToProps
    (dispatch: Function) => ({
        onClick: (y: number, x: number, mark: string) => dispatch(markSquare(y, x, mark))
    })
)(Square);