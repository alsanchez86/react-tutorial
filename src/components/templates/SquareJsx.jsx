// React
import React from "react";

/**
 * Square JSX template
 *
 * @param {Object} p
 * @returns
 */
const SquareJsx = (p) => (
    <button
        className="square"
        onClick={p.onClick}>
            {p.value}
    </button>
);

export default SquareJsx;