// React
import React from "react";

/**
 * Board JSX template
 *
 * @param {object} p
 * @returns
 */
const BoardJsx = (p) => (
    <div
        className={`board ${(p.disabled ? "disabled" : "")}`}>
            {p.rows}
    </div>
);

export default BoardJsx;