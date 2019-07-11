// React
import React from "react";

/**
 * Game JSX template
 *
 * @param {Object} p
 * @returns
 */
const GameJsx = (p) => (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-6">
                    {p.board}
                    {p.alert}
                </div>

                <div className="col-6">
                    {p.resetButton}
                    {/* Mostrar status cuando no haya terminado el juego */}
                    {p.status}
                    <ol>
                        {p.moves}
                    </ol>
                </div>
            </div>
        </div>
    </div>
);

export default GameJsx;