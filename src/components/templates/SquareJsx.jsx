import React from "react";

export default (p) =>

<button
    className="square"
    onClick={p.onClick}>
        {p.value}
</button>