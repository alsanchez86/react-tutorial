// React
import React from "react";

/**
 * Game JSX template
 *
 * @param {Object} p
 * @returns
 */
const GameJsx = (p) => (
    <div className="game">
        <div className="game-board">
            {p.board}
            {p.resetButton}
        </div>

        <div className="game-info">
            <div className="status">
                {p.status}
            </div>
            <ol>
                {p.moves}
            </ol>
        </div>
    </div>
);

export default GameJsx;