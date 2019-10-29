// Import React library
import React, {
    Component
} from "react";
// Import react redux
import {
    connect
} from "react-redux";
// Import Jsx template
import Template from "./templates/";
// Import utils
import {
    get
} from "../../utils/";
// Import default values
import {
    boardStateCells,
    boardStateWinner
} from "../../redux/board/default";

/**
 *
 *
 * @export
 * @class Board
 * @extends {Component}
 */
class Board extends Component<any> {
    render(): any {
        return (
            <Template
                cells={this.props.cells}
                disabled={this.props.disabled}
            />
        );
    }
}

export default connect(
    // mapStateToProps
    (state: any): object => ({
        cells: get(state, "boardReducer.cells", boardStateCells),
        disabled: (get(state, "boardReducer.winner", boardStateWinner).length > 0)
    })
)(Board);