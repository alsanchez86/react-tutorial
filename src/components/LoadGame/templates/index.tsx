// Import React library
import React from "react";
// Import reactstrap components
import { Button } from "reactstrap";

type Props = {
    load: Function,
    disabled: boolean,
};

export default (p: Props) =>

<Button color="info" onClick={() => p.load()} disabled={p.disabled}>
    {p.disabled ? "Loading..." : "Load saved game"}
</Button>