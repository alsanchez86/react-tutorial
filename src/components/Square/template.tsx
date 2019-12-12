// Import component style
import "./style.scss";
// Import React library
import React from "react";
// Import reactstrap components
import { Button } from "reactstrap";

type Props = {
    success: boolean,
    disabled: boolean,
    value: string,
    onClick: Function,
    x: number,
    y: number
};

export default (p: Props) =>

/*
 * y: number
 * x: number
 * value: string
 * disabled: boolean
 * onClick: function
 */
<Button
    color={(p.success ? "success" : "primary")}
    className={`square ${(p.disabled ? "disabled" : "")}`}
    active={p.value !== ""}
    onClick={() => p.onClick(p.y, p.x)}>
        {p.value}
</Button>