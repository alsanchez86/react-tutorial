// Import component style
import "./style/index.scss";
// Import React library
import React from "react";
// Import Jsx template
import Square from "../../Square";

export default (p: any): any =>

/*
 * row: array
 * index: number
 */
<div className="board-row">
    {p.row.map((mark: string, x: number) =>
        <Square
            key={x.toString()}
            y={p.index}
            x={x}
            value={mark}
        />
    )}
</div>