// Import React library
import React from "react";
// Import Jsx template
import Square from "../../Square";

export default (p) =>

/*
 * row: array
 * index: number
 */
<div className="board-row">
    {p.row.map((mark, x) =>
        <Square
            key={x.toString()}
            y={p.index}
            x={x}
            value={mark}
        />
    )}
</div>