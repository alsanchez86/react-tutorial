// Import component style
import "./style/Square.scss";
// Import React library
import React from "react";
// Import reactstrap components
import { Button } from "reactstrap";

export default (p) =>

/*
 * y: number
 * x: number
 * value: string
 * disabled: boolean
 * onClick: function
 */
<Button
    color="primary"
    className={`square ${(p.disabled ? "disabled" : "")}`}
    active={p.value !== ""}
    onClick={() => p.onClick(p.y, p.x)}>
        {p.value}
</Button>