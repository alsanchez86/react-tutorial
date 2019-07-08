// React
import React from "react";

/**
 * Move JSX template
 *
 * @param {object} p
 * @returns
 */
const MoveJsx = (p) => (
    <li>
        <button
            type="button"
            className={`btn btn-sm ${p.className}`}
            onClick={p.onClick}>
                {p.text}
        </button>
    </li>
);

export default MoveJsx;