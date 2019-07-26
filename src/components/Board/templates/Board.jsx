// Import component style
import "./style/Board.scss";
// Import React library
import React from "react";
// Import components
import Row from "../../Row";

export default (p) =>

<div className={`board ${(p.disabled ? "disabled" : "")}`}>
    {p.squares.map((row, index) =>
        <Row
            key={index.toString()}
            index={index}
            row={row}
        />
    )}
</div>