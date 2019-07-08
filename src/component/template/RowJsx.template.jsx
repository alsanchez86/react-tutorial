// React
import React from "react";

/**
 * Row JSX template
 *
 * @param {Object} p
 * @returns
 */
const RowJsx = (p) => (
    <div
        className="board-row">
            {p.squares}
    </div>
);

export default RowJsx;