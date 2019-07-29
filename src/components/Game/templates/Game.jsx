// Import component style
import "./style/Game.scss";
// Import React library
import React from "react";
// Import components
import Board from "../../Board";
// Import reactstrap components
import { Alert, Button, ButtonGroup, Progress } from "reactstrap";

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

            <Progress value={p.progress} />
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

            {(p.history.length > 1) ?
                <ButtonGroup vertical size="sm">
                    {p.history.map((e, i) =>
                        <Button
                            size="sm"
                            key={i.toString()}
                            color={p.getButtonColor(i)}
                            onClick={() => p.jump(i)}>
                                {i}
                        </Button>
                    )}
                </ButtonGroup>
            : null}
        </div>
    </div>
</div>