import React from "react";

export default (p) =>

<li>
    <button
        type="button"
        className={`btn btn-sm ${p.className}`}
        onClick={p.onClick}>
            {p.text}
    </button>
</li>