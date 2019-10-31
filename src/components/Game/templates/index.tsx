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
            <div className="row">
                <div className="col-6">
                    {(p.history.length > 0) ?
                        <Button
                            color="danger"
                            size="sm"
                            onClick={() => p.restartClick()}>
                                Restart
                        </Button>
                    : null}

                    {(p.history.length > 1) ?
                        <ButtonGroup vertical size="sm">
                            {p.history.map((ev: object, i: number) =>
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

                <div className="col-6">
                    <LoadGame />
                </div>
            </div>
        </div>
    </div>
</div>