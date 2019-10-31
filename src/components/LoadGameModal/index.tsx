// Import React library
import React, { Component } from "react";
// Import react redux
import { connect } from "react-redux";
// Import redux actions
import { loadGame } from "../../redux/board/actions";
// Import Jsx template
import Template from "./templates/";

// Types
type Props = {
    loadGame: Function
};
type State = {
    isOpen: boolean,
    text: string,
    confirmButtonText: string
};

/**
 *
 *
 * @export
 * @class Main
 * @extends {Component}
 */
class LoadGameModal extends Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            isOpen: false,
            text: "Current game will be lost. ¿Are you sure to load saved game?",
            confirmButtonText: "Load"
        };
    }

    /**
     *
     *
     * @memberof LoadGameModal
     */
    toggle(): void {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    /**
     *
     *
     * @memberof LoadGameModal
     */
    confirm(): void {
        this.setState({
            text: "Loading..."
        });
        this.props.loadGame()
            .then(() => this.toggle())
            .catch((error: Error) => {
                this.setState({
                    text: error.message,
                    confirmButtonText: "Try again"
                })
            });
    }

    /**
     *
     *
     * @memberof LoadGameModal
     */
    cancel(): void {
        this.toggle();
    }

    /**
     *
     *
     * @returns
     * @memberof LoadGameModal
     */
    render() {
        return (
            <Template
                isOpen={this.state.isOpen}
                text={this.state.text}
                confirmButtonText={this.state.confirmButtonText}
                toggle={() => this.toggle()}
                confirm={() => this.confirm()}
                cancel={() => this.cancel()}
            />
        );
    }
}

export default connect(
    // mapStateToProps
    (state: any) => ({}),
    // mapDispatchToProps
    (dispatch: Function) => ({
        loadGame: () => dispatch(loadGame())
    })
)(LoadGameModal);