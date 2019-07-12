// Import React library
import React from "react";
// Import children components
import Board from "../Board";
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
                <div className="status">
                    {p.status}
                </div>
            : null}

            {(p.draw || p.won) ?
                <Alert color="success">
                    {p.status}
                </Alert>
            : null}
        </div>

        <div className="col-6">
            {(p.history.length > 0) ?
                <Button
                    color="danger"
                    size="sm"
                    onClick={p.resetButtonClick}>
                        Restart
                </Button>
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