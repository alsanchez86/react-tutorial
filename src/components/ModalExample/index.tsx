// Import React library
import React, { Component } from "react";
// Import Jsx template
import Template from "./templates/";

// Types
type Props = {};
type State = {isOpen: boolean};

/**
 *
 *
 * @export
 * @class Main
 * @extends {Component}
 */
export default class ModalExample extends Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            isOpen: false
        };
    }

    /**
     *
     *
     * @memberof ModalExample
     */
    toggle(): void {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    /**
     *
     *
     * @memberof ModalExample
     */
    confirm(): void {
        this.toggle();
    }

    /**
     *
     *
     * @memberof ModalExample
     */
    cancel(): void {
        this.toggle();
    }

    /**
     *
     *
     * @returns
     * @memberof Main
     */
    render(): any {
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