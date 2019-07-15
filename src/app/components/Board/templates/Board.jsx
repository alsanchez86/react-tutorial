// Import component style
import "./style/Board.scss";
// Import React library
import React from "react";
// Import components
import Row from "../../Row";

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