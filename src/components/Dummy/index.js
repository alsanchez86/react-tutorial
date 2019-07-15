// Import React library
import React, { Component } from "react";
// Import Jsx template
import DummyJsx from "./templates/Dummy";

/**
 *
 *
 * @export
 * @class Dummy
 * @extends {Component}
 */
export default class Dummy extends Component {
    /**
     *
     *
     * @returns
     * @memberof Dummy
     */
    render() {
        return (
            <DummyJsx/>
        );
    }
}