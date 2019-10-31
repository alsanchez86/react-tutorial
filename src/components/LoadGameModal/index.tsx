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
type State = {isOpen: boolean};

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
            isOpen: false
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
        this.props.loadGame()
            .then(() => this.toggle())
            .catch(() => this.toggle());
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