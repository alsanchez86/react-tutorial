// Import React library
import React from "react";
// Import Jsx templates
import Row from "../Row";
// Import component styles
import "./Board.scss";

export default (p) =>

<div className={`board ${(p.disabled ? "disabled" : "")}`}>
    {p.rows.map((e, i) =>
        <Row
            key={i.toString()}
            squares={p.squares}
            rowSquares={e}
            squareClick={(e) => p.squareClick(e)}
        />
    )}
</div>