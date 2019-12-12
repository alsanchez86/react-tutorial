// Import component style
import "./style.scss";
// Import React library
import React from "react";
// Import Jsx template
import Square from "../Square";

type Props = {
    row: string[],
    index: number
};

export default (p: Props) =>

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