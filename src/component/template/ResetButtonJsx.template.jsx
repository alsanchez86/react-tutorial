// React
import React from "react";

/**
 * Reset button JSX template
 *
 * @param {object} p
 * @returns
 */
const ResetButtonJsx = (p) => (
    <button
        type="button"
        className="btn btn-primary btn-sm restart-button"
        onClick={p.onClick}>
            Restart
    </button>
);

export default ResetButtonJsx;