// Import React library
import React, { Component } from "react";
// Import react redux
import { connect } from "react-redux";
// Import redux actions
import { loadGame } from "../../redux/board/actions";
// Import Jsx template
import Template from "./template";
// Import HTML parser
import ReactHtmlParser from "react-html-parser";


// Types
type Props = {
    loadGame: Function,
    history: string[][][]
};
type State = {
    isOpen: boolean,
    text: string,
    confirmButtonText: string,
    disabled: boolean
};

/**
 *
 *
 * @export
 * @class Main
 * @extends {Component}
 */
class LoadGame extends Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            isOpen: false,
            disabled: false,
            text: this.DEFAULT_TEXT,
            confirmButtonText: this.CONFIRM_BUTTON_DEFAULT_TEXT
        };
    }

    // Const
    DEFAULT_TEXT = "Current game will be lost.<br>¿Are you sure to load saved game?";
    LOADING_TEXT = "Loading...";
    CONFIRM_BUTTON_DEFAULT_TEXT = "Load";
    CONFIRM_BUTTON_TRY_TEXT = "Try again";

    /**
     *
     *
     * @memberof LoadGame
     */
    load(): void {
        if (this.props.history.length === 0){
            this.setState({
                disabled: true
            });
            this.props.loadGame()
                .catch((error: Error) => {
                    this.setState({
                        text: error.message,
                        confirmButtonText: this.CONFIRM_BUTTON_TRY_TEXT
                    });
                    this.toggleModal();
                })
                .finally(() => {
                    this.setState({
                        disabled: false
                    })
                });
        }else{
            this.toggleModal();
        }
    }

    /**
     *
     *
     * @memberof LoadGame
     */
    confirm(): void {
        this.setState({
            text: this.LOADING_TEXT
        });
        this.props.loadGame()
            .then(() => this.toggleModal())
            .catch((error: Error) => {
                this.setState({
                    text: error.message,
                    confirmButtonText: this.CONFIRM_BUTTON_TRY_TEXT
                })
            });
    }

    /**
     *
     *
     * @memberof LoadGame
     */
    toggleModal(): void {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    /**
     *
     *
     * @memberof LoadGame
     */
    onClose(){
        this.setState({
            text: this.DEFAULT_TEXT,
            confirmButtonText: this.CONFIRM_BUTTON_DEFAULT_TEXT
        });
    }

    /**
     *
     *
     * @returns
     * @memberof LoadGame
     */
    render() {
        return (
            <Template
                disabled={this.state.disabled}
                isOpen={this.state.isOpen}
                toggle={() => this.toggleModal()}
                confirm={() => this.confirm()}
                cancel={() => this.toggleModal()}
                load={() => this.load()}
                onClose={() => this.onClose()}
                text={ReactHtmlParser(this.state.text)}
                confirmButtonText={this.state.confirmButtonText}
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
        loadGame: () => dispatch(loadGame())
    })
)(LoadGame);