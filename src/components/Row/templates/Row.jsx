// Import React library
import React from "react";
// Import Jsx template
import Square from "../../Square";

export default (p) =>

<div className="board-row">
    {p.rowSquares.map(e =>
        <Square
            key={e.toString()}
            index={e}
            value={p.squares[e]}
        />
    )}
</div>