// Import React library
import React, { Component } from "react";
// Import react redux
import { connect } from "react-redux";
// Import Jsx template
import Template from "./template";

type Props = {
    cells: string[][],
    disabled: boolean
};

/**
 *
 *
 * @export
 * @class Board
 * @extends {Component}
 */
class Board extends Component<Props> {

    /**
     *
     *
     * @returns
     * @memberof Board
     */
    render() {
        return (
            <Template
                cells={this.props.cells!}
                disabled={this.props.disabled!}
            />
        );
    }
}

export default connect(
    // mapStateToProps
    (state: any) => ({
        cells: state.boardReducer.cells,
        disabled: (state.boardReducer.winner.length > 0)
    })
)(Board);