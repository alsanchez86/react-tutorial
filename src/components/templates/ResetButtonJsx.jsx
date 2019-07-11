// React
import React from "react";
// Reacstrap
import { Button } from "reactstrap";

/**
 * Reset button JSX template
 *
 * @param {object} p
 * @returns
 */
const ResetButtonJsx = (p) => (
    <Button
        color="danger"
        size="sm"
        onClick={p.onClick}>
            Restart
    </Button>
);

export default ResetButtonJsx;