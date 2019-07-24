// Import React library
import React from "react";
// Import Jsx template
import Square from "../../Square";

export default (p) =>

<div className="board-row">
    {p.rowSquares.map(index =>
        <Square
            key={index.toString()}
            index={index}
            value={p.squares[index]}
        />
    )}
</div>