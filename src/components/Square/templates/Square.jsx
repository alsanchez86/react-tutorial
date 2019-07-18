// Import component style
import "./style/Square.scss";
// Import React library
import React from "react";
// Import reactstrap components
import { Button } from "reactstrap";

export default (p) =>

<Button
    color="primary"
    className="square"
    active={p.value !== ""}
    onClick={() => p.onClick(p.index)}>
        {p.value}
</Button>