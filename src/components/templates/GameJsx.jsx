import React from "react";
import { ButtonGroup } from "reactstrap";

export default (p) =>

<div className="container">
    <div className="row">
        <div className="col-6">
            {p.board}
            {p.status}
            {p.alert}
        </div>

        <div className="col-6">
            {p.resetButton}

            <ButtonGroup
                vertical
                size="sm">
                    {p.moves}
            </ButtonGroup>
        </div>
    </div>
</div>