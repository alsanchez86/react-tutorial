import React from "react";

export default (p) =>

<div className="container">
    <div className="row">
        <div className="col-6">
            {p.board}
            {p.alert}
        </div>

        <div className="col-6">
            {p.resetButton}
            {p.status}
            <ol>
                {p.moves}
            </ol>
        </div>
    </div>
</div>