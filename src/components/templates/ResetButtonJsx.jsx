// Import React library
import React from "react";
// Import reactstrap components
import { Button } from "reactstrap";

export default (p) =>

<Button
    color="danger"
    size="sm"
    onClick={p.onClick}>
        Restart
</Button>