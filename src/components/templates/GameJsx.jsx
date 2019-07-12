// Import React library
import React from "react";
// Import children components
import Board from "../Board";
// Import Jsx templates
import StatusJsx from "./StatusJsx";
import ResetButtonJsx from "./ResetButtonJsx";
// Import reactstrap components
import { Alert, Button, ButtonGroup } from "reactstrap";

export default (p) =>

<div className="container">
    <div className="row">
        <div className="col-6">
            <Board
                squares={p.squares}
                disabled={p.disabled}
                onClick={p.squareClick}
            />

            {(!p.draw && !p.won) ?
                <StatusJsx value={p.status}/>
            : null}

            {(p.draw || p.won) ?
                <Alert color="success">
                    {p.status}
                </Alert>
            : null}
        </div>

        <div className="col-6">
            {(p.history.length > 0) ?
                <ResetButtonJsx onClick={p.resetButtonClick}/>
            : null}

            <ButtonGroup vertical size="sm">
                {p.history.map(e =>
                    <Button
                        size="sm"
                        key={e.id.toString()}
                        color={p.getButtonColor(e.id)}
                        onClick={() => p.jumpTo(e.id)}>
                            {e.text}
                    </Button>
                )}
            </ButtonGroup>
        </div>
    </div>
</div>