// Import React library
import React from "react";
// Import reactstrap components
import { Button } from "reactstrap";
// Import component style
import "./Square.scss";

export default (p) =>

<Button
    color="primary"
    className="square"
    active={p.value !== ""}
    onClick={p.onClick}>
        {p.value}
</Button>