// Import component style
import "./style.scss";
// Import React library
import React from "react";
// Import components
import Row from "../Row";

type Props = {
    cells: string[][],
    disabled: boolean
};

export default (p: Props) =>

<div className={`board ${(p.disabled ? "disabled" : "")}`}>
    {p.cells.map((row: string[], index: number) =>
        <Row
            key={index.toString()}
            index={index}
            row={row}
        />
    )}
</div>