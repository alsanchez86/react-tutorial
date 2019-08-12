// Import React library
import React, { Component } from "react";
// Import Jsx template
import HeaderJsx from "./templates/Header";

/**
 *
 *
 * @export
 * @class Header
 * @extends {Component}
 */
export default class Header extends Component {
    /**
     *
     *
     * @returns
     * @memberof Header
     */
    render() {
        return (
            <HeaderJsx/>
        );
    }
}