import React from "react";
import { ButtonGroup } from "reactstrap";
import Board from "../Board";
import StatusJsx from "./StatusJsx";

export default (p) =>

<div className="container">
    <div className="row">
        <div className="col-6">
            <Board
                squares={p.squares}
                disabled={p.disabled}
                onClick={p.squareClick}
            />
            {
                (!p.draw && !p.won) ?
                    <StatusJsx value={p.status}/>
                : null
            }
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