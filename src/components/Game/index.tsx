// Import React library
import React, {
    Component
} from "react";
// Import react redux
import {
    connect
} from "react-redux";
// Import redux actions
import {
    jump,
    restartBoard
} from "../../redux/board/actions";
// Import Jsx template
import Template from "./templates/";
// Import utils
import {
    get
} from "../../utils/";
// Import default values
import {
    boardStateCells,
    boardStateWinner,
    boardStateHistory,
    boardStateDraw,
    boardStateStep,
    boardStateXIsNext
} from "../../redux/board/default";

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
    render(): any {
        const won: boolean = (this.props.winner.length > 0);
        const status: string = this.props.draw ? "Draw" : (won ? ('Winner: ' + this.getWinnerSymbol()) : ('Next player: ' + this.getNextMark(this.props.xIsNext)));

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
    (state: any): object => ({
        cells: get(state, "boardReducer.cells", boardStateCells),
        winner: get(state, "boardReducer.winner", boardStateWinner),
        draw: get(state, "boardReducer.draw", boardStateDraw),
        history: get(state, "boardReducer.history", boardStateHistory),
        step: get(state, "boardReducer.step", boardStateStep),
        xIsNext: get(state, "boardReducer.xIsNext", boardStateXIsNext)
    }),
    // mapDispatchToProps
    (dispatch: Function): object => ({
        restart: () => dispatch(restartBoard()),
        jump: (i: number = 0) => dispatch(jump(i))
    })
)(Game);