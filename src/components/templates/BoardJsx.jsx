import React from "react";

export default (p) =>

<div className={`board ${(p.disabled ? "disabled" : "")}`}>
    {p.rows}
</div>