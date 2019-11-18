// Import React library
import React, { Component } from "react";
// Import react redux
import { connect } from "react-redux";
// Import redux actions
import { saveGame } from "../../redux/board/actions";
// Import Jsx template
import Template from "./templates/";

// Types
type Props = {
    saveGame: Function,
    history: string[][][]
};
type State = {

};

/**
 *
 *
 * @export
 * @class SaveGame
 * @extends {Component}
 */
class SaveGame extends Component<Props, State> {
    /**
     *
     *
     * @memberof LoadGame
     */
    saveGame(): void {
        console.log(this.props.history);
        // this.props.saveGame();
    }

    /**
     *
     *
     * @returns
     * @memberof SaveGame
     */
    render() {
        return (
            <Template
                saveGameClick={() => this.saveGame()}
            />
        );
    }
}

export default connect(
    // mapStateToProps
    (state: any) => ({
        history: state.boardReducer.history
    }),
    // mapDispatchToProps
    (dispatch: Function) => ({
        saveGame: () => dispatch(saveGame())
    })
)(SaveGame);