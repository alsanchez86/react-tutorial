// Import React library
import React, { Component } from "react";
// Import react redux
import { connect } from "react-redux";
// Import redux actions
import { jump, restartBoard } from "../../redux/board/actions";
// Import Jsx template
import Template from "./templates/";

const getNextMark = Symbol();
const getButtonColor = Symbol();
const getProgress = Symbol();
const getWinnerSymbol = Symbol();

/**
 * Root React App Component
 *
 * @export
 * @class Game
 * @extends {Component}
 */
class Game extends Component<any> {
    /**
     * Get the next player mark
     *
     * @param {boolean} xIsNext
     * @returns {string}
     * @memberof Game
     */
    [getNextMark] = (xIsNext: boolean = false): string => xIsNext ? "X" : "O";

    /**
     *
     *
     * @param {number} [i=0]
     * @returns {string}
     * @memberof Game
     */
    [getButtonColor] = (i: number = 0): string => ((this.props.history.length - 1) === i) ? "success" : "secondary";

    /**
     *
     *
     * @returns
     * @memberof Game
     */
    [getProgress] = (): number => Math.round((this.props.step * 100) / 9);

    /**
     * Get the winner symbol from combination array
     *
     * @memberof Game
     */
    [getWinnerSymbol] = (): string => this.props.cells.reduce((ant: string[], act: string[]) => ant.concat(act))[(this.props.winner[0])];

    /**
     *
     *
     * @returns
     * @memberof Game
     */
    render(): any {
        const won: boolean = (this.props.winner.length > 0);
        const status: string = this.props.draw ? "Draw" : (won ? ('Winner: ' + this[getWinnerSymbol]) : ('Next player: ' + this[getNextMark](this.props.xIsNext)));

        return (
            <Template
                draw={this.props.draw}
                won={won}
                status={status}
                restartClick={() => this.props.restart()}
                history={this.props.history}
                getButtonColor={(i: number) => this[getButtonColor](i)}
                jump={(i: number) => this.props.jump(i)}
                progress={this[getProgress]()}
            />
        );
    }
}

export default connect(
    // mapStateToProps
    (state: any): object => ({
        cells: state.board.cells,
        winner: state.board.winner,
        draw: state.board.draw,
        history: state.board.history,
        step: state.board.step,
        xIsNext: state.xIsNext
    }),
    // mapDispatchToProps
    (dispatch: any): object => ({
        restart: () => dispatch(restartBoard()),
        jump: (i: Number = 0) => dispatch(jump(i))
    })
)(Game);