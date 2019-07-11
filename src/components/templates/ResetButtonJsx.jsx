import React from "react";
import { Button } from "reactstrap";

export default (p) =>

<Button
    color="danger"
    size="sm"
    onClick={p.onClick}>
        Restart
</Button>