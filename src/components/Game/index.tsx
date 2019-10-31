// Import React library
import React, { Component } from "react";
// Import react redux
import { connect } from "react-redux";
// Import redux actions
import { jump, restartBoard } from "../../redux/board/actions";
// Import Jsx template
import Template from "./templates/";

type Props = {
    cells: string[][],
    winner: number[],
    history: string[][][],
    draw: boolean,
    step: number,
    xIsNext: boolean,
    restart: Function,
    jump: Function
};

/**
 * Root React App Component
 *
 * @export
 * @class Game
 * @extends {Component}
 */
class Game extends Component<Props> {
    /**
     * Get the next player mark
     *
     * @param {boolean} xIsNext
     * @returns {string}
     * @memberof Game
     */
    getNextMark(xIsNext: boolean = false): string {
        return xIsNext ? "X" : "O";
    };

    /**
     *
     *
     * @param {number} [i=0]
     * @returns {string}
     * @memberof Game
     */
    getButtonColor(i: number = 0): string {
        return ((this.props.history.length - 1) === i) ? "success" : "secondary";
    };

    /**
     *
     *
     * @returns
     * @memberof Game
     */
    getProgress(): number {
        return Math.round((this.props.step * 100) / 9);
    };

    /**
     * Get the winner symbol from combination array
     *
     * @memberof Game
     */
    getWinnerSymbol(): string {
        return this.props.cells.reduce((ant: string[], act: string[]) => ant.concat(act))[(this.props.winner[0])]
    };

    /**
     *
     *
     * @returns
     * @memberof Game
     */
    render() {
        const won = (this.props.winner.length > 0);
        const status = this.props.draw ? "Draw" : (won ? ('Winner: ' + this.getWinnerSymbol()) : ('Next player: ' + this.getNextMark(this.props.xIsNext)));

        return (
            <Template
                draw={this.props.draw}
                won={won}
                status={status}
                restartClick={() => this.props.restart()}
                history={this.props.history}
                getButtonColor={(i: number) => this.getButtonColor(i)}
                jump={(i: number) => this.props.jump(i)}
                progress={this.getProgress()}
            />
        );
    }
}

export default connect(
    // mapStateToProps
    (state: any) => ({
        cells: state.boardReducer.cells,
        winner: state.boardReducer.winner,
        draw: state.boardReducer.draw,
        history: state.boardReducer.history,
        step: state.boardReducer.step,
        xIsNext: state.boardReducer.xIsNext
    }),
    // mapDispatchToProps
    (dispatch: Function) => ({
        restart: () => dispatch(restartBoard()),
        jump: (i: number) => dispatch(jump(i))
    })
)(Game);