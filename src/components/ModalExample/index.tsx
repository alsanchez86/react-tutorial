// Import React library
import React, { Component } from "react";
// Import Jsx template
import Template from "./templates/";

/**
 *
 *
 * @export
 * @class Main
 * @extends {Component}
 */
export default class ModalExample extends Component<any> {
    toggle(){

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
                isOpen={!this.props.isOpen}
                toggle={() => this.toggle()}
            />
        );
    }
}