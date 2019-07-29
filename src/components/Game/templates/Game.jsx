// Import React library
import React from "react";
// Import components
import Board from "../../Board";
// Import reactstrap components
import { Alert, Button, ButtonGroup } from "reactstrap";

export default (p) =>

<div className="container">
    <div className="row">
        <div className="col-6">
            <Board/>

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
                    onClick={p.restartClick}>
                        Restart
                </Button>
            : null}

            {/* <Button onClick={() => p.disableClick()}>
                xxxx
            </Button> */}

            <ButtonGroup vertical size="sm">
                {p.history.map((e, i) =>
                    <Button
                        size="sm"
                        key={i.toString()}
                        color={p.getButtonColor(i)}
                        onClick={() => p.jumpTo(i)}>
                            {i}
                    </Button>
                )}
            </ButtonGroup>
        </div>
    </div>
</div>