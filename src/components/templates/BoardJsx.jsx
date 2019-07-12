// Import React library
import React from "react";
// Import Jsx templates
import RowJsx from "./RowJsx";

export default (p) =>

<div className={`board ${(p.disabled ? "disabled" : "")}`}>
    {p.rows.map((e, i) =>
        <RowJsx
            key={i.toString()}
            squares={p.squares}
            rowSquares={e}
            squareClick={(e) => p.squareClick(e)}
        />
    )}
</div>