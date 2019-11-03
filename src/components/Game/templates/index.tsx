// Import component style
import "./style/index.scss";
// Import React library
import React from "react";
// Import components
import Board from "../../Board";
import LoadGame from "../../LoadGame";
// Import reactstrap components
import { Alert, Button, ButtonGroup, Progress } from "reactstrap";

type Props = {
draw: boolean,
won: boolean,
status: string,
restartClick: Function,
history: string[][][],
getButtonColor: Function,
jump: Function,
progress: number
};

export default (p: Props) =>

<div className="container">
    <div className="row">
        <div className="col-6">
            <Board />
        </div>

        <div className="col-6">
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

            {(p.history.length > 1) ?
            <div className="history">
                <p>History steps:</p>

                <ButtonGroup size="sm">
                    {p.history.map((ev: object, i: number) =>
                    <Button size="sm" key={i.toString()} color={p.getButtonColor(i)} onClick={()=> p.jump(i)}>
                        {i}
                    </Button>
                    )}
                </ButtonGroup>
            </div>
            : null}

            <div className="controls">
                <ButtonGroup size="sm">
                    {(p.history.length > 0) ?
                    <Button color="info" size="sm" onClick={()=> p.restartClick()}>
                        Restart
                    </Button>
                    : null}

                    <LoadGame />
                </ButtonGroup>
            </div>
        </div>
    </div>
</div>