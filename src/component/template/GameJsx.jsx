// React
import React from "react";

/**
 * Game JSX template
 *
 * @param {Object} p
 * @returns
 */
const GameJsx = (p) => (
    <div className="container">
        <div className="row">
            <div className="col-6">
                {p.board}
            </div>

            <div className="col-6">
                {p.resetButton}

                <div className="status">
                    {p.status}
                </div>
                <ol>
                    {p.moves}
                </ol>
            </div>
        </div>
    </div>
);

export default GameJsx;