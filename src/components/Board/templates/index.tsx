// Import component style
import "./style/index.scss";
// Import React library
import React from "react";
// Import components
import Row from "../../Row";

export default (p: any): any =>

<div className={`board ${(p.disabled ? "disabled" : "")}`}>
    {p.cells.map((row: string[], index: number) =>
        <Row
            key={index.toString()}
            index={index}
            row={row}
        />
    )}
</div>