// Import React library
import React from "react";
// Import Jsx templates
import SquareJsx from "./SquareJsx";

export default (p) =>

<div className="board-row">
    {p.rowSquares.map(e =>
        <SquareJsx
            key={e.toString()}
            value={p.squares[e]}
            onClick={() => p.squareClick(e)}
        />
    )}
</div>