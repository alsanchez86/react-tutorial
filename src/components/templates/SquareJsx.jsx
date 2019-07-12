// Import React library
import React from "react";
// Import reactstrap components
import { Button } from "reactstrap";

export default (p) =>

<Button
    color="primary"
    className="square"
    onClick={p.onClick}>
        {p.value}
</Button>